// src/types/templates.ts
// ★ Shared TypeScript type contracts for all template data props
// Import from here in templates, data files, and urlParser
//
// Changes from previous version:
//   - PricingRow added here (was in PricingTable.tsx — wrong direction).
//     PricingTable.tsx should now re-export it: export type { PricingRow } from '@/types/templates'
//   - CabServiceData: added heroTagline (required), pricingRows?, pricingNote?,
//     howItWorks? (optional — template has static fallback), internalLinks?.
//     Removed vehicles: VehicleCardData[] — CabServiceTemplate now calls
//     getVehiclesByCity(data.city) directly. citySlug is derived as
//     data.city.toLowerCase() inside the template.
//   - CityLandingData: faqs? already added in previous update pass.
//
// MIGRATION NOTE for existing CabService data files:
//   Required additions per data object:
//     heroTagline: '<service type> in <city> — <short value prop>'
//   Optional removals:
//     vehicles: VehicleCardData[]   ← delete this field, template handles it
//     howItWorks: [...]              ← can delete; template has static fallback

// ─── SHARED ───────────────────────────────────────────────────────────────────

/**
 * A single row in a PricingTable.
 * Defined here (not in PricingTable.tsx) so CabServiceData can reference it
 * without a types → component circular dependency.
 * PricingTable.tsx re-exports this: export type { PricingRow } from '@/types/templates'
 */
export type PricingRow = {
  vehicle:      string;    // e.g. 'Swift Dzire'
  category:     string;    // e.g. 'Sedan (4 seats)'
  price:        number;    // starting price in ₹
  priceLabel?:  string;    // override label e.g. '₹2,500 / 12 hrs'
  features:     string[];  // short feature tags e.g. ['AC', 'GPS']
};

// ─── CITY LANDING ──────────────────────────────────────────────────────────

export type CityService = {
  label: string;
  icon:  string;   // path to SVG in public/svg/icons/
  slug:  string;   // internal route slug e.g. 'varanasi/one-way-cab-in-varanasi'
};

export type CityPlace = {
  name:     string;
  image:    string;
  distance: string;
};

export type OutstationLink = {
  destination: string;
  slug:        string;
  fare:        number;   // ₹ sedan base fare
};

export type CityLandingData = {
  city:         string;
  aliases:      string[];                                              // rotating names in hero H1
  heroText:     string;                                               // subtitle below H1
  heroImage:    string;                                               // full-path from public/
  services:     { label: string; icon: string; slug: string }[];     // max 6 in ServicesIcons
  vehicles:     string[];                                             // generic vehicle IDs from vehicles.ts
  places:       { name: string; image: string; distance: string }[]; // max 8 in PlacesGrid
  outstationLinks: { destination: string; slug: string; fare: number }[];
  faqs?:        { q: string; a: string }[];                          // CityFAQSection (optional)
  seo: {
    title:       string;
    description: string;
    canonical:   string;
  };
};

// ─── PLACES TO VISIT ──────────────────────────────────────────────────────

export type PlaceItem = {
  name:        string;
  description: string;
  image:       string;
  distance:    string;
  category?:   string;  // e.g. 'Temple' | 'Ghat' | 'Heritage' | 'Nature' | 'Market'
};

export type NearbyRoute = {
  destination: string;
  slug:        string;
  fare:        number;
};

export type PlacesToVisitData = {
  city:         string;
  places:       PlaceItem[];
  nearbyRoutes: NearbyRoute[];
  faqs:         { q: string; a: string }[];
  seo: {
    title:       string;
    description: string;
    canonical:   string;
  };
};

// ─── OUTSTATION ROUTE ─────────────────────────────────────────────────────

export type OutstationRouteData = {
  origin:      string;
  destination: string;
  distance:    string;
  duration:    string;
  fare: {
    sedan:  number;
    innova: number;
    ertiga: number;
    tempo?: number;
  };
  highlights:    string[];
  placesEnRoute: string[];
  faqs:          { q: string; a: string }[];
  seo: {
    title:       string;
    description: string;
    canonical:   string;
  };
};

// ─── VEHICLE ──────────────────────────────────────────────────────────────

export type VehicleData = {
  vehicleName: string;
  city:        string;
  slug:        string;
  specs: {
    seats:    number;
    ac:       boolean;
    luggage:  string;   // e.g. '3 bags'
    fuelType: string;
  };
  pricePerKm: number;
  basePrice:  number;
  images:     string[];
  features:   string[];
  faqs:       { q: string; a: string }[];
  seo: {
    title:       string;
    description: string;
    canonical:   string;
  };
};

