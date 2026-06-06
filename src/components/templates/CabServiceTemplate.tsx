// src/components/templates/CabServiceTemplate.tsx
// Full-page template for all city cab service pages:
//   one-way, round-trip, full-day, half-day, call-taxi,
//   drop, tourist-cab, outstation-cab, corporate-cab
//
// Sections:
//   1. ServiceHero     — H1 + starting price badge
//   2. HowItWorks      — 3-step saffron numbered circles
//   3. VehicleOptions  — VehicleCard grid for this city
//   4. PricingTable    — card-warm table per vehicle type
//   5. WhyBook         — 5 USP cards
//   6. BookingCTA      — gradient-sacred full-width banner
//   7. InternalLinks   — SEO cross-links to other services + vehicle pages
//
// Server Component — no 'use client' needed.

import Image from "next/image";
import {
  Phone,
  CheckCircle,
  Clock,
  MapPin,
  ShieldCheck,
  Receipt,
  Star,
} from "lucide-react";
import SacredDivider from "@/components/shared/SacredDivider";
import SectionHeader from "@/components/shared/SectionHeader";
import VehicleCard, {
  type VehicleCardData,
} from "@/components/shared/VehicleCard";
import PricingTable, {
  type PricingRow,
} from "@/components/shared/PricingTable";
import InternalLinks from "@/components/shared/InternalLinks";
import { buildWALink } from "@/lib/utils";

// ── Data contract ─────────────────────────────────────────────────────────────
export type CabServiceType =
  | "one-way"
  | "round-trip"
  | "full-day"
  | "half-day"
  | "call-taxi"
  | "drop"
  | "tourist"
  | "outstation"
  | "corporate";

export interface CabServiceData {
  serviceType: CabServiceType;
  city: string; // display name e.g. 'Varanasi'
  citySlug: string; // URL slug e.g. 'varanasi'
  heroTagline: string; // short hero description
  pricing: {
    sedan: number;
    ertiga: number;
    innova: number;
  };
  pricingRows: PricingRow[]; // detailed rows for PricingTable
  pricingNote?: string;
  inclusions: string[];
  howItWorks: {
    step: number;
    title: string;
    desc: string;
  }[];
  vehicles: VehicleCardData[];
  internalLinks: {
    label: string;
    href: string;
  }[];
  faqs: { q: string; a: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
}

// ── Label helpers ─────────────────────────────────────────────────────────────
const SERVICE_LABELS: Record<CabServiceType, string> = {
  "one-way": "One Way Cab",
  "round-trip": "Round Trip Cab",
  "full-day": "Full Day Taxi",
  "half-day": "Half Day Taxi",
  "call-taxi": "Call Taxi",
  drop: "Drop Taxi Service",
  tourist: "Tourist Cab",
  outstation: "Outstation Cab",
  corporate: "Corporate Cab Service",
};

const USP_LIST = [
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Book anytime — early morning airport drops to late night transfers.",
  },
  {
    icon: ShieldCheck,
    title: "AC Verified Vehicles",
    desc: "Clean, well-maintained AC cabs with GPS and first aid kits.",
  },
  {
    icon: CheckCircle,
    title: "No Hidden Charges",
    desc: "The fare quoted is the fare you pay. Transparent pricing always.",
  },
  {
    icon: Star,
    title: "Experienced Drivers",
    desc: "Local professionals with deep pilgrimage route knowledge.",
  },
  {
    icon: Receipt,
    title: "GST Invoice",
    desc: "Proper GST bill provided on request for business travel.",
  },
];

