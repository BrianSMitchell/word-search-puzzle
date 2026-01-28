import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Word Search Puzzle. Learn how we handle your data.",
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="reveal">
          <h1>Privacy Policy</h1>
          <p>Last updated: January 2025</p>
        </div>
      </section>

      <div className="prose">
        <h2>Overview</h2>
        <p>
          Word Search Puzzle (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates{" "}
          <strong>word-search-puzzle.com</strong>. This page explains what data we collect
          and how we use it. The short version: we collect minimal data, we don&apos;t
          have user accounts, and we never sell your information.
        </p>

        <h2>What We Collect</h2>
        <p>
          We do <strong>not</strong> require sign-ups, logins, or personal
          information to use our site. You can play puzzles completely
          anonymously.
        </p>
        <p>We use the following third-party services for analytics:</p>
        <ul>
          <li>
            <strong>Google Analytics</strong> (measurement ID: G-HE91HS046F) —
            collects anonymized usage data such as pages visited, time on site,
            device type, and approximate location. Google Analytics uses cookies.
            See{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong>Vercel Analytics &amp; Speed Insights</strong> — collects
            anonymized performance and usage metrics. No cookies are used. See{" "}
            <a
              href="https://vercel.com/docs/analytics/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel&apos;s Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong>Supabase Analytics</strong> — collects anonymized event data
            to help us understand how puzzles are played. No personally
            identifiable information is stored.
          </li>
        </ul>

        <h2>Cookies</h2>
        <p>
          Google Analytics sets cookies to distinguish users and sessions. These
          are standard analytics cookies and do not contain personal information.
          You can opt out by using your browser&apos;s cookie settings or
          installing the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our puzzles are designed for all ages. We do not knowingly collect
          personal information from children. No account or personal data is
          required to use the site.
        </p>

        <h2>Data Retention</h2>
        <p>
          We do not store any personal data. Analytics data is retained by the
          respective third-party providers according to their own policies.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Changes will be posted on
          this page with an updated date.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Reach out via our website at{" "}
          <a href="https://word-search-puzzle.com">word-search-puzzle.com</a>.
        </p>
      </div>
    </div>
  );
}
