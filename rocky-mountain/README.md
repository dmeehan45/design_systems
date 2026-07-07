# Rocky Mountain — deck generator

Reproducible generator for **Rocky Mountain**-styled PowerPoint decks. It builds a
12-slide product-recommendation `.pptx` from a single slide-spec, so every deck
stays consistent with the design system.

- Design system spec: [`../rocky-mountain-design-system.md`](../rocky-mountain-design-system.md)
- Sample output: `product-recommendation-template.pptx`

## Build

```bash
npm install pptxgenjs sharp
node build_deck.js                 # → product-recommendation-template.pptx
node build_deck.js --preview       # also writes build/preview.html (open in a browser to QA)
node build_deck.js --out deck.pptx # custom output path
```

Requires Node 18+. `sharp` is only used to rasterize the abstract particle-field
hero image; everything else is pptxgenjs.

## Make it your own

Everything is sample content — nothing here is confidential.

- Swap the wordmark and sample subject: edit the `BRAND` and `DECK` constants near the top of `build_deck.js`.
- Change content: each slide is defined in the `BUILD THE 12 SLIDES` section using small helpers (`twoTone`, `statBlock`, `eyebrow`, `photo`, `pill`, …). Edit the strings/arrays in place.
- Colors and type come from the token constants at the top — they match the design system; change them there if you fork the palette.
- Image slots render as labeled placeholders; drop in real photos by replacing the `photo(...)` calls with `IM(s, { x, y, w, h, path })`.

## How QA works here

LibreOffice-based rendering isn't assumed. `--preview` emits an HTML facsimile of
the deck (driven by the same slide-spec) that you can screenshot or open in a
browser to check layout, spacing, and overlap before sending the `.pptx`. The
authoritative file is always the `.pptx`.

## Notes

- Fonts: the deck specifies **Calibri**, which ships with Microsoft Office and
  renders true-to-width there. A preview environment without Calibri will
  substitute a fallback sans — fine for layout QA, exact letter shapes will differ.
- `build/` holds regenerable artifacts (the hero PNG, the HTML preview) and is
  git-ignored.
