"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Ensures the page scrolls to the top whenever the route changes.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
