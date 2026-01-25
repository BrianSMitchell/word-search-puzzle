/**
 * Schema.org BreadcrumbList markup
 */

import { siteUrl } from "@/lib/site";
import { JsonLd } from "./JsonLd";

export type BreadcrumbItem = {
  name: string;
  url: string;
};

type BreadcrumbSchemaProps = {
  items: BreadcrumbItem[];
};

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };

  return <JsonLd data={data} />;
}
