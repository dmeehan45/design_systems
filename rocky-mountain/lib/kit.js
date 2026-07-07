// Rocky Mountain — shared deck kit.
// Design tokens, drawing/builder helpers, and the two renderers (pptx + HTML
// preview). A "kit" is created per deck via makeKit(config); flavors push slides
// onto kit.deck using the helpers, then render(deck) emits the file(s).
const pptxgen = require("pptxgenjs");
const sharp = require("sharp");
const fs = require("fs");

// ---- Rocky Mountain design tokens ----
const T = {
  INK: "181818", MUTED: "8E8E8E", GROUND: "FFFFFF", DARK: "16181C",
  PERI: "5A6CE6", MINT: "BCEFCB", LAV: "E7E3F5", BUTTER: "F3EEA0",
  BORDER: "E6E6E6", LGRAY: "F4F4F4", PHOTO: "EFEDF7", MUTED_D: "A8ABB5",
  HEAD: "Calibri", BODY: "Calibri", PAGEW: 13.333, PAGEH: 7.5, MX: 0.85,
};
const mkShadow = () => ({ type: "outer", color: "20232A", blur: 9, offset: 3, angle: 90, opacity: 0.1 });

// Abstract particle-field hero (neutral "intelligence/data" visual).
function makePointCloud(outPath) {
  const W = 1300, H = 1040, cx = W * 0.52, cy = H * 0.52; let c = "";
  for (let i = 0; i < 950; i++) {
    const t = Math.random() * 6.283, rr = Math.pow(Math.random(), 0.6);
    let ex = Math.cos(t) * rr * (W * 0.34), ey = Math.sin(t) * rr * (H * 0.22);
    const a = -0.32, x = cx + ex * Math.cos(a) - ey * Math.sin(a), y = cy + ex * Math.sin(a) + ey * Math.cos(a);
    c += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(1.3 + Math.random() * 2.6).toFixed(1)}" fill="#7C8AF0" fill-opacity="${(0.35 + Math.random() * 0.6).toFixed(2)}"/>`;
  }
  return sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">${c}</svg>`)).png().toFile(outPath);
}

// config: { brand, footer, cloud }
function makeKit(config) {
  const { INK, MUTED, GROUND, DARK, PERI, MINT, LAV, BUTTER, BORDER, LGRAY, PHOTO, MUTED_D, HEAD, BODY, PAGEW, PAGEH, MX } = T;
  const deck = [];
  const slide = (bg) => { const s = { bg, notes: "", it: [] }; deck.push(s); return s; };
  const R = (s, o) => s.it.push({ k: "rect", ...o });
  const RR = (s, o) => s.it.push({ k: "rrect", ...o });
  const EL = (s, o) => s.it.push({ k: "oval", ...o });
  const LN = (s, o) => s.it.push({ k: "line", ...o });
  const TX = (s, o) => s.it.push({ k: "text", ...o });
  const IM = (s, o) => s.it.push({ k: "image", ...o });
  // Polyline through absolute inch points [[x,y],...] — for the sparse trend
  // lines the design system allows (periwinkle, no gridlines, directly labeled).
  const POLY = (s, o) => s.it.push({ k: "poly", ...o });

  function eyebrow(s, label, x, y, dot = PERI, tc = MUTED) {
    EL(s, { x, y: y + 0.03, w: 0.12, h: 0.12, fill: dot });
    TX(s, { x: x + 0.22, y: y - 0.07, w: 8, h: 0.32, str: label.toUpperCase(), s: 11, b: true, c: tc, cs: 2, va: "middle" });
  }
  function twoTone(s, l1, l2, x, y, w, size = 30, c2 = MUTED) {
    TX(s, { x, y, w, h: size / 20, s: size, b: true, ls: 1.02, runs: [{ t: l1, c: INK, br: true }, { t: l2, c: c2 }] });
  }
  const hairline = (s, x, y, w, c = BORDER) => LN(s, { x, y, w, h: 0, c, wt: 0.75 });
  function footer(s, n, dark = false) {
    const c = dark ? MUTED_D : MUTED;
    TX(s, { x: MX, y: 7.02, w: 8, h: 0.3, str: config.footer, s: 8.5, c, cs: 1, va: "middle" });
    TX(s, { x: PAGEW - MX - 2, y: 7.02, w: 2, h: 0.3, str: String(n), s: 8.5, c, al: "right", cs: 1, va: "middle" });
  }
  function statBlock(s, num, cap, x, y, w, nc = INK, cc = MUTED, ns = 40, rule = true) {
    TX(s, { x, y, w, h: ns / 46, str: num, s: ns, b: true, c: nc });
    TX(s, { x, y: y + ns / 46 + 0.02, w, h: 0.35, str: cap, s: 12.5, c: cc });
    if (rule) hairline(s, x, y + ns / 46 + 0.5, w, nc === "FFFFFF" ? "3A3D45" : BORDER);
  }
  function pill(s, text, x, y, w, fill, tc) {
    RR(s, { x, y, w, h: 0.5, rad: 0.25, fill });
    TX(s, { x, y, w, h: 0.5, str: text, s: 12.5, b: true, c: tc, al: "center", va: "middle" });
  }
  function photo(s, x, y, w, h, caption, tint = PHOTO) {
    RR(s, { x, y, w, h, rad: 0.12, fill: tint, line: { c: "DED9EC", w: 1 } });
    const cx = x + w / 2, cy = y + h / 2;
    RR(s, { x: cx - 0.34, y: cy - 0.6, w: 0.68, h: 0.52, rad: 0.06, fill: tint, line: { c: "B9B2D4", w: 1.5 } });
    EL(s, { x: cx + 0.02, y: cy - 0.5, w: 0.12, h: 0.12, fill: "B9B2D4" });
    LN(s, { x: cx - 0.28, y: cy - 0.16, w: 0.56, h: 0, c: "B9B2D4", wt: 1.5 });
    TX(s, { x: x + 0.4, y: cy + 0.08, w: w - 0.8, h: 0.5, str: caption, s: 11.5, i: true, c: "8E88A6", al: "center", va: "middle" });
  }
  function wordmark(s, color) {
    EL(s, { x: MX, y: 0.5, w: 0.26, h: 0.26, fill: MINT });
    TX(s, { x: MX + 0.34, y: 0.44, w: 4.5, h: 0.4, str: config.brand, s: 16, b: true, c: color, va: "middle" });
  }
  // status chip (label + colored dot) for dark UI panels / scorecards
  function statusRow(s, x, y, w, name, status, col) {
    RR(s, { x, y, w, h: 0.72, rad: 0.08, fill: "20232B" });
    EL(s, { x: x + 0.27, y: y + 0.26, w: 0.2, h: 0.2, fill: col });
    TX(s, { x: x + 0.6, y, w: w - 2.05, h: 0.72, str: name, s: 12.5, c: "EDEDF2", va: "middle" });
    TX(s, { x: x + w - 1.45, y, w: 1.15, h: 0.72, str: status, s: 12, b: true, c: col, al: "right", va: "middle" });
  }

  return { ...T, config, cloud: config.cloud, deck, slide, R, RR, EL, LN, TX, IM, POLY,
    eyebrow, twoTone, hairline, footer, statBlock, pill, photo, wordmark, statusRow };
}

