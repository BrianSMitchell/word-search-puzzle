/**
 * Schema.org Game/WebApplication markup for puzzle pages
 */

import { siteUrl } from "@/lib/site";
import { JsonLd } from "./JsonLd";

type GameSchemaProps = {
  name: string;
  description: string;
  url: string;
  genre?: string;
  audience?: string;
};

export function GameSchema({
  name,
  description,
  url,
  genre = "Puzzle",
  audience,
}: GameSchemaProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: `${siteUrl}${url}`,
    applicationCategory: "GameApplication",
    genre,
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  if (audience) {
    data.audience = {
      "@type": "Audience",
      audienceType: audience,
    };
  }

  return <JsonLd data={data} />;
}
