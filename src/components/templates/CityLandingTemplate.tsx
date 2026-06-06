'use client';
// src/components/templates/CityLandingTemplate.tsx
// Full-page template for city landing pages and specialty city pages
//
// Section order:
//   CityHero → PlacesGrid → ServicesIcons → VehicleFleetSection*
//   → HowItWorksSection → EEATSection → CTABanner
//   → CityFAQSection* → OutstationLinks → InternalLinks
//
// * VehicleFleetSection only renders when getVehiclesByCity() returns results.
// * CityFAQSection only renders when data.faqs is populated.
//
// Changes from previous version:
//   - VehicleFleetSection: fully rewritten — uses getVehiclesByCity() +
//     toCardData() adapter + vehiclePageHref for city-specific vehicle pages.
//   - HowItWorksSection: new 3-step booking process section.
//   - CityFAQSection: new accordion FAQ with FAQPage JSON-LD structured data.
//   - OutstationLinks: background changed to bg-section-cream (cream/white alternation).
//   - Removed old broken VehiclePricingCards import logic.

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, ArrowRight, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

import SacredDivider from '@/components/shared/SacredDivider';
import PlaceCard from '@/components/shared/PlaceCard';
import VehicleCard from '@/components/shared/VehicleCard';
import type { VehicleCardData } from '@/components/shared/VehicleCard';
import InternalLinks from '@/components/shared/InternalLinks';
import EEATSection from '@/components/shared/EEATSection';
import { getVehiclesByCity } from '@/data/vehicles';
import type { VehicleData } from '@/data/vehicles';

import type { CityLandingData } from '@/types/templates';

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Props = { data: CityLandingData };

// ─── MODULE-LEVEL CONSTANTS & ADAPTERS ────────────────────────────────────────

/**
 * Maps generic vehicle IDs used in cityLanding.ts to slug keywords that
 * match against city-specific VehicleData entries in vehicles.ts.
 *
 * Example: 'innova-crysta' matches slug 'innova-crysta-on-rent-in-varanasi'
 *          via the keyword 'innova'.
 */
const VEHICLE_ID_KEYWORDS: Record<string, string> = {
  'innova-crysta':  'innova',
  'ertiga':         'ertiga',
  'swift-dzire':    'dzire',
  'sedan':          'sedan',
  'etios':          'etios',
  'tempo-traveller':'tempo',
};

/**
 * Converts vehicles.ts VehicleData → VehicleCard's VehicleCardData.
 *
 * VehicleData (vehicles.ts) and VehicleCardData (VehicleCard.tsx) have
 * different shapes. This adapter bridges them so VehicleFleetSection can
 * use the existing VehicleCard component without modifying either data file.
 *
 * perDayKm / driverCharge are not stored in VehicleData — standard market
 * defaults (250 km/day, ₹200/day) are used.
 */
function toCardData(v: VehicleData): VehicleCardData {
  const luggageBags = parseInt(v.specs.luggage, 10) || 2;
  const isMostPopular = v.features.some(f =>
    f.toLowerCase().includes('most popular'),
  );
  return {
    id:           v.slug,
    name:         v.vehicleName,
    image:        v.images[0] ?? '/swift-dzire.png',
    category:     v.specs.seats >= 7 ? 'suv' : 'sedan',
    tariff:       v.pricePerKm,
    perDayKm:     250,
    driverCharge: 200,
    seats:        v.specs.seats,
    luggage:      luggageBags,
    ac:           v.specs.ac,
    features:     v.features,
    badge:        isMostPopular
                    ? 'Most Popular'
                    : v.specs.seats >= 7
                    ? 'Best for Groups'
                    : null,
  };
}

/** Static 3-step booking flow content — no per-city data needed. */
const HOW_IT_WORKS = [
  {
    num:   '01',
    title: 'Call or WhatsApp',
    desc:  'Share your city, destination & travel date. We respond instantly — no forms, no waiting.',
  },
  {
    num:   '02',
    title: 'Cab Confirmed',
    desc:  'Your cab and driver are confirmed within minutes. Receive driver name & direct contact.',
  },
  {
    num:   '03',
    title: 'Journey in Comfort',
    desc:  'AC cab at your doorstep, on time. No hidden charges. Pay after a smooth journey.',
  },
] as const;

// ─── HERO ─────────────────────────────────────────────────────────────────────

