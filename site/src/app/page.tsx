import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palworld Breeding Calculator — Free & Updated for Feybreak",
  description: "Find any Pal breeding combo in seconds. Forward + reverse calculator, latest Feybreak data, and shareable results. 100% free, no signup.",
  alternates: { canonical: "https://palbreedingcalculator.net/" },
  openGraph: {
    title: "Free Palworld Breeding Calculator",
    description: "Pick two parents, get the child. Or pick a target and find every parent pair. 100% free, updated for Feybreak.",
    url: "https://palbreedingcalculator.net/",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Palworld Breeding Calculator",
  description: "Find any Pal breeding combo in seconds. Forward + reverse calculator, latest Feybreak data, and shareable results.",
  url: "https://palbreedingcalculator.net/",
  applicationCategory: "GameApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero">
        <div className="hero-inner">
          <span className="badge badge-secondary mb-4">Updated for Palworld Feybreak (v1.x)</span>
          <h1>Free Palworld Breeding Calculator</h1>
          <p>Pick two parents and get the exact child. Or pick a target Pal and find every parent pair that breeds it. No spreadsheets, no signups, no ads in the way.</p>
          <div className="flex justify-center gap-3" style={{ flexWrap: "wrap" }}>
            <Link href="/breeding-calculator/" className="btn btn-primary btn-lg">
              Start Breeding
              <svg width="20" height="20" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Link>
            <Link href="/reverse-breeding/" className="btn btn-secondary btn-lg">Reverse Lookup</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Find Your Pal in 3 Steps</h2>
          <div className="grid grid-3">
            {[
              { n: "01", title: "Pick Your Direction", body: "Forward: choose two parents. Reverse: choose the Pal you want." },
              { n: "02", title: "Get the Result", body: "We calculate the child, CombiRank, and any unique combo overrides." },
              { n: "03", title: "Share the Link", body: "Copy a /combo/ result URL to Discord, Reddit, or your guild chat." },
            ].map((s) => (
              <article className="card" key={s.n}>
                <div className="data-value" style={{ fontSize: "1.25rem", color: "var(--accent-primary)", marginBottom: "var(--space-3)" }}>{s.n}</div>
                <h3 className="card-title">{s.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-small)" }}>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="container">
          <h2 className="section-title">Built for Every Kind of Breeder</h2>
          <div className="grid grid-3">
            {[
              { title: "Hardcore Min-Maxers", body: "Before: You juggle spreadsheets to figure out the shortest path to a perfect Pal. After: Our reverse calculator shows every parent pair; path finder gives you the fewest steps." },
              { title: "Casual Players", body: "Before: You just unlocked the Breeding Farm and have no idea what two Pals make. After: Pick any two Pals and see the child instantly." },
              { title: "Content Creators", body: "Before: You type out long explanations in Reddit or Discord. After: Drop a shareable result link with all the details baked in." },
            ].map((s) => (
              <article className="card" key={s.title}>
                <h3 className="card-title">{s.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-small)" }}>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why This Calculator Works</h2>
          <div className="grid grid-4">
            {[
              { icon: "share", color: "var(--accent-primary)", title: "Forward + Reverse", body: "Calculate child from parents, or parents from a target child. One tool, both directions." },
              { icon: "mobile", color: "var(--accent-secondary)", title: "Mobile-First Design", body: "Responsive layout, fast load, big tap targets. Check combos beside your game." },
              { icon: "copy", color: "var(--accent-primary)", title: "Shareable Results", body: "Every result gets a unique /combo/ URL. Paste to Discord, Reddit, or your server." },
              { icon: "check", color: "var(--accent-secondary)", title: "Latest Game Data", body: "Updated after Feybreak and major patches. No stale combos or missing Pals." },
            ].map((s) => (
              <article className="card" key={s.title}>
                <div style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", background: `${s.color}26`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, marginBottom: "var(--space-3)" }}>
                  <svg width="20" height="20" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {s.icon === "share" && <path d="M18 8a3 3 0 1 0-2.2-1L8.8 10.5a3 3 0 1 0 0 3l6.9 3.5a3 3 0 1 0 1-2.1L10 12.5l5.8-3.5z" fill="currentColor" stroke="none" />}
                    {s.icon === "mobile" && <><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18" /></>}
                    {s.icon === "copy" && <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M4 16V6a2 2 0 0 1 2-2h10" /></>}
                    {s.icon === "check" && <path d="M4 12l6 6 10-14" />}
                  </svg>
                </div>
                <h3 className="card-title" style={{ fontSize: "var(--text-body)" }}>{s.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-small)" }}>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-page) 100%)", borderTop: "1px solid var(--border-subtle)" }}>
        <div className="container text-center" style={{ maxWidth: 640 }}>
          <h2 className="section-title">100% Free. No Signup. No Paywall.</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "var(--space-8)" }}>Every core tool is free: forward calculator, reverse calculator, and all shareable results. We may recommend trusted Palworld server hosts or game partners to help cover costs — never by locking features behind a paywall.</p>
          <Link href="/breeding-calculator/" className="btn btn-primary btn-lg">Try the Calculator</Link>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {[
              { q: "Is this calculator free?", a: "Yes. Forward and reverse breeding calculations are completely free, with no signup required." },
              { q: "How accurate is the data?", a: "We base results on community-verified CombiRank and unique combo data, updated after each major Palworld patch. If you spot an error, use the feedback link." },
              { q: "What’s the difference between Forward and Reverse breeding?", a: "Forward: pick two parents → see the child. Reverse: pick a target child → see all possible parent pairs." },
              { q: "Can I share a result with friends?", a: "Yes. Every combo result gets a shareable URL like /combo/parent-a-parent-b." },
              { q: "Do you use official Palworld art or assets?", a: "No. We avoid official game assets to respect Pocketpair’s copyright and trademarks." },
              { q: "When will the Path Finder / passive skill planner be available?", a: "Multi-generation path planning and passive skill filtering are on our P1 roadmap." },
            ].map((f, i) => (
              <div className="faq-item" key={i}>
                <div className="faq-answer" style={{ color: "var(--text-secondary)" }}><strong>Q: {f.q}</strong><br />A: {f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border-subtle)" }}>
        <div className="container text-center" style={{ maxWidth: 640 }}>
          <h2 className="section-title">Stop Guessing. Start Breeding.</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "var(--space-8)" }}>Get the exact Pal combo you need in seconds.</p>
          <Link href="/breeding-calculator/" className="btn btn-primary btn-lg">Open Free Calculator</Link>
        </div>
      </section>
    </>
  );
}
