import { AdSenseScript } from "@/components/AdSenseScript";
import { GoogleAnalytics } from "@/components/Analytics";
import { SupabaseAnalytics } from "@/components/Analytics/SupabaseAnalytics";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteUrl } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Word Search Puzzle",
    template: "%s | Word Search Puzzle",
  },
  description:
    "Free word search puzzles online. Play instantly with no download. Daily puzzles, printable layouts, and a fast word search generator.",
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="site-main">
          <div className="container">
            {children}
          </div>
        </main>
        <SiteFooter />
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <SupabaseAnalytics />
        </Suspense>
        <Analytics />
        <SpeedInsights />
        <AdSenseScript />
      </body>
    </html>
  );
}
