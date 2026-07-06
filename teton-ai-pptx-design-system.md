# Website → PPTX Design System: Teton

> Generated with the `website-to-pptx-design-system` skill from `https://www.teton.ai/`.
>
> **Extraction status — read first.** teton.ai returned **HTTP 403** to automated fetching (bot/WAF protection) on every page, and the browser extractor was network-restricted in this environment, so the site's styles could **not be computed-measured** here. Brand read, positioning, tone, and page structure below are **grounded** in the live site's indexed content and public press (sources at the end). The **color and type tokens (Sections 4–5) are `approx` — reconstructed to the brand's evident register, not measured** — and must be verified against screenshots before production use. To upgrade them to `measured`: share screenshots of the homepage, `/product`, and `/sectors/care-home`, or run `scripts/extract_site.py https://www.teton.ai/` in an environment whose network policy allows the browser to reach the site. Everything downstream (layout, components, templates, pptx setup, deck prompt) holds regardless of the exact hexes.

---

## 1. Brand Read

Teton sells **AI computer-vision monitoring for care homes and hospital wards** — sensors that read a resident's room in real time (sleep, falls, prolonged bathroom stays), alert staff, and auto-document, *without wearables and with no live video feed* ("privacy by design"). The buyer is a **care-home operator, hospital ward leader, or clinical decision-maker**; the daily user is **nursing staff**; and the deck audience often extends to **investors** (they've raised ~$20M).

What the brand signals, and what a deck must protect:

- **Calm, not alarming.** This is surveillance-adjacent technology pointed at vulnerable elderly people. The entire brand works to feel *reassuring and dignified* rather than clinical-cold or Big-Brother. Slides must feel calm — no red-alert dashboards, no fear-based framing.
- **Evidence over hype.** The site leads with hard outcomes ("83% reduction in patient falls in 87 days," hospital partnerships). Trust is earned with numbers, named institutions, and specifics — not adjectives.
- **Human dignity.** Residents are people, not data points. Imagery and language keep the human in frame; "keep residents calm," "augmenting resident care."
- **Privacy as a differentiator.** "Raw visual data never leaves the room." This is a *feature to feature*, not fine print — it deserves its own calm, confident slide.

**Preserve in a deck:** quiet confidence, evidence-forward stats, human warmth, generous calm space, clinical credibility. **Avoid:** anything that reads as alarming, hype-y, cold-technical, or that turns monitoring into surveillance theater.

## 2. What Carries Into the Deck

