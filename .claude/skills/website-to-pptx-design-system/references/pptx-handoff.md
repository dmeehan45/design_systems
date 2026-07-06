# PPTX handoff

The detail behind Output **Section 11 (PPTX Theme Setup)**, and how to turn the design system into an actual deck. This is where a beautiful web palette meets the hard realities of PowerPoint — fonts the user doesn't have, a fixed theme-color model, and a render engine that punishes a few specific habits.

This skill's output pairs with the **`pptx` skill**, which builds/edits the actual `.pptx`. Keep this section consistent with it so the two agree.

## Slide size

Default to **16:9 (13.333" × 7.5")**. Use 4:3 (10" × 7.5") only if the user explicitly needs it (legacy projectors, some internal templates).

## PowerPoint-safe fonts (the substitution most people get wrong)

The brand's real fonts — Inter, Fraunces, Poppins, GT Super — are almost never installed in the audience's PowerPoint. If you specify them and the machine lacks them, PowerPoint silently substitutes something with **different letter widths**, so text that fit in your design now overflows on their screen. Two ways to be safe: **embed the fonts on export**, or **map to fonts that ship with Office**. Mapping is the robust default.

These render true-to-width *and* ship with Office (the `pptx` skill's QA-safe list — use them for body and anything where fit matters):

> **Arial, Calibri, Cambria, Times New Roman, Courier New, Bookman Old Style, Century Schoolbook**

Substitution guide — match the brand's *category*, not its exact shape:

| Brand web font (examples) | Category | Office-safe substitute | Notes |
|---|---|---|---|
| Inter, Helvetica, Roboto, SF Pro, system-ui, Arial | Neutral/humanist sans | **Arial** | Closest true-width neutral sans. |
| Circular, Calibri, softer corporate sans | Rounded sans | **Calibri** | Warmer than Arial. |
| Poppins, Montserrat, Futura, Gotham | Geometric sans | **Calibri** or **Arial** (body) | For geometric *display*, Century Gothic is closer but QA-unreliable — use only for titles, add ~10% width slack, don't trust QA fit. |
| Fraunces, Playfair, Canela, GT Super, Tiempos | Serif display | **Cambria**; **Bookman Old Style** / **Century Schoolbook** for a warmer/wider serif | All safe and full of personality — great for headlines. |
| Lora, Merriweather, Source Serif, Georgia | Body serif | **Cambria** | Reliable body serif. |
| JetBrains Mono, Fira Code, SF Mono, Menlo | Mono | **Courier New** | For code/data readouts. |

**Never default to Aptos** (Office's post-2023 default): it has no metric-safe substitute here and is missing from older Office installs, so it's unreliable on both ends. If the user asks for a specific non-safe font, honor it where they asked, add ~10% container slack, and don't trust visual QA text-fit on those elements.

**Pairing:** a safe-list serif header (Cambria / Bookman Old Style / Century Schoolbook) with a safe-list sans body (Calibri / Arial) gives real brand contrast at zero QA risk — usually the right move for a branded deck.

## Type scale (render-safe presentation sizes)

Web pixel sizes don't transfer — a 56px web hero is not a 56pt slide title. Land the design system's Section 5 ranges on these presentation-native sizes:

| Element | Size |
|---|---|
| Slide title | 36–44pt bold |
| Section header | 20–24pt bold |
| Body text | 14–16pt |
| Caption / source / data label | 10–12pt, muted |
| Hero stat (metric card) | 60–72pt |

Preserve the brand's *contrast ratio* between heading and body even as absolute sizes change — a brand with dramatic 56px/16px web contrast should feel dramatic on slides too.

## Theme color mapping

PowerPoint themes carry 12 color slots. Map your tokens onto them so the deck's theme picker, charts, and SmartArt stay on-brand automatically:

| Theme slot | Map to your token |
|---|---|
| Text/Background — Dark 1 (`tx1`) | Primary text / ink |
| Text/Background — Light 1 (`bg1`) | Primary background (ground/surface) |
| Text/Background — Dark 2 (`tx2`) | Brand dark surface (the footer/CTA-band color) |
| Text/Background — Light 2 (`bg2`) | Muted surface |
| Accent 1 | Brand primary |
| Accent 2 | Brand secondary |
| Accent 3 | Accent color |
| Accent 4–6 | Supporting tints / semantic (success, warning, error) if the brand uses them |
| Hyperlink / Followed | Brand primary (or a dedicated link color) |

Building from scratch with pptxgenjs, you set colors directly rather than editing theme XML — but keep this mapping in mind so a later "make it match our theme" is trivial, and so chart series pull from Accent 1→3 in a sensible order (dominant brand color first).

## Layout and spacing

- Margins: **0.5" minimum** from every slide edge.
- Gaps: pick **0.3"** or **0.5"** between content blocks and use it consistently — don't mix randomly.
- Left-align body text and lists; center only titles and cover text.
- Leave breathing room. Web density does not transfer; a slide should hold one idea.

## Render-safety rules (agree with the `pptx` skill)

These read as AI-generated filler and the `pptx` skill bans them — the design system must not recommend them:

- **No thin accent rule under a title.** Separate with size, weight, and whitespace.
- **No decorative color bars or accent stripes** — no full-width header/footer bars, no vertical sidebar stripe, no thin accent stripe along a card edge, no single-side borders. To set a card apart, use a subtle background tint, a soft shadow, or an icon — never an edge stripe.
- **No cream/beige default backgrounds.** Use white or the brand palette; avoid warm-neutral defaults (`F5F5DC`, `FAF0E6`, `FFF8E1`) unless the brand genuinely uses them.
- **No text-only slides.** Every slide gets a visual element — image, chart, icon, shape, or a strong stat.
- **Accent is punctuation.** One accent moment per slide at most.

## Accessibility and export

- **Contrast:** body text ≥ 4.5:1 against its background; large/bold text ≥ 3:1. A brand accent that looks great as a big web button often fails as small text on white — darken the *text* variant of a color while keeping the bright version for fills. Verify after mapping.
- **Don't encode meaning in color alone** (e.g. red/green) — add a label or icon.
- **Images:** add alt text; keep a logical reading order for screen readers.
- **Travel:** if you used any non-safe font, embed fonts on export (PowerPoint → Options → Save → *Embed fonts in the file*), or the deck reflows on other machines. Safe-list fonts need no embedding.

## Building the actual deck

When the user wants slides built (not just the system), hand off to the **`pptx` skill**:
- **From scratch** → its `pptxgenjs.md` guide. Feed it Section 11 (this mapping) + Section 12 (the reusable deck prompt).
- **From a brand template** (`.pptx`/`.potx`) → its `editing.md` guide; map the template's theme slots to the table above.
- Always run the `pptx` skill's visual QA (render to images, inspect with fresh eyes) before declaring the deck done.
