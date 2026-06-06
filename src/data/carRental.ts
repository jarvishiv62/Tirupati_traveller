// src/data/carRental.ts
//
// ★ Export keys MUST match allRoutes.ts dataKey pattern:
//   dataKey: 'carRental.varanasi'        → export const varanasi
//   dataKey: 'carRental.varanasiMonthly' → export const varanasiMonthly
//   dataKey: 'carRental.ayodhya'         → export const ayodhya
//   dataKey: 'carRental.ayodhyaMonthly'  → export const ayodhyaMonthly
//   dataKey: 'carRental.allahabad'       → export const allahabad
//   dataKey: 'carRental.allahabadMonthly'→ export const allahabadMonthly
//   dataKey: 'carRental.lucknow'         → export const lucknow
//
// All 7 entries confirmed from allRoutes.ts CarRentalTemplate section.
//
// TODO: FUTURE — replace with db.carRental.findMany() when Chunk 10 DB is active

export type RentalType = 'daily' | 'weekly' | 'monthly';

export interface RentalPackage {
  duration: string;     // e.g. '1 Day', '1 Week', '1 Month'
  km: number;           // km included in package
  price: number;        // sedan starting price
  vehicle: string;      // vehicle name for display
  extraKmRate: number;  // ₹/km beyond included km
}

