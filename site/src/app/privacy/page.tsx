import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy — Palworld Breeding Calculator | PalBreed" };

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <h1>Privacy Policy</h1>
        <p><strong>Last updated:</strong> 2026-07-19</p>
        <p>This Privacy Policy explains how PalBreed collects, uses, and protects information when you use our website at palbreedingcalculator.net.</p>
        <h2>Information We Collect</h2>
        <p>We do not require you to create an account or provide personal information to use the calculator. We may automatically collect technical information such as IP address, browser type, device type, pages visited, and referring website.</p>
        <h2>Cookies and Tracking</h2>
        <p>We use Plausible Analytics by default for anonymous traffic analysis. Google Analytics 4 is only loaded if you accept analytics cookies through the cookie banner.</p>
        <h2>Third-Party Services</h2>
        <p>We use Cloudflare Pages for hosting and Plausible Analytics for anonymous traffic analysis. These services may process technical data on our behalf.</p>
        <h2>Contact Us</h2>
        <p>For questions, contact us at <a href="mailto:feedback@palbreedingcalculator.net">feedback@palbreedingcalculator.net</a>.</p>
      </div>
    </section>
  );
}
