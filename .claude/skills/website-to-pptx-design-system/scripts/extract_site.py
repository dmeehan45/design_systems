#!/usr/bin/env python3
"""
extract_site.py — Capture the measurable visual language of a web page.

Why this exists: the hardest part of turning a website into a design system is
resisting the urge to *guess* colors, fonts, and sizes. This script renders the
page in a real browser and reads the *computed* styles, so the palette and type
scale you hand off are measured, not invented. It also saves screenshots so you
can read the brand the way a designer does — with your eyes.

Output (written to --out, default ./site-extract/):
  - <name>.full.png       full-page screenshot (how the brand reads while scrolling)
  - <name>.fold.png       above-the-fold screenshot (the first impression)
  - audit.json            structured measurements for every page (machine-readable)
  - audit.md              a short, human-readable digest of the measurements

Usage:
  python extract_site.py https://example.com
  python extract_site.py https://example.com --pages https://example.com/pricing https://example.com/product
  python extract_site.py ./saved-homepage.html          # works on a local HTML file too
  python extract_site.py https://example.com --out ./acme-extract --viewport 1440x900

Requires Playwright + a Chromium build. In a properly provisioned environment
both are already present (do NOT run `playwright install`). If the browser can't
launch or the target site is blocked by a network policy, this script fails
loudly with guidance — fall back to the WebFetch tool or ask the user for
screenshots (see references/extraction.md).
"""
import argparse
import json
import os
import re
import sys
from pathlib import Path
from urllib.parse import urlparse

