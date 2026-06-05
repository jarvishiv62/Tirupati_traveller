// src/components/templates/VehicleTemplate.tsx
// ★ CHUNK 4 — Full-page template for all vehicle pages
// Covers: Innova Crysta, Ertiga, Swift Dzire, Sedan, Toyota Etios — all cities
//
// Sections (in order):
//   1. VehicleHero        — full-width arch hero, price badge, CTA
//   2. SpecsCard          — 5-spec grid (tariff, perDayKm, driverCharge, seats, luggage)
//   3. FeaturesSection    — feature pill grid with icons
//   4. FAQ                — accordion with FAQPage JSON-LD (generic, city-injected)
//   5. BookingCTA         — gradient-sacred banner
//   6. RelatedVehicles    — other vehicles in same city via getVehiclesByCity()
//   7. InternalLinks      — SEO cross-links
//
// Rules:
//   - Server Component — NO 'use client' on this file
//   - FAQ accordion is extracted to a separate 'use client' sub-component
//   - All images via next/image with alt + fill/sizes
//   - Exactly ONE <h1> — in VehicleHero
//   - Cream/white section alternation enforced
//   - SacredDivider between every section
//   - WhatsApp links pre-filled with vehicle + city context
//   - Service JSON-LD schema injected in hero
//
// dataKey pattern : vehicles.<vehicleKey>  e.g. vehicles.varanasiInnova
// getVehiclesByCity() is imported from src/data/vehicles

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
  ChevronDown,
} from 'lucide-react';

import SacredDivider from '@/components/shared/SacredDivider';
import InternalLinks from '@/components/shared/InternalLinks';
import EEATSection from '@/components/shared/EEATSection';
import VehicleCard from '@/components/shared/VehicleCard';
import FAQAccordion from '@/components/templates/VehicleTemplate.faq';

import type { VehicleData } from '@/types/templates';
import { getVehiclesByCity } from '@/data/vehicles';

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Props = {
  data: VehicleData;
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function buildWALink(message: string): string {
  return `https://wa.me/918726124680?text=${encodeURIComponent(message)}`;
}

function formatPrice(amount: number, perKm = false): string {
  if (perKm) return `₹${amount.toFixed(2)}/km`;
  return `₹${amount.toLocaleString('en-IN')}`;
}

// ─── SECTION 1: VEHICLE HERO ──────────────────────────────────────────────────

function VehicleHero({ data }: { data: VehicleData }) {
  const { vehicleName, city, pricePerKm, basePrice, images, specs, slug } = data;
  const heroImage = images[0] || `/Images/vehicles/${slug?.split('/').pop() || 'vehicle'}.webp`;
  const waMsg = buildWALink(`Hi, I want to book ${vehicleName} in ${city}. Please share availability and pricing.`);

  // Service JSON-LD
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${vehicleName} on Rent in ${city}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Tirupati Travel',
      telephone: '+918726124680',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'L-2/72, Dashashwamedh Plaza, Dashashwamedh Ghat',
        addressLocality: 'Varanasi',
        addressRegion: 'Uttar Pradesh',
        postalCode: '221001',
        addressCountry: 'IN',
      },
    },
    areaServed: city,
    description: `Book ${vehicleName} on rent in ${city}. AC cab, professional driver, starting at ₹${pricePerKm}/km. 24/7 service.`,
    offers: {
      '@type': 'Offer',
      price: pricePerKm,
      priceCurrency: 'INR',
      priceSpecification: { '@type': 'UnitPriceSpecification', price: pricePerKm, unitText: 'km' },
    },
  };

  return (
    <section className="relative bg-section-dark overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={`${vehicleName} cab in ${city}`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Layered overlays for depth */}
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

      {/* Ghat skyline bottom bookend */}
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
        <nav className="flex items-center gap-1.5 text-white/50 text-sm mb-5 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={13} />
          <Link href={`/${city.toLowerCase()}`} className="hover:text-white transition-colors capitalize">
            {city}
          </Link>
          <ChevronRight size={13} />
          <span className="text-white/80">{vehicleName}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Category badge */}
            <span className="inline-flex items-center gap-1.5 bg-primary/20 border border-primary/30 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm">
              <CarFront size={12} />
              {specs.seats}-Seater · {specs.ac ? 'AC' : 'Non-AC'} · {specs.fuelType}
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
                <p className="text-white font-bold text-xl">
                  {formatPrice(pricePerKm, true)}
                </p>
              </div>
              {basePrice > 0 && (
                <div className="bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-2xl px-4 py-3">
                  <p className="text-accent/80 text-xs mb-0.5">Min. fare</p>
                  <p className="text-accent font-bold text-xl">{formatPrice(basePrice)}</p>
                </div>
              )}
              <div className="bg-success/10 backdrop-blur-sm border border-success/20 rounded-2xl px-4 py-3">
                <p className="text-white/60 text-xs mb-0.5">Availability</p>
                <p className="text-green-400 font-semibold text-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
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

            {/* Trust line */}
            <p className="mt-4 text-white/40 text-xs flex items-center gap-1.5">
              <Shield size={12} />
              No advance payment · Free cancellation · GST invoice on request
            </p>
          </div>

          {/* Right: Image card (visible on lg) */}
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
                    <Users size={14} className="text-primary" />
                    {specs.seats} seats
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={14} className="text-primary" />
                    {specs.luggage} bags
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Fuel size={14} className="text-primary" />
                    {specs.fuelType}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star size={14} className="text-accent" fill="currentColor" />
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

