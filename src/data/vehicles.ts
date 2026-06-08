// src/data/vehicles.ts
// All vehicle page data — all cities
// Full data populated in Chunk 4

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
  seo: { title: string; description: string; canonical: string };
};

const BASE = 'https://tirupatitravel.in';

const defaultFaqs = (vehicle: string, city: string) => [
  { q: `What is the price of ${vehicle} per km in ${city}?`, a: `Call 8726124680 for the latest per-km rates for ${vehicle} in ${city}.` },
  { q: `Is ${vehicle} air-conditioned?`, a: `Yes, all our ${vehicle} cabs are fully air-conditioned.` },
  { q: `How many people can travel in ${vehicle}?`, a: `Please call 8726124680 for seating capacity details.` },
  { q: `Can I book ${vehicle} for outstation travel from ${city}?`, a: `Yes, ${vehicle} is available for outstation, local, and airport transfers from ${city}.` },
  { q: `How do I book ${vehicle} in ${city}?`, a: `Call 8726124680 or WhatsApp +91 8726124680 to book instantly.` },
];

// ── INNOVA ────────────────────────────────────────────────────────────────
export const varanasiInnova: VehicleData = {
  vehicleName: 'Toyota Innova Crysta',
  city: 'Varanasi',
  slug: 'innova-crysta-on-rent-in-varanasi',
  specs: { seats: 7, ac: true, luggage: '3 bags', fuelType: 'Diesel' },
  pricePerKm: 11,
  basePrice: 1500,
  images: ['/assets/images/Fleet/innova.png'],
  features: ['7-Seater AC Cab', 'GPS Tracking', 'Pushback Seats', 'Music System', 'Professional Driver', 'Toll Inclusive', 'First Aid Kit', '24/7 Support'],
  faqs: [
    { q: 'What is the price of Innova Crysta per km in Varanasi?', a: 'Innova Crysta is available at ₹11/km from Varanasi. Call 8726124680 for package rates.' },
    { q: 'How many people can travel in Innova Crysta?', a: 'Innova Crysta seats 7 passengers comfortably with luggage.' },
    { q: 'Is Innova Crysta available for outstation from Varanasi?', a: 'Yes, available for Ayodhya, Gaya, Patna, Lucknow and all outstation routes.' },
    { q: 'Is the Innova Crysta AC?', a: 'Yes, fully air-conditioned with climate control.' },
    { q: 'Can I book Innova Crysta for airport transfer?', a: 'Yes, we provide airport pickup and drop in Innova Crysta.' },
  ],
  seo: {
    title: 'Innova Crysta on Rent in Varanasi | Toyota Innova Cab | Tirupati Travel',
    description: 'Book Toyota Innova Crysta on rent in Varanasi. 7-seater AC cab, ₹11/km. Airport, outstation, local. Call 8726124680.',
    canonical: `${BASE}/varanasi/innova-crysta-on-rent-in-varanasi`,
  },
};

export const ayodhyaInnova: VehicleData = {
  vehicleName: 'Toyota Innova',
  city: 'Ayodhya',
  slug: 'innova-cabs-in-ayodhya',
  specs: { seats: 7, ac: true, luggage: '3 bags', fuelType: 'Diesel' },
  pricePerKm: 11,
  basePrice: 1500,
  images: ['/assets/images/Fleet/innova.png'],
  features: ['7-Seater AC Cab', 'GPS Tracking', 'Pushback Seats', 'Music System', 'Professional Driver', '24/7 Support'],
  faqs: defaultFaqs('Innova', 'Ayodhya'),
  seo: {
    title: 'Innova Cabs in Ayodhya | Toyota Innova Hire | Tirupati Travel',
    description: 'Book Innova cabs in Ayodhya. 7-seater AC cab for pilgrimage & outstation. Call 8726124680.',
    canonical: `${BASE}/ayodhya/innova-cabs-in-ayodhya`,
  },
};

