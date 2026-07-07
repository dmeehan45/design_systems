# Rocky Mountain — Slide Design System

A reusable design system for building polished, on-brand **PowerPoint decks** — product recommendations, strategy reviews, and pitches. It defines a locked palette, a type scale, slide-native components, and a set of templates, plus a generator (`rocky-mountain/build_deck.js`) that produces a ready-to-edit `.pptx` from these rules.

**Base mode:** light-native (near-white grounds, near-black ink) with a few intentional **dark full-bleed slides** for cover, dividers, and the "how it works" beat.

---

## 1. Design intent

Rocky Mountain reads as **calm, precise, and evidence-forward** — a well-made product, not corporate filler. The moves that produce that feeling, and which every deck should keep:

- **Whitespace is the design.** Slides are airy; one idea (or one stat grid) each. Generous margins, short text measures.
- **Lead with numbers, not adjectives.** The signature device is a **giant near-black figure** with a one-line muted caption. Evidence carries the argument.
- **Black is the action color.** Near-black ink also does the emphasis work; a single **periwinkle** accent marks the "intelligent/technical" moments; **pastel tints** (lavender, butter, mint) differentiate cards. The accent is punctuation — one per slide at most.
- **A two-tone headline** — a bold ink statement line over a lighter muted-gray support line — opens most slides.
- **Rounded, soft, unfussy.** Consistent generous corner radius on every card, chip, and frame; soft shadows, hairline dividers — never edge stripes or heavy chrome.

Ban vague words ("modern," "clean," "sleek") unless a concrete rule follows. If you write an adjective, replace it with the rule that produces the feeling.

## 2. Color system

The locked palette. Every value is canonical — use these exact tokens.

| Token | Hex | Best use | Misuse to avoid |
|---|---|---|---|
| Ground | `#FFFFFF` | Default light slide background | — |
| Light surface | `#F4F4F4` | Quiet inset panels, alternating rows, logo tiles | Competing with white cards |
| Ink | `#181818` | Primary text; giant stat numbers; logo; CTA fill | Pure `#000` for body — reserve black for action |
| Muted text | `#8E8E8E` | Headline support line; stat captions; meta | Primary headlines / stat numbers |
| Black (action) | `#000000` | The one primary CTA/callout per slide | Overusing until nothing stands out |
| Periwinkle | `#5A6CE6` | Tech/"how it works" beat, `STEP 0X` eyebrows, step dots, chart series 1, links | Spreading across calm content slides |
| Mint | `#BCEFCB` | Highlight pills, the "recommended" card, a soft brand fill | As text — fill only (fails contrast) |
| Lavender | `#E7E3F5` | Content/info cards and testimonial cards | As text; tiny fills |
| Butter | `#F3EEA0` | Content/testimonial cards | As a semantic "warning" color |
| Dark surface | `#16181C` | Cover, dividers, closing, "how it works", UI panels | Body text below ~12pt on it |
| Border | `#E6E6E6` | Hairline stat dividers, card borders, table rules | Heavy/dark rules |
| Photo tint | `#EFEDF7` | Image-placeholder panels | Leaving as flat gray |

On-color: **Ink on every tint** (mint / lavender / butter are all light — always dark text); **white on black / dark surface / periwinkle**. Chart order: Periwinkle → Ink → Muted → a warm tint last (for the one series you feature).

## 3. Typography

One geometric-humanist sans, differentiated by **weight**, no serif.

| Role | Font | Notes |
|---|---|---|
| Display, numbers, body, UI | **Calibri** (theme Major *and* Minor) | Ships with Office — renders true-to-width, no embedding. Hierarchy by weight, not family. |
| Optional closer geometric | Century Gothic | QA-unreliable in preview renders — titles only, add ~10% slack. |

Signature patterns: the **two-tone headline** (bold ink line + lighter muted line, same size); the **"● label" dot eyebrow**; the **periwinkle `STEP 0X` eyebrow**.

| Element | Size |
|---|---|
| Two-tone headline (cover) | 48–52pt |
| Two-tone headline (content) | 28–30pt |
| Giant stat number | 34–72pt (hero stats biggest) |
| Section header | 20–24pt bold |
| Body | 14–16pt |
| Caption / eyebrow / tag | 10–12pt (eyebrows small-caps, +tracking) |

## 4. Layout

