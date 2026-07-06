# Website → PPTX Design System: Teton

> Generated with the `website-to-pptx-design-system` skill from `https://www.teton.ai/`.
>
> **Extraction status — read first.** teton.ai WAF-blocks automated fetching (HTTP 403) and the browser extractor was network-restricted here, so the first pass reconstructed the palette from category norms — and got it **materially wrong** (guessed clinical teal). This version is **screenshot-measured** from two rounds of user-provided captures (hero, social proof, "How Teton works," "Real time transparency," testimonials, the problem/results stat sections, the 4-step process, and the company/about section). Color roles, type, imagery, motifs, and copy below are **read from those screenshots** and trustworthy; the **hex values are eyedropper reads (±a few)** — for pixel-exact hexes and the precise font name, pull them from the site's CSS or run `scripts/extract_site.py` where the network allows. That the reconstruction missed so badly is the whole point of the skill: *measure, don't guess.*

---

## 1. Brand Read

Teton sells **AI computer-vision monitoring for care homes and hospital wards** — room sensors that flag falls, sleep, and prolonged absences, alert staff, and auto-document, with **no wearables and no live video feed** ("privacy by design"). But it does **not** present as clinical medtech. It presents as **warm, human, quietly premium, evidence-saturated software** — a near-white canvas, friendly rounded type, real documentary photography of care staff, and headlines that lead with feeling ("Harnessing the power of AI. / To help you deliver better care").

What the brand signals, and what a deck must protect:

