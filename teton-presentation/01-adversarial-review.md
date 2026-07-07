# Teton.ai PM Challenge — Adversarial Review of the Deck Thinking

**Reviewed artifact:** "From Ambient Monitoring to Reviewed Care Action" slide spec (6 slides)
**Review date:** 2026-07-07
**Verdict:** The core strategic call is right and survives adversarial pressure. The execution has four high-severity gaps — a missing human story, an unexamined partner-overlap problem, invented vocabulary where industry vocabulary exists, and two unverifiable statistics — plus a deck layout that overloads slides 5–6 past what any 6-slide format can hold. The improved spec (see `02-improved-deck-spec.md`) fixes all of these.

---

## Part 1 — Reflection: the opportunity space and whether we picked the right one

The transcript contains at least nine distinct opportunities. Any honest review has to start by showing they were all seen, then defend the pick.

| # | Opportunity | Evidence in transcript | Assessment |
|---|---|---|---|
| 1 | Sharpen fall detection accuracy | Bent-over gentleman flagged 2×/day; cat-petting false alarm; "trust drains out" | **Reject as the bet.** Dana: false alarms are "annoying, not existential" and much improved. Incremental; doesn't touch the decision-hours gap. But it is *not* free to ignore — trust in hard alerts colors trust in soft signals (Marcus). Handle as a design constraint, not an initiative. |
| 2 | Day-shift adoption / trust push | Marcus: "Get my day shift as bought-in as my night shift and I'd get more out of Teton than anything new you could ship" | **Reject as framed, absorb as constraint.** Day shift doesn't open the app because there is nothing for them in it — rooms are empty by day. More logins to an empty view is a vanity goal. The correct response is to give the daytime clinical workflow a reason to touch Teton evidence — which is what the chosen bet does. |
| 3 | Earlier detection of resident decline → care-level alignment | Dana's entire "keeps me up at night" monologue; "delivering level-four care and billing level-two"; the 10–12-week resident story | **Pursue. This is the bet.** It is the only opportunity that simultaneously touches clinical outcomes, family trust, revenue integrity, and the renewal/ROI question. Dana explicitly values it at "ten times the fall alerting." |
| 4 | Insight feed → action conversion (Samwise noise) | Marcus: "okay… and?"; Dana: "looked at, not acted on"; strong nurses overloaded, new staff see noise | **Pursue — as the mechanism, not a separate opportunity.** #3 is the *what*, #4 is the *why it fails today*. The original spec correctly fused these. |
| 5 | Family live-view portal | "Three or four adult kids ask if there's a feed"; "it would get them off my back" | **Reject.** Classic feature-request trap. Surveillance backlash is in the same transcript ("suddenly you're 'surveilling' mom"). Contradicts Teton's privacy-by-design positioning. Demote to staff-mediated evidence summaries. |
| 6 | Evidence-backed family care conversations | Dana: "that's where the data can be a hero… directors turn a hostile family completely around"; but "totally ad hoc" | **Pursue as downstream output of #3.** Correctly scoped in the original spec as staff-approved, post-review only. |
| 7 | EHR integration | Dana: "a quiet killer… as long as Teton's a separate island, it's a thing people glance at, not part of the record" | **Pursue narrowly via August.** Full multi-EHR is a platform program, not a six-month bet. The August partnership (verified, announced Feb 2026) already gives a bidirectional path: falls → August documentation, census → Teton, with "observed changes in mobility, sleep, or daily routines" explicitly named as the roadmap. Ride it. |
| 8 | ROI story for the owner group / leaner night shift | "What's the ROI on Teton… hand-waving and one or two good fall stories"; owners floated cutting night staff | **Pursue the ROI narrative, refuse the staffing frame.** Dana carries the clinical risk and is nervous; nobody wants to own that incident. The bet must generate a countable ROI story that is *not* labor reduction — care-level alignment, earlier intervention, and (the metric the REIT actually tracks) length of stay and occupancy. |
| 9 | Independent-living expansion | Owners: "put it across the whole campus" | **Defer.** Different population, different signal base rates, unvalidated. Naming it as explicitly out of scope earns credibility. |