export const allahabadInnova: VehicleData = {
  vehicleName: 'Toyota Innova',
  city: 'Allahabad',
  slug: 'innova-cabs-in-allahabad',
  specs: { seats: 7, ac: true, luggage: '3 bags', fuelType: 'Diesel' },
  pricePerKm: 11,
  basePrice: 1500,
  images: ['/assets/images/Fleet/innova.png'],
  features: ['7-Seater AC Cab', 'GPS Tracking', 'Pushback Seats', 'Music System', 'Professional Driver', '24/7 Support'],
  faqs: defaultFaqs('Innova', 'Allahabad'),
  seo: {
    title: 'Innova Cabs in Allahabad | Toyota Innova Hire | Tirupati Travel',
    description: 'Book Innova cabs in Allahabad/Prayagraj. 7-seater AC cab. Call 8726124680.',
    canonical: `${BASE}/allahabad/innova-cabs-in-allahabad`,
  },
};

export const lucknowInnova: VehicleData = {
  vehicleName: 'Toyota Innova',
  city: 'Lucknow',
  slug: 'innova-cab-in-lucknow',
  specs: { seats: 7, ac: true, luggage: '3 bags', fuelType: 'Diesel' },
  pricePerKm: 11,
  basePrice: 1500,
  images: ['/assets/images/Fleet/innova.png'],
  features: ['7-Seater AC Cab', 'GPS Tracking', 'Pushback Seats', 'Music System', 'Professional Driver', '24/7 Support'],
  faqs: defaultFaqs('Innova', 'Lucknow'),
  seo: {
    title: 'Innova Cab in Lucknow | Toyota Innova Hire | Tirupati Travel',
    description: 'Book Innova cab in Lucknow. 7-seater AC cab for airport & outstation. Call 8726124680.',
    canonical: `${BASE}/lucknow/innova-cab-in-lucknow`,
  },
};

// ── ERTIGA ────────────────────────────────────────────────────────────────
export const varanasiErtiga: VehicleData = {
  vehicleName: 'Maruti Ertiga',
  city: 'Varanasi',
  slug: 'ertiga-car-on-rent-in-varanasi',
  specs: { seats: 6, ac: true, luggage: '2 bags', fuelType: 'Petrol/CNG' },
  pricePerKm: 11,
  basePrice: 1200,
  images: ['/assets/images/Fleet/ertiga.png'],
  features: ['6-Seater AC Cab', 'GPS Tracking', 'Music System', 'Professional Driver', '24/7 Support', 'Spacious Boot'],
  faqs: [
    { q: 'What is the price of Ertiga per km in Varanasi?', a: 'Ertiga is available at ₹11/km from Varanasi. Call 8726124680.' },
    { q: 'How many people can travel in Ertiga?', a: 'Ertiga seats 6 passengers comfortably.' },
    { q: 'Is Ertiga suitable for outstation travel?', a: 'Yes, Ertiga is perfect for family outstation trips.' },
    { q: 'Is it AC?', a: 'Yes, fully air-conditioned.' },
    { q: 'How do I book Ertiga in Varanasi?', a: 'Call 8726124680 or WhatsApp to book instantly.' },
  ],
  seo: {
    title: 'Ertiga Car on Rent in Varanasi | Maruti Ertiga Cab | Tirupati Travel',
    description: 'Book Ertiga car on rent in Varanasi. 6-seater AC cab, ₹11/km. Outstation & local. Call 8726124680.',
    canonical: `${BASE}/varanasi/ertiga-car-on-rent-in-varanasi`,
  },
};

export const ayodhyaErtiga: VehicleData = {
  vehicleName: 'Maruti Ertiga',
  city: 'Ayodhya',
  slug: 'ertiga-cab-on-rent-in-ayodhya',
  specs: { seats: 6, ac: true, luggage: '2 bags', fuelType: 'Petrol/CNG' },
  pricePerKm: 11,
  basePrice: 1200,
  images: ['/assets/images/Fleet/ertiga.png'],
  features: ['6-Seater AC Cab', 'GPS Tracking', 'Music System', 'Professional Driver', '24/7 Support'],
  faqs: defaultFaqs('Ertiga', 'Ayodhya'),
  seo: {
    title: 'Ertiga Cab on Rent in Ayodhya | Maruti Ertiga Hire | Tirupati Travel',
    description: 'Book Ertiga cab on rent in Ayodhya. 6-seater AC cab. Call 8726124680.',
    canonical: `${BASE}/ayodhya/ertiga-cab-on-rent-in-ayodhya`,
  },
};

