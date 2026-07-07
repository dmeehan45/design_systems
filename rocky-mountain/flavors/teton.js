// Flavor: Teton — a product recommendation, in a restrained Rocky Mountain mode.
// Standard: calm but evidenced. Every slide reads eyebrow → title → subtitle →
// one dominant hero → isolated proof → one bottom-line. Specificity stays, but
// each detail gets a job and a place instead of a paragraph. Voice follows
// Teton's own site: plain, direct, operational. One accent (periwinkle), one
// muted fill, one alert (clay) used once. Verified stats are labelled; the $90K
// sizing is explicitly illustrative.
const RISES = [[1, 1.1], [2, 1.8], [4, 2.6], [6, 3.4], [8, 4.2], [10, 4.8], [12, 4.8]];
const PAPER = "F8F8F5", INKC = "1B1B18", MUT = "83837B", ACC = "5A6CE6",
  CARD = "EEEEE9", TINT = "EBEEFB", RULE = "E2E2DC", CLAY = "B0574C";

module.exports = {
  name: "teton",
  file: "teton-week2-not-week12.pptx",
  brand: "Teton",
  footer: "Teton  ·  Product recommendation",
  title: "Week 2, Not Week 12 — turning ambient signals into earlier care decisions",
  usesCloud: false,
  build(K) {
    const { slide, R, RR, EL, LN, TX, POLY, MX, PAGEW } = K;
    const CW = PAGEW - 2 * MX, RIGHT = PAGEW - MX, sum = (a) => a.reduce((x, y) => x + y, 0);
    let s;

    // ---- furniture: three type levels, one accent, quiet labels -------------
    const rule = (s, x, y, w, c = RULE, wt = 0.75) => LN(s, { x, y, w, h: 0, c, wt });
    const flab = (s, x, y, str, w = 4, c = MUT, size = 9.5) =>       // small field label (sentence case)
      TX(s, { x, y, w, h: 0.22, str, s: size, b: true, c, cs: 0.4, va: "middle" });
    function kicker(s, txt) {                                         // the one all-caps mark per slide
      EL(s, { x: MX, y: 0.42, w: 0.11, h: 0.11, fill: ACC });
      TX(s, { x: MX + 0.22, y: 0.35, w: 10, h: 0.26, str: txt.toUpperCase(), s: 10.5, b: true, c: MUT, cs: 1.6, va: "middle" });
    }
    function head(s, title, sub, tsize = 24) {
      TX(s, { x: MX, y: 0.74, w: 11.4, h: 0.9, str: title, s: tsize, b: true, c: INKC, ls: 1.02 });
      TX(s, { x: MX, y: 1.6, w: 11.0, h: 0.5, str: sub, s: 12.5, c: MUT, ls: 1.12 });
    }
    function foot(s, n) {
      TX(s, { x: MX, y: 7.08, w: 6, h: 0.26, str: K.config.footer, s: 8.5, c: MUT, va: "middle" });
      TX(s, { x: RIGHT - 1, y: 7.08, w: 1, h: 0.26, str: String(n), s: 8.5, c: MUT, al: "right", va: "middle" });
    }
    function quote(s, x, y, w, q, qs = 13) {                          // one quiet quote style: thin rail + italic
      LN(s, { x, y: y + 0.03, w: 0, h: qs / 20, c: ACC, wt: 2.5 });
      TX(s, { x: x + 0.26, y, w: w - 0.26, h: qs / 15, str: q, s: qs, i: true, c: INKC, ls: 1.12 });
    }

    // =======================================================================
    // 1 — THE WORKFLOW GAP
    // =======================================================================
    s = slide(PAPER);
    s.notes = "The opening frame is a workflow mismatch, not a product failure. Teton earned trust at night because fall alerts are urgent, concrete, and actionable, and the night team built its routine around them. The strategic problem is that the highest-value work — acuity decisions, family trust, the care record, the ROI defense — all happens during the day, when the app is barely opened. Renewal is still likely, but leadership is already asking for a clearer ROI story than fall response alone. That mismatch is the whole opportunity.";
    kicker(s, "The workflow gap");
    head(s, "Teton is trusted at night, but the valuable decisions happen during the day",
      "The fall wedge works. The next product risk is that Teton's broader signals stay outside assessment, documentation, and family conversations.");

    // HERO (left 63%): the 24-hour split
    const hx = MX, hw = 7.3;
    RR(s, { x: hx, y: 2.12, w: hw, h: 1.2, rad: 0.1, fill: CARD });
    TX(s, { x: hx + 0.34, y: 2.32, w: hw - 0.6, h: 0.3, s: 15, va: "middle",
      runs: [{ t: "7 PM – 7 AM", b: true, c: INKC }, { t: "   ·   Teton is load-bearing", b: true, c: ACC }] });
    TX(s, { x: hx + 0.34, y: 2.74, w: hw - 0.6, h: 0.4, str: "Fall alerts · digital rounds · board watched · night-team routine", s: 12.5, c: INKC });
    RR(s, { x: hx, y: 3.42, w: hw, h: 1.2, rad: 0.1, fill: PAPER, line: { c: RULE, w: 1.25 } });
    TX(s, { x: hx + 0.34, y: 3.62, w: hw - 0.6, h: 0.3, s: 15, va: "middle",
      runs: [{ t: "7 AM – 7 PM", b: true, c: INKC }, { t: "   ·   Teton is mostly absent", b: true, c: MUT }] });
    TX(s, { x: hx + 0.34, y: 4.04, w: hw - 0.6, h: 0.4, str: "Assessments · family conferences · care-level changes · documentation", s: 12.5, c: INKC });
    // short pull quote under the hero
    quote(s, hx, 4.98, hw, "For the night falls alone, yeah.");
    TX(s, { x: hx + 0.26, y: 5.36, w: hw - 0.26, h: 0.3, str: "But most of the value is still on the table.", s: 12, c: INKC });
    TX(s, { x: hx + 0.26, y: 5.68, w: 5, h: 0.24, str: "— Marcus, Executive Director", s: 9.5, c: MUT });

    // PROOF (right 37%): why the day matters + renewal pressure
    const wx = 8.5, ww = RIGHT - wx;
    TX(s, { x: wx, y: 2.12, w: ww, h: 0.3, str: "Why this matters", s: 13.5, b: true, c: INKC });
    [["Acuity", "decisions happen during the day"], ["Family trust", "is built during the day"],
     ["The care record", "is updated during the day"], ["ROI", "is defended during the day"]].forEach(([a, b], i) => {
      const y = 2.56 + i * 0.36;
      EL(s, { x: wx + 0.02, y: y + 0.07, w: 0.08, h: 0.08, fill: ACC });
      TX(s, { x: wx + 0.24, y, w: ww - 0.24, h: 0.3, s: 11.5, va: "middle", runs: [{ t: a + " ", b: true, c: INKC }, { t: b, c: INKC }] });
    });
    RR(s, { x: wx, y: 4.12, w: ww, h: 1.3, rad: 0.1, fill: CARD });
    flab(s, wx + 0.3, 4.32, "Renewal signal", ww);
    TX(s, { x: wx + 0.3, y: 4.56, w: ww - 0.6, h: 0.34, str: "“Yes, but the clock's running.”", s: 13.5, i: true, c: INKC });
    TX(s, { x: wx + 0.3, y: 4.96, w: ww - 0.6, h: 0.4, str: "Owners are already asking for ROI beyond fall response.", s: 10.5, c: MUT, ls: 1.08 });

    // SO WHAT (bottom rail)
    rule(s, MX, 5.98, CW, RULE);
    TX(s, { x: MX, y: 6.1, w: CW, h: 0.4, s: 15, va: "middle",
      runs: [{ t: "Teton is used when ", c: INKC }, { t: "urgent events", c: ACC, b: true }, { t: " happen. The opportunity is when ", c: INKC }, { t: "care decisions", c: ACC, b: true }, { t: " happen.", c: INKC }] });
    foot(s, 1);

    // =======================================================================
    // 2 — THE OPPORTUNITY
    // =======================================================================
    s = slide(PAPER);
    s.notes = "One resident, twelve weeks. Teton recorded the rising pattern from around week two; the organization acted at week twelve, at crisis, because no one owned the review, nothing was documented, and no reassessment was triggered. The bet has to pay for itself, so the slide keeps three proofs: the clinical cost, the illustrative financial cost of under-leveling (~$90K/yr per building, directional — Phase 1 validates prevalence and revenue impact), and the data advantage — EHR flags read only what staff chart, while Teton sees the unwitnessed night patterns. Market context: ~2/3 of clinical leaders report acuity is underreported; 75% report higher acuity than five years ago (ASHA/August Health, 2025).";
    kicker(s, "The opportunity");
    head(s, "The missed opportunity is decline visible weeks before crisis",
      "In the interview, the signal existed before the organization had a workflow to review, document, or act on it.");

    // HERO: three-layer timeline on one axis
    const AX0 = 2.55, AX1 = 12.1, span = AX1 - AX0, wk = (w) => AX0 + (w - 1) / 11 * span;
    const py0 = 2.28, ph = 0.66, vmax = 5.2, cyv = (v) => py0 + ph - (v / vmax) * ph;
    LN(s, { x: wk(2), y: 2.24, w: 0, h: 1.3, c: ACC, wt: 1 });
    LN(s, { x: wk(12), y: 2.24, w: 0, h: 1.72, c: CLAY, wt: 1 });
    flab(s, MX, 2.5, "Teton signal", 1.6, MUT, 9);
    flab(s, MX, 3.28, "Care team", 1.6, MUT, 9);
    flab(s, MX, 3.82, "Outcome", 1.6, MUT, 9);
    POLY(s, { pts: RISES.map(([w, v]) => [wk(w), cyv(v)]), c: ACC, wt: 2.25 });
    RISES.forEach(([w, v]) => EL(s, { x: wk(w) - 0.045, y: cyv(v) - 0.045, w: 0.09, h: 0.09, fill: ACC }));
    EL(s, { x: wk(2) - 0.085, y: cyv(1.8) - 0.085, w: 0.17, h: 0.17, fill: PAPER, line: { c: ACC, w: 2 } });
    TX(s, { x: wk(2) + 0.16, y: 2.34, w: 3.4, h: 0.24, str: "Pattern detectable · week 2", s: 9.5, b: true, c: ACC });
    RR(s, { x: wk(2), y: 3.2, w: wk(12) - wk(2), h: 0.32, rad: 0.06, fill: CARD });
    TX(s, { x: wk(2), y: 3.2, w: wk(12) - wk(2), h: 0.32, str: "No owner  ·  not documented  ·  no reassessment", s: 10.5, c: MUT, al: "center", va: "middle" });
    EL(s, { x: wk(12) - 0.08, y: 3.78, w: 0.16, h: 0.16, fill: CLAY });
    TX(s, { x: 6.0, y: 3.74, w: wk(12) - 6.0 - 0.24, h: 0.26, str: "Week 12 — fall, hospitalization, reassessment", s: 11, b: true, c: CLAY, al: "right", va: "middle" });
    rule(s, AX0, 4.18, span, RULE);
    [[1, "Week 1", "left"], [6, "Week 6", "center"], [12, "Week 12", "right"]].forEach(([w, t, al]) =>
      TX(s, { x: wk(w) - 0.7, y: 4.22, w: 1.4, h: 0.2, str: t, s: 8.5, c: MUT, al }));
    // Dana quote (quiet)
    quote(s, MX, 4.56, 11.4, "If we'd caught it in week two instead of week twelve, that's a different care plan, a different family conversation, a different revenue line. — Dana, VP Health Services");

    // PROOF: three cost/advantage callouts, financial cost carries the number
    const pcw = (CW - 0.54) / 3, pcy = 5.28, pch = 1.32;
    const pcx = [MX, MX + pcw + 0.27, MX + 2 * (pcw + 0.27)];
    RR(s, { x: pcx[0], y: pcy, w: pcw, h: pch, rad: 0.1, fill: CARD });
    flab(s, pcx[0] + 0.28, pcy + 0.2, "Clinical cost", pcw);
    TX(s, { x: pcx[0] + 0.28, y: pcy + 0.48, w: pcw - 0.56, h: 0.7, str: "Fall, hospitalization, and a scramble reassessment after the week-12 crisis.", s: 11, c: INKC, ls: 1.1 });
    RR(s, { x: pcx[1], y: pcy, w: pcw, h: pch, rad: 0.1, fill: CARD });
    flab(s, pcx[1] + 0.28, pcy + 0.2, "Financial cost", pcw);
    TX(s, { x: pcx[1] + 0.28, y: pcy + 0.42, w: pcw - 0.4, h: 0.4, str: "~$90K / yr", s: 25, b: true, c: INKC });
    TX(s, { x: pcx[1] + 0.28, y: pcy + 0.86, w: pcw - 0.5, h: 0.24, str: "per building — illustrative", s: 10, c: MUT });
    TX(s, { x: pcx[1] + 0.28, y: pcy + 1.06, w: pcw - 0.5, h: 0.22, str: "10 under-leveled residents × ~$750/mo", s: 9, c: MUT });
    RR(s, { x: pcx[2], y: pcy, w: pcw, h: pch, rad: 0.1, fill: CARD });
    flab(s, pcx[2] + 0.28, pcy + 0.2, "Data advantage", pcw);
    TX(s, { x: pcx[2] + 0.28, y: pcy + 0.48, w: pcw - 0.56, h: 0.7, str: "EHR flags see only what staff chart. Teton sees the unwitnessed night patterns.", s: 11, c: INKC, ls: 1.1 });
    // market context (muted, subordinate)
    TX(s, { x: MX, y: 6.76, w: CW, h: 0.24, str: "Market context: ~2/3 of clinical leaders report acuity is underreported; 75% report higher acuity than five years ago (ASHA / August Health, 2025). Sizing is directional — Phase 1 validates.", s: 8, c: MUT });
    foot(s, 2);

    // =======================================================================
    // 3 — PRIORITIZATION
    // =======================================================================
    s = slide(PAPER);
    s.notes = "Engineering capacity buys one initiative, so the matrix shows the trade-off, not just the winner. Each rejected option was a real customer signal from the interview: false-alarm trust, Marcus asking for broader adoption, families asking to see rooms, the EHR as the record, care levels driving billing. Change-of-condition review is the only option that reaches the high-value daytime decision workflow without overreaching — a family portal or auto care-leveling would overreach clinically and on privacy, and multi-EHR is too broad for six months. The guardrail keeps Teton on the evidence side of the line; the billing rationale stays in the row, not the product promise.";
    kicker(s, "Prioritization");
    head(s, "Why change-of-condition review is the six-month bet",
      "It is the only option that reaches the high-value decision workflow without overreaching clinically or technically.");

    // HERO: the decision matrix
    const colW = [3.0, 4.3, 4.33], mx = MX, my = 2.05, headH = 0.42, rowH = 0.56;
    const header = ["Option", "Customer signal", "Why not the six-month bet"];
    const rows = [
      ["Fall accuracy", "False alarms still affect trust", "Improves the wedge, but doesn't reach daytime decisions"],
      ["Day-shift adoption push", "Marcus asks for broader usage", "More logins don't guarantee care action"],
      ["Family live-view", "Families ask to see rooms", "Privacy & surveillance risk before the workflow is proven"],
      ["Full EHR integration", "The EHR is the record", "Too broad across a dozen EHRs for six months"],
      ["Auto care-level recommendation", "Care levels drive billing & care plans", "Too close to automated billing decisions"],
      ["Change-of-condition review", "Gradual decline is missed and costly", "Turns existing Teton signal into a nurse-owned review"],
    ];
    header.forEach((h, i) => TX(s, { x: mx + sum(colW.slice(0, i)) + 0.16, y: my, w: colW[i] - 0.2, h: headH, str: h, s: 10, b: true, c: MUT, va: "middle" }));
    rule(s, mx, my + headH, CW, RULE, 1);
    rows.forEach((row, r) => {
      const ry = my + headH + r * rowH, sel = r === rows.length - 1;
      if (sel) RR(s, { x: mx - 0.12, y: ry, w: CW + 0.24, h: rowH, rad: 0.08, fill: TINT });
      row.forEach((cell, i) => TX(s, { x: mx + sum(colW.slice(0, i)) + 0.16, y: ry, w: colW[i] - 0.28, h: rowH, str: cell, s: 10.5, b: sel && i === 0, c: sel && i === 0 ? ACC : INKC, va: "middle", ls: 1.03 }));
      if (!sel && r + 1 !== rows.length - 1) rule(s, mx, ry + rowH, CW, RULE);
    });

    // SO WHAT: guardrail (evidence-side of the line only)
    rule(s, MX, 6.15, CW, RULE);
    TX(s, { x: MX, y: 6.28, w: CW, h: 0.5, s: 12.5, va: "middle",
      runs: [{ t: "Guardrail   ", b: true, c: ACC }, { t: "Teton surfaces review-worthy evidence. A nurse decides what happens next.", c: INKC }] });
    foot(s, 3);

    // =======================================================================
    // 4 — PRODUCT DIRECTION
    // =======================================================================
    s = slide(PAPER);
    s.notes = "The user-facing loop is deliberately simple: detect a meaningful change, route it to a clinical owner, document the reviewed outcome, and explain it to families only after human confirmation. The review card is the product — grounded in the real workflow rather than a demo. It shows a resident, why they surfaced in plain numbers, the evidence period, the nurse's decision, and where the confirmed review lands. The quiet strength is adoption: one clinical owner inside one existing cadence, two to three candidates per week, not a new dashboard for every floor caregiver.";
    kicker(s, "Product direction");
    head(s, "Turn ambient signals into reviewed care evidence",
      "Detect a meaningful change, route it to a clinical owner, and document the reviewed outcome.");
    // the loop, as a quiet secondary line
    let fx = MX; ["Detect", "Review", "Document", "Explain"].forEach((t, i, arr) => {
      TX(s, { x: fx, y: 2.08, w: 1.4, h: 0.3, str: t, s: 13, b: true, c: INKC });
      fx += 1.16; if (i < arr.length - 1) { TX(s, { x: fx, y: 2.08, w: 0.4, h: 0.3, str: "→", s: 13, b: true, c: ACC }); fx += 0.4; }
    });

    // HERO: the review card
    const rx = MX, rw = 8.0, ry = 2.62, rh = 3.68;
    RR(s, { x: rx, y: ry, w: rw, h: rh, rad: 0.12, fill: PAPER, line: { c: RULE, w: 1.25 }, shadow: true });
    flab(s, rx + 0.36, ry + 0.28, "Suggested review", 3);
    TX(s, { x: rx + 0.36, y: ry + 0.5, w: rw - 2.4, h: 0.4, str: "E. Alvarez  ·  Room 312", s: 17, b: true, c: INKC });
    TX(s, { x: rx + rw - 2.3, y: ry + 0.52, w: 1.94, h: 0.36, str: "Review priority: High", s: 10.5, b: true, c: ACC, al: "right", va: "middle" });
    flab(s, rx + 0.36, ry + 1.04, "Why surfaced", 3);
    TX(s, { x: rx + 0.36, y: ry + 1.26, w: rw - 0.72, h: 0.66, s: 12.5, c: INKC, ls: 1.1,
      str: "Nighttime rising increased from 1.2 to 4.6 per night over six weeks. Staff-supported entries increased. Two possible unwitnessed events." });
    TX(s, { x: rx + 0.36, y: ry + 1.96, w: rw - 0.72, h: 0.24, str: "Evidence period: May 18 – Jun 29", s: 10, i: true, c: MUT });
    rule(s, rx + 0.36, ry + 2.38, rw - 0.72, RULE);
    flab(s, rx + 0.36, ry + 2.5, "Nurse decision", 3);
    [["Start change-of-condition review", true], ["Monitor for two weeks", false], ["Dismiss with reason", false]].forEach(([t, primary], i) => {
      const yy = ry + 2.76 + i * 0.24;
      EL(s, { x: rx + 0.4, y: yy + 0.05, w: 0.09, h: 0.09, fill: primary ? ACC : "C7C7C1" });
      TX(s, { x: rx + 0.62, y: yy, w: rw - 1, h: 0.24, str: t, s: 11.5, b: primary, c: primary ? INKC : MUT, va: "middle" });
    });

    // PROOF / SO WHAT: documentation + adoption rail
    const ax = 9.3, aw = RIGHT - ax;
    flab(s, ax, ry + 0.28, "Documentation", aw);
    TX(s, { x: ax, y: ry + 0.5, w: aw, h: 0.7, s: 12, c: INKC, ls: 1.1, str: "If confirmed, the review is added to the resident record." });
    rule(s, ax, ry + 1.32, aw, RULE);
    flab(s, ax, ry + 1.46, "Designed for adoption", aw);
    TX(s, { x: ax, y: ry + 1.72, w: aw, h: 1.7, s: 12, c: INKC, ls: 1.28, pas: 3, bullets: [
      "One clinical owner", "One existing cadence", "Two to three candidates a week", "Not a new dashboard for every caregiver"] });
    TX(s, { x: MX, y: ry + rh + 0.06, w: rw, h: 0.24, str: "Family summaries are generated only after staff confirmation.", s: 9.5, i: true, c: MUT });
    foot(s, 4);

    // =======================================================================
    // 5 — DE-RISKING
    // =======================================================================
    s = slide(PAPER);
    s.notes = "The gates are ranked, and Gate 1 is the make-or-break: if Teton can't separate real decline from noise weeks early, a review workflow just routes noise to the most overloaded person in the building. So the retrospective study is first and cheap — no engineering, just replaying history. Gate 2 decides the product shape: one named owner reviewing a small shortlist inside an existing cadence. Gate 3 decides value: reviewed evidence must change what staff do. On-slide proceed-if language is qualitative; underlying numeric targets (~60% of true declines detectable ≥2 weeks early, ~70% of candidates resolved) are placeholders I'd calibrate with clinical leadership.";
    kicker(s, "De-risking");
    head(s, "What must be true before we scale the build",
      "Signal quality gates the bet. Workflow fit shapes the product. Behavior change proves value.");

    // HERO: three stacked gates — Gate 1 largest and emphasized
    const gate = (n, name, tag, q, test, proceed, y, h, emphasized) => {
      if (emphasized) RR(s, { x: MX, y, w: CW, h, rad: 0.1, fill: TINT });
      else rule(s, MX, y, CW, RULE);
      const pad = emphasized ? 0.3 : 0.0, gy = y + (emphasized ? 0.26 : 0.18);
      TX(s, { x: MX + pad, y: gy, w: 0.7, h: 0.5, str: String(n), s: emphasized ? 30 : 22, b: true, c: ACC });
      TX(s, { x: MX + pad + 0.7, y: gy + (emphasized ? 0.08 : 0.03), w: 1.7, h: 0.3, str: name, s: 13, b: true, c: INKC });
      if (tag) TX(s, { x: MX + pad + 0.7, y: gy + 0.36, w: 2.0, h: 0.24, str: tag, s: 9, b: true, i: true, c: ACC });
      const qx = MX + pad + 2.55;
      TX(s, { x: qx, y: gy - 0.02, w: 3.2, h: 0.7, str: q, s: 12.5, b: true, c: INKC, va: "top", ls: 1.06 });
      const tx = qx + 3.35;
      flab(s, tx, gy, "Test", 2.6, MUT, 8.5);
      TX(s, { x: tx, y: gy + 0.2, w: 2.55, h: h - 0.4, str: test, s: 9.5, c: MUT, ls: 1.08 });
      const px = tx + 2.75 + pad * 0.5;
      flab(s, px, gy, "Proceed if", RIGHT - px, ACC, 8.5);
      TX(s, { x: px, y: gy + 0.2, w: RIGHT - px - pad, h: h - 0.4, str: proceed, s: 9.5, c: INKC, ls: 1.08 });
    };
    gate(1, "Signal quality", "Gates the entire bet", "Can Teton identify meaningful decline weeks before crisis?",
      "Retrospective review of care-level changes, falls, hospitalizations, and change-of-condition events across two to three buildings.",
      "Clinical reviewers agree the signal would have warranted earlier review.", 2.05, 1.5, true);
    gate(2, "Workflow fit", null, "Can one role own the review inside an existing cadence?",
      "Shadow huddles, reassessments, and family-conference prep to see where review fits.",
      "A clinical owner reviews a small shortlist without creating another inbox.", 3.72, 1.0, false);
    gate(3, "Behavior change", null, "Does reviewed evidence change staff action?",
      "Concierge pilot with hand-built weekly candidates in one to two communities.",
      "Reviews lead to monitoring, intervention, reassessment, or documentation.", 4.82, 1.0, false);

    // SO WHAT: what a failed gate means
    RR(s, { x: MX, y: 5.95, w: CW, h: 0.86, rad: 0.1, fill: CARD });
    flab(s, MX + 0.3, 6.12, "If a gate fails", 3);
    [["Weak signal", "stay closer to fall documentation"], ["Weak workflow fit", "attach evidence to scheduled reassessments"], ["Too much volume", "raise the threshold"]].forEach(([a, b], i) => {
      const x = MX + 0.3 + i * ((CW - 0.6) / 3);
      TX(s, { x, y: 6.36, w: (CW - 0.6) / 3 - 0.2, h: 0.34, s: 10.5, va: "middle", runs: [{ t: a + "  →  ", b: true, c: INKC }, { t: b, c: MUT }] });
    });
    foot(s, 5);

    // =======================================================================
    // 6 — SIX-MONTH PLAN
    // =======================================================================
    s = slide(PAPER);
    s.notes = "The close leaves the room with what we're proving, how, and what success sounds like at renewal. The plan front-loads the cheapest falsifiable test and keeps engineering off the critical path until signal quality clears. The North Star is the single number worth putting on a wall — median weeks earlier that meaningful decline is reviewed, the through-line back to week two, not week twelve. The metric ladder is ordered so usage can't masquerade as value: reviewed, then acted on, then earlier. Incident/escalation movement is framed as an early directional signal, not a run-rate claim on a six-month MVP.";
    kicker(s, "Six-month plan");
    head(s, "Six months to prove earlier reviewed action",
      "Validate on history, pilot by hand, then automate the workflow that earns renewal confidence.");

    // phases (supporting, top)
    const ph6 = [["Months 1–2", "Prove signal on history", "Find historical cases where Teton saw decline before it was documented."],
      ["Months 2–4", "Pilot by hand", "Run weekly review candidates with one to two design partners."],
      ["Months 4–6", "Automate what worked", "Launch candidate generation, review actions, and documentation."]];
    const p6w = (CW - 0.6) / 3;
    ph6.forEach(([m, name, desc], i) => {
      const x = MX + i * (p6w + 0.3);
      EL(s, { x, y: 2.06, w: 0.15, h: 0.15, fill: ACC });
      TX(s, { x: x + 0.28, y: 2.02, w: p6w, h: 0.24, str: m, s: 10, b: true, c: ACC });
      TX(s, { x, y: 2.34, w: p6w, h: 0.3, str: name, s: 14, b: true, c: INKC });
      TX(s, { x, y: 2.68, w: p6w, h: 0.6, str: desc, s: 10, c: MUT, ls: 1.08 });
    });

    // HERO: the North Star
    RR(s, { x: MX, y: 3.38, w: CW, h: 1.12, rad: 0.12, fill: TINT });
    flab(s, MX + 0.4, 3.56, "North Star", 4, ACC);
    TX(s, { x: MX + 0.4, y: 3.78, w: CW - 0.8, h: 0.4, str: "Median weeks earlier that meaningful decline is reviewed", s: 22, b: true, c: INKC });
    TX(s, { x: MX + 0.4, y: 4.22, w: CW - 0.8, h: 0.28, s: 14, va: "middle",
      runs: [{ t: "The goal is ", c: INKC }, { t: "Week 2, not Week 12.", b: true, c: ACC }] });

    // metric ladder (compact)
    const ladder = [["Reviewed", INKC, "Resolved in cadence · confirmed meaningful · time from signal to review"],
      ["Acted on", INKC, "Monitoring, intervention, reassessment, or documentation started"],
      ["Earlier", ACC, "Weeks-earlier detection · fewer delayed reassessments · early directional signal on incidents"]];
    const lw = (CW - 1.0) / 3, ly = 4.74;
    ladder.forEach(([h, hc, line], i) => {
      const x = MX + i * (lw + 0.5);
      TX(s, { x, y: ly, w: lw, h: 0.3, str: h, s: 14, b: true, c: hc });
      rule(s, x, ly + 0.36, lw, hc === ACC ? ACC : RULE, hc === ACC ? 1.5 : 0.75);
      TX(s, { x, y: ly + 0.46, w: lw, h: 0.6, str: line, s: 10, c: MUT, ls: 1.1 });
    });

    // SO WHAT: the renewal story
    RR(s, { x: MX, y: 6.02, w: CW, h: 0.82, rad: 0.1, fill: CARD });
    TX(s, { x: MX + 0.32, y: 6.02, w: CW - 0.64, h: 0.82, s: 11.5, c: INKC, va: "middle", ls: 1.08,
      runs: [{ t: "Renewal story   ", b: true, c: ACC }, { t: "Teton helped identify N residents earlier, supported M documented reassessments, and gave operators a care-quality ROI story beyond fall response.", c: INKC }] });
    foot(s, 6);

    return K.deck;
  }
};