// ---- Renderers ----
function renderPptx(deck, out, meta = {}) {
  const { INK, HEAD, PAGEW, PAGEH } = T;
  const p = new pptxgen();
  p.defineLayout({ name: "RM", width: PAGEW, height: PAGEH }); p.layout = "RM";
  p.author = meta.author || "Rocky Mountain"; p.title = meta.title || "Rocky Mountain deck";
  for (const sl of deck) {
    const g = p.addSlide(); g.background = { color: sl.bg };
    for (const o of sl.it) {
      if (o.k === "rect" || o.k === "rrect") {
        const opt = { x: o.x, y: o.y, w: o.w, h: o.h, fill: { color: o.fill } };
        if (o.k === "rrect") opt.rectRadius = o.rad;
        if (o.line) opt.line = { color: o.line.c, width: o.line.w };
        if (o.shadow) opt.shadow = mkShadow();
        g.addShape(o.k === "rrect" ? "roundRect" : "rect", opt);
      } else if (o.k === "oval") {
        const opt = { x: o.x, y: o.y, w: o.w, h: o.h, fill: { color: o.fill } };
        if (o.line) opt.line = { color: o.line.c, width: o.line.w };
        g.addShape("ellipse", opt);
      } else if (o.k === "line") {
        g.addShape("line", { x: o.x, y: o.y, w: o.w, h: o.h, line: { color: o.c, width: o.wt } });
      } else if (o.k === "poly") {
        for (let i = 0; i < o.pts.length - 1; i++) {
          const [x1, y1] = o.pts[i], [x2, y2] = o.pts[i + 1];
          const dx = x2 - x1, dy = y2 - y1;
          g.addShape("line", { x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.abs(dx), h: Math.abs(dy),
            line: { color: o.c, width: o.wt }, flipV: (dx < 0) !== (dy < 0) });
        }
      } else if (o.k === "image") {
        g.addImage({ path: o.path, x: o.x, y: o.y, w: o.w, h: o.h, altText: o.alt || "" });
      } else if (o.k === "text") {
        const common = { x: o.x, y: o.y, w: o.w, h: o.h, fontFace: HEAD, fontSize: o.s, bold: !!o.b, italic: !!o.i,
          color: o.c || INK, align: o.al || "left", valign: o.va || "top", margin: 0 };
        if (o.cs) common.charSpacing = o.cs;
        if (o.ls) common.lineSpacingMultiple = o.ls;
        if (o.pas) common.paraSpaceAfter = o.pas;
        if (o.bullets) g.addText(o.bullets.map(t => ({ text: t, options: { bullet: { indent: 16 }, breakLine: true, color: o.c || INK } })), common);
        else if (o.runs) g.addText(o.runs.map(r => ({ text: r.t, options: { bold: r.b != null ? r.b : !!o.b, italic: !!r.i, color: r.c || o.c || INK, breakLine: !!r.br } })), common);
        else g.addText(o.str, common);
      }
    }
    if (sl.notes) g.addNotes(sl.notes);
  }
  return p.writeFile({ fileName: out });
}

