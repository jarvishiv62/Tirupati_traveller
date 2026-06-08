// src/components/templates/CabServiceTemplate.tsx
// Full-page template for all city cab service pages:
//   one-way, round-trip, full-day, half-day, call-taxi,
//   drop, tourist-cab, outstation-cab, corporate-cab
//
// Section order:
//   1. ServiceHero      — H1 + starting price badge + price pills
//   2. HowItWorksSection— 3-step numbered circles (data or static fallback)
//   3. VehicleOptions   — vehicles from getVehiclesByCity() + toCardData adapter
//   4. PricingSection   — PricingTable (conditional on data.pricingRows)
//   5. WhyBookSection   — 5 USP cards
//   6. EEATSection      — trust signals
//   7. CTABanner        — dark full-width booking banner
//   8. FAQSection       — interactive FAQAccordion + JSON-LD
//   9. InternalLinks    — SEO cross-links (conditional on data.internalLinks)
//
// Server Component — no 'use client' needed.
// FAQAccordion is a client component imported from shared/; this is fine.
//
// Changes from previous version:
//   - data.vehicles (VehicleCardData[]) removed from data contract.
//     Vehicles are now fetched via getVehiclesByCity(data.city) + toCardData().
//   - citySlug is derived from data.city.toLowerCase() (not from data).
//   - howItWorks is optional; static fallback used when absent.
//   - FAQ section now uses <FAQAccordion> instead of static card divs.
//   - CabServiceData imported from @/types/templates (no inline type).
//   - EEATSection added between WhyBook and CTABanner.
//   - PricingSection conditional on data.pricingRows?.length.
//   - SectionHeader now supports light= prop for dark backgrounds.

import Image from 'next/image';
import {
  Phone,
  CheckCircle,
  Clock,
  ShieldCheck,
  Receipt,
  Star,
} from 'lucide-react';

import SacredDivider from '@/components/shared/SacredDivider';
import SectionHeader from '@/components/shared/SectionHeader';
import VehicleCard from '@/components/shared/VehicleCard';
import PricingTable from '@/components/shared/PricingTable';
import FAQAccordion from '@/components/shared/FAQAccordion';
import InternalLinks from '@/components/shared/InternalLinks';
import EEATSection from '@/components/shared/EEATSection';

import { getVehiclesByCity } from '@/data/vehicles';
import { toCardData } from '@/lib/vehicleAdapter';
import { buildWALink } from '@/lib/utils';

import type { CabServiceData } from '@/types/templates';

// ─── LABEL MAP ────────────────────────────────────────────────────────────────

const SERVICE_LABELS: Record<CabServiceData['serviceType'], string> = {
  'one-way':    'One Way Cab',
  'round-trip': 'Round Trip Cab',
  'full-day':   'Full Day Taxi',
  'half-day':   'Half Day Taxi',
  'call-taxi':  'Call Taxi',
  'drop':       'Drop Taxi Service',
  'tourist':    'Tourist Cab',
  'outstation': 'Outstation Cab',
  'corporate':  'Corporate Cab Service',
};

// ─── STATIC FALLBACKS ─────────────────────────────────────────────────────────

/**
 * Default 3-step booking flow used when data.howItWorks is absent.
 * Service-specific steps can override this via data.howItWorks.
 */
const DEFAULT_HOW_IT_WORKS = [
  {
    step:  1,
    title: 'Call or WhatsApp',
    desc:  'Share your pickup, destination & travel date. We respond instantly.',
  },
  {
    step:  2,
    title: 'Cab Confirmed',
    desc:  'Your cab and driver details are confirmed within minutes.',
  },
  {
    step:  3,
    title: 'Journey in Comfort',
    desc:  'AC cab at your door, on time. Pay only after a safe journey.',
  },
] as const;

