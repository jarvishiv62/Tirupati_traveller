import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  href?: string;
  className?: string;
  imageHeight?: number;
  priority?: boolean;
  overlay?: 'light' | 'dark' | 'gradient';
}

export default function ImageCard({
  src,
  alt,
  title,
  subtitle,
  badge,
  href,
  className,
  imageHeight = 220,
  priority = false,
  overlay = 'gradient',
}: ImageCardProps) {
  const overlayClass = {
    light:    'bg-black/20',
    dark:     'bg-black/50',
    gradient: 'bg-gradient-to-t from-black/70 via-black/20 to-transparent',
  }[overlay];

  const content = (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl group cursor-pointer',
        className,
      )}
      style={{ height: imageHeight }}
    >
      {/* Image */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        priority={priority}
      />

      {/* Overlay */}
      <div className={cn('absolute inset-0', overlayClass)} />

      {/* Badge */}
      {badge && (
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">
            {badge}
          </span>
        </div>
      )}

      {/* Text content */}
      {(title || subtitle) && (
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {title && (
            <h3 className="font-serif font-bold text-white text-lg leading-tight">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-white/80 text-sm mt-1">{subtitle}</p>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}