// src/components/shared/RouteMapSection.tsx
// Embedded Google Map for origin → destination route
// Server Component

interface RouteMapSectionProps {
  origin: string;
  destination: string;
  className?: string;
}

export default function RouteMapSection({
  origin,
  destination,
  className = '',
}: RouteMapSectionProps) {
  const query = encodeURIComponent(`${origin} to ${destination}`);
  // Google Maps embed — directions mode
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(origin)}&output=embed&z=7`;

  return (
    <section className={`bg-section-white section-pad-sm ${className}`}>
      <div className="container-site">
        <div className="text-center mb-8">
          <h2 className="section-title">
            Route Map: {origin} → {destination}
          </h2>
          <div className="divider-gold" />
          <p className="section-sub mt-4">
            View the route from {origin} to {destination}
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-card border border-border-warm">
          <iframe
            title={`Map: ${origin} to ${destination}`}
            src={src}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block"
          />
        </div>

        <div className="mt-4 text-center">
          <a
            href={`https://www.google.com/maps/dir/${encodeURIComponent(origin)}/${encodeURIComponent(destination)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm"
          >
            Open Full Route in Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}