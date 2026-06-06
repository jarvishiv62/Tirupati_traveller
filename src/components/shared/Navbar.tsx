"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, MapPin, Mail } from "lucide-react";

const PHONE = "8726124680";
const WA = "918726124680";

/* ══════════════════════════════════════════════════════
   NAV DATA — sourced from allRoutes.ts & URL categories
══════════════════════════════════════════════════════ */

const CITIES = [
  { name: "Varanasi", href: "/varanasi", icon: "🕌", desc: "Kashi · Banaras" },
  { name: "Ayodhya", href: "/ayodhya", icon: "🛕", desc: "Ram Mandir City" },
  { name: "Allahabad", href: "/allahabad", icon: "🏛️", desc: "Prayagraj" },
  { name: "Lucknow", href: "/lucknow", icon: "🌆", desc: "City of Nawabs" },
  { name: "Gaya", href: "/gaya", icon: "☸️", desc: "Bodh Gaya" },
  {
    name: "Vindhyachal",
    href: "/vindhyachal",
    icon: "⛰️",
    desc: "Shakti Peeth",
  },
];

/* Fleet — all vehicles from vehicles.ts with Varanasi as anchor URL */
const FLEET = [
  {
    category: "Sedans",
    vehicles: [
      {
        name: "Swift Dzire",
        href: "/varanasi/swift-dzire-taxi-service-in-varanasi",
        seats: "4",
        price: "₹10.50/km",
        tag: "Most Popular",
      },
      {
        name: "Toyota Etios",
        href: "/varanasi/toyota-etios-on-rent-in-varanasi",
        seats: "4",
        price: "₹10.50/km",
        tag: "",
      },
      {
        name: "Sedan",
        href: "/varanasi/sedan-car-in-varanasi",
        seats: "4",
        price: "₹10/km",
        tag: "Budget Pick",
      },
    ],
  },
  {
    category: "SUVs & MUVs",
    vehicles: [
      {
        name: "Ertiga",
        href: "/varanasi/ertiga-car-on-rent-in-varanasi",
        seats: "6",
        price: "₹13/km",
        tag: "Family Fav",
      },
      {
        name: "Innova Crysta",
        href: "/varanasi/innova-crysta-on-rent-in-varanasi",
        seats: "7",
        price: "₹16/km",
        tag: "Premium",
      },
    ],
  },
  {
    category: "Large Groups",
    vehicles: [
      {
        name: "Tempo Traveller",
        href: "/varanasi/tempo-traveller-varanasi",
        seats: "12",
        price: "₹22/km",
        tag: "",
      },
      {
        name: "Luxury Tempo Traveller",
        href: "/varanasi/luxury-tempo-traveller-varanasi",
        seats: "12",
        price: "₹28/km",
        tag: "AC Luxury",
      },
    ],
  },
];

/* Services — from CabServiceTemplate + LocalServiceTemplate slugs */
const SERVICES = [
  {
    group: "Booking Types",
    items: [
      {
        name: "One-Way Cab",
        href: "/varanasi/one-way-cab-in-varanasi",
        icon: "→",
      },
      {
        name: "Round Trip",
        href: "/varanasi/round-trip-cab-varanasi",
        icon: "↩",
      },
      {
        name: "Full Day Taxi",
        href: "/varanasi/full-day-taxi-in-varanasi",
        icon: "☀️",
      },
      {
        name: "Half Day Taxi",
        href: "/varanasi/half-day-taxi-in-varanasi",
        icon: "🌤️",
      },
      {
        name: "Drop Taxi",
        href: "/varanasi/drop-taxi-service-varanasi",
        icon: "📍",
      },
      {
        name: "Call Taxi",
        href: "/varanasi/call-taxi-in-varanasi",
        icon: "📞",
      },
    ],
  },
  {
    group: "Special Services",
    items: [
      {
        name: "Airport Taxi",
        href: "/varanasi/varanasi-airport-taxi",
        icon: "✈️",
      },
      {
        name: "Local Sightseeing",
        href: "/varanasi/varanasi-local-sightseeing-cab",
        icon: "🔭",
      },
      {
        name: "Corporate Cab",
        href: "/varanasi/corporate-cab-service-varanasi",
        icon: "💼",
      },
      { name: "Car Rental", href: "/varanasi/car-rental-varanasi", icon: "🔑" },
      {
        name: "Tourist Cab",
        href: "/varanasi/tourist-cab-varanasi",
        icon: "🗺️",
      },
      {
        name: "Outstation Cab",
        href: "/varanasi/one-way-cab-in-varanasi",
        icon: "🛣️",
      },
    ],
  },
];

