"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
    if (consent === "analytics") loadGA4();
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "analytics");
    setVisible(false);
    loadGA4();
  };

  const essential = () => {
    localStorage.setItem("cookieConsent", "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <span>
        We use essential cookies and optional analytics. Analytics only loads if you accept.{" "}
        <Link href="/cookie-policy/" style={{ color: "var(--accent-secondary)" }}>Learn more</Link>
      </span>
      <div className="flex gap-2">
        <button className="btn btn-primary btn-sm" onClick={accept}>Accept Analytics</button>
        <button className="btn btn-secondary btn-sm" onClick={essential}>Essential Only</button>
      </div>
    </div>
  );
}

function loadGA4() {
  if (typeof window === "undefined") return;
  const id = process.env.NEXT_PUBLIC_GA4_ID;
  if (!id) return;
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  script.async = true;
  document.head.appendChild(script);
  const inline = document.createElement("script");
  inline.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);} gtag('js',new Date()); gtag('config','${id}');`;
  document.head.appendChild(inline);
}
