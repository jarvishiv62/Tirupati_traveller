'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

interface AccordionSingleProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

function AccordionSingle({ question, answer, isOpen, onToggle, className }: AccordionSingleProps) {
  return (
    <div className={cn('border border-border-warm rounded-xl overflow-hidden bg-white', className)}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-cream transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-sans font-medium text-text-primary pr-4 text-base leading-snug">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={cn(
            'flex-shrink-0 text-primary transition-transform duration-300',
            isOpen && 'rotate-180',
          )}
        />
      </button>

      {/* max-height transition for smooth open/close */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="px-5 pb-5 pt-1 text-text-secondary leading-relaxed text-sm border-t border-border-warm">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item) => (
        <AccordionSingle
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openIds.has(item.id)}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}

export type { AccordionItem };