function esc(t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function renderHtml(deck, htmlPath) {
  const PX = 96, sw = T.PAGEW * PX, sh = T.PAGEH * PX; let body = "";
  for (const sl of deck) {
    let inner = "";
    for (const o of sl.it) {
      const L = o.x * PX, Tp = o.y * PX, W = o.w * PX, H = (o.h || 0) * PX;
      if (o.k === "rect" || o.k === "rrect") {
        const rad = o.k === "rrect" ? `border-radius:${o.rad * PX}px;` : "";
        const bd = o.line ? `border:${o.line.w}px solid #${o.line.c};` : "";
        const sh2 = o.shadow ? "box-shadow:0 3px 9px rgba(32,35,42,0.14);" : "";
        inner += `<div style="position:absolute;left:${L}px;top:${Tp}px;width:${W}px;height:${H}px;background:#${o.fill};${rad}${bd}${sh2}box-sizing:border-box"></div>`;
      } else if (o.k === "oval") {
        const bd = o.line ? `border:${o.line.w}px solid #${o.line.c};` : "";
        inner += `<div style="position:absolute;left:${L}px;top:${Tp}px;width:${W}px;height:${H}px;background:#${o.fill};border-radius:50%;${bd}box-sizing:border-box"></div>`;
      } else if (o.k === "line") {
        inner += `<div style="position:absolute;left:${L}px;top:${Tp}px;width:${W || o.wt}px;height:${H || Math.max(1, o.wt)}px;background:#${o.c}"></div>`;
      } else if (o.k === "poly") {
        const pts = o.pts.map(([x, y]) => `${(x * PX).toFixed(1)},${(y * PX).toFixed(1)}`).join(" ");
        inner += `<svg style="position:absolute;left:0;top:0;width:${sw}px;height:${sh}px;overflow:visible" viewBox="0 0 ${sw} ${sh}"><polyline points="${pts}" fill="none" stroke="#${o.c}" stroke-width="${(o.wt * 1.33).toFixed(2)}" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
      } else if (o.k === "image") {
        inner += `<img src="file://${o.path}" style="position:absolute;left:${L}px;top:${Tp}px;width:${W}px;height:${H}px;object-fit:contain"/>`;
      } else if (o.k === "text") {
        const fs = o.s * 1.3333, al = o.al || "left";
        const va = o.va === "middle" ? "center" : o.va === "bottom" ? "flex-end" : "flex-start";
        const cs = o.cs ? `letter-spacing:${o.cs * 1.1}px;` : "", lh = o.ls ? `line-height:${o.ls};` : "line-height:1.12;";
        let content;
        if (o.bullets) content = o.bullets.map(t => `<div style="margin-bottom:${o.pas || 6}px;position:relative;padding-left:16px"><span style="position:absolute;left:0">•</span>${esc(t)}</div>`).join("");
        else if (o.runs) {
          const lines = [[]]; o.runs.forEach(r => { lines[lines.length - 1].push(r); if (r.br) lines.push([]); });
          if (!lines[lines.length - 1].length) lines.pop();
          content = lines.map(ln => `<div>${ln.map(r => `<span style="color:#${r.c || o.c || "181818"};font-weight:${(r.b != null ? r.b : o.b) ? 700 : 400}">${esc(r.t)}</span>`).join("")}</div>`).join("");
        } else content = esc(o.str);
        inner += `<div style="position:absolute;left:${L}px;top:${Tp}px;width:${W}px;height:${H}px;display:flex;flex-direction:column;justify-content:${va};color:#${o.c || "181818"};font-weight:${o.b ? 700 : 400};font-style:${o.i ? "italic" : "normal"};font-size:${fs}px;text-align:${al};${cs}${lh}overflow:hidden">${content}</div>`;
      }
    }
    body += `<div class="slide" style="width:${sw}px;height:${sh}px;background:#${sl.bg};position:relative;overflow:hidden;margin:0 auto 26px;box-shadow:0 2px 20px rgba(0,0,0,0.18)">${inner}</div>`;
  }
  fs.writeFileSync(htmlPath, `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box;font-family:Calibri,Carlito,'Segoe UI','Liberation Sans',system-ui,sans-serif}
  body{background:#555;padding:26px}</style></head><body>${body}</body></html>`);
}

module.exports = { T, mkShadow, makeKit, makePointCloud, renderPptx, renderHtml };
