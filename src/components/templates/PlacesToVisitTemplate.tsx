// src/components/templates/PlacesToVisitTemplate.tsx
// Full-page template for /city/places-to-visit-in-city pages
// Sections: Hero → PlacesDetailGrid → NearbyRoutes → BookingCTA → InternalLinks
// Server Component

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, ArrowRight, ChevronRight } from 'lucide-react';

import SacredDivider from '@/components/shared/SacredDivider';
import PlaceCard from '@/components/shared/PlaceCard';
import InternalLinks from '@/components/shared/InternalLinks';

import type { PlacesToVisitData } from '@/types/templates';

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Props = {
  data: PlacesToVisitData;
};

// ─── HERO ─────────────────────────────────────────────────────────────────────

function PlacesHero({ city, seo }: { city: string; seo: PlacesToVisitData['seo'] }) {
  return (
    <section className="relative bg-section-dark min-h-[42vh] flex items-end overflow-hidden">
      {/* Mandala watermark */}
      <div
        className="mandala-watermark absolute top-4 right-4 w-48 h-48 text-white"
        style={{ opacity: 0.07 }}
        aria-hidden="true"
      >
        <Image src="/svg/ghats/corner-mandala.svg" alt="" fill className="object-contain" />
      </div>

      {/* Ghat skyline */}
      <div className="ghat-skyline-wrap absolute bottom-0 left-0 right-0 h-20 text-white opacity-20" aria-hidden="true">
        <Image src="/svg/ghats/ghat-skyline.svg" alt="" fill className="object-cover object-bottom" />
      </div>

      <div className="relative container-site w-full pb-14 pt-28">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-white/60 text-sm mb-4 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link href={`/${city.toLowerCase()}`} className="hover:text-white transition-colors capitalize">
            {city}
          </Link>
          <ChevronRight size={14} />
          <span className="text-white">Places to Visit</span>
        </nav>

        {/* H1 — exactly one per page */}
        <h1 className="page-heading mb-4 max-w-3xl">
          Places to Visit in{' '}
          <span className="text-gold-shimmer">{city}</span>
        </h1>
        <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
          {seo.description}
        </p>
      </div>
    </section>
  );
}

// ─── PLACES DETAIL GRID ───────────────────────────────────────────────────────

function PlacesDetailGrid({ places, city }: { places: PlacesToVisitData['places']; city: string }) {
  return (
    <section className="bg-section-cream texture-cream section-pad">
      <div className="container-site">
        <div className="text-center mb-10">
          <h2 className="cream-title">Must-Visit Spots in {city}</h2>
          <p className="section-sub">
            Handpicked temples, ghats, heritage sites and natural wonders
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place) => (
            <PlaceCard
              key={place.name}
              place={place}
              imageHeight={220}
              showDescription
              className="h-full"
            />
          ))}
        </div>

        {/* Booking nudge */}
        <div className="mt-10 card-warm rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-secondary">Want to visit all these places?</p>
            <p className="text-sm text-text-secondary mt-0.5">
              Book a full-day {city} sightseeing cab with an experienced driver
            </p>
          </div>
          <a
            href="tel:+918726124680"
            className="btn-primary whitespace-nowrap flex items-center gap-2 px-6 py-3"
          >
            <Phone size={16} />
            Book Sightseeing Cab
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ SECTION ──────────────────────────────────────────────────────────────

function PlacesFAQ({ faqs, city }: { faqs: PlacesToVisitData['faqs']; city: string }) {
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
    <section className="bg-section-white section-pad">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-site max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">About visiting {city}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="card-warm rounded-2xl p-5">
              <h3 className="font-semibold text-secondary mb-2 text-base">{faq.q}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── NEARBY ROUTES ────────────────────────────────────────────────────────────

function NearbyRoutes({
  routes,
  city,
}: {
  routes: PlacesToVisitData['nearbyRoutes'];
  city: string;
}) {
  return (
    <section className="bg-section-cream texture-cream section-pad">
      <div className="container-site">
        <div className="text-center mb-10">
          <h2 className="cream-title">Onward Journeys from {city}</h2>
          <p className="section-sub">Explore nearby pilgrimage cities with Tirupati Travel</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {routes.map((route) => (
            <Link
              key={route.slug}
              href={`/${route.slug}`}
              className="group card-warm rounded-2xl p-4 flex items-center justify-between hover:shadow-card-hover hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <MapPin size={16} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-semibold text-secondary text-sm group-hover:text-primary transition-colors duration-200">
                    {city} → {route.destination}
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
      </div>
    </section>
  );
}

// ─── BOOKING CTA ──────────────────────────────────────────────────────────────

function BookingCTA({ city }: { city: string }) {
  const waMessage = encodeURIComponent(
    `Hi, I want to book a sightseeing cab in ${city}. Please share packages and pricing.`
  );
  return (
    <section className="relative bg-section-dark overflow-hidden section-pad-sm">
      {/* Mandala */}
      <div
        className="mandala-watermark absolute -right-16 top-1/2 -translate-y-1/2 w-72 h-72 text-white"
        style={{ opacity: 0.08 }}
        aria-hidden="true"
      >
        <Image src="/svg/ghats/corner-mandala.svg" alt="" fill className="object-contain" />
      </div>

      <div className="relative container-site text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
          Ready to Explore {city}?
        </h2>
        <p className="text-white/70 text-base mb-6 max-w-xl mx-auto">
          Book a comfortable AC cab with a knowledgeable local driver — we know every temple, ghat, and shortcut.
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
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline border-white text-white hover:bg-white hover:text-secondary flex items-center gap-2 px-7 py-3 text-base"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── MAIN TEMPLATE ────────────────────────────────────────────────────────────

export default function PlacesToVisitTemplate({ data }: Props) {
  const { city, places, nearbyRoutes, faqs, seo } = data;

  // TouristAttraction JSON-LD for the city
  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: city,
    description: seo.description,
    url: seo.canonical,
    touristType: ['Pilgrims', 'Heritage travelers', 'Buddhist pilgrims'],
    includesAttraction: places.map((p) => ({
      '@type': 'TouristAttraction',
      name: p.name,
      description: p.description,
    })),
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      {/* 1. Hero */}
      <PlacesHero city={city} seo={seo} />

      <SacredDivider variant="lotus" />

      {/* 2. Places detail grid */}
      <PlacesDetailGrid places={places} city={city} />

      <SacredDivider variant="wave" />

      {/* 3. FAQ */}
      <PlacesFAQ faqs={faqs} city={city} />

      <SacredDivider variant="mandala" />

      {/* 4. Booking CTA */}
      <BookingCTA city={city} />

      {/* 5. Nearby routes */}
      <NearbyRoutes routes={nearbyRoutes} city={city} />

      {/* 6. Internal SEO links */}
      <InternalLinks template="PlacesToVisitTemplate" data={data} />
    </>
  );
}