/**
 * Captures marketing screenshots of the running site into /docs/screenshots.
 * Start the dev (or prod) server first, then:  node scripts/screenshots.mjs
 *
 * Emulates prefers-reduced-motion so smooth-scroll (Lenis) is disabled and
 * the page captures cleanly at each section.
 */
import puppeteer from "puppeteer-core";
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "docs", "screenshots");
mkdirSync(outDir, { recursive: true });

const URL = process.env.SHOT_URL || "http://localhost:3000";
const CHROME =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const sections = [
  { id: "#top", name: "hero" },
  { id: "#offer", name: "offer" },
  { id: "#technology", name: "technology" },
  { id: "#system", name: "system" },
  { id: "#impact", name: "impact" },
  { id: "#pricing", name: "pricing" },
  { id: "#contact", name: "contact" },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    args: ["--no-sandbox", "--hide-scrollbars", "--force-color-profile=srgb"],
  });

  for (const device of [
    { key: "desktop", width: 1440, height: 860, dsf: 2 },
    { key: "mobile", width: 390, height: 844, dsf: 3 },
  ]) {
    const page = await browser.newPage();
    await page.setViewport({
      width: device.width,
      height: device.height,
      deviceScaleFactor: device.dsf,
    });
    await page.emulateMediaFeatures([
      { name: "prefers-reduced-motion", value: "reduce" },
    ]);
    await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
    await sleep(900); // let the solar canvas paint a frame

    for (const s of sections) {
      // mobile: skip the wide tables that read better on desktop
      if (device.key === "mobile" && (s.name === "technology" || s.name === "system"))
        continue;
      await page.evaluate((id) => {
        const el = id === "#top" ? null : document.querySelector(id);
        if (!el) {
          window.scrollTo({ top: 0 });
          return;
        }
        const y = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: y });
      }, s.id);
      await sleep(900); // let reveal animations finish
      const buf = await page.screenshot({ type: "png" });
      const maxW = device.key === "mobile" ? 480 : 1400;
      await sharp(buf)
        .resize({ width: maxW, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(join(outDir, `${s.name}-${device.key}.webp`));
      // eslint-disable-next-line no-console
      console.log(`captured ${s.name}-${device.key}.webp`);
    }
    await page.close();
  }

  await browser.close();
  // eslint-disable-next-line no-console
  console.log("done");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
