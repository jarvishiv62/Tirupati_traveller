'use client';
import Image from 'next/image';
import Link from 'next/link';
import { tourPackages } from '@/data/tourPackages';

/* ── City → cab booking URL map ─────────────────────────────── */
const CITY_CAB_URL: Record<string, string> = {
  varanasi: '/varanasi/varanasi-tour-packages',
  ayodhya: '/ayodhya/ayodhya-tour-packages',
  allahabad: '/allahabad/allahabad-tour-packages',
  lucknow: '/lucknow/outstation-cab-in-lucknow',
  gaya: '/varanasi/varanasi-to-gaya-taxi',
};

/* ── Duration → icon map ─────────────────────────────────────── */
function getDurationIcon(duration: string): string {
  if (duration.includes('1N') || duration.includes('1 N')) return '🌙';
  if (duration.includes('2N') || duration.includes('2 N')) return '🌙🌙';
  if (duration.includes('3N') || duration.includes('3 N')) return '🌙🌙🌙';
  return '🗓️';
}

/* ── Individual package card (Client) ─────────────────────── */
export default function ClientPackageCard({ pkg }: { pkg: (typeof tourPackages)[0] }) {
  const cityKey = pkg.city.toLowerCase();
  const cabUrl = CITY_CAB_URL[cityKey] ?? `/${cityKey}`;
  const pkgUrl = `/${cityKey}/${pkg.slug}`;
  const dIcon = getDurationIcon(pkg.duration);

  return (
    <div className="pkg-card group relative overflow-hidden rounded-2xl cursor-pointer">
      <div className="pkg-card-img">
        <Image
          src={pkg.image}
          alt={`${pkg.packageName} pilgrimage tour`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="pkg-card-gradient" />
      <div className="absolute top-3 left-3 z-20">
        <span className="pkg-duration-badge">{dIcon} {pkg.duration}</span>
      </div>
      <div className="absolute top-3 right-3 z-20">
        <span className="pkg-city-badge">{pkg.city}</span>
      </div>
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
          <Link href={cabUrl} className="pkg-quick-book" onClick={(e) => e.stopPropagation()}>
            Book Cab
          </Link>
        </div>
      </div>
      <div className="pkg-card-hover-overlay">
        <p className="text-white/80 text-xs text-center mb-4 px-2 leading-relaxed">
          Includes AC cab · Expert guide · 24/7 support
        </p>
        <Link href={cabUrl} className="dest-cta-primary" onClick={(e) => e.stopPropagation()}>
          🚗 Book Cab for This Tour
        </Link>
        <Link href={pkgUrl} className="dest-cta-secondary" onClick={(e) => e.stopPropagation()}>
          📋 View Full Itinerary
        </Link>
      </div>
    </div>
  );
}
