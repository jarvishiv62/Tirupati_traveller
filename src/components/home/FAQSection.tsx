'use client';

import Accordion, { type AccordionItem } from '@/components/ui/Accordion';
import SectionHeader from '@/components/shared/SectionHeader';
import { faqs } from '@/data/faqs';
import Link from 'next/link';

export default function FAQSection() {
  const accordionItems: AccordionItem[] = faqs.map((faq) => ({
    id: faq.id,
    question: faq.question,
    answer: faq.answer,
  }));

  // FAQPage JSON-LD schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-section-white section-pad">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-site">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about booking your journey with Tirupati Travel"
        />

        <div className="max-w-3xl mx-auto">
          <Accordion items={accordionItems} allowMultiple={false} />
        </div>

        <p className="text-center text-text-secondary text-sm mt-8">
          Still have questions?{' '}
          <a href="tel:8726124680" className="text-primary font-medium hover:underline">
            Call us at 87261 24680
          </a>{' '}
          or{' '}
          <link href="/contact-us" className="text-primary font-medium hover:underline">
            send us a message
          </link>
          .
        </p>
      </div>
    </section>
  );
}