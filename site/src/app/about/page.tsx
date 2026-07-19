import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Palworld Breeding Calculator | PalBreed",
  description: "Learn about PalBreed, a fan-made Palworld breeding calculator. Free, mobile-first, and updated for Feybreak.",
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <h1>About PalBreed</h1>
        <p>PalBreed is a fan-made Palworld breeding calculator built to help players find the exact child from two parents, or discover every parent pair for a target Pal.</p>
        <p>We believe tools should be fast, mobile-friendly, and free. No signups, no paywalls, no ads in the way.</p>
        <p>All calculations are based on publicly available community data and CombiRank formulas. We update the data after major Palworld patches, including the Feybreak expansion.</p>
        <p>Palworld is a trademark of Pocketpair, Inc. This site is not affiliated with or endorsed by Pocketpair. We do not use official Palworld artwork or assets.</p>
        <p>Questions or feedback? Email us at {" "}
          <a href="mailto:feedback@palbreedingcalculator.net">feedback@palbreedingcalculator.net</a>.
        </p>
      </div>
    </section>
  );
}
