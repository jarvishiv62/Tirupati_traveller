import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

type BadgeVariant = 'primary' | 'accent' | 'gold' | 'success' | 'secondary';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary:   'bg-primary text-white',
  accent:    'bg-accent text-secondary',
  gold:      'bg-gold text-secondary font-semibold',
  success:   'bg-success text-white',
  secondary: 'bg-secondary text-white',
};

export default function Badge({
  variant = 'primary',
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}