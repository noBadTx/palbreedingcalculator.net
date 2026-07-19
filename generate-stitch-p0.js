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
    key: 'home',
    prompt: `Landing page. ${STYLE_PROMPT}
Content:
- H1: "Free Palworld Breeding Calculator" with badge "Updated for Palworld Feybreak (v1.x)"
- Subhead: "Pick two parents and get the exact child. Or pick a target Pal and find every parent pair that breeds it. No spreadsheets, no signups, no ads in the way."
- Two primary buttons: "Start Breeding" (amber) and "Reverse Lookup" (outlined)
- 3-step flow: Pick Your Direction, Get the Result, Share the Link
- 3 audience cards: Hardcore Min-Maxers, Casual Players, Content Creators
- 4 feature blocks: Forward + Reverse, Mobile-First Design, Shareable Results, Latest Game Data
- CTA: "100% Free. No Signup. No Paywall."
- FAQ section with 6 questions
- Footer: About, Privacy, Terms, Sitemap, Feedback`
  },
  {
    key: 'breeding-calculator',
    prompt: `Forward breeding calculator page. ${STYLE_PROMPT}
Content:
- H1: "Forward Breeding Calculator" with subhead "Pick two parents. See the exact child, type, stats, and passives."
- Two parent selector panels side-by-side. Each panel: Pal avatar placeholder, name input/dropdown, type badges, gender toggle.
- "Calculate" button (amber).
- Result card: child Pal avatar, name, type badges, Partner Skill, work suitability icons, passive skill chips, stats bars.
- Share result button.
- Tip: "Same-species parents always produce the same species. Different species follow the breeding power formula."
- Footer navigation.`
  },
  {
    key: 'reverse-breeding',
    prompt: `Reverse breeding calculator page. ${STYLE_PROMPT}
Content:
- H1: "Reverse Breeding Calculator" with subhead "Find every parent pair that can produce your target Pal."
- Target Pal selector panel with avatar, type, rarity tag.
- Results table with columns: Parent 1, Parent 2, Child, Probability, Actions.
- Filter bar: type filter, exclude unbreedable, sort by probability.
- Empty state: "Select a Pal to see all possible parent combinations."
- Pagination or "Load more" control.
- Footer navigation.`
  },
  {
    key: 'combo-result',
    prompt: `Combo result detail page. ${STYLE_PROMPT}
Content:
- H1: "Breeding Result" with breadcrumb: Calculator > Parent 1 + Parent 2 > Result
- Parents row: two parent cards (Relaxaurus, Sparkit) with type badges, gender, work suitability icons.
- Arrow down to child card: Relaxaurus Lux, type Water + Electric, Partner Skill, passives, stats bars.
- Section "Breeding Details": Breeding Power formula explanation, probability note.
- Section "Share This Result" with copy URL and social buttons.
- "Try Reverse Lookup" link.
- Footer navigation.`
  },
  {
    key: 'pal-detail',
    prompt: `Pal detail page (example: Relaxaurus Lux). ${STYLE_PROMPT}
Content:
- Hero section with Pal abstract geometric avatar, name "Relaxaurus Lux", type badges Water + Electric, rarity indicator, breeding power value.
- Quick stats: HP, Attack, Defense, Speed, Stamina.
- Partner Skill card with name and description.
- Work Suitability section with icons and levels for Planting, Watering, Handiwork, Mining, etc.
- Possible Passives section with chips.
- Best Combos section: top 3 parent pairs to breed this Pal.
- "Back to Calculator" CTA.
- Footer navigation.`
  }
];

async function main() {
  const outDir = path.join(BASE_DIR, 'pages');
  const screenshotDir = path.join(BASE_DIR, 'screenshots');
  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(screenshotDir, { recursive: true });

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

  console.log('\nP0 batch done.');
}

main().catch(err => {
  console.error('Batch error:', err);
  process.exit(1);
});
