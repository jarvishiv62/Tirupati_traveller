// src/components/shared/InternalLinks.tsx
// SEO cross-links grid — reads internalLinks.ts
// Server Component

import Link from 'next/link';
import { getInternalLinks } from '@/lib/internalLinks';
import type { TemplateName } from '@/data/allRoutes';

interface InternalLinksProps {
  template: TemplateName;
  data: Record<string, unknown>;
  title?: string;
  className?: string;
}

export default function InternalLinks({
  template,
  data,
  title = 'Related Services',
  className = '',
}: InternalLinksProps) {
  const links = getInternalLinks(template, data);

  if (!links.length) return null;

  return (
    <section className={`bg-section-cream section-pad-sm ${className}`}>
      <div className="container-site">
        <h2 className="section-title text-center mb-2">{title}</h2>
        <div className="divider-gold mb-8" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="internal-link-card text-center"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}