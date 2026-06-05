// src/components/templates/LocalServiceTemplate.tsx
// Full-page template for local sightseeing + corporate cab service pages:
//   - varanasi/varanasi-local-sightseeing-cab
//   - ayodhya/ayodhya-local-sightseeing-cab
//   - varanasi/corporate-cab-service-varanasi
//   - ayodhya/corporate-cab-service-ayodhya
//   - allahabad/corporate-cab-service-allahabad
//
// Sections:
//   1. ServiceHero      — H1 + hourly package starting badges
//   2. HourlyPackages   — package cards (4hr, 6hr, 8hr, 12hr)
//   3. PlacesGrid       — places covered / popular stops
//   4. VehicleOptions   — VehicleCard grid
//   5. PricingTable     — per-vehicle package breakdown
//   6. BookingCTA       — gradient-sacred banner
//   7. InternalLinks    — related pages
//
// Server Component.

import Image from "next/image";
import { Phone, MapPin, Clock, CheckCircle } from "lucide-react";
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
export interface HourlyPackage {
  hours: number;
  km: number;
  price: number; // sedan starting price
  label?: string; // e.g. 'Most Popular'
}

export interface LocalPlace {
  name: string;
  distance: string; // e.g. '2 km from city centre'
  description?: string;
}

export interface LocalServiceData {
  city: string;
  citySlug: string;
  serviceType: "local-sightseeing" | "corporate";
  heroTagline: string;
  hourlyPackages: HourlyPackage[];
  places: LocalPlace[];
  vehicles: VehicleCardData[];
  pricingRows: PricingRow[];
  pricingNote?: string;
  inclusions: string[];
  internalLinks: { label: string; href: string }[];
  faqs: { q: string; a: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
}

// ── FAQ JSON-LD ───────────────────────────────────────────────────────────────
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
export default function LocalServiceTemplate({
  data,
}: {
  data: LocalServiceData;
}) {
  const isSightseeing = data.serviceType === "local-sightseeing";
  const serviceLabel = isSightseeing
    ? `${data.city} Local Sightseeing Cab`
    : `Corporate Cab Service ${data.city}`;
  const waLink = buildWALink(
    `Hi, I want to book a ${serviceLabel}. Please share package details and availability.`,
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

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-section-dark relative overflow-hidden py-16 md:py-20">
        <div
          className="mandala-watermark absolute right-0 top-0 w-72 h-72 text-white"
          style={{ opacity: 0.05 }}
          aria-hidden="true"
        >
          <Image
            src="/svg/corner-mandala.svg"
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
              className="hover:text-white transition-colors"
            >
              {data.city}
            </a>
            <span>/</span>
            <span className="text-white/80">{serviceLabel}</span>
          </nav>

          <div className="max-w-3xl">
            {/* Package badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {data.hourlyPackages.slice(0, 3).map((pkg) => (
                <div
                  key={pkg.hours}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-center"
                >
                  <div className="text-white/60 text-xs">
                    {pkg.hours} hrs / {pkg.km} km
                  </div>
                  <div className="text-white font-bold font-serif text-base leading-tight">
                    ₹{pkg.price.toLocaleString("en-IN")}
                  </div>
                </div>
              ))}
            </div>

            {/* H1 */}
            <h1 className="page-heading mb-4 leading-tight">{serviceLabel}</h1>

            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">
              {data.heroTagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:8726124680"
                className="btn-primary px-8 py-3.5 text-base flex items-center justify-center gap-2"
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

      {/* ── 2. HOURLY PACKAGES ──────────────────────────────────────────────── */}
      <section className="bg-section-white section-pad">
        <div className="container-site">
          <SectionHeader
            title={
              isSightseeing ? "Sightseeing Packages" : "Corporate Cab Packages"
            }
            subtitle="Flexible hourly packages to suit your schedule"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.hourlyPackages.map((pkg) => (
              <div
                key={pkg.hours}
                className={`card-warm rounded-2xl p-5 text-center hover:shadow-temple transition-shadow duration-300 relative ${
                  pkg.label ? "border-2 border-primary" : ""
                }`}
              >
                {pkg.label && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      {pkg.label}
                    </span>
                  </div>
                )}

                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Clock size={22} className="text-primary" strokeWidth={1.5} />
                </div>

                <div className="font-serif font-bold text-text-primary text-2xl mb-0.5">
                  {pkg.hours} Hours
                </div>
                <div className="text-text-light text-sm mb-3">
                  {pkg.km} km included
                </div>

                <div className="text-primary font-bold font-serif text-xl mb-4">
                  ₹{pkg.price.toLocaleString("en-IN")}
                  <span className="text-text-light text-xs font-sans font-normal ml-1">
                    / sedan
                  </span>
                </div>

                <a
                  href={buildWALink(
                    `Hi, I want to book a ${pkg.hours}-hour ${serviceLabel} in ${data.city}. Please confirm availability.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm px-4 py-2 w-full text-center block"
                >
                  Book This
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SacredDivider variant="wave" />

      {/* ── 3. PLACES COVERED ───────────────────────────────────────────────── */}
      {data.places.length > 0 && (
        <section className="bg-section-cream section-pad">
          <div className="container-site">
            <SectionHeader
              title={
                isSightseeing
                  ? `Popular Places in ${data.city}`
                  : `Coverage Areas in ${data.city}`
              }
              subtitle={
                isSightseeing
                  ? "Our sightseeing cabs cover all major attractions"
                  : "We provide corporate cabs across all business districts"
              }
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {data.places.map((place) => (
                <div
                  key={place.name}
                  className="card-warm rounded-xl p-4 flex items-start gap-3"
                >
                  <MapPin
                    size={18}
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <div className="font-medium text-text-primary text-sm">
                      {place.name}
                    </div>
                    <div className="text-text-light text-xs mt-0.5">
                      {place.distance}
                    </div>
                    {place.description && (
                      <div className="text-text-secondary text-xs mt-1 leading-snug">
                        {place.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <SacredDivider variant="wave" />

      {/* ── 4. VEHICLE OPTIONS ──────────────────────────────────────────────── */}
      <section className="bg-section-white section-pad">
        <div className="container-site">
          <SectionHeader
            title={`Choose Your Vehicle in ${data.city}`}
            subtitle="Sedans for individuals, SUVs for families, Tempo Travellers for groups"
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

      <SacredDivider variant="mandala" />

      {/* ── 5. PRICING TABLE ────────────────────────────────────────────────── */}
      <section className="bg-section-cream section-pad">
        <div className="container-site">
          <SectionHeader
            title="Complete Pricing Breakdown"
            subtitle="All vehicles, all packages — transparent and upfront"
          />

          <div className="max-w-3xl mx-auto">
            <PricingTable
              rows={data.pricingRows}
              serviceLabel={serviceLabel}
              city={data.city}
              note={data.pricingNote}
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

      {/* ── 6. BOOKING CTA ──────────────────────────────────────────────────── */}
      <section className="gradient-sacred relative overflow-hidden py-14 md:py-16">
        <div
          className="mandala-watermark absolute right-6 top-1/2 -translate-y-1/2 w-64 h-64 text-white"
          style={{ opacity: 0.07 }}
          aria-hidden="true"
        >
          <Image
            src="/svg/corner-mandala.svg"
            alt=""
            fill
            className="object-contain animate-mandala-slow"
          />
        </div>
        <div className="container-site relative z-10 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-3">
            Book Your {isSightseeing ? "Sightseeing Cab" : "Corporate Cab"}{" "}
            Today
          </h2>
          <p className="text-white/75 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Flexible packages &bull; AC vehicles &bull; Verified drivers &bull;
            No hidden charges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8726124680"
              className="btn-gold px-8 py-3.5 text-base flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call Now
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
              <SectionHeader title="Frequently Asked Questions" />
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
