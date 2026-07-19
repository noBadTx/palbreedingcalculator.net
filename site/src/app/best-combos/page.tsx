import Link from "next/link";
import type { Metadata } from "next";
import { seedPals, seedCombos } from "@/lib/seed";
import { findPal, sortedPair } from "@/lib/data";
import { PalAvatar } from "@/components/PalAvatar";

export const metadata: Metadata = {
  title: "Best Palworld Breeding Combos — Rare & Unique | PalBreed",
  description: "Discover the best Palworld breeding combos, including rare and unique combinations like Relaxaurus Lux, Anubis, and Jetragon.",
};

export default function BestCombosPage() {
  const unique = seedCombos.filter((c) => c.override).slice(0, 8);

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <h1>Best Palworld Breeding Combos</h1>
        <p style={{ color: "var(--text-secondary)" }}>The most powerful and rare Palworld combos, updated for Feybreak. Click any combo to see the exact result and share it.</p>

        <div className="grid grid-2 mt-8">
          {unique.map((c) => {
            const pa = findPal(seedPals, c.parentA)!;
            const pb = findPal(seedPals, c.parentB)!;
            const child = findPal(seedPals, c.child)!;
            const [a, b] = sortedPair(c.parentA, c.parentB);
            return (
              <Link key={`${a}-${b}`} href={`/combo/${a}-${b}/`} className="card" style={{ textDecoration: "none" }}>
                <div className="flex items-center gap-4">
                  <PalAvatar name={child.name} primaryType={child.types[0]} size={64} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: "var(--text-h3)", color: "var(--text-primary)" }}>{child.name}</div>
                    <div style={{ color: "var(--text-secondary)", fontSize: "var(--text-small)" }}>{pa.name} + {pb.name}</div>
                    <span className="badge badge-primary mt-2">Unique Combo</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
