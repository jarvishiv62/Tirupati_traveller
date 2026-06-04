import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
  light?: boolean; // for dark backgrounds
}

/**
 * Generates breadcrumb items from a pathname string.
 * e.g. '/varanasi/varanasi-to-ayodhya-taxi'
 *   → [{ label: 'Home', href: '/' }, { label: 'Varanasi', href: '/varanasi' }, { label: 'Varanasi To Ayodhya Taxi' }]
 */
export function buildBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  const segments = pathname.replace(/^\//, '').split('/').filter(Boolean);
  const items: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

  segments.forEach((segment, idx) => {
    const href = '/' + segments.slice(0, idx + 1).join('/');
    const label = segment
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    const isLast = idx === segments.length - 1;
    items.push({ label, href: isLast ? undefined : href });
  });

  return items;
}

export default function Breadcrumb({ items = [], className, light = false }: BreadcrumbProps) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center flex-wrap gap-1 text-sm', className)}
    >
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        const isFirst = idx === 0;

        return (
          <span key={idx} className="flex items-center gap-1">
            {/* Separator */}
            {idx > 0 && (
              <ChevronRight
                size={14}
                className={cn(
                  'flex-shrink-0',
                  light ? 'text-white/50' : 'text-text-light',
                )}
              />
            )}

            {/* Item */}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className={cn(
                  'hover:underline underline-offset-2 transition-colors flex items-center gap-1',
                  light
                    ? 'text-white/70 hover:text-white'
                    : 'text-text-secondary hover:text-primary',
                )}
              >
                {isFirst && <Home size={13} />}
                {isFirst ? <span className="sr-only">Home</span> : item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  'font-medium',
                  light ? 'text-white' : 'text-text-primary',
                )}
                aria-current={isLast ? 'page' : undefined}
              >
                {isFirst && <Home size={13} className="inline mr-1 -mt-0.5" />}
                {isFirst ? '' : item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}