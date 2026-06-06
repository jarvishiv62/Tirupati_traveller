'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown, MapPin, Mail } from 'lucide-react';

const PHONE = '8726124680';
const WA    = '918726124680';

const CITIES = [
  { name: 'Varanasi',    href: '/varanasi',    icon: '🕌' },
  { name: 'Ayodhya',     href: '/ayodhya',     icon: '🛕' },
  { name: 'Allahabad',   href: '/allahabad',   icon: '🏛️' },
  { name: 'Lucknow',     href: '/lucknow',     icon: '🌆' },
  { name: 'Gaya',        href: '/gaya',        icon: '☸️' },
  { name: 'Vindhyachal', href: '/vindhyachal', icon: '⛰️' },
];

const SERVICES = [
  { name: 'Outstation Taxi',    href: '/varanasi/one-way-cab-in-varanasi',          icon: '🚕' },
  { name: 'Tour Packages',      href: '/varanasi/varanasi-tour-packages',            icon: '🗺️' },
  { name: 'Airport Taxi',       href: '/varanasi/varanasi-airport-taxi',             icon: '✈️' },
  { name: 'Tempo Traveller',    href: '/varanasi/tempo-traveller-varanasi',          icon: '🚐' },
  { name: 'Car Rental',         href: '/varanasi/car-rental-varanasi',               icon: '🚗' },
  { name: 'Local Sightseeing',  href: '/varanasi/varanasi-local-sightseeing-cab',    icon: '🔭' },
];

