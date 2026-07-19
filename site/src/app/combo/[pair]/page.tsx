import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { seedPals, seedCombos } from "@/lib/seed";
import { findPal, findCombo } from "@/lib/data";
import { PalAvatar } from "@/components/PalAvatar";
import { TypeBadge } from "@/components/TypeBadge";

export function generateStaticParams() {
  return seedCombos.slice(0, 15).map((c) => {
    const [a, b] = c.parentA < c.parentB ? [c.parentA, c.parentB] : [c.parentB, c.parentA];
    return { pair: `${a}-${b}` };
  });
}

interface Props { params: Promise<{ pair: string }>; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pair } = await params;
  const [a, b] = pair.split("-");
  const pa = findPal(seedPals, a);
  const pb = findPal(seedPals, b);
  const child = findCombo(seedCombos, a, b)?.child;
  const childPal = child ? findPal(seedPals, child) : null;
  const title = `${pa?.name || a} + ${pb?.name || b} = ${childPal?.name || "?"}`;
  return {
    title: `${title} — Palworld Combo | PalBreed`,
    description: `Breed ${pa?.name} and ${pb?.name} in Palworld to get ${childPal?.name}. See exact combos, passives, and share this result.`,
  };
}

export default async function ComboPage({ params }: Props) {
  const { pair } = await params;
  const [a, b] = pair.split("-");
  if (!a || !b) return notFound();
  const combo = findCombo(seedCombos, a, b);
  if (!combo) return notFound();
  const pa = findPal(seedPals, combo.parentA);
  const pb = findPal(seedPals, combo.parentB);
  const child = findPal(seedPals, combo.child);
  if (!pa || !pb || !child) return notFound();

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <nav aria-label="Breadcrumb" className="text-muted mb-4" style={{ fontSize: "var(--text-small)" }}>
          <Link href="/">Home</Link> / {" "}
          <Link href="/breeding-calculator/">Calculator</Link> / {" "}
          <span>{pa.name} × {pb.name}</span>
        </nav>

        <h1>{pa.name} × {pb.name} = {child.name}</h1>
        <p style={{ color: "var(--text-secondary)" }}>Breed {pa.name} and {pb.name} in Palworld to get {child.name}.</p>

        <div className="card mt-8">
          <div className="result-card">
            <PalAvatar name={child.name} primaryType={child.types[0]} size={120} />
            <div className="result-meta">
              <h2 style={{ fontSize: "var(--text-h1)" }}>{child.name}</h2>
              <div className="flex gap-2 mt-2">
                {child.types.map((t) => <TypeBadge key={t} type={t} />)}
              </div>
              <div className="grid grid-3 mt-6">
                <div>
                  <div className="data-label">CombiRank</div>
                  <div className="data-value">{child.combiRank}</div>
                </div>
                <div>
                  <div className="data-label">Unique Combo</div>
                  <div className="data-value" style={{ fontSize: "1rem" }}>{combo.override ? "Yes" : "No"}</div>
                </div>
                <div>
                  <div className="data-label">Passives</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{child.passives.join(", ")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-2 mt-8">
          <Link href={`/pal/${pa.id}/`} className="card" style={{ textDecoration: "none" }}>
            <div className="data-label">Parent 1</div>
            <div className="flex items-center gap-3 mt-3">
              <PalAvatar name={pa.name} primaryType={pa.types[0]} size={48} />
              <span style={{ fontWeight: 600 }}>{pa.name}</span>
            </div>
          </Link>
          <Link href={`/pal/${pb.id}/`} className="card" style={{ textDecoration: "none" }}>
            <div className="data-label">Parent 2</div>
            <div className="flex items-center gap-3 mt-3">
              <PalAvatar name={pb.name} primaryType={pb.types[0]} size={48} />
              <span style={{ fontWeight: 600 }}>{pb.name}</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