# --- In-page audit -----------------------------------------------------------
# Runs inside the page. Reads getComputedStyle for a capped sample of elements
# and returns a compact summary. Kept dependency-free and defensive so a weird
# page can't crash the whole run.
AUDIT_JS = r"""
() => {
  const MAX = 5000;                       // cap element walk for performance
  const els = Array.from(document.querySelectorAll('*')).slice(0, MAX);

  const toHex = (c) => {
    if (!c) return null;
    const m = c.match(/rgba?\(([^)]+)\)/i);
    if (!m) return null;
    const p = m[1].split(',').map(s => s.trim());
    const a = p.length > 3 ? parseFloat(p[3]) : 1;
    if (a === 0) return null;             // fully transparent → not a real color
    const [r, g, b] = p.slice(0, 3).map(n => Math.max(0, Math.min(255, parseInt(n, 10))));
    if ([r, g, b].some(n => Number.isNaN(n))) return null;
    return '#' + [r, g, b].map(n => n.toString(16).padStart(2, '0')).join('').toUpperCase();
  };

  const bump = (map, key, by = 1) => { if (key == null) return; map[key] = (map[key] || 0) + by; };
  const top = (map, n = 14) => Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, n)
                                     .map(([k, v]) => ({ value: k, weight: Math.round(v) }));
  const fam0 = (ff) => (ff || '').split(',')[0].replace(/["']/g, '').trim();

  // Non-visual tags carry the browser's *initial* font ("Times New Roman" in
  // Chromium) and would pollute the tallies. Skip them, and skip anything with
  // no painted area. HTML/BODY stay in — they carry the page's ground background,
  // and the hasOwnText gate below keeps them out of the font/ink tallies.
  const SKIP = new Set(['HEAD', 'META', 'TITLE', 'STYLE', 'SCRIPT', 'LINK', 'BASE', 'NOSCRIPT']);
  const hasOwnText = (el) => Array.from(el.childNodes).some(n => n.nodeType === 3 && n.textContent.trim().length > 0);

  const bgArea = {};   // background colors weighted by painted area (dominant surface wins)
  const textCt = {};   // ink colors, counted only where an element paints its own text
  const borderCt = {};
  const familyCt = {}; // font-family (first family) by count, visible elements only
  const sizeCt = {};   // font-size by count
  const weightCt = {};
  const radiusCt = {};
  const shadowSet = {};
  const gapCt = {};

  for (const el of els) {
    if (SKIP.has(el.tagName)) continue;
    const s = getComputedStyle(el);
    if (s.display === 'none' || s.visibility === 'hidden') continue;
    const r = el.getBoundingClientRect();
    const area = Math.max(0, r.width) * Math.max(0, r.height);
    if (area <= 0) continue;

    const bg = toHex(s.backgroundColor);
    if (bg) bump(bgArea, bg, area);

    if (hasOwnText(el)) {
      const tc = toHex(s.color);
      if (tc) bump(textCt, tc, 1);
      bump(familyCt, fam0(s.fontFamily), 1);
      const fs = Math.round(parseFloat(s.fontSize) || 0);
      if (fs) bump(sizeCt, fs + 'px', 1);
      if (s.fontWeight) bump(weightCt, s.fontWeight, 1);
    }

    const bc = toHex(s.borderTopColor);
    if (bc && (parseFloat(s.borderTopWidth) || 0) > 0) bump(borderCt, bc, 1);

    const rad = s.borderTopLeftRadius;
    if (rad && rad !== '0px') bump(radiusCt, rad, 1);

    if (s.boxShadow && s.boxShadow !== 'none') shadowSet[s.boxShadow] = (shadowSet[s.boxShadow] || 0) + 1;

    for (const g of [s.rowGap, s.columnGap, s.gap]) {
      if (g && g !== 'normal' && g !== '0px') bump(gapCt, g, 1);
    }
  }

  // Heading vs body fonts — the single most useful typographic split.
  const famOf = (el) => el ? fam0(getComputedStyle(el).fontFamily) : null;
  const sizeOf = (el) => el ? Math.round(parseFloat(getComputedStyle(el).fontSize)) + 'px' : null;
  const wtOf = (el) => el ? getComputedStyle(el).fontWeight : null;
  const h1 = document.querySelector('h1') || document.querySelector('h2');
  // The *first* <p> is often a kicker/eyebrow; the longest run of text is a far
  // better sample of true body copy.
  const p = Array.from(document.querySelectorAll('p'))
    .filter(el => hasOwnText(el))
    .sort((a, b) => b.textContent.trim().length - a.textContent.trim().length)[0] || null;

  // CTA / button styling — needed to translate web buttons into slide callouts.
  const cta = (document.querySelector('a[class*="btn"], button, a[role="button"], [class*="button"]'));
  const ctaStyle = cta ? (() => {
    const s = getComputedStyle(cta);
    return {
      text: (cta.textContent || '').trim().slice(0, 40),
      bg: toHex(s.backgroundColor), color: toHex(s.color),
      radius: s.borderTopLeftRadius, padding: s.padding,
      fontWeight: s.fontWeight, textTransform: s.textTransform,
    };
  })() : null;

  // :root custom properties — if the site is token-driven, this is a goldmine.
  const rootVars = {};
  try {
    const rs = getComputedStyle(document.documentElement);
    for (let i = 0; i < rs.length; i++) {
      const prop = rs[i];
      if (prop.startsWith('--')) {
        const val = rs.getPropertyValue(prop).trim();
        if (val) rootVars[prop] = val.slice(0, 60);
      }
    }
  } catch (e) { /* ignore */ }

  const meta = (sel, attr = 'content') => { const n = document.querySelector(sel); return n ? n.getAttribute(attr) : null; };
  const logo = document.querySelector('header img, [class*="logo" i] img, a[href="/"] img, img[alt*="logo" i]');

  return {
    url: location.href,
    title: document.title || null,
    description: meta('meta[name="description"]') || meta('meta[property="og:description"]'),
    ogImage: meta('meta[property="og:image"]'),
    themeColor: meta('meta[name="theme-color"]'),
    logo: logo ? { src: logo.currentSrc || logo.src, alt: logo.alt || null } : null,
    elementsSampled: els.length,
    colors: {
      backgroundsByArea: top(bgArea),
      textByCount: top(textCt),
      bordersByCount: top(borderCt, 8),
    },
    typography: {
      familiesByCount: top(familyCt, 8),
      sizesByCount: top(sizeCt, 16),
      weightsByCount: top(weightCt, 8),
      heading: h1 ? { family: famOf(h1), size: sizeOf(h1), weight: wtOf(h1), sample: (h1.textContent || '').trim().slice(0, 60) } : null,
      body: p ? { family: famOf(p), size: sizeOf(p), weight: wtOf(p) } : null,
    },
    shape: {
      radiiByCount: top(radiusCt, 8),
      shadows: Object.entries(shadowSet).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([k, v]) => ({ value: k, weight: v })),
      gapsByCount: top(gapCt, 8),
    },
    cta: ctaStyle,
    cssCustomProperties: rootVars,
  };
}
"""


def slugify(u: str) -> str:
    parsed = urlparse(u)
    base = (parsed.netloc + parsed.path) if parsed.scheme in ("http", "https") else Path(u).stem
    s = re.sub(r"[^a-zA-Z0-9]+", "-", base).strip("-").lower()
    return s or "page"


