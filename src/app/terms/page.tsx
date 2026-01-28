import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Word Search Puzzle. Rules for using our free online word search puzzle site.",
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="reveal">
          <h1>Terms of Service</h1>
          <p>Last updated: January 2025</p>
        </div>
      </section>

      <div className="prose">
        <h2>Agreement</h2>
        <p>
          By using Word Search Puzzle at <strong>word-search-puzzle.com</strong>{" "}
          (&quot;the Site&quot;), you agree to these terms. If you don&apos;t agree,
          please don&apos;t use the Site.
        </p>

        <h2>What We Offer</h2>
        <p>
          Word Search Puzzle is a free online word search game. We provide
          puzzles for entertainment and educational purposes. No account or
          payment is required.
        </p>

        <h2>Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Attempt to disrupt or overload the Site</li>
          <li>Scrape content in bulk or use automated bots</li>
          <li>Use the Site for any unlawful purpose</li>
          <li>Reproduce our content for commercial use without permission</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          The Site&apos;s design, code, and original content are owned by Word
          Search Puzzle. Puzzles generated for personal or classroom use may be
          printed and shared freely. Commercial redistribution requires written
          permission.
        </p>

        <h2>User-Generated Puzzles</h2>
        <p>
          If you create a custom puzzle using our generator, you retain ownership
          of the word list you provide. We do not claim rights over
          user-generated content. We may store generated puzzles temporarily for
          performance purposes.
        </p>

        <h2>Disclaimer</h2>
        <p>
          The Site is provided &quot;as is&quot; without warranties of any kind. We do
          our best to keep everything running smoothly, but we don&apos;t guarantee
          uninterrupted service or error-free content.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Word Search Puzzle is a free service. To the fullest extent permitted
          by law, we are not liable for any damages arising from your use of the
          Site.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We use third-party services (Google Analytics, Google AdSense, Vercel,
          Supabase) that have their own terms. By using our Site, you also agree
          to their respective terms where applicable.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms at any time. Continued use of the Site after
          changes constitutes acceptance of the new terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Visit us at{" "}
          <a href="https://word-search-puzzle.com">word-search-puzzle.com</a>.
        </p>
      </div>
    </div>
  );
}
