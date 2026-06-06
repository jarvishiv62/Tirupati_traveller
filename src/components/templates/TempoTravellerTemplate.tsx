// src/components/templates/TempoTravellerTemplate.tsx
//
// Full-page template for all tempo traveller pages:
//   Standard, Luxury, Maharaja, Urbania — all cities
//
// Sections:
//   1. TempoHero        — H1 + vehicle hero image + capacity + price badge
//   2. FeaturesGrid     — vehicle feature pills in card-warm
//   3. PopularRoutes    — route cards with fare + "Book Now"
//   4. PricingSection   — per-km rate + base price table
//   5. Inclusions       — checklist
//   6. BookingCTA       — gradient-sacred banner
//   7. FAQ
//   8. InternalLinks
//
// Server Component.

import Image from "next/image";
import { Phone, Users, Zap, CheckCircle, ArrowRight } from "lucide-react";
import SacredDivider from "@/components/shared/SacredDivider";
import SectionHeader from "@/components/shared/SectionHeader";
import InternalLinks from "@/components/shared/InternalLinks";
import { buildWALink } from "@/lib/utils";
import type { TempoTravellerData } from "@/data/tempoTraveller";

// ── Variant label map ─────────────────────────────────────────────────────────
const VARIANT_LABELS: Record<TempoTravellerData["variant"], string> = {
  standard: "Standard",
  luxury: "Luxury",
  maharaja: "Maharaja",
  urbania: "Force Urbania",
};

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
export default function TempoTravellerTemplate({
  data,
}: {
  data: TempoTravellerData;
}) {
  const variantLabel = VARIANT_LABELS[data.variant];
  const pageTitle = `${variantLabel} Tempo Traveller in ${data.city}`;
  const waLink = buildWALink(
    `Hi, I want to book a ${variantLabel} Tempo Traveller (${data.capacity} seater) in ${data.city}. Please share availability and rates.`,
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
              className="hover:text-white transition-colors"
            >
              {data.city}
            </a>
            <span>/</span>
            <span className="text-white/80">{pageTitle}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left — text */}
            <div className="flex-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gold text-secondary font-bold text-sm px-4 py-1.5 rounded-full mb-5 shadow">
                <Users size={14} />
                {data.capacity} Seater &bull; ₹{data.pricePerKm}/km
              </div>

              {/* H1 */}
              <h1 className="page-heading mb-4 leading-tight">{pageTitle}</h1>

              <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl">
                Book a {data.vehicleName} in {data.city} for group pilgrimages,
                outstation tours, weddings, and corporate trips. AC &bull; GPS
                &bull; Professional driver.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { label: "Capacity", value: `${data.capacity} seats` },
                  { label: "Rate", value: `₹${data.pricePerKm}/km` },
                  {
                    label: "Min booking",
                    value: `₹${data.basePrice.toLocaleString("en-IN")}`,
                  },
                  { label: "AC", value: "Fully AC" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-center"
                  >
                    <div className="text-white/60 text-xs">{label}</div>
                    <div className="text-white font-bold font-serif text-base leading-tight">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
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
                  WhatsApp to Book
                </a>
              </div>
            </div>

            {/* Right — vehicle image */}
            <div className="w-full lg:w-[420px] flex-shrink-0">
              <div className="relative h-64 lg:h-72 rounded-2xl overflow-hidden shadow-temple">
                <Image
                  src={data.image}
                  alt={`${data.vehicleName} in ${data.city}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SacredDivider variant="lotus" />

      {/* ── 2. FEATURES GRID ────────────────────────────────────────────────── */}
      <section className="bg-section-white section-pad">
        <div className="container-site">
          <SectionHeader
            title={`${data.vehicleName} Features`}
            subtitle="Everything that makes this vehicle perfect for your journey"
          />

          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {data.features.map((feat) => (
              <div
                key={feat}
                className="flex items-center gap-2 bg-cream border border-border-warm rounded-full px-4 py-2 text-text-secondary text-sm"
              >
                <Zap size={14} className="text-primary flex-shrink-0" />
                {feat}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SacredDivider variant="wave" />

      {/* ── 3. POPULAR ROUTES ───────────────────────────────────────────────── */}
      <section className="bg-section-cream section-pad">
        <div className="container-site">
          <SectionHeader
            title={`Popular Routes from ${data.city}`}
            subtitle={`${variantLabel} tempo traveller fares for group travel`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.popularRoutes.map((route) => {
              const routeWa = buildWALink(
                `Hi, I want to book a ${data.vehicleName} from ${data.city} to ${route.destination} (${route.distance}). Please confirm availability.`,
              );
              return (
                <div
                  key={route.destination}
                  className="card-warm rounded-2xl p-5 hover:shadow-temple transition-shadow duration-300"
                >
                  {/* Route header */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="font-medium text-text-primary text-sm">
                      {data.city}
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-primary flex-shrink-0"
                    />
                    <div className="font-medium text-text-primary text-sm">
                      {route.destination}
                    </div>
                  </div>

                  <div className="text-text-light text-xs mb-3">
                    {route.distance}
                  </div>

                  {/* Price */}
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <div className="text-xs text-text-light">
                        One-way fare
                      </div>
                      <div className="font-bold text-primary font-serif text-xl leading-none">
                        ₹{route.fare.toLocaleString("en-IN")}
                      </div>
                    </div>
                    <div className="text-xs text-text-light text-right">
                      {data.capacity} seats
                    </div>
                  </div>

                  <a
                    href={routeWa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp text-sm py-2 w-full text-center block"
                  >
                    Book This Route
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SacredDivider variant="wave" />

      {/* ── 4. PRICING + INCLUSIONS ─────────────────────────────────────────── */}
      <section className="bg-section-white section-pad">
        <div className="container-site">
          <SectionHeader
            title="Pricing & Inclusions"
            subtitle="Transparent pricing with no hidden charges"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Pricing card */}
            <div className="card-warm rounded-2xl overflow-hidden">
              <div className="bg-secondary px-5 py-3">
                <h3 className="font-serif font-bold text-white text-base">
                  Fare Details
                </h3>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { label: "Rate per km", value: `₹${data.pricePerKm}` },
                  {
                    label: "Minimum booking",
                    value: `₹${data.basePrice.toLocaleString("en-IN")}`,
                  },
                  { label: "Capacity", value: `${data.capacity} passengers` },
                  { label: "Driver allowance", value: "Included" },
                  { label: "Toll charges", value: "At actual" },
                  { label: "State permit", value: "Included" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between py-2 border-b border-border-warm last:border-0"
                  >
                    <span className="text-text-secondary text-sm">{label}</span>
                    <span className="font-semibold text-text-primary text-sm">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions */}
            <div className="card-warm rounded-2xl p-6">
              <h3 className="font-serif font-bold text-text-primary text-lg mb-4">
                What's Included
              </h3>
              <ul className="space-y-2.5">
                {data.inclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-text-secondary text-sm"
                  >
                    <CheckCircle
                      size={15}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. BOOKING CTA ──────────────────────────────────────────────────── */}
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
            Book {data.vehicleName} in {data.city}
          </h2>
          <p className="text-white/75 text-base md:text-lg mb-8 max-w-xl mx-auto">
            {data.capacity} seater &bull; Fully AC &bull; Professional driver
            &bull; GPS tracked
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

      {/* ── 6. FAQ ──────────────────────────────────────────────────────────── */}
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

      {/* ── 7. INTERNAL LINKS ───────────────────────────────────────────────── */}
      {data.internalLinks.length > 0 && (
        <>
          <SacredDivider variant="gold-line" />
          <InternalLinks
            links={data.internalLinks}
            heading={`More in ${data.city}`}
          />
        </>
      )}
    </>
  );
}
