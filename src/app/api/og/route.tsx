import { getThemedPageBySlug } from "@/lib/puzzle/themedPages";
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const theme = searchParams.get("theme");
  const title = searchParams.get("title");
  const daily = searchParams.get("daily");

  // Determine content based on params
  let displayTitle = "Free Word Search Puzzles";
  let subtitle = "Play instantly online • No download required";
  let badge = "Free Online Puzzles";

  if (theme) {
    const themeData = getThemedPageBySlug(theme);
    if (themeData) {
      displayTitle = themeData.title;
      subtitle = themeData.description.slice(0, 100) + "...";
      badge = `${themeData.name} Theme`;
    }
  } else if (title) {
    displayTitle = title;
  } else if (daily) {
    displayTitle = "Daily Word Search Puzzle";
    subtitle = "A fresh puzzle every day • Challenge yourself";
    badge = daily;
  }

  // Generate sample grid letters for visual interest
  const gridLetters = [
    ["W", "O", "R", "D", "S"],
    ["E", "A", "R", "C", "H"],
    ["P", "U", "Z", "Z", "L"],
    ["F", "R", "E", "E", "E"],
    ["P", "L", "A", "Y", "!"],
  ];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9f2e8",
          backgroundImage:
            "radial-gradient(ellipse at 20% 30%, rgba(255, 208, 160, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(173, 214, 255, 0.35) 0%, transparent 50%)",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            backgroundColor: "#e36b4f",
            color: "white",
            padding: "8px 24px",
            borderRadius: "20px",
            fontSize: "20px",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          {badge}
        </div>

        {/* Main content container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "60px",
          }}
        >
          {/* Text side */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "600px",
            }}
          >
            <h1
              style={{
                fontSize: "56px",
                fontWeight: 700,
                color: "#1a1613",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              {displayTitle}
            </h1>
            <p
              style={{
                fontSize: "24px",
                color: "#5c554f",
                margin: "16px 0 0",
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Grid visual */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "16px",
              boxShadow: "0 8px 32px rgba(60, 42, 25, 0.15)",
              gap: "8px",
            }}
          >
            {gridLetters.map((row, rowIndex) => (
              <div
                key={rowIndex}
                style={{
                  display: "flex",
                  gap: "8px",
                }}
              >
                {row.map((letter, colIndex) => (
                  <div
                    key={colIndex}
                    style={{
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      fontWeight: 600,
                      color: "#1a1613",
                      backgroundColor:
                        (rowIndex === 0 && colIndex < 4) ||
                        (rowIndex === 1 && colIndex > 0)
                          ? "#fbd6c8"
                          : "#f5f0eb",
                      borderRadius: "8px",
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "32px",
            fontSize: "18px",
            color: "#5c554f",
          }}
        >
          <span>word-search-puzzle.com</span>
          <span style={{ color: "#e36b4f" }}>•</span>
          <span>Free • Online • No Download</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
