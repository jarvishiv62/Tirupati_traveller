// src/components/templates/AirportTaxiTemplate.tsx
// ──────────────────────────────────────────────────
// Sections:
//   1. AirportHero        — H1, IATA badge, distance/duration, CTAs
//   2. TerminalInfo       — terminal cards with pickup instructions
//   3. PricingCards       — per-vehicle fare cards (arch style)
//   4. Inclusions         — what's included checklist + flight info
//   5. BookingSteps       — 5-step how-to
//   6. FlightInfo         — airlines + major routes
//   7. FAQ                — unique FAQs per airport
//   8. BookingCTA         — gradient-sacred banner
// Server Component.

import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, MessageCircle, MapPin, Clock,
  CheckCircle, Plane, Users, Luggage,
  Navigation, Star, Fuel, ArrowRight,
} from 'lucide-react';
import { buildWALink, formatPrice } from '@/lib/utils';
import type { AirportTaxiData } from '@/data/airportTaxi';

// ─── Vehicle display config ───────────────────────────────────────────────────
const VEHICLE_CONFIG = [
  { fareKey: 'sedan'  as const, name: 'Sedan',         models: 'Swift Dzire / Toyota Etios', seats: 4, luggage: 2, badge: 'Most Popular' },
  { fareKey: 'ertiga' as const, name: 'Ertiga / SUV',  models: 'Maruti Ertiga',              seats: 6, luggage: 3, badge: null },
  { fareKey: 'innova' as const, name: 'Innova',        models: 'Toyota Innova',              seats: 7, luggage: 4, badge: null },
  { fareKey: 'crysta' as const, name: 'Innova Crysta', models: 'Toyota Innova Crysta',       seats: 7, luggage: 4, badge: 'Premium' },
  { fareKey: 'tempo'  as const, name: 'Tempo Traveller',models:'12-Seater Tempo',            seats:12, luggage: 6, badge: 'Groups' },
] as const;

interface Props {
  data: AirportTaxiData;
}

