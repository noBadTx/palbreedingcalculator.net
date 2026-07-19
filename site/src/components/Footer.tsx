import Link from "next/link";

const footerLinks = [
  { href: "/about/", label: "About" },
  { href: "/privacy/", label: "Privacy" },
  { href: "/terms/", label: "Terms" },
  { href: "/cookie-policy/", label: "Cookies" },
  { href: "/sitemap/", label: "Sitemap" },
  { href: "mailto:feedback@palbreedingcalculator.net", label: "Feedback" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="flex justify-between" style={{ flexWrap: "wrap", gap: "var(--space-6)" }}>
          <div className="flex items-center gap-2">
            <svg width="28" height="28" aria-hidden="true" viewBox="0 0 32 32">
              <rect x="2" y="2" width="28" height="28" rx="6" fill="#F5A623" />
              <path d="M8 22c2-6 5-10 8-12 3 2 6 6 8 12H8z" fill="#0B0F12" />
              <circle cx="16" cy="14" r="3" fill="#F5A623" />
            </svg>
            <span style={{ fontWeight: 700 }}>PalBreed</span>
          </div>
          <nav aria-label="Footer">
            <ul className="flex items-center gap-4" style={{ listStyle: "none", flexWrap: "wrap" }}>
              {footerLinks.map((l) => (
                <li key={l.href}><Link href={l.href} style={{ color: "var(--text-muted)", fontSize: "var(--text-small)" }}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "var(--text-xs)", marginTop: "var(--space-6)" }}>
          Palworld is a trademark of Pocketpair, Inc. This fan-made tool is not affiliated with or endorsed by Pocketpair.
        </p>
      </div>
    </footer>
  );
}
