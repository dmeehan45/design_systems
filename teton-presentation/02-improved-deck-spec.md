# Improved Deck Spec — Teton.ai PM Challenge (build-ready)

**Deck title:** *Week 2, Not Week 12 — turning ambient signals into earlier care decisions*
**Format:** 6 slides, 16:9 (13.333" × 7.5"). No separate title slide — slide 1 carries the deck title as a kicker.
**Narrative spine:** Dana's resident declined visibly for 10–12 weeks before anyone acted. Teton saw it from week 2. The six-month bet is the workflow that closes that gap: the **Change-of-Condition Review Loop**.

The argument, read from titles alone:
1. The fall wedge earned trust at night — but Teton is dark when care decisions happen.
2. The opportunity: catch the change of condition in week 2, not week 12.
3. The six-month bet: a nurse-owned review loop — not more alerts, portals, or auto-leveling.
4. Product direction: the Change-of-Condition Review Loop, inside workflows that already exist.
5. What must be true: ranked risks, the tests, and what would change the plan.
6. Six months to prove it: reviewed → acted on → weeks earlier.

---

## Design system (tokens)

> ⚠️ Placeholder palette. teton.ai and augusthealth.com block automated fetch from this environment (HTTP 403), so exact brand values could not be measured. Before final build, run the repo's `website-to-pptx-design-system` skill against screenshots of teton.ai and augusthealth.com/care-track and swap these tokens. The layout spec below is palette-independent.

| Token | Value | Use |
|---|---|---|
| `ink` | `#16232E` | Titles, body text, table text |
| `paper` | `#FFFFFF` | Slide background |
| `wash` | `#F2F6F7` | Card fills, table banding, timeline track |
| `primary` | `#0F6B5C` (deep green) | Selected rows, loop-step headers, chart line for "Teton signal", chips |
| `night` | `#1E2A38` (slate) | Night-half fill on slide 1, contrast blocks |
| `accent` | `#E8A33D` (amber) | Callout strips, "attention" markers, the week-12 crisis marker |
| `alert` | `#C4453C` (red, sparing) | Crisis events only (fall, hospitalization) |
| `muted` | `#7C8A94` | Captions, footers, dismissed/rejected rows, axis labels |
| `line` | `#D7DFE3` | Card borders, dividers, table rules |

**Typography** (single family, weight-differentiated): headings **Source Sans 3 SemiBold** (fallback Arial Bold); body Source Sans 3 Regular (fallback Arial); data labels Source Sans 3 Regular with tabular numerals.
Sizes: slide kicker 11 pt caps `muted`, tracking +80; action title 26 pt `ink`; subtitle 14 pt `muted`; section labels 11 pt caps; body 12–13 pt; table body 11 pt; captions/footers 9.5 pt; quotes 13 pt italic.

**Master layout (all slides):**
- Kicker: x 0.6", y 0.32", w 12.1", h 0.3" — `TETON × CUSTOMER INTERVIEW READOUT · <slide-role>`
- Action title: x 0.6", y 0.62", w 12.1", h 0.75"
- Subtitle: x 0.6", y 1.34", w 12.1", h 0.35"
- Content zone: y 1.85" → 6.85"
- Footer, y 7.02": left — deck title, 9.5 pt `muted`; right — prompt-coverage chips: rounded rects, 9 pt, `wash` fill, `primary` text, e.g. `[Prompt: Key insights]`. Page number far right.
- Quotes styling everywhere: 13 pt italic `ink`, 2.5 pt left rule in `primary`, attribution 10 pt `muted` (— Marcus, ED / — Dana, VP Health Services).

---

## Slide 1 — insights

**Kicker role:** WHAT WE HEARD
**Action title:** The fall wedge earned trust at night — but Teton is dark when care decisions happen
**Subtitle:** Four insights from the interview, one renewal clock.

**Layout:** left visual 5.4" wide; right insight stack 6.5" wide; full-width bottom strip.

**Left — 24-hour split visual** (x 0.6", y 1.85", w 5.4", h 3.9"):
Two stacked horizontal bands sharing a 24h axis.
- Night band (`night` fill, white text), label **7 PM – 7 AM · LOAD-BEARING**: icons/rows for *Fall alerts in minutes (was: up to 40) · Digital rounds · Board watched all shift*. Tag chip (`primary`): "Night team's a believer."
- Day band (`wash` fill, `muted` text), label **7 AM – 7 PM · DARK**: rows for *Nurse assessments · Family visits · Care conferences · Care-level decisions* — each marked with a hollow circle = "happens here, without Teton."
- Caption under visual, 9.5 pt: Usage lives at night; decisions live in the day.

