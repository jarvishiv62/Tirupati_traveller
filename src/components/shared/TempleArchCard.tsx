// src/components/shared/TempleArchCard.tsx
// Temple arch-shaped card — Server Component
// Use for: City cards, Vehicle cards, Package cards, Place cards, Tour cards
// Do NOT use for: Pricing tables, Spec cards, Legal content, Form containers

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface TempleArchCardProps {
  image?: string;
  imageAlt?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: 'primary' | 'gold' | 'success' | 'secondary';
  footer?: React.ReactNode;
  imageHeight?: number;
  compact?: boolean;
  priority?: boolean;
  className?: string;
  href?: string;
  children?: React.ReactNode;
}

const BADGE_CLASSES: Record<string, string> = {
  primary: 'badge-primary',
  gold: 'badge-gold',
  success: 'badge-success',
  secondary: 'badge-secondary',
};

export default function TempleArchCard({
  image,
  imageAlt = '',
  title,
  subtitle,
  badge,
  badgeColor = 'gold',
  footer,
  imageHeight = 200,
  compact = false,
  priority = false,
  className = '',
  href,
  children,
}: TempleArchCardProps) {
  const CardWrapper = href ? Link : 'div';

  return (
    <CardWrapper
      href={href as string}
      className={cn(
        'card-warm group block overflow-hidden transition-all duration-200',
        href && 'cursor-pointer hover:-translate-y-1',
        className
      )}
    >
      {/* Arch image */}
      {image && (
        <div
          className="relative overflow-hidden w-full arch-frame"
          style={{ height: imageHeight }}
        >
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Badge on image */}
          {badge && (
            <div className="absolute top-3 right-3">
              <span className={BADGE_CLASSES[badgeColor]}>{badge}</span>
            </div>
          )}
        </div>
      )}

      {/* Card body */}
      <div className={cn('p-4', compact && 'p-3')}>
        {/* Badge (when no image) */}
        {badge && !image && (
          <div className="mb-2">
            <span className={BADGE_CLASSES[badgeColor]}>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h3
          className={cn(
            'font-serif font-semibold text-secondary leading-snug',
            compact ? 'text-sm' : 'text-base md:text-lg'
          )}
        >
          {title}
        </h3>

        {/* Subtitle */}
        {subtitle && (
          <p className={cn('text-text-secondary mt-1', compact ? 'text-xs' : 'text-sm')}>
            {subtitle}
          </p>
        )}

        {/* Children slot */}
        {children && <div className="mt-3">{children}</div>}

        {/* Footer */}
        {footer && (
          <div className="mt-4 pt-3 border-t border-border-warm">{footer}</div>
        )}
      </div>
    </CardWrapper>
  );
}