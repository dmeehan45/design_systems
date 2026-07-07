// Flavor: Teton — a PM-challenge product recommendation, rendered in Rocky Mountain.
// The narrative/content comes from an external build-ready deck spec; here it is
// translated into Rocky Mountain's locked palette, type scale, and components
// (two-tone headers, periwinkle data/steps, pastel cards, dark callouts, banded
// tables). The spec's placeholder teton palette is intentionally NOT used —
// Rocky Mountain is the design system. All figures are illustrative unless the
// deck labels them as the verified ASHA/August 2025 survey or partnership facts.
const DECK = "Week 2, Not Week 12";
// Shared dataset: "night rises per night" over 12 weeks (slide 2 chart + slide 4
// sparkline read from the same series). [week, rises/night].
const RISES = [[1, 1.1], [2, 1.8], [4, 2.6], [6, 3.4], [8, 4.2], [10, 4.8], [12, 4.8]];

module.exports = {
  name: "teton",
  file: "teton-week2-not-week12.pptx",
  brand: "Teton",
  footer: "Week 2, Not Week 12  ·  Teton PM Challenge",
  title: "Week 2, Not Week 12 — turning ambient signals into earlier care decisions",
  usesCloud: false,
  build(K) {
    const { slide, R, RR, EL, LN, TX, POLY, eyebrow, hairline, pill,
      INK, MUTED, GROUND, DARK, PERI, MINT, LAV, BUTTER, LGRAY, MUTED_D, BORDER, MX, PAGEW } = K;
    const CW = PAGEW - 2 * MX;          // content width, 11.633"
    const RIGHT = PAGEW - MX;           // right content edge, 12.483"
    let s;

    // ---- shared per-slide furniture ----------------------------------------
    const kicker = (s, txt) => eyebrow(s, txt, MX, 0.34, PERI, MUTED);
    function head(s, title, sub) {
      TX(s, { x: MX, y: 0.70, w: CW, h: 0.9, str: title, s: 22.5, b: true, c: INK, ls: 1.02 });
      TX(s, { x: MX, y: 1.56, w: CW, h: 0.35, str: sub, s: 13.5, c: MUTED });
    }
    // rounded chip (used in footer prompt-coverage row)
    const chipW = (t) => t.length * 0.052 + 0.34;
    function foot(s, n, labels = []) {
      TX(s, { x: MX, y: 7.08, w: 5.4, h: 0.26, str: K.config.footer, s: 8.5, c: MUTED, va: "middle" });
      let total = labels.reduce((a, t) => a + chipW(t), 0) + Math.max(0, labels.length - 1) * 0.12;
      let cx = 11.35 - total;
      labels.forEach((t) => {
        const w = chipW(t);
        RR(s, { x: cx, y: 7.0, w, h: 0.3, rad: 0.15, fill: LGRAY });
        TX(s, { x: cx, y: 7.0, w, h: 0.3, str: t, s: 8.5, b: true, c: PERI, al: "center", va: "middle" });
        cx += w + 0.12;
      });
      TX(s, { x: 11.5, y: 7.08, w: 0.98, h: 0.26, str: String(n), s: 8.5, c: MUTED, al: "right", va: "middle" });
    }
    // banded table: dark rounded header, LGRAY row banding, hairline rules, and an
    // optional mint "recommended" row (peri outline + shadow) — the RM pick device.
    function table(s, o) {
      const { x, y, w, colW, header, rows, headH = 0.5, rowH = 0.5, recIdx = -1 } = o;
      RR(s, { x, y, w, h: headH, rad: 0.1, fill: DARK });
      let hx = x;
      header.forEach((h, i) => { TX(s, { x: hx + 0.2, y, w: colW[i] - 0.32, h: headH, str: h.toUpperCase(), s: 10, b: true, c: "FFFFFF", cs: 0.8, va: "middle" }); hx += colW[i]; });
      rows.forEach((row, r) => {
        const ry = y + headH + r * rowH, isRec = r === recIdx;
        if (isRec) RR(s, { x, y: ry + 0.03, w, h: rowH - 0.06, rad: 0.1, fill: MINT, line: { c: PERI, w: 1.5 }, shadow: true });
        else if (r % 2 === 0) R(s, { x, y: ry, w, h: rowH, fill: LGRAY });
        if (r > 0 && !isRec && r - 1 !== recIdx) hairline(s, x, ry, w);
        let cx = x;
        row.forEach((cell, i) => {
          TX(s, { x: cx + 0.2, y: ry + 0.03, w: colW[i] - 0.34, h: rowH - 0.06, str: cell, s: 10.5, b: isRec || i === 0, c: INK, va: "middle", ls: 1.02 });
          cx += colW[i];
        });
      });
    }
    // Rocky Mountain quote: hairline-free, oversized mark + italic + attribution.
    function quote(s, x, y, w, q, by, size = 13) {
      TX(s, { x: x - 0.02, y: y - 0.28, w: 0.6, h: 0.6, str: "“", s: 40, b: true, c: PERI });
      TX(s, { x: x + 0.42, y, w: w - 0.42, h: 0.9, str: q, s: size, i: true, c: INK, ls: 1.08 });
    }

    // =======================================================================
    // 1 — INSIGHTS
    // =======================================================================
    s = slide(GROUND);
    s.notes = "I'm not opening with what's broken — the wedge works. Night falls are concrete, urgent, tied to an obvious action, and the night team built its routine around them. The strategic problem: the product is load-bearing for twelve hours and dark for the twelve when every care decision happens. Underneath sit two more insights — decline is caught ~10 weeks late because reassessment is memory and gut, and the insight feed already sees this but produces glances, not actions. The renewal quote converts all of this from a product-quality issue into a commercial clock.";
    kicker(s, "Week 2, Not Week 12   ·   What we heard");
    head(s, "The fall wedge earned trust at night — but Teton is dark when care decisions happen", "Four insights from the interview, one renewal clock.");

    // Left — 24-hour split visual
    const lx = MX, lw = 4.95;
    // night band (load-bearing)
    RR(s, { x: lx, y: 2.02, w: lw, h: 1.62, rad: 0.14, fill: DARK, shadow: true });
    TX(s, { x: lx + 0.28, y: 2.18, w: lw - 0.56, h: 0.3, str: "7 PM – 7 AM  ·  LOAD-BEARING", s: 10, b: true, c: "FFFFFF", cs: 1 });
    TX(s, { x: lx + 0.28, y: 2.5, w: lw - 0.56, h: 0.7, s: 11, c: "C9CCD4", pas: 3, ls: 1.05, bullets: ["Fall alerts in minutes (was ~40)", "Digital rounds  ·  board watched all shift"] });
    pill(s, "Night team's a believer", lx + 0.28, 3.16, 2.35, MINT, INK);
    // day band (dark = unlit)
    RR(s, { x: lx, y: 3.74, w: lw, h: 1.82, rad: 0.14, fill: LGRAY });
    TX(s, { x: lx + 0.28, y: 3.9, w: lw - 0.56, h: 0.3, str: "7 AM – 7 PM  ·  DARK", s: 10, b: true, c: "6E7176", cs: 1 });
    ["Nurse assessments", "Family visits", "Care conferences", "Care-level decisions"].forEach((t, i) => {
      const yy = 4.26 + i * 0.31;
      EL(s, { x: lx + 0.3, y: yy + 0.03, w: 0.13, h: 0.13, fill: LGRAY, line: { c: "9AA0A6", w: 1.25 } });
      TX(s, { x: lx + 0.56, y: yy - 0.05, w: lw - 0.8, h: 0.3, str: t, s: 11, c: "5B5F63", va: "middle" });
    });
    TX(s, { x: lx, y: 5.66, w: lw, h: 0.3, str: "Usage lives at night; decisions live in the day.", s: 9.5, i: true, c: MUTED });

    // Right — four insight cards
    const rx = 6.15, rw = RIGHT - rx, ch = 0.87, cg = 0.11;
    [["The wedge works.", "Night falls are why they bought — and why they'd renew.", "“For the night falls alone — yeah.”"],
     ["Dark during decision hours.", "Day staff barely open the app; daytime is when needs are interpreted, documented, explained to families.", null],
     ["Decline is caught ~10 weeks late.", "Reassessment runs on memory and gut. One problem, two faces: clinical (falls) and financial (level-4 care billed at level 2).", null],
     ["Insights get looked at, not acted on.", "Twenty soft signals, no owner, no documentation path.", "“Okay… and?”"]
    ].forEach(([t, d, q], i) => {
      const y = 2.02 + i * (ch + cg);
      RR(s, { x: rx, y, w: rw, h: ch, rad: 0.12, fill: GROUND, line: { c: BORDER, w: 1 }, shadow: true });
      EL(s, { x: rx + 0.22, y: y + 0.22, w: 0.42, h: 0.42, fill: PERI });
      TX(s, { x: rx + 0.22, y: y + 0.22, w: 0.42, h: 0.42, str: String(i + 1), s: 13, b: true, c: "FFFFFF", al: "center", va: "middle" });
      TX(s, { x: rx + 0.82, y: y + 0.12, w: rw - 1.0, h: 0.3, str: t, s: 13, b: true, c: INK });
      const dw = q ? rw - 2.0 : rw - 1.0;
      TX(s, { x: rx + 0.82, y: y + 0.42, w: dw, h: 0.42, str: d, s: 9.8, c: MUTED, ls: 1.02 });
      if (q) TX(s, { x: rx + rw - 1.12, y: y + 0.14, w: 0.98, h: 0.62, str: q, s: 10, i: true, c: PERI, va: "middle", ls: 1.0 });
    });

    // Bottom strip — the renewal clock (butter content card, no edge stripe)
    RR(s, { x: MX, y: 5.98, w: CW, h: 0.82, rad: 0.12, fill: BUTTER });
    TX(s, { x: MX + 0.32, y: 6.1, w: 1.5, h: 0.3, str: "THE CLOCK", s: 10, b: true, c: "8A7B2E", cs: 1.2, va: "middle" });
    TX(s, { x: MX + 1.9, y: 6.06, w: CW - 2.2, h: 0.66, s: 12, c: INK, va: "middle", ls: 1.06,
      runs: [{ t: "Renewal today is ", i: false }, { t: "“yes, but the clock's running.”", i: true }, { t: "  The owner group already asks “what's the ROI on Teton?” — ", i: false }, { t: "“paying for a Ferrari to drive to the mailbox.”", i: true }] });
    foot(s, 1, ["Prompt: Key insights"]);

    // =======================================================================
    // 2 — THE OPPORTUNITY
    // =======================================================================
    s = slide(GROUND);
    s.notes = "This slide is one resident's twelve weeks. Teton recorded the pattern from the start; the organization saw it at week twelve, at crisis. I pair the money and the care outcome because Dana does: 'a clinical version and a money version — the same problem.' Differentiation: August already flags rising acuity from EHR data — but EHR flags only see what got documented, and the industry's own survey says acuity is systematically underreported. Teton's unique asset is the evidence nobody charted. The dollar figure is an illustration of the sizing logic, not a claim — validating it is literally Phase 1.";
    kicker(s, "Teton interview readout   ·   The opportunity");
    head(s, "Catch the change of condition in week 2, not week 12", "One real resident, twelve weeks, and the only company that could have seen it.");

    // chart — plot box (dropped below the legend so the W2 flag can't collide)
    const px0 = 1.15, pw = 6.35, py0 = 2.52, ph = 0.95, vmax = 5.2;
    const cxw = (w) => px0 + (w - 1) / 11 * pw;
    const cyv = (v) => py0 + ph - (v / vmax) * ph;
    EL(s, { x: MX, y: 2.0, w: 0.13, h: 0.13, fill: PERI });
    TX(s, { x: MX + 0.24, y: 1.92, w: 6.5, h: 0.28, str: "TETON'S VIEW — recorded, undocumented", s: 9.5, b: true, c: PERI, cs: 0.5, va: "middle" });
    hairline(s, px0, py0 + ph, pw + 0.1, BORDER);                     // faint baseline only
    POLY(s, { pts: RISES.map(([w, v]) => [cxw(w), cyv(v)]), c: PERI, wt: 2.25 });
    RISES.forEach(([w, v]) => EL(s, { x: cxw(w) - 0.05, y: cyv(v) - 0.05, w: 0.1, h: 0.1, fill: PERI }));
    RISES.forEach(([w]) => TX(s, { x: cxw(w) - 0.3, y: py0 + ph + 0.05, w: 0.6, h: 0.22, str: "W" + w, s: 8.5, c: MUTED, al: "center" }));
    // W2 marker — signal detectable (label in the plot's open upper-left, above the low early line)
    EL(s, { x: cxw(2) - 0.09, y: cyv(1.8) - 0.09, w: 0.18, h: 0.18, fill: GROUND, line: { c: PERI, w: 2 } });
    LN(s, { x: cxw(2), y: py0 + 0.32, w: 0, h: cyv(1.8) - 0.09 - (py0 + 0.32), c: PERI, wt: 1 });
    TX(s, { x: cxw(2) - 0.42, y: py0 + 0.04, w: 2.9, h: 0.24, str: "SIGNAL DETECTABLE · WEEK 2", s: 9, b: true, c: PERI });
    // W12 marker — crisis (rendered in ink, not alarm-red: RM stays evidence-forward)
    EL(s, { x: cxw(12) - 0.09, y: cyv(4.8) - 0.09, w: 0.18, h: 0.18, fill: INK });
    TX(s, { x: MX, y: py0 + ph + 0.24, w: 7.6, h: 0.28, str: "The building's view — uncharted: more bathroom help, falls “heard about after,” no change-of-condition filed.", s: 9.5, i: true, c: MUTED });

    // right — the week-12 crisis, as a dark contrast card
    const kx = 8.15, kw = RIGHT - kx;
    RR(s, { x: kx, y: 1.98, w: kw, h: 2.05, rad: 0.14, fill: DARK, shadow: true });
    TX(s, { x: kx + 0.3, y: 2.14, w: kw - 0.6, h: 0.28, str: "WEEK 12 — CAUGHT AT CRISIS", s: 10.5, b: true, c: "FFFFFF", cs: 0.8 });
    TX(s, { x: kx + 0.3, y: 2.5, w: kw - 0.6, h: 1.4, s: 11.5, c: "C9CCD4", ls: 1.12,
      str: "Fall → hospitalization → scramble reassessment → hostile family meeting → ~10 weeks of level-4 care billed at level 2." });

    // Dana quote — full width under chart
    quote(s, MX, 4.32, 11.4, "If we'd caught it in week two instead of week twelve — a different care plan, a different family conversation, a different revenue line. And maybe she's not in the hospital.");
    TX(s, { x: MX + 0.42, y: 4.84, w: 6, h: 0.24, str: "— Dana, VP Health Services", s: 10, c: MUTED });

    // bottom-left — one intervention, four payoffs (2x2)
    const bw = 5.66, bh = 1.62, by = 5.06;
    RR(s, { x: MX, y: by, w: bw, h: bh, rad: 0.12, fill: LGRAY });
    TX(s, { x: MX + 0.3, y: by + 0.16, w: bw - 0.6, h: 0.28, str: "One intervention, four payoffs", s: 12.5, b: true, c: INK });
    [["Clinical", "intervene weeks earlier; fewer crises"], ["Financial", "care plans sized right; end silent under-billing"],
     ["Family", "trend evidence cools hostile conferences"], ["Renewal", "a countable ROI story — never a staffing cut"]].forEach(([t, d], i) => {
      const gx = MX + 0.3 + (i % 2) * (bw / 2 - 0.15), gy = by + 0.58 + Math.floor(i / 2) * 0.52;
      TX(s, { x: gx, y: gy, w: bw / 2 - 0.3, h: 0.24, str: t, s: 10.5, b: true, c: PERI });
      TX(s, { x: gx, y: gy + 0.22, w: bw / 2 - 0.3, h: 0.3, str: d, s: 9.2, c: MUTED, ls: 1.0 });
    });

    // bottom-right — why Teton wins (peri header bar card)
    const wx = 6.82, ww = RIGHT - wx;
    RR(s, { x: wx, y: by, w: ww, h: bh, rad: 0.12, fill: GROUND, line: { c: BORDER, w: 1 }, shadow: true });
    RR(s, { x: wx, y: by, w: ww, h: 0.42, rad: 0.12, fill: PERI });
    R(s, { x: wx, y: by + 0.24, w: ww, h: 0.18, fill: PERI });
    TX(s, { x: wx + 0.3, y: by, w: ww - 0.6, h: 0.42, str: "The decline that matters is undocumented", s: 11.5, b: true, c: "FFFFFF", va: "middle" });
    TX(s, { x: wx + 0.3, y: by + 0.54, w: ww - 0.6, h: 1.0, s: 9.6, c: "3A3A3A", ls: 1.08, pas: 3, bullets: [
      "EHR flags (incl. August's Resident Watchlist) read only what staff chart",
      "~2/3 of clinical leaders say acuity is underreported; 75% report higher acuity than 5 yrs ago (ASHA / August, 2025)",
      "Teton is the objective observer of the unwitnessed nights"] });
    TX(s, { x: wx + 0.3, y: by + bh - 0.26, w: ww - 0.6, h: 0.24, str: "Illustrative: ~10 under-leveled residents × ~$750/mo ≈ ~$90K/yr per building", s: 9, b: true, i: true, c: PERI });
    foot(s, 2, ["Prompt: Problem / opportunity"]);

    // =======================================================================
    // 3 — THE BET & REJECTED ALTERNATIVES
    // =======================================================================
    s = slide(GROUND);
    s.notes = "Engineering capacity buys one initiative, so the slide shows what I'm saying no to and why. Each rejected option is genuinely tempting — most were requested verbatim in the interview — which is why they're on the slide. Two to flag: the family portal is a feature-request trap the same transcript refutes, and auto care-leveling is the overreach version of the right idea — it converts Teton from care-quality ally into billing hammer. The guardrail sentence is the deck's most important sentence; it's also the renewal-protecting one.";
    kicker(s, "Teton interview readout   ·   Prioritization");
    head(s, "The six-month bet: a nurse-owned review loop — not more alerts, portals, or auto-leveling", "One initiative fits the constraint. Five tempting options don't.");
    table(s, {
      x: MX, y: 1.98, w: CW, colW: [3.5, 3.6, 4.53], headH: 0.46, rowH: 0.52, recIdx: 5,
      header: ["Option", "The pull", "Why not the bet"],
      rows: [
        ["Sharpen fall accuracy", "Rebuild floor-staff trust", "Incremental; never reaches decision hours"],
        ["Day-shift adoption push", "Marcus asks for exactly this", "Nothing in the app for day shift yet; logins ≠ decisions"],
        ["Family live-view portal", "Adult kids keep asking", "Surveillance backlash, consent burden; off-brand for privacy-first"],
        ["Full multi-EHR integration", "The EHR is the record", "A dozen EHRs — a platform program, not a 6-month bet"],
        ["Auto care-level recommendation", "Maps straight to the money pain", "“The algorithm raised mom's bill” — kills family & clinical trust"],
        ["Change-of-Condition Review Loop  ✓", "Turns signals Teton already has into owned, documented decisions", "Bounded, testable; rides the live August integration"],
      ],
    });
    // guardrail — the deck's key sentence, as the one black (action) callout
    RR(s, { x: MX, y: 5.66, w: CW, h: 0.62, rad: 0.12, fill: "000000" });
    TX(s, { x: MX + 0.35, y: 5.66, w: CW - 0.7, h: 0.62, s: 12.5, b: true, c: "FFFFFF", va: "middle", ls: 1.02,
      str: "Teton surfaces evidence that a resident may need review. A nurse decides. Never a care-level or billing recommendation." });
    // held-tension note
    TX(s, { x: MX, y: 6.44, w: CW, h: 0.5, s: 10.5, c: MUTED, ls: 1.1,
      runs: [{ t: "Marcus: ", b: true, c: INK }, { t: "“You can't build the fancy thing if half my staff don't log in.”   ", i: true }, { t: "Dana: ", b: true, c: INK }, { t: "“Maybe the valuable thing is what gets them to log in.”", i: true }, { t: "  The bet honors both — the adoption surface is one nurse, not a shift.", b: false }] });
    foot(s, 3, ["Prompt: Focus area", "Prompt: Product direction"]);

    // =======================================================================
    // 4 — PRODUCT DIRECTION
    // =======================================================================
    s = slide(GROUND);
    s.notes = "The MVP is deliberately boring in the right way. Detection runs on data Teton already collects; the model change is the unit of output — a weekly curated shortlist, not a feed. Review is a ten-minute ritual for one named owner. Documentation rides the August integration that already moves fall incidents into the EHR today — the announced roadmap explicitly names mobility, sleep, and routine changes as next, so this swims with the partnership current. For non-August communities, the fallback is a printable evidence pack. False-alarm history is answered by design: trends spanning weeks are robust where single-frame events eroded trust, and dismissals feed back into ranking.";
    kicker(s, "Teton interview readout   ·   Product direction");
    head(s, "The Change-of-Condition Review Loop, inside workflows that already exist", "Detect the trend, curate a shortlist, let a nurse decide, document where documentation already lives.");
    // loop — five periwinkle STEP nodes on a connector line
    const steps = [["DETECT", "deviation from each resident's baseline over weeks — trends, not 2 AM alerts"],
      ["PRIORITIZE", "≤3 candidates / building / week, ranked by confidence × clinical relevance"],
      ["REVIEW", "clinical lead confirms / monitors / dismisses — ~10 min in an existing huddle"],
      ["DOCUMENT", "confirmed → change-of-condition record via the August integration"],
      ["EXPLAIN", "staff-approved family summary — only after human confirmation"]];
    const colw = CW / 5, dotY = 2.28;
    LN(s, { x: MX + 0.4, y: dotY + 0.22, w: CW - 2 * (colw / 2), h: 0, c: "D9DCEA", wt: 1.5 });
    steps.forEach(([t, d], i) => {
      const cx0 = MX + i * colw;
      EL(s, { x: cx0 + 0.02, y: dotY, w: 0.44, h: 0.44, fill: PERI });
      TX(s, { x: cx0 + 0.02, y: dotY, w: 0.44, h: 0.44, str: String(i + 1), s: 13, b: true, c: "FFFFFF", al: "center", va: "middle" });
      TX(s, { x: cx0 + 0.56, y: dotY - 0.02, w: colw - 0.6, h: 0.24, str: "STEP 0" + (i + 1), s: 8, b: true, c: PERI, cs: 1 });
      TX(s, { x: cx0 + 0.56, y: dotY + 0.19, w: colw - 0.6, h: 0.24, str: t, s: 11.5, b: true, c: INK });
      TX(s, { x: cx0 + 0.02, y: dotY + 0.56, w: colw - 0.22, h: 0.8, str: d, s: 9, c: MUTED, ls: 1.05 });
    });

    // wireframe card (concept mock)
    const fx = MX, fw = 6.25, fy = 3.5, fh = 2.62;
    RR(s, { x: fx, y: fy, w: fw, h: fh, rad: 0.14, fill: GROUND, line: { c: BORDER, w: 1.25 }, shadow: true });
    RR(s, { x: fx + 0.28, y: fy + 0.26, w: 0.22, h: 0.22, rad: 0.04, fill: BUTTER });
    TX(s, { x: fx + 0.62, y: fy + 0.2, w: fw - 2.3, h: 0.34, str: "Suggested review — Rm 312 · E. Alvarez", s: 12, b: true, c: INK, va: "middle" });
    pill(s, "HIGH", fx + fw - 1.28, fy + 0.22, 1.0, MINT, INK);
    TX(s, { x: fx + 0.28, y: fy + 0.66, w: fw - 0.56, h: 0.28, s: 10, c: "3A3A3A",
      str: "Night rises 1.2 → 4.6/night over 6 weeks  ·  sleep fragmentation ↑  ·  2 possible unwitnessed events" });
    // sparkline (same series, mini)
    const spx = fx + 0.3, spw = 2.4, spy = 1.02, sph = 0.42, sbase = fy + spy + sph;
    POLY(s, { pts: RISES.map(([w, v]) => [spx + (w - 1) / 11 * spw, sbase - (v / vmax) * sph]), c: PERI, wt: 1.75 });
    TX(s, { x: fx + 2.85, y: fy + spy + 0.06, w: fw - 3.1, h: 0.3, str: "May 18 – Jun 29  ·  full evidence pack →", s: 9, i: true, c: MUTED, va: "middle" });
    // action buttons
    const btnY = fy + 1.6;
    pill(s, "Start change of condition", fx + 0.28, btnY, 2.55, PERI, "FFFFFF");
    RR(s, { x: fx + 2.95, y: btnY, w: 1.7, h: 0.5, rad: 0.1, fill: GROUND, line: { c: PERI, w: 1.25 } });
    TX(s, { x: fx + 2.95, y: btnY, w: 1.7, h: 0.5, str: "Monitor 2 weeks", s: 10.5, b: true, c: PERI, al: "center", va: "middle" });
    RR(s, { x: fx + 4.75, y: btnY, w: 1.22, h: 0.5, rad: 0.1, fill: LGRAY });
    TX(s, { x: fx + 4.75, y: btnY, w: 1.22, h: 0.5, str: "Dismiss", s: 10.5, c: MUTED, al: "center", va: "middle" });
    TX(s, { x: fx, y: fy + fh + 0.04, w: fw, h: 0.3, str: "Mock — evidence lands in August Health Care Track; every dismissal trains the detector.", s: 9, i: true, c: MUTED });

    // right — why the adoption surface is small
    const ax2 = 7.35, aw = RIGHT - ax2;
    RR(s, { x: ax2, y: fy, w: aw, h: fh, rad: 0.14, fill: LAV });
    TX(s, { x: ax2 + 0.32, y: fy + 0.2, w: aw - 0.64, h: 0.5, str: "Why the adoption surface is small", s: 12.5, b: true, c: INK });
    [["30 floor staff adopt an app", "1 clinical owner adopts a ritual"], ["A new dashboard", "A meeting that already happens"],
     ["20 soft signals", "2–3 curated candidates a week"], ["Single-event alerts", "Multi-week trends, robust to one bad frame"]].forEach(([no, yes], i) => {
      const yy = fy + 0.78 + i * 0.45;
      TX(s, { x: ax2 + 0.32, y: yy, w: 0.25, h: 0.24, str: "✗", s: 11, b: true, c: "9A93B0" });
      TX(s, { x: ax2 + 0.56, y: yy, w: aw - 0.9, h: 0.24, str: no, s: 10, c: "6B6478", va: "middle" });
      TX(s, { x: ax2 + 0.32, y: yy + 0.2, w: 0.25, h: 0.24, str: "✓", s: 11, b: true, c: PERI });
      TX(s, { x: ax2 + 0.56, y: yy + 0.2, w: aw - 0.9, h: 0.24, str: yes, s: 10, b: true, c: INK, va: "middle" });
    });
    // scope strip
    RR(s, { x: MX, y: 6.28, w: CW, h: 0.5, rad: 0.1, fill: LGRAY });
    TX(s, { x: MX + 0.3, y: 6.28, w: CW - 0.6, h: 0.5, s: 10, c: "5B5F63", va: "middle",
      runs: [{ t: "Out of scope for six months:  ", b: true, c: INK }, { t: "family live feed · automated care levels · multi-EHR platform · independent-living rollout · night-staffing “optimization.”" }] });
    foot(s, 4, ["Prompt: Product direction"]);

    // =======================================================================
    // 5 — ASSUMPTIONS & OPEN QUESTIONS
    // =======================================================================
    s = slide(GROUND);
    s.notes = "These are ranked, and the order matters. If assumption one fails, nothing downstream can save the bet — a review workflow on noisy signals just routes noise to the most overloaded person in the building. That's why the retrospective study is first and cheap: no engineering, just replaying history. The thresholds are placeholders I'd pressure-test with clinical leadership, but committing to numbers — and to named pivots — is the point: this is a bet with exits, not a roadmap with momentum.";
    kicker(s, "Teton interview readout   ·   De-risking");
    head(s, "What must be true — ranked risks, the tests, and what would change the plan", "Signal quality gates everything; workflow fit decides the shape; behavior change decides the value.");
    table(s, {
      x: MX, y: 1.98, w: CW, colW: [3.15, 4.75, 3.73], headH: 0.44, rowH: 0.72,
      header: ["Riskiest assumption", "How we test it (before scaling the build)", "Gate to proceed"],
      rows: [
        ["1 · Signal separates real decline from noise, weeks early", "Retrospective: replay 12 months of care-level changes, falls, hospitalizations & change-of-condition events across 2–3 buildings against Teton data", "≥60% of true declines show signal ≥2 weeks pre-event — at ≤3 candidates/bldg/wk"],
        ["2 · A named owner + existing cadence can absorb review", "Discovery: shadow reassessments, morning huddles, family-conference prep; map where change-of-condition lives (August / EHR / paper)", "A named role commits ≤10 min/week inside a meeting that already exists"],
        ["3 · Reviewed evidence changes what staff do", "Concierge pilot: hand-built weekly candidates in 2 communities, resolved in the real cadence", "≥70% of candidates resolved; ≥40% of confirmed → monitor / intervene / reassess"],
        ["4 · Evidence de-escalates rather than reads as surveillance", "Staff-approved summaries used in real care conferences; director + family debriefs", "Directors reuse it unprompted; zero consent red flags"],
      ],
    });
    // bottom-left — discovery questions (lavender)
    const q5w = 5.66, q5y = 5.34, q5h = 1.5;
    RR(s, { x: MX, y: q5y, w: q5w, h: q5h, rad: 0.12, fill: LAV });
    TX(s, { x: MX + 0.3, y: q5y + 0.16, w: q5w - 0.6, h: 0.3, str: "Discovery questions", s: 12, b: true, c: INK });
    TX(s, { x: MX + 0.3, y: q5y + 0.54, w: q5w - 0.6, h: 0.9, s: 9.8, c: "4A4458", ls: 1.05, pas: 2, bullets: [
      "Who owns reassessment today, and what triggers it?",
      "Which signals do nurses trust vs. dismiss?",
      "What candidate volume is useful vs. another inbox?"] });
    // bottom-right — what would change my mind (butter)
    const p5x = 6.82, p5w = RIGHT - p5x;
    RR(s, { x: p5x, y: q5y, w: p5w, h: q5h, rad: 0.12, fill: BUTTER });
    TX(s, { x: p5x + 0.3, y: q5y + 0.16, w: p5w - 0.6, h: 0.3, str: "What would change my mind", s: 12, b: true, c: INK });
    TX(s, { x: p5x + 0.3, y: q5y + 0.54, w: p5w - 0.6, h: 0.9, s: 9.8, c: "6E6234", ls: 1.05, pas: 2, bullets: [
      "Gate 1 fails → deepen the proven fall → EHR documentation wedge",
      "Gate 2 fails, signal holds → attach evidence to scheduled reassessments only",
      "Volume intolerable → raise the threshold: fewer, stronger candidates"] });
    foot(s, 5, ["Prompt: Info needed", "Prompt: Validate assumptions"]);

    // =======================================================================
    // 6 — PLAN & MEASUREMENT
    // =======================================================================
    s = slide(GROUND);
    s.notes = "The plan front-loads the cheapest, most falsifiable test and keeps engineering off the critical path until the signal gate clears. Adoption is driven the same way the night shift adopted falls — by fitting an existing ritual, with the design partners who told us the problem as first users. On metrics: the ladder is ordered so vanity can't hide — usage without action fails the middle tier, action without earlier detection fails the top. The single number I'd put on a wall is median weeks-earlier detection. The last line closes the loop the deck opened on: the renewal clock.";
    kicker(s, "Teton interview readout   ·   Six-month plan");
    head(s, "Six months to prove it: reviewed → acted on → weeks earlier", "Validate on history, pilot by hand, automate what worked — and hand Dana a renewal answer.");
    // month ruler + three phase bars (retro=dark, pilot=lavender, MVP=periwinkle)
    const tlx = MX, tlw = CW, mW = tlw / 6;
    for (let m = 0; m <= 6; m++) LN(s, { x: tlx + m * mW, y: 2.02, w: 0, h: 0.12, c: BORDER, wt: 1 });
    for (let m = 1; m <= 6; m++) TX(s, { x: tlx + (m - 1) * mW, y: 1.98, w: mW, h: 0.22, str: "M" + m, s: 8.5, b: true, c: MUTED, al: "center" });
    const bars = [[0, 2, DARK, "FFFFFF", "M1–2 · Retrospective + workflow discovery", "Gate 1 · 2 ✓"],
      [1, 3, LAV, INK, "M2–4 · Concierge pilot  (eng builds in parallel)", "Gate 3 ✓"],
      [3, 6, PERI, "FFFFFF", "M4–6 · MVP measured launch", "2–3 partners"]];
    bars.forEach(([m0, m1, fill, tc, label, gate], i) => {
      const bx = tlx + m0 * mW, bw2 = (m1 - m0) * mW, byy = 2.34 + i * 0.44;
      const outX = bx + bw2 + 0.12, inside = outX + 1.5 > PAGEW - 0.1;  // keep gate label on-slide
      RR(s, { x: bx, y: byy, w: bw2, h: 0.38, rad: 0.09, fill });
      TX(s, { x: bx + 0.16, y: byy, w: bw2 - (inside ? 1.75 : 0.3), h: 0.38, str: label, s: 9.5, b: true, c: tc, va: "middle" });
      if (inside) TX(s, { x: bx + bw2 - 1.68, y: byy, w: 1.52, h: 0.38, str: gate, s: 8.5, b: true, i: true, c: tc, al: "right", va: "middle" });
      else TX(s, { x: outX, y: byy, w: 1.6, h: 0.38, str: gate, s: 8.5, b: true, i: true, c: PERI, va: "middle" });
    });
    TX(s, { x: MX, y: 3.72, w: CW, h: 0.26, str: "Build stays off the critical path until the signal gate clears.", s: 9.5, i: true, c: MUTED });

    // metric ladder — three columns, arrow flow
    const cols = [["REVIEWED", "does the loop run?", ["% candidates resolved in cadence", "% confirmed meaningful by reviewers", "median time from signal to review"], false],
      ["ACTED", "does behavior change?", ["actions per confirmed candidate", "reassessments initiated with Teton evidence", "family conferences using approved summaries"], false],
      ["OUTCOMES", "does care change?", ["median weeks-earlier detection (north star: week 2, not 12)", "% reassessments backed by documented evidence", "length-of-stay / escalation trend (directional)"], true]];
    const ldy = 4.12, ldh = 1.86, colW6 = 3.62, gap6 = (CW - 3 * colW6) / 2;
    cols.forEach(([h, sub, metrics, star], i) => {
      const cx0 = MX + i * (colW6 + gap6);
      RR(s, { x: cx0, y: ldy, w: colW6, h: 0.56, rad: 0.1, fill: star ? MINT : LGRAY });
      TX(s, { x: cx0 + 0.24, y: ldy + 0.08, w: colW6 - 0.4, h: 0.24, str: h, s: 12, b: true, c: INK, cs: 0.5 });
      TX(s, { x: cx0 + 0.24, y: ldy + 0.31, w: colW6 - 0.4, h: 0.22, str: sub, s: 9.5, i: true, c: star ? "4C6152" : MUTED });
      metrics.forEach((m, j) => {
        const my = ldy + 0.72 + j * 0.4;
        EL(s, { x: cx0 + 0.06, y: my + 0.06, w: 0.08, h: 0.08, fill: star && j === 0 ? PERI : "C4C4C4" });
        TX(s, { x: cx0 + 0.26, y: my - 0.02, w: colW6 - 0.3, h: 0.4, str: m, s: 9.3, b: star && j === 0, c: star && j === 0 ? INK : "4A4A4A", ls: 1.02 });
      });
      if (i < 2) TX(s, { x: cx0 + colW6 - 0.02, y: ldy + 0.06, w: gap6 + 0.04, h: 0.5, str: "→", s: 20, b: true, c: PERI, al: "center", va: "middle" });
    });

    // bookend — dark closing callout (mirrors the slide-1 clock)
    RR(s, { x: MX, y: 6.16, w: CW, h: 0.74, rad: 0.12, fill: DARK });
    TX(s, { x: MX + 0.35, y: 6.16, w: CW - 0.7, h: 0.74, s: 11, c: "D6D8DE", va: "middle", ls: 1.08,
      runs: [{ t: "At renewal, Dana's ROI answer becomes countable:  ", c: "9AA0B0" }, { t: "N residents caught weeks earlier. M reassessments documented with objective evidence. Family conversations that land.", b: true, c: "FFFFFF" }, { t: "  — and never a night-staffing cut.", c: "9AA0B0" }] });
    foot(s, 6, ["Prompt: Validate solution", "Prompt: Drive adoption", "Prompt: Measure success"]);

    return K.deck;
  }
};