**Right — four insight cards** (x 6.3", y 1.85", w 6.4", each card h ~0.95", `paper` fill, `line` border, number chip in `primary`):
1. **The wedge works.** Night falls are why they bought and why they'd renew. *"For the night falls alone — yeah."*
2. **Dark during decision hours.** Day staff barely open the app — and daytime is when needs are interpreted, documented, and explained to families.
3. **Decline is caught ~10 weeks late.** Reassessment runs on memory and gut. One problem, two faces: clinical (falls, hospitalization) and financial (level-4 care billed at level 2).
4. **Insights get looked at, not acted on.** Twenty soft signals, no owner, no documentation path. *"Okay… and?"*

**Bottom strip** (x 0.6", y 5.95", w 12.1", h 0.85", `accent` 12% tint fill, 3 pt `accent` left rule):
**The clock:** Renewal today is *"yes, but the clock's running."* The owner group is already asking "what's the ROI on Teton?" — *"paying for a Ferrari to drive to the mailbox."*

**Footer chips:** `[Prompt: Key insights]`

**Speaker notes:** "I'm not opening with what's broken — the wedge works. Night falls are concrete, urgent, and tied to an obvious action, and the night team built its routine around them. The strategic problem is that the product is load-bearing for twelve hours and dark for the twelve when every care decision happens. Underneath sit two more insights: decline is caught about ten weeks late because reassessment is memory and gut, and the insight feed already sees this but produces glances, not actions. The renewal quote matters because it converts all of this from a product-quality issue into a commercial clock."

---

## Slide 2 — the opportunity

**Kicker role:** THE OPPORTUNITY
**Action title:** Catch the change of condition in week 2, not week 12
**Subtitle:** One real resident, twelve weeks, and the only company that could have seen it.

**Top — the story timeline** (x 0.6", y 1.85", w 12.1", h 2.35"): horizontal axis Week 1 → Week 12, `wash` track.
- Line chart above the track, `primary` line: *night rises per night*, points ~1.1 (W1) → 1.8 (W2) → 2.6 (W4) → 3.4 (W6) → 4.2 (W8) → 4.8 (W10-12). Label: **Teton's view (recorded, undocumented)**.
- Marker at W2, `primary` flag: **"Signal detectable here."**
- Track annotations in `muted`: W3–W11 — *more bathroom help (uncharted) · unwitnessed falls "heard about after" · no change-of-condition filed*. Label: **The building's view**.
- Marker at W12, `alert` flag: **"Caught here: fall → hospital → scramble reassessment → hostile family meeting → 10 weeks of level-4 care billed at level 2."**
- Quote right-aligned under chart: *"If we'd caught it in week two instead of week twelve, that's a different care plan, a different conversation with the family, a different revenue line… and maybe she's not in the hospital."* — Dana

**Bottom left — why this is the one opportunity** (x 0.6", y 4.45", w 6.1", h 2.35", card): header **One intervention, four payoffs** — 2×2 mini-grid, each cell icon + 2 lines:
- **Clinical** — intervene weeks earlier; fewer crisis events
- **Financial** — care plans sized right; end silent under-billing
- **Family** — trend evidence turns hostile conferences ("up 5×/night now, once a month ago")
- **Renewal** — a countable ROI story for owners; protects length-of-stay & occupancy — *never* a night-staffing cut

**Bottom right — why Teton wins this** (x 6.9", y 4.45", w 5.8", h 2.35", card, `primary` header bar): header **The decline that matters is undocumented**
- EHR-based risk flags — including our partner August Health's Resident Watchlist — can only read what staff *chart*.
- ~2/3 of clinical leaders say acuity is **systematically underreported**; 75% report higher acuity than 5 years ago (ASHA / August Health, 2025).
- Teton is the only continuous, objective observer of the unwitnessed nights → **the observed-evidence layer under the partner's documented-data workflow.**
- Sizing sketch (illustrative — Phase 1 validates): ~10 under-leveled residents × ~$750/mo gap ≈ **~$90K/yr per building**, before avoided hospitalizations.

**Footer chips:** `[Prompt: Problem / opportunity]`

