'use client';
// src/components/shared/FAQAccordion.tsx
// Interactive FAQ accordion — used across CabServiceTemplate, VehicleTemplate,
// and CityLandingTemplate (which implements its own inline version).
//
// Kept as a separate 'use client' file so any Server Component template
// can import it without marking the whole template as a client component.
//
// Previously: src/components/templates/VehicleTemplate.faq.tsx
// → Promoted to shared/ because CabServiceTemplate needs it too.
//   The old file at VehicleTemplate.faq.tsx can now be deleted.

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── TYPES ────────────────────────────────────────────────────────────────────

export type FAQItem = { q: string; a: string };

interface FAQAccordionProps {
  faqs:          FAQItem[];
  openFirst?:    boolean;   // open the first item by default (default: true)
  className?:    string;
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function FAQAccordion({
  faqs,
  openFirst = true,
  className,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(openFirst ? 0 : null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className={cn('space-y-3', className)}>
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={cn(
              'rounded-2xl border transition-all duration-300 overflow-hidden',
              isOpen
                ? 'border-primary/30 shadow-card bg-white'
                : 'border-border-warm bg-cream hover:border-primary/20',
            )}
          >
            {/* Question trigger */}
            <button
              type="button"
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
            >
              <span
                className={cn(
                  'font-semibold text-sm md:text-base leading-snug transition-colors duration-200',
                  isOpen ? 'text-primary' : 'text-secondary',
                )}
              >
                {faq.q}
              </span>
              <ChevronDown
                size={18}
                aria-hidden="true"
                className={cn(
                  'flex-shrink-0 text-primary transition-transform duration-300',
                  isOpen && 'rotate-180',
                )}
              />
            </button>

            {/* Answer panel */}
            <div
              id={`faq-panel-${i}`}
              role="region"
              className={cn(
                'transition-all duration-300 overflow-hidden',
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
              )}
            >
              <div className="px-5 pb-5">
                <div className="w-12 h-px bg-primary/30 mb-3" aria-hidden="true" />
                <p className="text-text-secondary text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}