function SpecsCard({ data }: { data: VehicleData }) {
  const { vehicleName, city, pricePerKm, specs } = data;

  // Extract driverCharge and perDayKm from the raw vehicle data
  // These come from vehicles.ts which stores the full vehicle object
  const rawData = data as any;
  const driverCharge: number = rawData.driverCharge ?? 300;
  const perDayKm: number = rawData.perDayKm ?? 250;

  const specs_grid = [
    {
      icon: <Gauge size={22} className="text-primary" />,
      label: 'Rate per km',
      value: `₹${pricePerKm.toFixed(2)}`,
      sub: 'outstation / local',
    },
    {
      icon: <MapPin size={22} className="text-primary" />,
      label: 'Km per day',
      value: `${perDayKm} km`,
      sub: 'included in package',
    },
    {
      icon: <Users size={22} className="text-primary" />,
      label: 'Seating',
      value: `${specs.seats} persons`,
      sub: `+ driver`,
    },
    {
      icon: <Briefcase size={22} className="text-primary" />,
      label: 'Luggage',
      value: `${specs.luggage} bags`,
      sub: 'standard size',
    },
    {
      icon: <CarFront size={22} className="text-primary" />,
      label: 'Driver charge',
      value: `₹${driverCharge}/day`,
      sub: 'night halt extra',
    },
    {
      icon: <Fuel size={22} className="text-primary" />,
      label: 'Fuel type',
      value: specs.fuelType,
      sub: specs.ac ? 'Full AC' : 'Non-AC',
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
          {specs_grid.map((item, i) => (
            <div
              key={i}
              className="card-warm rounded-2xl p-4 flex flex-col items-center text-center gap-2 hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-text-secondary">{item.label}</p>
                <p className="font-bold text-secondary text-base leading-tight mt-0.5">{item.value}</p>
                <p className="text-xs text-text-light mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Inclusions note */}
        <div className="mt-8 bg-cream rounded-2xl border border-border-warm p-4 flex flex-wrap gap-4 items-center justify-center text-sm text-text-secondary">
          <span className="flex items-center gap-1.5">
            <Shield size={14} className="text-success" />
            Toll & parking extra
          </span>
          <span className="w-px h-4 bg-border hidden sm:block" />
          <span className="flex items-center gap-1.5">
            <Shield size={14} className="text-success" />
            State taxes as applicable
          </span>
          <span className="w-px h-4 bg-border hidden sm:block" />
          <span className="flex items-center gap-1.5">
            <Shield size={14} className="text-success" />
            GST invoice available
          </span>
          <span className="w-px h-4 bg-border hidden sm:block" />
          <span className="flex items-center gap-1.5">
            <Shield size={14} className="text-success" />
            Night halt: ₹300 extra
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 3: FEATURES SECTION ─────────────────────────────────────────────

function FeaturesSection({ data }: { data: VehicleData }) {
  const { vehicleName, city, features } = data;

  // Icon map for common feature strings
  const featureIconMap: Record<string, React.ReactNode> = {
    'AC': <Zap size={18} className="text-primary" />,
    'GPS': <MapPin size={18} className="text-primary" />,
    'Music system': <Star size={18} className="text-primary" />,
    'First aid kit': <Shield size={18} className="text-primary" />,
    'Professional driver': <Users size={18} className="text-primary" />,
    '24/7 service': <Clock size={18} className="text-primary" />,
    'Toll-free helpline': <Phone size={18} className="text-primary" />,
    'Clean & sanitised': <Shield size={18} className="text-primary" />,
  };

  // Always include these 4 core USPs regardless of feature array
  const coreUSPs = [
    {
      icon: <Clock size={28} className="text-primary" />,
      title: '24/7 Availability',
      desc: `Your ${vehicleName} is available round the clock in ${city}. Early morning pickups, late-night drops — always on time.`,
    },
    {
      icon: <Shield size={28} className="text-primary" />,
      title: 'No Hidden Charges',
      desc: 'What we quote is what you pay. Toll, parking, and state taxes are always disclosed upfront — zero surprises.',
    },
    {
      icon: <Users size={28} className="text-primary" />,
      title: 'Expert Local Drivers',
      desc: `Our drivers know every road, temple, and shortcut in ${city} and beyond. Verified, experienced, and courteous.`,
    },
    {
      icon: <Star size={28} className="text-primary" fill="none" />,
      title: '4.8★ Rated Service',
      desc: 'Thousands of satisfied pilgrims and travellers. Read our reviews — our drivers are rated among the best in the region.',
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
        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-2.5 justify-center mb-10">
            {features.map((feature, i) => (
              <span
                key={i}
                className="flex items-center gap-2 bg-white border border-border-warm rounded-full px-4 py-2 text-sm font-medium text-text-secondary shadow-sm"
              >
                {featureIconMap[feature] || <Shield size={14} className="text-primary" />}
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
                <span className="group-hover:[&>svg]:text-white transition-colors duration-300">
                  {usp.icon}
                </span>
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

// ─── SECTION 4: BOOKING CTA BANNER ───────────────────────────────────────────

function BookingCTABanner({ data }: { data: VehicleData }) {
  const { vehicleName, city, pricePerKm } = data;
  const waMsg = buildWALink(
    `Hi, I want to book ${vehicleName} in ${city}. Please confirm availability and share the price breakdown.`
  );

  return (
    <section className="relative bg-section-dark overflow-hidden section-pad-sm">
      {/* Sacred gradient overlay */}
      <div className="gradient-sacred absolute inset-0" />

      {/* Mandala watermark */}
      <div
        className="mandala-watermark absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 text-white"
        style={{ opacity: 0.08 }}
        aria-hidden="true"
      >
        <Image src="/svg/corner-mandala.svg" alt="" fill className="object-contain" />
      </div>

      <div className="relative container-site">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left text */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
              Book {vehicleName} in {city} Now
            </h2>
            <p className="text-white/70 text-base max-w-xl">
              Starting at just{' '}
              <span className="text-accent font-bold">₹{pricePerKm.toFixed(2)}/km</span>.
              AC vehicle · Experienced driver · 24/7 support · No advance payment.
            </p>
          </div>

          {/* Right CTAs */}
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a
              href="tel:+918726124680"
              className="btn-gold flex items-center gap-2 px-7 py-3.5 text-base font-semibold shadow-gold"
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

// ─── SECTION 5: GENERIC FAQ (city-injected) ───────────────────────────────────

function buildGenericFAQs(vehicleName: string, city: string, pricePerKm: number) {
  return [
    {
      q: `What is the ${vehicleName} cab fare in ${city}?`,
      a: `The ${vehicleName} cab fare in ${city} starts at ₹${pricePerKm.toFixed(2)} per km. For outstation trips, a minimum distance of 250 km per day is applicable. Driver allowance of ₹300/day is charged separately. Toll, parking, and state taxes are extra. Call 8726124680 for an exact quote for your route.`,
    },
    {
      q: `Is the ${vehicleName} available for outstation trips from ${city}?`,
      a: `Yes, our ${vehicleName} is available for all outstation trips from ${city} — including one-way, round trip, and multi-day tours. Popular routes include ${city} to Ayodhya, ${city} to Allahabad, ${city} to Lucknow, ${city} to Gaya, and ${city} to Delhi. Book by calling 8726124680.`,
    },
    {
      q: `How do I book a ${vehicleName} cab in ${city}?`,
      a: `You can book a ${vehicleName} cab in ${city} in three ways: (1) Call us directly at 8726124680 for instant confirmation, (2) WhatsApp your trip details to +91 8726124680, or (3) fill the booking form on this page. We confirm within minutes and send driver details before your trip.`,
    },
    {
      q: `Does the ${vehicleName} come with a professional driver?`,
      a: `Yes. Every ${vehicleName} booking with Tirupati Travel includes a verified, experienced local driver. Our drivers know ${city} and all major pilgrimage routes thoroughly. They are punctual, courteous, and certified. Driver allowance is ₹300/day; night halt charges apply if the trip extends overnight.`,
    },
    {
      q: `Is the ${vehicleName} fully air-conditioned?`,
      a: `Yes, all ${vehicleName} vehicles in our fleet are fully air-conditioned with working AC. The vehicles are regularly maintained, cleaned, and sanitised. For outstation trips, the AC may be turned off on steep mountain roads per standard industry practice.`,
    },
    {
      q: `What is included in the ${vehicleName} cab fare in ${city}?`,
      a: `The fare includes the vehicle, fuel, and driver for the agreed distance. It does NOT include: toll charges, parking fees, state border taxes, driver's food & accommodation on multi-day trips, or night halt charges. All these are paid directly or reimbursed at actuals.`,
    },
  ];
}

// ─── SECTION 6: RELATED VEHICLES ──────────────────────────────────────────────

function RelatedVehicles({ data }: { data: VehicleData }) {
  const { vehicleName, city } = data;
  const cityKey = city.toLowerCase();

  // Call getVehiclesByCity() and filter out current vehicle
  const allCityVehicles = getVehiclesByCity(cityKey);
  const currentId = (data as any).id as string | undefined;
  const related = allCityVehicles.filter((v) => v.id !== currentId).slice(0, 4);

  if (!related.length) return null;

  return (
    <section className="bg-section-white section-pad">
      <div className="container-site">
        <div className="text-center mb-10">
          <h2 className="section-title">Other Vehicles in {city}</h2>
          <p className="section-sub">Choose the right cab for your trip size and budget</p>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0 snap-x snap-mandatory sm:snap-none">
          {related.map((vehicle) => (
            <div key={vehicle.id} className="flex-shrink-0 w-72 sm:w-auto snap-start">
              <VehicleCard vehicle={vehicle} city={city} />
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-8 text-center">
          <Link
            href={`/${cityKey}`}
            className="btn-outline inline-flex items-center gap-2 px-6 py-3"
          >
            View All {city} Vehicles
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 7: QUICK BOOKING STRIP ──────────────────────────────────────────
// A compact sticky-style booking strip before internal links

function QuickBookingStrip({ data }: { data: VehicleData }) {
  const { vehicleName, city } = data;
  return (
    <div className="bg-cream border-y border-border-warm py-4">
      <div className="container-site flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
            <CarFront size={18} className="text-primary" />
          </div>
          <div>
            <p className="font-semibold text-secondary text-sm">{vehicleName} · {city}</p>
            <p className="text-xs text-text-secondary">Ready for immediate booking</p>
          </div>
        </div>
        <div className="flex gap-2">
          <a
            href="tel:+918726124680"
            className="btn-primary text-sm px-5 py-2.5 flex items-center gap-1.5"
          >
            <Phone size={14} /> Call Now
          </a>
          <a
            href={buildWALink(`Book ${vehicleName} in ${city}`)}
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
  const { vehicleName, city, pricePerKm } = data;

  // Build generic FAQs with city + vehicle injection
  const faqs = buildGenericFAQs(vehicleName, city, pricePerKm);

  // FAQPage JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      {/* ── 1. Hero ── */}
      <VehicleHero data={data} />

      <SacredDivider variant="lotus" />

      {/* ── 2. Specs Card ── */}
      <SpecsCard data={data} />

      <SacredDivider variant="wave" />

      {/* ── 3. Features / Why Book ── */}
      <FeaturesSection data={data} />

      {/* ── EEAT trust signals ── */}
      <EEATSection />

      <SacredDivider variant="mandala" />

      {/* ── 4. Booking CTA Banner ── */}
      <BookingCTABanner data={data} />

      <SacredDivider variant="wave" />

      {/* ── 5. FAQ (client accordion) ── */}
      <section className="bg-section-white section-pad">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="container-site max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title">
              {vehicleName} in {city} — FAQs
            </h2>
            <p className="section-sub">Common questions about pricing, booking & the vehicle</p>
          </div>
          {/* FAQAccordion is 'use client' — isolated to avoid marking template as client */}
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <SacredDivider variant="lotus" />

      {/* ── 6. Related Vehicles ── */}
      <RelatedVehicles data={data} />

      {/* ── Quick booking strip ── */}
      <QuickBookingStrip data={data} />

      {/* ── 7. Internal SEO links ── */}
      <InternalLinks template="VehicleTemplate" data={data} />
    </>
  );
}
