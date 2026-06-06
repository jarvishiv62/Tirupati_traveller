// src/components/shared/RouteMapSection.tsx
// ───────────────────────────────────────────
// Section 6 of OutstationRouteTemplate.
// Embeds a Google Maps directions view for the origin → destination route.
// Server Component.

interface RouteMapSectionProps {
  origin: string; // e.g. 'Varanasi'
  destination: string; // e.g. 'Gaya'
}

// Known lat/lng pairs for supported cities
const CITY_COORDS: Record<string, { lat: number; lng: number }> = {
  varanasi: { lat: 25.3176, lng: 82.9739 },
  ayodhya: { lat: 26.7922, lng: 82.1998 },
  allahabad: { lat: 25.4358, lng: 81.8463 },
  prayagraj: { lat: 25.4358, lng: 81.8463 },
  lucknow: { lat: 26.8467, lng: 80.9462 },
  gaya: { lat: 24.7955, lng: 85.0002 },
  vindhyachal: { lat: 25.0944, lng: 82.5755 },
  patna: { lat: 25.5941, lng: 85.1376 },
  gorakhpur: { lat: 26.7606, lng: 83.3732 },
  kanpur: { lat: 26.4499, lng: 80.3319 },
  agra: { lat: 27.1767, lng: 78.0081 },
  delhi: { lat: 28.6139, lng: 77.209 },
  mathura: { lat: 27.4924, lng: 77.6737 },
  jaunpur: { lat: 25.7461, lng: 82.6844 },
  buxar: { lat: 25.5656, lng: 83.9772 },
  bhadohi: { lat: 25.396, lng: 82.5694 },
  sarnath: { lat: 25.38, lng: 83.0247 },
  chitrakoot: { lat: 25.181, lng: 80.887 },
  kushinagar: { lat: 26.74, lng: 83.8914 },
};

function getCityKey(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "");
}

export default function RouteMapSection({
  origin,
  destination,
}: RouteMapSectionProps) {
  const originKey = getCityKey(origin);
  const destKey = getCityKey(destination);

  const originCoords = CITY_COORDS[originKey];
  const destCoords = CITY_COORDS[destKey];

  // Build Google Maps embed URL
  let mapSrc: string;

  if (originCoords && destCoords) {
    // Directions embed
    mapSrc = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU3Lm0&origin=${originCoords.lat},${originCoords.lng}&destination=${destCoords.lat},${destCoords.lng}&mode=driving`;
  } else {
    // Fallback: search embed for origin city
    mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d82.9739!3d25.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTirupati+Travel+${encodeURIComponent(origin)}!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin`;
  }

  return (
    <section
      className="bg-section-cream section-pad-sm"
      aria-labelledby="map-section-heading"
    >
      <div className="container-site">
        {/* Section header */}
        <div className="mb-6">
          <h2 id="map-section-heading" className="section-title text-center">
            {origin} to {destination} Route Map
          </h2>
          <div
            className="flex items-center justify-center gap-2 mt-3"
            aria-hidden="true"
          >
            <div className="h-px w-10 bg-accent/50" />
            <span className="text-primary text-sm">✦</span>
            <div className="h-px w-10 bg-accent/50" />
          </div>
          <p className="section-sub text-center mt-2">
            Plan your journey from {origin} to {destination}. Our drivers know
            the best routes — NH highways and state roads.
          </p>
        </div>

        {/* Map container */}
        <div className="rounded-2xl overflow-hidden border border-border-warm shadow-card-warm">
          <iframe
            title={`${origin} to ${destination} taxi route map`}
            src={mapSrc}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

        {/* Route note */}
        <p className="text-text-light text-xs text-center mt-3">
          Map is indicative. Actual route may vary based on traffic and road
          conditions. Our driver will take the fastest route.
        </p>
      </div>
    </section>
  );
}
