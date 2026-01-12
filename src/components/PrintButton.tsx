"use client";

type PrintButtonProps = {
  label?: string;
  className?: string;
};

export function PrintButton({ label = "Print puzzle", className }: PrintButtonProps) {
  return (
    <button className={className ?? "button button-solid"} type="button" onClick={() => window.print()}>
      {label}
    </button>
  );
}
