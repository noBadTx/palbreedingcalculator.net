import Link from "next/link";
import type { Metadata } from "next";
import { seedPals, seedCombos } from "@/lib/seed";

export const metadata: Metadata = { title: "Sitemap — Palworld Breeding Calculator | PalBreed" };

const pages = [
  { href: "/", label: "Home" },
  { href: "/breeding-calculator/", label: "Forward Calculator" },
  { href: "/reverse-breeding/", label: "Reverse Calculator" },
  { href: "/best-combos/", label: "Best Combos" },
  { href: "/passive-skills/", label: "Passive Skills" },
  { href: "/about/", label: "About" },
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms of Service" },
  { href: "/cookie-policy/", label: "Cookie Policy" },
  { href: "/refund-policy/", label: "Refund Policy" },
];

export default function SitemapPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <h1>Sitemap</h1>

        <div className="grid grid-2 mt-8">
          <div className="card">
            <h2 className="card-title">Pages</h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2 className="card-title">Top Pals ({seedPals.length})</h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              {seedPals.slice(0, 20).map((p) => (
                <li key={p.id}>
                  <Link href={`/pal/${p.id}/`}>{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
