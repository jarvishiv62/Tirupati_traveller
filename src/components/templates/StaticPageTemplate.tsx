// src/components/templates/StaticPageTemplate.tsx
//
// Full-page template for all static pages:
//   about-us, contact-us, privacy-policy, terms-and-conditions
//
// pageType drives layout:
//   'about'   → Story + Stats + WhyUs cards + Team
//   'contact' → BookingEnquiryForm + contact details + Google Map
//   'legal'   → Accordion-style legal sections, no CTA banner
//
// Server Component.
// BookingEnquiryForm (inside contact layout) is 'use client'.

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
  MessageSquare,
  ShieldCheck,
  Receipt,
  Clock,
  Car,
  FileText,
} from "lucide-react";
import SacredDivider from "@/components/shared/SacredDivider";
import SectionHeader from "@/components/shared/SectionHeader";
import InternalLinks from "@/components/shared/InternalLinks";
import BookingEnquiryForm from "@/components/shared/BookingEnquiryForm";
import { buildWALink } from "@/lib/utils";
import type { StaticPageData } from "@/data/staticPages";

// ── Icon map for WhyUs icons ──────────────────────────────────────────────────
const ICON_MAP: Record<
  string,
  React.ComponentType<{
    size?: number;
    className?: string;
    strokeWidth?: number;
  }>
> = {
  ShieldCheck,
  Receipt,
  MapPin,
  Clock,
  Car,
  FileText,
  Mail,
  Phone,
  MessageSquare,
};

// ── ContactPage JSON-LD ───────────────────────────────────────────────────────
const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Tirupati Travel",
  url: "https://tirupatitravel.in/contact-us",
  mainEntity: {
    "@type": "TravelAgency",
    name: "Tirupati Travel",
    telephone: "+918726124680",
    email: "info@tirupatitravel.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "L-2/72, Dashashwamedh Plaza, Dashashwamedh Ghat",
      addressLocality: "Varanasi",
      addressRegion: "Uttar Pradesh",
      postalCode: "221001",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  },
};

