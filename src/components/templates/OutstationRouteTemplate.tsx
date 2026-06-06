// src/components/templates/OutstationRouteTemplate.tsx
// ───────────────────────────────────────────────────────
// All 7 sections for every outstation taxi route page.
// Server Component — no client state needed.
//
// Section order:
//   1. RouteHero         — H1, distance/duration badges, ghat skyline, CTAs
//   2. PricingCards      — per-vehicle fare cards
//   3. RouteHighlights   — distance, time, highlights, places en route
//   4. VehicleComparison — side-by-side spec table
//   5. BookingCTA        — gradient-sacred banner, WhatsApp pre-filled
//   6. RouteMapSection   — Google Maps embed
//   7. InternalLinks     — related routes + city services

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Users,
  Luggage,
  CheckCircle,
  Star,
  Fuel,
  ShieldCheck,
} from "lucide-react";
import RouteIllustration from "@/components/shared/RouteIllustration";
import RouteMapSection from "@/components/shared/RouteMapSection";
import InternalLinks from "@/components/shared/InternalLinks";
import { formatPrice, buildWALink } from "@/lib/utils";
import type { OutstationRouteData } from "@/data/varanasiRoutes";

interface Props {
  data: OutstationRouteData;
  currentSlug: string;
}

// ─── Vehicle config used across sections ──────────────────────────────────────
const VEHICLES = [
  {
    id: "sedan",
    name: "Sedan",
    models: "Swift Dzire / Toyota Etios",
    image: "/assets/images/vehicles/swift-dzire.jpg",
    seats: 4,
    luggage: 2,
    fareKey: "sedan" as const,
    category: "Economy",
    badge: "Most Popular",
    features: ["AC", "GPS", "Music System", "First Aid Kit"],
  },
  {
    id: "ertiga",
    name: "SUV",
    models: "Maruti Ertiga / Marazzo",
    image: "/assets/images/vehicles/ertiga.jpg",
    seats: 6,
    luggage: 3,
    fareKey: "ertiga" as const,
    category: "Family",
    badge: "Family Choice",
    features: ["AC", "GPS", "6 Seats", "Roof Carrier"],
  },
  {
    id: "innova",
    name: "Innova",
    models: "Toyota Innova",
    image: "/assets/images/vehicles/innova.jpg",
    seats: 7,
    luggage: 4,
    fareKey: "innova" as const,
    category: "Premium",
    badge: null,
    features: ["AC", "GPS", "7 Seats", "Push-back Seats"],
  },
  {
    id: "crysta",
    name: "Innova Crysta",
    models: "Toyota Innova Crysta",
    image: "/assets/images/vehicles/innova-crysta.jpg",
    seats: 7,
    luggage: 4,
    fareKey: "crysta" as const,
    category: "Luxury",
    badge: "Premium",
    features: ["AC", "GPS", "Leather Seats", "Entertainment System"],
  },
] as const;

// ─── USP list for BookingCTA ──────────────────────────────────────────────────
const USPS = [
  "No hidden charges — fare is all-inclusive",
  "Experienced, verified drivers",
  "AC vehicles, GPS tracked",
  "24/7 availability — call anytime",
  "GST invoice on request",
  "Free cancellation up to 2 hrs before pickup",
];

