// src/components/shared/Footer.tsx
import Link from "next/link";

const PHONE = "8726124680";
const WA = "918726124680";

const QUICK_LINKS = [
  { label: "Varanasi Taxi", href: "/varanasi", icon: "🕌" },
  { label: "Ayodhya Taxi", href: "/ayodhya", icon: "🛕" },
  { label: "Allahabad Taxi", href: "/allahabad", icon: "🏛️" },
  { label: "Lucknow Taxi", href: "/lucknow", icon: "🌆" },
  { label: "Gaya Taxi", href: "/gaya", icon: "☸️" },
  { label: "Vindhyachal Taxi", href: "/vindhyachal", icon: "⛰️" },
];

const POPULAR_ROUTES = [
  { label: "Varanasi → Ayodhya", href: "/varanasi/varanasi-to-ayodhya-taxi" },
  { label: "Varanasi → Gaya", href: "/varanasi/varanasi-to-gaya-taxi" },
  {
    label: "Varanasi → Allahabad",
    href: "/varanasi/varanasi-to-allahabad-taxi",
  },
  { label: "Varanasi → Lucknow", href: "/varanasi/varanasi-to-lucknow-taxi" },
  { label: "Varanasi → Patna", href: "/varanasi/varanasi-to-patna-taxi" },
  { label: "Varanasi → Sarnath", href: "/varanasi/varanasi-to-sarnath-taxi" },
];

const SERVICES = [
  { label: "Tour Packages", href: "/varanasi/varanasi-tour-packages" },
  { label: "Airport Taxi", href: "/varanasi/varanasi-airport-taxi" },
  { label: "Tempo Traveller", href: "/varanasi/tempo-traveller-varanasi" },
  { label: "Car Rental", href: "/varanasi/car-rental-varanasi" },
  {
    label: "Innova on Rent",
    href: "/varanasi/innova-crysta-on-rent-in-varanasi",
  },
  {
    label: "Local Sightseeing",
    href: "/varanasi/varanasi-local-sightseeing-cab",
  },
];

const LEGAL = [
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Blog", href: "/blogs" },
];