// ─── CAB SERVICE ──────────────────────────────────────────────────────────
//
// Note on removed fields vs previous template inline type:
//   vehicles: VehicleCardData[] — REMOVED. CabServiceTemplate calls
//     getVehiclesByCity(data.city) directly (same pattern as CityLandingTemplate).
//   citySlug — REMOVED. Template derives it as data.city.toLowerCase().
//
// New required field:
//   heroTagline — short descriptor shown below the H1 in the hero section.
//     All existing CabService data objects need this line added.
//
// howItWorks is now OPTIONAL. If omitted, the template renders generic
//   3-step static booking steps. Provide custom steps only for service types
//   where the flow genuinely differs (e.g. corporate, monthly rental).

export type CabServiceData = {
  serviceType:
    | 'one-way'
    | 'round-trip'
    | 'full-day'
    | 'half-day'
    | 'outstation'
    | 'drop'
    | 'call-taxi'
    | 'tourist'
    | 'corporate';
  city:         string;                                  // display name e.g. 'Varanasi'
  heroTagline:  string;                                  // subtitle below H1 in hero
  pricing:      { sedan: number; innova: number; ertiga: number };
  pricingRows?: PricingRow[];                            // optional detailed fare table
  pricingNote?: string;                                  // optional footnote for PricingTable
  inclusions:   string[];
  howItWorks?:  { step: number; title: string; desc: string }[];  // optional, static fallback if absent
  internalLinks?: { label: string; href: string }[];
  faqs:         { q: string; a: string }[];
  seo: {
    title:       string;
    description: string;
    canonical:   string;
  };
};

// ─── LOCAL SERVICE ────────────────────────────────────────────────────────

export type LocalServiceData = {
  city:        string;
  serviceType: string;
  hourlyPackages: { hours: number; km: number; price: number }[];
  places:      { name: string; distance: string }[];
  faqs:        { q: string; a: string }[];
  seo: {
    title:       string;
    description: string;
    canonical:   string;
  };
};

// ─── AIRPORT TAXI ─────────────────────────────────────────────────────────

export type AirportTaxiData = {
  airport:   string;
  iataCode:  string;
  city:      string;
  terminals: string[];
  fare:      { sedan: number; innova: number; ertiga: number };
  inclusions: string[];
  faqs:      { q: string; a: string }[];
  seo: {
    title:       string;
    description: string;
    canonical:   string;
  };
};

// ─── TOUR PACKAGE ─────────────────────────────────────────────────────────

export type TourPackageData = {
  packageName: string;
  city:        string;
  duration:    string;
  itinerary:   { day: number; title: string; activities: string[] }[];
  inclusions:  string[];
  exclusions:  string[];
  pricing:     { perPerson: number; group?: number };
  faqs:        { q: string; a: string }[];
  seo: {
    title:       string;
    description: string;
    canonical:   string;
  };
};

// ─── TEMPO TRAVELLER ──────────────────────────────────────────────────────

export type TempoTravellerData = {
  city:          string;
  variant:       'standard' | 'luxury' | 'maharaja' | 'urbania';
  capacity:      number;
  pricePerKm:    number;
  popularRoutes: { destination: string; fare: number }[];
  faqs:          { q: string; a: string }[];
  seo: {
    title:       string;
    description: string;
    canonical:   string;
  };
};

// ─── CAR RENTAL ───────────────────────────────────────────────────────────

export type CarRentalData = {
  city:       string;
  rentalType: 'daily' | 'weekly' | 'monthly';
  packages:   { duration: string; km: number; price: number; vehicle: string }[];
  faqs:       { q: string; a: string }[];
  seo: {
    title:       string;
    description: string;
    canonical:   string;
  };
};

// ─── ACCOMMODATION ────────────────────────────────────────────────────────

export type AccommodationData = {
  city:      string;
  accType:   'hotel' | 'homestay' | 'dharamshala' | 'dormitory' | 'guest-house';
  features:  string[];
  priceRange: { min: number; max: number };
  nearbyGhats: string[];
  faqs:      { q: string; a: string }[];
  seo: {
    title:       string;
    description: string;
    canonical:   string;
  };
};

// ─── STATIC PAGE ──────────────────────────────────────────────────────────

export type StaticPageData = {
  pageTitle: string;
  content:   string;
  seo: {
    title:       string;
    description: string;
    canonical:   string;
  };
};