/* Tour Packages */
const PACKAGES = [
  {
    name: "Varanasi Tour Packages",
    href: "/varanasi/varanasi-tour-packages",
    city: "Varanasi",
    tag: "Bestseller",
  },
  {
    name: "Varanasi Darshan Package",
    href: "/varanasi/varanasi-darshan-tour-package",
    city: "Varanasi",
    tag: "1N 2D",
  },
  {
    name: "Ayodhya Tour Packages",
    href: "/ayodhya/ayodhya-tour-packages",
    city: "Ayodhya",
    tag: "",
  },
  {
    name: "Ayodhya Darshan Package",
    href: "/ayodhya/ayodhya-darshan-tour-package",
    city: "Ayodhya",
    tag: "1N 2D",
  },
  {
    name: "Allahabad Tour Packages",
    href: "/allahabad/allahabad-tour-packages",
    city: "Allahabad",
    tag: "",
  },
  {
    name: "Allahabad Darshan Package",
    href: "/allahabad/allahabad-darshan-tour-package",
    city: "Allahabad",
    tag: "",
  },
];

/* Popular outstation routes — top 10 from 68 */
const TOP_ROUTES = [
  {
    name: "Varanasi → Ayodhya",
    href: "/varanasi/varanasi-to-ayodhya-taxi",
    dist: "200 km",
  },
  {
    name: "Varanasi → Gaya",
    href: "/varanasi/varanasi-to-gaya-taxi",
    dist: "250 km",
  },
  {
    name: "Varanasi → Lucknow",
    href: "/varanasi/varanasi-to-lucknow-taxi",
    dist: "320 km",
  },
  {
    name: "Varanasi → Patna",
    href: "/varanasi/varanasi-to-patna-taxi",
    dist: "280 km",
  },
  {
    name: "Varanasi → Allahabad",
    href: "/varanasi/varanasi-to-allahabad-taxi",
    dist: "130 km",
  },
  {
    name: "Varanasi → Gorakhpur",
    href: "/varanasi/varanasi-to-gorakhpur-taxi",
    dist: "260 km",
  },
  {
    name: "Varanasi → Kanpur",
    href: "/varanasi/varanasi-to-kanpur-taxi",
    dist: "350 km",
  },
  {
    name: "Varanasi → Sarnath",
    href: "/varanasi/varanasi-to-sarnath-taxi",
    dist: "12 km",
  },
  {
    name: "Varanasi → Vindhyachal",
    href: "/varanasi/varanasi-to-vindhyachal-taxi",
    dist: "75 km",
  },
  {
    name: "Varanasi → Chitrakoot",
    href: "/varanasi/varanasi-to-chitrakoot-taxi",
    dist: "260 km",
  },
];

/* ══════════════════════════════════════════════════════
   TYPES
══════════════════════════════════════════════════════ */
type DropdownKey =
  | "cities"
  | "fleet"
  | "services"
  | "packages"
  | "routes"
  | null;

/* ══════════════════════════════════════════════════════
   DROPDOWN HOOK — hover with delayed close
══════════════════════════════════════════════════════ */
function useHoverDropdown(delay = 140) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const enter = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const leave = () => {
    timer.current = setTimeout(() => setOpen(false), delay);
  };
  return { open, enter, leave };
}