export const allahabadErtiga: VehicleData = {
  vehicleName: 'Maruti Ertiga',
  city: 'Allahabad',
  slug: 'ertiga-cab-on-rent-in-allahabad',
  specs: { seats: 6, ac: true, luggage: '2 bags', fuelType: 'Petrol/CNG' },
  pricePerKm: 11,
  basePrice: 1200,
  images: ['/assets/images/Fleet/ertiga.png'],
  features: ['6-Seater AC Cab', 'GPS Tracking', 'Music System', 'Professional Driver', '24/7 Support'],
  faqs: defaultFaqs('Ertiga', 'Allahabad'),
  seo: {
    title: 'Ertiga Cab on Rent in Allahabad | Maruti Ertiga Hire | Tirupati Travel',
    description: 'Book Ertiga cab on rent in Allahabad. 6-seater AC cab. Call 8726124680.',
    canonical: `${BASE}/allahabad/ertiga-cab-on-rent-in-allahabad`,
  },
};

// ── SWIFT DZIRE ───────────────────────────────────────────────────────────
export const varanasiDzire: VehicleData = {
  vehicleName: 'Maruti Swift Dzire',
  city: 'Varanasi',
  slug: 'swift-dzire-taxi-service-in-varanasi',
  specs: { seats: 4, ac: true, luggage: '2 bags', fuelType: 'Petrol/CNG' },
  pricePerKm: 10.50,
  basePrice: 1000,
  images: ['/assets/images/Fleet/dzire.png'],
  features: ['4-Seater AC Sedan', 'GPS Tracking', 'Music System', 'Professional Driver', 'Most Popular', '24/7 Support'],
  faqs: [
    { q: 'What is the Swift Dzire fare per km in Varanasi?', a: 'Swift Dzire is available at ₹10.50/km from Varanasi.' },
    { q: 'Is Swift Dzire good for outstation travel?', a: 'Yes! Swift Dzire is our most popular cab for outstation trips.' },
    { q: 'How many people can travel in Swift Dzire?', a: '4 passengers with 2 medium bags.' },
    { q: 'Is Swift Dzire AC?', a: 'Yes, fully air-conditioned.' },
    { q: 'How do I book Swift Dzire?', a: 'Call 8726124680 or WhatsApp +91 8726124680.' },
  ],
  seo: {
    title: 'Swift Dzire Taxi Service in Varanasi | Sedan Cab | Tirupati Travel',
    description: 'Book Swift Dzire taxi in Varanasi. 4-seater AC sedan, ₹10.50/km. Best for outstation. Call 8726124680.',
    canonical: `${BASE}/varanasi-dzire-taxi-service-in-varanasi`,
  },
};

export const ayodhyaDzire: VehicleData = {
  vehicleName: 'Maruti Swift Dzire',
  city: 'Ayodhya',
  slug: 'swift-dzire-cab-in-ayodhya',
  specs: { seats: 4, ac: true, luggage: '2 bags', fuelType: 'Petrol/CNG' },
  pricePerKm: 10.50,
  basePrice: 1000,
  images: ['/assets/images/Fleet/dzire.png'],
  features: ['4-Seater AC Sedan', 'GPS Tracking', 'Music System', 'Professional Driver', '24/7 Support'],
  faqs: defaultFaqs('Swift Dzire', 'Ayodhya'),
  seo: {
    title: 'Swift Dzire Cab in Ayodhya | Sedan Taxi | Tirupati Travel',
    description: 'Book Swift Dzire cab in Ayodhya. 4-seater AC sedan. Call 8726124680.',
    canonical: `${BASE}/ayodhya-dzire-cab-in-ayodhya`,
  },
};

