'use client';
import Image from "next/image";
import Link from "next/link";

interface DestinationProps {
  city: string;
  slug: string;
  cabSlug: string;
  image: string;
  alt: string;
  badge: string;
  subtitle: string;
  tagline: string;
  highlight: string;
  icon: string;
}

export default function ClientDestinationCard({
  city,
  slug,
  cabSlug,
  image,
  alt,
  badge,
  subtitle,
  tagline,
  highlight,
  icon,
}: DestinationProps) {
  return (
    <div className="dest-card group relative overflow-hidden rounded-2xl cursor-pointer">
      {/* Image container with position relative - CRITICAL for Next.js Image fill */}
      <div className="dest-card-img relative w-full h-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          quality={85}
          priority={false}
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="dest-card-gradient" />
      
      {/* Badge - top right */}
      <div className="absolute top-3 right-3 z-20">
        <span className="dest-badge">{badge}</span>
      </div>
      
      {/* Always visible content at bottom */}
      <div className="dest-card-content">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl leading-none" aria-hidden="true">
            {icon}
          </span>
          <h3 className="font-serif font-bold text-white text-xl leading-tight">
            {city}
          </h3>
        </div>
        <p className="text-white/70 text-xs tracking-wide">{subtitle}</p>
        <p className="text-white/50 text-[11px] mt-1">{highlight}</p>
      </div>
      
      {/* Hover overlay with dual CTAs */}
      <div className="dest-card-hover-overlay">
        <p className="text-white/90 text-sm text-center font-medium mb-5 px-2 leading-snug">
          {tagline}
        </p>
        <Link href={cabSlug} className="dest-cta-primary" onClick={(e) => e.stopPropagation()}>
          🚗 Book a Cab
        </Link>
        <Link href={slug} className="dest-cta-secondary" onClick={(e) => e.stopPropagation()}>
          🗺️ Explore {city}
        </Link>
      </div>
    </div>
  );
}