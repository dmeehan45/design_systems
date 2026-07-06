# Website → PPTX Design System: Northwind

> A complete worked example at the target quality bar. Built from a real extractor run (`audit.json`) on the Northwind marketing site, so every value below is **measured** unless marked otherwise. Use it to calibrate how concrete your own output should be — notice that nothing here is left as an adjective.

## 1. Brand Read

Northwind is payments infrastructure sold to **builders** — its own words ("the payments API that ships with you", "Payments for builders"). The design signals **calm competence**: a deep forest green does the heavy lifting, a single warm yellow marks the one thing that matters on a screen, and a literary serif gives headlines a voice without getting loud. The copy is plain and confident ("Go live in an afternoon", "One rate. No surprises at scale.") — no urgency, no hype.

- **Preserve:** the forest-green-led palette with yellow as rare punctuation; the serif-headline / sans-body split; generous whitespace; the honest, declarative tone; soft rounded shapes (pill buttons, 14px cards).
- **Feel to reproduce:** a trustworthy tool made by people who ship. Credible, unhurried, a little warm.
- **Avoid:** anything that reads as loud fintech — hard blues, gradients, exclamation marks, or spreading the yellow around.

## 2. What Carries Into the Deck

Palette (green ground, dark-green punctuation surface, one yellow accent); Fraunces display + Inter body personality; the 14px-radius card with a soft green-tinted shadow; the uppercase kicker as an eyebrow device; roomy spacing; declarative one-idea-per-unit copy.

## 3. What Must Be Adapted

- **Pill CTA buttons** ("Start building") → callouts and closing asks, not fake clickable pills mid-slide.
- **3-across web card grid** → at most 3 cards per slide, enlarged; often better as a 2-up with more air.
- **Long scrolling hero + sections** → one hero idea per slide, paced across a section.
- **Web body at 18px in long measure** → 14–16pt slide body in short lines.

## 4. Color System

| Token | Hex | Source | Best use | Misuse to avoid |
|---|---|---|---|---|
| Ground | `#F4F7F5` | measured (`--ground`) | Default light slide background | Don't also fill cards with it — they'll vanish |
| Surface | `#FFFFFF` | measured (`--surface`) | Cards, screenshot frames, tables | Pure-white full slides feel unbranded — prefer Ground |
| Brand dark | `#0B3D2E` | measured (`--brand-900`) | Cover, dividers, closing; green *text* on light | Body text on it below 12pt (goes muddy) |
| Ink | `#12211B` | measured (`--ink`) | Primary text on light | Using pure black instead — this is the brand's near-black |
| Muted text | `#5B6B63` | measured (`--muted`) | Secondary text, captions | Primary headlines (too low-contrast) |
| Brand primary | `#1E8E63` | measured (`--brand-500`) | **Fills** — icon tokens, metric numbers, chart series 1, highlights | Small text on white — fails contrast; use Brand dark for green text |
| Accent | `#F2B705` | measured (`--accent`) | One punctuation moment per slide — a highlighted stat, the favored comparison column | As text on white (fails), or as more than one element per slide |
| Border | `#DCE6E0` | measured (`--border`) | Hairline card borders, table row rules | Heavy/dark dividers |

On-accent text: put **`#0B3D2E`** on `#F2B705` fills, **`#FFFFFF`** on `#1E8E63` / `#0B3D2E` fills (measured from the site's own buttons). Chart order: Brand primary → Brand dark → Muted → Accent (accent last, for the one series you're highlighting).

## 5. Typography System

Web fonts **Fraunces** (display serif) + **Inter** (body sans) — neither ships with Office. Map to safe substitutes:

| Role | Web font | Office-safe | Style |
|---|---|---|---|
| Display / headlines | Fraunces | **Cambria** | Serif with warmth; keep tight leading |
| Body / UI | Inter | **Arial** | Neutral, true-width |

| Element | Font | Size | Color |
|---|---|---|---|
| Title slide headline | Cambria bold | 40–44pt | Brand dark / white on dark |
| Standard slide title | Cambria bold | 36pt | Brand dark |
| Section header (in-slide) | Cambria bold | 20–24pt | Ink |
| Kicker / eyebrow | Arial bold, uppercase, +14% tracking | 12pt | Brand primary |
| Body | Arial | 14–16pt | Ink |
| Caption / source / data label | Arial | 10–12pt | Muted |
| Hero stat | Cambria bold | 60–72pt | Brand dark (accent for the one you highlight) |

The site runs dramatic 56px/18px display-to-body contrast — keep that drama: pair 40pt+ titles with 14–16pt body, never a timid 24pt title.

## 6. Layout Rules

- **Margins:** 0.5" minimum all sides. **Grid:** 12-col mental grid, 0.2" gutters. **Content width:** don't run text edge-to-edge — cap measure so body lines stay short.
- **Spacing:** 0.4" between blocks, used consistently. Generous whitespace is a brand signal — leave it.
- **Alignment:** left-align everything except cover/divider display text.
- **Full-bleed** on cover, dividers, closing (Brand dark). **Cards** on Ground for feature/metric slides. **Split** (text left, framed screenshot right) for product. **Centered editorial** only for a single Insight line.

