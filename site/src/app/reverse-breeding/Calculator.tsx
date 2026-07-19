"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getPals, getCombos, findPal, reverseCombos, sortedPair } from "@/lib/data";
import { PalAvatar } from "@/components/PalAvatar";
import { TypeBadge } from "@/components/TypeBadge";

function ReverseCalculator() {
  const searchParams = useSearchParams();
  const [pals, setPals] = useState<Awaited<ReturnType<typeof getPals>>>([]);
  const [combos, setCombos] = useState<Awaited<ReturnType<typeof getCombos>>>([]);
  const [target, setTarget] = useState(searchParams.get("target") || "");

  useEffect(() => {
    getPals().then(setPals);
    getCombos().then(setCombos);
  }, []);

  const results = useMemo(() => {
    if (!target) return [];
    return reverseCombos(combos, target).map((c) => ({
      ...c,
      parentAObj: findPal(pals, c.parentA)!,
      parentBObj: findPal(pals, c.parentB)!,
    }));
  }, [target, combos, pals]);

  const targetPal = useMemo(() => findPal(pals, target), [target, pals]);

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <span className="badge badge-secondary mb-4">Reverse Breeding</span>
        <h1>Reverse Breeding Calculator</h1>
        <p style={{ color: "var(--text-secondary)" }}>Choose the Pal you want to breed and see every possible parent pair.</p>

        <div className="card mt-8">
          <label className="label" htmlFor="target">Target Pal</label>
          <select id="target" className="select" value={target} onChange={(e) => setTarget(e.target.value)}>
            <option value="">Select a Pal</option>
            {pals.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
        </div>

        {targetPal && (
          <div className="card mt-8">
            <div className="flex items-center gap-4 mb-6">
              <PalAvatar name={targetPal.name} primaryType={targetPal.types[0]} />
              <div>
                <h2 style={{ fontSize: "var(--text-h2)" }}>{targetPal.name}</h2>
                <div className="flex gap-2 mt-2">{targetPal.types.map((t) => <TypeBadge key={t} type={t} />)}</div>
              </div>
            </div>
            <h3 className="card-title">Possible Parent Pairs ({results.length}) — sorted by unique combos first</h3>
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
                  {results.map((r, i) => (
                    <tr key={i}>
                      <td><Link href={`/pal/${r.parentAObj.id}/`}>{r.parentAObj.name}</Link></td>
                      <td><Link href={`/pal/${r.parentBObj.id}/`}>{r.parentBObj.name}</Link></td>
                      <td>{r.override ? <span className="badge badge-primary">Unique</span> : "—"}</td>
                      <td>
                        <Link href={`/combo/${sortedPair(r.parentA, r.parentB).join("-")}/`}>View →</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function Calculator() {
  return (
    <Suspense fallback={<div className="section"><div className="container" style={{ maxWidth: 900 }}><p className="text-muted">Loading calculator...</p></div></div>}>
      <ReverseCalculator />
    </Suspense>
  );
}
