// src/lib/internalLinks.ts
// SEO internal linking rules
// Maps each template type → array of related links to inject via InternalLinks.tsx
// Full logic expanded in Chunk 6 when OutstationRouteTemplate is built

import type { TemplateName } from '@/data/allRoutes';

export type LinkItem = {
  label: string;
  href: string;
  category?: string;
};

// ── OUTSTATION ROUTE INTERNAL LINKS ───────────────────────────────────────
function getOutstationLinks(data: {
  origin: string;
  destination: string;
}): LinkItem[] {
  const orig = data.origin?.toLowerCase() ?? 'varanasi';
  const dest = data.destination?.toLowerCase() ?? '';

  const links: LinkItem[] = [];

  // Return route
  if (dest) {
    links.push({
      label: `${data.destination} to ${data.origin} Taxi`,
      href: `/${dest}/${dest}-to-${orig}-taxi`,
      category: 'Return Route',
    });
  }

  // City landing pages
  links.push(
    { label: `Taxi in ${data.origin}`, href: `/${orig}`, category: 'City Service' },
    { label: `${data.origin} Tour Packages`, href: `/${orig}/${orig}-tour-packages`, category: 'Tour' },
    { label: `${data.origin} Airport Taxi`, href: `/${orig}/${orig}-airport-taxi`, category: 'Airport' },
    { label: `Full Day Taxi ${data.origin}`, href: `/${orig}/full-day-taxi-in-${orig}`, category: 'Service' },
    { label: `Innova Crysta in ${data.origin}`, href: `/${orig}/innova-crysta-on-rent-in-${orig}`, category: 'Vehicle' },
    { label: `Tempo Traveller ${data.origin}`, href: `/${orig}/tempo-traveller-${orig}`, category: 'Vehicle' },
  );

  return links;
}

// ── VEHICLE INTERNAL LINKS ────────────────────────────────────────────────
function getVehicleLinks(data: { city: string }): LinkItem[] {
  const city = data.city?.toLowerCase() ?? 'varanasi';

  return [
    { label: `One Way Cab in ${data.city}`, href: `/${city}/one-way-cab-in-${city}`, category: 'Service' },
    { label: `Full Day Taxi ${data.city}`, href: `/${city}/full-day-taxi-in-${city}`, category: 'Service' },
    { label: `${data.city} Tour Packages`, href: `/${city}/${city}-tour-packages`, category: 'Tour' },
    { label: `${data.city} Airport Taxi`, href: `/${city}/${city}-airport-taxi`, category: 'Airport' },
    { label: `Tempo Traveller ${data.city}`, href: `/${city}/tempo-traveller-${city}`, category: 'Vehicle' },
  ];
}

// ── CAB SERVICE INTERNAL LINKS ────────────────────────────────────────────
function getCabServiceLinks(data: { city: string }): LinkItem[] {
  const city = data.city?.toLowerCase() ?? 'varanasi';

  return [
    { label: `Innova Crysta in ${data.city}`, href: `/${city}/innova-crysta-on-rent-in-${city}`, category: 'Vehicle' },
    { label: `Ertiga Cab in ${data.city}`, href: `/${city}/ertiga-car-on-rent-in-${city}`, category: 'Vehicle' },
    { label: `Swift Dzire in ${data.city}`, href: `/${city}/swift-dzire-taxi-service-in-${city}`, category: 'Vehicle' },
    { label: `${data.city} Tour Packages`, href: `/${city}/${city}-tour-packages`, category: 'Tour' },
    { label: `${data.city} Airport Taxi`, href: `/${city}/${city}-airport-taxi`, category: 'Airport' },
    { label: `Places to Visit in ${data.city}`, href: `/${city}/places-to-visit-in-${city}`, category: 'Guide' },
  ];
}

// ── CITY LANDING INTERNAL LINKS ───────────────────────────────────────────
function getCityLandingLinks(data: { city: string }): LinkItem[] {
  const city = data.city?.toLowerCase() ?? 'varanasi';

  return [
    { label: `${data.city} Tour Packages`, href: `/${city}/${city}-tour-packages`, category: 'Tour' },
    { label: `${data.city} Airport Taxi`, href: `/${city}/${city}-airport-taxi`, category: 'Airport' },
    { label: `Places to Visit in ${data.city}`, href: `/${city}/places-to-visit-in-${city}`, category: 'Guide' },
    { label: `Tempo Traveller ${data.city}`, href: `/${city}/tempo-traveller-${city}`, category: 'Vehicle' },
    { label: `Car Rental ${data.city}`, href: `/${city}/car-rental-${city}`, category: 'Rental' },
    { label: `Full Day Taxi ${data.city}`, href: `/${city}/full-day-taxi-in-${city}`, category: 'Service' },
  ];
}

// ── MAIN EXPORT ───────────────────────────────────────────────────────────
export function getInternalLinks(
  template: TemplateName,
  data: Record<string, unknown>
): LinkItem[] {
  try {
    switch (template) {
      case 'OutstationRouteTemplate':
        return getOutstationLinks(data as { origin: string; destination: string });
      case 'VehicleTemplate':
        return getVehicleLinks(data as { city: string });
      case 'CabServiceTemplate':
      case 'LocalServiceTemplate':
        return getCabServiceLinks(data as { city: string });
      case 'CityLandingTemplate':
        return getCityLandingLinks(data as { city: string });
      case 'TourPackageTemplate':
        return getCabServiceLinks(data as { city: string });
      case 'AirportTaxiTemplate':
        return getVehicleLinks(data as { city: string });
      case 'TempoTravellerTemplate':
        return getCabServiceLinks(data as { city: string });
      case 'CarRentalTemplate':
        return getCabServiceLinks(data as { city: string });
      case 'PlacesToVisitTemplate':
        return getCityLandingLinks(data as { city: string });
      case 'AccommodationTemplate':
        return getCityLandingLinks(data as { city: string });
      default:
        return [];
    }
  } catch {
    return [];
  }
}