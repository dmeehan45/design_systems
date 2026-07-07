#!/usr/bin/env node
// Rocky Mountain — standalone builder for the redesigned Teton closing slide.
//
// A deliberately simple two-column close:
//
//   Header (full width)   — eyebrow + title + one-line subtitle
//   Left  column          — the six-month plan, as a vertical timeline
//   Right column (stack)  — the North Star anchor, then how it shows up in the
//                           operational cycle, then the renewal-story payoff
//
// The North Star is the visual anchor (a dark rounded panel whose
// "Week 2, not Week 12" is the single largest phrase). Copy is kept short —
// the presenter speaks the rest.
//
//   node closing-slide.js            # writes closing-slide.pptx (+ build/ preview)
//
// All content is sample/illustrative.
const path = require("path");
const fs = require("fs");
const { makeKit, renderPptx, renderHtml } = require("./lib/kit");

const K = makeKit({ brand: "Teton", footer: "Teton  ·  Product recommendation" });
const { slide, RR, EL, LN, TX, eyebrow, footer,
  INK, MUTED, GROUND, DARK, PERI, MINT, LAV, MX } = K;

// ---- Two-column grid ----
const LX = MX;                 // left column (vertical timeline)
const TXX = LX + 0.80, TXW = 4.20;             // timeline text block
const RX = 6.35, RW = 6.13;    // right column (North Star / cycle / renewal)

const s = slide(GROUND);
s.notes =
  "Closing slide. Two-column read: LEFT is the six-month plan as a vertical timeline; " +
  "RIGHT is the payoff, stacked — the North Star anchor, how it shows up in the operational " +
  "cycle (Reviewed -> Acted on -> Earlier), and the renewal story. 'Week 2, not Week 12' is the " +
  "single biggest phrase. All figures are illustrative — replace specifics with real pilot numbers.";

// ============================================================ HEADER (full width)
eyebrow(s, "Six-month plan", LX, 0.52, PERI, MUTED);
TX(s, { x: LX, y: 0.86, w: 11.7, h: 0.6, str: "Six months to prove earlier reviewed action",
  s: 28, b: true, c: INK, ls: 1.0 });
TX(s, { x: LX, y: 1.45, w: 11.3, h: 0.4,
  str: "Validate on history, pilot by hand, then automate only what changes care behavior.",
  s: 14, c: "5F5F5F", ls: 1.05 });

// ============================================================ LEFT — vertical timeline
const NODES = [
  ["1", "Months 1–2", "Prove the signal",   "Replay known care changes against Teton history."],
  ["2", "Months 2–4", "Prove the workflow", "Run weekly candidates by hand with 1–2 partners."],
  ["3", "Months 4–6", "Automate the loop",  "Launch candidate generation, review, and documentation."],
];
const NY = [2.20, 3.95, 5.70];                 // node top positions (span the column)
const DOTD = 0.44, DOTX = LX + 0.03;
const dotCy = (y) => y + 0.11 + DOTD / 2;      // dot center, aligned to the heading line
// connector line (drawn first, dots sit on top)
LN(s, { x: DOTX + DOTD / 2, y: dotCy(NY[0]), w: 0, h: dotCy(NY[2]) - dotCy(NY[0]), c: "D9DCEA", wt: 1.5 });
NODES.forEach(([n, when, head, desc], i) => {
  const y = NY[i];
  TX(s, { x: TXX, y, w: TXW, h: 0.22, str: when.toUpperCase(), s: 9.5, b: true, c: PERI, cs: 1.5 });
  TX(s, { x: TXX, y: y + 0.20, w: TXW, h: 0.3, str: head, s: 16, b: true, c: INK });
  TX(s, { x: TXX, y: y + 0.52, w: TXW, h: 0.5, str: desc, s: 11.5, c: MUTED, ls: 1.1 });
  EL(s, { x: DOTX, y: y + 0.11, w: DOTD, h: DOTD, fill: PERI });
  TX(s, { x: DOTX, y: y + 0.11, w: DOTD, h: DOTD, str: n, s: 13, b: true, c: "FFFFFF", al: "center", va: "middle" });
});

// ============================================================ RIGHT — North Star anchor
const NSY = 2.10, NSH = 2.25;
RR(s, { x: RX, y: NSY, w: RW, h: NSH, rad: 0.14, fill: DARK, shadow: true });
const nx = RX + 0.42, nw = RW - 0.84;
eyebrow(s, "North Star", nx, NSY + 0.30, MINT, "A8ABB5");
TX(s, { x: nx, y: NSY + 0.68, w: nw, h: 0.34, str: "How early we catch meaningful decline",
  s: 16, c: "FFFFFF", ls: 1.04 });
TX(s, { x: nx, y: NSY + 1.10, w: nw, h: 0.62, str: "Week 2,", s: 34, b: true, c: PERI });
TX(s, { x: nx, y: NSY + 1.74, w: nw, h: 0.5, str: "not Week 12.", s: 24, b: true, c: "A8ABB5" });

// ============================================================ RIGHT — operational cycle
const CY = NSY + NSH + 0.16;                    // 4.51
eyebrow(s, "In the operational cycle", RX, CY, PERI, MUTED);
const STEPS = [
  [RX,          "Reviewed", "resolved in cadence", INK],
  [RX + 2.10,   "Acted on", "intervention started", INK],
  [RX + 4.20,   "Earlier",  "with fewer delays",    PERI],
];
const fhy = CY + 0.36;
STEPS.forEach(([x, head, cap, hc], i) => {
  TX(s, { x, y: fhy, w: 1.85, h: 0.28, str: head, s: 13.5, b: true, c: hc });
  TX(s, { x, y: fhy + 0.26, w: 1.9, h: 0.22, str: cap, s: 9.5, c: MUTED });
  if (i < STEPS.length - 1) TX(s, { x: x + 1.75, y: fhy, w: 0.35, h: 0.28, str: "→", s: 15, c: "AFAFB6", al: "center", va: "middle" });
});

// ============================================================ RIGHT — renewal story (payoff)
const RENY = 5.60, RENH = 1.02;
RR(s, { x: RX, y: RENY, w: RW, h: RENH, rad: 0.14, fill: LAV, shadow: true });
eyebrow(s, "Renewal story", RX + 0.34, RENY + 0.20, PERI, "4A4458");
TX(s, { x: RX + 0.34, y: RENY + 0.50, w: RW - 0.68, h: 0.5, s: 13, ls: 1.14, c: "37373C", runs: [
  { t: "By renewal, Teton can show " },
  { t: "earlier identification", c: INK, b: true },
  { t: ", " },
  { t: "documented reassessments", c: INK, b: true },
  { t: ", and an " },
  { t: "ROI story beyond falls", c: INK, b: true },
  { t: "." },
] });

footer(s, 6);

// ---- Render ----
const BUILD = path.join(__dirname, "build");
fs.mkdirSync(BUILD, { recursive: true });
const out = path.join(__dirname, "closing-slide.pptx");
(async () => {
  await renderPptx(K.deck, out, { title: "Teton — Closing slide (redesign)", author: "Teton" });
  console.log(`✓ wrote ${path.basename(out)} (${K.deck.length} slide)`);
  const h = path.join(BUILD, "closing-slide.preview.html");
  renderHtml(K.deck, h);
  console.log(`  preview: build/closing-slide.preview.html`);
})().catch(e => { console.error(e); process.exit(1); });
