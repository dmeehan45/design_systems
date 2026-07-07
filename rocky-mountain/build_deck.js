#!/usr/bin/env node
// Rocky Mountain — deck builder CLI.
//
//   node build_deck.js                         # build all flavors
//   node build_deck.js pitch                   # build one flavor
//   node build_deck.js strategy-review --preview   # + build/<flavor>.preview.html for QA
//   node build_deck.js pitch --out my.pptx     # custom output (single flavor only)
//
// Flavors live in ./flavors/*.js and share ./lib/kit.js. See README.md.
const path = require("path");
const fs = require("fs");
const { makeKit, makePointCloud, renderPptx, renderHtml } = require("./lib/kit");

const FLAVORS = {
  "product-recommendation": require("./flavors/product-recommendation"),
  "strategy-review": require("./flavors/strategy-review"),
  "pitch": require("./flavors/pitch"),
};

const BUILD = path.join(__dirname, "build");
fs.mkdirSync(BUILD, { recursive: true });

const args = process.argv.slice(2);
const preview = args.includes("--preview");
const outIdx = args.indexOf("--out");
const outOverride = outIdx > -1 ? args[outIdx + 1] : null;
const positional = args.filter((a, i) => !a.startsWith("--") && i !== outIdx + 1);
const names = (!positional[0] || positional[0] === "all") ? Object.keys(FLAVORS) : [positional[0]];

for (const n of names) {
  if (!FLAVORS[n]) { console.error(`Unknown flavor "${n}". Options: all, ${Object.keys(FLAVORS).join(", ")}`); process.exit(1); }
}
if (outOverride && names.length > 1) { console.error("--out only works with a single flavor"); process.exit(1); }

(async () => {
  const cloud = path.join(BUILD, "pointcloud.png");
  if (names.some(n => FLAVORS[n].usesCloud)) await makePointCloud(cloud);
  for (const n of names) {
    const f = FLAVORS[n];
    const K = makeKit({ brand: f.brand, footer: f.footer, cloud });
    f.build(K);
    const out = outOverride || path.join(__dirname, f.file);
    await renderPptx(K.deck, out, { title: f.title, author: f.brand });
    console.log(`✓ ${n}: wrote ${path.basename(out)} (${K.deck.length} slides)`);
    if (preview) { const h = path.join(BUILD, `${n}.preview.html`); renderHtml(K.deck, h); console.log(`  preview: build/${n}.preview.html`); }
  }
})().catch(e => { console.error(e); process.exit(1); });