export interface CarRentalData {
  city: string;
  citySlug: string;
  rentalType: RentalType;
  heroTagline: string;
  packages: RentalPackage[];
  availableVehicles: {
    id: string;
    name: string;
    category: string;
    dailyRate: number;     // ₹/day (8 hrs / 80 km)
    weeklyRate: number;    // ₹/week (7 days)
    monthlyRate: number;   // ₹/month (26 days)
    image: string;
  }[];
  inclusions: string[];
  faqs: { q: string; a: string }[];
  internalLinks: { label: string; href: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// VARANASI
// ─────────────────────────────────────────────────────────────────────────────

export const varanasi: CarRentalData = {
  city: 'Varanasi',
  citySlug: 'varanasi',
  rentalType: 'daily',
  heroTagline:
    'Rent a car in Varanasi with a professional driver — daily, weekly, or custom packages for pilgrimage, sightseeing, and outstation travel.',
  packages: [
    { duration: '4 Hours',  km: 40,  price: 1000, vehicle: 'Swift Dzire',  extraKmRate: 12 },
    { duration: '8 Hours',  km: 80,  price: 1800, vehicle: 'Swift Dzire',  extraKmRate: 12 },
    { duration: '12 Hours', km: 120, price: 2500, vehicle: 'Swift Dzire',  extraKmRate: 12 },
    { duration: '8 Hours',  km: 80,  price: 2500, vehicle: 'Innova Crysta', extraKmRate: 17 },
    { duration: '12 Hours', km: 120, price: 3500, vehicle: 'Innova Crysta', extraKmRate: 17 },
  ],
  availableVehicles: [
    { id: 'swift-dzire',   name: 'Swift Dzire',    category: 'Sedan (4 seats)',       dailyRate: 1800,  weeklyRate: 11000, monthlyRate: 38000, image: '/assets/images/Fleet/dzire.png' },
    { id: 'toyota-etios',  name: 'Toyota Etios',   category: 'Sedan (4 seats)',       dailyRate: 1900,  weeklyRate: 12000, monthlyRate: 40000, image: '/assets/images/Fleet/etios.png' },
    { id: 'ertiga',        name: 'Maruti Ertiga',  category: 'SUV (6 seats)',         dailyRate: 2500,  weeklyRate: 16000, monthlyRate: 55000, image: '/assets/images/Fleet/ertiga.jpg' },
    { id: 'innova-crysta', name: 'Innova Crysta',  category: 'Premium SUV (7 seats)', dailyRate: 3200,  weeklyRate: 20000, monthlyRate: 70000, image: '/assets/images/Fleet/crysta.png' },
  ],
  inclusions: [
    'Professional driver with local Varanasi knowledge',
    'Fuel charges included in package km',
    'Driver allowance included',
    'AC vehicle',
    'GPS tracking',
    'GST invoice on request',
  ],
  faqs: [
    {
      q: 'What is the car rental rate per day in Varanasi?',
      a: 'Daily car rental in Varanasi starts from ₹1,800 for a sedan (8 hrs / 80 km). Innova Crysta starts from ₹3,200/day.',
    },
    {
      q: 'Is self-drive car rental available in Varanasi?',
      a: 'We provide chauffeur-driven rentals only. All vehicles come with a professional driver.',
    },
    {
      q: 'Can I hire a car in Varanasi for multiple days?',
      a: 'Yes. We offer weekly and monthly rentals with dedicated drivers. Contact us for custom packages.',
    },
    {
      q: 'Is the car rental service available 24 hours in Varanasi?',
      a: 'Yes. We operate 24/7 including early morning pickups and late night returns.',
    },
  ],
  internalLinks: [
    { label: 'Monthly Car Rentals Varanasi',     href: '/varanasi/monthly-car-rentals-varanasi' },
    { label: 'Full Day Taxi Varanasi',           href: '/varanasi/full-day-taxi-in-varanasi' },
    { label: 'Innova on Rent Varanasi',          href: '/varanasi/innova-crysta-on-rent-in-varanasi' },
    { label: 'Varanasi Local Sightseeing',       href: '/varanasi/varanasi-local-sightseeing-cab' },
    { label: 'Tempo Traveller Varanasi',         href: '/varanasi/tempo-traveller-varanasi' },
  ],
  seo: {
    title: 'Car Rental Varanasi | Daily & Weekly Cab Hire | Tirupati Travel',
    description:
      'Book car rental in Varanasi. Daily packages from ₹1,800. Sedan, Ertiga, Innova with driver. Pilgrimage, sightseeing & outstation. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/varanasi/car-rental-varanasi',
  },
};

export const varanasiMonthly: CarRentalData = {
  city: 'Varanasi',
  citySlug: 'varanasi',
  rentalType: 'monthly',
  heroTagline:
    'Monthly car rental in Varanasi — dedicated cab with driver for your office commutes, hospital visits, and regular travel needs at fixed monthly rates.',
  packages: [
    { duration: '1 Month (26 days)', km: 2080, price: 38000, vehicle: 'Swift Dzire',   extraKmRate: 10 },
    { duration: '1 Month (26 days)', km: 2080, price: 42000, vehicle: 'Toyota Etios',  extraKmRate: 10 },
    { duration: '1 Month (26 days)', km: 2080, price: 55000, vehicle: 'Maruti Ertiga', extraKmRate: 12 },
    { duration: '1 Month (26 days)', km: 2080, price: 70000, vehicle: 'Innova Crysta', extraKmRate: 15 },
  ],
  availableVehicles: [
    { id: 'swift-dzire',   name: 'Swift Dzire',   category: 'Sedan (4 seats)',       dailyRate: 1800, weeklyRate: 11000, monthlyRate: 38000, image: '/assets/images/Fleet/dzire.png' },
    { id: 'toyota-etios',  name: 'Toyota Etios',  category: 'Sedan (4 seats)',       dailyRate: 1900, weeklyRate: 12000, monthlyRate: 42000, image: '/assets/images/Fleet/etios.png' },
    { id: 'ertiga',        name: 'Maruti Ertiga', category: 'SUV (6 seats)',         dailyRate: 2500, weeklyRate: 16000, monthlyRate: 55000, image: '/assets/images/Fleet/ertiga.jpg' },
    { id: 'innova-crysta', name: 'Innova Crysta', category: 'Premium SUV (7 seats)', dailyRate: 3200, weeklyRate: 20000, monthlyRate: 70000, image: '/assets/images/Fleet/crysta.png' },
  ],
  inclusions: [
    'Dedicated driver for the month',
    'AC vehicle with fuel included (up to package km)',
    '26 working days per month',
    'GST invoice for monthly billing',
    'Replacement vehicle if breakdown',
    'Driver in uniform',
  ],
  faqs: [
    {
      q: 'What is included in monthly car rental in Varanasi?',
      a: 'Monthly rental includes a dedicated driver, AC vehicle, fuel for up to 2,080 km (80 km/day × 26 days), and GST invoice.',
    },
    {
      q: 'Can I extend the monthly rental for additional days?',
      a: 'Yes. Additional days are charged at the daily rate. Extra km are billed at ₹10–15/km depending on vehicle.',
    },
    {
      q: 'Is the driver available on Sundays and holidays?',
      a: 'Monthly packages cover 26 working days. Sunday/holiday availability can be arranged at ₹200 extra per day.',
    },
  ],
  internalLinks: [
    { label: 'Car Rental Varanasi (Daily)',  href: '/varanasi/car-rental-varanasi' },
    { label: 'Corporate Cab Varanasi',      href: '/varanasi/corporate-cab-service-varanasi' },
    { label: 'Innova on Rent Varanasi',     href: '/varanasi/innova-crysta-on-rent-in-varanasi' },
  ],
  seo: {
    title: 'Monthly Car Rentals Varanasi | Long Term Cab Hire | Tirupati Travel',
    description:
      'Book monthly car rental in Varanasi. Dedicated driver + AC cab. Sedan from ₹38,000/month. GST invoice. Office & personal use. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/varanasi/monthly-car-rentals-varanasi',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// AYODHYA
// ─────────────────────────────────────────────────────────────────────────────

export const ayodhya: CarRentalData = {
  city: 'Ayodhya',
  citySlug: 'ayodhya',
  rentalType: 'daily',
  heroTagline:
    'Rent a car in Ayodhya with driver for pilgrimage darshan, local sightseeing, and outstation travel — flexible daily and custom packages.',
  packages: [
    { duration: '4 Hours',  km: 40,  price: 900,  vehicle: 'Swift Dzire',  extraKmRate: 11 },
    { duration: '8 Hours',  km: 80,  price: 1600, vehicle: 'Swift Dzire',  extraKmRate: 11 },
    { duration: '12 Hours', km: 120, price: 2200, vehicle: 'Swift Dzire',  extraKmRate: 11 },
    { duration: '8 Hours',  km: 80,  price: 2200, vehicle: 'Innova Crysta', extraKmRate: 16 },
    { duration: '12 Hours', km: 120, price: 3200, vehicle: 'Innova Crysta', extraKmRate: 16 },
  ],
  availableVehicles: [
    { id: 'swift-dzire',   name: 'Swift Dzire',   category: 'Sedan (4 seats)',       dailyRate: 1600, weeklyRate: 10000, monthlyRate: 35000, image: '/assets/images/Fleet/dzire.png' },
    { id: 'toyota-etios',  name: 'Toyota Etios',  category: 'Sedan (4 seats)',       dailyRate: 1700, weeklyRate: 11000, monthlyRate: 37000, image: '/assets/images/Fleet/etios.png' },
    { id: 'ertiga',        name: 'Maruti Ertiga', category: 'SUV (6 seats)',         dailyRate: 2200, weeklyRate: 14000, monthlyRate: 50000, image: '/assets/images/Fleet/ertiga.jpg' },
    { id: 'innova-crysta', name: 'Innova Crysta', category: 'Premium SUV (7 seats)', dailyRate: 2800, weeklyRate: 18000, monthlyRate: 62000, image: '/assets/images/Fleet/crysta.png' },
  ],
  inclusions: [
    'Professional driver with Ayodhya pilgrimage knowledge',
    'Fuel charges included in package km',
    'Driver allowance',
    'AC vehicle, GPS',
    'GST invoice on request',
  ],
  faqs: [
    {
      q: 'What is the car rental rate per day in Ayodhya?',
      a: 'Daily car rental in Ayodhya starts from ₹1,600 for a sedan (8 hrs / 80 km). Innova Crysta starts from ₹2,800/day.',
    },
    {
      q: 'Can I hire a car for Ram Mandir darshan in Ayodhya?',
      a: 'Yes. Our daily rental packages are ideal for full-day Ram Mandir and Ayodhya temple darshan.',
    },
  ],
  internalLinks: [
    { label: 'Monthly Car Rentals Ayodhya',   href: '/ayodhya/monthly-car-rentals-ayodhya' },
    { label: 'Ayodhya Local Sightseeing Cab', href: '/ayodhya/ayodhya-local-sightseeing-cab' },
    { label: 'Innova Cabs in Ayodhya',        href: '/ayodhya/innova-cabs-in-ayodhya' },
    { label: 'Ayodhya Tour Packages',         href: '/ayodhya/ayodhya-tour-packages' },
  ],
  seo: {
    title: 'Car Rental Ayodhya | Daily & Weekly Cab Hire | Tirupati Travel',
    description:
      'Book car rental in Ayodhya. Daily packages from ₹1,600. Sedan, Ertiga, Innova with driver. Darshan & outstation travel. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/ayodhya/car-rental-ayodhya',
  },
};

export const ayodhyaMonthly: CarRentalData = {
  city: 'Ayodhya',
  citySlug: 'ayodhya',
  rentalType: 'monthly',
  heroTagline:
    'Monthly car rental in Ayodhya — dedicated cab and driver for your regular commutes, temple visits, and business travel at affordable monthly rates.',
  packages: [
    { duration: '1 Month (26 days)', km: 2080, price: 35000, vehicle: 'Swift Dzire',   extraKmRate: 10 },
    { duration: '1 Month (26 days)', km: 2080, price: 37000, vehicle: 'Toyota Etios',  extraKmRate: 10 },
    { duration: '1 Month (26 days)', km: 2080, price: 50000, vehicle: 'Maruti Ertiga', extraKmRate: 12 },
    { duration: '1 Month (26 days)', km: 2080, price: 62000, vehicle: 'Innova Crysta', extraKmRate: 14 },
  ],
  availableVehicles: [
    { id: 'swift-dzire',   name: 'Swift Dzire',   category: 'Sedan (4 seats)',       dailyRate: 1600, weeklyRate: 10000, monthlyRate: 35000, image: '/assets/images/Fleet/dzire.png' },
    { id: 'toyota-etios',  name: 'Toyota Etios',  category: 'Sedan (4 seats)',       dailyRate: 1700, weeklyRate: 11000, monthlyRate: 37000, image: '/assets/images/Fleet/etios.png' },
    { id: 'ertiga',        name: 'Maruti Ertiga', category: 'SUV (6 seats)',         dailyRate: 2200, weeklyRate: 14000, monthlyRate: 50000, image: '/assets/images/Fleet/ertiga.jpg' },
    { id: 'innova-crysta', name: 'Innova Crysta', category: 'Premium SUV (7 seats)', dailyRate: 2800, weeklyRate: 18000, monthlyRate: 62000, image: '/assets/images/Fleet/crysta.png' },
  ],
  inclusions: [
    'Dedicated driver for the month',
    'AC vehicle with fuel included up to package km',
    '26 working days per month',
    'GST invoice for billing',
    'Replacement vehicle if breakdown',
  ],
  faqs: [
    {
      q: 'Is monthly car rental available in Ayodhya?',
      a: 'Yes. Monthly rental with dedicated driver and AC vehicle starts from ₹35,000/month for a sedan.',
    },
  ],
  internalLinks: [
    { label: 'Car Rental Ayodhya (Daily)', href: '/ayodhya/car-rental-ayodhya' },
    { label: 'Corporate Cab Ayodhya',     href: '/ayodhya/corporate-cab-service-ayodhya' },
  ],
  seo: {
    title: 'Monthly Car Rentals Ayodhya | Long Term Cab Hire | Tirupati Travel',
    description:
      'Book monthly car rental in Ayodhya. Dedicated driver + AC cab. Sedan from ₹35,000/month. GST invoice. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/ayodhya/monthly-car-rentals-ayodhya',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ALLAHABAD
// ─────────────────────────────────────────────────────────────────────────────

export const allahabad: CarRentalData = {
  city: 'Allahabad',
  citySlug: 'allahabad',
  rentalType: 'daily',
  heroTagline:
    'Rent a car in Allahabad (Prayagraj) with driver for Sangam tours, temple sightseeing, and outstation travel — daily and custom packages available.',
  packages: [
    { duration: '4 Hours',  km: 40,  price: 900,  vehicle: 'Swift Dzire',  extraKmRate: 11 },
    { duration: '8 Hours',  km: 80,  price: 1600, vehicle: 'Swift Dzire',  extraKmRate: 11 },
    { duration: '12 Hours', km: 120, price: 2200, vehicle: 'Swift Dzire',  extraKmRate: 11 },
    { duration: '8 Hours',  km: 80,  price: 2200, vehicle: 'Innova Crysta', extraKmRate: 16 },
    { duration: '12 Hours', km: 120, price: 3200, vehicle: 'Innova Crysta', extraKmRate: 16 },
  ],
  availableVehicles: [
    { id: 'swift-dzire',   name: 'Swift Dzire',   category: 'Sedan (4 seats)',       dailyRate: 1600, weeklyRate: 10000, monthlyRate: 35000, image: '/assets/images/Fleet/dzire.png' },
    { id: 'toyota-etios',  name: 'Toyota Etios',  category: 'Sedan (4 seats)',       dailyRate: 1700, weeklyRate: 11000, monthlyRate: 37000, image: '/assets/images/Fleet/etios.png' },
    { id: 'ertiga',        name: 'Maruti Ertiga', category: 'SUV (6 seats)',         dailyRate: 2200, weeklyRate: 14000, monthlyRate: 50000, image: '/assets/images/Fleet/ertiga.jpg' },
    { id: 'innova-crysta', name: 'Innova Crysta', category: 'Premium SUV (7 seats)', dailyRate: 2800, weeklyRate: 18000, monthlyRate: 62000, image: '/assets/images/Fleet/crysta.png' },
  ],
  inclusions: [
    'Professional driver with Allahabad route knowledge',
    'Fuel charges included in package km',
    'Driver allowance',
    'AC vehicle, GPS',
    'GST invoice on request',
  ],
  faqs: [
    {
      q: 'What is the car rental rate in Allahabad?',
      a: 'Daily car rental in Allahabad starts from ₹1,600 for a sedan (8 hrs / 80 km).',
    },
    {
      q: 'Is car rental available for Sangam tour in Allahabad?',
      a: 'Yes. Our 4-hour and 8-hour packages are ideal for Sangam boat ride, Hanuman Mandir, and Anand Bhavan.',
    },
    {
      q: 'Can I hire a car during Kumbh Mela in Prayagraj?',
      a: 'Yes, but book early. Demand is very high during Kumbh/Magh Mela. We recommend booking at least 3 months in advance.',
    },
  ],
  internalLinks: [
    { label: 'Monthly Car Rentals Allahabad',  href: '/allahabad/monthly-car-rentals-allahabad' },
    { label: 'Allahabad Tour Packages',        href: '/allahabad/allahabad-tour-packages' },
    { label: 'Full Day Cab in Allahabad',      href: '/allahabad/full-day-cab-in-allahabad' },
    { label: 'Allahabad to Varanasi Taxi',     href: '/allahabad/allahabad-to-varanasi-taxi' },
  ],
  seo: {
    title: 'Car Rental Allahabad Prayagraj | Daily Cab Hire | Tirupati Travel',
    description:
      'Book car rental in Allahabad (Prayagraj). Daily packages from ₹1,600. Sedan, Ertiga, Innova with driver. Sangam tours & outstation. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/allahabad/car-rental-allahabad',
  },
};

export const allahabadMonthly: CarRentalData = {
  city: 'Allahabad',
  citySlug: 'allahabad',
  rentalType: 'monthly',
  heroTagline:
    'Monthly car rental in Allahabad — dedicated cab and driver for regular office commutes, court visits, and business travel at fixed monthly rates.',
  packages: [
    { duration: '1 Month (26 days)', km: 2080, price: 35000, vehicle: 'Swift Dzire',   extraKmRate: 10 },
    { duration: '1 Month (26 days)', km: 2080, price: 37000, vehicle: 'Toyota Etios',  extraKmRate: 10 },
    { duration: '1 Month (26 days)', km: 2080, price: 50000, vehicle: 'Maruti Ertiga', extraKmRate: 12 },
    { duration: '1 Month (26 days)', km: 2080, price: 62000, vehicle: 'Innova Crysta', extraKmRate: 14 },
  ],
  availableVehicles: [
    { id: 'swift-dzire',   name: 'Swift Dzire',   category: 'Sedan (4 seats)',       dailyRate: 1600, weeklyRate: 10000, monthlyRate: 35000, image: '/assets/images/Fleet/dzire.png' },
    { id: 'toyota-etios',  name: 'Toyota Etios',  category: 'Sedan (4 seats)',       dailyRate: 1700, weeklyRate: 11000, monthlyRate: 37000, image: '/assets/images/Fleet/etios.png' },
    { id: 'ertiga',        name: 'Maruti Ertiga', category: 'SUV (6 seats)',         dailyRate: 2200, weeklyRate: 14000, monthlyRate: 50000, image: '/assets/images/Fleet/ertiga.jpg' },
    { id: 'innova-crysta', name: 'Innova Crysta', category: 'Premium SUV (7 seats)', dailyRate: 2800, weeklyRate: 18000, monthlyRate: 62000, image: '/assets/images/Fleet/crysta.png' },
  ],
  inclusions: [
    'Dedicated driver for the month',
    'AC vehicle with fuel included up to 2,080 km',
    '26 working days per month',
    'GST invoice for monthly billing',
    'Replacement vehicle if breakdown',
  ],
  faqs: [
    {
      q: 'Is monthly car rental available in Allahabad?',
      a: 'Yes. Monthly rental starts from ₹35,000/month for a sedan with dedicated driver.',
    },
    {
      q: 'Is GST invoice provided for monthly car rental?',
      a: 'Yes. We provide proper GST invoices for all monthly rental contracts.',
    },
  ],
  internalLinks: [
    { label: 'Car Rental Allahabad (Daily)', href: '/allahabad/car-rental-allahabad' },
    { label: 'Corporate Cab Allahabad',     href: '/allahabad/corporate-cab-service-allahabad' },
  ],
  seo: {
    title: 'Monthly Car Rentals Allahabad | Long Term Cab Hire | Tirupati Travel',
    description:
      'Book monthly car rental in Allahabad. Dedicated driver + AC cab. Sedan from ₹35,000/month. GST invoice. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/allahabad/monthly-car-rentals-allahabad',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// LUCKNOW
// ─────────────────────────────────────────────────────────────────────────────

export const lucknow: CarRentalData = {
  city: 'Lucknow',
  citySlug: 'lucknow',
  rentalType: 'daily',
  heroTagline:
    'Rent a car in Lucknow with professional driver — daily, weekly, and monthly packages for office commutes, airport transfers, and outstation travel.',
  packages: [
    { duration: '4 Hours',  km: 40,  price: 1000, vehicle: 'Swift Dzire',  extraKmRate: 12 },
    { duration: '8 Hours',  km: 80,  price: 1800, vehicle: 'Swift Dzire',  extraKmRate: 12 },
    { duration: '12 Hours', km: 120, price: 2500, vehicle: 'Swift Dzire',  extraKmRate: 12 },
    { duration: '8 Hours',  km: 80,  price: 2500, vehicle: 'Innova Crysta', extraKmRate: 17 },
    { duration: '12 Hours', km: 120, price: 3500, vehicle: 'Innova Crysta', extraKmRate: 17 },
  ],
  availableVehicles: [
    { id: 'swift-dzire',   name: 'Swift Dzire',   category: 'Sedan (4 seats)',       dailyRate: 1800, weeklyRate: 11000, monthlyRate: 38000, image: '/assets/images/Fleet/dzire.png' },
    { id: 'toyota-etios',  name: 'Toyota Etios',  category: 'Sedan (4 seats)',       dailyRate: 1900, weeklyRate: 12000, monthlyRate: 40000, image: '/assets/images/Fleet/etios.png' },
    { id: 'ertiga',        name: 'Maruti Ertiga', category: 'SUV (6 seats)',         dailyRate: 2500, weeklyRate: 16000, monthlyRate: 55000, image: '/assets/images/Fleet/ertiga.jpg' },
    { id: 'innova-crysta', name: 'Innova Crysta', category: 'Premium SUV (7 seats)', dailyRate: 3200, weeklyRate: 20000, monthlyRate: 70000, image: '/assets/images/Fleet/crysta.png' },
  ],
  inclusions: [
    'Professional driver with Lucknow city knowledge',
    'Fuel charges included in package km',
    'Driver allowance',
    'AC vehicle, GPS tracking',
    'GST invoice on request',
  ],
  faqs: [
    {
      q: 'What is the car rental rate in Lucknow?',
      a: 'Daily car rental in Lucknow starts from ₹1,800 for a sedan (8 hrs / 80 km). Innova Crysta starts from ₹3,200/day.',
    },
    {
      q: 'Is monthly car rental available in Lucknow?',
      a: 'Yes. Monthly rentals with dedicated driver start from ₹38,000/month for a sedan.',
    },
    {
      q: 'Can I hire a car in Lucknow for airport transfer?',
      a: 'Yes. We provide reliable airport taxi service to Chaudhary Charan Singh (Amausi) Airport 24/7.',
    },
    {
      q: 'Is the car available for outstation from Lucknow?',
      a: 'Yes. Our rental vehicles can be used for outstation trips to Varanasi, Ayodhya, Delhi, Agra, and all major destinations.',
    },
  ],
  internalLinks: [
    { label: 'Tempo Traveller in Lucknow',    href: '/lucknow/tempo-traveller-in-lucknow' },
    { label: 'Innova Cab in Lucknow',         href: '/lucknow/innova-cab-in-lucknow' },
    { label: 'Outstation Cab in Lucknow',     href: '/lucknow/outstation-cab-in-lucknow' },
    { label: 'Airport Taxi in Lucknow',       href: '/lucknow/airport-taxi-in-lucknow' },
  ],
  seo: {
    title: 'Car Rental in Lucknow | Daily & Monthly Cab Hire | Tirupati Travel',
    description:
      'Book car rental in Lucknow. Daily packages from ₹1,800. Sedan, Ertiga, Innova with driver. Airport, outstation & local. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/lucknow/car-rental-in-lucknow',
  },
};
