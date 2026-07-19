import { stitch } from '@google/stitch-sdk';
import fs from 'fs';

async function main() {
  try {
    console.log('Creating Stitch project...');
    const project = await stitch.createProject('Palworld Breeding Calculator');
    console.log('Project created:', project.id);

    const prompt = `
Design a landing page for "Palworld Breeding Calculator" (palbreedingcalculator.net), a tool for Palworld players.

Visual style: dark tactical terminal / game toolkit UI. Background #0B0F12. Primary accent amber #F5A623. Secondary teal #4ECDC4. Surface cards in #151A1E. Text #F0F2F5, muted #8A9499.

Content (use exactly):
- H1: "Free Palworld Breeding Calculator" with badge "Updated for Palworld Feybreak (v1.x)"
- Subhead: "Pick two parents and get the exact child. Or pick a target Pal and find every parent pair that breeds it. No spreadsheets, no signups, no ads in the way."
- Two primary buttons: "Start Breeding" (amber) and "Reverse Lookup" (outlined)
- Section "Find Your Pal in 3 Steps" with: 1) Pick Your Direction, 2) Get the Result, 3) Share the Link
- Section "Built for Every Kind of Breeder" with three cards: Hardcore Min-Maxers, Casual Players, Content Creators
- Section "Why This Calculator Works" with four features: Forward + Reverse, Mobile-First Design, Shareable Results, Latest Game Data
- Section "100% Free. No Signup. No Paywall." with CTA "Try the Calculator"
- FAQ section with 6 questions
- Footer with: About, Privacy, Terms, Sitemap, Feedback

Requirements:
- Mobile-first responsive
- No official Palworld art/assets
- Use abstract geometric avatars or type icons for Pals (Neutral, Fire, Water, Grass, Electric, Ice, Ground, Dark, Dragon)
- Clean, data-dense, tool-like aesthetic
- Include a navigation bar with logo "PalBreed" and links: Calculator, Reverse, Best Combos, Passives
    `;

    console.log('Generating screen...');
    const screen = await project.generate(prompt);
    console.log('Screen generated:', screen.id);

    const htmlUrl = await screen.getHtml();
    const imageUrl = await screen.getImage();

    console.log('HTML URL:', htmlUrl);
    console.log('Image URL:', imageUrl);

    fs.writeFileSync('/root/palbreedingcalculator.net/design/stitch-home.json', JSON.stringify({
      projectId: project.id,
      screenId: screen.id,
      htmlUrl,
      imageUrl
    }, null, 2));
  } catch (err) {
    console.error('Stitch error:', err);
    process.exit(1);
  }
}

main();
