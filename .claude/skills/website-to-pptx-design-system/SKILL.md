---
name: website-to-pptx-design-system
description: "Turn a website, landing page, brand site, product site, web app, or a set of screenshots into a presentation-ready design system for building on-brand PowerPoint/PPTX decks. Use this whenever someone wants to make slides that match their site, build a branded deck or pitch-deck template from a website, extract a brand's colors/fonts/components for slides, or create a reusable slide design system or theme from a URL or screenshots — even if they don't say the words 'design system'. It measures the site's real colors, type, and components, then translates them into slide-native palette, typography, layout, components, templates, and a ready-to-use deck prompt, and hands off cleanly to the pptx skill."
---

# Website to PPTX Design System

Translate a website into a **presentation-ready design system** — a set of rules that lets someone (a designer, you, or a PPTX-generation workflow) build a polished, on-brand PowerPoint deck without going back to the website.

The deliverable is not a description of the website. It is an **operating system for slides**: measured colors, a legible type scale, layout rules, slide-native components, templates, and a reusable prompt.

## Core principle: a website is not a slide deck

Websites are scroll-based, interactive, and content-dense. Decks are paced, modular, and argument-driven — read from across a room, often for a few seconds each. Your job is to **preserve the brand's visual DNA while adapting it for a completely different medium**. Keep the palette, the type personality, the shapes, the tone. Drop the scroll reveals, the sticky nav, the dense grids, the hover states. When web habits fight slide legibility, legibility wins.

## Workflow

### 1. Extract the visual language (measure, don't guess)

The most common failure mode is inventing hex values and font names. Don't. Get the real ones.

**Preferred — run the extractor** (renders the site in a real browser and reads *computed* styles):

```bash
python scripts/extract_site.py https://theirsite.com \
  --pages https://theirsite.com/product https://theirsite.com/pricing \
  --out ./site-extract
```

It writes `audit.md` (a digest to read first), `audit.json` (full measurements: colors ranked by painted area, fonts, type sizes, radii, shadows, CTA styling, and any CSS custom properties), and `*.full.png` / `*.fold.png` screenshots. **Read `audit.md`, then actually view the screenshots** — the numbers give you exact values; the screenshots give you brand feel, spacing rhythm, imagery, and tone that no audit can capture. Read `references/extraction.md` for how to interpret the output and which pages to capture.

**Fallbacks, in order, when the extractor can't reach the site** (network policy, offline, login wall):
1. Use the **WebFetch tool** on the URL to pull HTML/CSS and read declared colors and font stacks.
2. Ask the user for **screenshots** — homepage, one content-heavy page, one product/feature page, and any page with strong brand styling — and read them with vision.

Whatever the source, don't over-index on the homepage. If you have several pages, compare them and extract the **repeated** patterns — those are the system; one-off flourishes are not.

### 2. Separate brand DNA from web-only behavior

Sort what you found into two buckets. This is the step that makes the output *slide-native* instead of a web screenshot.

| Portable to slides (keep) | Web-only (adapt or drop) |
|---|---|
| Color palette, type hierarchy, spacing rhythm | Sticky nav, scroll reveals, hover states |
| Visual tone, card styles, icon style | Long-form page sections, dense multi-column grids |
| Image/illustration treatment, brand motifs | Interactive components, responsive reflow |
| Button styling → translated into callouts/tags | Buttons as buttons (there is nothing to click) |

### 3. Build the design system

Produce the document in the **Output format** below. For the two sections with deep catalogs — components and slide templates — work from `references/translation.md`, which specifies each component and template (structure, treatment, best use, mistake to avoid). Keep the system **constrained**: a strong deck system has a few strong layouts, not twenty.

### 4. Make it PPTX-ready

The system has to be actionable in PowerPoint specifically. Read `references/pptx-handoff.md` and fill in Section 11 from it: 16:9 sizing, theme color mapping, **PowerPoint-safe font substitutions** (real web fonts rarely ship with Office), master/placeholder guidance, and the render-safety rules the `pptx` skill enforces (no accent stripes, no underlines beneath titles, never default to Aptos). If the user then wants an actual deck built, that section is the bridge to the `pptx` skill.

### 5. Write the reusable deck prompt

End with a single copy-pasteable prompt (Section 12) that carries the whole system — palette, type, layout, components, slide types, tone, and things to avoid — so the user can hand it to Claude (or the `pptx` skill) and get consistent slides every time. This is often the most-used part of the output; make it self-contained.

## Output format

Use this exact structure unless the user asks otherwise. Fill every section with **concrete rules**, not adjectives.

