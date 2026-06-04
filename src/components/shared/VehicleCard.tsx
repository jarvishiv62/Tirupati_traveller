// src/components/shared/VehicleCard.tsx
// Arch-top vehicle card — used in CityLandingTemplate VehiclePricingCards section
// Server Component — no 'use client' needed

import Image from 'next/image';
import Link from 'next/link';
import { Users, Briefcase, Zap, Phone } from 'lucide-react';

export type VehicleCardData = {
  id: string;
  name: string;
  image: string;
  category: 'sedan' | 'suv' | 'tempo' | 'luxury';
  tariff: number;         // ₹/km
  perDayKm: number;
  driverCharge: number;   // ₹/day
  seats: number;
  luggage: number;
  ac: boolean;
  badge?: string;         // e.g. 'Most Popular'
  slug: string;           // e.g. 'varanasi/innova-crysta-on-rent-in-varanasi'
};

type Props = {
  vehicle: VehicleCardData;
  city?: string;
  compact?: boolean;
  className?: string;
};

const CATEGORY_COLORS: Record<string, string> = {
  sedan:  'bg-primary-light text-primary-dark',
  suv:    'bg-secondary text-white',
  tempo:  'bg-accent-light text-secondary',
  luxury: 'bg-gold-pale text-gold-deep',
};

export default function VehicleCard({ vehicle, city = 'Varanasi', compact = false, className = '' }: Props) {
  const waMessage = encodeURIComponent(
    `Hi, I want to book ${vehicle.name} in ${city}. Please share availability and pricing.`
  );
  const waLink = `https://wa.me/918726124680?text=${waMessage}`;

  return (
    <article
      className={`card-temple group relative flex flex-col overflow-hidden bg-white transition-shadow duration-300 hover:shadow-temple ${className}`}
    >
      {/* Badge */}
      {vehicle.badge && (
        <span className="absolute top-3 left-3 z-10 badge-gold text-xs font-semibold px-2.5 py-1 rounded-full shadow-gold">
          {vehicle.badge}
        </span>
      )}

      {/* Category tag */}
      <span
        className={`absolute top-3 right-3 z-10 text-xs font-medium px-2.5 py-1 rounded-full capitalize ${CATEGORY_COLORS[vehicle.category] || CATEGORY_COLORS.sedan}`}
      >
        {vehicle.category}
      </span>

      {/* Vehicle image — arch-frame clip */}
      <div className={`arch-frame relative w-full overflow-hidden bg-cream-dark ${compact ? 'h-36' : 'h-48'}`}>
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} cab in ${city}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Name */}
        <h3 className="font-serif text-lg font-bold text-secondary leading-tight group-hover:text-primary transition-colors duration-200">
          {vehicle.name}
        </h3>

        {/* Specs row */}
        <div className="flex flex-wrap gap-3 text-xs text-text-secondary">
          <span className="flex items-center gap-1">
            <Users size={13} className="text-primary" />
            {vehicle.seats} Seats
          </span>
          <span className="flex items-center gap-1">
            <Briefcase size={13} className="text-primary" />
            {vehicle.luggage} Bags
          </span>
          {vehicle.ac && (
            <span className="flex items-center gap-1">
              <Zap size={13} className="text-primary" />
              AC
            </span>
          )}
        </div>

        {/* Pricing */}
        <div className="card-warm rounded-xl p-3 flex items-center justify-between">
          <div>
            <p className="text-xs text-text-secondary">Starting at</p>
            <p className="text-xl font-bold text-primary">
              ₹{vehicle.tariff.toFixed(2)}
              <span className="text-xs font-normal text-text-secondary">/km</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-text-secondary">Driver charge</p>
            <p className="text-sm font-semibold text-secondary">₹{vehicle.driverCharge}/day</p>
          </div>
        </div>

        {/* Info note */}
        <p className="text-xs text-text-light">
          Includes {vehicle.perDayKm} km/day · Tolls extra
        </p>

        {/* Actions */}
        {!compact && (
          <div className="mt-auto flex gap-2 pt-1">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex-1 text-center text-sm py-2.5 rounded-full font-medium"
            >
              WhatsApp
            </a>
            <Link
              href={`/${vehicle.slug}`}
              className="btn-outline flex-1 text-center text-sm py-2.5 rounded-full font-medium"
            >
              View Details
            </Link>
          </div>
        )}

        {compact && (
          <a
            href={`tel:+918726124680`}
            className="btn-primary w-full text-center text-sm py-2 rounded-full font-medium flex items-center justify-center gap-1.5 mt-auto"
          >
            <Phone size={13} />
            Book Now
          </a>
        )}
      </div>
    </article>
  );
}