**Speaker notes:** "This slide is one resident's twelve weeks. Teton recorded the pattern from the start; the organization saw it at week twelve, at crisis. I'm deliberately pairing the money and the care outcome because Dana does: 'a clinical version and a money version — the same problem.' And the differentiation point matters because August already flags rising acuity from EHR data — but EHR flags can only see what got documented, and the industry's own survey says acuity is systematically underreported. Teton's unique asset is the evidence nobody charted. The dollar figure is an illustration of the sizing logic, not a claim — validating it is literally Phase 1 of the plan."

---

## Slide 3 — the bet and the rejected alternatives

**Kicker role:** PRIORITIZATION
**Action title:** The six-month bet: a nurse-owned review loop — not more alerts, portals, or auto-leveling
**Subtitle:** One initiative fits the constraint. Five tempting options don't.

**Options table** (x 0.6", y 1.85", w 12.1", h 3.6"; header row `night` fill white text; banding `wash`; final row `primary` 12% tint, 2 pt `primary` outline, bold):

| Option | The pull | Why not the bet |
|---|---|---|
| Sharpen fall accuracy | Rebuild floor-staff trust | Incremental; never reaches decision hours |
| Day-shift adoption push | Marcus asks for exactly this | Nothing in the app for day shift yet; logins ≠ decisions |
| Family live-view portal | Adult kids keep asking | Surveillance backlash, consent burden; off-brand for privacy-first |
| Full multi-EHR integration | The EHR is the record | A dozen EHRs; a platform program, not a 6-month bet |
| Auto care-level recommendation | Maps straight to the money pain | "The algorithm raised mom's bill" — kills family & clinical trust |
| **Change-of-Condition Review Loop ✓** | **Turns signals Teton already has into owned, documented decisions** | **Bounded, testable, rides the live August integration** |

**Guardrail strip** (x 0.6", y 5.65", w 12.1", h 0.6", `primary` fill, white text, 13 pt):
**Teton surfaces evidence that a resident may need review. A nurse decides. Never a care-level or billing recommendation.**

