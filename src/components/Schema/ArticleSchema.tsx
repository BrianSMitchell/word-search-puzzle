/**
 * Schema.org Article markup for blog posts
 */

import { siteUrl, siteName } from "@/lib/site";
import { JsonLd } from "./JsonLd";

type ArticleSchemaProps = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  tags?: string[];
};

export function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  author,
  tags = [],
}: ArticleSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${siteUrl}/blog/${slug}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${slug}`,
    },
    keywords: tags.join(", "),
  };

  return <JsonLd data={data} />;
}
