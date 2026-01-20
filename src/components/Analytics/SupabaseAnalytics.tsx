"use client";

import { logPageView } from "@/app/actions/analytics";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export function SupabaseAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPathRef = useRef<string | null>(null);

  useEffect(() => {
    // Construct full path with query params if needed, or just pathname
    // Standard analytics usually separate query params or just take pathname.
    // Let's stick to pathname + query string for full context if desired, 
    // but typically just pathname is cleaner for aggregation.
    // The requirement didn't specify, but let's send pathname.
    // If search params are important (e.g. tracking ads), we can append them.
    
    const fullPath = searchParams.size > 0 
      ? `${pathname}?${searchParams.toString()}`
      : pathname;

    // Simple deduping: don't log if we just logged this path
    if (lastPathRef.current === fullPath) return;

    lastPathRef.current = fullPath;

    // Execute server action
    logPageView({
      page: fullPath,
      referrer: document.referrer,
    });
  }, [pathname, searchParams]);

  return null;
}