- Margins **0.85"** sides (generous); content on a mental 12-col grid; cap the text measure.
- Consistent **0.4"** gaps; separate stacked stats with a single hairline, not boxes.
- Left-align everything (headlines, numbers, body); center only a cover.
- Rounded corners (~0.14") on every card/frame/chip — the dominant shape signal.
- Full-bleed dark for cover/dividers/how-it-works; white cards on Ground for features; pastel cards for content/testimonials; split (text left, framed image/panel right) is the workhorse.

## 5. Components

- **Big-number stat** *(signature):* giant Ink number + one-line Muted caption + hairline rule; 1-column stack or 2×3 grid; no card, no chrome.
- **Two-tone headline block:** ink statement + muted support, left-aligned.
- **Content / info card:** rounded pastel-tint card with a "● label" dot eyebrow, body, optional black pill CTA, and a hairline-divided facts footer.
- **Testimonial / quote card:** rounded pastel-tint card, oversized quote mark, small-caps tag top-right, attribution bottom.
- **Process (`STEP 0X`):** periwinkle dots on a connector line, `STEP 0X` eyebrow, ink title, muted description.
- **Dark UI / "tech" panel:** dark rounded panel with tinted status rows (periwinkle/butter/mint) — always cropped and labeled "Illustrative."
- **Callout:** a black or mint-tint rounded chip — a takeaway or the ask. Never a fake button, never an edge stripe.

## 6. Slide templates

Cover · The recommendation (lead with the ask) · Why now (problem stat grid) · Insight (one line, lots of air) · The product (split + illustrative panel) · How it works (dark + hero visual + `01/02/03`) · Proven (2×3 stat grid) · Options (three cards, one mint "recommended") · Rollout (four `STEP 0X` + photo) · Testimonials (three pastel cards) · Risks (two-column list) · The ask (dark, mirrors the cover). Use the subset a given deck needs; keep the set constrained.

## 7. Imagery & placeholders

Register: **human, warm, documentary** where photos are used — real people and context, dignified, naturally lit; never cold stock or fear framing. Abstract particle/point-cloud fields work as a neutral "intelligence/data" hero. In templates, image slots are **polished placeholders** (a lavender-tinted panel + a framed-image icon + a caption telling the editor what to drop in) — replace them with brand assets for production.

## 8. Charts & data

Prefer the **giant number over the chart** — most "data" here is one figure + a muted caption, hairline-separated, no axes. When a trend truly needs a chart: white background, no gridlines beyond a faint `#E6E6E6` baseline, muted thin axes, directly-labeled series, periwinkle first, one warm-tint highlight, ≤3 hues.

## 9. PPTX theme setup

- **Size:** 16:9 (13.333" × 7.5").
- **Fonts:** Major and Minor both **Calibri** (one family, weight-differentiated). No embedding needed.
- **Theme colors** (map by role, not by the slot's "Light/Dark" name — for dark slides `bg1` legitimately holds the near-black):

| Slot | Value | Role |
|---|---|---|
| Dark 1 (`tx1`) | `#181818` | Ink / stat numbers |
| Light 1 (`bg1`) | `#FFFFFF` | Ground |
| Dark 2 | `#16181C` | Dark surface |
| Light 2 | `#F4F4F4` | Light gray surface |
| Accent 1 | `#5A6CE6` | Periwinkle |
| Accent 2 | `#000000` | Black (action) |
| Accent 3 | `#BCEFCB` | Mint |
| Accent 4 | `#E7E3F5` | Lavender |
| Accent 5 | `#F3EEA0` | Butter |
| Hyperlink | `#5A6CE6` | Periwinkle |

- **Masters:** one light (white/Ink), one dark (`#16181C`/white) — the deck alternates them.
- **Render-safety (do not add these — they read as AI-generated filler):** no rule under a title; no color bars or edge stripes on cards (use tint + soft shadow, or hairline dividers); every slide gets a visual or a big number; one accent per slide; **never default to Aptos**.
- **Accessibility:** pastel tints are light — always Ink text on them, never as text on white. Verify periwinkle text hits 4.5:1 or reserve it for fills/large text. Alt text on images; logical reading order.

## 10. Reproducing decks

The system is executable. `rocky-mountain/` holds a generator that builds decks from a single slide-spec, so future decks stay consistent. It ships three flavors — **product-recommendation**, **strategy-review**, and **pitch** — that share one design kit:

```bash
cd rocky-mountain
npm install
npm run build                       # build all three flavors
node build_deck.js pitch --preview  # one flavor + an HTML preview for QA
```

Each flavor is a file in `flavors/`; edit its content, or copy one to add a new flavor. The tokens, components, and renderers live in `lib/kit.js` and come from this spec. See `rocky-mountain/README.md`.

## 11. Reusable deck prompt

For hand-off to a PPTX-generation workflow that isn't using the generator:

> Build a 16:9 PowerPoint deck in the **Rocky Mountain** style — calm, precise, evidence-forward.
> **Palette:** ground white `#FFFFFF`, light-gray surface `#F4F4F4`, ink `#181818`, muted `#8E8E8E`, black `#000000` (the one action color), periwinkle `#5A6CE6` (tech/data/steps), mint `#BCEFCB`, lavender `#E7E3F5`, butter `#F3EEA0`, dark surface `#16181C`, border `#E6E6E6`. Light-native with a few dark full-bleed slides. One accent per slide; pastels carry cards, not decoration; never set a tint as text.
> **Fonts:** **Calibri** for headings and body, weight-differentiated. Two-tone headline 28–52pt, giant stat numbers 34–72pt, body 14–16pt, captions 10–12pt muted.
> **Signature devices:** two-tone headlines (bold ink line + muted support line); giant near-black stat numbers with muted captions separated by hairlines (no boxes); "● label" dot eyebrows; periwinkle `STEP 0X` process with connector dots.
> **Layout:** 0.85" margins, very generous whitespace, one idea per slide, left-aligned, rounded corners on every card/frame/chip. Alternate calm white content with a few dark slides (an abstract particle field is a good neutral hero).
> **Components:** big-number stat grids; pastel content cards with a dot eyebrow, black pill CTA, and facts footer; testimonial cards in rotating pastel tints with small-caps tags; a dark illustrative UI panel; a three-option comparison with one mint "recommended" card; a four-step `STEP 0X` plan.
> **Tone:** calm, direct, evidence-first. Plain declarative lines; no exclamation marks; no clinical coldness.
> **Never:** a rule under titles, color bars or edge stripes, text-only slides with no number or image, cream/beige backgrounds, or the Aptos font.