const USP_LIST = [
  {
    icon:  Clock,
    title: '24/7 Availability',
    desc:  'Early morning airport drops to late-night transfers — always available.',
  },
  {
    icon:  ShieldCheck,
    title: 'AC Verified Vehicles',
    desc:  'Clean, well-maintained AC cabs with GPS and first aid kits.',
  },
  {
    icon:  CheckCircle,
    title: 'No Hidden Charges',
    desc:  'The fare quoted is the fare you pay. Transparent pricing, always.',
  },
  {
    icon:  Star,
    title: 'Experienced Drivers',
    desc:  'Local professionals with deep pilgrimage route knowledge.',
  },
  {
    icon:  Receipt,
    title: 'GST Invoice',
    desc:  'Proper GST bill provided on request for business travel.',
  },
] as const;

// ─── SECTION 1: SERVICE HERO ──────────────────────────────────────────────────

function ServiceHero({
  data,
  serviceLabel,
  waLink,
}: {
  data:         CabServiceData;
  serviceLabel: string;
  waLink:       string;
}) {
  return (
    <section className="bg-section-dark relative overflow-hidden py-16 md:py-20">
      {/* Mandala watermark */}
      <div
        className="mandala-watermark absolute right-0 top-0 w-72 h-72 text-white"
        style={{ opacity: 0.05 }}
        aria-hidden="true"
      >
        <Image
          src="/svg/corner-mandala.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="container-site relative z-10">
        {/* Breadcrumb */}
        <nav className="text-white/50 text-sm mb-6 flex items-center gap-2 flex-wrap">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span aria-hidden="true">/</span>
          <a
            href={`/${data.city.toLowerCase()}`}
            className="hover:text-white transition-colors capitalize"
          >
            {data.city}
          </a>
          <span aria-hidden="true">/</span>
          <span className="text-white/80">{serviceLabel}</span>
        </nav>

        <div className="max-w-3xl">
          {/* Starting price badge */}
          <div className="inline-flex items-center gap-2 bg-gold text-secondary text-sm font-bold px-4 py-1.5 rounded-full mb-5">
            <span>Starting ₹{data.pricing.sedan.toLocaleString('en-IN')}</span>
            <span className="text-secondary/60" aria-hidden="true">|</span>
            <span>Sedan · AC</span>
          </div>

          {/* H1 — exactly one per page */}
          <h1 className="page-heading mb-4 leading-tight">
            {serviceLabel} in {data.city}
          </h1>

          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">
            {data.heroTagline}
          </p>

          {/* Quick price pills — Sedan / Ertiga / Innova */}
          <div className="flex flex-wrap gap-3 mb-8">
            {(
              [
                { label: 'Sedan',  price: data.pricing.sedan  },
                { label: 'Ertiga', price: data.pricing.ertiga },
                { label: 'Innova', price: data.pricing.innova },
              ] as const
            ).map(({ label, price }) => (
              <div
                key={label}
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-center"
              >
                <div className="text-white/60 text-xs">{label}</div>
                <div className="text-white font-bold font-serif text-lg leading-tight">
                  ₹{price.toLocaleString('en-IN')}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:8726124680"
              className="btn-primary px-8 py-3.5 text-base text-center flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call: 87261 24680
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-8 py-3.5 text-base text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 2: HOW IT WORKS ──────────────────────────────────────────────────

function HowItWorksSection({
  steps,
}: {
  steps: { step: number; title: string; desc: string }[];
}) {
  return (
    <section className="bg-section-white section-pad">
      <div className="container-site">
        <SectionHeader
          title="How It Works"
          subtitle="Book your cab in 3 simple steps"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/*
            Connector line — desktop only.
            top: 2.5rem = centre of the w-20 circles.
            left/right: calc(1/6 of grid width + half-circle radius)
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

          {steps.map(({ step, title, desc }) => (
            <div key={step} className="flex flex-col items-center text-center">
              {/* Numbered circle — w-20 (5rem) matches CityLandingTemplate */}
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-float mb-5 flex-shrink-0 relative z-10">
                <span className="font-serif font-bold text-white text-2xl">
                  {String(step).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-serif font-bold text-secondary text-xl mb-2">
                {title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 3: VEHICLE OPTIONS ───────────────────────────────────────────────
//
// Vehicles are fetched via getVehiclesByCity(city) and converted via toCardData().
// vehiclePageHref links each card to the vehicle's dedicated page.
// Shows max 3 vehicles (3-col grid on desktop).
// Returns null if no vehicles are registered for this city yet.

function VehicleOptionsSection({ city }: { city: string }) {
  const citySlug     = city.toLowerCase();
  const cityVehicles = getVehiclesByCity(city);

  if (!cityVehicles.length) return null;

  const display = cityVehicles.slice(0, 3);

  return (
    <section className="bg-section-cream texture-cream section-pad">
      <div className="container-site">
        <SectionHeader
          title={`Available Vehicles in ${city}`}
          subtitle="Choose the right cab for your journey"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
      </div>
    </section>
  );
}

// ─── SECTION 4: PRICING TABLE ─────────────────────────────────────────────────
// Only rendered when data.pricingRows is provided and non-empty.

function PricingSection({
  data,
  serviceLabel,
}: {
  data:         CabServiceData;
  serviceLabel: string;
}) {
  if (!data.pricingRows?.length) return null;

  return (
    <section className="bg-section-white section-pad">
      <div className="container-site">
        <SectionHeader
          title="Fare &amp; Pricing"
          subtitle="Transparent pricing — no hidden charges"
        />

        <div className="max-w-3xl mx-auto">
          <PricingTable
            rows={data.pricingRows}
            serviceLabel={serviceLabel}
            city={data.city}
            note={
              data.pricingNote ??
              'Toll, parking & state taxes charged at actual. Driver allowance included.'
            }
          />
        </div>

        {/* Inclusions checklist */}
        <div className="mt-10 max-w-3xl mx-auto">
          <h3 className="font-serif font-bold text-text-primary text-lg mb-4">
            What&apos;s Included
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {data.inclusions.map(item => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-text-secondary text-sm"
              >
                <CheckCircle
                  size={16}
                  className="text-primary flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 4b: INCLUSIONS ONLY ─────────────────────────────────────────────
// When pricingRows is absent, still show inclusions list in a lighter card.

function InclusionsSection({ inclusions }: { inclusions: string[] }) {
  if (!inclusions.length) return null;

  return (
    <section className="bg-section-white section-pad-sm">
      <div className="container-site">
        <div className="max-w-3xl mx-auto card-warm rounded-2xl p-6">
          <h3 className="font-serif font-bold text-text-primary text-lg mb-4">
            What&apos;s Included
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {inclusions.map(item => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-text-secondary text-sm"
              >
                <CheckCircle
                  size={16}
                  className="text-primary flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 5: WHY BOOK ──────────────────────────────────────────────────────

function WhyBookSection() {
  return (
    <section className="bg-section-cream texture-cream section-pad">
      <div className="container-site">
        <SectionHeader
          title="Why Book With Us"
          subtitle="Trusted by 50,000+ pilgrims across Varanasi, Ayodhya and beyond"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {USP_LIST.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="card-warm rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-temple transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Icon size={22} className="text-primary" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h4 className="font-sans font-semibold text-text-primary text-sm mb-1.5">
                {title}
              </h4>
              <p className="text-text-light text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 7: CTA BANNER ───────────────────────────────────────────────────

function CTABanner({
  serviceLabel,
  waLink,
}: {
  serviceLabel: string;
  waLink:       string;
}) {
  return (
    <section className="relative bg-section-dark overflow-hidden section-pad-sm">
      {/* Sacred gradient overlay */}
      <div className="gradient-sacred absolute inset-0" />

      {/* Mandala watermark */}
      <div
        className="mandala-watermark absolute right-6 top-1/2 -translate-y-1/2 w-64 h-64 text-white"
        style={{ opacity: 0.07 }}
        aria-hidden="true"
      >
        <Image src="/svg/corner-mandala.svg" alt="" fill className="object-contain" />
      </div>

      <div className="relative container-site text-center">
        <h2 className="font-serif font-bold text-2xl md:text-3xl text-white mb-3">
          Book Your {serviceLabel} Now
        </h2>
        <p className="text-white/75 text-base md:text-lg mb-8 max-w-xl mx-auto">
          Instant confirmation &bull; Clean AC cab &bull; Professional driver &bull; No hidden charges
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:8726124680"
            className="btn-gold px-8 py-3.5 text-base text-center flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            Call: 87261 24680
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-8 py-3.5 text-base text-center"
          >
            WhatsApp to Book
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 8: FAQ ───────────────────────────────────────────────────────────
// Replaces the previous static card layout.
// FAQAccordion is a client component — fine to use in a server template.
// JSON-LD FAQPage schema injected inline.

function FAQSection({
  faqs,
  serviceLabel,
  city,
}: {
  faqs:         CabServiceData['faqs'];
  serviceLabel: string;
  city:         string;
}) {
  if (!faqs.length) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type':         'Question',
      name:            q,
      acceptedAnswer:  { '@type': 'Answer', text: a },
    })),
  };

  return (
    <section className="bg-section-white section-pad">
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="container-site">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle={`Common questions about ${serviceLabel} in ${city}`}
        />

        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  );
}

// ─── MAIN TEMPLATE ────────────────────────────────────────────────────────────

export default function CabServiceTemplate({ data }: { data: CabServiceData }) {
  const serviceLabel = SERVICE_LABELS[data.serviceType];
  const waLink       = buildWALink(
    `Hi, I want to book a ${serviceLabel} in ${data.city}. Please share details and availability.`,
  );

  // Use service-specific steps if provided, otherwise static 3-step fallback
  const howItWorksSteps = data.howItWorks?.length
    ? data.howItWorks
    : DEFAULT_HOW_IT_WORKS;

  // Determines whether to show the PricingTable vs the simpler inclusions card
  const hasPricingRows = !!(data.pricingRows && data.pricingRows.length > 0);

  return (
    <>
      {/* ── 1. Hero ── */}
      <ServiceHero data={data} serviceLabel={serviceLabel} waLink={waLink} />

      <SacredDivider variant="lotus" />

      {/* ── 2. How It Works  [white] ── */}
      <HowItWorksSection steps={howItWorksSteps} />

      <SacredDivider variant="wave" />

      {/* ── 3. Vehicle Options  [cream] — uses getVehiclesByCity + toCardData ── */}
      <VehicleOptionsSection city={data.city} />

      <SacredDivider variant="wave" />

      {/*
        ── 4. Pricing  [white] (conditional) or Inclusions card ──
        PricingSection renders PricingTable + inclusions when pricingRows provided.
        InclusionsSection renders a simpler checklist when pricingRows is absent.
      */}
      {hasPricingRows
        ? <PricingSection data={data} serviceLabel={serviceLabel} />
        : <InclusionsSection inclusions={data.inclusions} />
      }

      <SacredDivider variant="wave" />

      {/* ── 5. Why Book  [cream] ── */}
      <WhyBookSection />

      {/* ── 6. EEAT trust signals ── */}
      <EEATSection />

      <SacredDivider variant="mandala" />

      {/* ── 7. CTA Banner  [dark + gradient-sacred] ── */}
      <CTABanner serviceLabel={serviceLabel} waLink={waLink} />

      {/* ── 8. FAQ  [white] — interactive accordion + JSON-LD ── */}
      {data.faqs.length > 0 && (
        <>
          <SacredDivider variant="wave" />
          <FAQSection faqs={data.faqs} serviceLabel={serviceLabel} city={data.city} />
        </>
      )}

      {/* ── 9. Internal SEO Links (conditional) ── */}
      {data.internalLinks && data.internalLinks.length > 0 && (
        <>
          <SacredDivider variant="gold-line" />
          <InternalLinks
            links={data.internalLinks}
            heading={`More Services in ${data.city}`}
          />
        </>
      )}
    </>
  );
}