## 7. Component Rules

Instantiated from `references/translation.md` for Northwind:

- **Card:** `#FFFFFF` fill, 1px `#DCE6E0` border, 14px corners, soft shadow `0 8px 24px rgba(11,61,46,.10)`. Kicker (Brand primary) + Cambria sub-head + Arial body. No edge stripe.
- **Metric card:** 64pt Cambria number in Brand dark, Arial label in Muted below. Row of 3 max. Highlight one number in Accent.
- **Callout (from the pill CTA):** Brand-primary-at-10% tint fill, Brand dark text, 14px corners — a takeaway box, never a fake button.
- **Screenshot frame:** UI on a `#FFFFFF` card over Ground, soft shadow, 14px corners, cropped to one feature.
- **Comparison:** two aligned columns; favored side marked with an Accent tag; other side on muted surface.
- **Quote:** Cambria quote, Muted attribution; oversized quote mark in Brand primary as the motif.

## 8. Imagery, Icons, and Screenshots

Register: **product-led and technical, but warm** — real UI and builder context, not abstract fintech stock. Icons: line-weight, single-color, sat in a Brand-primary-tint circle (the repeating motif). Screenshots: framed on white cards, one feature each, readable. Backgrounds behind imagery: Ground or Brand dark, never busy. Photography (if any): natural, unsaturated, human — matching the unhurried tone.

## 9. Chart and Data Rules

- Background: Ground or white; **no gridlines** beyond a faint `#DCE6E0` baseline. Axes: Muted, thin. Labels: 10–12pt Arial, Muted.
- Color: start with Brand primary; add Brand dark, then Muted. **Accent reserved for the one series or bar you're making a point about.** Max 3 hues per chart plus the accent.
- Data-ink first: label bars directly instead of a legend where you can.

## 10. Recommended Slide Templates

For a Northwind pitch/product deck, use: **Cover, Agenda, Section divider, Problem framing, Insight, Product screenshot, Metrics, Comparison, Process, Recommendation, Closing** (skip Roadmap unless timeline matters). Each follows `references/translation.md`, themed with the palette above — e.g.:

- **Cover:** Brand dark full-bleed, 44pt Cambria headline in white, logo, one Accent mark. **Closing** mirrors it.
- **Metrics:** three metric cards on Ground, the headline number in Accent.
- **Product screenshot:** split layout, framed UI right, 3 Arial annotations left.

## 11. PPTX Theme Setup

- **Size:** 16:9 (13.333" × 7.5").
- **Fonts:** Major (headings) **Cambria**; Minor (body) **Arial**. Both Office-safe — no embedding needed.
- **Theme colors:**

| Slot | Value |
|---|---|
| Dark 1 (text) | `#12211B` (Ink) |
| Light 1 (bg) | `#F4F7F5` (Ground) |
| Dark 2 | `#0B3D2E` (Brand dark) |
| Light 2 | `#FFFFFF` (Surface) |
| Accent 1 | `#1E8E63` (Brand primary) |
| Accent 2 | `#0B3D2E` (Brand dark) |
| Accent 3 | `#F2B705` (Accent) |
| Accent 4–6 | Tints of the above as needed |
| Hyperlink | `#1E8E63` |

- **Masters:** a light master (Ground bg, Ink text) and a dark master (Brand dark bg, white text) covers the whole deck.
- **Render safety:** no accent rule under titles; no edge stripes on cards (shadow + border only); every slide gets a visual; Accent appears once per slide.
- **Accessibility:** green text uses `#0B3D2E` not `#1E8E63` (contrast); Accent never used as text; alt text on all UI screenshots.

## 12. Reusable Deck Prompt

> Build a 16:9 PowerPoint deck in the **Northwind** style.
> **Palette:** ground `#F4F7F5`, surface white `#FFFFFF`, ink `#12211B`, muted text `#5B6B63`, brand dark `#0B3D2E`, brand primary green `#1E8E63`, accent yellow `#F2B705`, border `#DCE6E0`. Green as the dominant color; yellow accent **once per slide at most**; put dark green (not the bright green) on green *text*, and never set the yellow as text.
> **Fonts:** headings **Cambria** bold, body **Arial**. Titles 36–44pt, section headers 20–24pt, body 14–16pt, captions 10–12pt muted, hero stats 60–72pt. Keep strong title-to-body size contrast.
> **Layout:** 0.5" margins, 0.4" gaps, left-aligned body, generous whitespace, one idea per slide. Cover/dividers/closing full-bleed brand dark; feature and metric slides use white cards (14px corners, hairline `#DCE6E0` border, soft shadow) on the ground color.
> **Components:** metric cards with big Cambria numbers; callout boxes (green-tint fill, dark-green text) instead of buttons; screenshots framed on white cards cropped to one feature; line icons in green-tint circles as the motif.
> **Tone:** calm, confident, honest — declarative one-idea statements, no exclamation marks, no urgency.
> **Never:** accent rule under titles, color bars or edge stripes, text-only slides, cream/beige backgrounds, the Aptos font, or spreading the yellow around.
