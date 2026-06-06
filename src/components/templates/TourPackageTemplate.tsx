// src/components/templates/TourPackageTemplate.tsx
//
// Full-page template for all tour package pages:
//   varanasi/varanasi-tour-packages
//   varanasi/varanasi-darshan-tour-package
//   ayodhya/ayodhya-tour-packages
//   ayodhya/ayodhya-darshan-tour-package
//   allahabad/allahabad-tour-packages
//   allahabad/allahabad-darshan-tour-package
//
// Sections:
//   1. PackageHero       — H1 + city image + "X Night Y Day" badge-gold
//   2. Itinerary         — Day-wise timeline (saffron connector line)
//   3. Inclusions        — icon list: hotel, cab, darshan, meals
//   4. VehicleOptions    — VehicleCard for package-compatible vehicles
//   5. PricingSection    — card-warm price per person / group
//   6. BookingCTA        — gradient-sacred banner
//   7. FAQ               — accordion-style static FAQ
//   8. InternalLinks     — related packages + city landing
//
// Server Component — no 'use client' needed.

import Image from 'next/image';
import { Phone, CheckCircle, XCircle, Users, CalendarDays, MapPin } from 'lucide-react';
import SacredDivider from '@/components/shared/SacredDivider';
import SectionHeader from '@/components/shared/SectionHeader';
import InternalLinks from '@/components/shared/InternalLinks';
import { buildWALink } from '@/lib/utils';
import type { TourPackage } from '@/data/tourPackages';

// ── Internal link helper ──────────────────────────────────────────────────────
function buildInternalLinks(city: string, citySlug: string, currentSlug: string) {
  const allLinks = [
    { label: `${city} Tour Packages`,          href: `/${citySlug}/${citySlug}-tour-packages` },
    { label: `${city} Darshan Package`,         href: `/${citySlug}/${citySlug}-darshan-tour-package` },
    { label: `Car Rental ${city}`,              href: `/${citySlug}/car-rental-${citySlug}` },
    { label: `Tempo Traveller ${city}`,         href: `/${citySlug}/tempo-traveller-${citySlug}` },
    { label: `Places to Visit in ${city}`,      href: `/${citySlug}/places-to-visit-in-${citySlug}` },
    { label: `${city} Local Sightseeing Cab`,   href: `/${citySlug}/${citySlug}-local-sightseeing-cab` },
  ];
  // Exclude the current page from the list
  return allLinks.filter((l) => !l.href.includes(currentSlug));
}