- **Warm, not clinical.** The register is humane and confident — closer to a well-designed consumer product than hospital software. Calm, friendly, generous white space, soft rounded shapes, real people. Never sterile, never alarming.
- **Evidence is the content.** Teton leads with *giant numbers*, everywhere: problem framing ("6 million projected nursing shortage," "29 million falls/year," "31% decrease in life expectancy after a fall") and proof ("40% reduction in falls," "96% reduction in fall response times," "10,000,000+ hours of in-room monitoring," "83% fewer falls" in a nurse's own words). The big-number stat is the brand's dominant visual device. Adjectives don't sell here; numbers and named voices do.
- **Human dignity in every frame.** Photography is warm, naturally lit, documentary — an elderly woman with a nurse's hand on her shoulder, "Tina, Nurse Assistant," the founding team laughing on a staircase. Real, unstaged, dignified.
- **A signature tech moment.** One recurring visual carries the "AI" story: a **blue point-cloud** person-in-bed on a dark ground — the privacy-preserving 3D scan, proof this is sophisticated and *not a camera*. It earns a dedicated dark slide.
- **Ambitious but grounded.** "The foundational data layer for the point of care," "live digital twins," "1000x more data" — big vision, but always tied to "we sell a service not a product" and concrete outcomes.

**Preserve in a deck:** the two-tone headline, near-white calm, giant-number stats, black as the confident action color, mint + periwinkle accents, warm human photography, pastel content/testimonial cards, and the dark point-cloud beat. **Avoid:** clinical coldness, alarm-red framing, hype without a number behind it, surveillance-camera aesthetics.

## 2. What Carries Into the Deck

*(Screenshot-measured brand DNA.)*

Near-white ground; one rounded-geometric sans differentiated by weight; **black** as the primary action/ink color; a signature **mint-green** and a **periwinkle-blue** tech accent; soft **pastel content cards** (lavender, butter-yellow, mint) with a "● label" dot eyebrow; **giant near-black stat numbers** with muted captions and hairline dividers; warm documentary photography (plus an occasional grainy B&W); the **blue point-cloud** motif; rounded pills, chips, and image cards; and the **two-tone headline** (dark statement line + muted-gray support line).

## 3. What Must Be Adapted

| Web behavior (observed on teton.ai) | Slide translation |
|---|---|
| Full-bleed autoplaying hero video with floating UI panels | A single still image + one framed UI panel; no motion |
| Long scrolling stat sections | A 2-column big-number stat grid, one slide |
| Horizontally-scrolling testimonial carousel | 2–3 pastel quote cards per slide |
| Animated blue point-cloud | One striking still on a dark slide |
| Scrolling logo wall (9+ logos) | A curated single row of 5–7 logos on light-gray tiles |
| Sticky pill nav; "Book a demo" / "See Careers" buttons | Drop the nav; buttons become a closing callout, not a fake button |

## 4. Color System

> **Screenshot-measured; hexes are eyedropper reads (±).** Base mode: **light-native**, with intentional **dark full-bleed sections** for the tech/product beats.

| Token | Hex | Source | Best use | Misuse to avoid |
|---|---|---|---|---|
| Ground | `#FFFFFF` | screenshot | Default light slide background | — |
| Light surface | `#F2F2F2` | screenshot | Logo tiles, quiet inset panels, alternating rows | Competing with white cards |
| Ink | `#181818` | screenshot | Primary text; giant stat numbers; logo; CTA fill | Pure `#000` for body (reserve black for action) |
| Muted text | `#8E8E8E` | screenshot | Headline support line; stat captions; body meta | Primary headlines / stat numbers (too faint) |
| Black (action) | `#000000` | screenshot | The one primary CTA/callout per slide ("Book a demo" pill) | Overusing until nothing stands out |
| Mint (brand tint) | `#BCEFCB` | screenshot | The nav highlight pill; a soft brand fill; one accent moment | As text (fails contrast) — fill only |
| Periwinkle (tech) | `#5A6CE6` | screenshot | Point-cloud/tech beat, `STEP 0X` eyebrows, step dots, chart series 1, links | Spreading it across calm content slides |
| Dark surface | `#1A1A1A` | screenshot | Full-bleed tech/product slides, cover/closing, app-UI panels | Body text below ~12pt on it |
| Lavender (card tint) | `#E7E3F5` | screenshot | Large content/info cards *and* testimonial cards | As text; tiny fills |
| Butter yellow (card tint) | `#F3EEA0` | screenshot | Content/careers cards, testimonial cards | As a semantic "warning" color |
| Amber | `#E7B84C` | screenshot | Minor data emphasis (a single featured figure) | A second competing accent per slide |
| Border | `#EAEAEA` | approx | Hairline stat dividers, card borders, table rules | Heavy/dark rules |

On-color: **Ink on every tint** (mint / lavender / butter / amber are all light — always dark text); **white on black / dark surface / periwinkle**. Accent discipline: black *or* one tint per slide; the pastels carry content cards and testimonial variety, not general decoration. Chart order: Periwinkle → Ink → Muted → Mint/Amber (a warm accent last, for the one series you feature).

## 5. Typography System

> **Screenshot-measured identity; exact face not nameable from a screenshot.** The site uses **one rounded geometric-humanist sans** across headlines, giant numbers, body, and UI, differentiated by **weight and color** — no serif anywhere. Reads like a rounded grotesque in the family of Aeonik / General Sans / PP Neue Montreal; pull the exact name from CSS `font-family` if it matters. **The PowerPoint mapping holds regardless.**

| Role | Web font | Office-safe substitute | Style |
|---|---|---|---|
| Everything (display, numbers, body, UI) | One rounded geometric sans (single family) | **Calibri** (map to *both* Major and Minor) | Friendly, rounded, legible; hierarchy by weight, not family |
| — | (closer geometric match, optional) | Century Gothic | QA-unreliable — titles only, ~10% slack, don't trust QA fit |

Do **not** add a serif the brand never used. Signature type patterns to reproduce:

- **Two-tone headline** — line 1 a bold statement in Ink, line 2 a lighter support line in Muted gray, same size ("Tried and tested" / "With proven results at scale"). Use on most slides.
- **Dot eyebrow** — a small filled dot + a category label ("● Company", "● Careers at Teton") above a card's content.
- **`STEP 0X` eyebrow** — small-caps, Periwinkle, above a step title.

| Element | Font | Size | Notes |
|---|---|---|---|
| Two-tone headline (line 1 / line 2) | Calibri Bold Ink / Calibri Muted | 40–44pt title, 36pt content | The brand's signature move |
| Giant stat number | Calibri Bold, Ink | 60–96pt | The dominant device — huge, airy, left-aligned |
| Stat caption | Calibri, Muted | 12–14pt | One line under each number |
| Section header | Calibri Bold | 20–24pt | Ink |
| Body | Calibri | 14–16pt | Ink; left-aligned; short measure |
| Eyebrow / tag | Calibri, small-caps | 11–12pt | Periwinkle (`STEP 0X`) or Muted (`● label`, `HOSPITAL`) |

## 6. Layout Rules

- **Base mode:** light-native. Ground is white; reserve the **dark surface** for cover, dividers, closing, and the point-cloud/product slides — the deck alternates calm white content with a few grounding dark tech beats.
- **Margins:** 0.5" minimum. **Grid:** 12-col mental grid; stats sit on a clean 2-column split. **Content width:** cap the measure; short lines read calmer.
- **Spacing:** the site is *very* airy — keep slides generous, one idea (or one stat grid) each; never packed. Separate stacked stats with a single hairline `#EAEAEA` rule, not boxes.
- **Alignment:** left-align everything, including headlines and stat numbers; center only a cover.
- **Rounded everything:** cards, image frames, chips, callouts take a consistent generous radius (~0.15") — the dominant shape signal.
- **When to use what:** full-bleed dark for cover/dividers/tech; big-number grids on white; pastel cards for content/testimonials; split (stats or text left, warm photo right) is the workhorse layout; a curated logo row for social proof.

## 7. Component Rules

*(From `references/translation.md`, themed for Teton.)*

- **Big-number stat** *(the signature)*: a giant Ink number (60–96pt) with a one-line Muted caption beneath, separated from siblings by a hairline `#EAEAEA` rule. Use in a 1-column stack or a 2×3 grid. **No card, no chrome** — whitespace does the work. This is Teton's most-used slide device; lead with it.
- **Two-tone headline block:** line 1 Ink statement, line 2 Muted support, left-aligned, generous space beneath.
- **Content / info card:** a large rounded card in a pastel tint (lavender or butter-yellow) with a **"● label" dot eyebrow**, body copy, an optional black pill CTA, and a hairline-divided facts footer (e.g. "Founded in 2020 · +80 Employees · Raised $26M led by Plural VC"). The About/Company and Careers blocks use exactly this.
- **Testimonial / quote card:** rounded card in a rotating pastel tint (lavender → butter-yellow → mint) *or* a warm portrait with the quote overlaid in white; small-caps sector tag (`HOSPITAL` / `CARE HOME`) top-right, attribution (name, role) bottom. The 83% lives here — in a nurse's voice.
- **Process (`STEP 0X`)**: a vertical list of steps — **Periwinkle dots on a connector line**, a `STEP 0X` eyebrow in Periwinkle, an Ink title, and a Muted description. Teton's is four: **Installation → Resident Consent → Onboarding → Support.** Pair with a warm photo on the right.
- **Point-cloud / tech slide:** dark-surface full-bleed, the blue point-cloud still, and a numbered `01/02/03` step panel (active badge Periwinkle with a left-accent). The "this is real AI" beat.
- **Logo strip (social proof):** 5–7 partner logos on `#F2F2F2` rounded tiles, evenly spaced, with a "10,000 … use Teton" lead line.
- **Callout (from web CTAs):** a black or mint-tint rounded chip with Ink/white text — a takeaway or the privacy promise. Never a fake button, never an edge stripe.

## 8. Imagery, Icons, and Screenshots

> **Observed** from the screenshots.

- **Photography:** warm, naturally-lit **documentary** shots of real care staff and residents — an elderly woman with a nurse's hand on her shoulder, a carer at a Teton dashboard, the founding team on a staircase. Human, dignified, unstaged; warm neutral tones. Never stock, cold, or fear-framed.
- **Grainy B&W** appears as an occasional editorial texture (e.g. a sensor-in-room shot) — usable for a quieter, more serious moment.
- **Signature tech visual:** the **blue point-cloud** person-in-bed on a dark ground — the privacy-preserving 3D scan. Use it (or a faithful still) as the one "AI" image; it *is* the product story.
- **Product UI:** dark, rounded, minimal panels (Schedule, room-status tiles) with small colored icons — shown in-hand or over a photo.
- **Icons & marks:** simple rounded line icons; the **"● dot" eyebrow** bullet; the black circular logo mark.
- **Register:** human + warm + technical; premium but approachable. Backgrounds behind imagery stay white or dark-surface — never busy.

## 9. Chart and Data Rules

Teton *is* a data-forward brand, so this section carries real weight:

- **Prefer the giant number over the chart.** Most Teton "data" is a huge Ink figure + a Muted caption, separated by hairlines — no axes at all. Reach for that first; use a chart only when a trend genuinely needs one.
- When charting: white background, **no gridlines** beyond a faint `#EAEAEA` baseline, Muted thin axes, 12–14pt Muted labels. Color starts **Periwinkle**, then Ink, then Muted; **Mint or Amber for the single value that carries the point**. Max ~3 hues + one highlight.
- Directly-label bars; one insight per chart; source in a caption (facility, timeframe). Keep it calm — no alarm red, even for falls.

## 10. Recommended Slide Templates

*(From `references/translation.md` — the Teton subset, confirmed against the site.)*

- **Cover** — dark-surface full-bleed *or* white; two-tone headline ("Harnessing the power of AI. / To help you deliver better care."), black logo, one accent. **Closing** mirrors it with the ask.
- **Problem framing** — three giant stats stacked with hairline dividers (6M nursing shortage · 31% life-expectancy drop after a fall · 29M falls/year) beside a warm resident photo. No fear-mongering — the numbers speak.
- **Proven results** — two-tone headline ("Tried and tested / With proven results at scale") over a **2×3 big-number grid** (40% fewer falls · 96% faster response · 25% less 8PM–8AM workload · 10M+ monitoring hours · 10,000 staff · 40% fewer staff-caused wakeups).
- **How it works** — three rounded photo cards (sensor / app-in-hand / staff-with-iPad) + two-tone headline.
- **Tech / point-cloud** — dark-surface, blue point-cloud still + `01/02/03` steps.
- **Process** — the four `STEP 0X` steps (Installation → Resident Consent → Onboarding → Support) with periwinkle dots + a warm photo.
- **Testimonials** — 2–3 rotating pastel quote cards with sector tags; the 83% in a nurse's voice.
- **Company / About** — a lavender info card ("● Company", the digital-twin vision, black "See Careers" pill, facts footer: Founded 2020 · +80 Employees · $26M led by Plural VC) beside a warm team photo.
- **Social proof** — "10,000 … use Teton" + a curated logo row on light-gray tiles.
- **Recommendation** — the ask as a two-tone headline + short rationale. (Skip Roadmap unless timeline matters.)

## 11. PPTX Theme Setup

*(From `references/pptx-handoff.md`. Screenshot-measured; hexes ±.)*

- **Size:** 16:9 (13.333" × 7.5").
- **Fonts:** Major (headings) **Calibri**; Minor (body) **Calibri** — one family, weight-differentiated, matching the brand. Both ship with Office; no embedding. (Century Gothic is a closer geometric match but QA-unreliable — titles only, with slack.)
- **Theme colors** (light-native → ground `bg1`, ink `tx1`):

| Slot | Value | Role |
|---|---|---|
| Dark 1 (`tx1`) | `#181818` | Ink / stat numbers |
| Light 1 (`bg1`) | `#FFFFFF` | Ground |
| Dark 2 | `#1A1A1A` | Dark tech/product surface |
| Light 2 | `#F2F2F2` | Light gray surface |
| Accent 1 | `#5A6CE6` | Periwinkle (tech/data/steps) |
| Accent 2 | `#000000` | Black (action) |
| Accent 3 | `#BCEFCB` | Mint |
| Accent 4 | `#E7E3F5` | Lavender |
| Accent 5 | `#F3EEA0` | Butter yellow |
| Accent 6 | `#E7B84C` | Amber |
| Hyperlink | `#5A6CE6` | Periwinkle |

- **Masters:** a light master (white/Ink) and a dark master (`#1A1A1A`/white) — the deck needs both; Teton alternates them.
- **Render safety:** rounded corners throughout; no accent rule under titles; no edge stripes/color bars (use tint fills + soft shadow, or hairline dividers between stats); every slide gets a visual or a big number; one accent per slide; never default to Aptos.
- **Accessibility:** every pastel tint is light — **always pair with Ink text**, never use as text on white. Periwinkle as text on white is borderline — verify 4.5:1 or reserve it for fills/large text/eyebrows. Alt text on care photos; logical reading order.

## 12. Reusable Deck Prompt

> Build a 16:9 PowerPoint deck in the **Teton** style — warm, human, quietly premium, evidence-forward software for care homes and hospitals (AI room monitoring, privacy by design).
> **Palette (screenshot-measured, hexes ±):** ground white `#FFFFFF`, light-gray surface `#F2F2F2`, ink `#181818`, muted gray `#8E8E8E`, black `#000000` (the one action color), mint `#BCEFCB`, periwinkle `#5A6CE6` (tech/data/steps), dark surface `#1A1A1A`, soft tints lavender `#E7E3F5` / butter-yellow `#F3EEA0` / amber `#E7B84C`, border `#EAEAEA`. Light-native with a few full-bleed dark "tech" slides. One accent per slide; pastels carry content and testimonial cards, not general decoration; never set a tint or the mint as text.
> **Fonts:** **Calibri** for both headings and body — one family, differentiated by weight. Two-tone headline title 36–44pt, giant stat numbers 60–96pt, section headers 20–24pt, body 14–16pt, captions 12–14pt muted.
> **Signature devices:** (1) the **two-tone headline** — bold ink statement line + lighter muted-gray support line (e.g. "Tried and tested" / "With proven results at scale"), left-aligned; (2) **giant near-black stat numbers** with a one-line muted caption, separated by hairline rules, no boxes — lead with these; (3) a **"● label" dot eyebrow** on content cards; (4) a **periwinkle `STEP 0X` eyebrow** with blue connector dots for process.
> **Layout:** 0.5" margins, very generous whitespace, one idea (or one stat grid) per slide, everything left-aligned, rounded corners on every card/frame/chip. Alternate calm white content with a few dark full-bleed tech slides (the blue point-cloud visualization is the hero "AI" image).
> **Components & content:** big-number stat grids (problem: 6M nursing shortage, 29M falls/yr, 31% life-expectancy drop; results: 40% fewer falls, 96% faster fall response, 25% less 8PM–8AM workload, 10M+ monitoring hours, 10,000 staff); a 4-step process (Installation → Resident Consent → Onboarding → Support); pastel content cards with a dot eyebrow, black pill CTA, and a facts footer (Founded 2020 · +80 Employees · $26M led by Plural VC · "we sell a service not a product"); testimonial cards in rotating pastel tints with `HOSPITAL`/`CARE HOME` tags and named attribution (put "83% fewer falls" in a nurse's voice); warm documentary photos of real care staff, dignity preserved; one dark point-cloud slide.
> **Tone:** calm, human, evidence-through-numbers-and-voices. Plain declarative lines, named staff and institutions, no fear-mongering, no exclamation marks, no clinical coldness or surveillance aesthetics.
> **Never:** accent rule under titles, color bars or edge stripes, alarm-red framing, text-only slides with no number or image, the Aptos font, or using the pastel tints as decoration/text.

---

### Sources

Screenshot-measured from two rounds of user-provided captures of `https://www.teton.ai/` (hero, social proof, "How Teton works," "Real time transparency," testimonials, problem/results stats, the 4-step process, and company/about), July 2026. On-site facts: Founded 2020 · +80 employees · Raised $26M led by Plural VC · "Award winning implementations" · 10,000 care staff · 10,000,000+ monitoring hours. Corroborating press:
- Teton homepage / product / sectors / company: https://www.teton.ai/ · https://www.teton.ai/product · https://www.teton.ai/sectors/care-home · https://www.teton.ai/sectors/hospital-ward · https://www.teton.ai/company/about-us
- Privacy overview: https://www.teton.ai/blog/teton-system-overview-how-teton-protects-resident-privacy
- Funding: https://www.teton.ai/blog/teton-ai-raises-20-million-to-reinvent-elderly-care · https://www.mobihealthnews.com/news/tetonai-raises-20m-us-launch

*Color roles, typography, imagery, motifs, and copy are read from the screenshots. Hex values are eyedropper approximations (±a few); pull exact hexes and the precise font name from the site's CSS or the extractor for production.*