/* ══════════════════════════════════════════════════════
   DROPDOWN PANEL WRAPPER
══════════════════════════════════════════════════════ */
function DropPanel({
  open,
  onEnter,
  onLeave,
  className = "",
  children,
}: {
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`navbar-dropdown ${open ? "navbar-dropdown--open" : ""} ${className}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════ */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<DropdownKey>(null);
  const [scrolled, setScrolled] = useState(false);

  const cities = useHoverDropdown();
  const fleet = useHoverDropdown();
  const services = useHoverDropdown();
  const packages = useHoverDropdown();
  const routes = useHoverDropdown();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const toggleMobile = (section: DropdownKey) =>
    setMobileSection((p) => (p === section ? null : section));

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.10)]"
          : "bg-white shadow-sm border-b border-gray-100"
      }`}
    >
      {/* ── TOP BAR ─────────────────────────────────────── */}
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
            <a
              href="mailto:info@tirupatitravel.in"
              className="flex items-center gap-1.5 text-white/65 hover:text-primary transition-colors"
            >
              <Mail size={11} /> info@tirupatitravel.in
            </a>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-1.5 text-white/65 font-semibold hover:text-primary transition-colors"
            >
              <Phone size={11} /> {PHONE}
            </a>
            <span className="text-primary/40 text-base font-serif select-none">
              ॥
            </span>
            <span className="text-primary/60 text-xs tracking-widest select-none font-medium">
              जय काशी
            </span>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV ─────────────────────────────────────── */}
      <nav className="container-site flex items-center justify-between h-16 gap-2">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 flex-shrink-0 group"
        >
          <div className="navbar-logo-mark">
            <span className="navbar-logo-om" aria-hidden="true">
              ॐ
            </span>
            <span className="font-bold text-black text-xs leading-none relative z-10">
              TT
            </span>
          </div>
          <div className="hidden sm:block">
            <div
              className="font-serif font-bold text-secondary text-base leading-tight
                            group-hover:text-primary transition-colors duration-200"
            >
              Tirupati Travel
            </div>
            <div
              className="text-[10px] leading-tight tracking-wide uppercase"
              style={{ color: "#9A9A9A" }}
            >
              Varanasi&apos;s Trusted Partner
            </div>
          </div>
        </Link>

        {/* ── DESKTOP NAV LINKS ─────────────────────────── */}
        <div className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
          {/* 1. Cities */}
          <div
            className="relative"
            onMouseEnter={cities.enter}
            onMouseLeave={cities.leave}
          >
            <button className="navbar-nav-link flex items-center gap-1">
              Cities
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${cities.open ? "rotate-180 text-primary" : ""}`}
              />
            </button>
            <DropPanel
              open={cities.open}
              onEnter={cities.enter}
              onLeave={cities.leave}
              className="w-72"
            >
              <div className="navbar-dropdown-header">Sacred Cities</div>
              <div className="p-2">
                {CITIES.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary-pale transition-colors group/item"
                  >
                    <span className="text-xl w-7 text-center flex-shrink-0">
                      {c.icon}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-secondary group-hover/item:text-primary transition-colors">
                        {c.name}
                      </div>
                      <div className="text-[11px] text-text-light">
                        {c.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </DropPanel>
          </div>

          {/* 2. Fleet */}
          <div
            className="relative"
            onMouseEnter={fleet.enter}
            onMouseLeave={fleet.leave}
          >
            <button className="navbar-nav-link flex items-center gap-1">
              Fleet
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${fleet.open ? "rotate-180 text-primary" : ""}`}
              />
            </button>
            <DropPanel
              open={fleet.open}
              onEnter={fleet.enter}
              onLeave={fleet.leave}
              className="w-[560px] -left-20"
            >
              <div className="navbar-dropdown-header">Our Fleet</div>
              <div className="p-4 grid grid-cols-3 gap-4">
                {FLEET.map((cat) => (
                  <div key={cat.category}>
                    <p
                      className="text-[10px] font-bold uppercase tracking-wider mb-2"
                      style={{ color: "#DE9619" }}
                    >
                      {cat.category}
                    </p>
                    <div className="space-y-1">
                      {cat.vehicles.map((v) => (
                        <Link
                          key={v.href}
                          href={v.href}
                          className="block px-3 py-2 rounded-lg hover:bg-primary-pale transition-colors group/v"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-medium text-secondary group-hover/v:text-primary transition-colors">
                              {v.name}
                            </span>
                            {v.tag && (
                              <span
                                className="text-[9px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0"
                                style={{
                                  background: "rgba(222,150,25,0.12)",
                                  color: "#B87A10",
                                }}
                              >
                                {v.tag}
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-text-light mt-0.5">
                            {v.seats} seats · {v.price}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Footer CTA */}
              <div className="px-4 pb-3 pt-1 border-t border-gray-100">
                <Link
                  href="/varanasi/car-rental-varanasi"
                  className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
                >
                  View all rental options →
                </Link>
              </div>
            </DropPanel>
          </div>

          {/* 3. Services */}
          <div
            className="relative"
            onMouseEnter={services.enter}
            onMouseLeave={services.leave}
          >
            <button className="navbar-nav-link flex items-center gap-1">
              Services
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${services.open ? "rotate-180 text-primary" : ""}`}
              />
            </button>
            <DropPanel
              open={services.open}
              onEnter={services.enter}
              onLeave={services.leave}
              className="w-[480px] -left-16"
            >
              <div className="navbar-dropdown-header">Our Services</div>
              <div className="p-4 grid grid-cols-2 gap-6">
                {SERVICES.map((grp) => (
                  <div key={grp.group}>
                    <p
                      className="text-[10px] font-bold uppercase tracking-wider mb-2"
                      style={{ color: "#DE9619" }}
                    >
                      {grp.group}
                    </p>
                    <div className="space-y-0.5">
                      {grp.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg
                                     hover:bg-primary-pale transition-colors group/s"
                        >
                          <span className="text-base w-5 text-center flex-shrink-0">
                            {item.icon}
                          </span>
                          <span className="text-sm font-medium text-secondary group-hover/s:text-primary transition-colors">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </DropPanel>
          </div>

          {/* 4. Tour Packages */}
          <div
            className="relative"
            onMouseEnter={packages.enter}
            onMouseLeave={packages.leave}
          >
            <button className="navbar-nav-link flex items-center gap-1">
              Packages
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${packages.open ? "rotate-180 text-primary" : ""}`}
              />
            </button>
            <DropPanel
              open={packages.open}
              onEnter={packages.enter}
              onLeave={packages.leave}
              className="w-72"
            >
              <div className="navbar-dropdown-header">Tour Packages</div>
              <div className="p-2">
                {PACKAGES.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg
                               hover:bg-primary-pale transition-colors group/p"
                  >
                    <div>
                      <div className="text-sm font-medium text-secondary group-hover/p:text-primary transition-colors">
                        {p.name}
                      </div>
                      <div className="text-[11px] text-text-light">
                        {p.city}
                      </div>
                    </div>
                    {p.tag && (
                      <span
                        className="text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 text-black"
                        style={{
                          background: "linear-gradient(135deg,#DE9619,#F0B84A)",
                        }}
                      >
                        {p.tag}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </DropPanel>
          </div>

          {/* 5. Routes */}
          <div
            className="relative"
            onMouseEnter={routes.enter}
            onMouseLeave={routes.leave}
          >
            <button className="navbar-nav-link flex items-center gap-1">
              Routes
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${routes.open ? "rotate-180 text-primary" : ""}`}
              />
            </button>
            <DropPanel
              open={routes.open}
              onEnter={routes.enter}
              onLeave={routes.leave}
              className="w-72 -left-4"
            >
              <div className="navbar-dropdown-header">Popular Routes</div>
              <div className="p-2">
                {TOP_ROUTES.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg
                               hover:bg-primary-pale transition-colors group/r"
                  >
                    <span className="text-sm font-medium text-secondary group-hover/r:text-primary transition-colors">
                      {r.name}
                    </span>
                    <span
                      className="text-[11px] flex-shrink-0"
                      style={{ color: "#9A9A9A" }}
                    >
                      {r.dist}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="px-4 pb-3 pt-1 border-t border-gray-100">
                <Link
                  href="/varanasi"
                  className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  All 68 Varanasi routes →
                </Link>
              </div>
            </DropPanel>
          </div>

          <Link href="/blogs" className="navbar-nav-link">
            Blog
          </Link>
          <Link href="/about-us" className="navbar-nav-link">
            About
          </Link>
        </div>

        {/* ── CTAs ──────────────────────────────────────── */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={`https://wa.me/${WA}?text=Hi%2C%20I%20want%20to%20book%20a%20cab`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex btn-whatsapp text-xs px-4 py-2 gap-1.5"
          >
            <span className="text-sm">💬</span>
            <span className="hidden lg:inline">WhatsApp</span>
          </a>
          <a
            href={`tel:${PHONE}`}
            className="btn-primary text-xs px-4 py-2 gap-1.5"
          >
            <Phone size={13} />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            className="xl:hidden p-2 rounded-xl text-text-primary hover:bg-cream transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════
          MOBILE MENU
      ══════════════════════════════════════════════════ */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "max-h-[85vh] opacity-100 overflow-y-auto"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100">
          {/* Car strip */}
          <div className="mobile-car-strip" aria-hidden="true">
            <span className="mobile-road-line" />
            <span className="mobile-car-icon">🚗</span>
          </div>

          <div className="container-site py-3 space-y-1 pb-6">
            {/* Cities */}
            <MobileSection
              label="🗺️ Cities"
              isOpen={mobileSection === "cities"}
              onToggle={() => toggleMobile("cities")}
            >
              {CITIES.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="mobile-nav-item"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-base">{c.icon}</span>
                  <div>
                    <div className="text-sm font-medium">{c.name}</div>
                    <div className="text-[11px] text-text-light">{c.desc}</div>
                  </div>
                </Link>
              ))}
            </MobileSection>

            {/* Fleet */}
            <MobileSection
              label="🚗 Fleet"
              isOpen={mobileSection === "fleet"}
              onToggle={() => toggleMobile("fleet")}
            >
              {FLEET.map((cat) => (
                <div key={cat.category}>
                  <p
                    className="text-[10px] font-bold uppercase tracking-wider px-3 py-1"
                    style={{ color: "#DE9619" }}
                  >
                    {cat.category}
                  </p>
                  {cat.vehicles.map((v) => (
                    <Link
                      key={v.href}
                      href={v.href}
                      className="mobile-nav-item"
                      onClick={() => setMobileOpen(false)}
                    >
                      <div>
                        <div className="text-sm font-medium">{v.name}</div>
                        <div className="text-[11px] text-text-light">
                          {v.seats} seats · {v.price}
                        </div>
                      </div>
                      {v.tag && (
                        <span
                          className="text-[9px] font-bold px-1.5 py-0.5 rounded-full ml-auto"
                          style={{
                            background: "rgba(222,150,25,0.12)",
                            color: "#B87A10",
                          }}
                        >
                          {v.tag}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              ))}
            </MobileSection>

            {/* Services */}
            <MobileSection
              label="🚖 Services"
              isOpen={mobileSection === "services"}
              onToggle={() => toggleMobile("services")}
            >
              {SERVICES.map((grp) => (
                <div key={grp.group}>
                  <p
                    className="text-[10px] font-bold uppercase tracking-wider px-3 py-1"
                    style={{ color: "#DE9619" }}
                  >
                    {grp.group}
                  </p>
                  {grp.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="mobile-nav-item"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="text-base">{item.icon}</span>
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </MobileSection>

            {/* Packages */}
            <MobileSection
              label="🏛️ Tour Packages"
              isOpen={mobileSection === "packages"}
              onToggle={() => toggleMobile("packages")}
            >
              {PACKAGES.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="mobile-nav-item"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="flex-1">
                    <div className="text-sm font-medium">{p.name}</div>
                    <div className="text-[11px] text-text-light">{p.city}</div>
                  </div>
                  {p.tag && (
                    <span
                      className="text-[9px] font-bold px-2 py-0.5 rounded-full text-black"
                      style={{
                        background: "linear-gradient(135deg,#DE9619,#F0B84A)",
                      }}
                    >
                      {p.tag}
                    </span>
                  )}
                </Link>
              ))}
            </MobileSection>

            {/* Routes */}
            <MobileSection
              label="🛣️ Popular Routes"
              isOpen={mobileSection === "routes"}
              onToggle={() => toggleMobile("routes")}
            >
              {TOP_ROUTES.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="mobile-nav-item"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-sm font-medium flex-1">{r.name}</span>
                  <span className="text-[11px]" style={{ color: "#9A9A9A" }}>
                    {r.dist}
                  </span>
                </Link>
              ))}
              <Link
                href="/varanasi"
                className="mobile-nav-item text-primary font-semibold text-sm"
                onClick={() => setMobileOpen(false)}
              >
                All 68 routes →
              </Link>
            </MobileSection>

            <div className="border-t border-gray-100 my-2" />
            {[
              { label: "📰 Blog", href: "/blogs" },
              { label: "ℹ️ About Us", href: "/about-us" },
              { label: "📞 Contact Us", href: "/contact-us" },
              { label: "⭐ Reviews", href: "/review" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm
                           text-text-primary hover:bg-gray-50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}

            <div className="flex gap-2 pt-3 pb-1">
              <a
                href={`tel:${PHONE}`}
                className="flex-1 btn-primary text-sm py-3 justify-center"
              >
                <Phone size={15} /> Call Us
              </a>
              <a
                href={`https://wa.me/${WA}?text=Hi`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-whatsapp text-sm py-3 justify-center"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ── Mobile accordion section ────────────────────────── */
function MobileSection({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl
                   text-sm font-bold uppercase tracking-wider transition-colors"
        style={{
          color: isOpen ? "#DE9619" : "#4A4A4A",
          background: isOpen ? "rgba(222,150,25,0.06)" : "transparent",
        }}
      >
        <span>{label}</span>
        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-250 ${isOpen ? "max-h-[600px]" : "max-h-0"}`}
      >
        <div className="pl-3 pt-1 pb-2 space-y-0.5">{children}</div>
      </div>
    </div>
  );
}
