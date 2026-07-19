"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getPals, getCombos, findPal, findCombo, sortedPair } from "@/lib/data";
import { PalAvatar } from "@/components/PalAvatar";
import { TypeBadge } from "@/components/TypeBadge";

function ForwardCalculator() {
  const searchParams = useSearchParams();
  const [pals, setPals] = useState<Awaited<ReturnType<typeof getPals>>>([]);
  const [combos, setCombos] = useState<Awaited<ReturnType<typeof getCombos>>>([]);
  const [a, setA] = useState(searchParams.get("a") || "");
  const [b, setB] = useState(searchParams.get("b") || "");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    getPals().then(setPals);
    getCombos().then(setCombos);
  }, []);

  const result = useMemo(() => {
    if (!a || !b || a === b) return null;
    const combo = findCombo(combos, a, b);
    return combo ? findPal(pals, combo.child) : null;
  }, [a, b, pals]);

  const shareUrl = typeof window !== "undefined" && result ? `${window.location.origin}/combo/${sortedPair(a, b).join("-")}/` : "";

  const copy = async () => {
    if (!shareUrl) return;
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const calculate = () => {
    if (!a || !b) { setError("Select both parents."); return; }
    if (a === b) { setError("Choose two different Pals."); return; }
    setError("");
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <span className="badge badge-secondary mb-4">Forward Breeding</span>
        <h1>Forward Breeding Calculator</h1>
        <p style={{ color: "var(--text-secondary)" }}>Select two parent Pals to see their child, CombiRank, and whether it’s a unique combo.</p>

        <div className="card mt-8">
          <div className="grid grid-2" style={{ gap: "var(--space-4)" }}>
            <div>
              <label className="label" htmlFor="parentA">Parent 1</label>
              <select id="parentA" className="select" value={a} onChange={(e) => { setA(e.target.value); setError(""); }}>
                <option value="">Select a Pal</option>
                {pals.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
            </div>
            <div>
              <label className="label" htmlFor="parentB">Parent 2</label>
              <select id="parentB" className="select" value={b} onChange={(e) => { setB(e.target.value); setError(""); }}>
                <option value="">Select a Pal</option>
                {pals.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
            </div>
          </div>

          <button className="btn btn-primary btn-lg mt-6" style={{ width: "100%" }} onClick={calculate}>Calculate Child</button>
          {error && <p className="text-danger mt-4">{error}</p>}
        </div>

        {result && (
          <div className="card mt-8">
            <h2 className="card-title">Result</h2>
            <div className="result-card">
              <PalAvatar name={result.name} primaryType={result.types[0]} />
              <div className="result-meta">
                <h3 style={{ fontSize: "var(--text-h2)" }}>{result.name}</h3>
                <div className="flex gap-2 mt-2">
                  {result.types.map((t) => <TypeBadge key={t} type={t} />)}
                </div>
                <div className="grid grid-3 mt-4">
                  <div>
                    <div className="data-label">CombiRank</div>
                    <div className="data-value">{result.combiRank}</div>
                  </div>
                  <div>
                    <div className="data-label">Unique Combo</div>
                    <div className="data-value" style={{ fontSize: "1rem" }}>{result.isUnique ? "Yes" : "No"}</div>
                  </div>
                  <div>
                    <div className="data-label">Passives</div>
                    <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{result.passives.join(", ")}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <button className="btn btn-secondary" onClick={copy}>
                {copied ? "Copied!" : "Copy Result URL"}
              </button>
              <Link href={`/pal/${result.id}/`} className="btn btn-ghost">View Pal Details →</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function Calculator() {
  return (
    <Suspense fallback={<div className="section"><div className="container" style={{ maxWidth: 760 }}><p className="text-muted">Loading calculator...</p></div></div>}>
      <ForwardCalculator />
    </Suspense>
  );
}
