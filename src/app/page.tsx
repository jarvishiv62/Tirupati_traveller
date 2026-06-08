import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import DestinationCards from '@/components/home/DestinationCards';
import TourPackageCards from '@/components/home/TourPackageCards';
import CTABanner from '@/components/home/CTABanner';
import ThemeExplorer from '@/components/home/ThemeExplorer';
import AboutSection from '@/components/home/AboutSection';
import WhyChooseUs from '@/components/shared/WhyChooseUs';
import FAQSection from '@/components/home/FAQSection';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import OffersSlider from '@/components/shared/OffersSlider';


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

      {/*offers section*/}
      <OffersSlider tags={["all"]} className="my-8" />

      {/* lotus divider: after hero, before first content section */}
      <img src="/svg/ghats/lotus-divider.svg" alt="Lotus divider" className="w-1/4 h-auto mx-auto" />
      {/* 2. Destination Cards — bg-section-cream */}
      <DestinationCards />

      {/* wave divider: between mid-page sections */}
      <img src="/svg/ghats/mandala-divider.svg" alt="mandala divider" className="w-1/4 h-auto mx-auto" />

      {/* 3. Tour Package Cards — bg-section-white */}
      <TourPackageCards />

      {/* mandala divider: before CTA */}
      <img src="/svg/ghats/om-wave.svg" alt="om divider" className="w-1/4 h-auto mx-auto" />

      {/* 4. CTA Banner — full-bleed gradient-sacred */}
      <CTABanner />

      {/* wave divider */}
      <img src="/svg/ghats/lotus-divider.svg" alt="lotus divider" className="w-1/4 h-auto mx-auto" />

      {/* 5. Theme Explorer — bg-section-cream */}
      <ThemeExplorer />

      {/* wave divider */}
      <img src="/svg/ghats/mandala-divider.svg" alt="mandala divider" className="w-1/4 h-auto mx-auto" />

      {/* 6. About Section — bg-section-white */}
      <AboutSection />
      <img src="/svg/ghats/om-wave.svg" alt="om divider" className="w-1/4 h-auto mx-auto" />

      {/* 7. Why Choose Us — bg-section-cream */}
      <WhyChooseUs />
      <img src="/svg/ghats/lotus-divider.svg" alt="Lotus divider" className="w-1/4 h-auto mx-auto" /> 

      {/* lotus divider: before last section */}
      {/* <SacredDivider variant="lotus" /> */}

      {/* 8. FAQ Section — bg-section-white (last section before footer) */}
      <FAQSection />
      {/* footer*/}
      <Footer />
    </>
  );
}