export const allahabadDzire: VehicleData = {
  vehicleName: 'Maruti Swift Dzire',
  city: 'Allahabad',
  slug: 'swift-dzire-cab-in-allahabad',
  specs: { seats: 4, ac: true, luggage: '2 bags', fuelType: 'Petrol/CNG' },
  pricePerKm: 10.50,
  basePrice: 1000,
  images: ['/assets/images/Fleet/dzire.png'],
  features: ['4-Seater AC Sedan', 'GPS Tracking', 'Music System', 'Professional Driver', '24/7 Support'],
  faqs: defaultFaqs('Swift Dzire', 'Allahabad'),
  seo: {
    title: 'Swift Dzire Cab in Allahabad | Sedan Taxi | Tirupati Travel',
    description: 'Book Swift Dzire cab in Allahabad. 4-seater AC sedan. Call 8726124680.',
    canonical: `${BASE}/allahabad-dzire-cab-in-allahabad`,
  },
};

// ── SEDAN ─────────────────────────────────────────────────────────────────
export const varanasiSedan: VehicleData = {
  vehicleName: 'Sedan Cab',
  city: 'Varanasi',
  slug: 'sedan-car-in-varanasi',
  specs: { seats: 4, ac: true, luggage: '2 bags', fuelType: 'Petrol/CNG' },
  pricePerKm: 10.50,
  basePrice: 1000,
  images: ['/assets/images/Fleet/dzire.png'],
  features: ['4-Seater AC Sedan', 'GPS Tracking', 'Music System', 'Professional Driver', '24/7 Support'],
  faqs: defaultFaqs('Sedan', 'Varanasi'),
  seo: {
    title: 'Sedan Car in Varanasi | AC Taxi Service | Tirupati Travel',
    description: 'Book sedan car in Varanasi. Comfortable AC cab for outstation & local travel. Call 8726124680.',
    canonical: `${BASE}/varanasi/sedan-car-in-varanasi`,
  },
};

export const ayodhyaSedan: VehicleData = {
  vehicleName: 'Sedan Cab',
  city: 'Ayodhya',
  slug: 'sedan-cab-in-ayodhya',
  specs: { seats: 4, ac: true, luggage: '2 bags', fuelType: 'Petrol/CNG' },
  pricePerKm: 10.50,
  basePrice: 1000,
  images: ['/assets/images/Fleet/dzire.png'],
  features: ['4-Seater AC Sedan', 'GPS Tracking', 'Music System', 'Professional Driver', '24/7 Support'],
  faqs: defaultFaqs('Sedan', 'Ayodhya'),
  seo: {
    title: 'Sedan Cab in Ayodhya | AC Taxi Service | Tirupati Travel',
    description: 'Book sedan cab in Ayodhya. Comfortable AC cab. Call 8726124680.',
    canonical: `${BASE}/ayodhya/sedan-cab-in-ayodhya`,
  },
};

export const allahabadSedan: VehicleData = {
  vehicleName: 'Sedan Cab',
  city: 'Allahabad',
  slug: 'sedan-cab-in-allahabad',
  specs: { seats: 4, ac: true, luggage: '2 bags', fuelType: 'Petrol/CNG' },
  pricePerKm: 10.50,
  basePrice: 1000,
  images: ['/assets/images/Fleet/dzire.png'],
  features: ['4-Seater AC Sedan', 'GPS Tracking', 'Music System', 'Professional Driver', '24/7 Support'],
  faqs: defaultFaqs('Sedan', 'Allahabad'),
  seo: {
    title: 'Sedan Cab in Allahabad | AC Taxi Service | Tirupati Travel',
    description: 'Book sedan cab in Allahabad. Comfortable AC cab. Call 8726124680.',
    canonical: `${BASE}/allahabad/sedan-cab-in-allahabad`,
  },
};

