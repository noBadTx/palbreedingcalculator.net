import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service — Palworld Breeding Calculator | PalBreed" };

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <h1>Terms of Service</h1>
        <p><strong>Last updated:</strong> 2026-07-19</p>
        <p>By accessing or using palbreedingcalculator.net, you agree to these Terms of Service. If you do not agree, do not use the Site.</p>
        <h2>Description of Service</h2>
        <p>The Site provides a free Palworld breeding calculator. All calculations are based on publicly available game data and community-maintained formulas.</p>
        <h2>Intellectual Property</h2>
        <p>Palworld is a trademark of Pocketpair, Inc. This Site is a fan-made project and is not affiliated with, endorsed by, or sponsored by Pocketpair, Inc. We do not use official Palworld artwork, assets, or copyrighted material.</p>
        <h2>Disclaimer</h2>
        <p>The Site is provided "as is". Breeding results are based on game data that may change after updates. We are not responsible for any in-game outcomes or decisions made based on the Site's results.</p>
        <h2>Contact Us</h2>
        <p>For questions, contact us at <a href="mailto:feedback@palbreedingcalculator.net">feedback@palbreedingcalculator.net</a>.</p>
      </div>
    </section>
  );
}
