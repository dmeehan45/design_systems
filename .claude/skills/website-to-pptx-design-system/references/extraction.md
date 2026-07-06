# Extraction guide

How to get the site's *real* visual language into your hands, and what to do when you can't.

## Which pages to capture

Homepages are marketing-optimized outliers. A design *system* lives in the patterns that repeat across pages, so capture a spread:

- **Homepage** — the brand's loudest statement (hero type, primary color, motif).
- **One content-heavy page** — docs, blog post, about — shows body type, links, real text rhythm.
- **One product/feature page** — shows cards, screenshots, data, the working UI palette.
- **Any page with strong brand styling** — pricing and "customers" pages are often the most designed.

Three to four pages is plenty. Pass them all in one run so the audit aggregates them.

## Running the extractor

```bash
python scripts/extract_site.py https://theirsite.com \
  --pages https://theirsite.com/product https://theirsite.com/pricing \
  --out ./site-extract
```

Options: `--viewport 1440x900` (desktop is the right frame for a deck — avoid narrow mobile layouts), `--no-full-page` (skip the tall screenshots if you only need the fold).

It also works on a **local HTML file** (`python scripts/extract_site.py ./saved.html`) — handy when the user pastes source or saves a page.

The browser is pre-installed in provisioned environments; the script auto-detects it even when the Playwright package and the installed Chromium build differ. **Do not run `playwright install`.**

## Reading the output

Read `audit.md` first (the digest), then open `audit.json` for the full ranked lists, then **view the screenshots**. Numbers and pixels answer different questions — use both.

How to turn measurements into a palette:

- **Backgrounds ranked by painted area** → your **surfaces**. The largest-area color is almost always the page **ground**; the next is the **card/surface** color; a large dark one often signals a **dark section** (footer, CTA band) you can reuse for title/closing slides.
- **Text colors by count** → your **ink**. The most common is primary text; lighter ones are secondary/muted text.
- **Border colors** → your **border/divider** token.
- **The CTA block** (`cta` in JSON) → the truest read on the **brand primary** and its on-color, because a site puts its strongest color on the primary button. Its radius and padding tell you the brand's shape language.
- **`cssCustomProperties`** → if present, the site is token-driven and these are the *designer's own names and values*. Prefer them over anything inferred — they're the source of truth (e.g. `--brand-500`, `--accent`, `--radius`).
- **Font families by count** → body font is the high-count one; the heading font shows up on `h1`/`h2`. The digest already splits `heading` vs `body`.
- **Font sizes seen** → the raw type scale. You won't copy these to slides (web sizes ≠ slide sizes), but the *ratio* between heading and body tells you how much contrast the brand wants.
- **Radii / shadows** → the shape and depth language: pill buttons (`999px`) vs sharp corners; soft ambient shadows vs hard edges vs none.

Accent detection: the accent is usually a color that appears with **small area but high salience** — a CTA background, a kicker/eyebrow label, a highlighted stat. It won't top the area ranking. Look for it in the CTA, in `cssCustomProperties` (often literally named `--accent`), and in the screenshots.

## Read from the screenshots (what the audit can't measure)

Numbers give you values; the screenshots give you *judgment*. As you look, name each of these concretely — they feed the Brand Read (Section 1), Imagery (Section 8), and Layout (Section 6):

- **Business category and audience** — who is this for? (developers, enterprise buyers, consumers, clinicians…)
- **Brand personality** — the adjective *and the specific move that produces it*. Not "premium" but "tons of whitespace, one hairline weight, no color except a single accent."
- **Visual density and whitespace** — airy or packed? This sets how much you strip for slides.
- **Imagery register** — photography vs illustration vs product UI vs abstract; human or technical; saturated or muted.
- **Icon style** — line vs filled, weight, whether they sit in shapes.
- **Shape language** — rounded vs sharp (the radii confirm it), soft shadows vs hard edges vs flat.
- **CTA style** — what the brand's most emphatic element looks like (this becomes your callout style).
- **Content hierarchy** — how the site ranks a headline over supporting text over metadata; mirror that ordering on slides.
- **Motion cues** *(if a recording or obvious animation is visible)* — note them, then mostly discard: slides don't scroll-reveal.

If several pages disagree, trust the pattern that **repeats**. A one-off campaign page is not the system.

## Fallback chain (site unreachable)

Some environments block outbound traffic to arbitrary hosts by network policy, and some pages sit behind logins. If the extractor reports every page failed, fall back in this order:

1. **WebFetch tool** — fetch the URL and read the returned HTML/CSS. You won't get computed styles or screenshots, but you can read declared `color:`/`background:` values, font stacks, and `:root` custom properties from inlined or linked CSS. Good for exact values; poor for feel.
2. **Ask for screenshots.** Request: homepage (full page if possible), one content page, one product page, and any strongly-branded page. Screenshots are the richest single fallback — you can read color, type personality, spacing, imagery, and tone directly. Values you pull from a compressed screenshot are `approx`, not `measured`.
3. **Existing brand assets.** A logo file, a brand PDF, or an existing deck pins down exact colors and fonts — ask if one exists.

## Evidence labeling

Carry a `measured` / `approx` tag through to the Color and Typography sections:

- From `audit.json` or `cssCustomProperties`, or clearly legible in a screenshot → **`measured`**.
- Eyeballed from a compressed image, or reconstructed without site access → **`approx`**, with a note on what it's based on.

This is not bureaucracy. A designer who trusts a wrong "exact" hex ships an off-brand deck; an honestly-labeled approximation gets sanity-checked. Honesty is what makes the system safe to use.
