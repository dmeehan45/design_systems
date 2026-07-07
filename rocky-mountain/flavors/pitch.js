// Flavor: Pitch — an investor / sales pitch deck.
// Sample: a fictional startup "Northpeak". The brand wordmark is swapped to show
// the system works for any presenting company. Replace all content for your own.
const CO = "Northpeak";
module.exports = {
  name: "pitch",
  file: "pitch-template.pptx",
  brand: CO,
  footer: `${CO}  ·  Series A`,
  title: `${CO} — Pitch`,
  usesCloud: true,
  build(K) {
    const { slide, RR, EL, LN, TX, IM, eyebrow, twoTone, hairline, footer, statBlock, pill, photo, statusRow, wordmark,
      INK, MUTED, GROUND, DARK, PERI, MINT, LAV, BUTTER, LGRAY, MUTED_D, MX } = K;
    const CLOUD = K.cloud;
    let s;

    // 1. COVER
    s = slide(DARK); s.notes = `One-line pitch up front. Sample company "${CO}" — replace with your own.`;
    wordmark(s, "FFFFFF");
    eyebrow(s, "Series A", MX, 2.55, MINT, MUTED_D);
    TX(s, { x: MX - 0.02, y: 2.95, w: 11.6, h: 2.1, s: 52, b: true, ls: 1.0, runs: [{ t: CO, c: "FFFFFF", br: true }, { t: "The work runs itself", c: MUTED_D }] });
    TX(s, { x: MX, y: 5.35, w: 10.5, h: 0.5, str: `${CO} turns operational busywork into automatic, auditable actions — no rules to write.`, s: 15, c: "C9CCD4" });
    TX(s, { x: MX, y: 6.75, w: 11, h: 0.35, str: "SERIES A   ·   2026", s: 10.5, b: true, c: MUTED_D, cs: 2 });

    // 2. PROBLEM
    s = slide(GROUND); s.notes = "Frame the pain with numbers. Illustrative sample figures.";
    twoTone(s, "The problem", "Ops still runs on manual work", MX, 0.62, 11, 29);
    [["9 hrs", "a week the average ops team loses to manual busywork"], ["60%", "of that work is repetitive and rules-shaped"], ["$40k", "the yearly cost of it, per ops hire"]].forEach(([n, c], i) => statBlock(s, n, c, MX, 2.2 + i * 1.5, 6.1, INK, MUTED, 42));
    photo(s, 7.5, 2.2, 4.98, 4.35, "Add a customer-in-context photo");
    footer(s, 2);

    // 3. INSIGHT
    s = slide(LGRAY); s.notes = "The non-obvious reframe the whole pitch rests on.";
    eyebrow(s, "The insight", MX, 2.35, PERI);
    TX(s, { x: MX, y: 2.8, w: 12.0, h: 1.95, s: 34, b: true, ls: 1.14, runs: [
      { t: "The tools already know what to do.", c: INK, br: true },
      { t: "They just don't ", c: INK }, { t: "do", c: PERI }, { t: " it — yet.", c: INK }] });
    TX(s, { x: MX, y: 5.05, w: 9.8, h: 1, str: `Every system already emits the signal. ${CO} reads it, decides, and takes the next action — then shows its work, so a human can trust it.`, s: 16, c: "4A4A4A", ls: 1.15 });
    footer(s, 3);

    // 4. SOLUTION / PRODUCT
    s = slide(GROUND); s.notes = "What it is, in three capabilities. The panel is illustrative.";
    eyebrow(s, "The product", MX, 0.6, PERI);
    twoTone(s, CO, "Automation that explains itself", MX, 0.95, 11, 28);
    [["Reads the work", "Connects to the systems you already run — no new data model."],
     ["Decides in context", "Chooses the next action and says why, in plain language."],
     ["Acts, with a trail", "Executes and logs every step, so nothing is a black box."]].forEach(([t, d], i) => {
      const y = 2.7 + i * 1.32;
      TX(s, { x: MX, y, w: 6.0, h: 0.4, str: t, s: 17, b: true, c: INK });
      TX(s, { x: MX, y: y + 0.42, w: 6.0, h: 0.7, str: d, s: 13.5, c: MUTED, ls: 1.1 });
    });
    const px = 7.35, pw = 5.13;
    RR(s, { x: px, y: 2.55, w: pw, h: 3.95, rad: 0.14, fill: DARK, shadow: true });
    TX(s, { x: px + 0.35, y: 2.85, w: pw - 0.7, h: 0.3, str: `${CO.toUpperCase()} · QUEUE`, s: 10, b: true, c: MUTED_D, cs: 1.5 });
    [["Reconcile invoices", "Done", MINT], ["Flag anomalies", "Running", PERI], ["Draft the follow-ups", "Queued", BUTTER]].forEach(([name, st, col], i) => {
      statusRow(s, px + 0.35, 3.3 + i * 0.9, pw - 0.7, name, st, col);
    });
    TX(s, { x: px, y: 6.05, w: pw, h: 0.3, str: `Illustrative — ${CO} action queue`, s: 10, i: true, c: MUTED, al: "center" });
    footer(s, 4);

    // 5. HOW IT WORKS
    s = slide(DARK); s.notes = "The 'real, not magic' beat. Abstract hero — swap for a product still.";
    IM(s, { x: 6.7, y: 0.9, w: 6.4, h: 5.12, path: CLOUD, alt: "Abstract intelligence visual" });
    eyebrow(s, "How it works", MX, 1.15, MINT, MUTED_D);
    TX(s, { x: MX, y: 1.5, w: 6.2, h: 1.5, s: 30, b: true, ls: 1.02, runs: [{ t: "Watch. Decide.", c: "FFFFFF", br: true }, { t: "Act.", c: MUTED_D }] });
    [["01", "Watch", "Connects to your stack and learns the shape of the work — no rules to write."],
     ["02", "Decide", "Picks the next action and explains the reasoning behind it."],
     ["03", "Act", "Executes with a full audit trail; a human can approve or step in."]].forEach(([n, t, d], i) => {
      const y = 3.35 + i * 1.12;
      EL(s, { x: MX, y, w: 0.5, h: 0.5, fill: "23262F", line: { c: PERI, w: 1.25 } });
      TX(s, { x: MX, y, w: 0.5, h: 0.5, str: n, s: 13, b: true, c: PERI, al: "center", va: "middle" });
      TX(s, { x: MX + 0.72, y: y - 0.04, w: 5.4, h: 0.35, str: t, s: 16, b: true, c: "FFFFFF" });
      TX(s, { x: MX + 0.72, y: y + 0.32, w: 5.5, h: 0.6, str: d, s: 12, c: MUTED_D, ls: 1.1 });
    });
    footer(s, 5, true);

    // 6. TRACTION
    s = slide(GROUND); s.notes = "The proof. Sample startup metrics — replace with your real ones.";
    twoTone(s, "Traction", "It's already working", MX, 0.62, 11, 29);
    [["$2.4M", "ARR, up 4× year on year"], ["140%", "Net revenue retention"], ["120+", "Teams live in production"], ["8 wks", "Median payback for a customer"], ["4.1M", "Actions taken automatically"], ["<2%", "Monthly logo churn"]].forEach((g, i) => {
      const x = [MX, 6.95][i % 2], y = [2.35, 3.8, 5.25][Math.floor(i / 2)];
      statBlock(s, g[0], g[1], x, y, 5.4, INK, MUTED, 34);
    });
    footer(s, 6);

    // 7. TESTIMONIALS
    s = slide(GROUND); s.notes = "Proof in customers' voices. Fictional sample quotes.";
    twoTone(s, "Customers say it best", "Why they stay", MX, 0.62, 11.5, 29);
    [{ tint: LAV, tag: "FINTECH", q: `${CO} quietly does a job we were about to hire two people for.`, by: "Devin", role: "Head of Ops" },
     { tint: BUTTER, tag: "MARKETPLACE", q: "We went live in a week and never looked back.", by: "Priya", role: "COO" },
     { tint: MINT, tag: "SAAS", q: "The audit trail is what got it past our risk team.", by: "Marco", role: "VP Finance" }
    ].forEach((q, i) => {
      const qw = 3.72, qx = MX + i * (qw + 0.23), qy = 2.3, qh = 3.85;
      RR(s, { x: qx, y: qy, w: qw, h: qh, rad: 0.12, fill: q.tint });
      TX(s, { x: qx + qw - 1.9, y: qy + 0.3, w: 1.6, h: 0.3, str: q.tag, s: 9, b: true, c: "6A6A6A", al: "right", cs: 1.5 });
      TX(s, { x: qx + 0.28, y: qy + 0.2, w: 1, h: 0.9, str: "“", s: 54, b: true, c: INK });
      TX(s, { x: qx + 0.35, y: qy + 1.25, w: qw - 0.7, h: 1.7, str: q.q, s: 15, c: INK, ls: 1.12 });
      TX(s, { x: qx + 0.35, y: qy + qh - 0.68, w: qw - 0.7, h: 0.4, s: 12, runs: [{ t: q.by + "  ", c: INK, b: true }, { t: q.role, c: "5F5F5F" }] });
    });
    footer(s, 7);

    // 8. WHY NOW / MARKET
    s = slide(GROUND); s.notes = "Why this, why now. Three market signals. Sample figures.";
    twoTone(s, "Why now", "The market just tipped", MX, 0.62, 11, 29);
    [["$48B", "spent yearly on the ops work we automate"], ["3×", "faster tooling adoption since models got good"], ["71%", "of teams now piloting automation, up from 22%"]].forEach(([n, c], i) => statBlock(s, n, c, MX, 2.2 + i * 1.5, 6.1, INK, MUTED, 42));
    photo(s, 7.5, 2.2, 4.98, 4.35, "Add a market or trend chart");
    footer(s, 8);

    // 9. WHY US
    s = slide(GROUND); s.notes = "Position against the alternatives. Northpeak is the mint card.";
    twoTone(s, "Why us", "The alternatives fall short", MX, 0.62, 11.5, 29);
    [{ name: CO, rec: true, rows: [["Time to value", "1 week"], ["Explainability", "Full audit trail"], ["Setup", "No rules to write"], ["Coverage", "Grows on its own"]] },
     { name: "Build in-house", rec: false, rows: [["Time to value", "2–3 quarters"], ["Explainability", "You build it"], ["Setup", "Heavy"], ["Coverage", "Only what you code"]] },
     { name: "Legacy RPA", rec: false, rows: [["Time to value", "Months"], ["Explainability", "Brittle scripts"], ["Setup", "Rule-by-rule"], ["Coverage", "Breaks on change"]] }
    ].forEach((o, i) => {
      const ow = 3.72, ox = MX + i * (ow + 0.23), oy = 2.2, oh = 4.55;
      RR(s, { x: ox, y: oy, w: ow, h: oh, rad: 0.12, fill: o.rec ? MINT : LGRAY, shadow: o.rec });
      if (o.rec) pill(s, "NORTHPEAK", ox + 0.3, oy + 0.32, 1.55, INK, "FFFFFF");
      TX(s, { x: ox + 0.3, y: oy + 1.0, w: ow - 0.6, h: 0.85, str: o.name, s: 17, b: true, c: INK, ls: 1.02 });
      o.rows.forEach(([k, v], j) => {
        const ry = oy + 2.0 + j * 0.6;
        TX(s, { x: ox + 0.3, y: ry, w: ow - 0.6, h: 0.25, str: k.toUpperCase(), s: 8.5, b: true, c: o.rec ? "5A6152" : MUTED, cs: 1 });
        TX(s, { x: ox + 0.3, y: ry + 0.24, w: ow - 0.6, h: 0.38, str: v, s: 12.5, c: INK });
      });
    });
    footer(s, 9);

    // 10. ROADMAP
    s = slide(GROUND); s.notes = "Where the product goes. Sequence, not exact dates.";
    twoTone(s, "The roadmap", "Now, next, later", MX, 0.62, 11.5, 29);
    [{ h: "NOW", items: ["Finance & ops workflows", "Audit-trail dashboard", "Self-serve onboarding"] },
     { h: "NEXT", items: ["Open action API", "Team approval flows", "Two new verticals"] },
     { h: "LATER", items: ["Marketplace of actions", "On-prem deployment", "International expansion"] }
    ].forEach((c, i) => {
      const ow = 3.72, ox = MX + i * (ow + 0.23), oy = 2.3, oh = 4.1;
      RR(s, { x: ox, y: oy, w: ow, h: oh, rad: 0.12, fill: LGRAY });
      TX(s, { x: ox + 0.4, y: oy + 0.4, w: ow - 0.8, h: 0.35, str: c.h, s: 11, b: true, c: PERI, cs: 1.5 });
      TX(s, { x: ox + 0.4, y: oy + 1.0, w: ow - 0.8, h: 2.8, s: 14.5, c: INK, pas: 12, bullets: c.items });
    });
    footer(s, 10);

    // 11. THE ASK
    s = slide(DARK); s.notes = "Close on the raise and what it buys. Then stop.";
    wordmark(s, "FFFFFF");
    eyebrow(s, "The ask", MX, 2.35, MINT, MUTED_D);
    TX(s, { x: MX - 0.02, y: 2.6, w: 11, h: 2.15, s: 44, b: true, ls: 1.04, runs: [{ t: "Raising our Series A", c: "FFFFFF", br: true }, { t: "to scale what's working", c: MUTED_D }] });
    [["$12M", "round size"], ["Go-to-market", "primary use of funds"], ["$10M ARR", "next milestone"]].forEach(([a, b], i) => {
      const x = MX + i * 3.7;
      TX(s, { x, y: 5.05, w: 3.4, h: 0.5, str: a, s: 24, b: true, c: "FFFFFF" });
      TX(s, { x, y: 5.58, w: 3.4, h: 0.4, str: b, s: 12.5, c: MUTED_D });
    });
    pill(s, "Let's talk: hello@northpeak.example", MX, 6.35, 4.7, MINT, INK);
    return K.deck;
  }
};
