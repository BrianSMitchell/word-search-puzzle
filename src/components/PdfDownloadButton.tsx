"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";
import type { Puzzle } from "@/lib/puzzle/types";

type PdfDownloadButtonProps = {
  puzzle: Puzzle;
  title: string;
  fileName?: string;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function PdfDownloadButton({ puzzle, title, fileName }: PdfDownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = () => {
    setIsGenerating(true);
    try {
      const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "letter" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 48;
      const titleY = 40;

      pdf.setFontSize(18);
      pdf.text(title, margin, titleY);

      const gridTop = 70;
      const availableWidth = pageWidth - margin * 2;
      const availableHeight = pageHeight - gridTop - margin - 140;
      const gridSize = Math.min(availableWidth, availableHeight);
      const cellSize = gridSize / puzzle.size;

      pdf.setLineWidth(0.5);
      pdf.setDrawColor(0);
      pdf.setFontSize(Math.min(14, Math.max(8, cellSize * 0.45)));

      for (let row = 0; row < puzzle.size; row += 1) {
        for (let col = 0; col < puzzle.size; col += 1) {
          const x = margin + col * cellSize;
          const y = gridTop + row * cellSize;
          pdf.rect(x, y, cellSize, cellSize);
          pdf.text(puzzle.grid[row][col], x + cellSize / 2, y + cellSize * 0.7, {
            align: "center",
          });
        }
      }

      const wordsTop = gridTop + gridSize + 28;
      pdf.setFontSize(12);
      pdf.text("Words to find", margin, wordsTop);

      const columns = 3;
      const colWidth = (pageWidth - margin * 2) / columns;
      const rowHeight = 16;
      pdf.setFontSize(11);

      puzzle.words.forEach((word, index) => {
        const col = index % columns;
        const row = Math.floor(index / columns);
        const x = margin + col * colWidth;
        const y = wordsTop + 18 + row * rowHeight;
        pdf.text(word, x, y);
      });

      const downloadName = fileName ?? `${slugify(title)}.pdf`;
      pdf.save(downloadName);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      className="button button-outline"
      type="button"
      onClick={handleDownload}
      disabled={isGenerating}
    >
      {isGenerating ? "Preparing PDF..." : "Download PDF"}
    </button>
  );
}
