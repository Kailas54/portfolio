import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "projects");

const sites = [
  { slug: "saradagiri-hostel", url: "https://www.saradagirihostel.com/" },
  { slug: "aztech-academy", url: "https://aztech-delta.vercel.app/" },
  { slug: "adidas-web", url: "https://adidas-web-mu.vercel.app/" },
  { slug: "improps-ecom", url: "https://ecom-six-sepia-46.vercel.app/" },
  { slug: "mulearn-rie", url: "https://mulearnrie.in/" },
  { slug: "kehfi-kerala", url: "https://kehfi-kerala-spice-branding.vercel.app/" },
  { slug: "crm-dashboard", url: "https://crm-ruby-phi-14.vercel.app/" },
  { slug: "workshop-platform", url: "https://workshop-frontend-pi.vercel.app/" },
  { slug: "iphone-showcase", url: "https://iphone-mu-nine.vercel.app/" },
  { slug: "isometric-room", url: "https://isometricroom.vercel.app/" },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 2,
});

for (const site of sites) {
  const page = await context.newPage();
  try {
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(2500);
    const file = path.join(outDir, `${site.slug}.png`);
    await page.screenshot({ path: file, fullPage: false });
    console.log("OK", site.slug);
  } catch (err) {
    console.error("FAIL", site.slug, err.message);
  } finally {
    await page.close();
  }
}

await browser.close();
