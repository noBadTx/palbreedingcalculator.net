import { seedPals, seedCombos } from "@/lib/seed";

export const dynamic = "force-static";
export const revalidate = false;

const baseUrl = "https://palbreedingcalculator.net";

export async function GET() {
  const paths = [
    "",
    "breeding-calculator/",
    "reverse-breeding/",
    "best-combos/",
    "passive-skills/",
    "about/",
    "privacy/",
    "terms/",
    "cookie-policy/",
    "refund-policy/",
    "sitemap/",
  ];

  const palUrls = seedPals.map((p) => `pal/${p.id}/`);
  const comboUrls = seedCombos.slice(0, 15).map((c) => {
    const [a, b] = c.parentA < c.parentB ? [c.parentA, c.parentB] : [c.parentB, c.parentA];
    return `combo/${a}-${b}/`;
  });

  const all = [...paths, ...palUrls, ...comboUrls];

  const xml = `\u003c?xml version="1.0" encoding="UTF-8"?\u003e\n\u003curlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\u003e\n` +
    all.map((p) => `  \u003curl\u003e\n    \u003cloc\u003e${baseUrl}/${p}\u003c/loc\u003e\n  \u003c/url\u003e`).join("\n") +
    "\n\u003c/urlset\u003e";

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
