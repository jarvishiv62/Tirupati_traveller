// src/data/airportTaxi.ts
// Airport taxi page data
// Full data populated in Chunk 8

export type AirportTaxiData = {
  airport: string;
  iataCode: string;
  city: string;
  terminals: string[];
  fare: { sedan: number; innova: number; ertiga: number };
  inclusions: string[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; canonical: string };
};

const BASE = 'https://tirupatitravel.in';

export const varanasi: AirportTaxiData = {
  airport: 'Lal Bahadur Shastri International Airport',
  iataCode: 'VNS',
  city: 'Varanasi',
  terminals: ['Terminal 1 (Domestic)', 'Terminal 2 (International)'],
  fare: { sedan: 700, innova: 1050, ertiga: 875 },
  inclusions: ['AC Cab', 'All tolls included', 'Meet & greet', 'Flight tracking', 'Professional driver'],
  faqs: [
    { q: 'How much does Varanasi airport taxi cost?', a: 'Sedan from ₹700, Innova from ₹1050, Ertiga from ₹875 to city center.' },
    { q: 'How far is Varanasi airport from city?', a: 'Babatpur Airport (VNS) is 26 km from Varanasi city center, ~45 min.' },
    { q: 'Do you track flight arrivals?', a: 'Yes, we track flight arrivals and wait for delayed flights.' },
    { q: 'Can I pre-book airport taxi?', a: 'Yes, advance booking is recommended. Call 8726124680.' },
    { q: 'Do you cover all terminals?', a: 'Yes, we cover both domestic and international terminals.' },
  ],
  seo: {
    title: 'Varanasi Airport Taxi | LBS Airport Cab | Tirupati Travel',
    description: 'Book Varanasi airport taxi. Lal Bahadur Shastri Airport (VNS) pickup & drop. Call 8726124680.',
    canonical: `${BASE}/varanasi/varanasi-airport-taxi`,
  },
};

export const lucknow: AirportTaxiData = {
  airport: 'Chaudhary Charan Singh International Airport',
  iataCode: 'LKO',
  city: 'Lucknow',
  terminals: ['Terminal 1', 'Terminal 2'],
  fare: { sedan: 800, innova: 1200, ertiga: 1000 },
  inclusions: ['AC Cab', 'All tolls included', 'Meet & greet', 'Flight tracking'],
  faqs: [
    { q: 'How much does Lucknow airport taxi cost?', a: 'Sedan from ₹800, Innova from ₹1200, Ertiga from ₹1000.' },
    { q: 'How far is Lucknow airport from city?', a: 'Amausi Airport is ~14 km from Lucknow city center.' },
    { q: 'Do you track flight arrivals?', a: 'Yes, we track all flights and wait for delayed arrivals.' },
    { q: 'Is 24/7 service available?', a: 'Yes, 24/7 airport taxi service in Lucknow.' },
    { q: 'How do I book?', a: 'Call 8726124680 or WhatsApp +91 8726124680.' },
  ],
  seo: {
    title: 'Airport Taxi in Lucknow | Chaudhary Charan Singh Airport | Tirupati Travel',
    description: 'Book airport taxi in Lucknow. Pickup & drop from CCS Airport. Call 8726124680.',
    canonical: `${BASE}/lucknow/airport-taxi-in-lucknow`,
  },
};

export const ayodhya: AirportTaxiData = {
  airport: 'Maharishi Valmiki International Airport',
  iataCode: 'AYJ',
  city: 'Ayodhya',
  terminals: ['Terminal 1'],
  fare: { sedan: 600, innova: 900, ertiga: 750 },
  inclusions: ['AC Cab', 'All tolls included', 'Meet & greet', 'Flight tracking'],
  faqs: [
    { q: 'How much does Ayodhya airport taxi cost?', a: 'Sedan from ₹600, Innova from ₹900, Ertiga from ₹750.' },
    { q: 'How far is Ayodhya airport from Ram Mandir?', a: 'The airport is approximately 8 km from Ram Mandir.' },
    { q: 'Do you track flight arrivals?', a: 'Yes, we track all flights and wait for delayed arrivals.' },
    { q: 'Is 24/7 service available?', a: 'Yes, 24/7 airport taxi service in Ayodhya.' },
    { q: 'How do I book?', a: 'Call 8726124680 or WhatsApp +91 8726124680.' },
  ],
  seo: {
    title: 'Ayodhya Airport Taxi | Maharishi Valmiki Airport | Tirupati Travel',
    description: 'Book Ayodhya airport taxi. Maharishi Valmiki International Airport pickup & drop. Call 8726124680.',
    canonical: `${BASE}/ayodhya/ayodhya-airport-taxi`,
  },
};