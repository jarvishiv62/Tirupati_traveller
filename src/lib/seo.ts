// src/lib/seo.ts
// SEO metadata builder utilities
// All pages must use these helpers — never write raw metadata objects

import type { Metadata } from 'next';

const BASE_URL = 'https://tirupatitravel.in';
const SITE_NAME = 'Tirupati Travel';
const DEFAULT_OG_IMAGE = '/og-image.jpg';
const PHONE = '8726124680';

type BuildMetadataOptions = {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  extra?: Partial<Metadata>;
};

export function buildMetadata(opts: BuildMetadataOptions): Metadata {
  const {
    title,
    description,
    canonical,
    ogImage = DEFAULT_OG_IMAGE,
    ogType = 'website',
    noIndex = false,
    extra = {},
  } = opts;

  return {
    title,
    description,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: { canonical },
    openGraph: {
      type: ogType,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'en_IN',
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    ...extra,
  };
}

type BuildCityMetadataOptions = {
  city: string;
  slug: string;
  title: string;
  description: string;
  ogImage?: string;
};

export function buildCityMetadata(opts: BuildCityMetadataOptions): Metadata {
  return buildMetadata({
    title: opts.title,
    description: opts.description,
    canonical: `${BASE_URL}/${opts.slug}`,
    ogImage: opts.ogImage ?? DEFAULT_OG_IMAGE,
  });
}

type BuildOutstationMetadataOptions = {
  origin: string;
  destination: string;
  slug: string;
  distance?: string;
  fare?: number;
};

export function buildOutstationMetadata(opts: BuildOutstationMetadataOptions): Metadata {
  const { origin, destination, slug, distance, fare } = opts;
  const title = `${origin} to ${destination} Taxi | Cab Booking | ${SITE_NAME}`;
  const descParts = [`Book ${origin} to ${destination} taxi.`];
  if (distance) descParts.push(`${distance} journey.`);
  if (fare) descParts.push(`Starting ₹${fare}.`);
  descParts.push(`AC cabs, professional drivers. Call ${PHONE}.`);

  return buildMetadata({
    title,
    description: descParts.join(' '),
    canonical: `${BASE_URL}/${slug}`,
  });
}

// ── JSON-LD SCHEMAS ───────────────────────────────────────────────────────

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TravelAgency'],
    name: 'Tirupati Travel',
    description: 'Pilgrimage tour packages and outstation taxi services from Varanasi',
    url: BASE_URL,
    telephone: `+91${PHONE}`,
    email: 'info@tirupatitravel.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'L-2/72, Dashashwamedh Plaza, Dashashwamedh Gath',
      addressLocality: 'Varanasi',
      addressRegion: 'Uttar Pradesh',
      postalCode: '221001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.3176,
      longitude: 83.0062,
    },
    openingHours: 'Mo-Su 00:00-24:00',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Bank Transfer',
    areaServed: ['Varanasi', 'Ayodhya', 'Allahabad', 'Gaya', 'Lucknow', 'Vindhyachal'],
    sameAs: [
      'https://wa.me/918726124680',
    ],
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string;
  price?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      '@type': 'LocalBusiness',
      name: opts.provider ?? SITE_NAME,
      telephone: `+91${PHONE}`,
    },
    areaServed: opts.areaServed ?? 'Varanasi, Uttar Pradesh',
    offers: opts.price
      ? {
          '@type': 'Offer',
          price: opts.price,
          priceCurrency: 'INR',
        }
      : undefined,
  };
}

export function touristAttractionSchema(opts: {
  name: string;
  description: string;
  url: string;
  city: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    image: opts.image ?? DEFAULT_OG_IMAGE,
    address: {
      '@type': 'PostalAddress',
      addressLocality: opts.city,
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    touristType: ['Pilgrim', 'Cultural tourist', 'Heritage tourist'],
  };
}