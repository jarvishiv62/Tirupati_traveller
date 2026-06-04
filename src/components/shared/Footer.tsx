// src/components/shared/Footer.tsx
// Site-wide footer — Server Component

import Link from 'next/link';

const PHONE = '8726124680';
const WA = '918726124680';

const QUICK_LINKS = [
  { label: 'Varanasi Taxi', href: '/varanasi' },
  { label: 'Ayodhya Taxi', href: '/ayodhya' },
  { label: 'Allahabad Taxi', href: '/allahabad' },
  { label: 'Lucknow Taxi', href: '/lucknow' },
  { label: 'Gaya Taxi', href: '/gaya' },
  { label: 'Vindhyachal Taxi', href: '/vindhyachal' },
];

const POPULAR_ROUTES = [
  { label: 'Varanasi to Ayodhya', href: '/varanasi/varanasi-to-ayodhya-taxi' },
  { label: 'Varanasi to Gaya', href: '/varanasi/varanasi-to-gaya-taxi' },
  { label: 'Varanasi to Allahabad', href: '/varanasi/varanasi-to-allahabad-taxi' },
  { label: 'Varanasi to Lucknow', href: '/varanasi/varanasi-to-lucknow-taxi' },
  { label: 'Varanasi to Patna', href: '/varanasi/varanasi-to-patna-taxi' },
  { label: 'Varanasi to Sarnath', href: '/varanasi/varanasi-to-sarnath-taxi' },
];

const SERVICES = [
  { label: 'Tour Packages', href: '/varanasi/varanasi-tour-packages' },
  { label: 'Airport Taxi', href: '/varanasi/varanasi-airport-taxi' },
  { label: 'Tempo Traveller', href: '/varanasi/tempo-traveller-varanasi' },
  { label: 'Car Rental', href: '/varanasi/car-rental-varanasi' },
  { label: 'Innova on Rent', href: '/varanasi/innova-crysta-on-rent-in-varanasi' },
  { label: 'Local Sightseeing', href: '/varanasi/varanasi-local-sightseeing-cab' },
];

const LEGAL = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Blog', href: '/blogs' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-section-dark text-white relative overflow-hidden">
      {/* Mandala watermark */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 text-white pointer-events-none select-none"
        style={{ opacity: 0.04, fontSize: '256px', lineHeight: 1 }}
        aria-hidden="true"
      >
        ☸
      </div>
      <div
        className="absolute bottom-0 left-8 text-white pointer-events-none select-none"
        style={{ opacity: 0.03, fontSize: '160px', lineHeight: 1 }}
        aria-hidden="true"
      >
        ❀
      </div>

      {/* Main footer grid */}
      <div className="container-site section-pad-sm relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold"
                style={{ background: 'linear-gradient(135deg, #FF6B00, #E65100)' }}
                aria-hidden="true"
              >
                TT
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-white leading-tight">
                  Tirupati Travel
                </div>
                <div className="text-xs text-white/60 leading-tight">Varanasi&apos;s Trusted Partner</div>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-sm">
              Varanasi&apos;s most trusted travel agency since 2014. Pilgrimage tours, outstation taxi
              &amp; local cab services across Varanasi, Ayodhya, Allahabad, Gaya &amp; beyond.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <p>📍 L-2/72, Dashashwamedh Plaza,<br />Dashashwamedh Gath, Varanasi - 221001</p>
              <p>
                📞{' '}
                <a href={`tel:${PHONE}`} className="text-accent hover:text-white transition-colors">
                  {PHONE}
                </a>
              </p>
              <p>
                ✉{' '}
                <a
                  href="mailto:info@tirupatitravel.in"
                  className="text-accent hover:text-white transition-colors"
                >
                  info@tirupatitravel.in
                </a>
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Cities
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular routes */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Popular Routes
            </h3>
            <ul className="space-y-2">
              {POPULAR_ROUTES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & legal */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2 mb-6">
              {SERVICES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              {LEGAL.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <p className="text-white/70 text-sm">Ready to book your journey?</p>
          <div className="flex gap-3">
            <a href={`tel:${PHONE}`} className="btn-primary text-sm px-5 py-2.5">
              Call {PHONE}
            </a>
            <a
              href={`https://wa.me/${WA}?text=Hi%2C%20I%20want%20to%20book%20a%20cab`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm px-5 py-2.5"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4">
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {year} Tirupati Travel. All rights reserved.</p>
          <p>Made with ❤ for pilgrims of Kashi</p>
        </div>
      </div>
    </footer>
  );
}