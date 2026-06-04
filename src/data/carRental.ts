// src/data/carRental.ts
// Car rental data (daily/weekly/monthly, all cities)
// Full data populated in Chunk 7

export type CarRentalData = {
  city: string;
  rentalType: 'daily' | 'weekly' | 'monthly';
  packages: { duration: string; km: number; price: number; vehicle: string }[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; canonical: string };
};

const BASE = 'https://tirupatitravel.in';
const defaultFaqs = (city: string) => [
  { q: `How much does car rental cost in ${city}?`, a: `Call 8726124680 for the latest car rental rates in ${city}.` },
  { q: 'What documents are required?', a: 'Valid ID proof and address proof are required for car rental.' },
  { q: 'Is the driver included?', a: 'Yes, all our car rentals include a professional chauffeur driver.' },
  { q: 'Is fuel included?', a: 'Fuel is included up to the package limit. Extra km charged at ₹10.50-₹11/km.' },
  { q: 'How do I book?', a: 'Call 8726124680 or WhatsApp +91 8726124680.' },
];

export const varanasi: CarRentalData = {
  city: 'Varanasi', rentalType: 'daily',
  packages: [
    { duration: '8 Hrs / 80 km', km: 80, price: 1800, vehicle: 'Sedan' },
    { duration: '12 Hrs / 120 km', km: 120, price: 2400, vehicle: 'Sedan' },
    { duration: '8 Hrs / 80 km', km: 80, price: 2800, vehicle: 'Innova' },
  ],
  faqs: defaultFaqs('Varanasi'),
  seo: { title: 'Car Rental Varanasi | Self Drive & Chauffeur | Tirupati Travel', description: 'Book car rental in Varanasi. Daily, weekly & monthly packages. AC cabs. Call 8726124680.', canonical: `${BASE}/varanasi/car-rental-varanasi` },
};

export const varanasiMonthly: CarRentalData = {
  city: 'Varanasi', rentalType: 'monthly',
  packages: [
    { duration: '30 Days / 2500 km', km: 2500, price: 28000, vehicle: 'Sedan' },
    { duration: '30 Days / 3000 km', km: 3000, price: 32000, vehicle: 'Sedan' },
    { duration: '30 Days / 2500 km', km: 2500, price: 38000, vehicle: 'Innova' },
  ],
  faqs: defaultFaqs('Varanasi'),
  seo: { title: 'Monthly Car Rentals Varanasi | Long Term Cab | Tirupati Travel', description: 'Book monthly car rental in Varanasi. Best rates for long-term cab hire. Call 8726124680.', canonical: `${BASE}/varanasi/monthly-car-rentals-varanasi` },
};

export const ayodhya: CarRentalData = {
  city: 'Ayodhya', rentalType: 'daily',
  packages: [
    { duration: '8 Hrs / 80 km', km: 80, price: 1800, vehicle: 'Sedan' },
    { duration: '8 Hrs / 80 km', km: 80, price: 2800, vehicle: 'Innova' },
  ],
  faqs: defaultFaqs('Ayodhya'),
  seo: { title: 'Car Rental Ayodhya | Daily & Monthly Cab | Tirupati Travel', description: 'Book car rental in Ayodhya. Daily, weekly & monthly packages. Call 8726124680.', canonical: `${BASE}/ayodhya/car-rental-ayodhya` },
};

export const ayodhyaMonthly: CarRentalData = {
  city: 'Ayodhya', rentalType: 'monthly',
  packages: [
    { duration: '30 Days / 2500 km', km: 2500, price: 28000, vehicle: 'Sedan' },
    { duration: '30 Days / 2500 km', km: 2500, price: 38000, vehicle: 'Innova' },
  ],
  faqs: defaultFaqs('Ayodhya'),
  seo: { title: 'Monthly Car Rentals Ayodhya | Long Term Cab | Tirupati Travel', description: 'Book monthly car rental in Ayodhya. Best rates. Call 8726124680.', canonical: `${BASE}/ayodhya/monthly-car-rentals-ayodhya` },
};

export const allahabad: CarRentalData = {
  city: 'Allahabad', rentalType: 'daily',
  packages: [
    { duration: '8 Hrs / 80 km', km: 80, price: 1800, vehicle: 'Sedan' },
    { duration: '8 Hrs / 80 km', km: 80, price: 2800, vehicle: 'Innova' },
  ],
  faqs: defaultFaqs('Allahabad'),
  seo: { title: 'Car Rental Allahabad | Daily & Monthly Cab | Tirupati Travel', description: 'Book car rental in Allahabad. Daily, weekly & monthly packages. Call 8726124680.', canonical: `${BASE}/allahabad/car-rental-allahabad` },
};

export const allahabadMonthly: CarRentalData = {
  city: 'Allahabad', rentalType: 'monthly',
  packages: [
    { duration: '30 Days / 2500 km', km: 2500, price: 28000, vehicle: 'Sedan' },
  ],
  faqs: defaultFaqs('Allahabad'),
  seo: { title: 'Monthly Car Rentals Allahabad | Long Term Cab | Tirupati Travel', description: 'Book monthly car rental in Allahabad. Best rates. Call 8726124680.', canonical: `${BASE}/allahabad/monthly-car-rentals-allahabad` },
};

export const lucknow: CarRentalData = {
  city: 'Lucknow', rentalType: 'daily',
  packages: [
    { duration: '8 Hrs / 80 km', km: 80, price: 1800, vehicle: 'Sedan' },
    { duration: '8 Hrs / 80 km', km: 80, price: 2800, vehicle: 'Innova' },
  ],
  faqs: defaultFaqs('Lucknow'),
  seo: { title: 'Car Rental in Lucknow | Daily & Monthly Cab | Tirupati Travel', description: 'Book car rental in Lucknow. Daily, weekly & monthly packages. Call 8726124680.', canonical: `${BASE}/lucknow/car-rental-in-lucknow` },
};