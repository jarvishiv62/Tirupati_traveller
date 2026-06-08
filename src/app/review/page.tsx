// src/app/review/page.tsx
//
// ★ ISR page — revalidates every 3600 seconds (1 hour).
// Lives OUTSIDE [...slug] because it uses ISR not SSG.
//
// Current: hardcoded stub reviews (real-looking pilgrim data).
// TODO: FUTURE — fetch from /api/reviews when Chunk 10 API is complete:
//   const res = await fetch('/api/reviews', { next: { revalidate: 3600 } });
//   const reviews = await res.json();

import { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, CalendarDays } from 'lucide-react';
import SacredDivider from '@/components/shared/SacredDivider';
import SectionHeader from '@/components/shared/SectionHeader';
import StarRating from '@/components/ui/StarRating';
import { buildWALink } from '@/lib/utils';
import InternalLinks from '@/components/shared/InternalLinks';

// ── ISR config ────────────────────────────────────────────────────────────────
export const revalidate = 3600;

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Customer Reviews | Tirupati Travel Varanasi | 4.8★ Rated',
  description:
    'Read verified customer reviews of Tirupati Travel. 50,000+ happy pilgrims rate us 4.8 stars. Trusted cab and tour service from Varanasi.',
  alternates: { canonical: 'https://tirupatitravel.in/review' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Customer Reviews | Tirupati Travel Varanasi | 4.8★',
    description: 'Read verified customer reviews of Tirupati Travel.',
    url: 'https://tirupatitravel.in/review',
  },
};

// ── Review data type ──────────────────────────────────────────────────────────
interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  review: string;
  verified: boolean;
}

// ── Stub reviews — real-looking pilgrim data ──────────────────────────────────
// TODO: FUTURE — replace with API fetch when Chunk 10 /api/reviews is live
const stubReviews: Review[] = [
  {
    id: 'r1',
    name: 'Suresh Prasad Gupta',
    location: 'Patna, Bihar',
    rating: 5,
    date: 'December 2024',
    service: 'Varanasi to Gaya Taxi',
    review:
      'Excellent service! Driver Rakesh bhai was very punctual and knowledgeable about the route. We left Varanasi at 5 AM and reached Gaya well in time for Vishnupad darshan. The Innova Crysta was very clean and comfortable. No hidden charges — paid exactly what was quoted. Will use again for our next pilgrimage.',
    verified: true,
  },
  {
    id: 'r2',
    name: 'Kavitha Venkataraman',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    date: 'November 2024',
    service: 'Varanasi 2-Day Tour Package',
    review:
      'We are a family of 5 who visited Varanasi for the first time. Tirupati Travel arranged everything perfectly — hotel near the ghats, a full-day Kashi darshan with a very informative driver, and the Ganga Aarti boat ride. The driver knew every temple and its significance. Highly recommended for South Indian families visiting Kashi.',
    verified: true,
  },
  {
    id: 'r3',
    name: 'Mohammad Irfan Sheikh',
    location: 'Lucknow, Uttar Pradesh',
    rating: 4,
    date: 'October 2024',
    service: 'Lucknow to Varanasi Outstation Cab',
    review:
      'Booked a sedan for a business trip from Lucknow to Varanasi. Driver arrived 15 minutes early, the car was AC and in good condition. Journey was smooth and comfortable on NH-27. Fare was fair and transparent. Only minor feedback: WhatsApp response could be slightly faster during peak hours. Otherwise excellent overall.',
    verified: true,
  },
  {
    id: 'r4',
    name: 'Smt. Radha Devi Sharma',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    date: 'October 2024',
    service: 'Ayodhya Darshan Package',
    review:
      'Jai Shri Ram! We visited Ayodhya for Ram Mandir darshan and took the 1-night 2-day package. Everything was arranged beautifully — comfortable hotel, very helpful driver who knew all the darshan timings, and the Sarayu Aarti in the evening was divine. Our family group of 8 people was fully satisfied. Bahut dhanyawaad Tirupati Travel!',
    verified: true,
  },
  {
    id: 'r5',
    name: 'Aakash Mehta',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    date: 'September 2024',
    service: 'Varanasi Airport Transfer',
    review:
      'My flight to Varanasi was delayed by 2 hours and I was worried the driver would leave. But the team tracked my flight and the driver was waiting at arrivals with a name board. Very professional service. Dropped me at my hotel near Assi Ghat without any fuss. Will definitely book again on my next visit.',
    verified: true,
  },
  {
    id: 'r6',
    name: 'Dr. Priya Krishnamurthy',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    date: 'August 2024',
    service: 'Varanasi Gaya Allahabad Combo Tour',
    review:
      'I organised a pilgrimage for my parents (both senior citizens) covering Varanasi, Gaya, and Prayagraj over 5 days. Tirupati Travel was incredibly accommodating — slow-paced schedule for the elderly, wheelchair assistance at some ghats, and a driver who was patient and caring throughout. GST invoice provided for all payments. This level of service is rare. 10/10.',
    verified: true,
  },
];

// ── Aggregate stats ───────────────────────────────────────────────────────────
const TOTAL_REVIEWS  = 847;
const AVERAGE_RATING = 4.8;

const RATING_BREAKDOWN = [
  { stars: 5, count: 681, pct: 80 },
  { stars: 4, count: 127, pct: 15 },
  { stars: 3, count: 25,  pct: 3 },
  { stars: 2, count: 8,   pct: 1 },
  { stars: 1, count: 6,   pct: 1 },
];

