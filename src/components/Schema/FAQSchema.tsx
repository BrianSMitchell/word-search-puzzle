/**
 * Schema.org FAQPage markup
 */

import { JsonLd } from "./JsonLd";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQSchemaProps = {
  items: FAQItem[];
};

export function FAQSchema({ items }: FAQSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}
