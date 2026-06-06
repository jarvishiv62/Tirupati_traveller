// src/components/shared/InternalLinks.tsx
// ─────────────────────────────────────────
// Section 7 of OutstationRouteTemplate.
// Shows: reverse route, same-origin routes, city service links.
// Server Component.

import Link from "next/link";
import { getInternalLinks, type InternalLink } from "@/lib/internalLinks";
import { MapPin, ArrowRight, Car, Navigation } from "lucide-react";

interface InternalLinksProps {
  origin: string;
  destination: string;
  currentSlug: string;
}

export default function InternalLinks({
  origin,
  destination,
  currentSlug,
}: InternalLinksProps) {
  const allLinks = getInternalLinks(origin, destination, currentSlug);

  const cityLanding = allLinks.filter((l) => l.category === "city-landing");
  const reverseRoutes = allLinks.filter((l) => l.category === "reverse");
  const sameOrigin = allLinks.filter((l) => l.category === "same-origin");
  const cityServices = allLinks.filter((l) => l.category === "city-service");

  return (
    <section
      className="bg-section-white section-pad-sm"
      aria-labelledby="internal-links-heading"
    >
      <div className="container-site">
        {/* Section heading */}
        <div className="mb-8 text-center">
          <h2 id="internal-links-heading" className="section-title">
            More Taxi Services from {origin}
          </h2>
          <div
            className="flex items-center justify-center gap-2 mt-3"
            aria-hidden="true"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-accent/60" />
            <span className="text-primary">✦</span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-accent/60" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Col 1: Reverse route + City landing */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              <Navigation
                size={15}
                className="text-primary flex-shrink-0"
                aria-hidden="true"
              />
              Return &amp; City Links
            </h3>
            <ul className="space-y-2">
              {[...reverseRoutes, ...cityLanding].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-text-secondary
                               hover:text-primary transition-colors duration-200 group"
                  >
                    <ArrowRight
                      size={12}
                      className="text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* City services */}
            {cityServices.length > 0 && (
              <>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-secondary uppercase tracking-wider mb-4 mt-6">
                  <Car
                    size={15}
                    className="text-primary flex-shrink-0"
                    aria-hidden="true"
                  />
                  {origin} Services
                </h3>
                <ul className="space-y-2">
                  {cityServices.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-text-secondary
                                   hover:text-primary transition-colors duration-200 group"
                      >
                        <ArrowRight
                          size={12}
                          className="text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
                          aria-hidden="true"
                        />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Col 2 + 3: Same-origin routes */}
          <div className="md:col-span-2">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              <MapPin
                size={15}
                className="text-primary flex-shrink-0"
                aria-hidden="true"
              />
              Other Routes from {origin}
            </h3>
            {sameOrigin.length > 0 ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sameOrigin.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl
                                 border border-border-warm bg-cream
                                 text-sm text-text-secondary
                                 hover:border-primary hover:text-primary hover:bg-primary-light
                                 transition-all duration-200 group"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0
                                   group-hover:bg-accent transition-colors"
                        aria-hidden="true"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-text-light text-sm">
                More outstation routes from {origin} coming soon.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