// ── FAQ JSON-LD ───────────────────────────────────────────────────────────────
function buildFaqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function TourPackageTemplate({ data }: { data: TourPackage }) {
  const citySlug    = data.city.toLowerCase();
  const waLink      = buildWALink(
    `Hi, I want to book the ${data.packageName} (${data.duration}) tour package for ${data.city}. Please share availability and details.`,
  );
  const internalLinks = buildInternalLinks(data.city, citySlug, data.slug);

  return (
    <>
      {/* FAQ JSON-LD */}
      {data.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(data.faqs)) }}
        />
      )}

      {/* ── 1. PACKAGE HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Hero image */}
        <div className="relative h-[55vh] min-h-[400px] md:h-[60vh]">
          <Image
            src={data.image}
            alt={`${data.packageName} — ${data.city} tour`}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />

          {/* Ghat skyline bookend */}
          <div className="ghat-skyline-wrap z-10 text-white/20" aria-hidden="true">
            <Image src="/svg/ghats/ghat-skyline.svg" alt="" width={1440} height={80} className="w-full h-auto" />
          </div>

          {/* Content overlay */}
          <div className="absolute inset-0 z-10 flex items-end">
            <div className="container-site pb-10 md:pb-14">
              {/* Breadcrumb */}
              <nav className="text-white/50 text-sm mb-4 flex items-center gap-2">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>/</span>
                <a href={`/${citySlug}`} className="hover:text-white transition-colors">{data.city}</a>
                <span>/</span>
                <span className="text-white/80">{data.packageName}</span>
              </nav>

              {/* Duration badge */}
              <div className="inline-flex items-center gap-2 bg-gold text-secondary font-bold text-sm px-4 py-1.5 rounded-full mb-4 shadow">
                <CalendarDays size={15} />
                {data.duration}
              </div>

              {/* H1 */}
              <h1 className="page-heading mb-3 leading-tight max-w-3xl">
                {data.packageName} — {data.city}
              </h1>

              <div className="flex items-center gap-4 text-white/75 text-sm mb-6">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {data.city}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={14} />
                  {data.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users size={14} />
                  From ₹{data.pricing.perPerson.toLocaleString('en-IN')}/person
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:8726124680" className="btn-primary px-8 py-3.5 text-base flex items-center justify-center gap-2">
                  <Phone size={18} />
                  Call: 87261 24680
                </a>
                <a href={waLink} target="_blank" rel="noopener noreferrer"
                   className="btn-whatsapp px-8 py-3.5 text-base text-center">
                  WhatsApp to Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SacredDivider variant="lotus" />

      {/* ── 2. ITINERARY ────────────────────────────────────────────────────── */}
      <section className="bg-section-white section-pad">
        <div className="container-site">
          <SectionHeader title="Day-by-Day Itinerary" subtitle={`Your complete ${data.duration} journey plan`} />

          <div className="max-w-3xl mx-auto">
            {data.itinerary.map((day, idx) => (
              <div key={day.day} className="flex gap-5 mb-8 last:mb-0">
                {/* Day number + connector */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-float z-10">
                    <span className="font-serif font-bold text-white text-base leading-none">D{day.day}</span>
                  </div>
                  {idx < data.itinerary.length - 1 && (
                    <div className="w-0.5 flex-1 bg-primary/20 mt-1" />
                  )}
                </div>

                {/* Day content */}
                <div className="card-warm rounded-2xl p-5 flex-1 mb-1">
                  <h3 className="font-serif font-bold text-text-primary text-lg mb-3">
                    Day {day.day}: {day.title}
                  </h3>
                  <ul className="space-y-2">
                    {day.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-2.5 text-text-secondary text-sm">
                        <CheckCircle size={15} className="text-primary flex-shrink-0 mt-0.5" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SacredDivider variant="wave" />

      {/* ── 3. INCLUSIONS & EXCLUSIONS ──────────────────────────────────────── */}
      <section className="bg-section-cream section-pad">
        <div className="container-site">
          <SectionHeader title="What's Included" subtitle="Everything covered in this package" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Inclusions */}
            <div className="card-warm rounded-2xl p-6">
              <h3 className="font-serif font-bold text-text-primary text-lg mb-4 flex items-center gap-2">
                <CheckCircle size={20} className="text-success" />
                Included
              </h3>
              <ul className="space-y-2.5">
                {data.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-text-secondary text-sm">
                    <CheckCircle size={15} className="text-success flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="card-warm rounded-2xl p-6">
              <h3 className="font-serif font-bold text-text-primary text-lg mb-4 flex items-center gap-2">
                <XCircle size={20} className="text-text-light" />
                Not Included
              </h3>
              <ul className="space-y-2.5">
                {data.exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-text-secondary text-sm">
                    <XCircle size={15} className="text-text-light flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SacredDivider variant="mandala" />

      {/* ── 4. PRICING ──────────────────────────────────────────────────────── */}
      <section className="bg-section-white section-pad">
        <div className="container-site">
          <SectionHeader title="Package Pricing" subtitle="Transparent pricing — no hidden charges" />

          <div className="max-w-2xl mx-auto">
            <div className="card-warm rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-secondary px-6 py-4">
                <h3 className="font-serif font-bold text-white text-base">
                  {data.packageName} — {data.duration}
                </h3>
              </div>

              {/* Price rows */}
              <div className="divide-y divide-border-warm">
                {/* Per person */}
                <div className="flex items-center justify-between px-6 py-5">
                  <div>
                    <div className="font-medium text-text-primary">Per Person</div>
                    <div className="text-text-light text-xs mt-0.5">Individual / couple booking</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary font-serif text-2xl leading-none">
                      ₹{data.pricing.perPerson.toLocaleString('en-IN')}
                    </div>
                    <div className="text-text-light text-xs mt-0.5">per person</div>
                  </div>
                </div>

                {/* Group price */}
                {data.pricing.group && (
                  <div className="flex items-center justify-between px-6 py-5 bg-cream/40">
                    <div>
                      <div className="font-medium text-text-primary flex items-center gap-2">
                        Group Rate
                        <span className="bg-gold text-secondary text-xs font-bold px-2 py-0.5 rounded-full">
                          4+ pax
                        </span>
                      </div>
                      <div className="text-text-light text-xs mt-0.5">4 or more passengers</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary font-serif text-2xl leading-none">
                        ₹{data.pricing.group.toLocaleString('en-IN')}
                      </div>
                      <div className="text-text-light text-xs mt-0.5">per person</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footnote */}
              <div className="px-6 py-4 bg-cream-dark border-t border-border-warm">
                <p className="text-text-light text-xs">
                  Prices are indicative. Final fare depends on vehicle choice, season, and customisations.
                  Contact us for exact quote.
                </p>
              </div>
            </div>

            {/* Book now buttons below pricing */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a href="tel:8726124680"
                 className="btn-primary px-8 py-3.5 text-base text-center flex items-center justify-center gap-2 flex-1">
                <Phone size={18} />
                Call to Book
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                 className="btn-whatsapp px-8 py-3.5 text-base text-center flex-1">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. BOOKING CTA ──────────────────────────────────────────────────── */}
      <section className="gradient-sacred relative overflow-hidden py-14 md:py-16">
        <div className="mandala-watermark absolute right-6 top-1/2 -translate-y-1/2 w-64 h-64 text-white"
             style={{ opacity: 0.07 }} aria-hidden="true">
          <Image src="/svg/ghats/corner-mandala.svg" alt="" fill className="object-contain animate-mandala-slow" />
        </div>
        <div className="container-site relative z-10 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-3">
            Book Your {data.packageName} Today
          </h2>
          <p className="text-white/75 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Comfortable AC cab &bull; Hotel included &bull; Expert local driver &bull; No hidden charges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8726124680"
               className="btn-gold px-8 py-3.5 text-base flex items-center justify-center gap-2">
              <Phone size={18} />
              Call: 87261 24680
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer"
               className="btn-whatsapp px-8 py-3.5 text-base text-center">
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
                    <h3 className="font-sans font-semibold text-text-primary text-sm mb-2">{faq.q}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── 7. INTERNAL LINKS ───────────────────────────────────────────────── */}
      {internalLinks.length > 0 && (
        <>
          <SacredDivider variant="gold-line" />
          <InternalLinks links={internalLinks} heading={`More in ${data.city}`} />
        </>
      )}
    </>
  );
}
