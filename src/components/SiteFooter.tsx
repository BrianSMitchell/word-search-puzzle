import Link from "next/link";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div>
            <div className={styles.logo}>Word Search Puzzle</div>
            <p className={styles.tagline}>
              Free, fast, and made for daily play. No download required.
            </p>
          </div>
          <nav className={styles.nav} aria-label="Footer">
            <Link href="/">Play Free Word Search</Link>
            <Link href="/daily-word-search">Daily Puzzle</Link>
            <Link href="/word-search-generator">Make Your Own</Link>
            <Link href="/printable-word-search">Printable Puzzles</Link>
          </nav>
        </div>
        <p className={styles.meta}>
          Built for puzzle fans, teachers, and quick brain breaks.
        </p>
      </div>
    </footer>
  );
}
