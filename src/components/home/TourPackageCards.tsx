// src/components/home/TourPackageCards.tsx
// Dark overlay tour package cards — cab-booking focused
// Server Component
import Link from 'next/link';
import Image from 'next/image';
import ClientPackageCard from "./ClientPackageCard";
import { tourPackages } from '@/data/tourPackages';

/* ── City → cab booking URL map ─────────────────────────────── */
const CITY_CAB_URL: Record<string, string> = {
  varanasi:  '/varanasi/varanasi-tour-packages',
  ayodhya:   '/ayodhya/ayodhya-tour-packages',
  allahabad: '/allahabad/allahabad-tour-packages',
  lucknow:   '/lucknow/outstation-cab-in-lucknow',
  gaya:      '/varanasi/varanasi-to-gaya-taxi',
};

/* ── Duration → icon map ─────────────────────────────────────── */
function getDurationIcon(duration: string): string {
  if (duration.includes('1N') || duration.includes('1 N')) return '🌙';
  if (duration.includes('2N') || duration.includes('2 N')) return '🌙🌙';
  if (duration.includes('3N') || duration.includes('3 N')) return '🌙🌙🌙';
  return '🗓️';
}

/* ── Individual package card ─────────────────────────────────── */
function PackageCard({
  pkg,
}: {
  pkg: (typeof tourPackages)[0];
}) {
  const cityKey  = pkg.city.toLowerCase();
  const cabUrl   = CITY_CAB_URL[cityKey] ?? `/${cityKey}`;
  const pkgUrl   = `/${cityKey}/${pkg.slug}`;
  const dIcon    = getDurationIcon(pkg.duration);

  return (
    <div className="pkg-card group relative overflow-hidden rounded-2xl cursor-pointer">

      {/* ── Background image ─────────────────────────────── */}
      <div className="pkg-card-img">
        <Image
          src={pkg.image}
          alt={`${pkg.packageName} pilgrimage tour`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* ── Always-visible gradient ───────────────────────── */}
      <div className="pkg-card-gradient" />

      {/* ── Duration badge ───────────────────────────────── */}
      <div className="absolute top-3 left-3 z-20">
        <span className="pkg-duration-badge">
          {dIcon} {pkg.duration}
        </span>
      </div>

      {/* ── City badge ───────────────────────────────────── */}
      <div className="absolute top-3 right-3 z-20">
        <span className="pkg-city-badge">{pkg.city}</span>
      </div>

      {/* ── Always-visible bottom ────────────────────────── */}
      <div className="pkg-card-content">
        <h3 className="font-serif font-bold text-white text-base leading-snug mb-1 line-clamp-2">
          {pkg.packageName}
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-white/50 text-[10px] uppercase tracking-wider">Starting</span>
            <div className="text-[#F0B84A] font-bold text-lg font-serif leading-none">
              ₹{pkg.pricing.perPerson.toLocaleString('en-IN')}
            </div>
            <span className="text-white/50 text-[10px]">per person</span>
          </div>
          {/* Quick book pill — always visible */}
          <Link
            href={cabUrl}
            className="pkg-quick-book"
            aria-label={`Book cab for ${pkg.packageName}`}
          >
            Book Cab
          </Link>
        </div>
      </div>

      {/* ── Hover overlay — dual CTA ──────────────────────── */}
      <div className="pkg-card-hover-overlay">
        <p className="text-white/80 text-xs text-center mb-4 px-2 leading-relaxed">
          Includes AC cab · Expert guide · 24/7 support
        </p>

        {/* PRIMARY — Book cab (conversion) */}
        <Link
          href={cabUrl}
          className="dest-cta-primary"
          onClick={(e) => e.stopPropagation()}
        >
          🚗 Book Cab for This Tour
        </Link>

        {/* SECONDARY — View full itinerary */}
        <Link
          href={pkgUrl}
          className="dest-cta-secondary"
          onClick={(e) => e.stopPropagation()}
        >
          📋 View Full Itinerary
        </Link>
      </div>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────────── */
export default function TourPackageCards() {
  const featured = tourPackages.slice(0, 4);

  return (
    <section className="bg-section-white section-pad">
      <div className="container-site">

        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full
                          border border-primary/20 bg-primary/5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">
              Pilgrimage Packages
            </span>
          </div>
          <h2 className="section-title mb-3">
            All-Inclusive Tour Packages
          </h2>
          <div className="divider-gold" />
          <p className="section-sub mt-4 max-w-lg mx-auto">
            Cab + guide + itinerary — everything arranged. You just show up.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {featured.map((pkg) => (
            <ClientPackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4
                        mt-10 pt-8 border-t border-border">
          <p className="text-text-secondary text-sm text-center sm:text-left">
            Can&apos;t find your destination?{' '}
            <span className="font-semibold text-secondary">We cover 100+ routes.</span>
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/varanasi/varanasi-tour-packages"
              className="btn-primary text-sm px-6 py-2.5"
            >
              All Tour Packages
            </Link>
            <a
              href="tel:8726124680"
              className="btn-outline text-sm px-6 py-2.5"
            >
              📞 Call to Customise
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}