def to_target(arg: str) -> str:
    """Accept an http(s) URL or a local file path; return a navigable URL."""
    if re.match(r"^https?://", arg):
        return arg
    p = Path(arg).expanduser().resolve()
    if p.exists():
        return p.as_uri()
    return arg  # let the browser surface the error


def find_installed_chromium():
    """Locate a Chromium binary under PLAYWRIGHT_BROWSERS_PATH.

    Managed environments often ship a browser build that differs from the one the
    installed Playwright *package* expects, so `launch()` fails asking you to
    download. We don't want to download — we point Playwright at what's already
    here. Returns a path string or None.
    """
    import glob
    root = os.environ.get("PLAYWRIGHT_BROWSERS_PATH", "")
    if not root:
        return None
    # The convenient symlink first (present in most managed envs), then globs.
    candidates = [os.path.join(root, "chromium")]
    candidates += sorted(glob.glob(os.path.join(root, "chromium-*/chrome-linux/chrome")), reverse=True)
    candidates += sorted(glob.glob(os.path.join(root, "chromium-*/chrome-mac*/Chromium.app/Contents/MacOS/Chromium")), reverse=True)
    candidates += sorted(glob.glob(os.path.join(root, "chromium_headless_shell-*/chrome-linux/headless_shell")), reverse=True)
    for c in candidates:
        if os.path.exists(c) and os.access(c, os.X_OK):
            return c
    return None


def launch_chromium(pw):
    """Try a normal launch; if the expected browser build is missing, retry with
    an installed binary. Raises RuntimeError with fallback guidance on total failure."""
    try:
        return pw.chromium.launch(headless=True)
    except Exception as e:
        exe = find_installed_chromium()
        if exe:
            print(f"[extract] default browser unavailable; using installed binary: {exe}", file=sys.stderr)
            try:
                return pw.chromium.launch(headless=True, executable_path=exe)
            except Exception as e2:
                raise RuntimeError(f"launch with executable_path failed: {e2}")
        raise RuntimeError(str(e))


def audit_page(page, url, out_dir, name, full_page):
    result = {"requestedUrl": url}
    page.goto(url, wait_until="load", timeout=45000)
    try:
        page.wait_for_load_state("networkidle", timeout=8000)
    except Exception:
        pass  # networkidle is a nicety, not a requirement
    page.wait_for_timeout(600)  # let late fonts/CSS settle

    fold = out_dir / f"{name}.fold.png"
    full = out_dir / f"{name}.full.png"
    page.screenshot(path=str(fold), full_page=False)
    page.screenshot(path=str(full), full_page=full_page)
    result["screenshots"] = {"fold": str(fold), "full": str(full)}
    result.update(page.evaluate(AUDIT_JS))
    return result


def render_digest(pages):
    """A compact markdown digest — the part a model reads first."""
    lines = ["# Site extraction digest", ""]
    for pg in pages:
        if pg.get("error"):
            lines += [f"## {pg['requestedUrl']}", f"> extraction failed: {pg['error']}", ""]
            continue
        c, t, sh = pg["colors"], pg["typography"], pg["shape"]
        lines.append(f"## {pg.get('title') or pg['requestedUrl']}")
        lines.append(f"`{pg['url']}`  · sampled {pg['elementsSampled']} elements")
        if pg.get("description"):
            lines.append(f"- meta description: {pg['description'][:160]}")
        if pg.get("themeColor"):
            lines.append(f"- theme-color: `{pg['themeColor']}`")
        lines.append("")
        lines.append("**Backgrounds (by painted area):** " + ", ".join(f"`{x['value']}`" for x in c["backgroundsByArea"][:8]))
        lines.append("**Text colors (by count):** " + ", ".join(f"`{x['value']}`" for x in c["textByCount"][:8]))
        if c["bordersByCount"]:
            lines.append("**Border colors:** " + ", ".join(f"`{x['value']}`" for x in c["bordersByCount"][:6]))
        lines.append("")
        lines.append("**Font families (by count):** " + ", ".join(f"{x['value']} ({x['weight']})" for x in t["familiesByCount"][:6]))
        if t.get("heading"):
            h = t["heading"]
            lines.append(f"**Heading (h1):** {h['family']} · {h['size']} · weight {h['weight']}")
        if t.get("body"):
            b = t["body"]
            lines.append(f"**Body (p):** {b['family']} · {b['size']} · weight {b['weight']}")
        lines.append("**Font sizes seen:** " + ", ".join(x["value"] for x in t["sizesByCount"][:12]))
        lines.append("")
        if sh["radiiByCount"]:
            lines.append("**Border radii:** " + ", ".join(x["value"] for x in sh["radiiByCount"][:6]))
        if sh["shadows"]:
            lines.append(f"**Shadows in use:** {len(sh['shadows'])} distinct (see audit.json)")
        if pg.get("cta"):
            cta = pg["cta"]
            lines.append(f"**Primary CTA:** \"{cta.get('text')}\" — bg `{cta.get('bg')}`, text `{cta.get('color')}`, radius {cta.get('radius')}")
        if pg.get("cssCustomProperties"):
            n = len(pg["cssCustomProperties"])
            lines.append(f"**CSS custom properties on :root:** {n} found — this site is token-driven; prefer these exact values (see audit.json).")
        lines.append("")
        lines.append(f"Screenshots: `{Path(pg['screenshots']['fold']).name}` (fold), `{Path(pg['screenshots']['full']).name}` (full)")
        lines.append("")
    lines.append("---")
    lines.append("_Colors and sizes above are **measured** from computed styles. Anything you add beyond this — "
                 "inferred accents, brand feel, adaptation choices — should be labeled as inferred in the design system._")
    return "\n".join(lines)