const TRUST_STATS = [
  { value: "10+", label: "Years Serving Pilgrims", icon: "🏆" },
  { value: "50K+", label: "Happy Pilgrims", icon: "🙏" },
  { value: "24/7", label: "Always Available", icon: "⏰" },
  { value: "100+", label: "Sacred Routes", icon: "🗺️" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="glow-white relative "
      style={{
        background:
          "linear-gradient(160deg, #DE9619 0%, #DE9619 40%, #DE9619 70%, #DE9619 100%)",
      }}
    >
      {/* ── Decorative background elements ──────────────── */}
      {/* Large Om watermark */}
      <div className="footer-om-bg" aria-hidden="true">
        ॐ
      </div>

      {/* Chakra top-left */}
      <div className="footer-chakra-bg" aria-hidden="true">
        ☸
      </div>

      {/* Gradient glow blobs */}
      <div className="footer-glow-orange" aria-hidden="true" />
      <div className="footer-glow-gold" aria-hidden="true" />

      {/* ── Stats strip ─────────────────────────────────── */}
      <div className="footer-stats-strip relative z-10">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {TRUST_STATS.map(({ value, label, icon }) => (
              <div key={label} className="footer-stat-cell">
                <span className="text-2xl mb-1" aria-hidden="true">
                  {icon}
                </span>
                <span className="text-white font-bold text-2xl font-serif leading-none">
                  {value}
                </span>
                <span className="text-white text-xs mt-0.5 text-center leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main footer grid ─────────────────────────────── */}
      <div className="container-site section-pad-sm relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="footer-logo-mark">
                <span className="footer-logo-om" aria-hidden="true">
                  ॐ
                </span>
                <span className="font-bold text-white text-xs relative z-10">
                  TT
                </span>
              </div>
              <div>
                <div
                  className="font-serif font-bold text-lg text-white leading-tight
                                group-hover:text-white transition-colors duration-200"
                >
                  Tirupati Travel
                </div>
                <div className="text-white text-[10px] uppercase tracking-widest leading-tight">
                  Varanasi&apos;s Trusted Partner
                </div>
              </div>
            </Link>

            <p className="text-white text-sm leading-relaxed mb-5 max-w-xs">
              Varanasi&apos;s most trusted travel agency since 2014. Pilgrimage
              tours, outstation taxi &amp; local cabs across Varanasi, Ayodhya,
              Allahabad, Gaya &amp; beyond.
            </p>

            <div className="space-y-2.5 text-sm">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-white hover:text-white transition-colors group"
              >
                <span className="text-base mt-0.5 group-hover:animate-bounce-sm">
                  📍
                </span>
                <span>
                  L-2/72, Dashashwamedh Plaza,
                  <br />
                  Dashashwamedh Gath, Varanasi - 221001
                </span>
              </a>
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2.5 text-white hover:text-white transition-colors"
              >
                <span className="text-base">📞</span>
                <span className="font-semibold">{PHONE}</span>
              </a>
              <a
                href="mailto:info@tirupatitravel.in"
                className="flex items-center gap-2.5 text-white hover:text-white transition-colors"
              >
                <span className="text-base">✉️</span>
                info@tirupatitravel.in
              </a>
            </div>

            {/* Divider with Om */}
            <div className="footer-om-divider">
              <span className="footer-om-divider-line" />
              <span className="text-white text-lg font-serif px-3 select-none">
                ॐ
              </span>
              <span className="footer-om-divider-line" />
            </div>
            <p className="text-white text-xs italic">
              &quot;काशी विश्वनाथ की जय&quot;
            </p>
          </div>

          {/* Cities */}
          <div>
            <h3 className="footer-col-heading">
              <span>🗺️</span> Cities
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    <span className="text-sm">{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular routes */}
          <div>
            <h3 className="footer-col-heading">
              <span>🚗</span> Routes
            </h3>
            <ul className="space-y-2">
              {POPULAR_ROUTES.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + Company */}
          <div>
            <h3 className="footer-col-heading">
              <span>🚖</span> Services
            </h3>
            <ul className="space-y-2 mb-6">
              {SERVICES.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="footer-col-heading">
              <span>ℹ️</span> Company
            </h3>
            <ul className="space-y-2">
              {LEGAL.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── CTA strip ───────────────────────────────────── */}
        <div className="footer-cta-strip">
          <div className="footer-cta-glow" aria-hidden="true" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div>
              <p className="text-white font-serif font-bold text-lg leading-tight">
                Ready to begin your sacred journey?
              </p>
              <p className="text-white text-sm mt-0.5">
                Book now — pilgrims trust us for every mile.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href={`tel:${PHONE}`}
                className="btn-primary text-sm px-5 py-2.5"
              >
                📞 Call {PHONE}
              </a>
              <a
                href={`https://wa.me/${WA}?text=Hi%2C%20I%20want%20to%20book%20a%20cab`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm px-5 py-2.5"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Animated car road ───────────────────────────── */}
      <div className="footer-road-section relative z-10" aria-hidden="true">
        <div className="footer-road">
          <div className="footer-road-dashes" />
          <span className="footer-road-car">🚗</span>
          {/* Scenery dots */}
          <span className="footer-scenery-item" style={{ left: "5%" }}>
            🛕
          </span>
          <span className="footer-scenery-item" style={{ left: "20%" }}>
            🌴
          </span>
          <span className="footer-scenery-item" style={{ left: "40%" }}>
            ⛩️
          </span>
          <span className="footer-scenery-item" style={{ left: "60%" }}>
            🌴
          </span>
          <span className="footer-scenery-item" style={{ left: "75%" }}>
            🕌
          </span>
          <span className="footer-scenery-item" style={{ left: "90%" }}>
            🛕
          </span>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────── */}
      <div className="border-t border-white/10 py-4 relative z-10">
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white">
          <p>© {year} Tirupati Travel. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <span className="text-white animate-flame-pulse">❤️</span>
            <span>for pilgrims of Kashi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
