// src/data/tempoTraveller.ts
// Tempo traveller service data — all cities
// Full data populated in Chunk 7

export type TempoTravellerData = {
  city: string;
  variant: 'standard' | 'luxury' | 'maharaja' | 'urbania';
  capacity: number;
  pricePerKm: number;
  popularRoutes: { destination: string; fare: number }[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; canonical: string };
};

const BASE = 'https://tirupatitravel.in';

const defaultFaqs = (variant: string, city: string) => [
  { q: `What is the price of ${variant} tempo traveller in ${city}?`, a: `Call 8726124680 for the latest rates for ${variant} tempo traveller in ${city}.` },
  { q: 'How many people can travel in a tempo traveller?', a: 'Standard: 12 seats, Luxury: 14 seats, Maharaja/Urbania: 17 seats.' },
  { q: 'Is tempo traveller AC?', a: 'Yes, all tempo travellers are fully air-conditioned.' },
  { q: 'Is it available for outstation?', a: 'Yes, available for all outstation routes from Varanasi, Ayodhya, Lucknow & Allahabad.' },
  { q: 'How do I book?', a: 'Call 8726124680 or WhatsApp +91 8726124680.' },
];

export const varanasi: TempoTravellerData = {
  city: 'Varanasi', variant: 'standard', capacity: 12, pricePerKm: 22,
  popularRoutes: [
    { destination: 'Ayodhya', fare: 4400 },
    { destination: 'Allahabad', fare: 2750 },
    { destination: 'Gaya', fare: 5280 },
    { destination: 'Lucknow', fare: 7040 },
    { destination: 'Patna', fare: 6380 },
  ],
  faqs: defaultFaqs('standard', 'Varanasi'),
  seo: { title: 'Tempo Traveller in Varanasi | 12-17 Seater | Tirupati Travel', description: 'Book tempo traveller in Varanasi. 12-17 seater AC bus for group travel & outstation. Call 8726124680.', canonical: `${BASE}/varanasi/tempo-traveller-varanasi` },
};

export const varanasiLuxury: TempoTravellerData = {
  city: 'Varanasi', variant: 'luxury', capacity: 14, pricePerKm: 28,
  popularRoutes: [
    { destination: 'Ayodhya', fare: 5600 },
    { destination: 'Allahabad', fare: 3500 },
    { destination: 'Gaya', fare: 6720 },
    { destination: 'Lucknow', fare: 8960 },
    { destination: 'Patna', fare: 8120 },
  ],
  faqs: defaultFaqs('luxury', 'Varanasi'),
  seo: { title: 'Luxury Tempo Traveller Varanasi | Premium Group Travel | Tirupati Travel', description: 'Book luxury tempo traveller in Varanasi. Push-back seats, AC, entertainment. Call 8726124680.', canonical: `${BASE}/varanasi/luxury-tempo-traveller-varanasi` },
};

export const ayodhya: TempoTravellerData = {
  city: 'Ayodhya', variant: 'standard', capacity: 12, pricePerKm: 22,
  popularRoutes: [
    { destination: 'Varanasi', fare: 4400 },
    { destination: 'Lucknow', fare: 2420 },
    { destination: 'Allahabad', fare: 3850 },
    { destination: 'Delhi', fare: 13200 },
  ],
  faqs: defaultFaqs('standard', 'Ayodhya'),
  seo: { title: 'Tempo Traveller in Ayodhya | Group Travel Cab | Tirupati Travel', description: 'Book tempo traveller in Ayodhya for group pilgrimage. 12-17 seater AC. Call 8726124680.', canonical: `${BASE}/ayodhya/tempo-traveller-ayodhya` },
};

export const ayodhyaLuxury: TempoTravellerData = {
  city: 'Ayodhya', variant: 'luxury', capacity: 14, pricePerKm: 28,
  popularRoutes: [
    { destination: 'Varanasi', fare: 5600 },
    { destination: 'Lucknow', fare: 3080 },
    { destination: 'Delhi', fare: 16800 },
  ],
  faqs: defaultFaqs('luxury', 'Ayodhya'),
  seo: { title: 'Luxury Tempo Traveller Ayodhya | Premium Group Travel | Tirupati Travel', description: 'Book luxury tempo traveller in Ayodhya. Push-back seats, AC. Call 8726124680.', canonical: `${BASE}/ayodhya/luxury-tempo-traveller-ayodhya` },
};

export const lucknow: TempoTravellerData = {
  city: 'Lucknow', variant: 'standard', capacity: 12, pricePerKm: 22,
  popularRoutes: [
    { destination: 'Varanasi', fare: 7040 },
    { destination: 'Ayodhya', fare: 2420 },
    { destination: 'Allahabad', fare: 4400 },
    { destination: 'Delhi', fare: 11000 },
  ],
  faqs: defaultFaqs('standard', 'Lucknow'),
  seo: { title: 'Tempo Traveller in Lucknow | Group Travel Cab | Tirupati Travel', description: 'Book tempo traveller in Lucknow. 12-17 seater AC for group travel. Call 8726124680.', canonical: `${BASE}/lucknow/tempo-traveller-in-lucknow` },
};

export const lucknowMaharaja: TempoTravellerData = {
  city: 'Lucknow', variant: 'maharaja', capacity: 17, pricePerKm: 35,
  popularRoutes: [
    { destination: 'Varanasi', fare: 11200 },
    { destination: 'Ayodhya', fare: 3850 },
    { destination: 'Delhi', fare: 17500 },
  ],
  faqs: defaultFaqs('Maharaja', 'Lucknow'),
  seo: { title: 'Maharaja Tempo Traveller in Lucknow | Premium Bus | Tirupati Travel', description: 'Book Maharaja tempo traveller in Lucknow. Ultra-luxury push-back seats. Call 8726124680.', canonical: `${BASE}/lucknow/maharaja-tempo-traveller-in-lucknow` },
};

export const lucknowUrbania: TempoTravellerData = {
  city: 'Lucknow', variant: 'urbania', capacity: 17, pricePerKm: 35,
  popularRoutes: [
    { destination: 'Varanasi', fare: 11200 },
    { destination: 'Ayodhya', fare: 3850 },
    { destination: 'Delhi', fare: 17500 },
  ],
  faqs: defaultFaqs('Urbania', 'Lucknow'),
  seo: { title: 'Urbania Tempo Traveller in Lucknow | Force Urbania | Tirupati Travel', description: 'Book Force Urbania tempo traveller in Lucknow. Premium 17-seater. Call 8726124680.', canonical: `${BASE}/lucknow/urbania-tempo-traveller-in-lucknow` },
};

export const allahabadLuxury: TempoTravellerData = {
  city: 'Allahabad', variant: 'luxury', capacity: 14, pricePerKm: 28,
  popularRoutes: [
    { destination: 'Varanasi', fare: 3500 },
    { destination: 'Ayodhya', fare: 5320 },
    { destination: 'Lucknow', fare: 5600 },
  ],
  faqs: defaultFaqs('luxury', 'Allahabad'),
  seo: { title: 'Luxury Tempo Traveller Allahabad | Group Travel | Tirupati Travel', description: 'Book luxury tempo traveller in Allahabad. Push-back seats, AC. Call 8726124680.', canonical: `${BASE}/allahabad/luxury-tempo-traveller-allahabad` },
};