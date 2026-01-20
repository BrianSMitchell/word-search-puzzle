"use client";

import { usePlayerStats } from "@/hooks/usePlayerStats";

type PrintButtonProps = {
  label?: string;
  className?: string;
};

export function PrintButton({ label = "Print puzzle", className }: PrintButtonProps) {
  const { incrementPrinted } = usePlayerStats();

  const handlePrint = () => {
    incrementPrinted();
    // Small timeout to allow state update to persist before print dialog blocks thread
    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <button className={className ?? "button button-solid"} type="button" onClick={handlePrint}>
      {label}
    </button>
  );
}