```markdown
# Website → PPTX Design System: [Brand or Website Name]

## 1. Brand Read
What the brand signals, what it makes a viewer feel, what to preserve in a deck, what to avoid. Ground each claim in something you actually saw.

## 2. What Carries Into the Deck
The portable brand DNA (from Workflow step 2).

## 3. What Must Be Adapted
The web-only behavior and how you're translating it for slides.

## 4. Color System
A table — every row a usable slide color:
| Token | Hex | Source | Best use | Misuse to avoid |
Include at least: primary background, primary text, secondary text, brand primary, brand secondary, accent, muted surface, border. Add success/warning/error only if the brand uses them. Mark each hex `measured` or `approx` (see Evidence discipline).

## 5. Typography System
Likely web fonts → PowerPoint-safe substitutes (from references/pptx-handoff.md). Define title, section header, body, caption, and data-label styles, each with a point-size range for: title slides, section dividers, standard content, dense slides, charts/tables. Prioritize readable presentation type over matching the site pixel-for-pixel.

## 6. Layout Rules
Margins, grid, content width, alignment, spacing rhythm, whitespace level. When to use full-bleed vs cards vs split vs centered-editorial layouts.

## 7. Component Rules
Slide-native components translated from the web (see references/translation.md). For each: structure, visual treatment, best use, mistake to avoid.

## 8. Imagery, Icons, and Screenshots
Image style and crop rules, product-screenshot treatment, illustration rules, icon style, background treatment. Name the register concretely (editorial / product-led / abstract / human / technical / premium / clinical).

## 9. Chart and Data Rules
Chart background, axis and gridline treatment, label style, how many colors per chart, highlight behavior, how data slides stay on-brand.

## 10. Recommended Slide Templates
The practical template set (see references/translation.md). For each: purpose, layout, visual rules, when to use it.

## 11. PPTX Theme Setup
16:9 sizing, theme color mapping, font mapping, placeholder structure, reusable components, export + accessibility notes (from references/pptx-handoff.md).

## 12. Reusable Deck Prompt
One self-contained prompt carrying the full system, ready to paste into a PPTX-generation workflow.
```

## Evidence discipline

Every color and font is one of two things, and the reader must be able to tell which:
- **`measured`** — read from the audit (computed styles) or clearly legible in a screenshot. Trust it.
- **`approx`** — inferred by eye from a compressed screenshot, or reconstructed when you couldn't reach the site. Label it, and say what it's based on.

Never present an approximation as measured. A designer who trusts a wrong "exact" hex ships an off-brand deck. Honest labeling is what makes the system usable.

## Quality bar

The output succeeds if **a designer could build a branded PowerPoint deck from it without revisiting the website.**

Be specific. Ban vague design language — "modern," "clean," "professional," "sleek," "minimalist" — *unless* you immediately cash it out in a concrete rule. "Modern" is not guidance; "56px Fraunces headlines over generous whitespace, one terracotta accent per slide" is. If you catch yourself writing an adjective, replace it with the rule that produces the feeling.

`assets/example-design-system.md` is a full worked example at the target quality — consult it when you're unsure how concrete to be.

## Common mistakes to avoid

- **Don't copy the website onto slides.** Preserve DNA; rebuild for the medium.
- **Don't carry web density onto slides.** A page section that scrolls is not a slide's worth of content.
- **Don't invent hex values.** Measure them, or mark them `approx`.
- **Don't recommend fonts without PowerPoint-safe fallbacks.** The user's Office won't have Inter or Fraunces.
- **Don't build a mood board.** Build an operating system for slides — rules someone can execute.
- **Don't treat buttons as buttons.** On a slide there's nothing to click; translate them into callouts, tags, labels, or emphasis.
- **Don't overuse the accent.** In a branded deck the accent is punctuation, not wallpaper — most slides use it once or not at all.
- **Don't sprawl.** Too many layout variants make a deck feel incoherent. Constrain to a strong few.
- **Don't add AI-slide tells.** No accent stripes/bars down an edge, no thin rule under the title — the `pptx` skill bans these; agree with it.

## Reference files

- `scripts/extract_site.py` — browser-based extractor: screenshots + measured colors/fonts/sizes/radii/shadows/tokens.
- `references/extraction.md` — how to run the extractor, interpret its output, choose pages, and fall back when the site is unreachable.
- `references/translation.md` — the deep catalogs for Sections 7 and 10: every slide component and slide template with rules.
- `references/pptx-handoff.md` — Section 11 in depth: 16:9 setup, theme color mapping, PowerPoint-safe fonts, masters, and how to hand off to the `pptx` skill.
- `assets/example-design-system.md` — a complete worked example at the target quality bar.
