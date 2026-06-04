import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import DestinationCards from '@/components/home/DestinationCards';
import TourPackageCards from '@/components/home/TourPackageCards';
import CTABanner from '@/components/home/CTABanner';
import ThemeExplorer from '@/components/home/ThemeExplorer';
import AboutSection from '@/components/home/AboutSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FAQSection from '@/components/home/FAQSection';
import SacredDivider from '@/components/shared/SacredDivider';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';


// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Tirupati Travel – Best Pilgrimage Tour Packages & Taxi Services in India',
  description:
    'Book affordable pilgrimage tour packages with Tirupati Travel. Explore Varanasi, Ayodhya, Gaya, Prayagraj, Vindhyachal and more with reliable taxi services, comfortable vehicles, experienced drivers, and customized spiritual journeys across India.',
  alternates: {
    canonical: 'https://tirupatitravel.in/',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Tirupati Travel – Best Pilgrimage Tour Packages & Taxi Services in India',
    description:
      'Book affordable pilgrimage tour packages with Tirupati Travel. Explore Varanasi, Ayodhya, Gaya, Prayagraj and more.',
    url: 'https://tirupatitravel.in/',
    siteName: 'Tirupati Travel',
    type: 'website',
  },
};

// ── Homepage JSON-LD schemas ──────────────────────────────────────────────────
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TravelAgency'],
  name: 'Tirupati Travel',
  description:
    'Premier pilgrimage tour packages and taxi services from Varanasi covering Ayodhya, Prayagraj, Gaya, Vindhyachal and all major spiritual destinations across India.',
  url: 'https://tirupatitravel.in',
  telephone: '+918726124680',
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
    latitude: 25.3109,
    longitude: 83.0110,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday', 'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Bank Transfer',
  areaServed: ['Varanasi', 'Ayodhya', 'Prayagraj', 'Gaya', 'Lucknow', 'Vindhyachal'],
  sameAs: [
    'https://www.facebook.com/tirupatitravel',
    'https://www.instagram.com/tirupatitravel',
  ],
};

// ── Page Component ────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/*navbar*/}
      <Navbar />
      {/* 1. Hero — full viewport */}
      <HeroSection />

      {/* lotus divider: after hero, before first content section */}
      <SacredDivider variant="lotus" />

      {/* 2. Destination Cards — bg-section-cream */}
      <DestinationCards />

      {/* wave divider: between mid-page sections */}
      <SacredDivider variant="wave" />

      {/* 3. Tour Package Cards — bg-section-white */}
      <TourPackageCards />

      {/* mandala divider: before CTA */}
      <SacredDivider variant="mandala" />

      {/* 4. CTA Banner — full-bleed gradient-sacred */}
      <CTABanner />

      {/* wave divider */}
      <SacredDivider variant="wave" />

      {/* 5. Theme Explorer — bg-section-cream */}
      <ThemeExplorer />

      {/* wave divider */}
      <SacredDivider variant="wave" />

      {/* 6. About Section — bg-section-white */}
      <AboutSection />

      {/* 7. Why Choose Us — bg-section-cream */}
      <WhyChooseUs />

      {/* lotus divider: before last section */}
      <SacredDivider variant="lotus" />

      {/* 8. FAQ Section — bg-section-white (last section before footer) */}
      <FAQSection />
      {/* footer*/}
      <Footer />
    </>
  );
}