*(Portable brand DNA — reconstructed from the brand's register; verify visual specifics against screenshots.)*

A restrained, trustworthy palette led by one calm primary; a clean humanist sans for legibility at a glance; evidence-forward data display (the stat is the hero); real care-setting photography that keeps staff and residents human; soft, unfussy surfaces (calm cards, hairline borders) over heavy chrome; a measured, plain-spoken voice.

## 3. What Must Be Adapted

| Web behavior (likely on teton.ai) | Slide translation |
|---|---|
| Sticky nav, scroll-triggered product tours, animated sensor diagrams | Static, paced slides — one idea each; animate sparingly if at all |
| Live/interactive dashboard demos | A single annotated screenshot or a clean stat block per slide |
| Long "how it works" scroll sections (scouting → install → onboard) | A 3-step process slide |
| Dense feature grids | 2–3 feature cards max per slide, enlarged |
| CTA buttons ("Book a demo") | A closing ask + contact line — a callout, not a fake button |

## 4. Color System

> **`approx` — RECONSTRUCTED, NOT MEASURED.** These are a coherent starting palette in Teton's evident register (calm clinical + human warmth, light-native — the near-universal choice for trust-driven healthcare B2B). **Replace every hex with measured values from screenshots before production.** The first thing to confirm from a screenshot: is the brand light-native (assumed here) or dark-native?

| Token | Hex | Source | Best use | Misuse to avoid |
|---|---|---|---|---|
| Ground | `#F7F9FA` | approx | Default slide background — soft, clinical, not stark white | Pure `#FFFFFF` everywhere (feels unbranded/harsh) |
| Surface | `#FFFFFF` | approx | Cards, screenshot frames, tables | Filling whole slides with it — prefer Ground |
| Ink | `#16232B` | approx | Primary text (deep desaturated slate, warmer than black) | Pure black `#000` (too hard for a calm brand) |
| Muted text | `#5A6B72` | approx | Secondary text, captions, labels | Headlines (too low-contrast) |
| Brand primary | `#1F8A8C` | approx | The trust color — headers, key stats, chart series 1, icon tokens | As tiny text on Ground if it fails contrast — darken for text |
| Brand deep | `#0E3A44` | approx | Section dividers, cover, closing (the calm dark surface) | Body text below ~12pt on it (muddies) |
| Accent (human warmth) | `#E0A15E` | approx | One punctuation moment — the hero stat, a highlighted step | Spreading it around; using it as text on Ground (fails) |
| Muted surface | `#EDF1F2` | approx | Inset panels, alternating rows, quiet callouts | Competing with Surface cards |
| Border | `#DCE4E6` | approx | Hairline card borders, table rules, dividers | Heavy/dark rules |
| Positive | `#2E9E6B` | approx | Improvement metrics (falls ↓, outcomes ↑) — *only where the brand signals it* | Decorative use; don't pair red/green as the only signal |

On-color: white text on Brand primary / Brand deep; **Ink** on the Accent. Chart order: Brand primary → Brand deep → Muted text → Accent (accent last, for the one series you're highlighting).

## 5. Typography System

> **`approx` — font identity NOT measured.** Health-tech brands in this register almost always use a clean humanist or neo-grotesque sans (e.g. Inter, Aeonik, GT Walsheim, or similar). Confirm the actual face from a screenshot. The **PowerPoint mapping below is safe regardless** of which of those it turns out to be.

| Role | Likely web font | Office-safe substitute | Style |
|---|---|---|---|
| Display / headlines | Humanist/grotesque sans (approx) | **Calibri** (or Arial) | Confident, legible, calm — not decorative |
| Body / UI | Same family | **Arial** | Neutral, true-width, high legibility |
| Optional warmth accent | A soft serif, *if the brand uses one* | **Cambria** | Only if a screenshot shows a serif; otherwise stay single-family |

If Teton runs a single sans differentiated by weight (common), map it to both PowerPoint Major and Minor and let weight carry hierarchy — don't add a serif they never used.

| Element | Font | Size | Notes |
|---|---|---|---|
| Title-slide headline | Calibri Bold | 40–44pt | Calm, generous leading |
| Standard slide title | Calibri Bold | 36pt | Ink, or white on Brand deep |
| Section header (in-slide) | Calibri Bold | 20–24pt | Ink |
| Body | Arial | 14–16pt | Ink; left-aligned; short measure |
| Caption / source / data label | Arial | 10–12pt | Muted |
| Hero stat | Calibri Bold | 60–72pt | Brand deep, or Accent for the one you feature |
| Eyebrow / kicker | Arial Bold, uppercase, +8% tracking | 12pt | Brand primary |

Keep evidence readable: a stat like **83%** should dominate its slide at 60pt+, with a 12pt Muted source line beneath.

## 6. Layout Rules

- **Base mode:** light-native (assumed — verify). Ground is the default; Brand deep is reserved for cover, dividers, and closing so the deck breathes between calm light content and a few grounding dark moments.
- **Margins:** 0.5" minimum. **Grid:** 12-col mental grid, 0.2" gutters. **Content width:** cap the measure — short lines read calmer.
- **Spacing:** 0.4" between blocks, used consistently. Whitespace is a brand signal here — leave it generous; a calm brand is a spacious one.
- **Alignment:** left-align everything except cover/divider display text.
- **When to use what:** full-bleed Brand deep for cover/dividers/closing; white cards on Ground for features and metrics; split (text left, framed screenshot/room photo right) for product; centered-editorial only for a single privacy or mission statement.

## 7. Component Rules

*(From `references/translation.md`, themed for Teton.)*

- **Metric card:** big Calibri number in Brand deep (the featured one in Accent), Muted label + source beneath. Row of 3 max. This is the brand's core device — lead with evidence.
- **Quote card:** care-staff or clinician testimonial in Calibri; attribution (name, role, facility) in Muted. A soft quote mark in Brand primary as an on-brand motif.
- **Callout box (from web CTAs / highlight panels):** Brand-primary-at-10% tint fill, Ink text, brand corner radius, **no edge stripe** — for a takeaway or the privacy promise.
- **Screenshot / room frame:** product UI or care-room image on a white card over Ground, soft shadow, consistent radius, cropped to one point. Keep the human dignified in any room photo.
- **Process (setup phases):** 3 steps — Scout & configure → Install (their team) → Onboard & train. Numbered tokens in Brand primary.
- **Comparison (with / without Teton):** two aligned columns; favored side marked with an Accent tag, the other on Muted surface. Never frame the "without" side with alarming red — this is a calm brand.
- **Privacy/info block:** a quiet Muted-surface panel — "Raw visual data never leaves the room" — Ink title, Muted bulleted specifics.

## 8. Imagery, Icons, and Screenshots

> **Recommendation, partly inferred** — I could not view the site's actual imagery. Register derived from the brand: **human + clinical, warm not cold.**

- **Photography:** real care settings — staff with residents, hands, quiet rooms — that preserve **dignity**; natural, softly lit, unsaturated. Never stock "scared elderly person" or surveillance-camera aesthetics.
- **Product shots:** the sensor in an ambient room + a calm, uncluttered UI. Show *insight*, not raw video (there is none — that's the point).
- **Icons:** line-weight, single-color (Brand primary), calm and rounded; optionally in a Brand-primary-tint circle as a repeating motif.
- **Backgrounds behind imagery:** Ground or Brand deep — never busy.
- **Illustration:** if used for the sensor/privacy diagram, keep it schematic and calm, one or two brand colors.

## 9. Chart and Data Rules

Teton leads with evidence, so data slides carry weight — make them calm and unmistakable:

- Background Ground or white; **no gridlines** beyond a faint `#DCE4E6` baseline. Axes Muted, thin. Labels 10–12pt Arial Muted.
- Color: start Brand primary, then Brand deep, then Muted. **Accent (or Positive) reserved for the single bar/number that carries the point** — e.g. the 83% fall reduction. Max ~3 hues + the highlight.
- Prefer directly-labeled bars and a single hero number over legends. One insight per chart; state the source in a caption (facility, timeframe).

## 10. Recommended Slide Templates

*(From `references/translation.md` — the subset that fits a Teton pitch/sales deck.)*

- **Cover** — Brand deep full-bleed, 44pt Calibri headline in white ("Advanced resident monitoring"), logo, one Accent mark. **Closing** mirrors it with the ask.
- **Agenda** — 4–5 numbered items, parallel phrasing.
- **Problem framing** — the nursing shortage / fall risk, stated plainly on Muted surface; one supporting stat. No fear-mongering.
- **Insight** — "Privacy by design": one large calm line, lots of space, Accent on the key phrase.
- **Product screenshot** — split layout, framed UI/room right, 3 Arial annotations left.
- **Metrics** — 3 metric cards (83% fewer falls; setup in 1–2 months; $20M raised), hero number in Accent, sources in captions.
- **Process** — the 3-phase implementation.
- **Comparison** — care with vs. without Teton, aligned rows.
- **Recommendation** — the decision/ask as a headline + short rationale.
- **Closing** — one ask + contact, on Brand deep. (Skip Roadmap unless the audience needs timeline.)

## 11. PPTX Theme Setup

*(From `references/pptx-handoff.md`. Colors `approx` — verify.)*

- **Size:** 16:9 (13.333" × 7.5").
- **Fonts:** Major (headings) **Calibri**; Minor (body) **Arial**. Both ship with Office — no embedding needed. (If a screenshot reveals a serif for warmth, use **Cambria** for headings.)
- **Theme colors** (mapped by role — for light-native, ground → bg1, ink → tx1):

| Slot | Value (`approx`) |
|---|---|
| Dark 1 (text `tx1`) | `#16232B` (Ink) |
| Light 1 (bg `bg1`) | `#F7F9FA` (Ground) |
| Dark 2 | `#0E3A44` (Brand deep) |
| Light 2 | `#EDF1F2` (Muted surface) |
| Accent 1 | `#1F8A8C` (Brand primary) |
| Accent 2 | `#0E3A44` (Brand deep) |
| Accent 3 | `#E0A15E` (Accent) |
| Accent 4 | `#2E9E6B` (Positive) |
| Accent 5–6 | Tints of the above |
| Hyperlink | `#1F8A8C` |

- **Masters:** a light master (Ground/Ink) and a dark master (Brand deep/white) cover the deck.
- **Render safety:** no accent rule under titles; no edge stripes/color bars on cards (shadow + hairline border only); every slide gets a visual; Accent once per slide; never default to Aptos.
- **Accessibility:** verify Brand primary as *text* on Ground hits 4.5:1 (darken to Brand deep if not); never signal with color alone (add labels/icons); alt text on room photos; logical reading order.

## 12. Reusable Deck Prompt

> Build a 16:9 PowerPoint deck in the **Teton** style — calm, evidence-forward healthcare monitoring for care homes and hospitals.
> **Palette (`approx` — swap for measured hexes once available):** ground `#F7F9FA`, surface white, ink `#16232B`, muted text `#5A6B72`, brand primary teal `#1F8A8C`, brand deep `#0E3A44`, warm accent `#E0A15E`, positive green `#2E9E6B`, border `#DCE4E6`. Trust-teal is the lead color; the warm accent appears **once per slide at most** (usually on the hero stat); use brand deep for green *text* if the teal fails contrast; never set the accent as text.
> **Fonts:** headings **Calibri** bold, body **Arial**. Titles 36–44pt, section headers 20–24pt, body 14–16pt, captions 10–12pt muted, hero stats 60–72pt. Strong title-to-body contrast.
> **Layout:** 0.5" margins, 0.4" gaps, left-aligned body, generous calm whitespace, one idea per slide. Cover/dividers/closing full-bleed brand deep; feature and metric slides use white cards (soft shadow, hairline `#DCE4E6` border) on the ground color.
> **Components:** metric cards with big numbers (lead with evidence like "83% fewer falls"); callout boxes (teal-tint fill, ink text) instead of buttons; care-room/product screenshots framed on white cards, cropped to one point, dignity preserved; line icons in teal-tint circles as the motif; a quiet privacy panel.
> **Tone:** calm, evidence-led, human. Plain declarative lines, named outcomes and institutions, no fear-mongering, no exclamation marks, no surveillance aesthetics.
> **Never:** accent rule under titles, color bars or edge stripes, text-only slides, alarming red framing, the Aptos font, or spreading the warm accent around.

---

### Sources (brand grounding)

- Teton — Advanced Resident Monitoring (homepage): https://www.teton.ai/
- Teton product: https://www.teton.ai/product
- Teton for Care Homes: https://www.teton.ai/sectors/care-home
- Teton for Hospitals: https://www.teton.ai/sectors/hospital-ward
- About Us: https://www.teton.ai/company/about-us
- How Teton Protects Resident Privacy: https://www.teton.ai/blog/teton-system-overview-how-teton-protects-resident-privacy
- Teton.ai raises $20M to reinvent elderly care: https://www.teton.ai/blog/teton-ai-raises-20-million-to-reinvent-elderly-care
- MobiHealthNews — Teton.ai raises $20M for U.S. launch: https://www.mobihealthnews.com/news/tetonai-raises-20m-us-launch

*Brand read, positioning, and tone are grounded in these sources. Color and type tokens are `approx` (reconstructed) pending screenshot verification.*