// ── LAYOUT: ABOUT ─────────────────────────────────────────────────────────────
function AboutLayout({ data }: { data: StaticPageData }) {
  return (
    <>
      <SacredDivider variant="lotus" />

      {/* Story section */}
      <section className="bg-section-white section-pad">
        <div className="container-site">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
            {/* Left image */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              <div className="arch-frame relative overflow-hidden rounded-2xl shadow-temple">
                <Image
                  src="/assets/images/about-incrdble.webp"
                  alt="Tirupati Travel — trusted cab service in Varanasi"
                  width={600}
                  height={480}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right text */}
            <div className="w-full md:w-1/2">
              <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
                Our Story
              </p>
              <h2 className="section-title text-left mb-4">
                Varanasi's Trusted Pilgrimage Travel Partner
              </h2>
              <div className="h-1 w-16 bg-primary rounded-full mb-5" />

              {data.aboutStory &&
                data.aboutStory.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-text-secondary leading-relaxed mb-4 text-sm"
                  >
                    {para}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      {data.stats && data.stats.length > 0 && (
        <>
          <SacredDivider variant="wave" />
          <section className="bg-section-cream section-pad">
            <div className="container-site">
              <SectionHeader
                title="By the Numbers"
                subtitle="A decade of serving pilgrims across India"
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {data.stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="card-warm rounded-2xl p-5 text-center hover:shadow-temple transition-shadow"
                  >
                    <div className="text-primary font-bold text-3xl font-serif leading-none mb-2">
                      {value}
                    </div>
                    <div className="text-text-secondary text-xs leading-snug">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Why Choose Us */}
      {data.whyUs && data.whyUs.length > 0 && (
        <>
          <SacredDivider variant="wave" />
          <section className="bg-section-white section-pad">
            <div className="container-site">
              <SectionHeader
                title="Why Choose Tirupati Travel"
                subtitle="Six reasons pilgrims trust us year after year"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {data.whyUs.map(({ title, description, icon }) => {
                  const Icon = ICON_MAP[icon] ?? ShieldCheck;
                  return (
                    <div
                      key={title}
                      className="card-warm rounded-2xl p-6 hover:shadow-temple transition-shadow"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon
                          size={22}
                          className="text-primary"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="font-serif font-bold text-text-primary text-lg mb-2">
                        {title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Team */}
      {data.team && data.team.length > 0 && (
        <>
          <SacredDivider variant="mandala" />
          <section className="bg-section-cream section-pad">
            <div className="container-site">
              <SectionHeader
                title="Meet the Team"
                subtitle="The people behind every successful journey"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
                {data.team.map(({ name, role, description }) => (
                  <div
                    key={name}
                    className="card-warm rounded-2xl p-6 text-center hover:shadow-temple transition-shadow"
                  >
                    {/* Avatar placeholder */}
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold font-serif text-2xl">
                        {name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-text-primary text-base mb-0.5">
                      {name}
                    </h3>
                    <p className="text-primary text-xs font-medium mb-3">
                      {role}
                    </p>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA */}
      <section className="gradient-sacred relative overflow-hidden py-14 md:py-16">
        <div
          className="mandala-watermark absolute right-6 top-1/2 -translate-y-1/2 w-64 h-64 text-white"
          style={{ opacity: 0.07 }}
          aria-hidden="true"
        >
          <Image
            src="/svg/corner-mandala.svg"
            alt=""
            fill
            className="object-contain animate-mandala-slow"
          />
        </div>
        <div className="container-site relative z-10 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-3">
            Ready to Plan Your Journey?
          </h2>
          <p className="text-white/75 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Call us or WhatsApp — we respond within 30 minutes, 24/7.
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
              href={buildWALink(
                "Hi, I want to book a cab or tour with Tirupati Travel.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-8 py-3.5 text-base text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <SacredDivider variant="gold-line" />
      <InternalLinks
        links={[
          { label: "Contact Us", href: "/contact-us" },
          { label: "Varanasi Tours", href: "/varanasi/varanasi-tour-packages" },
          { label: "Cab Services", href: "/varanasi/one-way-cab-in-varanasi" },
          {
            label: "Tempo Traveller",
            href: "/varanasi/tempo-traveller-varanasi",
          },
        ]}
        heading="Explore Our Services"
      />
    </>
  );
}

// ── LAYOUT: CONTACT ───────────────────────────────────────────────────────────
function ContactLayout({ data }: { data: StaticPageData }) {
  return (
    <>
      {/* ContactPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <SacredDivider variant="lotus" />

      <section className="bg-section-white section-pad">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left — Form */}
            <div>
              <SectionHeader
                title="Send an Enquiry"
                subtitle="We respond within 30 minutes"
                align="left"
                divider={false}
              />
              <BookingEnquiryForm className="mt-4" />
            </div>

            {/* Right — Contact details + Map */}
            <div className="space-y-6">
              <SectionHeader
                title="Get In Touch"
                subtitle="Multiple ways to reach us"
                align="left"
                divider={false}
              />

              {/* Contact cards */}
              <div className="space-y-3">
                {[
                  {
                    icon: Phone,
                    label: "Call Us",
                    value: "87261 24680",
                    href: "tel:8726124680",
                    hint: "Available 24/7",
                  },
                  {
                    icon: MessageSquare,
                    label: "WhatsApp",
                    value: "+91 87261 24680",
                    href: buildWALink(
                      "Hi, I want to enquire about a booking with Tirupati Travel.",
                    ),
                    hint: "Quick replies",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: data.email ?? "info@tirupatitravel.in",
                    href: `mailto:${data.email ?? "info@tirupatitravel.in"}`,
                    hint: "Replies within 4 hrs",
                  },
                  {
                    icon: MapPin,
                    label: "Visit Us",
                    value:
                      data.address ?? "L-2/72, Dashashwamedh Plaza, Varanasi",
                    href:
                      data.mapLink ??
                      "https://maps.google.com/?q=Dashashwamedh+Ghat+Varanasi",
                    hint: "Near Dashashwamedh Ghat",
                  },
                ].map(({ icon: Icon, label, value, href, hint }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="card-warm rounded-xl p-4 flex items-start gap-4 hover:shadow-temple transition-shadow block"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon
                        size={18}
                        className="text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <div className="text-xs text-text-light font-medium uppercase tracking-wide">
                        {label}
                      </div>
                      <div className="text-text-primary font-medium text-sm mt-0.5">
                        {value}
                      </div>
                      <div className="text-text-light text-xs mt-0.5">
                        {hint}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Google Maps embed */}
              {data.googleMapsEmbed && (
                <div
                  className="rounded-2xl overflow-hidden shadow-card-warm border border-border-warm"
                  style={{ height: 260 }}
                >
                  <iframe
                    src={data.googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tirupati Travel location — Dashashwamedh Ghat, Varanasi"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <SacredDivider variant="gold-line" />
      <InternalLinks
        links={[
          { label: "About Us", href: "/about-us" },
          {
            label: "Varanasi Tour Packages",
            href: "/varanasi/varanasi-tour-packages",
          },
          {
            label: "Outstation Cab",
            href: "/varanasi/one-way-cab-in-varanasi",
          },
          {
            label: "Airport Taxi Varanasi",
            href: "/varanasi/varanasi-airport-taxi",
          },
        ]}
        heading="Explore Our Services"
      />
    </>
  );
}

// ── LAYOUT: LEGAL (Terms + Privacy) ─────────────────────────────────────────
function LegalLayout({ data }: { data: StaticPageData }) {
  return (
    <>
      <SacredDivider variant="lotus" />

      <section className="bg-section-white section-pad">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            {/* Last updated */}
            {data.lastUpdated && (
              <p className="text-text-light text-sm mb-8">
                Last updated:{" "}
                <span className="font-medium text-text-secondary">
                  {data.lastUpdated}
                </span>
              </p>
            )}

            {/* Legal sections */}
            {data.legalSections &&
              data.legalSections.map(({ heading, content }) => (
                <div key={heading} className="mb-8">
                  <h2 className="font-serif font-bold text-text-primary text-lg mb-3 pb-2 border-b border-border-warm">
                    {heading}
                  </h2>
                  <div className="space-y-3">
                    {content.split("\n\n").map((para, i) => {
                      // Handle bullet lists (lines starting with •)
                      if (para.includes("\n• ") || para.startsWith("• ")) {
                        const lines = para.split("\n");
                        return (
                          <ul key={i} className="space-y-1.5">
                            {lines.map((line, j) => {
                              const isBullet = line.startsWith("• ");
                              const text = isBullet ? line.slice(2) : line;
                              if (!text.trim()) return null;
                              return isBullet ? (
                                <li
                                  key={j}
                                  className="flex items-start gap-2 text-text-secondary text-sm leading-relaxed"
                                >
                                  <span className="text-primary mt-1.5 flex-shrink-0">
                                    •
                                  </span>
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: text.replace(
                                        /\*\*(.*?)\*\*/g,
                                        "<strong>$1</strong>",
                                      ),
                                    }}
                                  />
                                </li>
                              ) : (
                                <p
                                  key={j}
                                  className="text-text-secondary text-sm leading-relaxed"
                                  dangerouslySetInnerHTML={{
                                    __html: text.replace(
                                      /\*\*(.*?)\*\*/g,
                                      "<strong>$1</strong>",
                                    ),
                                  }}
                                />
                              );
                            })}
                          </ul>
                        );
                      }
                      return (
                        <p
                          key={i}
                          className="text-text-secondary text-sm leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html: para.replace(
                              /\*\*(.*?)\*\*/g,
                              "<strong>$1</strong>",
                            ),
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}

            {/* Footer note */}
            <div className="card-warm rounded-xl p-5 mt-10">
              <p className="text-text-secondary text-sm">
                For any questions about this policy, contact us at{" "}
                <a
                  href="tel:8726124680"
                  className="text-primary font-medium hover:underline"
                >
                  8726124680
                </a>{" "}
                or{" "}
                <a
                  href="mailto:info@tirupatitravel.in"
                  className="text-primary font-medium hover:underline"
                >
                  info@tirupatitravel.in
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* No CTA banner on legal pages — as specified */}
    </>
  );
}

// ── MAIN TEMPLATE COMPONENT ───────────────────────────────────────────────────
export default function StaticPageTemplate({ data }: { data: StaticPageData }) {
  return (
    <>
      {/* ── HERO — shared across all static pages ────────────────────────── */}
      <section className="bg-section-dark relative overflow-hidden py-16 md:py-20">
        <div
          className="mandala-watermark absolute right-0 top-0 w-72 h-72 text-white"
          style={{ opacity: 0.05 }}
          aria-hidden="true"
        >
          <Image
            src="/svg/corner-mandala.svg"
            alt=""
            fill
            className="object-contain animate-mandala-slow"
          />
        </div>

        <div className="container-site relative z-10">
          {/* Breadcrumb */}
          <nav className="text-white/50 text-sm mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/80">{data.pageTitle}</span>
          </nav>

          <div className="max-w-2xl">
            {/* H1 — exactly one per page */}
            <h1 className="page-heading mb-4 leading-tight">
              {data.pageTitle}
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              {data.heroTagline}
            </p>
          </div>
        </div>
      </section>

      {/* ── BODY — layout driven by pageType ─────────────────────────────── */}
      {data.pageType === "about" && <AboutLayout data={data} />}
      {data.pageType === "contact" && <ContactLayout data={data} />}
      {data.pageType === "legal" && <LegalLayout data={data} />}
    </>
  );
}
