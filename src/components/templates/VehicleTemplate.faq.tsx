'use client';
// src/components/templates/VehicleTemplate.faq.tsx
// ★ Isolated 'use client' FAQ accordion
// Kept separate so VehicleTemplate.tsx stays a Server Component.
// Imported only inside the FAQ section of VehicleTemplate.tsx.

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQ = { q: string; a: string };

type Props = {
    faqs: FAQ[];
};

export default function FAQAccordion({ faqs }: Props) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div className="space-y-3">
            {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                    <div
                        key={i}
                        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                                ? 'border-primary/30 shadow-card bg-white'
                                : 'border-border-warm bg-cream hover:border-primary/20'
                            }`}
                    >
                        {/* Question row */}
                        <button
                            type="button"
                            onClick={() => toggle(i)}
                            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                            aria-expanded={isOpen}
                        >
                            <span
                                className={`font-semibold text-sm md:text-base leading-snug transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-secondary'
                                    }`}
                            >
                                {faq.q}
                            </span>
                            <ChevronDown
                                size={18}
                                className={`flex-shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>

                        {/* Answer panel */}
                        <div
                            className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="px-5 pb-5">
                                {/* Divider */}
                                <div className="w-12 h-px bg-primary/30 mb-3" />
                                <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
