// Flavor: Product Recommendation — recommend a product decision, investor-review polish.
// Sample subject: fictional "Project Summit". Swap the content for your own.
const DECK = "Project Summit";
module.exports = {
  name: "product-recommendation",
  file: "product-recommendation-template.pptx",
  brand: "Rocky Mountain",
  footer: `${DECK}  ·  Product Recommendation`,
  title: `${DECK} — Product Recommendation`,
  usesCloud: true,
  build(K) {
    const { slide, RR, EL, LN, TX, IM, eyebrow, twoTone, hairline, footer, statBlock, pill, photo, statusRow, wordmark,
      INK, MUTED, GROUND, DARK, PERI, MINT, LAV, BUTTER, LGRAY, MUTED_D, MX, PAGEW } = K;
    const CLOUD = K.cloud;
    let s;

    // 1. COVER
    s = slide(DARK); s.notes = "Open on the recommendation framing. This is a reusable Rocky Mountain deck template; the 'Project Summit' content is sample — replace it with your own product recommendation.";
    wordmark(s, "FFFFFF");
    eyebrow(s, "Product Recommendation", MX, 2.55, MINT, MUTED_D);
    TX(s, { x: MX - 0.02, y: 2.95, w: 11.6, h: 2.1, s: 52, b: true, ls: 1.0, runs: [{ t: DECK, c: "FFFFFF", br: true }, { t: "A recommendation to build", c: MUTED_D }] });
    TX(s, { x: MX, y: 5.35, w: 10, h: 0.5, str: "How we'd ship our next flagship — and why now is the moment.", s: 15, c: "C9CCD4" });
    TX(s, { x: MX, y: 6.75, w: 11, h: 0.35, str: "PRODUCT STRATEGY   ·   Q3   ·   V1", s: 10.5, b: true, c: MUTED_D, cs: 2 });

    // 2. THE RECOMMENDATION
    s = slide(GROUND); s.notes = "Lead with the ask — recommendation decks put the conclusion first.";
    twoTone(s, "The recommendation", `Make ${DECK} our flagship this year`, MX, 0.62, 11.6, 29);
    RR(s, { x: MX, y: 2.2, w: 7.35, h: 4.05, rad: 0.14, fill: LAV, shadow: true });
    eyebrow(s, "Recommendation", MX + 0.4, 2.6, INK, "6B6478");
    TX(s, { x: MX + 0.4, y: 3.0, w: 6.55, h: 1.3, str: `Fund a dedicated squad to build ${DECK} — the capability our customers keep asking for — starting next quarter.`, s: 19, b: true, c: INK, ls: 1.05 });
    TX(s, { x: MX + 0.4, y: 4.5, w: 6.55, h: 1.7, s: 14.5, c: "3A3A3A", pas: 9, bullets: [
      "Turns an existing strength into a new product line",
      "Deepens our moat before competitors catch up",
      "Ships on infrastructure we've already proven"] });
    const ax = MX + 7.95;
    eyebrow(s, "What we're asking for", ax, 2.6, PERI);
    [["1 product squad", "6 people, ring-fenced"], ["2 pilot customers", "design partners"], ["Decision by end of Q3", "to hit a Q4 start"]].forEach(([a, b], i) => {
      const y = 3.15 + i * 1.15;
      TX(s, { x: ax, y, w: 4.0, h: 0.4, str: a, s: 17, b: true, c: INK });
      TX(s, { x: ax, y: y + 0.42, w: 4.0, h: 0.35, str: b, s: 12.5, c: MUTED });
      if (i < 2) hairline(s, ax, y + 0.95, 4.0);
    });
    footer(s, 2);

    // 3. WHY NOW
    s = slide(GROUND); s.notes = "Frame the problem with numbers, not adjectives. Illustrative sample figures.";
    twoTone(s, "Why now", "The window is open", MX, 0.62, 11, 29);
    [["68%", "of customers asked for this in the last quarter"], ["3.4×", "faster than the workaround teams use today"], ["$1.2M", "in at-risk renewals it directly addresses"]].forEach(([n, c], i) => statBlock(s, n, c, MX, 2.2 + i * 1.5, 6.1, INK, MUTED, 42));
    photo(s, 7.5, 2.2, 4.98, 4.35, "Add a customer or context photo");
    footer(s, 3);

    // 4. THE INSIGHT
    s = slide(LGRAY); s.notes = "The pivot. One idea, lots of air.";
    eyebrow(s, "The insight", MX, 2.35, PERI);
    TX(s, { x: MX, y: 2.8, w: 12.0, h: 1.95, s: 34, b: true, ls: 1.14, runs: [
      { t: "We already have the hard part.", c: INK, br: true },
      { t: "We just haven't ", c: INK }, { t: "shipped", c: PERI }, { t: " it — yet.", c: INK }] });
    TX(s, { x: MX, y: 5.05, w: 9.8, h: 1, str: "The core capability already lives inside the platform. Summit turns it into something customers can buy — before someone else builds it first.", s: 16, c: "4A4A4A", ls: 1.15 });
    footer(s, 4);

    // 5. WHAT WE'D BUILD
    s = slide(GROUND); s.notes = "What we'd build, in three capabilities. Flag the panel as illustrative.";
    eyebrow(s, "The product", MX, 0.6, PERI);
    twoTone(s, DECK, "One capability, productised", MX, 0.95, 11, 28);
    [["Self-serve from day one", "Customers get value without a services engagement or long setup."],
     ["Insight, not just data", "It answers the question, instead of handing over another raw feed."],
     ["Fits the existing workflow", "It lands where the work already happens — no new tool to adopt."]].forEach(([t, d], i) => {
      const y = 2.7 + i * 1.32;
      TX(s, { x: MX, y, w: 6.0, h: 0.4, str: t, s: 17, b: true, c: INK });
      TX(s, { x: MX, y: y + 0.42, w: 6.0, h: 0.7, str: d, s: 13.5, c: MUTED, ls: 1.1 });
    });
    const px = 7.35, pw = 5.13;
    RR(s, { x: px, y: 2.55, w: pw, h: 3.95, rad: 0.14, fill: DARK, shadow: true });
    TX(s, { x: px + 0.35, y: 2.85, w: pw - 0.7, h: 0.3, str: `${DECK.toUpperCase()} · TODAY`, s: 10, b: true, c: MUTED_D, cs: 1.5 });
    [["Priority A · Renewals", "High", PERI], ["Priority B · Onboarding", "Medium", BUTTER], ["Priority C · Reporting", "Low", MINT]].forEach(([name, st, col], i) => {
      statusRow(s, px + 0.35, 3.3 + i * 0.9, pw - 0.7, name, st, col);
    });
    TX(s, { x: px, y: 6.05, w: pw, h: 0.3, str: `Illustrative — ${DECK} priority view`, s: 10, i: true, c: MUTED, al: "center" });
    footer(s, 5);

    // 6. HOW IT WORKS
    s = slide(DARK); s.notes = "The 'how it works' beat. The particle field is an abstract hero — swap for a product still if you have one.";
    IM(s, { x: 6.7, y: 0.9, w: 6.4, h: 5.12, path: CLOUD, alt: "Abstract data / intelligence visual" });
    eyebrow(s, "How it works", MX, 1.15, MINT, MUTED_D);
    TX(s, { x: MX, y: 1.5, w: 6.2, h: 1.5, s: 30, b: true, ls: 1.02, runs: [{ t: "Built on what we", c: "FFFFFF", br: true }, { t: "already know", c: MUTED_D }] });
    [["01", "Capture", "The signal already flows through the platform — nothing new to instrument."],
     ["02", "Model", "We turn it into a live, structured view teams can actually read."],
     ["03", "Act", "Predictions and next steps, delivered where the work happens."]].forEach(([n, t, d], i) => {
      const y = 3.35 + i * 1.12;
      EL(s, { x: MX, y, w: 0.5, h: 0.5, fill: "23262F", line: { c: PERI, w: 1.25 } });
      TX(s, { x: MX, y, w: 0.5, h: 0.5, str: n, s: 13, b: true, c: PERI, al: "center", va: "middle" });
      TX(s, { x: MX + 0.72, y: y - 0.04, w: 5.4, h: 0.35, str: t, s: 16, b: true, c: "FFFFFF" });
      TX(s, { x: MX + 0.72, y: y + 0.32, w: 5.5, h: 0.6, str: d, s: 12, c: MUTED_D, ls: 1.1 });
    });
    footer(s, 6, true);

    // 7. PROVEN
    s = slide(GROUND); s.notes = "Credibility that it works. Sample pilot KPIs — replace with real ones.";
    twoTone(s, "Tried and tested", "Proven in the pilot", MX, 0.62, 11, 29);
    [["40%", "Faster time-to-value"], ["3.2×", "Return during the pilot"], ["25%", "Less manual work per week"], ["10k+", "Actions automated"], ["9 / 10", "Pilot users would recommend"], ["2 wks", "To first value, on average"]].forEach((g, i) => {
      const x = [MX, 6.95][i % 2], y = [2.35, 3.8, 5.25][Math.floor(i / 2)];
      statBlock(s, g[0], g[1], x, y, 5.4, INK, MUTED, 34);
    });
    footer(s, 7);

    // 8. OPTIONS
    s = slide(GROUND); s.notes = "Show the decision was considered. The recommended path is the mint card.";
    twoTone(s, "What we considered", "Three paths, one recommendation", MX, 0.62, 11.5, 29);
    [{ name: `Build ${DECK} now`, rec: true, rows: [["Time to value", "2 quarters"], ["Moat", "Deepens ours"], ["Cost", "1 squad"], ["Strategic risk", "Low — we own it"]] },
     { name: "Partner / buy", rec: false, rows: [["Time to value", "1–2 quarters"], ["Moat", "Shared / erodes"], ["Cost", "Rev-share"], ["Strategic risk", "High — dependency"]] },
     { name: "Defer a year", rec: false, rows: [["Time to value", "None yet"], ["Moat", "Static"], ["Cost", "Opportunity"], ["Strategic risk", "High — others move"]] }
    ].forEach((o, i) => {
      const ow = 3.72, ox = MX + i * (ow + 0.23), oy = 2.2, oh = 4.55;
      RR(s, { x: ox, y: oy, w: ow, h: oh, rad: 0.12, fill: o.rec ? MINT : LGRAY, shadow: o.rec });
      if (o.rec) pill(s, "RECOMMENDED", ox + 0.3, oy + 0.32, 1.62, INK, "FFFFFF");
      TX(s, { x: ox + 0.3, y: oy + 1.0, w: ow - 0.6, h: 0.85, str: o.name, s: 17, b: true, c: INK, ls: 1.02 });
      o.rows.forEach(([k, v], j) => {
        const ry = oy + 2.0 + j * 0.6;
        TX(s, { x: ox + 0.3, y: ry, w: ow - 0.6, h: 0.25, str: k.toUpperCase(), s: 8.5, b: true, c: o.rec ? "5A6152" : MUTED, cs: 1 });
        TX(s, { x: ox + 0.3, y: ry + 0.24, w: ow - 0.6, h: 0.38, str: v, s: 12.5, c: INK });
      });
    });
    footer(s, 8);

    // 9. ROLLOUT
    s = slide(GROUND); s.notes = "Four steps, with a real gate at the pilot (step 2).";
    eyebrow(s, "Plan", MX, 0.6, PERI);
    twoTone(s, "How we'd ship it", "Four steps to general availability", MX, 0.95, 11, 28);
    LN(s, { x: MX + 0.22, y: 2.95, w: 0, h: 3.0, c: "D9DCEA", wt: 1.5 });
    [["01", "Foundations", "Stand up the service on infrastructure we already run."],
     ["02", "Pilot cohort", "Two design partners, pre-agreed success metrics, tight tracking."],
     ["03", "Rollout", "Expand across the base once the pilot gate is passed."],
     ["04", "General availability", "GA with a launch moment for the wider market."]].forEach(([n, t, d], i) => {
      const y = 2.85 + i * 1.0;
      EL(s, { x: MX, y, w: 0.44, h: 0.44, fill: PERI });
      TX(s, { x: MX, y, w: 0.44, h: 0.44, str: n, s: 11, b: true, c: "FFFFFF", al: "center", va: "middle" });
      TX(s, { x: MX + 0.7, y: y - 0.04, w: 5.6, h: 0.24, str: `STEP ${n}`, s: 9.5, b: true, c: PERI, cs: 1.5 });
      TX(s, { x: MX + 0.7, y: y + 0.18, w: 5.9, h: 0.32, str: t, s: 16, b: true, c: INK });
      TX(s, { x: MX + 0.7, y: y + 0.53, w: 6.0, h: 0.4, str: d, s: 12, c: MUTED, ls: 1.05 });
    });
    photo(s, 7.7, 2.55, 4.78, 4.0, "Add a team or product photo");
    footer(s, 9);

    // 10. TESTIMONIALS
    s = slide(GROUND); s.notes = "Proof in users' own voices. Fictional sample quotes.";
    twoTone(s, "Don't just take it from us", "What pilot users say", MX, 0.62, 11.5, 29);
    [{ tint: LAV, tag: "PILOT A", q: "It's the first thing my team opens in the morning now.", by: "Alex", role: "Team Lead" },
     { tint: BUTTER, tag: "PILOT B", q: "It cut a two-hour job down to about ten minutes.", by: "Sam", role: "Operations" },
     { tint: MINT, tag: "DESIGN PARTNER", q: "I finally trust the numbers I'm reporting upward.", by: "Riley", role: "Analytics" }
    ].forEach((q, i) => {
      const qw = 3.72, qx = MX + i * (qw + 0.23), qy = 2.3, qh = 3.85;
      RR(s, { x: qx, y: qy, w: qw, h: qh, rad: 0.12, fill: q.tint });
      TX(s, { x: qx + qw - 1.9, y: qy + 0.3, w: 1.6, h: 0.3, str: q.tag, s: 9, b: true, c: "6A6A6A", al: "right", cs: 1.5 });
      TX(s, { x: qx + 0.28, y: qy + 0.2, w: 1, h: 0.9, str: "“", s: 54, b: true, c: INK });
      TX(s, { x: qx + 0.35, y: qy + 1.25, w: qw - 0.7, h: 1.7, str: q.q, s: 15, c: INK, ls: 1.12 });
      TX(s, { x: qx + 0.35, y: qy + qh - 0.68, w: qw - 0.7, h: 0.4, s: 12, runs: [{ t: q.by + "  ", c: INK, b: true }, { t: q.role, c: "5F5F5F" }] });
    });
    footer(s, 10);

    // 11. RISKS
    s = slide(GROUND); s.notes = "Name the real risks and specific mitigations. The kill/scale gate caps the downside.";
    twoTone(s, "Risks we're watching", "And how we de-risk them", MX, 0.62, 11.5, 29);
    TX(s, { x: MX, y: 2.2, w: 5.2, h: 0.3, str: "RISK", s: 10, b: true, c: MUTED, cs: 1.5 });
    TX(s, { x: 6.5, y: 2.2, w: 6, h: 0.3, str: "MITIGATION", s: 10, b: true, c: PERI, cs: 1.5 });
    [["Users don't adopt it", "Guided onboarding + a design-partner feedback loop from day one."],
     ["The pilot underdelivers", "Pre-agreed metrics and a kill/scale gate at 90 days."],
     ["Scope creeps past GA", "One capability, GA-scoped; everything else is explicitly v2."],
     ["Squad gets pulled away", "Ring-fenced squad; no shared-roadmap dependencies."]].forEach(([r, m], i) => {
      const y = 2.65 + i * 1.02;
      hairline(s, MX, y, 11.63);
      TX(s, { x: MX, y: y + 0.18, w: 5.2, h: 0.7, str: r, s: 14.5, b: true, c: INK, va: "middle", ls: 1.03 });
      TX(s, { x: 6.5, y: y + 0.18, w: 5.98, h: 0.7, str: m, s: 13.5, c: "3E3E3E", va: "middle", ls: 1.05 });
    });
    hairline(s, MX, 2.65 + 4 * 1.02, 11.63);
    footer(s, 11);

    // 12. THE ASK
    s = slide(DARK); s.notes = "Close by mirroring the cover and restating the ask in one breath.";
    wordmark(s, "FFFFFF");
    eyebrow(s, "Recommendation", MX, 2.35, MINT, MUTED_D);
    TX(s, { x: MX - 0.02, y: 2.6, w: 11, h: 2.15, s: 44, b: true, ls: 1.04, runs: [{ t: `Approve ${DECK}`, c: "FFFFFF", br: true }, { t: "for this year", c: MUTED_D }] });
    [["1 squad", "dedicated, 6 people"], ["2 partners", "pilot design partners"], ["End of Q3", "decision requested by"]].forEach(([a, b], i) => {
      const x = MX + i * 3.5;
      TX(s, { x, y: 5.05, w: 3.2, h: 0.5, str: a, s: 26, b: true, c: "FFFFFF" });
      TX(s, { x, y: 5.62, w: 3.2, h: 0.35, str: b, s: 12.5, c: MUTED_D });
    });
    pill(s, "Decision requested: end of Q3", MX, 6.35, 4.2, MINT, INK);
    return K.deck;
  }
};
