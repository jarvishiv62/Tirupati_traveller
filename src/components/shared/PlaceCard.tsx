// src/components/shared/PlaceCard.tsx
// TempleArchCard-style place card — used in CityLandingTemplate and PlacesToVisitTemplate
// Server Component

import Image from 'next/image';
import { MapPin } from 'lucide-react';

export type PlaceCardData = {
  name: string;
  image: string;
  distance: string;
  description?: string;
  category?: string;
};

type Props = {
  place: PlaceCardData;
  imageHeight?: number;
  showDescription?: boolean;
  className?: string;
};

const CATEGORY_COLORS: Record<string, string> = {
  Temple:   'bg-primary-light text-primary-dark',
  Ghat:     'bg-blue-50 text-blue-700',
  Heritage: 'bg-amber-50 text-amber-700',
  Nature:   'bg-green-50 text-green-700',
  Market:   'bg-purple-50 text-purple-700',
};

export default function PlaceCard({
  place,
  imageHeight = 200,
  showDescription = false,
  className = '',
}: Props) {
  const categoryColor =
    place.category ? (CATEGORY_COLORS[place.category] || 'bg-cream text-text-secondary') : '';

  return (
    <article
      className={`card-temple group relative flex flex-col overflow-hidden bg-white transition-all duration-300 hover:shadow-temple hover:-translate-y-1 ${className}`}
    >
      {/* Category badge */}
      {place.category && (
        <span
          className={`absolute top-3 left-3 z-10 text-xs font-medium px-2.5 py-1 rounded-full ${categoryColor}`}
        >
          {place.category}
        </span>
      )}

      {/* Image — arch frame */}
      <div
        className="arch-frame relative w-full overflow-hidden bg-cream-dark"
        style={{ height: imageHeight }}
      >
        <Image
          src={place.image}
          alt={place.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Name overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="font-serif text-base font-bold text-white leading-tight drop-shadow-sm">
            {place.name}
          </h3>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 flex items-center gap-1.5 text-xs text-text-secondary border-t border-border-warm">
        <MapPin size={12} className="text-primary flex-shrink-0" />
        <span>{place.distance}</span>
      </div>

      {/* Description (optional) */}
      {showDescription && place.description && (
        <div className="px-4 pb-4">
          <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
            {place.description}
          </p>
        </div>
      )}
    </article>
  );
}
