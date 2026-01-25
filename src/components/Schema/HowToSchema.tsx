/**
 * Schema.org HowTo markup for generator and instructional pages
 */

import { siteUrl } from "@/lib/site";
import { JsonLd } from "./JsonLd";

export type HowToStep = {
  name: string;
  text: string;
  image?: string;
};

type HowToSchemaProps = {
  name: string;
  description: string;
  url: string;
  totalTime?: string; // ISO 8601 duration, e.g., "PT5M"
  steps: HowToStep[];
};

export function HowToSchema({
  name,
  description,
  url,
  totalTime = "PT5M",
  steps,
}: HowToSchemaProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url: `${siteUrl}${url}`,
    totalTime,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
  };

  return <JsonLd data={data} />;
}
