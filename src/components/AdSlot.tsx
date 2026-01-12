"use client";

import { useEffect } from "react";

type AdSlotProps = {
  slot: string;
  className?: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdSlot({ slot, className, format = "auto" }: AdSlotProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  useEffect(() => {
    if (!client) {
      return;
    }
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ignore ad blockers or double-initialization.
    }
  }, [client, slot]);

  if (!client || !slot) {
    return null;
  }

  return (
    <ins
      className={`adsbygoogle ad-slot ${className ?? ""}`}
      style={{ display: "block" }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
      aria-label="Advertisement"
    />
  );
}
