"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/breeding-calculator/", label: "Forward Calculator" },
  { href: "/reverse-breeding/", label: "Reverse Calculator" },
  { href: "/best-combos/", label: "Best Combos" },
  { href: "/passive-skills/", label: "Passives" },
  { href: "/about/", label: "About" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav">
        <div className="container flex items-center justify-between" style={{ height: 64 }}>
          <Link href="/" className="flex items-center gap-2" style={{ color: "var(--text-primary)", textDecoration: "none" }}>
            <svg width="32" height="32" aria-hidden="true" viewBox="0 0 32 32">
              <rect x="2" y="2" width="28" height="28" rx="6" fill="#F5A623" />
              <path d="M8 22c2-6 5-10 8-12 3 2 6 6 8 12H8z" fill="#0B0F12" />
              <circle cx="16" cy="14" r="3" fill="#F5A623" />
            </svg>
            <span style={{ fontSize: "1.25rem", fontWeight: 800 }}>PalBreed</span>
          </Link>
          <nav className="desktop-nav" aria-label="Main">
            <ul className="flex items-center gap-2" style={{ listStyle: "none" }}>
              {navLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className="nav-link">{l.label}</Link></li>
              ))}
            </ul>
          </nav>
          <button className="btn btn-ghost mobile-menu-toggle" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <svg width="24" height="24" aria-hidden="true" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>
      <div className="nav-spacer" />
      {open && (
        <div className="mobile-drawer" role="dialog" aria-label="Mobile menu">
          <div className="mobile-drawer-header">
            <span style={{ fontWeight: 800, fontSize: "1.25rem" }}>PalBreed</span>
            <button className="btn btn-ghost" aria-label="Close menu" onClick={() => setOpen(false)}>
              <svg width="24" height="24" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="mobile-drawer-nav" aria-label="Mobile">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
