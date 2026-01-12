"use client";

import { useState } from "react";

export function ShareButton() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setStatus("copied");
      setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  return (
    <button className="button button-outline" type="button" onClick={handleShare}>
      {status === "copied" ? "Link copied" : "Share this puzzle"}
    </button>
  );
}
