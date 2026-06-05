// src/types/templates.ts
// ★ Shared TypeScript type contracts for all template data props
// Import from here in templates, data files, and urlParser

// ─── CITY LANDING ──────────────────────────────────────────────────────────

export type CityService = {
  label: string;
  icon: string;    // path to SVG in public/svg/icons/
  slug: string;    // internal route slug e.g. 'varanasi/one-way-cab-in-varanasi'
};

export type CityPlace = {
  name: string;
  image: string;
  distance: string;
};

export type OutstationLink = {
  destination: string;
  slug: string;
  fare: number;  // ₹ sedan base fare
};

export type CityLandingData = {
  city: string;
  aliases: string[];          // rotating names shown in hero H1
  heroText: string;           // subtitle below H1
  heroImage: string;          // full-path from public/
  services: CityService[];    // max 6 items shown in ServicesIcons
  vehicles: string[];         // vehicle IDs pulled from vehicles.ts
  places: CityPlace[];        // shown in PlacesGrid (max 8)
  outstationLinks: OutstationLink[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
};

// ─── PLACES TO VISIT ──────────────────────────────────────────────────────

export type PlaceItem = {
  name: string;
  description: string;
  image: string;
  distance: string;
  category?: string;  // e.g. 'Temple' | 'Ghat' | 'Heritage' | 'Nature' | 'Market'
};

export type NearbyRoute = {
  destination: string;
  slug: string;
  fare: number;
};

export type PlacesToVisitData = {
  city: string;
  places: PlaceItem[];
  nearbyRoutes: NearbyRoute[];
  faqs: { q: string; a: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
};

// ─── OUTSTATION ROUTE ─────────────────────────────────────────────────────

export type OutstationRouteData = {
  origin: string;
  destination: string;
  distance: string;
  duration: string;
  fare: {
    sedan: number;
    innova: number;
    ertiga: number;
    tempo?: number;
  };
  highlights: string[];
  placesEnRoute: string[];
  faqs: { q: string; a: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
};

// ─── VEHICLE ──────────────────────────────────────────────────────────────

export type VehicleData = {
  vehicleName: string;
  city: string;
  slug: string;
  specs: {
    seats: number;
    ac: boolean;
    luggage: string;
    fuelType: string;
  };
  pricePerKm: number;
  basePrice: number;
  images: string[];
  features: string[];
  faqs: { q: string; a: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
};

// ─── CAB SERVICE ──────────────────────────────────────────────────────────

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
  city: string;
  pricing: { sedan: number; innova: number; ertiga: number };
  inclusions: string[];
  howItWorks: { step: number; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
};

// ─── LOCAL SERVICE ────────────────────────────────────────────────────────

export type LocalServiceData = {
  city: string;
  serviceType: string;
  hourlyPackages: { hours: number; km: number; price: number }[];
  places: { name: string; distance: string }[];
  faqs: { q: string; a: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
};

// ─── AIRPORT TAXI ─────────────────────────────────────────────────────────

export type AirportTaxiData = {
  airport: string;
  iataCode: string;
  city: string;
  terminals: string[];
  fare: { sedan: number; innova: number; ertiga: number };
  inclusions: string[];
  faqs: { q: string; a: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
};

// ─── TOUR PACKAGE ─────────────────────────────────────────────────────────

export type TourPackageData = {
  packageName: string;
  city: string;
  duration: string;
  itinerary: { day: number; title: string; activities: string[] }[];
  inclusions: string[];
  exclusions: string[];
  pricing: { perPerson: number; group?: number };
  faqs: { q: string; a: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
};

// ─── TEMPO TRAVELLER ──────────────────────────────────────────────────────

export type TempoTravellerData = {
  city: string;
  variant: 'standard' | 'luxury' | 'maharaja' | 'urbania';
  capacity: number;
  pricePerKm: number;
  popularRoutes: { destination: string; fare: number }[];
  faqs: { q: string; a: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
};

// ─── CAR RENTAL ───────────────────────────────────────────────────────────

export type CarRentalData = {
  city: string;
  rentalType: 'daily' | 'weekly' | 'monthly';
  packages: { duration: string; km: number; price: number; vehicle: string }[];
  faqs: { q: string; a: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
};

// ─── ACCOMMODATION ────────────────────────────────────────────────────────

export type AccommodationData = {
  city: string;
  accType: 'hotel' | 'homestay' | 'dharamshala' | 'dormitory' | 'guest-house';
  features: string[];
  priceRange: { min: number; max: number };
  nearbyGhats: string[];
  faqs: { q: string; a: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
};

// ─── STATIC PAGE ──────────────────────────────────────────────────────────

export type StaticPageData = {
  pageTitle: string;
  content: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
};