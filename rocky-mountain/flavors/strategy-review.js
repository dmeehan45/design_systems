// Flavor: Strategy Review — a quarterly business/strategy review.
// Sample: a generic org's "Q3 Strategy Review". Swap the content for your own.
module.exports = {
  name: "strategy-review",
  file: "strategy-review-template.pptx",
  brand: "Rocky Mountain",
  footer: "Q3 Strategy Review",
  title: "Q3 Strategy Review",
  usesCloud: false,
  build(K) {
    const { slide, RR, EL, LN, TX, eyebrow, twoTone, hairline, footer, statBlock, pill, photo, statusRow, wordmark,
      INK, MUTED, GROUND, DARK, PERI, MINT, LAV, BUTTER, LGRAY, MUTED_D, MX } = K;
    let s;

    // 1. COVER
    s = slide(DARK); s.notes = "Set the frame: the quarter in one read. Sample content — replace with your own numbers and calls.";
    wordmark(s, "FFFFFF");
    eyebrow(s, "Strategy Review", MX, 2.55, MINT, MUTED_D);
    TX(s, { x: MX - 0.02, y: 2.95, w: 11.6, h: 2.1, s: 52, b: true, ls: 1.0, runs: [{ t: "Q3 in review", c: "FFFFFF", br: true }, { t: "Where we are, and where next", c: MUTED_D }] });
    TX(s, { x: MX, y: 5.35, w: 10.5, h: 0.5, str: "The quarter in one read: what moved, what didn't, and the calls for Q4.", s: 15, c: "C9CCD4" });
    TX(s, { x: MX, y: 6.75, w: 11, h: 0.35, str: "PRODUCT & STRATEGY   ·   Q3", s: 10.5, b: true, c: MUTED_D, cs: 2 });

    // 2. AGENDA
    s = slide(GROUND); s.notes = "Map the review. Keep it to five things.";
    twoTone(s, "Agenda", "Five things, in order", MX, 0.62, 11, 29);
    ["The quarter in numbers", "What worked", "What didn't", "Q4 priorities", "Decisions we need"].forEach((t, i) => {
      const y = 2.3 + i * 0.82;
      TX(s, { x: MX, y, w: 0.7, h: 0.5, str: String(i + 1).padStart(2, "0"), s: 20, b: true, c: PERI });
      TX(s, { x: MX + 0.95, y: y + 0.02, w: 9, h: 0.5, str: t, s: 20, b: true, c: INK, va: "middle" });
      if (i < 4) hairline(s, MX, y + 0.68, 8.5);
    });
    footer(s, 2);

    // 3. THE HEADLINE
    s = slide(GROUND); s.notes = "The one-sentence thesis of the quarter, up front. Everything after supports it.";
    twoTone(s, "The headline", "We grew — but efficiency slipped", MX, 0.62, 11.6, 29);
    RR(s, { x: MX, y: 2.2, w: 7.35, h: 4.05, rad: 0.14, fill: LAV, shadow: true });
    eyebrow(s, "This quarter", MX + 0.4, 2.6, INK, "6B6478");
    TX(s, { x: MX + 0.4, y: 3.0, w: 6.55, h: 1.3, str: "We beat the growth target, but activation and cost-to-serve moved the wrong way. Q4 is about fixing the funnel, not adding surface area.", s: 19, b: true, c: INK, ls: 1.05 });
    TX(s, { x: MX + 0.4, y: 4.75, w: 6.55, h: 1.5, s: 14.5, c: "3A3A3A", pas: 9, bullets: [
      "Revenue up, ahead of plan",
      "Activation down — the leak is early in onboarding",
      "Cost-to-serve up as we scaled support manually"] });
    const ax = MX + 7.95;
    eyebrow(s, "The shift for Q4", ax, 2.6, PERI);
    [["Fewer bets", "three priorities, not nine"], ["Fix before build", "close the funnel leak first"], ["Automate support", "before we add headcount"]].forEach(([a, b], i) => {
      const y = 3.15 + i * 1.15;
      TX(s, { x: ax, y, w: 4.0, h: 0.4, str: a, s: 17, b: true, c: INK });
      TX(s, { x: ax, y: y + 0.42, w: 4.0, h: 0.35, str: b, s: 12.5, c: MUTED });
      if (i < 2) hairline(s, ax, y + 0.95, 4.0);
    });
    footer(s, 3);

    // 4. THE QUARTER IN NUMBERS
    s = slide(GROUND); s.notes = "The scorecard. Six KPIs, big and scannable. Sample figures.";
    twoTone(s, "The quarter in numbers", "The scorecard", MX, 0.62, 11, 29);
    [["+18%", "ARR vs. last quarter"], ["112%", "Net revenue retention"], ["41%", "Activation (down from 47%)"], ["+9 pts", "NPS, now 46"], ["14 mo", "CAC payback (up from 11)"], ["3.1×", "Pipeline coverage on Q4"]].forEach((g, i) => {
      const x = [MX, 6.95][i % 2], y = [2.35, 3.8, 5.25][Math.floor(i / 2)];
      statBlock(s, g[0], g[1], x, y, 5.4, INK, MUTED, 34);
    });
    footer(s, 4);

    // 5. WHAT'S WORKING / WHAT'S NOT
    s = slide(GROUND); s.notes = "An honest split. Two columns; keep each to three points.";
    twoTone(s, "What worked, what didn't", "The honest read", MX, 0.62, 11.5, 29);
    const cw = 5.7, gap = 0.23;
    [{ tint: MINT, tag: "WORKING", eb: "5A6152", items: ["Enterprise motion — three lighthouse wins", "Retention held through the price change", "The new reporting suite drove expansion"] },
     { tint: LAV, tag: "NOT WORKING", eb: "6B6478", items: ["Self-serve activation leaks in week one", "Support cost scaled linearly with usage", "Two roadmap bets slipped a full quarter"] }
    ].forEach((c, i) => {
      const x = MX + i * (cw + gap);
      RR(s, { x, y: 2.3, w: cw, h: 4.1, rad: 0.12, fill: c.tint });
      eyebrow(s, c.tag, x + 0.4, 2.7, INK, c.eb);
      TX(s, { x: x + 0.4, y: 3.2, w: cw - 0.8, h: 3.0, s: 15.5, c: INK, pas: 12, bullets: c.items });
    });
    footer(s, 5);

    // 6. WHERE THE BETS STAND
    s = slide(DARK); s.notes = "Status of the big bets, at a glance. Green = on track, amber = at risk, blue = behind.";
    eyebrow(s, "Where we stand", MX, 1.1, MINT, MUTED_D);
    TX(s, { x: MX, y: 1.5, w: 11, h: 0.9, s: 30, b: true, ls: 1.02, runs: [{ t: "The three big bets — ", c: "FFFFFF" }, { t: "and where they are", c: MUTED_D }] });
    [["Self-serve funnel", "At risk", BUTTER], ["Enterprise expansion", "On track", MINT], ["Support automation", "Behind", PERI]].forEach(([name, st, col], i) => {
      statusRow(s, MX, 3.0 + i * 1.05, 11.63, name, st, col);
    });
    TX(s, { x: MX, y: 6.5, w: 11, h: 0.3, str: "One is on track, two need attention — that sets the Q4 priorities.", s: 12, i: true, c: MUTED_D });
    footer(s, 6, true);

    // 7. Q4 PRIORITIES
    s = slide(GROUND); s.notes = "The top three priorities for next quarter. Constrained on purpose.";
    twoTone(s, "Q4 priorities", "Three, not nine", MX, 0.62, 11.5, 29);
    [{ tint: LAV, n: "01", t: "Fix activation", d: "Close the week-one onboarding leak; target 47% activation." },
     { tint: BUTTER, n: "02", t: "Automate support", d: "Deflect the top 5 ticket types before we add headcount." },
     { tint: MINT, n: "03", t: "Land 3 lighthouses", d: "Convert the enterprise pipeline into named reference logos." }
    ].forEach((c, i) => {
      const ow = 3.72, ox = MX + i * (ow + 0.23), oy = 2.3, oh = 4.1;
      RR(s, { x: ox, y: oy, w: ow, h: oh, rad: 0.12, fill: c.tint });
      TX(s, { x: ox + 0.4, y: oy + 0.4, w: 2, h: 0.6, str: c.n, s: 26, b: true, c: INK });
      TX(s, { x: ox + 0.4, y: oy + 1.25, w: ow - 0.8, h: 0.6, str: c.t, s: 19, b: true, c: INK });
      TX(s, { x: ox + 0.4, y: oy + 2.0, w: ow - 0.8, h: 1.6, str: c.d, s: 14, c: "3A3A3A", ls: 1.15 });
    });
    footer(s, 7);

    // 8. PRIORITY DEEP-DIVE
    s = slide(GROUND); s.notes = "One priority in depth. Repeat this layout per priority if needed.";
    eyebrow(s, "Priority 01", MX, 0.6, PERI);
    twoTone(s, "Fix activation", "Where the funnel leaks", MX, 0.95, 11, 28);
    [["Diagnose", "Instrument the week-one journey; find the two biggest drop-offs."],
     ["Ship the fixes", "Guided setup + a first-value checklist, behind a flag."],
     ["Prove it", "Hold-out test; ship if activation clears 47%."]].forEach(([t, d], i) => {
      const y = 2.7 + i * 1.32;
      TX(s, { x: MX, y, w: 6.0, h: 0.4, str: t, s: 17, b: true, c: INK });
      TX(s, { x: MX, y: y + 0.42, w: 6.0, h: 0.7, str: d, s: 13.5, c: MUTED, ls: 1.1 });
    });
    photo(s, 7.5, 2.55, 4.98, 4.0, "Add a funnel chart or product shot");
    footer(s, 8);

    // 9. RISKS / WATCH-ITEMS
    s = slide(GROUND); s.notes = "What could knock Q4 off course, and the early signal for each.";
    twoTone(s, "Watch-items", "What could knock us off course", MX, 0.62, 11.5, 29);
    TX(s, { x: MX, y: 2.2, w: 5.2, h: 0.3, str: "RISK", s: 10, b: true, c: MUTED, cs: 1.5 });
    TX(s, { x: 6.5, y: 2.2, w: 6, h: 0.3, str: "EARLY SIGNAL / MITIGATION", s: 10, b: true, c: PERI, cs: 1.5 });
    [["Activation fix doesn't hold", "Weekly cohort readout; roll back if it dips two weeks running."],
     ["Support cost keeps climbing", "Track cost-per-account; gate hiring on deflection rate."],
     ["Enterprise deals slip again", "Stage-by-stage forecast; exec sponsor on each named logo."],
     ["Team spread too thin", "Freeze net-new bets; protect the three priorities."]].forEach(([r, m], i) => {
      const y = 2.65 + i * 1.02;
      hairline(s, MX, y, 11.63);
      TX(s, { x: MX, y: y + 0.18, w: 5.2, h: 0.7, str: r, s: 14.5, b: true, c: INK, va: "middle", ls: 1.03 });
      TX(s, { x: 6.5, y: y + 0.18, w: 5.98, h: 0.7, str: m, s: 13.5, c: "3E3E3E", va: "middle", ls: 1.05 });
    });
    hairline(s, MX, 2.65 + 4 * 1.02, 11.63);
    footer(s, 9);

    // 10. ROADMAP — NOW / NEXT / LATER
    s = slide(GROUND); s.notes = "Sequence, not exact dates. Now / Next / Later keeps it honest.";
    twoTone(s, "The path", "Now, next, later", MX, 0.62, 11.5, 29);
    [{ tint: LGRAY, h: "NOW · Q4", items: ["Activation fixes", "Support deflection", "Lighthouse conversions"] },
     { tint: LGRAY, h: "NEXT · Q1", items: ["Self-serve expansion", "Usage-based pricing test", "Partner integrations"] },
     { tint: LGRAY, h: "LATER · H1", items: ["International beta", "Platform API", "Second product line"] }
    ].forEach((c, i) => {
      const ow = 3.72, ox = MX + i * (ow + 0.23), oy = 2.3, oh = 4.1;
      RR(s, { x: ox, y: oy, w: ow, h: oh, rad: 0.12, fill: c.tint });
      TX(s, { x: ox + 0.4, y: oy + 0.4, w: ow - 0.8, h: 0.35, str: c.h, s: 11, b: true, c: PERI, cs: 1.5 });
      TX(s, { x: ox + 0.4, y: oy + 1.0, w: ow - 0.8, h: 2.8, s: 14.5, c: INK, pas: 12, bullets: c.items });
    });
    footer(s, 10);

    // 11. DECISIONS WE NEED
    s = slide(DARK); s.notes = "Close on the calls you actually need from the room — not a summary.";
    wordmark(s, "FFFFFF");
    eyebrow(s, "Decisions", MX, 2.35, MINT, MUTED_D);
    TX(s, { x: MX - 0.02, y: 2.6, w: 11, h: 2.15, s: 44, b: true, ls: 1.04, runs: [{ t: "Three calls we need", c: "FFFFFF", br: true }, { t: "from this review", c: MUTED_D }] });
    [["Freeze new bets", "protect the three Q4 priorities"], ["Fund automation", "2 engineers, reallocated"], ["Sign the pricing test", "usage-based, one segment"]].forEach(([a, b], i) => {
      const x = MX + i * 3.7;
      TX(s, { x, y: 5.05, w: 3.4, h: 0.5, str: a, s: 20, b: true, c: "FFFFFF" });
      TX(s, { x, y: 5.55, w: 3.4, h: 0.6, str: b, s: 12.5, c: MUTED_D, ls: 1.1 });
    });
    pill(s, "Sign-off requested today", MX, 6.35, 3.9, MINT, INK);
    return K.deck;
  }
};
