import type { Metadata } from "next";

export const metadata: Metadata = { title: "Cookie Policy — Palworld Breeding Calculator | PalBreed" };

export default function CookiePage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <h1>Cookie Policy</h1>
        <p><strong>Last updated:</strong> 2026-07-19</p>
        <p>Cookies are small text files stored on your device when you visit a website. They help us understand how visitors use our Site and improve functionality.</p>
        <h2>How We Use Cookies</h2>
        <p><strong>Essential cookies:</strong> Required for the Site to function. These cannot be disabled.</p>
        <p><strong>Analytics cookies:</strong> Used by Plausible Analytics and Google Analytics 4 to understand how visitors interact with the Site. These are only set with your consent.</p>
        <h2>Managing Your Preferences</h2>
        <p>When you first visit the Site, you can choose which cookies you accept. You can also disable cookies through your browser settings.</p>
      </div>
    </section>
  );
}
