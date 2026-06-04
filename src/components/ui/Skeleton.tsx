import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'card' | 'circle' | 'rect';
  lines?: number;
}

function SkeletonBase({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'animate-pulse bg-gradient-to-r from-cream-dark via-cream to-cream-dark bg-[length:400%_100%] rounded',
        className,
      )}
    />
  );
}

export default function Skeleton({ className, variant = 'rect', lines = 3 }: SkeletonProps) {
  if (variant === 'text') {
    return (
      <div className={cn('space-y-2', className)}>
        {Array.from({ length: lines }).map((_, i) => (
          <SkeletonBase
            key={i}
            className={cn('h-4 rounded', i === lines - 1 ? 'w-3/4' : 'w-full')}
          />
        ))}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={cn('rounded-2xl overflow-hidden shadow-card bg-white', className)}>
        <SkeletonBase className="h-48 w-full rounded-none" />
        <div className="p-4 space-y-3">
          <SkeletonBase className="h-5 w-3/4" />
          <SkeletonBase className="h-4 w-full" />
          <SkeletonBase className="h-4 w-2/3" />
          <SkeletonBase className="h-9 w-1/2 rounded-full mt-2" />
        </div>
      </div>
    );
  }

  if (variant === 'circle') {
    return <SkeletonBase className={cn('rounded-full', className)} />;
  }

  return <SkeletonBase className={className} />;
}

export function SkeletonGrid({ count = 3, className }: { count?: number; className?: string }) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6',
        className,
      )}
    >
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} variant="card" />
      ))}
    </div>
  );
}