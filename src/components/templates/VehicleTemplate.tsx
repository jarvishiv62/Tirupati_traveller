// src/components/templates/VehicleTemplate.tsx
// ★ CHUNK 4 — Full-page template for all vehicle pages
// Covers: Innova Crysta, Ertiga, Swift Dzire, Sedan, Toyota Etios — all cities
//
// Section order:
//   1. VehicleHero       — full-width hero, price badge, CTA
//   2. SpecsCard         — 6-spec grid (tariff, perDayKm, driverCharge, seats, luggage, fuel)
//   3. FeaturesSection   — feature pill grid + 4 USP cards
//   4. EEATSection       — trust signals
//   5. BookingCTABanner  — gradient-sacred full-width banner
//   6. FAQSection        — interactive accordion + FAQPage JSON-LD
//   7. RelatedVehicles   — other vehicles in same city
//   8. QuickBookingStrip — compact sticky-style re-CTA
//   9. InternalLinks     — SEO cross-links
//
// Server Component — no 'use client' on this file.
// FAQAccordion (client) is imported from @/components/shared/FAQAccordion.
//
// Fixes from previous version:
//   - RelatedVehicles: filter by v.slug !== data.slug (was v.id — VehicleData has no .id)
//   - RelatedVehicles: VehicleCard now receives toCardData(v) + citySlug + vehiclePageHref
//   - SpecsCard: removed rawData as any hack; uses VEHICLE_DEFAULTS from vehicleAdapter
//   - FAQAccordion import updated from VehicleTemplate.faq → shared/FAQAccordion
//     (VehicleTemplate.faq.tsx can now be deleted)
//   - ChevronDown removed from imports (no longer used — it lives in FAQAccordion)

import Image from 'next/image';
import Link from 'next/link';
import {
  Users,
  Briefcase,
  Zap,
  Phone,
  MapPin,
  Star,
  Shield,
  Clock,
  Gauge,
  CarFront,
  Fuel,
  ChevronRight,
} from 'lucide-react';

import SacredDivider from '@/components/shared/SacredDivider';
import InternalLinks from '@/components/shared/InternalLinks';
import EEATSection from '@/components/shared/EEATSection';
import VehicleCard from '@/components/shared/VehicleCard';
import FAQAccordion from '@/components/shared/FAQAccordion';  // ← updated path

import { getVehiclesByCity } from '@/data/vehicles';
import { toCardData, VEHICLE_DEFAULTS } from '@/lib/vehicleAdapter';  // ← replaces rawData as any
import { buildWALink } from '@/lib/utils';

import type { VehicleData } from '@/types/templates';

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Props = { data: VehicleData };

// ─── SECTION 1: VEHICLE HERO ──────────────────────────────────────────────────