// ── FAQ JSON-LD builder ───────────────────────────────────────────────────────
function buildFaqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function CabServiceTemplate({ data }: { data: CabServiceData }) {
  const serviceLabel = SERVICE_LABELS[data.serviceType];
  const pageTitle = `${serviceLabel} in ${data.city}`;
  const waLink = buildWALink(
    `Hi, I want to book a ${serviceLabel} in ${data.city}. Please share details and availability.`,
  );

  return (
    <>
      {/* FAQ JSON-LD */}
      {data.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildFaqJsonLd(data.faqs)),
          }}
        />
      )}

      {/* ── 1. SERVICE HERO ─────────────────────────────────────────────────── */}
      <section className="bg-section-dark relative overflow-hidden py-16 md:py-20">
        {/* Mandala watermark */}
        <div
          className="mandala-watermark absolute right-0 top-0 w-72 h-72 text-white"
          style={{ opacity: 0.05 }}
          aria-hidden="true"
        >
          <Image
            src="/svg/ghats/corner-mandala.svg"
            alt=""
            fill
            className="object-contain animate-mandala-slow"
          />
        </div>

        <div className="container-site relative z-10">
          {/* Breadcrumb */}
          <nav className="text-white/50 text-sm mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <span>/</span>
            <a
              href={`/${data.citySlug}`}
              className="hover:text-white transition-colors capitalize"
            >
              {data.city}
            </a>
            <span>/</span>
            <span className="text-white/80">{serviceLabel}</span>
          </nav>

          <div className="max-w-3xl">
            {/* Starting price badge */}
            <div className="inline-flex items-center gap-2 bg-gold text-secondary text-sm font-bold px-4 py-1.5 rounded-full mb-5">
              <span>
                Starting ₹{data.pricing.sedan.toLocaleString("en-IN")}
              </span>
              <span className="text-secondary/60">|</span>
              <span>Sedan / AC</span>
            </div>

            {/* H1 — exactly one per page */}
            <h1 className="page-heading mb-4 leading-tight">{pageTitle}</h1>

            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">
              {data.heroTagline}
            </p>

            {/* Quick price pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { label: "Sedan", price: data.pricing.sedan },
                { label: "Ertiga", price: data.pricing.ertiga },
                { label: "Innova", price: data.pricing.innova },
              ].map(({ label, price }) => (
                <div
                  key={label}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-center"
                >
                  <div className="text-white/60 text-xs">{label}</div>
                  <div className="text-white font-bold font-serif text-lg leading-tight">
                    ₹{price.toLocaleString("en-IN")}
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

      <SacredDivider variant="lotus" />

      {/* ── 2. HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="bg-section-white section-pad">
        <div className="container-site">
          <SectionHeader
            title="How It Works"
            subtitle="Book your cab in 3 simple steps"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connector line — desktop only */}
            <div
              className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-primary/20"
              aria-hidden="true"
            />

            {data.howItWorks.map(({ step, title, desc }) => (
              <div
                key={step}
                className="flex flex-col items-center text-center relative"
              >
                {/* Numbered circle */}
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-float mb-5 flex-shrink-0 z-10">
                  <span className="font-serif font-bold text-white text-2xl">
                    {step}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-text-primary text-lg mb-2">
                  {title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SacredDivider variant="wave" />

      {/* ── 3. VEHICLE OPTIONS ──────────────────────────────────────────────── */}
      <section className="bg-section-cream section-pad">
        <div className="container-site">
          <SectionHeader
            title={`Available Vehicles in ${data.city}`}
            subtitle="Choose the right cab for your journey"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {data.vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                city={data.city}
                citySlug={data.citySlug}
                showCTA={true}
              />
            ))}
          </div>
        </div>
      </section>

      <SacredDivider variant="wave" />

      {/* ── 4. PRICING TABLE ────────────────────────────────────────────────── */}
      <section className="bg-section-white section-pad">
        <div className="container-site">
          <SectionHeader
            title="Fare & Pricing"
            subtitle="Transparent pricing — no hidden charges"
          />

          <div className="max-w-3xl mx-auto">
            <PricingTable
              rows={data.pricingRows}
              serviceLabel={serviceLabel}
              city={data.city}
              note={
                data.pricingNote ??
                "Toll, parking, and state taxes charged at actual where applicable. Driver allowance included."
              }
            />
          </div>

          {/* Inclusions */}
          <div className="mt-8 max-w-3xl mx-auto">
            <h3 className="font-serif font-bold text-text-primary text-lg mb-4">
              What&apos;s Included
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {data.inclusions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-text-secondary text-sm"
                >
                  <CheckCircle
                    size={16}
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SacredDivider variant="mandala" />

      {/* ── 5. WHY BOOK ─────────────────────────────────────────────────────── */}
      <section className="bg-section-cream section-pad">
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
                  <Icon size={22} className="text-primary" strokeWidth={1.5} />
                </div>
                <h4 className="font-sans font-semibold text-text-primary text-sm mb-1.5">
                  {title}
                </h4>
                <p className="text-text-light text-xs leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. BOOKING CTA ──────────────────────────────────────────────────── */}
      <section className="gradient-sacred relative overflow-hidden py-14 md:py-16">
        <div
          className="mandala-watermark absolute right-6 top-1/2 -translate-y-1/2 w-64 h-64 text-white"
          style={{ opacity: 0.07 }}
          aria-hidden="true"
        >
          <Image
            src="/svg/ghats/corner-mandala.svg"
            alt=""
            fill
            className="object-contain animate-mandala-slow"
          />
        </div>
        <div className="container-site relative z-10 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-3">
            Book Your {serviceLabel} Now
          </h2>
          <p className="text-white/75 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Instant confirmation &bull; Clean AC cab &bull; Professional driver
            &bull; No hidden charges
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

      {/* ── 7. FAQ ──────────────────────────────────────────────────────────── */}
      {data.faqs.length > 0 && (
        <>
          <SacredDivider variant="wave" />
          <section className="bg-section-white section-pad">
            <div className="container-site">
              <SectionHeader
                title="Frequently Asked Questions"
                subtitle={`Common questions about ${serviceLabel} in ${data.city}`}
              />
              <div className="max-w-3xl mx-auto space-y-3">
                {data.faqs.map((faq) => (
                  <div key={faq.q} className="card-warm rounded-xl p-5">
                    <h3 className="font-sans font-semibold text-text-primary text-sm mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── 8. INTERNAL LINKS ───────────────────────────────────────────────── */}
      {data.internalLinks.length > 0 && (
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
