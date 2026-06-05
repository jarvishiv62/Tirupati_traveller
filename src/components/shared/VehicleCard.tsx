// src/components/shared/VehicleCard.tsx
// Full vehicle pricing card — used in CabServiceTemplate, LocalServiceTemplate,
// CityLandingTemplate, and VehicleTemplate's RelatedVehicles section.
// Server Component — no 'use client' needed.

import Image from 'next/image';
import { Users, Briefcase, Fuel, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buildWALink, formatPrice } from '@/lib/utils';

export interface VehicleCardData {
  id: string;
  name: string;
  image: string;
  category: 'sedan' | 'suv' | 'premium-suv' | 'tempo' | 'luxury-van';
  tariff: number;        // ₹/km
  perDayKm: number;      // km included per day
  driverCharge: number;  // ₹/day
  seats: number;
  luggage: number;
  ac: boolean;
  features: string[];
  badge: string | null;
}

interface VehicleCardProps {
  vehicle: VehicleCardData;
  city: string;           // e.g. 'Varanasi' — used for WhatsApp pre-fill
  citySlug: string;       // e.g. 'varanasi' — used for href
  compact?: boolean;      // horizontal layout for lists
  className?: string;
  showCTA?: boolean;      // show Call + WhatsApp buttons (default: true)
}

export default function VehicleCard({
  vehicle,
  city,
  citySlug,
  compact = false,
  className,
  showCTA = true,
}: VehicleCardProps) {
  const waMessage = buildWALink(
    `Hi, I want to book a ${vehicle.name} in ${city}. Please share availability and fare details.`,
  );

  if (compact) {
    // ── Compact / horizontal layout ──────────────────────────────────────────
    return (
      <div
        className={cn(
          'card-warm rounded-2xl p-4 flex gap-4 items-start hover:shadow-temple transition-shadow duration-300',
          className,
        )}
      >
        {/* Vehicle image */}
        <div className="relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-cream-dark">
          <Image
            src={vehicle.image}
            alt={`${vehicle.name} cab in ${city}`}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              {vehicle.badge && (
                <span className="inline-block bg-gold text-secondary text-xs font-semibold px-2 py-0.5 rounded-full mb-1">
                  {vehicle.badge}
                </span>
              )}
              <h3 className="font-sans font-semibold text-text-primary text-sm leading-tight">
                {vehicle.name}
              </h3>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-primary font-bold text-base font-serif leading-none">
                ₹{vehicle.tariff}/km
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-1.5 text-text-light text-xs">
            <span className="flex items-center gap-1">
              <Users size={12} />
              {vehicle.seats} seats
            </span>
            <span className="flex items-center gap-1">
              <Briefcase size={12} />
              {vehicle.luggage} bags
            </span>
            {vehicle.ac && (
              <span className="text-primary font-medium">AC</span>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ── Full card layout ────────────────────────────────────────────────────────
  return (
    <div
      className={cn(
        'card-warm rounded-2xl overflow-hidden hover:shadow-temple transition-shadow duration-300 flex flex-col',
        className,
      )}
    >
      {/* Vehicle image */}
      <div className="relative h-44 bg-cream-dark flex-shrink-0">
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} cab in ${city}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Badge */}
        {vehicle.badge && (
          <div className="absolute top-3 left-3">
            <span className="bg-gold text-secondary text-xs font-bold px-2.5 py-1 rounded-full shadow">
              {vehicle.badge}
            </span>
          </div>
        )}
        {/* Price overlay */}
        <div className="absolute bottom-0 right-0 bg-secondary/90 text-white px-3 py-1.5 rounded-tl-xl">
          <span className="text-xs text-white/70">Starting</span>
          <div className="font-bold text-base font-serif leading-tight">
            ₹{vehicle.tariff}/km
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1">
        {/* Name */}
        <h3 className="font-serif font-bold text-text-primary text-lg leading-tight mb-3">
          {vehicle.name}
        </h3>

        {/* Specs grid */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[
            { icon: Users, label: `${vehicle.seats} Seats` },
            { icon: Briefcase, label: `${vehicle.luggage} Bags` },
            { icon: Fuel, label: vehicle.ac ? 'AC' : 'Non-AC' },
            { icon: Star, label: `₹${vehicle.driverCharge}/day driver` },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 text-text-secondary text-xs"
            >
              <Icon size={13} className="text-primary flex-shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Per-day KM note */}
        <p className="text-xs text-text-light mb-3">
          Includes {vehicle.perDayKm} km/day &bull; Extra km billed at tariff rate
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {vehicle.features.slice(0, 4).map((feat) => (
            <span
              key={feat}
              className="bg-cream text-text-secondary text-xs px-2 py-0.5 rounded-full border border-border-warm"
            >
              {feat}
            </span>
          ))}
        </div>

        {/* CTAs — pushed to bottom */}
        {showCTA && (
          <div className="mt-auto flex flex-col gap-2">
            <a
              href={`tel:8726124680`}
              className="btn-primary text-sm py-2.5 text-center w-full"
            >
              Call to Book
            </a>
            <a
              href={waMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-2.5 text-center w-full"
            >
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
