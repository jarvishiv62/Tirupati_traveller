// src/components/templates/AccommodationTemplate.tsx
// ─────────────────────────────────────────────────────
// 4 sections:
//   1. AccomHero       — H1, price range badge, hero image, arch-frame
//   2. FeaturesGrid    — feature cards + inclusions list
//   3. LocationSection — nearby ghats, popular areas, Maps link-only
//   4. BookingCTA      — gradient-sacred, call + WhatsApp + contact note
// Server Component — no client state needed.

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle,
  Star,
  Clock,
  Users,
  Wifi,
  ShieldCheck,
  Home,
  Heart,
  DollarSign,
  Lock,
  Coffee,
  Sun,
  Moon,
  BookOpen,
  Car,
  Utensils,
} from "lucide-react";
import { buildWALink, formatPrice } from "@/lib/utils";
import type { AccommodationData } from "@/data/accommodation";

// ─── Icon resolver — maps string names to lucide components ──────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  MapPin,
  Star,
  Clock,
  Users,
  Wifi,
  ShieldCheck,
  Home,
  Heart,
  DollarSign,
  Lock,
  Coffee,
  Sun,
  Moon,
  BookOpen,
  Car,
  Utensils,
  CheckCircle,
};

function DynamicIcon({
  name,
  size = 20,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = ICON_MAP[name] ?? CheckCircle;
  return <Icon size={size} className={className} aria-hidden="true" />;
}

// ─── Accent color per accommodation type ─────────────────────────────────────
const TYPE_ACCENT: Record<string, { badge: string; bg: string }> = {
  hotel: { badge: "badge-primary", bg: "bg-primary-light" },
  homestay: { badge: "badge-gold", bg: "bg-gold-pale" },
  "guest-house": { badge: "badge-accent", bg: "bg-accent-light" },
  dharamshala: { badge: "badge-success", bg: "bg-green-50" },
  dormitory: { badge: "badge-primary", bg: "bg-primary-light" },
};

interface Props {
  data: AccommodationData;
}

export default function AccommodationTemplate({ data }: Props) {
  const {
    city,
    citySlug,
    accType,
    displayName,
    heroTagline,
    heroImage,
    priceRange,
    features,
    highlights,
    nearbyGhats,
    popularAreas,
    bookingNote,
    faqs,
    mapsQuery,
    seo,
  } = data;

  const accent = TYPE_ACCENT[accType] ?? TYPE_ACCENT.hotel;
  const waMsg = `Hi, I am looking for ${displayName} and need help with booking. Please assist.`;
  const waHref = buildWALink(waMsg);
  const mapsHref = `https://www.google.com/maps/search/${encodeURIComponent(mapsQuery)}`;

  const priceLabel =
    priceRange.unit === "per bed"
      ? `₹${priceRange.min}–₹${priceRange.max} per bed/night`
      : `₹${priceRange.min}–₹${priceRange.max} per night`;

  // JSON-LD — LodgingBusiness schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: displayName,
    description: seo.description,
    url: seo.canonical,
    telephone: "+918726124680",
    priceRange: priceLabel,
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    provider: {
      "@type": "LocalBusiness",
      name: "Tirupati Travel",
      url: "https://tirupatitravel.in",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — ACCOMMODATION HERO
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative bg-cream overflow-hidden"
        aria-labelledby="accom-hero-heading"
      >
        {/* Mandala watermark */}
        <div
          className="absolute top-4 right-4 w-48 h-48 md:w-64 md:h-64 pointer-events-none select-none"
          style={{ color: "#FF6B00", opacity: 0.06 }}
          aria-hidden="true"
        >
          <Image
            src="/svg/mandalas/corner-mandala.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="container-site section-pad">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-text-light text-xs flex-wrap">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={`/${citySlug}/places-to-visit-in-${citySlug}`}
                  className="hover:text-primary transition-colors capitalize"
                >
                  {city}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-text-primary">{displayName}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left — text content */}
            <div>
              {/* Type badge */}
              <span className={`${accent.badge} mb-4 inline-block capitalize`}>
                {accType.replace("-", " ")} · {city}
              </span>

              {/* H1 */}
              <h1
                id="accom-hero-heading"
                className="section-title text-3xl md:text-4xl lg:text-5xl mb-3"
              >
                {displayName}
              </h1>

              {/* Gold ornament divider */}
              <div className="flex items-center gap-2 mb-4" aria-hidden="true">
                <div className="h-px w-10 bg-gradient-to-r from-accent to-primary" />
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                  <path
                    d="M7,8 Q5,5 5,3 Q7,1 7,8Z"
                    fill="#FF6B00"
                    opacity="0.6"
                  />
                  <path
                    d="M7,8 Q9,5 9,3 Q7,1 7,8Z"
                    fill="#FF6B00"
                    opacity="0.6"
                  />
                  <circle cx="7" cy="2.5" r="1.2" fill="#FFD600" />
                </svg>
                <div className="h-px w-10 bg-gradient-to-l from-accent to-primary" />
              </div>

              <p className="section-sub mb-6">{heroTagline}</p>

              {/* Price range card */}
              <div className="inline-flex items-center gap-3 card-warm rounded-2xl px-5 py-3 mb-6">
                <DollarSign size={18} className="text-primary" />
                <div>
                  <p className="text-text-light text-[10px] uppercase tracking-wider">
                    Price Range
                  </p>
                  <p className="font-bold text-secondary text-base">
                    {priceLabel}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:8726124680"
                  className="btn-outline !py-3 !px-6 w-full sm:w-auto"
                >
                  <Phone size={15} aria-hidden="true" />
                  Call: 8726124680
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp !py-3 !px-6 w-full sm:w-auto"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  WhatsApp Us
                </a>
              </div>

              {/* Booking note */}
              <p className="text-text-light text-xs mt-4 max-w-sm leading-relaxed">
                {bookingNote}
              </p>
            </div>

            {/* Right — arch-frame hero image */}
            <div>
              <div className="arch-frame relative h-72 md:h-96 w-full shadow-temple">
                {/* Gold arch accent */}
                <div
                  className="absolute top-0 left-[12%] right-[12%] h-[3px] z-10"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #FFD600, transparent)",
                    opacity: 0.8,
                  }}
                  aria-hidden="true"
                />
                <Image
                  src={heroImage}
                  alt={`${displayName} — Tirupati Travel`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 gradient-card"
                  aria-hidden="true"
                />

                {/* Overlay text */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={14}
                      className="text-accent"
                      aria-hidden="true"
                    />
                    <span className="text-white text-sm font-medium">
                      Near Dashashwamedh Ghat, {city}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lotus divider */}
        <div className="flex justify-center pb-4" aria-hidden="true">
          <Image
            src="/svg/dividers/lotus-divider.svg"
            alt=""
            width={320}
            height={40}
            className="w-56 md:w-72 opacity-70"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — FEATURES GRID
      ══════════════════════════════════════════════════════ */}
      <section
        className="bg-section-white section-pad"
        aria-labelledby="features-heading"
      >
        <div className="container-site">
          <div className="text-center mb-8 md:mb-10">
            <h2 id="features-heading" className="section-title">
              Features &amp; Amenities
            </h2>
            <div
              className="flex items-center justify-center gap-2 mt-3"
              aria-hidden="true"
            >
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-accent/60" />
              <span className="text-primary">✦</span>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-accent/60" />
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="card-warm rounded-2xl p-5 hover:-translate-y-1 hover:shadow-temple
                           transition-all duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${accent.bg} flex items-center justify-center mb-3`}
                >
                  <DynamicIcon
                    name={h.icon}
                    size={18}
                    className="text-primary"
                  />
                </div>
                <h3 className="font-semibold text-secondary text-sm md:text-base mb-1">
                  {h.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {h.description}
                </p>
              </div>
            ))}
          </div>

          {/* Wave divider */}
          <div className="flex justify-center mb-10" aria-hidden="true">
            <Image
              src="/svg/dividers/ganga-wave.svg"
              alt=""
              width={320}
              height={24}
              className="w-56 md:w-72 opacity-60"
            />
          </div>

          {/* Full amenities checklist */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-semibold text-secondary text-base mb-5 text-center">
              Complete Amenities List
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2.5 bg-cream rounded-xl px-4 py-2.5 border border-border-warm"
                >
                  <CheckCircle
                    size={14}
                    className="text-primary flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-text-secondary">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mandala divider */}
      <div className="flex justify-center my-8" aria-hidden="true">
        <Image
          src="/svg/dividers/mandala-divider.svg"
          alt=""
          width={320}
          height={36}
          className="w-56 md:w-72 opacity-70"
        />
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — LOCATION
      ══════════════════════════════════════════════════════ */}
      <section
        className="bg-section-cream texture-cream section-pad"
        aria-labelledby="location-heading"
      >
        <div className="container-site">
          <div className="text-center mb-8">
            <h2 id="location-heading" className="section-title">
              Location &amp; Nearby Ghats
            </h2>
            <div
              className="flex items-center justify-center gap-2 mt-3"
              aria-hidden="true"
            >
              <div className="h-px w-10 bg-accent/50" />
              <span className="text-primary">✦</span>
              <div className="h-px w-10 bg-accent/50" />
            </div>
            <p className="section-sub mt-2">
              Most {accType.replace("-", " ")} options in {city} are within
              walking distance of the sacred Ghats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nearby Ghats */}
            <div className="card-warm rounded-2xl p-6">
              <h3 className="flex items-center gap-2 font-semibold text-secondary text-sm md:text-base mb-4">
                <MapPin size={16} className="text-primary" aria-hidden="true" />
                Nearby Sacred Ghats
              </h3>
              <ul className="space-y-3">
                {nearbyGhats.map((ghat) => (
                  <li key={ghat} className="flex items-start gap-2.5">
                    <span
                      className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-1.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-text-secondary">{ghat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Areas + Maps link */}
            <div className="space-y-5">
              <div className="card-warm rounded-2xl p-6">
                <h3 className="flex items-center gap-2 font-semibold text-secondary text-sm md:text-base mb-4">
                  <Star size={16} className="text-primary" aria-hidden="true" />
                  Popular Staying Areas in {city}
                </h3>
                <ul className="space-y-2.5">
                  {popularAreas.map((area) => (
                    <li key={area} className="flex items-start gap-2.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-text-secondary">
                        {area}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Google Maps link-only (no iframe — CSP safe) */}
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 card-warm rounded-2xl p-5
                           hover:border-primary hover:shadow-temple transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <MapPin
                    size={18}
                    className="text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="font-semibold text-secondary text-sm group-hover:text-primary transition-colors">
                    View on Google Maps
                  </p>
                  <p className="text-text-light text-xs">
                    Find {displayName.toLowerCase()} near Dashashwamedh Ghat
                  </p>
                </div>
                <span
                  className="ml-auto text-primary text-lg"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lotus divider */}
      <div className="flex justify-center my-8" aria-hidden="true">
        <Image
          src="/svg/dividers/lotus-divider.svg"
          alt=""
          width={320}
          height={40}
          className="w-56 md:w-72 opacity-70"
        />
      </div>

      {/* FAQ Section */}
      <section
        className="bg-section-white section-pad"
        aria-labelledby="accom-faq-heading"
      >
        <div className="container-site max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 id="accom-faq-heading" className="section-title">
              Frequently Asked Questions
            </h2>
            <div
              className="flex items-center justify-center gap-2 mt-3"
              aria-hidden="true"
            >
              <div className="h-px w-10 bg-accent/50" />
              <span className="text-primary">✦</span>
              <div className="h-px w-10 bg-accent/50" />
            </div>
          </div>
          <div className="space-y-3" role="list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="card-warm rounded-2xl p-5"
                role="listitem"
              >
                <h3 className="font-semibold text-secondary text-sm md:text-base mb-2">
                  {faq.q}
                </h3>
                <div
                  className="w-8 h-0.5 bg-accent rounded-full mb-2"
                  aria-hidden="true"
                />
                <p className="text-text-secondary text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mandala divider */}
      <div className="flex justify-center my-8" aria-hidden="true">
        <Image
          src="/svg/dividers/mandala-divider.svg"
          alt=""
          width={320}
          height={36}
          className="w-56 md:w-72 opacity-70"
        />
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — BOOKING CTA
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative bg-secondary overflow-hidden section-pad"
        aria-labelledby="accom-cta-heading"
      >
        {/* Mandala watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-80 h-80 opacity-[0.05] text-white">
            <Image
              src="/svg/mandalas/corner-mandala.svg"
              alt=""
              width={320}
              height={320}
              className="w-full"
            />
          </div>
        </div>

        {/* Ghat skyline */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none opacity-10"
          aria-hidden="true"
        >
          <Image
            src="/svg/ghats/ghat-skyline.svg"
            alt=""
            width={1440}
            height={160}
            className="w-full"
            style={{ color: "#fff" }}
          />
        </div>

        <div className="relative z-10 container-site text-center text-white">
          <p className="text-accent text-xs uppercase tracking-widest mb-3 font-medium">
            Expert Assistance · Best Rates · 24/7 Support
          </p>
          <h2 id="accom-cta-heading" className="page-heading mb-4">
            Book Your {city} Stay with Tirupati Travel
          </h2>

          {/* Lotus ornament */}
          <div
            className="flex items-center justify-center gap-3 mb-5"
            aria-hidden="true"
          >
            <div className="h-px w-16 bg-accent/40" />
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
              <path
                d="M8,10 Q6,7 6,4 Q8,2 8,10Z"
                fill="#FFD600"
                opacity="0.8"
              />
              <path
                d="M8,10 Q10,7 10,4 Q8,2 8,10Z"
                fill="#FFD600"
                opacity="0.8"
              />
              <circle cx="8" cy="3.5" r="1.5" fill="#FFD600" />
            </svg>
            <div className="h-px w-16 bg-accent/40" />
          </div>

          <p className="text-white/75 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            {bookingNote}
          </p>

          {/* Price highlight */}
          <div className="inline-block bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-8">
            <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
              Prices starting from
            </p>
            <p className="text-accent font-serif font-bold text-3xl">
              {formatPrice(priceRange.min)}
            </p>
            <p className="text-white/50 text-xs mt-1">{priceRange.unit}</p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp !px-8 !py-3.5 !text-sm w-full sm:w-auto"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Book via WhatsApp
            </a>
            <a
              href="tel:8726124680"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary !px-8 !py-3.5 !text-sm w-full sm:w-auto"
            >
              <Phone size={16} aria-hidden="true" />
              Call: 8726124680
            </a>
          </div>

          {/* Address */}
          <p className="text-white/40 text-xs mt-8">
            Tirupati Travel · L-2/72, Dashashwamedh Plaza, Dashashwamedh Gath,
            Varanasi-221001
          </p>
        </div>
      </section>
    </>
  );
}
