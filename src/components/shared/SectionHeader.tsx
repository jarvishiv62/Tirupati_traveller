import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  divider?: boolean;
  className?: string;
  titleClassName?: string;
  light?: boolean; // for dark bg sections
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  divider = true,
  className,
  titleClassName,
  light = false,
}: SectionHeaderProps) {
  const alignClass = {
    left:   'text-left items-start',
    center: 'text-center items-center',
    right:  'text-right items-end',
  }[align];

  return (
    <div className={cn('flex flex-col gap-3 mb-10 md:mb-14', alignClass, className)}>
      <h2
        className={cn(
          'section-title',
          light && 'text-white',
          titleClassName,
        )}
      >
        {title}
      </h2>

      {divider && (
        <div
          className={cn(
            'h-1 w-16 rounded-full',
            align === 'center' && 'mx-auto',
            align === 'right' && 'ml-auto',
            light ? 'bg-gold' : 'bg-primary',
          )}
        />
      )}

      {subtitle && (
        <p
          className={cn(
            'section-sub max-w-2xl',
            light && 'text-white/80',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}