function VehicleHero({ data }: { data: VehicleData }) {
  const { vehicleName, city, pricePerKm, basePrice, images, specs, slug } = data;
  const heroImage = images[0] || `/Images/vehicles/${slug?.split('/').pop() || 'vehicle'}.webp`;
  const waMsg     = buildWALink(
    `Hi, I want to book ${vehicleName} in ${city}. Please share availability and pricing.`,
  );

  // Service JSON-LD
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type':    'Service',
    name:       `${vehicleName} on Rent in ${city}`,
    provider: {
      '@type':     'LocalBusiness',
      name:        'Tirupati Travel',
      telephone:   '+918726124680',
      address: {
        '@type':         'PostalAddress',
        streetAddress:   'L-2/72, Dashashwamedh Plaza, Dashashwamedh Ghat',
        addressLocality: 'Varanasi',
        addressRegion:   'Uttar Pradesh',
        postalCode:      '221001',
        addressCountry:  'IN',
      },
    },
    areaServed:  city,
    description: `Book ${vehicleName} on rent in ${city}. AC cab, professional driver, starting at ₹${pricePerKm}/km. 24/7 service.`,
    offers: {
      '@type':            'Offer',
      price:              pricePerKm,
      priceCurrency:      'INR',
      priceSpecification: {
        '@type':   'UnitPriceSpecification',
        price:     pricePerKm,
        unitText:  'km',
      },
    },
  };

  return (
    <section className="relative bg-section-dark overflow-hidden">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Background image + layered overlays */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={`${vehicleName} cab in ${city}`}
          fill priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Mandala watermark */}
      <div
        className="mandala-watermark absolute top-0 right-0 w-96 h-96 text-white"
        style={{ opacity: 0.04 }}
        aria-hidden="true"
      >
        <Image src="/svg/corner-mandala.svg" alt="" fill className="object-contain" />
      </div>

      {/* Ghat skyline */}
      <div
        className="ghat-skyline-wrap absolute bottom-0 left-0 right-0 h-24 text-white"
        style={{ opacity: 0.20 }}
        aria-hidden="true"
      >
        <Image src="/svg/ghats/ghat-skyline.svg" alt="" fill className="object-cover object-bottom" />
      </div>

      {/* Content */}
      <div className="relative container-site py-20 md:py-28 lg:py-32">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-1.5 text-white/50 text-sm mb-5 flex-wrap"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={13} aria-hidden="true" />
          <Link
            href={`/${city.toLowerCase()}`}
            className="hover:text-white transition-colors capitalize"
          >
            {city}
          </Link>
          <ChevronRight size={13} aria-hidden="true" />
          <span className="text-white/80">{vehicleName}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ── Left: Text ── */}
          <div>
            {/* Category badge */}
            <span className="inline-flex items-center gap-1.5 bg-primary/20 border border-primary/30 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm">
              <CarFront size={12} aria-hidden="true" />
              {specs.seats}-Seater &middot; {specs.ac ? 'AC' : 'Non-AC'} &middot; {specs.fuelType}
            </span>

            {/* H1 — exactly ONE on the page */}
            <h1 className="page-heading mb-4">
              {vehicleName}{' '}
              <span className="text-gold-shimmer">on Rent</span>
              <br />
              <span className="text-3xl md:text-4xl">in {city}</span>
            </h1>

            <p className="text-white/70 text-base md:text-lg mb-6 max-w-lg leading-relaxed">
              Premium {vehicleName} cab service in {city} — AC vehicle, professional driver,
              transparent pricing. Book online or call for instant confirmation.
            </p>

            {/* Price pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3">
                <p className="text-white/60 text-xs mb-0.5">Starts at</p>
                <p className="text-white font-bold text-xl">₹{pricePerKm.toFixed(2)}/km</p>
              </div>
              {basePrice > 0 && (
                <div className="bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-2xl px-4 py-3">
                  <p className="text-accent/80 text-xs mb-0.5">Min. fare</p>
                  <p className="text-accent font-bold text-xl">
                    ₹{basePrice.toLocaleString('en-IN')}
                  </p>
                </div>
              )}
              <div className="bg-success/10 backdrop-blur-sm border border-success/20 rounded-2xl px-4 py-3">
                <p className="text-white/60 text-xs mb-0.5">Availability</p>
                <p className="text-green-400 font-semibold text-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
                  24 / 7
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+918726124680"
                className="btn-primary flex items-center gap-2 px-6 py-3.5 text-base font-semibold shadow-float"
              >
                <Phone size={18} />
                Call: 8726124680
              </a>
              <a
                href={waMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center gap-2 px-6 py-3.5 text-base font-semibold"
              >
                WhatsApp Booking
              </a>
            </div>

            <p className="mt-4 text-white/40 text-xs flex items-center gap-1.5">
              <Shield size={12} aria-hidden="true" />
              No advance payment &middot; Free cancellation &middot; GST invoice on request
            </p>
          </div>

          {/* ── Right: Image card (lg only) ── */}
          <div className="hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-temple border border-white/10">
              <div className="relative h-72">
                <Image
                  src={heroImage}
                  alt={`${vehicleName} in ${city}`}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
              </div>
              {/* Floating spec badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20">
                <div className="flex items-center justify-between text-white text-sm">
                  <span className="flex items-center gap-1.5">
                    <Users size={14} className="text-primary" aria-hidden="true" />
                    {specs.seats} seats
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={14} className="text-primary" aria-hidden="true" />
                    {specs.luggage} bags
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Fuel size={14} className="text-primary" aria-hidden="true" />
                    {specs.fuelType}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star size={14} className="text-accent" fill="currentColor" aria-hidden="true" />
                    4.8/5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 2: SPECS CARD ────────────────────────────────────────────────────
//
// Fix: removed `const rawData = data as any` hack.
// VEHICLE_DEFAULTS.perDayKm (250) and VEHICLE_DEFAULTS.driverCharge (200)
// are imported from vehicleAdapter — same constants used in toCardData().

function SpecsCard({ data }: { data: VehicleData }) {
  const { vehicleName, city, pricePerKm, specs } = data;

  const specsGrid = [
    {
      icon:  <Gauge size={22} className="text-primary" aria-hidden="true" />,
      label: 'Rate per km',
      value: `₹${pricePerKm.toFixed(2)}`,
      sub:   'outstation / local',
    },
    {
      icon:  <MapPin size={22} className="text-primary" aria-hidden="true" />,
      label: 'Km per day',
      value: `${VEHICLE_DEFAULTS.perDayKm} km`,
      sub:   'included in package',
    },
    {
      icon:  <Users size={22} className="text-primary" aria-hidden="true" />,
      label: 'Seating',
      value: `${specs.seats} persons`,
      sub:   '+ driver',
    },
    {
      icon:  <Briefcase size={22} className="text-primary" aria-hidden="true" />,
      label: 'Luggage',
      value: `${specs.luggage}`,
      sub:   'standard size',
    },
    {
      icon:  <CarFront size={22} className="text-primary" aria-hidden="true" />,
      label: 'Driver charge',
      value: `₹${VEHICLE_DEFAULTS.driverCharge}/day`,
      sub:   'night halt extra',
    },
    {
      icon:  <Fuel size={22} className="text-primary" aria-hidden="true" />,
      label: 'Fuel type',
      value: specs.fuelType,
      sub:   specs.ac ? 'Full AC' : 'Non-AC',
    },
  ];

  return (
    <section className="bg-section-white section-pad">
      <div className="container-site">
        <div className="text-center mb-10">
          <h2 className="section-title">{vehicleName} Specifications</h2>
          <p className="section-sub">Everything you need to know before booking</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {specsGrid.map((item, i) => (
            <div
              key={i}
              className="card-warm rounded-2xl p-4 flex flex-col items-center text-center gap-2 hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-text-secondary">{item.label}</p>
                <p className="font-bold text-secondary text-base leading-tight mt-0.5">
                  {item.value}
                </p>
                <p className="text-xs text-text-light mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Policy note strip */}
        <div className="mt-8 bg-cream rounded-2xl border border-border-warm p-4 flex flex-wrap gap-4 items-center justify-center text-sm text-text-secondary">
          {[
            'Toll & parking extra',
            'State taxes as applicable',
            'GST invoice available',
            'Night halt: ₹300 extra',
          ].map((note, i, arr) => (
            <>
              <span key={note} className="flex items-center gap-1.5">
                <Shield size={14} className="text-primary" aria-hidden="true" />
                {note}
              </span>
              {i < arr.length - 1 && (
                <span key={`div-${i}`} className="w-px h-4 bg-border hidden sm:block" aria-hidden="true" />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 3: FEATURES SECTION ─────────────────────────────────────────────

function FeaturesSection({ data }: { data: VehicleData }) {
  const { vehicleName, city, features } = data;

  const featureIconMap: Record<string, React.ReactNode> = {
    'AC':                  <Zap     size={18} className="text-primary" aria-hidden="true" />,
    'GPS':                 <MapPin  size={18} className="text-primary" aria-hidden="true" />,
    'GPS Tracking':        <MapPin  size={18} className="text-primary" aria-hidden="true" />,
    'Music system':        <Star    size={18} className="text-primary" aria-hidden="true" />,
    'Music System':        <Star    size={18} className="text-primary" aria-hidden="true" />,
    'First aid kit':       <Shield  size={18} className="text-primary" aria-hidden="true" />,
    'First Aid Kit':       <Shield  size={18} className="text-primary" aria-hidden="true" />,
    'Professional Driver': <Users   size={18} className="text-primary" aria-hidden="true" />,
    '24/7 Support':        <Clock   size={18} className="text-primary" aria-hidden="true" />,
    'Toll Inclusive':      <Shield  size={18} className="text-primary" aria-hidden="true" />,
  };

  const coreUSPs = [
    {
      icon:  <Clock  size={28} className="text-primary" aria-hidden="true" />,
      title: '24/7 Availability',
      desc:  `Your ${vehicleName} is available round the clock in ${city}. Early morning pickups, late-night drops — always on time.`,
    },
    {
      icon:  <Shield size={28} className="text-primary" aria-hidden="true" />,
      title: 'No Hidden Charges',
      desc:  'What we quote is what you pay. Toll, parking, and state taxes are always disclosed upfront — zero surprises.',
    },
    {
      icon:  <Users  size={28} className="text-primary" aria-hidden="true" />,
      title: 'Expert Local Drivers',
      desc:  `Our drivers know every road, temple, and shortcut in ${city} and beyond. Verified, experienced, and courteous.`,
    },
    {
      icon:  <Star   size={28} className="text-primary" aria-hidden="true" />,
      title: '4.8★ Rated Service',
      desc:  'Thousands of satisfied pilgrims and travellers. Our drivers are rated among the best in the region.',
    },
  ];

  return (
    <section className="bg-section-cream texture-cream section-pad">
      <div className="container-site">
        <div className="text-center mb-10">
          <h2 className="cream-title">Why Book {vehicleName} with Tirupati Travel?</h2>
          <p className="section-sub">Premium vehicle, professional service, pilgrimage expertise</p>
        </div>

        {/* Feature pills from data */}
        {features?.length > 0 && (
          <div className="flex flex-wrap gap-2.5 justify-center mb-10">
            {features.map((feature, i) => (
              <span
                key={i}
                className="flex items-center gap-2 bg-white border border-border-warm rounded-full px-4 py-2 text-sm font-medium text-text-secondary shadow-sm"
              >
                {featureIconMap[feature] ?? (
                  <Shield size={14} className="text-primary" aria-hidden="true" />
                )}
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Core USP grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreUSPs.map((usp, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 border border-border-warm hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                {usp.icon}
              </div>
              <h3 className="font-semibold text-secondary text-base mb-2">{usp.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 5: BOOKING CTA BANNER ───────────────────────────────────────────

function BookingCTABanner({ data }: { data: VehicleData }) {
  const { vehicleName, city, pricePerKm } = data;
  const waMsg = buildWALink(
    `Hi, I want to book ${vehicleName} in ${city}. Please confirm availability and share the price breakdown.`,
  );

  return (
    <section className="relative bg-section-dark overflow-hidden section-pad-sm">
      <div className="gradient-sacred absolute inset-0" />
      <div
        className="mandala-watermark absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 text-white"
        style={{ opacity: 0.08 }}
        aria-hidden="true"
      >
        <Image src="/svg/corner-mandala.svg" alt="" fill className="object-contain" />
      </div>

      <div className="relative container-site">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
              Book {vehicleName} in {city} Now
            </h2>
            <p className="text-white/70 text-base max-w-xl">
              Starting at just{' '}
              <span className="text-accent font-bold">₹{pricePerKm.toFixed(2)}/km</span>.{' '}
              AC vehicle &middot; Experienced driver &middot; 24/7 support &middot; No advance payment.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a
              href="tel:+918726124680"
              className="btn-gold flex items-center gap-2 px-7 py-3.5 text-base font-semibold"
            >
              <Phone size={18} />
              Call: 8726124680
            </a>
            <a
              href={waMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center gap-2 px-7 py-3.5 text-base font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 6: FAQ ───────────────────────────────────────────────────────────
//
// buildGenericFAQs produces 6 questions injected with vehicleName + city + pricePerKm.
// FAQAccordion (client component from shared/) renders the interactive accordion.
// FAQPage JSON-LD injected inline (SSR-safe as script tag).

function buildGenericFAQs(
  vehicleName: string,
  city:        string,
  pricePerKm:  number,
) {
  return [
    {
      q: `What is the ${vehicleName} cab fare in ${city}?`,
      a: `The ${vehicleName} cab fare in ${city} starts at ₹${pricePerKm.toFixed(2)} per km. A minimum distance of ${VEHICLE_DEFAULTS.perDayKm} km per day applies on outstation trips. Driver allowance of ₹${VEHICLE_DEFAULTS.driverCharge}/day is charged separately. Toll, parking, and state taxes are extra. Call 8726124680 for an exact quote.`,
    },
    {
      q: `Is the ${vehicleName} available for outstation trips from ${city}?`,
      a: `Yes. Our ${vehicleName} is available for all outstation routes from ${city} — one-way, round trip, and multi-day tours. Popular routes include ${city} to Ayodhya, ${city} to Allahabad, ${city} to Lucknow, ${city} to Gaya, and ${city} to Delhi. Book by calling 8726124680.`,
    },
    {
      q: `How do I book a ${vehicleName} cab in ${city}?`,
      a: `You can book in three ways: (1) Call 8726124680 for instant confirmation, (2) WhatsApp your trip details to +91 8726124680, or (3) use the booking form on this page. We confirm within minutes and send driver details before your trip.`,
    },
    {
      q: `Does the ${vehicleName} come with a professional driver?`,
      a: `Yes. Every ${vehicleName} booking with Tirupati Travel includes a verified, experienced local driver. Our drivers know ${city} and all major pilgrimage routes thoroughly. Driver allowance is ₹${VEHICLE_DEFAULTS.driverCharge}/day; night halt charges apply if the trip extends overnight.`,
    },
    {
      q: `Is the ${vehicleName} fully air-conditioned?`,
      a: `Yes. All ${vehicleName} vehicles in our fleet are fully air-conditioned. Vehicles are regularly maintained, cleaned, and sanitised. On steep mountain roads, the AC may be turned off as per standard practice.`,
    },
    {
      q: `What is included in the ${vehicleName} cab fare in ${city}?`,
      a: `The fare includes the vehicle, fuel, and driver for the agreed distance. Not included: toll charges, parking fees, state border taxes, driver's food on multi-day trips, or night halt charges. These are paid at actuals.`,
    },
  ];
}

function FAQSection({ data }: { data: VehicleData }) {
  const { vehicleName, city, pricePerKm } = data;
  const faqs = buildGenericFAQs(vehicleName, city, pricePerKm);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type':        'Question',
      name:           f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section className="bg-section-white section-pad">
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-site max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">{vehicleName} in {city} — FAQs</h2>
          <p className="section-sub">Common questions about pricing, booking &amp; the vehicle</p>
        </div>
        {/* FAQAccordion is 'use client' — isolated to avoid marking template as client */}
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}

// ─── SECTION 7: RELATED VEHICLES ──────────────────────────────────────────────
//
// Fixes from previous version:
//   - Filter by v.slug !== data.slug  (was v.id !== currentId — VehicleData has no .id)
//   - VehicleCard: vehicle={toCardData(v)} (was vehicle={vehicle} — wrong type)
//   - VehicleCard: added required citySlug prop
//   - VehicleCard: added vehiclePageHref for "View full details" link
//   - Grid changed to lg:grid-cols-3 (shows 3 related vehicles)
//   - Mobile scroll key: changed from vehicle.id to v.slug

function RelatedVehicles({ data }: { data: VehicleData }) {
  const { city } = data;
  const citySlug = city.toLowerCase();

  const allCityVehicles = getVehiclesByCity(city);
  const related = allCityVehicles
    .filter(v => v.slug !== data.slug)   // ← FIX: was v.id !== currentId
    .slice(0, 3);

  if (!related.length) return null;

  return (
    <section className="bg-section-cream texture-cream section-pad">
      <div className="container-site">
        <div className="text-center mb-10">
          <h2 className="cream-title">Other Vehicles in {city}</h2>
          <p className="section-sub">Choose the right cab for your trip size and budget</p>
        </div>

        {/* Horizontal scroll on mobile, 3-col grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:pb-0 snap-x snap-mandatory sm:snap-none">
          {related.map(v => (
            <div
              key={v.slug}   // ← FIX: was vehicle.id
              className="flex-shrink-0 w-72 sm:w-auto snap-start"
            >
              <VehicleCard
                vehicle={toCardData(v)}                    // ← FIX: adapter converts VehicleData → VehicleCardData
                city={city}
                citySlug={citySlug}                        // ← FIX: was missing
                vehiclePageHref={`/${citySlug}/${v.slug}`} // ← NEW: links to vehicle page
              />
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-8 text-center">
          <Link
            href={`/${citySlug}`}
            className="btn-outline inline-flex items-center gap-2 px-6 py-3"
          >
            View All {city} Vehicles
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 8: QUICK BOOKING STRIP ──────────────────────────────────────────

function QuickBookingStrip({ data }: { data: VehicleData }) {
  const { vehicleName, city } = data;
  const waMsg = buildWALink(`Book ${vehicleName} in ${city}`);

  return (
    <div className="bg-cream border-y border-border-warm py-4">
      <div className="container-site flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
            <CarFront size={18} className="text-primary" aria-hidden="true" />
          </div>
          <div>
            <p className="font-semibold text-secondary text-sm">
              {vehicleName} &middot; {city}
            </p>
            <p className="text-xs text-text-secondary">Ready for immediate booking</p>
          </div>
        </div>
        <div className="flex gap-2">
          <a
            href="tel:+918726124680"
            className="btn-primary text-sm px-5 py-2.5 flex items-center gap-1.5"
          >
            <Phone size={14} aria-hidden="true" /> Call Now
          </a>
          <a
            href={waMsg}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm px-5 py-2.5"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN TEMPLATE ────────────────────────────────────────────────────────────

export default function VehicleTemplate({ data }: Props) {
  return (
    <>
      {/* ── 1. Hero ── */}
      <VehicleHero data={data} />

      <SacredDivider variant="lotus" />

      {/* ── 2. Specs Card  [white] ── */}
      <SpecsCard data={data} />

      <SacredDivider variant="wave" />

      {/* ── 3. Features / Why Book  [cream] ── */}
      <FeaturesSection data={data} />

      {/* ── 4. EEAT trust signals ── */}
      <EEATSection />

      <SacredDivider variant="mandala" />

      {/* ── 5. Booking CTA Banner  [dark + gradient-sacred] ── */}
      <BookingCTABanner data={data} />

      <SacredDivider variant="wave" />

      {/* ── 6. FAQ  [white]  — FAQAccordion (client) + JSON-LD ── */}
      <FAQSection data={data} />

      <SacredDivider variant="lotus" />

      {/* ── 7. Related Vehicles  [cream] ── */}
      <RelatedVehicles data={data} />

      {/* ── 8. Quick Booking Strip ── */}
      <QuickBookingStrip data={data} />

      {/* ── 9. Internal SEO links ── */}
      <InternalLinks template="VehicleTemplate" data={data} />
    </>
  );
}