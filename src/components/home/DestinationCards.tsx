// src/components/home/DestinationCards.tsx
// Dark overlay destination cards — hover reveals dual CTA (Book Cab + Explore)
// Server Component

import ClientDestinationCard from "./ClientDestinationCard";

/* ── Destination data with cab-booking URLs ──────────────────── */
const DESTINATIONS = [
  {
    city: "Varanasi",
    slug: "/varanasi",
    cabSlug: "/varanasi/one-way-cab-in-varanasi",
    image: "/assets/images/varanasi-tour-package.jpeg",
    alt: "Dashashwamedh Ghat Varanasi at sunrise",
    badge: "12 Tours",
    subtitle: "Kashi · Banaras",
    tagline: "Most Sacred City in India",
    highlight: "68 routes covered",
    icon: "🕌",
  },
  {
    city: "Ayodhya",
    slug: "/ayodhya",
    cabSlug: "/ayodhya/one-way-cab-in-ayodhya",
    image: "/assets/images/Ayodhya/ram_janm.webp",
    alt: "Ram Mandir Ayodhya",
    badge: "5 Tours",
    subtitle: "Ram Janmabhoomi",
    tagline: "City of Lord Ram",
    highlight: "200 km from Varanasi",
    icon: "🛕",
  },
  {
    city: "Allahabad",
    slug: "/allahabad",
    cabSlug: "/allahabad/one-way-cab-in-allahabad",
    image: "/assets/images/prayagraj/khusro.webp",
    alt: "Sangam Prayagraj Allahabad",
    badge: "6 Tours",
    subtitle: "Prayagraj · Triveni Sangam",
    tagline: "Kumbh Mela Capital",
    highlight: "130 km from Varanasi",
    icon: "🏛️",
  },
  {
    city: "Gaya",
    slug: "/gaya",
    cabSlug: "/gaya/varanasi-to-gaya-taxi",
    image: "/assets/images/Gaya/Gaya.webp",
    alt: "Vishnupad Temple Gaya Bihar",
    badge: "4 Tours",
    subtitle: "Bodh Gaya · Falgu River",
    tagline: "Sacred Pitru Tarpan Site",
    highlight: "250 km from Varanasi",
    icon: "☸️",
  },
  {
    city: "Vindhyachal",
    slug: "/vindhyachal",
    cabSlug: "/varanasi/varanasi-to-vindhyachal-taxi",
    image: "/assets/images/vindhyachal/vindhyachal.webp",
    alt: "Vindhyachal Mandir Mirzapur",
    badge: "3 Tours",
    subtitle: "Mirzapur · Shakti Peeth",
    tagline: "Maa Vindhyavasini Dham",
    highlight: "75 km from Varanasi",
    icon: "⛰️",
  },
];

/* ── Individual card ─────────────────────────────────────────── */

/* ── Section ─────────────────────────────────────────────────── */
export default function DestinationCards() {
  return (
    <section className="bg-section-cream texture-cream section-pad">
      <div className="container-site">
        {/* Section header */}
        <div className="text-center mb-12">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full
                          border border-primary/20 bg-primary/5"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">
              Sacred Destinations
            </span>
          </div>
          <h2 className="section-title mb-3">Where Do You Want to Go?</h2>
          <div className="divider-gold" />
          <p className="section-sub mt-4 max-w-lg mx-auto">
            Comfortable AC cabs to every pilgrimage site — book in 2 minutes,
            travel with a trusted local expert
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {DESTINATIONS.map((dest) => (
            <ClientDestinationCard key={dest.city} {...dest} />
          ))}
        </div>

        {/* Bottom trust strip */}
        <div className="dest-trust-strip">
          {[
            { icon: "✅", text: "No advance payment" },
            { icon: "📞", text: "Book in 2 minutes" },
            { icon: "🚗", text: "AC cabs, all cities" },
            { icon: "💯", text: "No hidden charges" },
          ].map(({ icon, text }) => (
            <div key={text} className="dest-trust-item">
              <span aria-hidden="true">{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