function CityHero({ city, aliases, heroText, heroImage }: {
  city:      string;
  aliases:   string[];
  heroText:  string;
  heroImage: string;
}) {
  const allNames = [city, ...aliases];
  const [nameIndex, setNameIndex] = useState(0);
  const [visible, setVisible]     = useState(true);

  useEffect(() => {
    if (allNames.length <= 1) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setNameIndex(prev => (prev + 1) % allNames.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, [allNames.length]);

  const waMessage = encodeURIComponent(
    `Hi, I need a cab in ${city}. Please share details.`,
  );

  return (
    <section className="relative min-h-[70vh] flex items-end bg-secondary overflow-hidden">
      {/* Hero image + overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={`Taxi service in ${city}`}
          fill priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="gradient-hero absolute inset-0" />
      </div>

      {/* Corner mandala watermark */}
      <div
        className="mandala-watermark absolute top-0 right-0 w-64 h-64 text-white"
        style={{ opacity: 0.06 }}
        aria-hidden="true"
      >
        <Image src="/svg/ghats/corner-mandala.svg" alt="" fill className="object-contain" />
      </div>

      {/* Ghat skyline */}
      <div
        className="ghat-skyline-wrap absolute bottom-0 left-0 right-0 h-24 text-white opacity-25"
        aria-hidden="true"
      >
        <Image
          src="/svg/ghats/ghat-skyline.svg" alt=""
          fill className="object-cover object-bottom"
        />
      </div>

      {/* Content */}
      <div className="relative container-site w-full pb-16 pt-32">
        <nav
          className="flex items-center gap-1.5 text-white/60 text-sm mb-4"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-white">{city}</span>
        </nav>

        <h1 className="page-heading mb-3 max-w-3xl">
          <span
            className={cn(
              'text-gold-shimmer inline-block transition-opacity duration-400',
              visible ? 'opacity-100' : 'opacity-0',
            )}
          >
            {allNames[nameIndex]}
          </span>{' '}
          <span>Taxi Service</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
          {heroText}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="tel:+918726124680"
            className="btn-primary flex items-center gap-2 px-6 py-3 text-base"
          >
            <Phone size={18} />
            Call: 8726124680
          </a>
          <a
            href={`https://wa.me/918726124680?text=${waMessage}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-whatsapp flex items-center gap-2 px-6 py-3 text-base"
          >
            WhatsApp Us
          </a>
        </div>

        <div className="mt-6 flex items-center gap-1.5 text-white/60 text-sm">
          <MapPin size={14} />
          <span>Serving {city} & all nearby destinations</span>
        </div>
      </div>
    </section>
  );
}

// ─── PLACES GRID ──────────────────────────────────────────────────────────────

function PlacesGrid({ places, city }: {
  places: CityLandingData['places'];
  city:   string;
}) {
  return (
    <section className="bg-section-cream texture-cream section-pad">
      <div className="container-site">
        <div className="text-center mb-10">
          <h2 className="cream-title">Top Places to Visit in {city}</h2>
          <p className="section-sub">
            Explore the highlights — we'll get you there comfortably
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {places.map(place => (
            <PlaceCard key={place.name} place={place} imageHeight={200} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ICONS ───────────────────────────────────────────────────────────

function ServicesIcons({ services, city }: {
  services: CityLandingData['services'];
  city:     string;
}) {
  return (
    <section className="bg-section-white section-pad-sm">
      <div className="container-site">
        <div className="text-center mb-8">
          <h2 className="section-title">Our Services in {city}</h2>
          <p className="section-sub">Everything you need, one call away</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {services.map(service => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-border-warm bg-white hover:bg-cream hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={service.icon}
                  alt={service.label}
                  className="w-full h-full"
                  style={{ color: 'var(--color-primary, #FF6B00)' }}
                />
              </div>
              <span className="text-xs font-medium text-text-secondary text-center leading-tight group-hover:text-primary transition-colors duration-200">
                {service.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── VEHICLE FLEET SECTION ────────────────────────────────────────────────────
//
// Resolves vehicles by:
//   1. getVehiclesByCity(city) → all VehicleData for this city
//   2. VEHICLE_ID_KEYWORDS mapping → match each generic ID from cityLanding.ts
//      to the city-specific VehicleData entry by slug/name keyword
//   3. toCardData() → convert VehicleData → VehicleCardData for <VehicleCard>
//   4. vehiclePageHref → links each card to /{citySlug}/{vehicle.slug}
//
// Not rendered when cityVehicles is empty (Gaya, Vindhyachal at Chunk 4).
// The parent template passes pre-computed cityVehicles to avoid double calls.

function VehicleFleetSection({ cityVehicles, vehicleIds, city }: {
  cityVehicles: VehicleData[];
  vehicleIds:   string[];
  city:         string;
}) {
  const citySlug = city.toLowerCase();

  // Build ordered list respecting vehicleIds sequence from cityLanding.ts
  const seen    = new Set<string>();
  const ordered: VehicleData[] = [];

  for (const id of vehicleIds) {
    const kw    = VEHICLE_ID_KEYWORDS[id] ?? id;
    const match = cityVehicles.find(v =>
      v.slug.toLowerCase().includes(kw) ||
      v.vehicleName.toLowerCase().includes(kw),
    );
    if (match && !seen.has(match.slug)) {
      seen.add(match.slug);
      ordered.push(match);
    }
  }

  // Fallback: if no ID matched, show all available city vehicles
  const display = (ordered.length ? ordered : cityVehicles).slice(0, 4);

  // Responsive grid: 2-col centred for 1–2 vehicles; 4-col for 3+
  const gridClass = cn(
    'grid gap-5',
    display.length >= 3
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      : 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto',
  );

  return (
    <section className="bg-section-cream texture-cream section-pad">
      <div className="container-site">
        <div className="text-center mb-10">
          <h2 className="cream-title">Our Fleet in {city}</h2>
          <p className="section-sub">
            AC cabs &middot; Professional drivers &middot; Transparent pricing
          </p>
        </div>

        <div className={gridClass}>
          {display.map(v => (
            <VehicleCard
              key={v.slug}
              vehicle={toCardData(v)}
              city={city}
              citySlug={citySlug}
              vehiclePageHref={`/${citySlug}/${v.slug}`}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-secondary">
          All prices inclusive of driver allowance.
          Toll, parking &amp; state taxes charged separately.
        </p>
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────

function HowItWorksSection({ city }: { city: string }) {
  const waMessage = encodeURIComponent(
    `Hi, I want to book a cab in ${city}. Please share details.`,
  );

  return (
    <section className="bg-section-white section-pad">
      <div className="container-site">
        <div className="text-center mb-12">
          <h2 className="section-title">Book Your {city} Cab in 3 Easy Steps</h2>
          <p className="section-sub">Simple, fast, and hassle-free</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/*
            Horizontal connector line on desktop:
            Positioned at the vertical centre of the number circles (top: 2.5rem = half of w-20),
            spanning from the right edge of circle 1 to the left edge of circle 3.
            left: calc(1/6 of width + 2.5rem)  →  starts after col-1 circle
            right: calc(1/6 of width + 2.5rem) →  ends before col-3 circle
          */}
          <div
            className="hidden md:block absolute h-px bg-primary/20"
            style={{
              top:   '2.5rem',
              left:  'calc(16.67% + 2.5rem)',
              right: 'calc(16.67% + 2.5rem)',
            }}
            aria-hidden="true"
          />

          {HOW_IT_WORKS.map(step => (
            <div key={step.num} className="flex flex-col items-center text-center">
              {/* Numbered circle */}
              <div className="w-20 h-20 rounded-full bg-primary text-white font-serif font-bold text-2xl flex items-center justify-center mb-5 shadow-float relative z-10">
                {step.num}
              </div>
              <h3 className="font-serif font-bold text-secondary text-xl mb-2">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            href="tel:+918726124680"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-base"
          >
            <Phone size={18} />
            Call: 8726124680
          </a>
          <a
            href={`https://wa.me/918726124680?text=${waMessage}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 px-8 py-3 text-base"
          >
            WhatsApp to Book
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── CTA BANNER ───────────────────────────────────────────────────────────────

function CTABanner({ city }: { city: string }) {
  const waMessage = encodeURIComponent(
    `Hi, I need a cab in ${city}. Please share availability.`,
  );

  return (
    <section className="relative bg-section-dark overflow-hidden section-pad-sm">
      <div
        className="mandala-watermark absolute -right-16 top-1/2 -translate-y-1/2 w-80 h-80 text-white"
        style={{ opacity: 0.08 }}
        aria-hidden="true"
      >
        <Image src="/svg/ghats/corner-mandala.svg" alt="" fill className="object-contain" />
      </div>

      <div className="relative container-site text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
          Book Your {city} Cab Now
        </h2>
        <p className="text-white/70 text-base mb-6 max-w-xl mx-auto">
          24/7 service &middot; AC vehicles &middot; Experienced drivers &middot; No hidden charges
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="tel:+918726124680"
            className="btn-gold flex items-center gap-2 px-7 py-3 text-base font-semibold"
          >
            <Phone size={18} />
            Call: 8726124680
          </a>
          <a
            href={`https://wa.me/918726124680?text=${waMessage}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-outline border-white text-white hover:bg-white hover:text-secondary flex items-center gap-2 px-7 py-3 text-base"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── CITY FAQ SECTION ─────────────────────────────────────────────────────────
//
// Only rendered when data.faqs is populated. See cityLanding.ts for per-city FAQ data.
//
// Features:
//   - useState accordion (no native <details> quirks, works across all browsers)
//   - FAQPage JSON-LD structured data injected via <script> for rich results
//     (SSR-safe in Next.js App Router — client components still SSR on first load)

function CityFAQSection({
  faqs,
  city,
}: {
  faqs: NonNullable<CityLandingData['faqs']>;
  city: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type':           'Question',
      name:              q,
      acceptedAnswer:    { '@type': 'Answer', text: a },
    })),
  };

  return (
    <section className="bg-section-white section-pad">
      {/* FAQPage JSON-LD — parsed by Google for rich search results */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-site">
        <div className="text-center mb-10">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">
            Everything you need to know about cab booking in {city}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="card-warm rounded-xl overflow-hidden">
              {/* Accordion trigger */}
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-start justify-between gap-4 p-4 w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-semibold text-text-primary text-sm md:text-base leading-snug">
                  {q}
                </span>
                <ChevronRight
                  size={18}
                  className={cn(
                    'text-primary flex-shrink-0 mt-0.5 transition-transform duration-200',
                    openIndex === i && 'rotate-90',
                  )}
                  aria-hidden="true"
                />
              </button>

              {/* Answer panel */}
              {openIndex === i && (
                <div
                  id={`faq-answer-${i}`}
                  className="px-4 pb-4 pt-3 text-text-secondary text-sm leading-relaxed border-t border-border-warm"
                >
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── OUTSTATION LINKS ─────────────────────────────────────────────────────────
// bg changed to bg-section-cream to maintain cream/white alternation after
// CityFAQSection (white) or CTABanner (dark).

function OutstationLinks({
  links,
  city,
}: {
  links: CityLandingData['outstationLinks'];
  city:  string;
}) {
  return (
    <section className="bg-section-cream texture-cream section-pad">
      <div className="container-site">
        <div className="text-center mb-10">
          <h2 className="cream-title">Outstation Taxi from {city}</h2>
          <p className="section-sub">
            One-way &amp; round-trip cabs to all major destinations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map(route => (
            <Link
              key={route.slug}
              href={`/${route.slug}`}
              className="group card-warm rounded-2xl p-4 flex items-center justify-between hover:shadow-card-hover hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <MapPin
                    size={16}
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <p className="font-semibold text-secondary text-sm group-hover:text-primary transition-colors duration-200">
                    {city} &rarr; {route.destination}
                  </p>
                  <p className="text-xs text-text-secondary mt-0.5">
                    Sedan from{' '}
                    <span className="font-semibold text-primary">
                      ₹{route.fare.toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>
              <ArrowRight
                size={16}
                className="text-text-light group-hover:text-primary transition-all duration-300 group-hover:translate-x-1"
              />
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="tel:+918726124680"
            className="btn-outline inline-flex items-center gap-2 px-6 py-3"
          >
            <Phone size={16} />
            Don't see your route? Call us
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── MAIN TEMPLATE ────────────────────────────────────────────────────────────

export default function CityLandingTemplate({ data }: Props) {
  const {
    city,
    aliases,
    heroText,
    heroImage,
    services,
    vehicles,
    places,
    outstationLinks,
    faqs,
  } = data;

  // Compute once here to control VehicleFleet conditional + its SacredDivider
  // together, without calling getVehiclesByCity twice.
  const cityVehicles = getVehiclesByCity(city);
  const hasFaqs      = Array.isArray(faqs) && faqs.length > 0;

  return (
    <>
      {/* 1 ── Hero */}
      <CityHero
        city={city}
        aliases={aliases}
        heroText={heroText}
        heroImage={heroImage}
      />

      <SacredDivider variant="lotus" />

      {/* 2 ── Places Grid  [cream] */}
      <PlacesGrid places={places} city={city} />

      <SacredDivider variant="wave" />

      {/* 3 ── Services Icons  [white] */}
      <ServicesIcons services={services} city={city} />

      {/*
        4 ── Vehicle Fleet  [cream]
        Divider is inside the conditional so it doesn't appear when
        the section is absent (Gaya, Vindhyachal — no vehicles in Chunk 4 yet).
      */}
      {cityVehicles.length > 0 && (
        <>
          <SacredDivider variant="wave" />
          <VehicleFleetSection
            cityVehicles={cityVehicles}
            vehicleIds={vehicles}
            city={city}
          />
        </>
      )}

      <SacredDivider variant="wave" />

      {/* 5 ── How It Works  [white] */}
      <HowItWorksSection city={city} />

      {/* 6 ── EEAT trust signals */}
      <EEATSection />

      <SacredDivider variant="mandala" />

      {/* 7 ── CTA Banner  [dark] */}
      <CTABanner city={city} />

      {/*
        8 ── FAQ Section  [white]
        Only renders when data.faqs is populated (all 6 main city objects).
        Specialty variants (varanasiPlaces, ayodhyaDham, etc.) without faqs
        skip this section cleanly.
      */}
      {hasFaqs && (
        <>
          <CityFAQSection faqs={faqs!} city={city} />
          <SacredDivider variant="wave" />
        </>
      )}

      {/* 9 ── Outstation Links  [cream] */}
      <OutstationLinks links={outstationLinks} city={city} />

      {/* 10 ── Internal SEO links */}
      <InternalLinks template="CityLandingTemplate" data={data} />
    </>
  );
}