**Conclusion of the reflection:** the original spec picked the right opportunity (#3 via mechanism #4, with #6 and #7 as bounded satellites) and rejected the right traps (#1, #2-as-framed, #5, #9). That judgment stands. Everything below is about making the argument sharper, truer, and presentable in six slides.

---

## Part 2 — Adversarial findings

### High severity

**F1. The deck has no human story — and the transcript hands you a perfect one.**
Dana's anecdote is the single best artifact in the interview: a resident visibly declining for 10–12 weeks, "up four, five times a night… that's not exactly subtle" (Marcus), caught only at crisis. Dana's own sentence contains the entire value proposition in miniature: *"If we'd caught it in week two instead of week twelve, that's a different care plan, a different conversation with the family, a different revenue line for that whole stretch. And maybe she's not in the hospital."* Clinical, family, financial, outcome — four value streams in one quote. The current spec never puts this story on a slide. **Fix:** make "Week 2, not week 12" the deck's spine — the title, the slide-2 timeline visual, and the north-star outcome metric (median weeks-earlier detection). A 6-slide interview deck is remembered by its story, not its framework.

**F2. Unexamined partner overlap: August Health already ships acuity flagging.**
Verified against August's current site: August Health *Insights* "scans resident data in real time and flags early signs of change, from rising acuity to potential compliance risks," and the *Resident Watchlist* "uses predictive intelligence to flag residents who may be considered rising or high risk." An interviewer who knows the partner's product will ask the killer question: *"Isn't your Acuity Review Loop just August's Watchlist?"* The original spec has no answer because it treats August only as an integration rail.
**Fix — and it's a gift, not a threat:** August's flags are built on *documented* data (charted observations, weights, med events, overdue assessments). The interview's central problem is *undocumented* decline — unwitnessed falls "we only heard about after," nighttime activity nobody charts, PRN help nobody logs. The ASHA/August Health clinical leaders survey itself reports that ~two-thirds of clinical leaders believe acuity is *systematically underreported* — the EHR-side view is structurally blind here. Teton is the only continuous, objective observer of what never gets charted. So the positioning is: **Teton supplies the observed-evidence layer underneath the partner's documented-data workflow** — feed change-of-condition candidates *into* August's escalation/watchlist surface rather than building a competing review inbox. This converts a competitive liability into the differentiation slide, and it makes "where does review happen?" mostly answered rather than open.

**F3. "Acuity Review Loop" is invented vocabulary; the industry already has the word.**
Dana says reassessment happens "quarterly, or on a change of condition." *Change of condition* is the regulatorily meaningful, workflow-native construct in assisted living — it is the existing trigger for reassessment, it is surveyor-visible, and it is a named object in August's product (Care Track lets caregivers "escalate important observations, such as resident behavior changes or shifts in care needs"). Naming the initiative the **Change-of-Condition Review Loop** means the product accelerates a workflow that already exists instead of asking the customer to adopt a concept Teton made up. It also quietly answers "where does the outcome get documented?" — in the change-of-condition record that already drives reassessment. The original spec buried "document change of condition" as one of five resolution options; it is actually the destination of the whole loop.

**F4. Two statistics in the spec fail fact-check.**
- The **"$700/month increase in care revenue per resident"** attributed to the August survey: not found in the announcement coverage of either the 2024 or 2025 ASHA/August reports. Do not put an unverifiable dollar figure in an interview deck for the company that published the report. Replace with an *illustrative, clearly-labeled* sizing sketch derived from the interview itself (see F8).
- The **"only 15% report full implementation"** of predictive analytics: contradicted by coverage of the survey, which reports roughly **one-third piloting or implementing** AI-based alerts/predictive analytics, with about **half expressing interest**.
- Verified and safe to use instead: **75% of clinical leaders report caring for higher-acuity residents than five years ago**, and **nearly two-thirds believe acuity is systematically underreported** due to delayed assessments, intentional underscoring, and undocumented PRN services (ASHA / August Health Clinical Leaders Report, Dec 2025, n≈68 clinical leaders).

### Medium severity

**F5. Slide 2 conflates two different failure modes.**
"Signal-to-action conversion" bundles (a) a *precision/prioritization* problem — twenty undifferentiated soft signals, "is this another cat thing?" — and (b) an *ownership/workflow* problem — no owner, no cadence, no documentation path. These demand different mitigations and different kill criteria: (a) is tested by the retrospective study, (b) by workflow discovery and the concierge pilot. If (a) fails, no amount of workflow design saves the bet — you'd be routing noise to the most overloaded person in the building with an SLA attached. The improved deck names signal precision as the *gating* assumption (Assumption #1, tested first, with a numeric gate).

**F6. The rebuttal to Marcus's adoption objection is weaker than it needs to be.**
The spec answers "you can't build the fancy thing on a foundation where half my staff don't log in" with "we'll fit existing cadences." The genuinely sharp answer is **surface-area reduction**: this initiative does not require day-shift-wide app adoption at all. It asks *one* clinical owner to review *two-to-three* curated candidates per building per week, *inside a meeting that already happens*, in about *ten minutes* — and for August communities the evidence lands in the EHR they already live in, so "logging into Teton" may not even be required. Marcus's objection is about 30 floor staff adopting an app; the bet needs one nurse adopting a ritual.

**F7. No kill criteria, no pivot paths, mushy gates.**
"A meaningful subset of historical cases" is not a gate. A strong PM deck states numbers — even placeholders — and says what happens if they miss. The improved spec sets: retrospective gate (≥60% of true decline cases show detectable signal ≥2 weeks pre-event, at ≤3 candidates/building/week), concierge gates (≥70% of candidates resolved in cadence; ≥40% of confirmed candidates produce an action), and two explicit pivots (signal fails → deepen the fall→August documentation wedge; workflow fails but signal holds → attach evidence packs to scheduled quarterly reassessments only, no new cadence).

**F8. The economics are asserted, never sized.**
Dana hands you the sizing logic and the spec never uses it: under-assessment lag ≈ 10–12 weeks; care-level gaps of two levels; "across a building, across a region, that number is — I don't even want to say it out loud." An illustrative sketch (labeled as illustrative, validated in Phase 1): a 100-bed building with ~10% of residents under-leveled at ~$750/month average gap ≈ **~$90K/year per building** in care delivered but not billed — *before* counting avoidable hospitalizations, each of which threatens the length-of-stay and occupancy numbers the REIT owner actually tracks. Every financial line must be paired with its clinical twin, in Dana's own framing: "there's a clinical version of this problem and a money version, and they're the same problem." That pairing is also the answer to the deck's own worry about looking like revenue extraction.

**F9. The renewal narrative doesn't close.**
The deck opens with "yes, but the clock's running" and then never returns to it. The last slide should hand Dana the sentence she currently can't say to the owner group: not "hand-waving and one or two good fall stories," but *"N residents caught weeks earlier; M reassessments documented with objective evidence; family conversations that land"* — and never a night-staffing cut. Bookending the renewal clock gives the deck a beginning and an end.

**F10. Six months with no calendar.**
Phases read as sequential and unbounded; a skeptic notes Phase 2 (concierge) needs no engineering and asks what the engineers are doing. Map it: M1–2 retrospective + workflow discovery (build: nothing — data science only), M2–4 concierge pilot *while engineering builds detection and the evidence pack in parallel*, M4–6 MVP measured launch with the August handoff. Overlap is the point.

### Deck-layout findings

**F11. Slides 5 and 6 are physically unbuildable as specced.**
Slide 5 carries ~7 question clusters with 25+ sub-bullets; slide 6 carries three phases, each with sub-lists, plus three metric tiers of 6–8 metrics each. No 16:9 slide holds that at readable size. Fix: slide 5 becomes a 4-row ranked assumption/test/gate table plus a compact "what would change my mind" strip; slide 6 becomes a 3-bar timeline plus a 3×3 metric ladder. Everything cut moves to speaker notes.

**F12. Two problem slides before any answer.**
S1 and S2 are both diagnosis; the recommendation doesn't appear until S3. In a 6-slide evaluated deck, the answer should be visible by slide 2. Fix: S1 = insight synthesis (all four headline insights, so the evaluator sees breadth), S2 = the opportunity *including* the recommendation-shaped conclusion and the why-Teton differentiation, S3 = the bet and the rejected alternatives. Use action titles throughout — each title a complete claim, so the deck reads as an argument from titles alone.

**F13. The August Care Track interface is the strategic centerpiece and never appears.**
The deck argues evidence should land "where care teams already document" and then shows no picture of it. Slide 4 gets a Care Track-style wireframe card — a "suggested review" evidence card with trend sparkline and Start change of condition / Monitor / Dismiss actions — using August's real product vocabulary (Care Track, change of condition, escalation). One wireframe does more persuasion than three paragraphs.

**F14. Slide 3's table is over-written.**
Six rows × three columns of full sentences won't fit. Cap cells at ~8 words; the speaker notes carry the nuance.

**F15. Prompt coverage should be auditable at a glance.**
The challenge lists six required items. Add a small footer chip on each slide mapping it to the prompt questions it answers, so the evaluator can tick coverage without hunting.

### What survives review and should not be touched

- Rejecting automated care-level/billing recommendations — with the exact guardrail phrasing ("surface evidence that a resident may need clinical review"). This is the deck's best judgment call.
- Demoting the family feed to a staff-approved, post-review explanation. Correct read of a feature-request trap.
- "Looked at is not the same as acted on" as the diagnosis. Keep the line verbatim.
- Retrospective → concierge → MVP phasing. Textbook de-risking; the improved spec only adds dates, gates, and pivots.
- The cross-slide language rules (no clinical-judgment replacement, no billing automation, adoption as constraint, August as path not strategy, narrow scope). All retained.

---

## Part 3 — Fact-check register

| Claim in original spec | Status | Use instead |
|---|---|---|
| August–Teton partnership integrates ambient monitoring into EHR workflows, starting with fall documentation | ✅ Verified (announced Feb 2026; falls auto-create August documentation; bidirectional census exchange; "observed changes in mobility, sleep, or daily routines" named as roadmap) | Use as-is; it is strong support |
| Partnership is bidirectional (census data back to Teton) | ✅ Verified | Use as-is |
| August Care Track handles assessments, care plans, change-of-condition escalation | ✅ Verified (Care Track, Voice-to-Chart, August Intelligence care-plan generation) | Use August's real vocabulary in the wireframe |
| — (not in original spec) | ✅ New finding | August Insights + Resident Watchlist already flag rising acuity from EHR data — address head-on (F2) |
| "Nearly two-thirds believe acuity is underreported" | ✅ Verified (ASHA/August Clinical Leaders Report, Dec 2025) | Use as-is; add "75% report higher acuity than five years ago" |
| "$700/month increase in care revenue per resident" | ❌ Not verifiable | Replace with labeled illustrative sizing from interview logic (F8) |
| "Only 15% report full implementation" of predictive analytics | ❌ Contradicted | "~One-third piloting or implementing; ~half interested" (2024 survey) |
| High-quality assessments → better care-plan alignment, proactive intervention | ⚠️ Directionally supported, not quotable as a specific stat | Paraphrase without numbers |
