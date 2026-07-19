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
  return (
    <html lang="en">
      <head>
        {/* Privacy-friendly analytics by Plausible */}
        <script
          async
          src="https://plausible.shipsolo.io/js/pa-e6cjcAqkNnlMu5UWNNnOU.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init();",
          }}
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