export default function Navbar() {
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [citiesOpen,   setCitiesOpen]   = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled,     setScrolled]     = useState(false);
  const citiesTimer   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const open = (
    set: (v: boolean) => void,
    t:   React.MutableRefObject<ReturnType<typeof setTimeout> | null>
  ) => { if (t.current) clearTimeout(t.current); set(true); };

  const close = (
    set: (v: boolean) => void,
    t:   React.MutableRefObject<ReturnType<typeof setTimeout> | null>
  ) => { t.current = setTimeout(() => set(false), 120); };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.10)]'
        : 'bg-white shadow-sm border-b border-gray-100'
    }`}>

      {/* ── Top bar — black with gold accents ───────────── */}
      <div className="navbar-topbar hidden md:block overflow-hidden relative">
        <div className="navbar-car-track" aria-hidden="true">
          <span className="navbar-car">🚗</span>
        </div>
        <div className="container-site flex items-center justify-between py-1.5 relative z-10">
          <div className="flex items-center gap-1.5 text-white/75 text-xs">
            <MapPin size={11} className="text-primary" />
            <span>L-2/72, Dashashwamedh Plaza, Varanasi - 221001</span>
          </div>
          <div className="flex items-center gap-5 text-xs">
            <a href="mailto:info@tirupatitravel.in"
              className="flex items-center gap-1.5 text-white/65 hover:text-primary transition-colors duration-200">
              <Mail size={11} />
              info@tirupatitravel.in
            </a>
            <a href={`tel:${PHONE}`}
              className="flex items-center gap-1.5 text-white/65 font-semibold hover:text-primary transition-colors duration-200">
              <Phone size={11} />
              {PHONE}
            </a>
            {/* gold divider */}
            <span className="text-primary/40 text-base font-serif select-none">॥</span>
            <span className="text-primary/60 text-xs tracking-widest select-none font-medium">
              जय काशी
            </span>
          </div>
        </div>
      </div>

      {/* ── Main nav ────────────────────────────────────── */}
      <nav className="container-site flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className="navbar-logo-mark">
            <span className="navbar-logo-om" aria-hidden="true">ॐ</span>
            <span className="font-bold text-black text-xs leading-none relative z-10">TT</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-serif font-bold text-secondary text-base leading-tight
                            group-hover:text-primary transition-colors duration-200">
              Tirupati Travel
            </div>
            <div className="text-text-light text-[10px] leading-tight tracking-wide uppercase">
              Varanasi&apos;s Trusted Partner
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">

          {/* Cities */}
          <div className="relative"
            onMouseEnter={() => open(setCitiesOpen, citiesTimer)}
            onMouseLeave={() => close(setCitiesOpen, citiesTimer)}>
            <button className="navbar-nav-link flex items-center gap-1">
              Cities
              <ChevronDown size={13} className={`transition-transform duration-200 ${citiesOpen ? 'rotate-180 text-primary' : ''}`} />
            </button>
            <div className={`navbar-dropdown ${citiesOpen ? 'navbar-dropdown--open' : ''}`}>
              <div className="navbar-dropdown-header">Sacred Cities</div>
              {CITIES.map((c) => (
                <Link key={c.href} href={c.href} className="navbar-dropdown-item">
                  <span className="text-base">{c.icon}</span>
                  <span>{c.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="relative"
            onMouseEnter={() => open(setServicesOpen, servicesTimer)}
            onMouseLeave={() => close(setServicesOpen, servicesTimer)}>
            <button className="navbar-nav-link flex items-center gap-1">
              Services
              <ChevronDown size={13} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-primary' : ''}`} />
            </button>
            <div className={`navbar-dropdown ${servicesOpen ? 'navbar-dropdown--open' : ''}`}>
              <div className="navbar-dropdown-header">Our Services</div>
              {SERVICES.map((s) => (
                <Link key={s.href} href={s.href} className="navbar-dropdown-item">
                  <span className="text-base">{s.icon}</span>
                  <span>{s.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/varanasi/varanasi-tour-packages" className="navbar-nav-link">
            Tour Packages
          </Link>
          <Link href="/blogs"    className="navbar-nav-link">Blog</Link>
          <Link href="/about-us" className="navbar-nav-link">About</Link>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-2">
          <a href={`https://wa.me/${WA}?text=Hi%2C%20I%20want%20to%20book%20a%20cab`}
            target="_blank" rel="noopener noreferrer"
            className="hidden sm:flex btn-whatsapp text-xs px-4 py-2 gap-1.5">
            <span className="text-sm">💬</span> WhatsApp
          </a>
          <a href={`tel:${PHONE}`} className="btn-primary text-xs px-4 py-2 gap-1.5">
            <Phone size={13} />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">Call Now</span>
          </a>
          <button
            className="lg:hidden p-2 rounded-xl text-text-primary hover:bg-cream transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ─────────────────────────────────── */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        mobileOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white border-t border-gray-100">

          {/* Animated car strip */}
          <div className="mobile-car-strip" aria-hidden="true">
            <span className="mobile-road-line" />
            <span className="mobile-car-icon">🚗</span>
          </div>

          <div className="container-site py-4 space-y-0.5">
            <p className="text-xs font-bold text-primary/60 uppercase tracking-wider px-3 mb-2 flex items-center gap-1.5">
              <span>🗺️</span> Cities
            </p>
            {CITIES.map((c) => (
              <Link key={c.href} href={c.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                           text-text-primary hover:bg-primary-light hover:text-primary-dark
                           transition-all duration-200"
                onClick={() => setMobileOpen(false)}>
                <span className="text-base">{c.icon}</span>
                {c.name}
              </Link>
            ))}

            <div className="border-t border-gray-100 my-3" />
            <p className="text-xs font-bold text-primary/60 uppercase tracking-wider px-3 mb-2 flex items-center gap-1.5">
              <span>🚖</span> Services
            </p>
            {SERVICES.map((s) => (
              <Link key={s.href} href={s.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                           text-text-primary hover:bg-primary-light hover:text-primary-dark
                           transition-all duration-200"
                onClick={() => setMobileOpen(false)}>
                <span className="text-base">{s.icon}</span>
                {s.name}
              </Link>
            ))}

            <div className="border-t border-gray-100 my-3" />
            {[
              { label: '📰 Blog',       href: '/blogs' },
              { label: 'ℹ️ About Us',   href: '/about-us' },
              { label: '📞 Contact Us', href: '/contact-us' },
            ].map(({ label, href }) => (
              <Link key={href} href={href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm
                           text-text-primary hover:bg-gray-50 transition-colors"
                onClick={() => setMobileOpen(false)}>
                {label}
              </Link>
            ))}

            <div className="flex gap-2 pt-3 pb-1">
              <a href={`tel:${PHONE}`}
                className="flex-1 btn-primary text-sm py-3 justify-center">
                <Phone size={15} /> Call Us
              </a>
              <a href={`https://wa.me/${WA}?text=Hi`}
                target="_blank" rel="noopener noreferrer"
                className="flex-1 btn-whatsapp text-sm py-3 justify-center">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}