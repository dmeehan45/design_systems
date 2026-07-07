// Flavor: Teton — a product recommendation, in a restrained Rocky Mountain mode.
// Composed to read as a calm executive product readout, not a research memo:
// off-white ground, charcoal text, ONE accent (periwinkle), ONE muted card fill,
// ONE alert (clay, used once). Copy is deliberately spare — the slide carries the
// argument, the speaker notes carry the nuance. Voice follows Teton's own site:
// plain, direct, operational. Verified facts (ASHA/August 2025; $90K illustrative)
// live in a footnote/notes only.
const RISES = [[1, 1.1], [2, 1.8], [4, 2.6], [6, 3.4], [8, 4.2], [10, 4.8], [12, 4.8]];

// restrained palette (charcoal/paper/periwinkle + one muted fill + one alert)
const PAPER = "F8F8F5", INKC = "1B1B18", MUT = "83837B", ACC = "5A6CE6",
  CARD = "EEEEE9", TINT = "EDEFFB", RULE = "E2E2DC", CLAY = "B0574C";

module.exports = {
  name: "teton",
  file: "teton-week2-not-week12.pptx",
  brand: "Teton",
  footer: "Teton  ·  Product recommendation",
  title: "Week 2, Not Week 12 — turning ambient signals into earlier care decisions",
  usesCloud: false,
  build(K) {
    const { slide, R, RR, EL, LN, TX, POLY, MX, PAGEW } = K;
    const CW = PAGEW - 2 * MX, RIGHT = PAGEW - MX;
    let s;

    // ---- calm furniture -----------------------------------------------------
    const rule = (s, x, y, w, c = RULE, wt = 0.75) => LN(s, { x, y, w, h: 0, c, wt });
    const lab = (s, x, y, str, c = MUT, size = 9.5, w = 6) =>
      TX(s, { x, y, w, h: 0.22, str: str.toUpperCase(), s: size, b: true, c, cs: 1.3, va: "middle" });
    function kicker(s, txt) {
      EL(s, { x: MX, y: 0.42, w: 0.11, h: 0.11, fill: ACC });
      TX(s, { x: MX + 0.22, y: 0.35, w: 10, h: 0.26, str: txt.toUpperCase(), s: 10.5, b: true, c: MUT, cs: 1.6, va: "middle" });
    }
    function head(s, title, sub, tsize = 25) {
      TX(s, { x: MX, y: 0.74, w: 11.3, h: 0.9, str: title, s: tsize, b: true, c: INKC, ls: 1.02 });
      TX(s, { x: MX, y: 1.62, w: 10.8, h: 0.55, str: sub, s: 13, c: MUT, ls: 1.12 });
    }
    function foot(s, n) {
      TX(s, { x: MX, y: 7.08, w: 6, h: 0.26, str: K.config.footer, s: 8.5, c: MUT, va: "middle" });
      TX(s, { x: RIGHT - 1, y: 7.08, w: 1, h: 0.26, str: String(n), s: 8.5, c: MUT, al: "right", va: "middle" });
    }
    // one quote, quietly: thin periwinkle rule + italic + attribution
    function quote(s, x, y, w, q, by, qs = 14) {
      LN(s, { x, y: y + 0.02, w: 0, h: qs / 22, c: ACC, wt: 2.5 });
      TX(s, { x: x + 0.28, y, w: w - 0.28, h: qs / 16, str: q, s: qs, i: true, c: INKC, ls: 1.12 });
    }

    // =======================================================================
    // 1 — THE WORKFLOW GAP
    // =======================================================================
    s = slide(PAPER);
    s.notes = "The opening frame is a workflow mismatch, not a product failure. Teton earned trust at night because fall alerts are urgent, concrete, and actionable, and the night team built its routine around them. But the app is barely opened during the day — and daytime is when resident needs are interpreted, documented, and explained to families. Renewal is still likely, but leadership is already asking for a clearer ROI story than fall response alone. That gap between where the product is used and where care decisions happen is the whole opportunity.";
    kicker(s, "The workflow gap");
    head(s, "Teton is trusted at night, but care decisions happen during the day",
      "Fall monitoring has earned the wedge. The next risk is that Teton's broader signal stays outside assessment, documentation, and family conversations.");

    // hero: full-width 24-hour split — solid (used) vs outline (the gap)
    const bx = MX, bw = CW;
    // night band — where Teton lives
    RR(s, { x: bx, y: 2.35, w: bw, h: 1.12, rad: 0.1, fill: CARD });
    TX(s, { x: bx + 0.4, y: 2.55, w: 2.4, h: 0.4, str: "7 PM – 7 AM", s: 16, b: true, c: INKC });
    lab(s, bx + 0.4, 2.98, "Teton trusted", ACC, 9.5, 3);
    TX(s, { x: bx + 3.5, y: 2.58, w: bw - 4.0, h: 0.34, str: "Fall alerts  ·  digital rounds  ·  board watched  ·  night-team routine", s: 13, c: INKC });
    TX(s, { x: bx + 3.5, y: 2.94, w: bw - 4.0, h: 0.3, str: "Alerts are urgent, concrete, and immediately actionable.", s: 10.5, i: true, c: MUT });
    // day band — the gap (outline only)
    RR(s, { x: bx, y: 3.63, w: bw, h: 1.12, rad: 0.1, fill: PAPER, line: { c: RULE, w: 1.25 } });
    TX(s, { x: bx + 0.4, y: 3.83, w: 2.4, h: 0.4, str: "7 AM – 7 PM", s: 16, b: true, c: INKC });
    lab(s, bx + 0.4, 4.26, "Barely used", MUT, 9.5, 3);
    TX(s, { x: bx + 3.5, y: 3.86, w: bw - 4.0, h: 0.34, str: "Assessments  ·  care conferences  ·  family visits  ·  care-level decisions", s: 13, c: INKC });
    TX(s, { x: bx + 3.5, y: 4.22, w: bw - 4.0, h: 0.3, str: "When resident needs are interpreted and documented.", s: 10.5, i: true, c: MUT });

    // one callout line
    TX(s, { x: MX, y: 5.15, w: CW, h: 0.4, s: 15, c: INKC, va: "middle", ls: 1.05,
      runs: [{ t: "Teton is used when ", c: INKC }, { t: "events", c: ACC, b: true }, { t: " happen. The opportunity is when ", c: INKC }, { t: "decisions", c: ACC, b: true }, { t: " happen.", c: INKC }] });

    // one quote
    quote(s, MX, 6.05, 11.4, "For the night falls alone, yeah. But I'd feel like I was leaving most of the value on the table.");
    TX(s, { x: MX + 0.28, y: 6.5, w: 7, h: 0.26, str: "— Marcus, Executive Director", s: 10, c: MUT });
    foot(s, 1);

    // =======================================================================
    // 2 — THE OPPORTUNITY
    // =======================================================================
    s = slide(PAPER);
    s.notes = "One resident, twelve weeks. Teton recorded the rising pattern from around week two; the organization acted at week twelve, at crisis. The point is not that Teton is the only observer — it is that a visible pattern never became a care action because no one owned the review, nothing was documented, and no reassessment was triggered. Differentiation and sizing sit in the footnote and here: EHR flags read only what staff chart, and ~2/3 of clinical leaders report acuity is underreported (ASHA/August Health, 2025). The under-leveling dollar figure (~$90K/yr per building) is illustrative and is validated in Phase 1.";
    kicker(s, "The opportunity");
    head(s, "The missed opportunity is gradual decline before crisis",
      "Teton may see the pattern weeks earlier, but the current workflow does not turn that pattern into review, documentation, or action.");

    // three-layer timeline on one shared axis
    const AX0 = 2.65, AX1 = 12.25, span = AX1 - AX0;
    const wk = (w) => AX0 + (w - 1) / 11 * span;
    const py0 = 2.4, ph = 0.82, vmax = 5.2, cyv = (v) => py0 + ph - (v / vmax) * ph;
    // faint vertical guides at the two moments that matter
    LN(s, { x: wk(2), y: 2.35, w: 0, h: 1.5, c: ACC, wt: 1 });
    LN(s, { x: wk(12), y: 2.35, w: 0, h: 2.15, c: CLAY, wt: 1 });
    // layer labels (left)
    lab(s, MX, 2.72, "Teton signal", MUT, 9, 1.6);
    lab(s, MX, 3.66, "Care team", MUT, 9, 1.6);
    lab(s, MX, 4.28, "Outcome", MUT, 9, 1.6);
    // layer 1 — the signal
    POLY(s, { pts: RISES.map(([w, v]) => [wk(w), cyv(v)]), c: ACC, wt: 2.25 });
    RISES.forEach(([w, v]) => EL(s, { x: wk(w) - 0.045, y: cyv(v) - 0.045, w: 0.09, h: 0.09, fill: ACC }));
    EL(s, { x: wk(2) - 0.085, y: cyv(1.8) - 0.085, w: 0.17, h: 0.17, fill: PAPER, line: { c: ACC, w: 2 } });
    TX(s, { x: wk(2) + 0.18, y: 2.44, w: 3.4, h: 0.24, str: "Pattern detectable · week 2", s: 9.5, b: true, c: ACC });
    // layer 2 — the empty workflow
    RR(s, { x: wk(2), y: 3.55, w: wk(12) - wk(2), h: 0.34, rad: 0.06, fill: CARD });
    TX(s, { x: wk(2), y: 3.55, w: wk(12) - wk(2), h: 0.34, str: "No owner  ·  not documented  ·  no reassessment", s: 11, c: MUT, al: "center", va: "middle" });
    // layer 3 — the crisis (the one alert)
    EL(s, { x: wk(12) - 0.08, y: 4.24, w: 0.16, h: 0.16, fill: CLAY });
    TX(s, { x: 6.2, y: 4.2, w: wk(12) - 6.2 - 0.24, h: 0.26, str: "Week 12 — fall, hospitalization, reassessment", s: 11.5, b: true, c: CLAY, al: "right", va: "middle" });
    // light axis
    rule(s, AX0, 4.66, span, RULE);
    [[1, "Week 1"], [6, "Week 6"], [12, "Week 12"]].forEach(([w, t]) =>
      TX(s, { x: wk(w) - 0.7, y: 4.7, w: 1.4, h: 0.22, str: t, s: 8.5, c: MUT, al: w === 1 ? "left" : w === 12 ? "right" : "center" }));
    // what earlier review would have changed
    TX(s, { x: MX, y: 5.12, w: CW, h: 0.3, s: 11.5, c: INKC, va: "middle",
      runs: [{ t: "What earlier review would have changed:  ", b: true, c: INKC }, { t: "care plan · family conversation · revenue alignment · renewal proof", c: MUT }] });
    // Dana quote
    quote(s, MX, 5.75, 11.4, "If we'd caught it in week two instead of week twelve, that's a different care plan, a different conversation with the family, a different revenue line.");
    TX(s, { x: MX + 0.28, y: 6.5, w: 7, h: 0.24, str: "— Dana, VP Health Services", s: 10, c: MUT });
    // tiny footnote (verified facts)
    TX(s, { x: MX, y: 6.8, w: CW, h: 0.24, str: "EHR flags reflect only what's charted; ~2/3 of clinical leaders report acuity is underreported (ASHA / August Health, 2025). Under-leveling sizing is illustrative.", s: 8, c: MUT });
    foot(s, 2);

    // =======================================================================
    // 3 — THE BET
    // =======================================================================
    s = slide(PAPER);
    s.notes = "Engineering capacity buys one initiative. The alternatives split three ways: too narrow to reach the daytime decision workflow (fall accuracy, a generic adoption push); too risky before the clinical workflow is proven (a family live-view portal, and automated care-level recommendations that put Teton too close to billing); and too broad for a six-month bet (full multi-EHR integration). The chosen bet is a nurse-owned change-of-condition review. The guardrail is the important part: Teton identifies review-worthy evidence, and the care team makes the clinical and billing decision.";
    kicker(s, "The bet");
    head(s, "The six-month bet should be change-of-condition review",
      "One narrow workflow best fits the customer pain, the engineering constraint, and the adoption risk.");

    // three quiet rejected buckets
    const bkt = [["Too narrow", "Doesn't reach daytime decisions", "Fall-accuracy work · Day-shift adoption push"],
      ["Too risky", "Trust & privacy risk before the workflow is proven", "Family live-view · Automated care-level"],
      ["Too broad", "Bigger than a six-month bet", "Full multi-EHR integration"]];
    const bcw = (CW - 0.8) / 3;
    bkt.forEach(([h, why, opts], i) => {
      const x = MX + i * (bcw + 0.4);
      rule(s, x, 2.32, bcw, RULE);
      lab(s, x, 2.44, h, MUT, 9.5, bcw);
      TX(s, { x, y: 2.7, w: bcw, h: 0.5, str: why, s: 12, b: true, c: INKC, ls: 1.05 });
      TX(s, { x, y: 3.24, w: bcw, h: 0.5, str: opts, s: 10.5, c: MUT, ls: 1.08 });
    });

    // chosen bet — the one accent moment
    RR(s, { x: MX, y: 4.2, w: CW, h: 1.5, rad: 0.12, fill: TINT });
    lab(s, MX + 0.4, 4.44, "Chosen bet", ACC, 10, 4);
    TX(s, { x: MX + 0.4, y: 4.7, w: CW - 0.8, h: 0.45, str: "Change-of-condition review", s: 22, b: true, c: INKC });
    TX(s, { x: MX + 0.4, y: 5.24, w: CW - 0.8, h: 0.4, str: "Surface evidence that a resident may need review. A nurse decides what happens next.", s: 14, c: INKC, ls: 1.05 });

    // guardrail — quiet
    rule(s, MX, 6.14, CW, RULE);
    TX(s, { x: MX, y: 6.28, w: CW, h: 0.5, s: 12, c: INKC, va: "middle",
      runs: [{ t: "Guardrail   ", b: true, c: ACC }, { t: "Teton identifies review-worthy evidence. The care team makes the clinical and billing decision.", c: INKC }] });
    foot(s, 3);

    // =======================================================================
    // 4 — PRODUCT DIRECTION
    // =======================================================================
    s = slide(PAPER);
    s.notes = "The user-facing loop is deliberately simple: detect a meaningful change, route it to a clinical owner, document the reviewed outcome, and explain it to families only after human confirmation. Prioritization matters but is internal product logic, so it stays off the visible loop. The review card is grounded in the real workflow rather than a SaaS demo: a resident, why they surfaced, the trend in plain numbers, the evidence period, the nurse's decision, and where documentation lands. The adoption argument is the quiet strength — one clinical owner inside one existing cadence, not a new dashboard for every floor caregiver.";
    kicker(s, "Product direction");
    head(s, "Turn ambient signals into reviewed care evidence",
      "Detect a meaningful change, route it to a clinical owner, and document the reviewed outcome.");

    // simple four-step flow
    const steps = ["Detect", "Review", "Document", "Explain"];
    let fxpos = MX;
    steps.forEach((t, i) => {
      TX(s, { x: fxpos, y: 2.12, w: 1.5, h: 0.3, str: t, s: 13.5, b: true, c: INKC });
      fxpos += 1.28;
      if (i < steps.length - 1) { TX(s, { x: fxpos, y: 2.12, w: 0.5, h: 0.3, str: "→", s: 14, b: true, c: ACC }); fxpos += 0.5; }
    });

    // hero review card
    const rx = MX, rw = 7.75, ry = 2.75, rh = 3.55;
    RR(s, { x: rx, y: ry, w: rw, h: rh, rad: 0.12, fill: PAPER, line: { c: RULE, w: 1.25 }, shadow: true });
    lab(s, rx + 0.36, ry + 0.28, "Suggested review", MUT, 9, 3);
    TX(s, { x: rx + 0.36, y: ry + 0.5, w: rw - 2, h: 0.4, str: "E. Alvarez  ·  Room 312", s: 17, b: true, c: INKC });
    TX(s, { x: rx + rw - 1.9, y: ry + 0.5, w: 1.54, h: 0.36, str: "Priority: high", s: 10.5, b: true, c: ACC, al: "right", va: "middle" });
    lab(s, rx + 0.36, ry + 1.06, "Why surfaced", MUT, 9, 3);
    TX(s, { x: rx + 0.36, y: ry + 1.28, w: rw - 0.72, h: 0.7, s: 12.5, c: INKC, ls: 1.1,
      str: "Nighttime rising increased from 1.2 to 4.6 per night over six weeks. Staff-supported room entries increased. Two possible unwitnessed events." });
    TX(s, { x: rx + 0.36, y: ry + 2.0, w: rw - 0.72, h: 0.26, str: "Evidence period: May 18 – Jun 29", s: 10, i: true, c: MUT });
    rule(s, rx + 0.36, ry + 2.42, rw - 0.72, RULE);
    lab(s, rx + 0.36, ry + 2.54, "Review decision", MUT, 9, 3);
    [["Start change-of-condition review", true], ["Monitor for two weeks", false], ["Dismiss with reason", false]].forEach(([t, primary], i) => {
      const yy = ry + 2.8 + i * 0.24;
      EL(s, { x: rx + 0.4, y: yy + 0.05, w: 0.09, h: 0.09, fill: primary ? ACC : "C7C7C1" });
      TX(s, { x: rx + 0.62, y: yy, w: rw - 1, h: 0.24, str: t, s: 11.5, b: primary, c: primary ? INKC : MUT, va: "middle" });
    });

    // right column — the quiet adoption strength + documentation
    const ax = 9.05, aw = RIGHT - ax;
    lab(s, ax, ry + 0.28, "Documentation", MUT, 9.5, aw);
    TX(s, { x: ax, y: ry + 0.52, w: aw, h: 0.7, s: 12.5, c: INKC, ls: 1.1,
      str: "The confirmed review is written to the August Health / EHR record." });
    rule(s, ax, ry + 1.44, aw, RULE);
    lab(s, ax, ry + 1.6, "Adoption", MUT, 9.5, aw);
    TX(s, { x: ax, y: ry + 1.84, w: aw, h: 1.4, s: 12.5, c: INKC, ls: 1.14,
      str: "One clinical owner. One existing cadence. Not a new dashboard for every floor caregiver." });
    foot(s, 4);

    // =======================================================================
    // 5 — DE-RISKING
    // =======================================================================
    s = slide(PAPER);
    s.notes = "The gates are ranked and sequential. Signal quality gates everything — if Teton can't separate real decline from noise weeks early, a review workflow just routes noise to the most overloaded person in the building, so the retrospective study is first and cheap. Workflow fit decides the shape: one named owner reviewing a small shortlist inside a cadence that already exists. Behavior change decides value: reviewed evidence has to actually change what staff do. The on-slide 'proceed if' language is qualitative on purpose; the underlying numeric targets (roughly 60% of true declines detectable ≥2 weeks early, ~70% of candidates resolved) are placeholders I'd calibrate with clinical leadership, kept in notes so the room doesn't fight over invented precision.";
    kicker(s, "De-risking");
    head(s, "What must be true before we scale the build",
      "Signal quality gates the bet. Workflow fit shapes the product. Behavior change proves value.");

    const gates = [["Signal", "Can Teton identify meaningful decline weeks before a crisis?",
      "Retrospective review of care-level changes, falls, hospitalizations, and change-of-condition events across two to three buildings.",
      "Clinical reviewers agree the signal would have warranted earlier review."],
      ["Workflow", "Can one named role review candidates inside an existing cadence?",
        "Shadow huddles, reassessments, and family-conference prep to see where review would fit.",
        "A clinical owner reviews a small shortlist without creating another inbox."],
      ["Action", "Does reviewed evidence change what staff do?",
        "Concierge pilot with hand-built weekly candidates in one to two communities.",
        "Candidates are resolved, and a meaningful share leads to monitoring, intervention, reassessment, or documentation."]];
    const gcw = (CW - 1.2) / 3;
    gates.forEach(([g, q, test, proceed], i) => {
      const x = MX + i * (gcw + 0.6);
      if (i > 0) LN(s, { x: x - 0.3, y: 2.2, w: 0, h: 3.2, c: RULE, wt: 0.75 });
      TX(s, { x, y: 2.2, w: 0.5, h: 0.4, str: String(i + 1), s: 20, b: true, c: ACC });
      lab(s, x + 0.5, 2.3, "Gate · " + g, MUT, 9.5, gcw);
      TX(s, { x, y: 2.78, w: gcw, h: 0.8, str: q, s: 13.5, b: true, c: INKC, ls: 1.06 });
      lab(s, x, 3.68, "Test", MUT, 8.5, gcw);
      TX(s, { x, y: 3.9, w: gcw, h: 1.0, str: test, s: 11, c: MUT, ls: 1.1 });
      lab(s, x, 4.92, "Proceed if", ACC, 8.5, gcw);
      TX(s, { x, y: 5.14, w: gcw, h: 0.8, str: proceed, s: 11, c: INKC, ls: 1.1 });
    });

    // what would change the plan
    rule(s, MX, 6.2, CW, RULE);
    TX(s, { x: MX, y: 6.34, w: CW, h: 0.5, s: 11, c: INKC, va: "middle",
      runs: [{ t: "If a gate fails   ", b: true, c: INKC }, { t: "weak signal → stay closer to fall documentation  ·  weak workflow fit → attach evidence to scheduled reassessments  ·  too much volume → raise the threshold", c: MUT }] });
    foot(s, 5);

    // =======================================================================
    // 6 — VALIDATION PLAN
    // =======================================================================
    s = slide(PAPER);
    s.notes = "The plan front-loads the cheapest, most falsifiable test and keeps engineering off the critical path until retrospective signal quality is proven. Adoption is earned the same way the night shift adopted falls — by fitting an existing ritual, with the design partners who described the problem as first users. The metric ladder is ordered so usage can't masquerade as value: reviewed, then acted on, then earlier. The single number worth putting on a wall is median weeks-earlier detection — the through-line back to week two, not week twelve. 'Earlier' is deliberately narrower than 'outcomes' to avoid overclaiming broad healthcare results.";
    kicker(s, "Validation plan");
    head(s, "Six months to prove reviewed signals lead to earlier action",
      "Validate on history, pilot by hand, then automate the workflow that changes care behavior.");

    // three phases
    const phases = [["Months 1–2", "Retrospective proof", "Find historical cases where Teton signals appeared before documented decline."],
      ["Months 2–4", "Concierge pilot", "Manually run weekly review candidates in one to two communities."],
      ["Months 4–6", "MVP launch", "Automate candidate generation, review actions, and documentation with two to three design partners."]];
    const pcw = (CW - 0.8) / 3;
    rule(s, MX + 0.1, 2.35, CW - 0.2, RULE);
    phases.forEach(([m, name, desc], i) => {
      const x = MX + i * (pcw + 0.4);
      EL(s, { x: x + 0.1, y: 2.27, w: 0.16, h: 0.16, fill: ACC });
      lab(s, x + 0.4, 2.29, m, ACC, 9.5, pcw);
      TX(s, { x, y: 2.62, w: pcw, h: 0.34, str: name, s: 15, b: true, c: INKC });
      TX(s, { x, y: 3.0, w: pcw, h: 0.7, str: desc, s: 11, c: MUT, ls: 1.1 });
    });

    // metric ladder — reviewed / acted on / earlier
    const ladder = [["Reviewed", INKC, ["Candidates resolved in cadence", "Confirmed meaningful by reviewers", "Time from signal to review"]],
      ["Acted on", INKC, ["Monitoring, intervention, reassessment, or documentation started", "Family conversations supported by approved evidence", "Care-plan decisions backed by Teton evidence"]],
      ["Earlier", ACC, ["Median weeks-earlier detection", "Fewer delayed reassessments", "Directional improvement in incidents or escalations"]]];
    const ly = 4.02, lcw = (CW - 1.0) / 3;
    ladder.forEach(([h, hc, items], i) => {
      const x = MX + i * (lcw + 0.5);
      TX(s, { x, y: ly, w: lcw, h: 0.34, str: h, s: 15, b: true, c: hc });
      rule(s, x, ly + 0.42, lcw, hc === ACC ? ACC : RULE, hc === ACC ? 1.5 : 0.75);
      items.forEach((m, j) => {
        const yy = ly + 0.6 + j * 0.55;
        EL(s, { x: x + 0.02, y: yy + 0.07, w: 0.07, h: 0.07, fill: i === 2 && j === 0 ? ACC : "C7C7C1" });
        TX(s, { x: x + 0.24, y: yy, w: lcw - 0.24, h: 0.5, str: m, s: 11, b: i === 2 && j === 0, c: i === 2 && j === 0 ? INKC : MUT, ls: 1.06 });
      });
    });

    // closing line — renewal story, quiet
    rule(s, MX, 6.28, CW, RULE);
    TX(s, { x: MX, y: 6.42, w: CW, h: 0.5, s: 11.5, c: INKC, va: "middle",
      runs: [{ t: "Renewal story   ", b: true, c: ACC }, { t: "Teton helped identify N residents earlier, supported M documented reassessments, and gave operators a care-quality ROI story beyond fall response.", c: INKC }] });
    foot(s, 6);

    return K.deck;
  }
};
