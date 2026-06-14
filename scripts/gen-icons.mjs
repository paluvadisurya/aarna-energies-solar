/**
 * Generates the favicon + PWA / home-screen app icons from the Aarna brand
 * mark (sun + solar "A"). Run with:  npm run icons
 *
 * Outputs into /public:
 *   favicon-32.png            browser tab fallback
 *   apple-touch-icon.png      iOS "Add to Home Screen"
 *   icon-192.png, icon-512.png        Android / PWA (purpose: any)
 *   icon-maskable-512.png     Android adaptive icon (purpose: maskable)
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, "public");
mkdirSync(pub, { recursive: true });

const defs = `<defs>
  <radialGradient id="g" cx="0.35" cy="0.3" r="0.85">
    <stop offset="0" stop-color="#f7b733"/>
    <stop offset="1" stop-color="#dc5000"/>
  </radialGradient>
</defs>`;

// The brand mark content (sun + "A"), authored on a 512 canvas.
const mark = `
  <circle cx="320" cy="176" r="92" fill="#e8801f"/>
  <circle cx="320" cy="176" r="92" fill="url(#g)"/>
  <path d="M160 372 L248 140 L296 140 L384 372 L326 372 L272 212 L218 372 Z" fill="#ffedd7"/>
  <path d="M214 322 H330" stroke="#100904" stroke-width="26" stroke-linecap="round"/>`;

const rounded = (rx) => `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="${rx}" fill="#100904"/>${mark}${defs}
</svg>`;

// Maskable: same mark, scaled into the central safe zone with full-bleed bg.
const maskable = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#100904"/>
  <g transform="translate(256 256) scale(0.62) translate(-272 -256)">${mark}</g>${defs}
</svg>`;

const jobs = [
  { svg: rounded(112), size: 32, out: "favicon-32.png" },
  { svg: rounded(0), size: 180, out: "apple-touch-icon.png" },
  { svg: rounded(96), size: 192, out: "icon-192.png" },
  { svg: rounded(112), size: 512, out: "icon-512.png" },
  { svg: maskable, size: 512, out: "icon-maskable-512.png" },
];

await Promise.all(
  jobs.map(({ svg, size, out }) =>
    sharp(Buffer.from(svg)).resize(size, size).png().toFile(join(pub, out))
  )
);

console.log(`Generated ${jobs.length} icons in /public`);
