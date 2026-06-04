'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const PHONE = '8726124680';
const WA = '918726124680';

const CITIES = [
  { name: 'Varanasi', href: '/varanasi' },
  { name: 'Ayodhya', href: '/ayodhya' },
  { name: 'Allahabad', href: '/allahabad' },
  { name: 'Lucknow', href: '/lucknow' },
  { name: 'Gaya', href: '/gaya' },
  { name: 'Vindhyachal', href: '/vindhyachal' },
];

const SERVICES = [
  { name: 'Outstation Taxi', href: '/varanasi/one-way-cab-in-varanasi' },
  { name: 'Tour Packages', href: '/varanasi/varanasi-tour-packages' },
  { name: 'Airport Taxi', href: '/varanasi/varanasi-airport-taxi' },
  { name: 'Tempo Traveller', href: '/varanasi/tempo-traveller-varanasi' },
  { name: 'Car Rental', href: '/varanasi/car-rental-varanasi' },
  { name: 'Local Sightseeing', href: '/varanasi/varanasi-local-sightseeing-cab' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      {/* Top bar */}
      <div className="header-topbar py-1.5 hidden md:block">
        <div className="container-site flex items-center justify-between text-white text-xs">
          <span>📍 L-2/72, Dashashwamedh Plaza, Varanasi - 221001</span>
          <div className="flex items-center gap-4">
            <a href={`mailto:info@tirupatitravel.in`} className="hover:underline">
              ✉ info@tirupatitravel.in
            </a>
            <a href={`tel:${PHONE}`} className="font-semibold hover:underline">
              📞 {PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-site flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, #FF6B00, #E65100)' }}
            aria-hidden="true"
          >
            TT
          </div>
          <div className="hidden sm:block">
            <div className="font-serif font-bold text-secondary text-base leading-tight">
              Tirupati Travel
            </div>
            <div className="text-text-light text-xs leading-tight">Varanasi&apos;s Trusted Partner</div>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Cities dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-text-primary hover:bg-cream transition-colors"
              onMouseEnter={() => setCitiesOpen(true)}
              onMouseLeave={() => setCitiesOpen(false)}
            >
              Cities <ChevronDown size={14} />
            </button>
            {citiesOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-48 card-base py-2 z-50"
                onMouseEnter={() => setCitiesOpen(true)}
                onMouseLeave={() => setCitiesOpen(false)}
              >
                {CITIES.map((city) => (
                  <Link
                    key={city.href}
                    href={city.href}
                    className="block px-4 py-2 text-sm text-text-primary hover:bg-cream hover:text-primary transition-colors"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-text-primary hover:bg-cream transition-colors"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              Services <ChevronDown size={14} />
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-52 card-base py-2 z-50"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-sm text-text-primary hover:bg-cream hover:text-primary transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/varanasi/varanasi-tour-packages"
            className="px-3 py-2 rounded-lg text-sm font-medium text-text-primary hover:bg-cream transition-colors"
          >
            Tour Packages
          </Link>
          <Link
            href="/blogs"
            className="px-3 py-2 rounded-lg text-sm font-medium text-text-primary hover:bg-cream transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about-us"
            className="px-3 py-2 rounded-lg text-sm font-medium text-text-primary hover:bg-cream transition-colors"
          >
            About
          </Link>
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${WA}?text=Hi%2C%20I%20want%20to%20book%20a%20cab`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex btn-whatsapp text-xs px-4 py-2"
          >
            WhatsApp
          </a>
          <a href={`tel:${PHONE}`} className="btn-primary text-xs px-4 py-2 gap-1">
            <Phone size={14} />
            <span className="hidden xs:inline">{PHONE}</span>
            <span className="xs:hidden">Call</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-cream"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border py-4">
          <div className="container-site space-y-1">
            <p className="text-xs font-semibold text-text-light uppercase tracking-wider px-2 mb-2">
              Cities
            </p>
            {CITIES.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="block px-3 py-2 rounded-lg text-sm text-text-primary hover:bg-cream"
                onClick={() => setMobileOpen(false)}
              >
                {city.name}
              </Link>
            ))}
            <div className="border-t border-border my-3" />
            <p className="text-xs font-semibold text-text-light uppercase tracking-wider px-2 mb-2">
              Services
            </p>
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block px-3 py-2 rounded-lg text-sm text-text-primary hover:bg-cream"
                onClick={() => setMobileOpen(false)}
              >
                {s.name}
              </Link>
            ))}
            <div className="border-t border-border my-3" />
            <Link
              href="/blogs"
              className="block px-3 py-2 rounded-lg text-sm text-text-primary hover:bg-cream"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about-us"
              className="block px-3 py-2 rounded-lg text-sm text-text-primary hover:bg-cream"
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="block px-3 py-2 rounded-lg text-sm text-text-primary hover:bg-cream"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}