export default function AirportTaxiTemplate({ data }: Props) {
  const {
    airport, iataCode, city, citySlug, slug,
    distance, duration, terminals, fare,
    inclusions, flightInfo, bookingInstructions, faqs, seo,
  } = data;

  const waMsg  = `Hi, I need a taxi to/from ${airport} (${iataCode}). Please confirm availability and fare.`;
  const waHref = buildWALink(waMsg);

  const availableVehicles = VEHICLE_CONFIG.filter((v) => fare[v.fareKey] !== undefined);
  const lowestFare        = fare.sedan;

  // JSON-LD schema
  const schema = {
    '@context': 'https://schema.org',
    '@type':    'TaxiService',
    name:       `${city} Airport Taxi — Tirupati Travel`,
    description: seo.description,
    url:         seo.canonical,
    provider: {
      '@type':     'LocalBusiness',
      name:        'Tirupati Travel',
      url:         'https://tirupatitravel.in',
      telephone:   '+918726124680',
    },
    areaServed: city,
    offers: {
      '@type':        'Offer',
      price:          lowestFare.toString(),
      priceCurrency:  'INR',
      availability:   'https://schema.org/InStock',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name:    f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — AIRPORT HERO
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative bg-secondary overflow-hidden"
        style={{ minHeight: '55vh' }}
        aria-labelledby="airport-hero-heading"
      >
        <Image
          src="/assets/images/varanasi-tour-package.webp"
          alt={`${airport} taxi service`}
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
          quality={70}
        />
        <div className="absolute inset-0 gradient-hero" aria-hidden="true" />

        {/* Mandala watermark */}
        <div
          className="absolute top-0 right-0 w-56 h-56 md:w-72 md:h-72 pointer-events-none"
          style={{ color: '#FFD600', opacity: 0.06 }}
          aria-hidden="true"
        >
          <Image src="/svg/mandalas/corner-mandala.svg" alt="" fill className="object-contain" />
        </div>

        <div
          className="relative z-10 container-site flex flex-col items-center justify-center
                     text-center py-16 md:py-24"
          style={{ minHeight: '55vh' }}
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-white/60 text-xs flex-wrap justify-center">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={`/${citySlug}/places-to-visit-in-${citySlug}`}
                  className="hover:text-accent transition-colors capitalize">
                  {city}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/90">{city} Airport Taxi</li>
            </ol>
          </nav>

          {/* IATA badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20
                             text-accent text-sm font-bold px-4 py-1.5 rounded-full">
              <Plane size={14} aria-hidden="true" />
              {iataCode}
            </span>
          </div>

          {/* H1 */}
          <h1
            id="airport-hero-heading"
            className="page-heading text-white max-w-3xl mb-3"
          >
            {airport}<br />
            <span className="text-accent text-2xl md:text-3xl font-sans font-medium">
              Taxi Service — {city}
            </span>
          </h1>

          {/* Lotus ornament */}
          <div className="flex items-center gap-3 mb-5" aria-hidden="true">
            <div className="h-px w-12 bg-accent/40" />
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
              <path d="M7,8 Q5,5 5,3 Q7,1 7,8Z" fill="#FFD600" opacity="0.8"/>
              <path d="M7,8 Q9,5 9,3 Q7,1 7,8Z" fill="#FFD600" opacity="0.8"/>
              <circle cx="7" cy="2.5" r="1.2" fill="#FFD600"/>
            </svg>
            <div className="h-px w-12 bg-accent/40" />
          </div>

          {/* Distance + Duration + Price badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-full">
              <MapPin size={13} className="text-accent" aria-hidden="true" />
              {distance}
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-full">
              <Clock size={13} className="text-accent" aria-hidden="true" />
              {duration}
            </span>
            <span className="flex items-center gap-1.5 bg-primary/80 text-white text-sm px-4 py-2 rounded-full font-semibold">
              From {formatPrice(lowestFare)}
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm sm:max-w-none sm:justify-center">
            <a href={waHref} target="_blank" rel="noopener noreferrer"
               className="btn-whatsapp !px-8 !py-3.5 w-full sm:w-auto">
              <MessageCircle size={16} aria-hidden="true" />
              Book via WhatsApp
            </a>
            <a href="tel:8726124680"
               className="btn-outline border-white text-white hover:bg-white hover:text-primary !px-8 !py-3.5 w-full sm:w-auto">
              <Phone size={16} aria-hidden="true" />
              Call: 8726124680
            </a>
          </div>
        </div>

        {/* Ghat skyline */}
        <div className="ghat-skyline-wrap h-16 md:h-20" aria-hidden="true">
          <Image src="/svg/ghats/ghat-skyline.svg" alt="" width={1440} height={200}
            className="w-full h-auto" style={{ color: '#FFFFFF', opacity: 0.15 }} />
        </div>
      </section>

      {/* Lotus divider */}
      <div className="flex justify-center my-8" aria-hidden="true">
        <Image src="/svg/dividers/lotus-divider.svg" alt="" width={320} height={40} className="w-56 md:w-72 opacity-80" />
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — TERMINAL INFO
      ══════════════════════════════════════════════════════ */}
      <section className="bg-section-white section-pad" aria-labelledby="terminal-heading">
        <div className="container-site">
          <div className="text-center mb-8">
            <h2 id="terminal-heading" className="section-title">
              {airport} — Terminal Guide
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3" aria-hidden="true">
              <div className="h-px w-10 bg-accent/50" />
              <span className="text-primary">✦</span>
              <div className="h-px w-10 bg-accent/50" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {terminals.map((terminal, idx) => (
              <div key={idx} className="card-warm rounded-2xl p-6">
                {/* Terminal badge */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{idx + 1}</span>
                  </div>
                  <h3 className="font-semibold text-secondary text-sm md:text-base">
                    {terminal.name}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {terminal.description}
                </p>
                {/* Pickup point */}
                <div className="bg-cream rounded-xl p-3 border border-border-warm">
                  <p className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Navigation size={11} aria-hidden="true" />
                    Pickup Point
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {terminal.pickupPoint}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Flight status note */}
          <div className="mt-6 max-w-2xl mx-auto p-4 bg-cream rounded-2xl border border-border-warm text-center">
            <p className="text-text-secondary text-sm">
              <strong className="text-secondary">Flight tracking:</strong>{' '}
              {flightInfo.runwayNote}
            </p>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="flex justify-center my-8" aria-hidden="true">
        <Image src="/svg/dividers/ganga-wave.svg" alt="" width={320} height={24} className="w-56 md:w-72 opacity-70" />
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — PRICING CARDS
      ══════════════════════════════════════════════════════ */}
      <section className="bg-section-cream texture-cream section-pad" aria-labelledby="airport-pricing-heading">
        <div className="container-site">
          <div className="text-center mb-8">
            <h2 id="airport-pricing-heading" className="section-title">
              {city} Airport Taxi Fare
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3" aria-hidden="true">
              <div className="h-px w-10 bg-accent/50" />
              <span className="text-primary">✦</span>
              <div className="h-px w-10 bg-accent/50" />
            </div>
            <p className="section-sub mt-2">One-way airport transfer fare. No surge pricing. No hidden charges.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
            {availableVehicles.map((v) => {
              const vehicleFare = fare[v.fareKey];
              if (!vehicleFare) return null;
              return (
                <div key={v.fareKey}
                  className={`card-warm rounded-2xl overflow-hidden hover:-translate-y-1
                              hover:shadow-temple transition-all duration-300
                              ${v.badge === 'Most Popular' ? 'ring-2 ring-primary' : ''}`}
                >
                  {v.badge && (
                    <div className="bg-cream px-4 py-1.5 text-center border-b border-border-warm">
                      <span className={`badge text-[9px] ${v.badge === 'Most Popular' ? 'badge-primary' : 'badge-gold'}`}>
                        {v.badge}
                      </span>
                    </div>
                  )}
                  <div className="p-4 text-center">
                    <div className="flex justify-center mb-2" aria-hidden="true">
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                        <path d="M8,9 Q6,6 6,3 Q8,1 8,9Z" fill="#FF6B00" opacity="0.35"/>
                        <path d="M8,9 Q10,6 10,3 Q8,1 8,9Z" fill="#FF6B00" opacity="0.35"/>
                        <circle cx="8" cy="2.5" r="1" fill="#FF6B00" opacity="0.5"/>
                      </svg>
                    </div>
                    <h3 className="font-serif font-bold text-secondary text-sm mb-0.5">{v.name}</h3>
                    <p className="text-text-light text-[10px] mb-3">{v.models}</p>
                    <div className="flex items-center justify-center gap-3 text-xs text-text-secondary mb-3">
                      <span className="flex items-center gap-1">
                        <Users size={11} className="text-primary" aria-hidden="true" />{v.seats}
                      </span>
                      <span className="flex items-center gap-1">
                        <Luggage size={11} className="text-primary" aria-hidden="true" />{v.luggage}
                      </span>
                    </div>
                    <div className="bg-cream rounded-xl p-2.5 mb-3 border border-border-warm">
                      <p className="text-primary font-bold text-xl font-serif">{formatPrice(vehicleFare)}</p>
                      <p className="text-text-light text-[9px]">one-way transfer</p>
                    </div>
                    <a
                      href={buildWALink(`Book ${v.name} airport taxi at ${airport} (${iataCode})`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full !justify-center !text-xs !py-2"
                    >
                      Book
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-text-light text-xs text-center">
            * Fare includes driver charges, fuel, and GST. Toll charges (where applicable) are extra.
          </p>
        </div>
      </section>

      {/* Mandala divider */}
      <div className="flex justify-center my-8" aria-hidden="true">
        <Image src="/svg/dividers/mandala-divider.svg" alt="" width={320} height={36} className="w-56 md:w-72 opacity-70" />
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — INCLUSIONS + FLIGHT INFO
      ══════════════════════════════════════════════════════ */}
      <section className="bg-section-white section-pad" aria-labelledby="inclusions-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Inclusions */}
            <div>
              <h2 id="inclusions-heading" className="section-title mb-6">
                What's Included
              </h2>
              <div className="space-y-3">
                {inclusions.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-cream rounded-xl px-4 py-3 border border-border-warm">
                    <CheckCircle size={15} className="text-primary flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking instructions + Flight info */}
            <div className="space-y-5">
              <div className="card-warm rounded-2xl p-5">
                <h3 className="font-semibold text-secondary text-base mb-4 flex items-center gap-2">
                  <Star size={16} className="text-primary" aria-hidden="true" />
                  How to Book
                </h3>
                <ol className="space-y-3">
                  {bookingInstructions.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold
                                       flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-text-secondary">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Airlines */}
              <div className="card-warm rounded-2xl p-5">
                <h3 className="font-semibold text-secondary text-sm mb-3 flex items-center gap-2">
                  <Plane size={15} className="text-primary" aria-hidden="true" />
                  Airlines Operating at {iataCode}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {flightInfo.airlines.map((airline) => (
                    <span key={airline} className="badge-accent text-xs px-3 py-1.5 rounded-full">
                      {airline}
                    </span>
                  ))}
                </div>

                <h3 className="font-semibold text-secondary text-sm mb-3 mt-5 flex items-center gap-2">
                  <Navigation size={15} className="text-primary" aria-hidden="true" />
                  Major Routes
                </h3>
                <ul className="space-y-1.5">
                  {flightInfo.majorRoutes.map((route) => (
                    <li key={route} className="flex items-center gap-2 text-sm text-text-secondary">
                      <ArrowRight size={12} className="text-primary flex-shrink-0" aria-hidden="true" />
                      {route}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lotus divider */}
      <div className="flex justify-center my-8" aria-hidden="true">
        <Image src="/svg/dividers/lotus-divider.svg" alt="" width={320} height={40} className="w-56 md:w-72 opacity-70" />
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — FAQ
      ══════════════════════════════════════════════════════ */}
      <section className="bg-section-cream texture-cream section-pad" aria-labelledby="airport-faq-heading">
        <div className="container-site max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 id="airport-faq-heading" className="section-title">
              {city} Airport Taxi — FAQs
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3" aria-hidden="true">
              <div className="h-px w-10 bg-accent/50" />
              <span className="text-primary">✦</span>
              <div className="h-px w-10 bg-accent/50" />
            </div>
          </div>
          <div className="space-y-3" role="list">
            {faqs.map((faq, i) => (
              <div key={i} className="card-warm rounded-2xl p-5" role="listitem">
                <h3 className="font-semibold text-secondary text-sm md:text-base mb-2">{faq.q}</h3>
                <div className="w-8 h-0.5 bg-accent rounded-full mb-2" aria-hidden="true" />
                <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mandala divider */}
      <div className="flex justify-center my-8" aria-hidden="true">
        <Image src="/svg/dividers/mandala-divider.svg" alt="" width={320} height={36} className="w-56 md:w-72 opacity-70" />
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — BOOKING CTA
      ══════════════════════════════════════════════════════ */}
      <section className="relative bg-secondary overflow-hidden section-pad" aria-labelledby="airport-cta-heading">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-80 h-80 opacity-[0.05] text-white">
            <Image src="/svg/mandalas/corner-mandala.svg" alt="" width={320} height={320} className="w-full" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-14 opacity-10 pointer-events-none" aria-hidden="true">
          <Image src="/svg/ghats/ghat-skyline.svg" alt="" width={1440} height={140} className="w-full" style={{ color: '#fff' }} />
        </div>

        <div className="relative z-10 container-site text-center text-white">
          <p className="text-accent text-xs uppercase tracking-widest mb-3 font-medium">
            24/7 · Flight Tracking · Meet &amp; Greet · No Surge Pricing
          </p>
          <h2 id="airport-cta-heading" className="page-heading mb-4">
            Book Your {city} Airport Cab Now
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5" aria-hidden="true">
            <div className="h-px w-16 bg-accent/40" />
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
              <path d="M7,8 Q5,5 5,3 Q7,1 7,8Z" fill="#FFD600" opacity="0.8"/>
              <path d="M7,8 Q9,5 9,3 Q7,1 7,8Z" fill="#FFD600" opacity="0.8"/>
              <circle cx="7" cy="2.5" r="1.2" fill="#FFD600"/>
            </svg>
            <div className="h-px w-16 bg-accent/40" />
          </div>
          <p className="text-white/75 text-base max-w-lg mx-auto mb-6 leading-relaxed">
            Share your flight number and arrival time — we track your flight and wait for you.
            No rush, no stress.
          </p>
          <div className="inline-block bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-8">
            <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Sedan starting from</p>
            <p className="text-accent font-serif font-bold text-3xl">{formatPrice(lowestFare)}</p>
            <p className="text-white/50 text-xs mt-1">One-way transfer · Toll extra</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={waHref} target="_blank" rel="noopener noreferrer"
               className="btn-whatsapp !px-8 !py-3.5 !text-sm w-full sm:w-auto">
              <MessageCircle size={16} aria-hidden="true" />
              Book via WhatsApp
            </a>
            <a href="tel:8726124680"
               className="btn-outline border-white text-white hover:bg-white hover:text-primary !px-8 !py-3.5 !text-sm w-full sm:w-auto">
              <Phone size={16} aria-hidden="true" />
              Call: 8726124680
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