**Held-tension note** (x 0.6", y 6.35", w 12.1", 10.5 pt `muted`):
Marcus: "You can't build the fancy thing if half my staff don't log in." · Dana: "Maybe the valuable thing is what gets them to log in." The bet honors both — the adoption surface is one nurse, not a shift (slide 4).

**Footer chips:** `[Prompt: Focus area]` `[Prompt: Product direction]`

**Speaker notes:** "Engineering capacity buys one initiative, so the slide shows what I'm saying no to and why. Each rejected option is genuinely tempting — most were requested verbatim in the interview — which is exactly why they're on the slide. The two I'd flag: the family portal is a classic feature-request trap the same transcript refutes, and auto care-leveling is the overreach version of the right idea — it converts Teton from care-quality ally into billing hammer. The guardrail sentence is the deck's most important sentence; it's also the renewal-protecting one."

---

## Slide 4 — product direction

**Kicker role:** PRODUCT DIRECTION
**Action title:** The Change-of-Condition Review Loop, inside workflows that already exist
**Subtitle:** Detect the trend, curate a shortlist, let a nurse decide, document where documentation already lives.

**Top — loop diagram** (x 0.6", y 1.8", w 12.1", h 1.55"): five chevron/boxes, `primary` header band, arrows L→R; step name 13 pt bold + one 10.5 pt line each:
1. **DETECT** — deviation from each resident's baseline over weeks — trends, not 2 AM alerts
2. **PRIORITIZE** — ≤3 candidates per building per week, ranked by confidence × clinical relevance
3. **REVIEW** — clinical lead confirms / monitors / dismisses — ~10 min inside an existing huddle
4. **DOCUMENT** — confirmed → change-of-condition record via **August integration** (printable evidence pack elsewhere)
5. **EXPLAIN** — staff-approved family summary for care conferences — only after human confirmation

**Middle left — Care Track-style wireframe card** (x 0.6", y 3.55", w 6.3", h 2.5"; white card, `line` border, subtle shadow; August-like UI):
- Header row: flag icon (`accent`) + **Suggested review — Rm 312 · E. Alvarez** + confidence chip "High"
- Signal line, 11 pt: **Night rises 1.2 → 4.6/night over 6 weeks** · sleep fragmentation ↑ · 2 possible unwitnessed events
- Sparkline (same data as slide 2, `primary`), evidence period caption: *May 18 – Jun 29 · full evidence pack →*
- Button row: `[Start change of condition]` (`primary`, filled) `[Monitor 2 weeks]` (outline) `[Dismiss — reason]` (ghost, `muted`)
- Caption under card, 9.5 pt: Mock: evidence lands in August Health Care Track, where change-of-condition documentation already lives. Every dismissal trains the detector.

**Middle right — "Why the adoption surface is small" card** (x 7.1", y 3.55", w 5.6", h 2.5"): header answers Marcus directly; four contrast rows (✗ `muted` / ✓ `primary`):
- ✗ 30 floor staff adopt an app → ✓ 1 clinical owner adopts a ritual
- ✗ A new dashboard → ✓ A meeting that already happens
- ✗ 20 soft signals → ✓ 2–3 curated candidates a week
- ✗ Single-event alerts (the cat, the bent-over gentleman) → ✓ Multi-week trends, robust to one bad frame

**Bottom — scope strip** (x 0.6", y 6.2", w 12.1", h 0.55", `wash` fill): **Out of scope for the six months:** family live feed · automated care levels · multi-EHR platform · independent-living rollout · night-staffing "optimization."

**Footer chips:** `[Prompt: Product direction]`

**Speaker notes:** "The MVP is deliberately boring in the right way. Detection runs on data Teton already collects; the model change is the unit of output — a weekly curated shortlist, not a feed. Review is a ten-minute ritual for one named owner. Documentation rides the August integration that already moves fall incidents into the EHR today — the announced roadmap explicitly names mobility, sleep, and routine changes as next, so this is swimming with the partnership current, not against it. For non-August communities, the fallback is a printable evidence pack — deliberately low-tech. And the false-alarm history is answered by design: trends spanning weeks are robust where single-frame events eroded trust, and dismissals feed back into ranking."

---

## Slide 5 — assumptions and open questions

**Kicker role:** DE-RISKING
**Action title:** What must be true — ranked risks, the tests, and what would change the plan
**Subtitle:** Signal quality gates everything; workflow fit decides the shape; behavior change decides the value.

**Assumption table** (x 0.6", y 1.85", w 12.1", h 3.25"; 4 rows; col widths ~3.4 / 4.6 / 4.1"):

| Riskiest assumption | How we test it (before scaling the build) | Gate to proceed |
|---|---|---|
| **1 · Signal.** Teton data separates real decline from noise, weeks early | Retrospective study: 12 months of care-level changes, falls, hospitalizations & change-of-condition events across 2–3 buildings, replayed against Teton data | ≥60% of true decline cases show detectable signal ≥2 weeks pre-event — at ≤3 candidates/bldg/wk |
| **2 · Workflow.** A named owner + existing cadence can absorb review | Discovery: shadow reassessments, morning huddles, family-conference prep; map where change-of-condition lives (August / other EHR / paper) | A named role commits ≤10 min/week inside a meeting that already exists |
| **3 · Action.** Reviewed evidence changes what staff do | Concierge pilot: hand-built weekly candidates in 2 communities, resolved in the real cadence | ≥70% of candidates resolved; ≥40% of confirmed → monitor / intervene / reassess / document |
| **4 · Family.** Evidence de-escalates rather than reads as surveillance | Staff-approved summaries used in real care conferences; director + family debriefs | Directors reuse it unprompted; zero consent red flags |

**Bottom left — still to learn** (x 0.6", y 5.3", w 6.1", h 1.45", card, header **Discovery questions**): Who owns reassessment today, and what actually triggers it? · Which signal types do nurses already trust vs. dismiss? · What candidate volume is useful vs. another inbox? · What is the minimum viable August handoff?

**Bottom right — pivots** (x 6.9", y 5.3", w 5.8", h 1.45", card, `accent` left rule, header **What would change my mind**): Gate 1 fails → redirect to deepening the proven fall→EHR documentation wedge. · Gate 2 fails, signal holds → attach evidence packs to scheduled quarterly reassessments only; no new cadence. · Volume intolerable → raise threshold: fewer, stronger candidates.

**Footer chips:** `[Prompt: Info needed]` `[Prompt: Validate assumptions]`

**Speaker notes:** "These are ranked, and the order matters. If assumption one fails, nothing downstream can save the bet — a review workflow on noisy signals just routes noise to the most overloaded person in the building. That's why the retrospective study is first and cheap: no engineering, just replaying history. The thresholds are placeholders I'd pressure-test with clinical leadership, but committing to numbers — and to named pivots — is the point: this is a bet with exits, not a roadmap with momentum."

---

## Slide 6 — plan and measurement

**Kicker role:** SIX-MONTH PLAN
**Action title:** Six months to prove it: reviewed → acted on → weeks earlier
**Subtitle:** Validate on history, pilot by hand, automate what worked — and hand Dana a renewal answer.

**Top — timeline** (x 0.6", y 1.85", w 12.1", h 1.5"): month ruler M1–M6; three overlapping bars:
- **M1–2 · Retrospective + workflow discovery** (`night`) — replay 12 months of history; shadow the cadences. Build: none — data science only. Gate 1 & 2 ✓ → proceed.
- **M2–4 · Concierge pilot** (`primary` 60%) — PM/CS hand-curate weekly candidates in 2 communities *while engineering builds detection + evidence pack in parallel*. Gate 3 ✓ → automate.
- **M4–6 · MVP measured launch** (`primary`) — automated candidates, review actions, August change-of-condition handoff, family summaries; 2–3 design partners (start with Dana & Marcus's buildings).

**Middle — metric ladder** (x 0.6", y 3.6", w 12.1", h 2.3"): three columns, arrow flow REVIEWED → ACTED → OUTCOMES; each column header 13 pt bold on `wash` band + three metrics at 11 pt:
- **REVIEWED — does the loop run?** % candidates resolved in cadence · % confirmed meaningful by reviewers · median time from signal to review
- **ACTED — does behavior change?** actions per confirmed candidate · reassessments initiated with Teton evidence · family conferences using approved summaries
- **OUTCOMES — does care change?** **median weeks-earlier detection (north star: week 2, not week 12)** · % reassessments backed by documented evidence · length-of-stay / avoidable-escalation trend (directional)

**Bottom — bookend callout** (x 0.6", y 6.1", w 12.1", h 0.75", `night` fill, white text):
At renewal, Dana's ROI answer stops being *"hand-waving and one or two good fall stories"*: **"N residents caught weeks earlier. M reassessments documented with objective evidence. Family conversations that land."** — and never a night-staffing cut.

**Footer chips:** `[Prompt: Validate solution]` `[Prompt: Drive adoption]` `[Prompt: Measure success]`

**Speaker notes:** "The plan front-loads the cheapest, most falsifiable test and keeps engineering off the critical path until the signal gate clears. Adoption is driven the same way the night shift adopted falls — by fitting an existing ritual, with the design partners who told us the problem as first users. On metrics: the ladder is ordered so vanity can't hide — usage without action fails the middle tier, action without earlier detection fails the top. The single number I'd put on a wall is median weeks-earlier detection. And the last line closes the loop the deck opened on slide 1: the renewal clock. Make Dana's answer to the owner group countable and the Ferrari line dies."

---

## Build notes (for pptx generation)

1. **Engine:** python-pptx or the pptx skill; 13.333" × 7.5" slide master per the geometry above. All positions given as x/y/w/h in inches from top-left.
2. **Charts:** slide 2 timeline and slide 4 sparkline share one dataset — night rises/night: `[(1,1.1),(2,1.8),(4,2.6),(6,3.4),(8,4.2),(10,4.8),(12,4.8)]`. Render as smoothed line, `primary`, 2.25 pt; no gridlines; W2 marker `primary`, W12 marker `alert`. Consult the `dataviz` skill before rendering.
3. **Brand pass:** run `website-to-pptx-design-system` on teton.ai + augusthealth.com/care-track screenshots (sites 403 automated fetch) and swap the token table; nothing else should need to move.
4. **Wireframe card (slide 4):** build from native shapes (rounded rects, text, sparkline), not a screenshot — it must read as a concept mock, not a claim about shipped UI. Keep the caption labeling it as a mock.
5. **Tables:** slide 3 and slide 5 tables must keep cells ≤2 lines at 11 pt; if overflow, cut words, never font size below 10.5.
6. **Verified-fact hygiene:** the only external stats allowed in the deck are the ASHA/August 2025 survey lines (75% higher acuity; ~2/3 say underreported) and the Feb 2026 partnership facts (falls → August documentation; bidirectional census; mobility/sleep/routine roadmap). The $90K sizing must keep its "illustrative" label.
7. **Tone rules carried over from the original spec (all retained):** evidence-not-recommendation language everywhere; family output staff-mediated only; adoption framed as constraint; August as path, not strategy; no staffing-reduction ROI anywhere.