export default function OutstationRouteTemplate({ data, currentSlug }: Props) {
  const {
    origin,
    destination,
    distance,
    duration,
    fare,
    highlights,
    placesEnRoute,
    faqs,
  } = data;
  const waMessage = `Hi, I want to book a taxi from ${origin} to ${destination}. Please share the best fare.`;
  const waHref = buildWALink(waMessage);

  // Filter vehicles that have a fare defined for this route
  const availableVehicles = VEHICLES.filter(
    (v) => fare[v.fareKey] !== undefined,
  );

  // JSON-LD schema for this route
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${origin} to ${destination} Taxi`,
    provider: {
      "@type": "LocalBusiness",
      name: "Tirupati Travel",
      url: "https://tirupatitravel.in",
      telephone: "+918726124680",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Varanasi",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
    areaServed: [origin, destination],
    description: data.seo.description,
    offers: {
      "@type": "Offer",
      price: fare.sedan.toString(),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
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
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — ROUTE HERO
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative bg-secondary overflow-hidden"
        style={{ minHeight: "60vh" }}
        aria-labelledby="route-hero-heading"
      >
        {/* Hero background image */}
        <Image
          src="/assets/images/varanasi-tour-package.webp"
          alt={`${origin} to ${destination} taxi service`}
          fill
          className="object-cover object-center opacity-20"
          priority
          sizes="100vw"
          quality={75}
        />

        {/* Overlay */}
        <div className="absolute inset-0 gradient-hero" aria-hidden="true" />

        {/* Mandala watermark */}
        <div
          className="absolute top-0 right-0 w-64 h-64 pointer-events-none select-none"
          style={{ color: "#FFD600", opacity: 0.06 }}
          aria-hidden="true"
        >
          <Image
            src="/svg/mandalas/corner-mandala.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div
          className="relative z-10 container-site flex flex-col items-center justify-center
                     text-center py-16 md:py-24"
          style={{ minHeight: "60vh" }}
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-white/60 text-xs flex-wrap justify-center">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={`/${origin.toLowerCase()}/places-to-visit-in-${origin.toLowerCase()}`}
                  className="hover:text-accent transition-colors capitalize"
                >
                  {origin}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/90">
                {origin} to {destination} Taxi
              </li>
            </ol>
          </nav>

          {/* H1 */}
          <h1
            id="route-hero-heading"
            className="page-heading text-white max-w-3xl mb-4"
          >
            {origin} to {destination} Taxi
          </h1>

          {/* Lotus ornament */}
          <div className="flex items-center gap-3 mb-5" aria-hidden="true">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/60" />
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
              <path
                d="M8,10 Q3,8 2,5 Q5,4 8,10Z"
                fill="#FF6B00"
                opacity="0.5"
              />
              <path
                d="M8,10 Q13,8 14,5 Q11,4 8,10Z"
                fill="#FF6B00"
                opacity="0.5"
              />
              <circle cx="8" cy="3.5" r="1.5" fill="#FFD600" />
            </svg>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/60" />
          </div>

          {/* Distance + Duration badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span
              className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20
                             text-white text-sm px-4 py-2 rounded-full"
            >
              <MapPin size={14} className="text-accent" aria-hidden="true" />
              {distance}
            </span>
            <span
              className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20
                             text-white text-sm px-4 py-2 rounded-full"
            >
              <Clock size={14} className="text-accent" aria-hidden="true" />
              {duration}
            </span>
            <span className="flex items-center gap-1.5 bg-primary/80 text-white text-sm px-4 py-2 rounded-full">
              <span className="font-bold">From {formatPrice(fare.sedan)}</span>
            </span>
          </div>

          {/* Route illustration */}
          <div className="w-full max-w-lg mb-8">
            <RouteIllustration
              origin={origin}
              destination={destination}
              distance={distance}
              duration={duration}
            />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm sm:max-w-none sm:justify-center">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp !px-8 !py-3.5 w-full sm:w-auto"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Book via WhatsApp
            </a>
            <a
              href="tel:8726124680"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary !px-8 !py-3.5 w-full sm:w-auto"
            >
              <Phone size={16} aria-hidden="true" />
              Call: 8726124680
            </a>
          </div>
        </div>

        {/* Ghat skyline at bottom of hero */}
        <div className="ghat-skyline-wrap h-20 md:h-28" aria-hidden="true">
          <Image
            src="/svg/ghats/ghat-skyline.svg"
            alt=""
            width={1440}
            height={320}
            className="w-full h-auto"
            style={{ color: "#FFFFFF", opacity: 0.2 }}
          />
        </div>
      </section>

      {/* Lotus divider */}
      <div className="flex justify-center my-8 md:my-10" aria-hidden="true">
        <Image
          src="/svg/dividers/lotus-divider.svg"
          alt=""
          width={320}
          height={40}
          className="w-64 md:w-80 opacity-80"
        />
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — PRICING CARDS
      ══════════════════════════════════════════════════════ */}
      <section
        className="bg-section-white section-pad"
        aria-labelledby="pricing-heading"
      >
        <div className="container-site">
          <div className="text-center mb-8 md:mb-10">
            <h2 id="pricing-heading" className="section-title">
              {origin} to {destination} Taxi Fare
            </h2>
            <div
              className="flex items-center justify-center gap-2 mt-3"
              aria-hidden="true"
            >
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-accent/60" />
              <span className="text-primary text-sm">✦</span>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-accent/60" />
            </div>
            <p className="section-sub mt-2 max-w-xl mx-auto">
              One-way fare. Toll taxes and parking extra. Driver charges
              included.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {availableVehicles.map((vehicle) => {
              const vehicleFare = fare[vehicle.fareKey];
              if (vehicleFare === undefined) return null;
              const isPopular = vehicle.badge === "Most Popular";

              return (
                <div
                  key={vehicle.id}
                  className={`relative card-warm rounded-2xl overflow-hidden transition-all duration-300
                              hover:-translate-y-1 hover:shadow-temple
                              ${isPopular ? "ring-2 ring-primary" : ""}`}
                >
                  {/* Badge */}
                  {vehicle.badge && (
                    <div className="absolute top-3 right-3 z-10">
                      <span
                        className={`badge text-[10px] ${isPopular ? "badge-primary" : "badge-gold"}`}
                      >
                        {vehicle.badge}
                      </span>
                    </div>
                  )}

                  {/* Vehicle image — arch frame */}
                  <div className="arch-frame relative h-40 bg-cream-dark">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.models}
                      fill
                      className="object-contain object-center p-2"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                    {/* Gold arch accent */}
                    <div
                      className="absolute top-0 left-[15%] right-[15%] h-[2px]"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, #FFD600, transparent)",
                        opacity: 0.7,
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Card body */}
                  <div className="p-4">
                    {/* Tiny lotus ornament */}
                    <div
                      className="flex justify-center mb-2"
                      aria-hidden="true"
                    >
                      <svg
                        width="18"
                        height="11"
                        viewBox="0 0 18 11"
                        fill="none"
                      >
                        <path
                          d="M9,10 Q7,7 7,4 Q9,2 9,10Z"
                          fill="#FF6B00"
                          opacity="0.35"
                        />
                        <path
                          d="M9,10 Q11,7 11,4 Q9,2 9,10Z"
                          fill="#FF6B00"
                          opacity="0.35"
                        />
                        <circle
                          cx="9"
                          cy="3.5"
                          r="1.2"
                          fill="#FF6B00"
                          opacity="0.5"
                        />
                      </svg>
                    </div>

                    <div className="mb-0.5">
                      <span className="text-[10px] text-text-light uppercase tracking-widest">
                        {vehicle.category}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-secondary text-base mb-0.5">
                      {vehicle.name}
                    </h3>
                    <p className="text-text-light text-xs mb-3">
                      {vehicle.models}
                    </p>

                    {/* Specs row */}
                    <div className="flex items-center gap-3 mb-4 text-xs text-text-secondary">
                      <span className="flex items-center gap-1">
                        <Users
                          size={11}
                          aria-hidden="true"
                          className="text-primary"
                        />
                        {vehicle.seats}
                      </span>
                      <span className="flex items-center gap-1">
                        <Luggage
                          size={11}
                          aria-hidden="true"
                          className="text-primary"
                        />
                        {vehicle.luggage}
                      </span>
                      <span className="flex items-center gap-1">
                        <Fuel
                          size={11}
                          aria-hidden="true"
                          className="text-primary"
                        />
                        AC
                      </span>
                    </div>

                    {/* Fare */}
                    <div className="bg-cream rounded-xl p-3 mb-4 text-center border border-border-warm">
                      <p className="text-text-light text-[10px] uppercase tracking-wider mb-0.5">
                        One-Way Fare
                      </p>
                      <p className="text-primary font-bold text-2xl font-serif">
                        {formatPrice(vehicleFare)}
                      </p>
                      <p className="text-text-light text-[10px] mt-0.5">
                        Tolls &amp; parking extra
                      </p>
                    </div>

                    {/* Book CTA */}
                    <a
                      href={buildWALink(
                        `Hi, I want to book a ${vehicle.name} from ${origin} to ${destination}. Fare: ${formatPrice(vehicleFare)}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full !justify-center !text-xs !py-2.5"
                    >
                      <MessageCircle size={13} aria-hidden="true" />
                      Book {vehicle.name}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fare note */}
          <div className="mt-6 p-4 bg-cream rounded-2xl border border-border-warm text-sm text-text-secondary text-center">
            <p>
              <strong className="text-secondary">Fare includes:</strong> Driver
              charges, fuel, and GST.&nbsp;
              <strong className="text-secondary">Excludes:</strong> Toll taxes,
              parking fees (paid at actuals).&nbsp; For night travel (10pm–6am),
              a night surcharge may apply.
            </p>
          </div>
        </div>
      </section>

      {/* Ganga wave divider */}
      <div className="flex justify-center my-8" aria-hidden="true">
        <Image
          src="/svg/dividers/ganga-wave.svg"
          alt=""
          width={320}
          height={24}
          className="w-64 md:w-80 opacity-70"
        />
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — ROUTE HIGHLIGHTS
      ══════════════════════════════════════════════════════ */}
      <section
        className="bg-section-cream texture-cream section-pad"
        aria-labelledby="highlights-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Journey info cards */}
            <div>
              <h2 id="highlights-heading" className="section-title mb-6">
                {origin} to {destination} Journey Info
              </h2>

              {/* Info cards row */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  {
                    icon: MapPin,
                    label: "Distance",
                    value: distance,
                    color: "text-primary",
                  },
                  {
                    icon: Clock,
                    label: "Travel Time",
                    value: duration,
                    color: "text-secondary",
                  },
                  {
                    icon: Star,
                    label: "Best Vehicle",
                    value: "Innova",
                    color: "text-accent",
                  },
                  {
                    icon: ShieldCheck,
                    label: "Safety",
                    value: "GPS + Verified Driver",
                    color: "text-success",
                  },
                ].map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="card-warm rounded-2xl p-4">
                    <Icon
                      size={20}
                      className={`${color} mb-2`}
                      aria-hidden="true"
                    />
                    <p className="text-text-light text-[10px] uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="font-semibold text-secondary text-sm mt-0.5">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Highlights list */}
              {highlights.length > 0 && (
                <div className="card-warm rounded-2xl p-5">
                  <h3 className="font-semibold text-secondary text-sm mb-4 flex items-center gap-2">
                    <Star
                      size={15}
                      className="text-accent"
                      aria-hidden="true"
                    />
                    Highlights of {destination}
                  </h3>
                  <ul className="space-y-2">
                    {highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <CheckCircle
                          size={14}
                          className="text-primary flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right: Places en route + Travel tips */}
            <div className="space-y-5">
              {/* Places en route */}
              {placesEnRoute.length > 0 && (
                <div className="card-warm rounded-2xl p-5">
                  <h3 className="font-semibold text-secondary text-sm mb-4 flex items-center gap-2">
                    <MapPin
                      size={15}
                      className="text-primary"
                      aria-hidden="true"
                    />
                    Places En Route
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {placesEnRoute.map((place) => (
                      <span
                        key={place}
                        className="badge-primary text-xs px-3 py-1.5 rounded-full"
                      >
                        {place}
                      </span>
                    ))}
                  </div>
                  <p className="text-text-light text-xs mt-3">
                    Ask your driver to stop at any of these towns for a break.
                  </p>
                </div>
              )}

              {/* Travel tips */}
              <div className="card-warm rounded-2xl p-5">
                <h3 className="font-semibold text-secondary text-sm mb-4 flex items-center gap-2">
                  <CheckCircle
                    size={15}
                    className="text-primary"
                    aria-hidden="true"
                  />
                  Travel Tips
                </h3>
                <ul className="space-y-2">
                  {[
                    "Book at least 2 hrs in advance for guaranteed availability.",
                    "Early morning departures (4–6am) recommended for pilgrimage trips.",
                    "Carry a government ID for group travel.",
                    "Inform us of any intermediate stops — we can plan the route accordingly.",
                    "For Gaya / Bodh Gaya trips, plan 1–2 nights for temple darshan.",
                  ].map((tip) => (
                    <li
                      key={tip}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5"
                        aria-hidden="true"
                      />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick book card */}
              <div className="rounded-2xl p-5 gradient-primary text-white">
                <p className="font-serif font-bold text-lg mb-1">
                  Ready to book?
                </p>
                <p className="text-white/80 text-sm mb-4">
                  Call or WhatsApp us now. We confirm your booking instantly.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:8726124680"
                    className="btn-outline border-white text-white hover:bg-white hover:text-primary !text-sm !py-2.5 !justify-center"
                  >
                    <Phone size={14} aria-hidden="true" />
                    8726124680
                  </a>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp !text-sm !py-2.5 !justify-center"
                  >
                    <MessageCircle size={14} aria-hidden="true" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
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
          className="w-64 md:w-80 opacity-70"
        />
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — VEHICLE COMPARISON TABLE
      ══════════════════════════════════════════════════════ */}
      <section
        className="bg-section-white section-pad"
        aria-labelledby="comparison-heading"
      >
        <div className="container-site">
          <div className="text-center mb-8">
            <h2 id="comparison-heading" className="section-title">
              Vehicle Comparison for {origin} to {destination}
            </h2>
            <div
              className="flex items-center justify-center gap-2 mt-3"
              aria-hidden="true"
            >
              <div className="h-px w-10 bg-accent/50" />
              <span className="text-primary text-sm">✦</span>
              <div className="h-px w-10 bg-accent/50" />
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border-warm shadow-card-warm">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="gradient-primary text-white">
                  <th className="text-left px-5 py-4 font-semibold">Vehicle</th>
                  <th className="text-center px-4 py-4 font-semibold">Seats</th>
                  <th className="text-center px-4 py-4 font-semibold">
                    Luggage
                  </th>
                  <th className="text-center px-4 py-4 font-semibold">AC</th>
                  <th className="text-right px-5 py-4 font-semibold">
                    One-Way Fare
                  </th>
                  <th className="text-center px-4 py-4 font-semibold">Book</th>
                </tr>
              </thead>
              <tbody>
                {availableVehicles.map((v, idx) => {
                  const vehicleFare = fare[v.fareKey];
                  if (vehicleFare === undefined) return null;
                  const isAlt = idx % 2 === 1;
                  return (
                    <tr
                      key={v.id}
                      className={`border-b border-border-warm transition-colors hover:bg-primary-light/50
                                  ${isAlt ? "bg-cream" : "bg-white"}`}
                    >
                      <td className="px-5 py-4">
                        <div>
                          <p className="font-semibold text-secondary">
                            {v.name}
                          </p>
                          <p className="text-text-light text-xs">{v.models}</p>
                        </div>
                      </td>
                      <td className="text-center px-4 py-4">
                        <span className="flex items-center justify-center gap-1">
                          <Users
                            size={13}
                            className="text-primary"
                            aria-hidden="true"
                          />
                          {v.seats}
                        </span>
                      </td>
                      <td className="text-center px-4 py-4 text-text-secondary">
                        {v.luggage} bags
                      </td>
                      <td className="text-center px-4 py-4">
                        <CheckCircle
                          size={15}
                          className="text-success mx-auto"
                          aria-label="AC available"
                        />
                      </td>
                      <td className="text-right px-5 py-4">
                        <span className="font-bold text-primary text-base">
                          {formatPrice(vehicleFare)}
                        </span>
                      </td>
                      <td className="text-center px-4 py-4">
                        <a
                          href={buildWALink(
                            `Book ${v.name} from ${origin} to ${destination}`,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary !text-xs !py-1.5 !px-3"
                        >
                          Book
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="text-text-light text-xs text-center mt-4">
            * Fares are indicative. Final fare confirmed at booking. Toll &amp;
            parking extra.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — BOOKING CTA BANNER
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden bg-secondary section-pad"
        aria-labelledby="cta-heading"
      >
        {/* Mandala watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-96 h-96 opacity-[0.06] text-white">
            <Image
              src="/svg/mandalas/corner-mandala.svg"
              alt=""
              width={384}
              height={384}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Ghat skyline subtle overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 opacity-10"
          aria-hidden="true"
        >
          <Image
            src="/svg/ghats/ghat-skyline.svg"
            alt=""
            width={1440}
            height={160}
            className="w-full h-auto"
            style={{ color: "#fff" }}
          />
        </div>

        <div className="relative z-10 container-site text-center text-white">
          <p className="text-accent text-xs uppercase tracking-widest mb-3 font-medium">
            24/7 Available · AC Cabs · Verified Drivers
          </p>
          <h2 id="cta-heading" className="page-heading mb-4">
            Book Your {origin} to {destination} Cab Now
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

          {/* USPs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 max-w-2xl mx-auto">
            {USPS.map((usp) => (
              <span
                key={usp}
                className="flex items-center gap-1.5 bg-white/10 border border-white/20
                           text-white/90 text-xs px-3 py-1.5 rounded-full"
              >
                <CheckCircle
                  size={11}
                  className="text-accent flex-shrink-0"
                  aria-hidden="true"
                />
                {usp}
              </span>
            ))}
          </div>

          {/* Price callout */}
          <div className="inline-block bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-8">
            <p className="text-white/70 text-xs uppercase tracking-wider mb-1">
              Sedan starting from
            </p>
            <p className="text-accent font-serif font-bold text-3xl">
              {formatPrice(fare.sedan)}
            </p>
            <p className="text-white/60 text-xs mt-1">One-way · Toll extra</p>
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
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — ROUTE MAP
      ══════════════════════════════════════════════════════ */}
      <RouteMapSection origin={origin} destination={destination} />

      {/* Lotus divider */}
      <div className="flex justify-center my-8" aria-hidden="true">
        <Image
          src="/svg/dividers/lotus-divider.svg"
          alt=""
          width={320}
          height={40}
          className="w-64 md:w-80 opacity-70"
        />
      </div>

      {/* ══════════════════════════════════════════════════════
          FAQ SECTION (bonus — between Map and InternalLinks)
      ══════════════════════════════════════════════════════ */}
      <section
        className="bg-section-cream texture-cream section-pad"
        aria-labelledby="faq-heading"
      >
        <div className="container-site max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 id="faq-heading" className="section-title">
              Frequently Asked Questions
            </h2>
            <div
              className="flex items-center justify-center gap-2 mt-3"
              aria-hidden="true"
            >
              <div className="h-px w-10 bg-accent/50" />
              <span className="text-primary text-sm">✦</span>
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
          className="w-64 md:w-80 opacity-70"
        />
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — INTERNAL LINKS
      ══════════════════════════════════════════════════════ */}
      <InternalLinks
        origin={origin}
        destination={destination}
        currentSlug={currentSlug}
      />
    </>
  );
}