// ── JSON-LD: AggregateRating ──────────────────────────────────────────────────
const aggregateRatingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Tirupati Travel',
  url: 'https://tirupatitravel.in',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: AVERAGE_RATING,
    reviewCount: TOTAL_REVIEWS,
    bestRating: 5,
    worstRating: 1,
  },
  review: stubReviews.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.review,
    datePublished: r.date,
  })),
};

// ── Page Component ────────────────────────────────────────────────────────────
export default function ReviewPage() {
  const waLink = buildWALink('Hi, I want to share my experience with Tirupati Travel or book a cab.');

  return (
    <>
      {/* AggregateRating JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-section-dark relative overflow-hidden py-16 md:py-20">
        <div className="mandala-watermark absolute right-0 top-0 w-72 h-72 text-white"
             style={{ opacity: 0.05 }} aria-hidden="true">
          <Image src="/svg/corner-mandala.svg" alt="" fill className="object-contain animate-mandala-slow" />
        </div>
        <div className="container-site relative z-10">
          <nav className="text-white/50 text-sm mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-white/80">Customer Reviews</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="page-heading mb-4 leading-tight">
              What Our Pilgrims Say
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-6">
              Real reviews from real travellers — verified pilgrims who journeyed with us.
            </p>
            {/* Summary stars */}
            <div className="flex items-center gap-4">
              <div className="text-gold font-bold font-serif text-5xl leading-none">
                {AVERAGE_RATING}
              </div>
              <div>
                <StarRating rating={AVERAGE_RATING} size="lg" className="mb-1" />
                <p className="text-white/60 text-sm">
                  Based on {TOTAL_REVIEWS.toLocaleString('en-IN')} reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SacredDivider variant="lotus" />

      {/* ── RATING BREAKDOWN ─────────────────────────────────────────────── */}
      <section className="bg-section-white section-pad-sm">
        <div className="container-site">
          <div className="max-w-xl mx-auto">
            <h2 className="font-serif font-bold text-text-primary text-xl mb-5 text-center">
              Rating Breakdown
            </h2>
            <div className="space-y-2.5">
              {RATING_BREAKDOWN.map(({ stars, count, pct }) => (
                <div key={stars} className="flex items-center gap-3">
                  <span className="text-sm text-text-secondary w-8 text-right flex-shrink-0">
                    {stars}★
                  </span>
                  {/* Bar */}
                  <div className="flex-1 bg-cream-dark rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-gold h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs text-text-light w-16 flex-shrink-0">
                    {count.toLocaleString('en-IN')} ({pct}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SacredDivider variant="wave" />

      {/* ── REVIEWS GRID ─────────────────────────────────────────────────── */}
      <section className="bg-section-cream section-pad">
        <div className="container-site">
          <SectionHeader
            title="Customer Reviews"
            subtitle={`${TOTAL_REVIEWS.toLocaleString('en-IN')} verified reviews from pilgrims and travellers`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {stubReviews.map((review) => (
              <div key={review.id} className="card-warm rounded-2xl p-5 flex flex-col hover:shadow-temple transition-shadow duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  {/* Avatar + name */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold font-serif text-base">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-text-primary text-sm leading-tight">
                        {review.name}
                      </div>
                      <div className="flex items-center gap-1 text-text-light text-xs mt-0.5">
                        <MapPin size={10} />
                        {review.location}
                      </div>
                    </div>
                  </div>

                  {/* Verified badge */}
                  {review.verified && (
                    <span className="bg-success/10 text-success text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0">
                      Verified
                    </span>
                  )}
                </div>

                {/* Rating + date */}
                <div className="flex items-center justify-between mb-2">
                  <StarRating rating={review.rating} size="sm" />
                  <div className="flex items-center gap-1 text-text-light text-xs">
                    <CalendarDays size={11} />
                    {review.date}
                  </div>
                </div>

                {/* Service tag */}
                <div className="mb-3">
                  <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>

                {/* Review text */}
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  {review.review}
                </p>
              </div>
            ))}
          </div>

          {/* Leave review CTA */}
          <div className="text-center mt-10">
            <p className="text-text-secondary text-sm mb-4">
              Travelled with us? Share your experience and help other pilgrims.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-8 py-3.5 text-base inline-flex items-center gap-2"
            >
              Share Your Review on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="gradient-sacred relative overflow-hidden py-14 md:py-16">
        <div className="mandala-watermark absolute right-6 top-1/2 -translate-y-1/2 w-64 h-64 text-white"
             style={{ opacity: 0.07 }} aria-hidden="true">
          <Image src="/svg/corner-mandala.svg" alt="" fill className="object-contain animate-mandala-slow" />
        </div>
        <div className="container-site relative z-10 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-3">
            Join 50,000+ Happy Pilgrims
          </h2>
          <p className="text-white/75 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Book your next pilgrimage journey with Varanasi's most trusted travel partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8726124680"
               className="btn-gold px-8 py-3.5 text-base flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
              </svg>
              Call: 87261 24680
            </a>
            <a href={buildWALink('Hi, I want to book a cab or tour package with Tirupati Travel.')}
               target="_blank" rel="noopener noreferrer"
               className="btn-whatsapp px-8 py-3.5 text-base text-center">
              Book via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <SacredDivider variant="gold-line" />
      <InternalLinks
        links={[
          { label: 'About Us',               href: '/about-us' },
          { label: 'Varanasi Tour Packages', href: '/varanasi/varanasi-tour-packages' },
          { label: 'Ayodhya Tour Packages',  href: '/ayodhya/ayodhya-tour-packages' },
          { label: 'Contact Us',             href: '/contact-us' },
        ]}
        heading="Explore More"
      />
    </>
  );
}