def main():
    ap = argparse.ArgumentParser(description="Capture the measurable visual language of a web page.")
    ap.add_argument("url", help="Page URL (http/https) or a local HTML file path")
    ap.add_argument("--pages", nargs="*", default=[], help="Additional pages (compare across them for repeated patterns)")
    ap.add_argument("--out", default="./site-extract", help="Output directory (default ./site-extract)")
    ap.add_argument("--viewport", default="1440x900", help="Viewport WxH (default 1440x900 — a common desktop)")
    ap.add_argument("--no-full-page", action="store_true", help="Skip tall full-page screenshots (fold only)")
    args = ap.parse_args()

    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        sys.exit(
            "ERROR: Playwright is not importable.\n"
            "In a provisioned environment it is pre-installed — do NOT run `playwright install`.\n"
            "If you are elsewhere: `pip install playwright && playwright install chromium`.\n"
            "Can't install? Fall back to the WebFetch tool or ask the user for screenshots "
            "(see references/extraction.md)."
        )

    try:
        vw, vh = (int(x) for x in args.viewport.lower().split("x"))
    except Exception:
        vw, vh = 1440, 900

    out_dir = Path(args.out).expanduser().resolve()
    out_dir.mkdir(parents=True, exist_ok=True)

    targets = [args.url] + list(args.pages)
    pages_data = []

    with sync_playwright() as pw:
        try:
            browser = launch_chromium(pw)
        except Exception as e:
            sys.exit(
                f"ERROR: could not launch Chromium: {e}\n"
                "The browser binary may be missing or blocked. Fall back to the WebFetch tool "
                "or ask the user for screenshots (see references/extraction.md)."
            )
        ctx = browser.new_context(viewport={"width": vw, "height": vh}, device_scale_factor=2)
        page = ctx.new_page()

        for i, raw in enumerate(targets):
            target = to_target(raw)
            name = slugify(raw)
            # de-dup names across pages
            name = f"{i:02d}-{name}"[:60]
            print(f"[extract] {target} -> {name}", file=sys.stderr)
            try:
                pages_data.append(audit_page(page, target, out_dir, name, not args.no_full_page))
            except Exception as e:
                print(f"[extract] FAILED {target}: {e}", file=sys.stderr)
                pages_data.append({"requestedUrl": target, "error": str(e)})

        browser.close()

    audit = {"viewport": {"width": vw, "height": vh}, "pages": pages_data}
    (out_dir / "audit.json").write_text(json.dumps(audit, indent=2))
    (out_dir / "audit.md").write_text(render_digest(pages_data))

    ok = [p for p in pages_data if not p.get("error")]
    print(f"\nWrote {out_dir}/audit.json and audit.md")
    print(f"Pages captured: {len(ok)}/{len(pages_data)}")
    if not ok:
        sys.exit(
            "\nERROR: every page failed to load (network policy, offline, or bad URL).\n"
            "Fall back to the WebFetch tool or ask the user for screenshots (see references/extraction.md)."
        )
    print("Next: open audit.md, view the .full.png / .fold.png screenshots, then build the design system.")


if __name__ == "__main__":
    main()
