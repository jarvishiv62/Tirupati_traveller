// src/components/templates/CarRentalTemplate.tsx
//
// Full-page template for all car rental pages:
//   varanasi/car-rental-varanasi
//   varanasi/monthly-car-rentals-varanasi
//   ayodhya/car-rental-ayodhya
//   ayodhya/monthly-car-rentals-ayodhya
//   allahabad/car-rental-allahabad
//   allahabad/monthly-car-rentals-allahabad
//   lucknow/car-rental-in-lucknow
//
// Sections:
//   1. RentalHero    — H1 + rental type badge + starting price
//   2. PackageCards  — hourly/daily/monthly package cards
//   3. VehicleFleet  — all available vehicles with rate comparison table
//   4. Inclusions    — what's included checklist
//   5. BookingCTA    — gradient-sacred banner
//   6. FAQ
//   7. InternalLinks
//
// Server Component.

import Image from "next/image";
import {
  Phone,
  CheckCircle,
  Clock,
  Calendar,
  CalendarDays,
} from "lucide-react";
import SacredDivider from "@/components/shared/SacredDivider";
import SectionHeader from "@/components/shared/SectionHeader";
import InternalLinks from "@/components/shared/InternalLinks";
import { buildWALink } from "@/lib/utils";
import type { CarRentalData } from "@/data/carRental";

const RENTAL_LABELS = {
  daily: "Daily Car Rental",
  weekly: "Weekly Car Rental",
  monthly: "Monthly Car Rental",
};

function buildFaqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export default function CarRentalTemplate({ data }: { data: CarRentalData }) {
  const rentalLabel = RENTAL_LABELS[data.rentalType];
  const isMonthly = data.rentalType === "monthly";
  const startingPrice = data.packages[0]?.price ?? 0;
  const pageTitle = `${rentalLabel} in ${data.city}`;

  const waLink = buildWALink(
    `Hi, I want to book a ${rentalLabel.toLowerCase()} in ${data.city}. Please share vehicle options and pricing.`,
  );

  return (
    <>
      {data.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildFaqJsonLd(data.faqs)),
          }}
        />
      )}

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-section-dark relative overflow-hidden py-16 md:py-20">
        <div
          className="mandala-watermark absolute right-0 top-0 w-72 h-72 text-white"
          style={{ opacity: 0.05 }}
          aria-hidden="true"
        >
          <Image
            src="/svg/ghats/corner-mandala.svg"
            alt=""
            fill
            className="object-contain animate-mandala-slow"
          />
        </div>
        <div className="container-site relative z-10">
          <nav className="text-white/50 text-sm mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <span>/</span>
            <a
              href={`/${data.citySlug}`}
              className="hover:text-white transition-colors"
            >
              {data.city}
            </a>
            <span>/</span>
            <span className="text-white/80">{rentalLabel}</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold text-secondary font-bold text-sm px-4 py-1.5 rounded-full mb-5 shadow">
              {isMonthly ? <CalendarDays size={14} /> : <Clock size={14} />}
              Starting ₹{startingPrice.toLocaleString("en-IN")}
              {isMonthly ? "/month" : " onwards"}
            </div>
            <h1 className="page-heading mb-4 leading-tight">{pageTitle}</h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">
              {data.heroTagline}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {data.availableVehicles.map((v) => (
                <div
                  key={v.id}
                  className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/80 text-sm"
                >
                  {v.name}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:8726124680"
                className="btn-primary px-8 py-3.5 text-base flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call: 87261 24680
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-8 py-3.5 text-base text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <SacredDivider variant="lotus" />

      {/* ── 2. PACKAGES ─────────────────────────────────────────────────────── */}
      <section className="bg-section-white section-pad">
        <div className="container-site">
          <SectionHeader
            title={
              isMonthly ? "Monthly Rental Packages" : "Hourly & Daily Packages"
            }
            subtitle={
              isMonthly
                ? "Fixed monthly rates with dedicated driver — 26 working days"
                : "Flexible packages for every travel need"
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {data.packages.map((pkg, idx) => {
              const pkgWa = buildWALink(
                `Hi, I want to book the ${pkg.duration} ${pkg.vehicle} rental in ${data.city} for ₹${pkg.price.toLocaleString("en-IN")}. Please confirm.`,
              );
              const isPopular = idx === 1;
              return (
                <div
                  key={`${pkg.duration}-${pkg.vehicle}`}
                  className={`card-warm rounded-2xl p-5 text-center hover:shadow-temple transition-shadow duration-300 relative ${isPopular ? "border-2 border-primary" : ""}`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    {isMonthly ? (
                      <CalendarDays
                        size={18}
                        className="text-primary"
                        strokeWidth={1.5}
                      />
                    ) : (
                      <Clock
                        size={18}
                        className="text-primary"
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                  <div className="font-serif font-bold text-text-primary text-lg mb-0.5">
                    {pkg.duration}
                  </div>
                  <div className="text-text-light text-xs mb-0.5">
                    {pkg.km} km included
                  </div>
                  <div className="text-text-light text-xs mb-3">
                    {pkg.vehicle}
                  </div>
                  <div className="text-primary font-bold font-serif text-xl mb-1">
                    ₹{pkg.price.toLocaleString("en-IN")}
                  </div>
                  <div className="text-text-light text-xs mb-4">
                    Extra km ₹{pkg.extraKmRate}/km
                  </div>
                  <a
                    href={pkgWa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs px-4 py-2 w-full text-center block"
                  >
                    Book This
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SacredDivider variant="wave" />

      {/* ── 3. VEHICLE FLEET ────────────────────────────────────────────────── */}
      <section className="bg-section-cream section-pad">
        <div className="container-site">
          <SectionHeader
            title={`Available Vehicles in ${data.city}`}
            subtitle="Compare rates across all vehicle types"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {data.availableVehicles.map((vehicle) => {
              const vehicleWa = buildWALink(
                `Hi, I want to rent a ${vehicle.name} in ${data.city}. Please share availability and ${data.rentalType} rates.`,
              );
              return (
                <div
                  key={vehicle.id}
                  className="card-warm rounded-2xl overflow-hidden hover:shadow-temple transition-shadow duration-300"
                >
                  <div className="relative h-40 bg-cream-dark">
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.name} rental in ${data.city}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-bold text-text-primary text-base mb-0.5">
                      {vehicle.name}
                    </h3>
                    <p className="text-text-light text-xs mb-3">
                      {vehicle.category}
                    </p>
                    <div className="space-y-1.5 mb-4">
                      {[
                        {
                          label: "Daily (8 hrs)",
                          value: vehicle.dailyRate,
                          icon: Clock,
                        },
                        {
                          label: "Weekly",
                          value: vehicle.weeklyRate,
                          icon: Calendar,
                        },
                        {
                          label: "Monthly",
                          value: vehicle.monthlyRate,
                          icon: CalendarDays,
                        },
                      ].map(({ label, value, icon: Icon }) => (
                        <div
                          key={label}
                          className={`flex items-center justify-between text-xs py-1.5 border-b border-border-warm last:border-0 ${
                            (isMonthly && label === "Monthly") ||
                            (!isMonthly && label === "Daily (8 hrs)")
                              ? "text-primary font-semibold"
                              : "text-text-secondary"
                          }`}
                        >
                          <span className="flex items-center gap-1.5">
                            <Icon size={11} />
                            {label}
                          </span>
                          <span>₹{value.toLocaleString("en-IN")}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={vehicleWa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp text-xs py-2 w-full text-center block"
                    >
                      Book {vehicle.name}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SacredDivider variant="mandala" />

      {/* ── 4. INCLUSIONS ───────────────────────────────────────────────────── */}
      <section className="bg-section-white section-pad">
        <div className="container-site">
          <SectionHeader
            title="What's Included"
            subtitle="Everything covered in your rental package"
          />
          <div className="max-w-2xl mx-auto">
            <div className="card-warm rounded-2xl p-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.inclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-text-secondary text-sm"
                  >
                    <CheckCircle
                      size={16}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-text-light text-xs text-center mt-4">
              Toll, parking &amp; state taxes charged at actual where
              applicable. Outstation trips require advance booking.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. BOOKING CTA ──────────────────────────────────────────────────── */}
      <section className="gradient-sacred relative overflow-hidden py-14 md:py-16">
        <div
          className="mandala-watermark absolute right-6 top-1/2 -translate-y-1/2 w-64 h-64 text-white"
          style={{ opacity: 0.07 }}
          aria-hidden="true"
        >
          <Image
            src="/svg/ghats/corner-mandala.svg"
            alt=""
            fill
            className="object-contain animate-mandala-slow"
          />
        </div>
        <div className="container-site relative z-10 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-3">
            Book Your Rental in {data.city} Today
          </h2>
          <p className="text-white/75 text-base md:text-lg mb-8 max-w-xl mx-auto">
            {isMonthly
              ? "Dedicated driver · Fixed monthly rate · GST invoice · 24/7 support"
              : "Flexible packages · AC vehicle · Professional driver · No hidden charges"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8726124680"
              className="btn-gold px-8 py-3.5 text-base flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call: 87261 24680
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-8 py-3.5 text-base text-center"
            >
              WhatsApp to Book
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ──────────────────────────────────────────────────────────── */}
      {data.faqs.length > 0 && (
        <>
          <SacredDivider variant="wave" />
          <section className="bg-section-white section-pad">
            <div className="container-site">
              <SectionHeader title="Frequently Asked Questions" />
              <div className="max-w-3xl mx-auto space-y-3">
                {data.faqs.map((faq) => (
                  <div key={faq.q} className="card-warm rounded-xl p-5">
                    <h3 className="font-sans font-semibold text-text-primary text-sm mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── 7. INTERNAL LINKS ───────────────────────────────────────────────── */}
      {data.internalLinks.length > 0 && (
        <>
          <SacredDivider variant="gold-line" />
          <InternalLinks
            links={data.internalLinks}
            heading={`More Services in ${data.city}`}
          />
        </>
      )}
    </>
  );
}
