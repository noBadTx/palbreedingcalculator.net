import { stitch } from '@google/stitch-sdk';
import fs from 'fs';
import path from 'path';

const PROJECT_ID = '12474507263525782740';
const BASE_DIR = '/root/palbreedingcalculator.net/design/stitch';

const STYLE_PROMPT = `
Design for "Palworld Breeding Calculator" (palbreedingcalculator.net), a tactical breeding tool for Palworld players.

Visual style: dark tactical terminal / game toolkit UI. Background #0B0F12. Primary accent amber #F5A623. Secondary teal #4ECDC4. Surface cards in #151A1E. Text #F0F2F5, muted #8A9499. Font: Inter for UI, JetBrains Mono for data/labels.

Rules:
- No official Palworld artwork, characters, or logos.
- Use abstract geometric avatars or type icons for Pals (Neutral, Fire, Water, Grass, Electric, Ice, Ground, Dark, Dragon).
- Web-first design (desktop viewport, ~1280px+).
- Clean, data-dense, tool-like aesthetic.
- Consistent header/navigation with logo "PalBreed" and links: Calculator, Reverse, Best Combos, Passives.
`;

const PAGES = [
  {
    key: 'best-combos',
    prompt: `Best combos aggregation page. ${STYLE_PROMPT}
Content:
- H1: "Best Palworld Breeding Combos" with subhead "Top parent pairs sorted by rarity, utility, and community picks."
- Filter bar: sort by Most Popular, Highest Stats, Easiest to Breed, Rarest Result.
- Grid of combo cards. Each card: child Pal geometric avatar, name, type badges, parent pair (Parent A + Parent B), key stats, passive skill chips, rarity tag.
- Pagination or infinite scroll toggle.
- "Build Your Own" CTA to forward calculator.
- Footer navigation.`
  },
  {
    key: 'passive-skills',
    prompt: `Passive skills guide page. ${STYLE_PROMPT}
Content:
- H1: "Palworld Passive Skills Guide" with subhead "A complete list of passive traits, effects, and how they pass to offspring."
- Search box and type filter chips.
- Data table with columns: Skill Name, Effect, Rarity, Best Used On, Inheritance Chance.
- Highlighted row examples: Legendary, Ferocious, Lucky, Workaholic.
- Tip callout explaining passive inheritance mechanics.
- "Find Pals With This Skill" link.
- Footer navigation.`
  },
  {
    key: 'about',
    prompt: `About page. ${STYLE_PROMPT}
Content:
- H1: "About PalBreed"
- Mission statement: "PalBreed is a free, fast, no-signup Palworld breeding calculator built by players, for players."
- 3 value cards: Player-First, No Paywalls, Always Up-to-Date.
- Data sources and game version info.
- Contact / feedback CTA.
- Footer navigation.`
  },
  {
    key: 'sitemap',
    prompt: `Sitemap / site index page. ${STYLE_PROMPT}
Content:
- H1: "Sitemap"
- Grouped link list: Tools (Calculator, Reverse, Best Combos, Passive Skills), Guides (About, FAQ), Legal (Privacy, Terms, Cookie Policy, Refund Policy).
- Brief description under each link.
- Last updated date.
- Footer navigation.`
  },
  {
    key: 'privacy',
    prompt: `Privacy policy page. ${STYLE_PROMPT}
Content:
- H1: "Privacy Policy"
- Last updated date.
- Sections: What We Collect, How We Use It, Cookies, Third-Party Services, Your Rights, Contact Us.
- Plain English, no legal jargon overload.
- Footer navigation.`
  },
  {
    key: 'terms',
    prompt: `Terms of service page. ${STYLE_PROMPT}
Content:
- H1: "Terms of Service"
- Last updated date.
- Sections: Acceptance, Use of the Calculator, Disclaimer, Intellectual Property, Termination, Changes to Terms, Contact.
- Clean layout with numbered sections.
- Footer navigation.`
  },
  {
    key: 'cookie-policy',
    prompt: `Cookie policy page. ${STYLE_PROMPT}
Content:
- H1: "Cookie Policy"
- Last updated date.
- Sections: What Are Cookies, How We Use Cookies, Managing Cookies, Third-Party Cookies, Updates.
- Table of cookie categories: Necessary, Analytics, Preferences.
- Footer navigation.`
  },
  {
    key: 'refund-policy',
    prompt: `Refund policy page. ${STYLE_PROMPT}
Content:
- H1: "Refund Policy"
- Last updated date.
- Clear statement: "PalBreed is a free tool. We do not sell subscriptions or digital goods."
- Sections: No Paid Services, Donations, Contact for Billing Questions.
- Footer navigation.`
  }
];

async function main() {
  const outDir = path.join(BASE_DIR, 'pages');
  fs.mkdirSync(outDir, { recursive: true });

  const project = stitch.project(PROJECT_ID);
  console.log('Loaded project:', project.id);

  for (const page of PAGES) {
    console.log(`\n[${page.key}] Generating...`);
    try {
      const screen = await project.generate(page.prompt);
      console.log(`[${page.key}] screen:`, screen.id);

      const htmlUrl = await screen.getHtml();
      const imageUrl = await screen.getImage();
      console.log(`[${page.key}] HTML:`, htmlUrl);
      console.log(`[${page.key}] Image:`, imageUrl);

      const meta = {
        projectId: project.id,
        screenId: screen.id,
        htmlUrl,
        imageUrl,
        generatedAt: new Date().toISOString()
      };
      fs.writeFileSync(path.join(outDir, `${page.key}.json`), JSON.stringify(meta, null, 2));
    } catch (err) {
      console.error(`[${page.key}] FAILED:`, err.message);
      fs.writeFileSync(path.join(outDir, `${page.key}.error`), err.message);
    }
  }

  console.log('\nP1 batch done.');
}

main().catch(err => {
  console.error('Batch error:', err);
  process.exit(1);
});
