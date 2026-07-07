# Rocky Mountain — deck generator

Reproducible generator for **Rocky Mountain**-styled PowerPoint decks. One shared
design kit drives several deck *flavors*, so every deck stays consistent with the
design system. All sample content is fictional and non-confidential.

- Design system spec: [`../rocky-mountain-design-system.md`](../rocky-mountain-design-system.md)

## Flavors

| Flavor | Slides | Sample subject | Output |
|---|---|---|---|
| `product-recommendation` | 12 | "Project Summit" — recommend building a product | `product-recommendation-template.pptx` |
| `strategy-review` | 11 | "Q3 Strategy Review" — a quarterly business review | `strategy-review-template.pptx` |
| `pitch` | 11 | "Northpeak" — an investor/sales pitch (swapped brand) | `pitch-template.pptx` |

## Build

```bash
npm install                 # installs pptxgenjs + sharp
npm run build               # build all three flavors
npm run build:pitch         # build one (also :product, :strategy)
npm run preview             # build all + build/<flavor>.preview.html for visual QA

# or directly:
node build_deck.js                        # all flavors
node build_deck.js pitch --preview        # one flavor + HTML preview
node build_deck.js strategy-review --out review.pptx
```

Requires Node 18+. `sharp` is only used to rasterize the abstract particle-field
hero image; everything else is pptxgenjs.

## Standalone slides

One-off slides that aren't part of a flavor deck live as small scripts beside
`build_deck.js` and reuse the same `lib/kit.js` tokens and helpers:

| Script | Output | What it is |
|---|---|---|
| `closing-slide.js` | `closing-slide.pptx` | A redesigned six-month-plan **closing slide**, built as a closing argument: header row, a three-step plan beside a dark **North Star** anchor (`Week 2, not Week 12` is the single biggest phrase), then a success ladder and a renewal-story payoff card. |

```bash
node closing-slide.js     # writes closing-slide.pptx (+ build/closing-slide.preview.html)
```

## Structure

```
build_deck.js        CLI: selects flavor(s), renders .pptx (+ optional HTML preview)
lib/kit.js           design tokens, drawing/builder helpers, and both renderers
flavors/*.js         one file per flavor — the slide content, built with the kit
build/               regenerable artifacts (hero PNG, HTML previews) — git-ignored
*-template.pptx      built outputs
```

## Customize

Everything is sample content — swap it freely.

- **Edit a flavor:** open `flavors/<name>.js`. Change the `brand`, `footer`, and
  the strings/arrays in `build(K)`. Helpers on `K` (`twoTone`, `statBlock`,
  `eyebrow`, `photo`, `pill`, `statusRow`, …) match the design system; tokens are
  `K.INK`, `K.PERI`, etc.
- **Swap in real images:** replace a `photo(...)` placeholder with
  `IM(s, { x, y, w, h, path: "/abs/path.png" })`.
- **Add a new flavor:** copy a file in `flavors/`, export
  `{ name, file, brand, footer, title, usesCloud, build(K) }`, and register it in
  the `FLAVORS` map at the top of `build_deck.js`.

## QA

LibreOffice rendering isn't assumed. `--preview` emits an HTML facsimile of each
deck (driven by the same slide-spec) that you can open in a browser or screenshot
to check layout, spacing, and overlap before sending. The authoritative file is
always the `.pptx`.

**Fonts:** decks specify **Calibri**, which ships with Microsoft Office and renders
true-to-width there. A preview environment without Calibri substitutes a fallback
sans — fine for layout QA; exact letter shapes will differ.
