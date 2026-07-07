#!/usr/bin/env node
// Rocky Mountain — standalone builder for the redesigned Teton closing slide.
//
// Rebuilds the six-month-plan closing slide as a single, on-system slide that
// reads like a closing argument rather than an operating document:
//
//   Row 1  Header            — eyebrow + title + one-line subtitle (~15% height)
//   Row 2  Main story        — 3-step plan (left) + a dark North Star anchor (right)
//   Row 3  Outcome           — 3-card success ladder (left) + renewal-story card (right)
//
// The North Star is the visual anchor: a dark rounded panel (an on-system
// component) whose "Week 2, not Week 12" is the single largest phrase on the
// slide. Copy is deliberately short — the presenter speaks the rest.
//
//   node closing-slide.js            # writes closing-slide.pptx (+ build/ preview)
//
// All content is sample/illustrative.
const path = require("path");
const fs = require("fs");
const { makeKit, renderPptx, renderHtml } = require("./lib/kit");

const K = makeKit({ brand: "Teton", footer: "Teton  ·  Product recommendation" });
const { slide, RR, EL, TX, eyebrow, footer,
  INK, MUTED, GROUND, DARK, PERI, MINT, LAV, BORDER, LGRAY, MUTED_D, MX } = K;

// ---- Column grid (two columns, aligned top and bottom rows) ----
const LX = MX,        LW = 6.20;              // left column  (plan / ladder)
const RX = 7.33,      RW = 5.15;              // right column (North Star / renewal)
const RIGHT = RX + RW;                        // 12.48, content right edge

const s = slide(GROUND);
s.notes =
  "Closing slide, rebuilt as a closing argument. Reading path: title → North Star (dark anchor) " +
  "→ success ladder → renewal story. North Star 'Week 2, not Week 12' is the single biggest phrase. " +
  "All figures are illustrative — replace N / M and specifics with real pilot numbers.";

// ============================================================ ROW 1 — HEADER
eyebrow(s, "Six-month plan", LX, 0.52, PERI, MUTED);
TX(s, { x: LX, y: 0.86, w: 11.7, h: 0.6, str: "Six months to prove earlier reviewed action",
  s: 28, b: true, c: INK, ls: 1.0 });
TX(s, { x: LX, y: 1.45, w: 11.3, h: 0.4,
  str: "Validate on history, pilot by hand, then automate only what changes care behavior.",
  s: 14, c: "5F5F5F", ls: 1.05 });

// ============================================ ROW 2 — PLAN (left) + NORTH STAR (right)
const MY = 1.98, MH = 2.80;                   // middle row band
// ---- Left: three stacked, numbered step cards ----
const STEPS = [
  ["1", "Months 1–2", "Prove the signal",   "Replay known care changes against Teton history."],
  ["2", "Months 2–4", "Prove the workflow", "Run weekly candidates by hand with 1–2 partners."],
  ["3", "Months 4–6", "Automate the loop",  "Launch generation, review, and documentation."],
];
const CGAP = 0.13, CH = (MH - CGAP * 2) / 3;  // card height
STEPS.forEach(([n, when, head, desc], i) => {
  const y = MY + i * (CH + CGAP);
  RR(s, { x: LX, y, w: LW, h: CH, rad: 0.12, fill: LGRAY, line: { c: BORDER, w: 1 } });
  // number badge
  const bd = 0.48, by = y + (CH - bd) / 2;
  EL(s, { x: LX + 0.24, y: by, w: bd, h: bd, fill: INK });
  TX(s, { x: LX + 0.24, y: by, w: bd, h: bd, str: n, s: 17, b: true, c: "FFFFFF", al: "center", va: "middle" });
  // text block
  const tx = LX + 0.95;
  TX(s, { x: tx, y: y + 0.13, w: 4.2, h: 0.22, str: when.toUpperCase(), s: 9, b: true, c: MUTED, cs: 1.5 });
  TX(s, { x: tx, y: y + 0.32, w: 4.4, h: 0.3, str: head, s: 15.5, b: true, c: INK });
  TX(s, { x: tx, y: y + 0.60, w: 4.45, h: 0.24, str: desc, s: 11, c: MUTED });
});

// ---- Right: the North Star — dark anchor panel ----
RR(s, { x: RX, y: MY, w: RW, h: MH, rad: 0.14, fill: DARK, shadow: true });
const nx = RX + 0.42;
eyebrow(s, "North Star", nx, MY + 0.34, MINT, MUTED_D);
TX(s, { x: nx, y: MY + 0.72, w: RW - 0.84, h: 0.9,
  str: "Median weeks earlier that meaningful decline is reviewed",
  s: 15, c: "FFFFFF", ls: 1.08 });
TX(s, { x: nx, y: MY + 1.62, w: RW - 0.84, h: 0.62, str: "Week 2,", s: 38, b: true, c: PERI });
TX(s, { x: nx, y: MY + 2.22, w: RW - 0.84, h: 0.5, str: "not Week 12.", s: 27, b: true, c: MUTED_D });

// ============================================ ROW 3 — LADDER (left) + RENEWAL (right)
const BY = 4.96, BH = 1.72;                   // bottom row band
// ---- Left: success ladder, three mini-cards ----
const LADDER = [
  ["Reviewed", "Resolved in cadence and confirmed meaningful.", INK],
  ["Acted on", "Monitoring, intervention, or reassessment started.", INK],
  ["Earlier",  "Decline reviewed sooner, with fewer delayed reassessments.", PERI],
];
const LGAP = 0.16, LCW = (LW - LGAP * 2) / 3;
LADDER.forEach(([head, desc, hc], i) => {
  const x = LX + i * (LCW + LGAP);
  RR(s, { x, y: BY, w: LCW, h: BH, rad: 0.12, fill: LGRAY, line: { c: BORDER, w: 1 } });
  TX(s, { x: x + 0.24, y: BY + 0.28, w: LCW - 0.44, h: 0.3, str: head, s: 14.5, b: true, c: hc });
  TX(s, { x: x + 0.24, y: BY + 0.66, w: LCW - 0.44, h: 0.9, str: desc, s: 10.5, c: MUTED, ls: 1.1 });
});

// ---- Right: renewal story — the payoff ----
RR(s, { x: RX, y: BY, w: RW, h: BH, rad: 0.14, fill: LAV, shadow: true });
eyebrow(s, "Renewal story", RX + 0.35, BY + 0.28, PERI, "4A4458");
TX(s, { x: RX + 0.35, y: BY + 0.66, w: RW - 0.7, h: 1.0, s: 14.5, ls: 1.16, c: "37373C", runs: [
  { t: "By renewal, Teton can show " },
  { t: "earlier resident identification", c: INK, b: true },
  { t: ", " },
  { t: "documented reassessments", c: INK, b: true },
  { t: ", and a " },
  { t: "care-quality ROI story beyond falls", c: INK, b: true },
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
