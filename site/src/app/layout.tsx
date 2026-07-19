import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Palworld Breeding Calculator",
  description: "Free Palworld breeding calculator with forward + reverse lookup and shareable results. Updated for Feybreak.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "palbreedingcalculator.net";
  const plausibleScript = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT || "/js/script.js";
  const plausibleApi = process.env.NEXT_PUBLIC_PLAUSIBLE_API || "/api/event";

  return (
    <html lang="en">
      <head>
        <script
          defer
          data-domain={plausibleDomain}
          data-api={plausibleApi}
          src={plausibleScript}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
