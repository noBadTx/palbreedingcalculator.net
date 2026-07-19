import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { seedPals, seedCombos } from "@/lib/seed";
import { findPal, reverseCombos } from "@/lib/data";
import { PalAvatar } from "@/components/PalAvatar";
import { TypeBadge } from "@/components/TypeBadge";

export function generateStaticParams() {
  return seedPals.map((p) => ({ slug: p.id }));
}

interface Props { params: Promise<{ slug: string }>; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pal = findPal(seedPals, slug);
  return {
    title: `${pal?.name || slug} — Palworld Breeding Guide | PalBreed`,
    description: `Find the best parents to breed ${pal?.name} in Palworld. Updated for Feybreak with combos, passives, and shareable results.`,
  };
}

export default async function PalPage({ params }: Props) {
  const { slug } = await params;
  const pal = findPal(seedPals, slug);
  if (!pal) return notFound();

  const combos = reverseCombos(seedCombos, slug).slice(0, 10);

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <nav aria-label="Breadcrumb" className="text-muted mb-4" style={{ fontSize: "var(--text-small)" }}>
          <Link href="/">Home</Link> / <span>{pal.name}</span>
        </nav>

        <div className="flex items-center gap-6 mb-8">
          <PalAvatar name={pal.name} primaryType={pal.types[0]} size={120} />
          <div>
            <h1>{pal.name}</h1>
            <div className="flex gap-2 mt-2">
              {pal.types.map((t) => <TypeBadge key={t} type={t} />)}
            </div>
          </div>
        </div>

        <div className="grid grid-3 mb-8">
          <div className="card">
            <div className="data-label">CombiRank</div>
            <div className="data-value">{pal.combiRank}</div>
          </div>
          <div className="card">
            <div className="data-label">Unique Combo</div>
            <div className="data-value" style={{ fontSize: "1rem" }}>{pal.isUnique ? "Yes" : "No"}</div>
          </div>
          <div className="card">
            <div className="data-label">Passives</div>
            <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{pal.passives.join(", ")}</div>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="card-title">Work Suitability</h2>
          <div className="grid grid-4">
            {Object.entries(pal.workSuitability).map(([k, v]) => (
              <div key={k}>
                <div className="data-label">{k}</div>
                <div className="data-value" style={{ fontSize: "1.25rem" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Best Parent Pairs for {pal.name}</h2>
          {combos.length === 0 ? (
            <p className="text-muted">No known parent pairs in the current seed dataset.</p>
          ) : (
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Parent 1</th>
                    <th>Parent 2</th>
                    <th>Override</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {combos.map((c, i) => {
                    const pa = findPal(seedPals, c.parentA)!;
                    const pb = findPal(seedPals, c.parentB)!;
                    return (
                      <tr key={i}>
                        <td><Link href={`/pal/${pa.id}/`}>{pa.name}</Link></td>
                        <td><Link href={`/pal/${pb.id}/`}>{pb.name}</Link></td>
                        <td>{c.override ? <span className="badge badge-primary">Unique</span> : "—"}</td>
                        <td>
                          <Link href={`/combo/${c.parentA < c.parentB ? `${c.parentA}-${c.parentB}` : `${c.parentB}-${c.parentA}`}/`}>View →</Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