// ── TOYOTA ETIOS ──────────────────────────────────────────────────────────
export const varanasiEtios: VehicleData = {
  vehicleName: 'Toyota Etios',
  city: 'Varanasi',
  slug: 'toyota-etios-on-rent-in-varanasi',
  specs: { seats: 4, ac: true, luggage: '2 bags', fuelType: 'Petrol' },
  pricePerKm: 10.50,
  basePrice: 1000,
  images: ['/assets/images/Fleet/dzire.png'],
  features: ['4-Seater AC Sedan', 'GPS Tracking', 'Music System', 'Professional Driver', 'Spacious Cabin', '24/7 Support'],
  faqs: defaultFaqs('Toyota Etios', 'Varanasi'),
  seo: {
    title: 'Toyota Etios on Rent in Varanasi | Cab Booking | Tirupati Travel',
    description: 'Book Toyota Etios on rent in Varanasi. Comfortable sedan for outstation & local. Call 8726124680.',
    canonical: `${BASE}/varanasi/toyota-etios-on-rent-in-varanasi`,
  },
};

export const ayodhyaEtios: VehicleData = {
  vehicleName: 'Toyota Etios',
  city: 'Ayodhya',
  slug: 'toyota-etios-on-rent-in-ayodhya',
  specs: { seats: 4, ac: true, luggage: '2 bags', fuelType: 'Petrol' },
  pricePerKm: 10.50,
  basePrice: 1000,
  images: ['/assets/images/Fleet/dzire.png'],
  features: ['4-Seater AC Sedan', 'GPS Tracking', 'Music System', 'Professional Driver', '24/7 Support'],
  faqs: defaultFaqs('Toyota Etios', 'Ayodhya'),
  seo: {
    title: 'Toyota Etios on Rent in Ayodhya | Cab Booking | Tirupati Travel',
    description: 'Book Toyota Etios on rent in Ayodhya. Call 8726124680.',
    canonical: `${BASE}/ayodhya/toyota-etios-on-rent-in-ayodhya`,
  },
};

export const allahabadEtios: VehicleData = {
  vehicleName: 'Toyota Etios',
  city: 'Allahabad',
  slug: 'toyota-etios-on-rent-in-allahabad',
  specs: { seats: 4, ac: true, luggage: '2 bags', fuelType: 'Petrol' },
  pricePerKm: 10.50,
  basePrice: 1000,
  images: ['/assets/images/Fleet/dzire.png'],
  features: ['4-Seater AC Sedan', 'GPS Tracking', 'Music System', 'Professional Driver', '24/7 Support'],
  faqs: defaultFaqs('Toyota Etios', 'Allahabad'),
  seo: {
    title: 'Toyota Etios on Rent in Allahabad | Cab Booking | Tirupati Travel',
    description: 'Book Toyota Etios on rent in Allahabad. Call 8726124680.',
    canonical: `${BASE}/allahabad/toyota-etios-on-rent-in-allahabad`,
  },
};

// ── HELPERS ───────────────────────────────────────────────────────────────
export function getVehiclesByCity(city: string): VehicleData[] {
  const all = [
    varanasiInnova, ayodhyaInnova, allahabadInnova, lucknowInnova,
    varanasiErtiga, ayodhyaErtiga, allahabadErtiga,
    varanasiDzire, ayodhyaDzire, allahabadDzire,
    varanasiSedan, ayodhyaSedan, allahabadSedan,
    varanasiEtios, ayodhyaEtios, allahabadEtios,
  ];
  return all.filter(v => v.city.toLowerCase() === city.toLowerCase());
}

export function getVehicleById(slug: string): VehicleData | undefined {
  const all = [
    varanasiInnova, ayodhyaInnova, allahabadInnova, lucknowInnova,
    varanasiErtiga, ayodhyaErtiga, allahabadErtiga,
    varanasiDzire, ayodhyaDzire, allahabadDzire,
    varanasiSedan, ayodhyaSedan, allahabadSedan,
    varanasiEtios, ayodhyaEtios, allahabadEtios,
  ];
  return all.find(v => v.slug === slug);
}