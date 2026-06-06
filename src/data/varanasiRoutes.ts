// src/data/varanasiRoutes.ts
// All outstation routes FROM Varanasi (68 routes)
// Full data populated in Chunk 6

export type OutstationRouteData = {
  origin: string;
  destination: string;
  distance: string;
  duration: string;
  fare: {
    sedan: number;
    innova: number;
    ertiga: number;
    crysta?: number;
    tempo?: number;
  };
  highlights: string[];
  placesEnRoute: string[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; canonical: string };
};

const BASE = 'https://tirupatitravel.in';

const defaultFaqs = (origin: string, dest: string) => [
  {
    q: `How much does a taxi from ${origin} to ${dest} cost?`,
    a: `A sedan taxi from ${origin} to ${dest} starts at ₹10.50/km. For exact fare, call 8726124680.`,
  },
  {
    q: `How long does it take to travel from ${origin} to ${dest}?`,
    a: `Travel time varies by route. Call us at 8726124680 for the most accurate estimate.`,
  },
  {
    q: 'Do you provide AC cabs?',
    a: 'Yes, all our cabs are fully air-conditioned — Sedan, Innova Crysta & Ertiga.',
  },
  {
    q: 'Is the driver experienced for this route?',
    a: 'Yes, all our drivers are experienced and well-familiar with outstation routes from Varanasi.',
  },
  {
    q: 'Can I book a one-way taxi?',
    a: 'Yes, we offer both one-way and round-trip taxi bookings from Varanasi.',
  },
];

export const varanasiToAllahabad: OutstationRouteData = {
  origin: 'Varanasi',
  destination: 'Allahabad',
  distance: '125 km',
  duration: '3 hrs',
  fare: { sedan: 2500, innova: 3800, ertiga: 3200 },
  highlights: ['NH-19 route', 'Toll-free for passengers', 'Scenic highway'],
  placesEnRoute: ['Mirzapur', 'Vindhyachal'],
  faqs: defaultFaqs('Varanasi', 'Allahabad'),
  seo: {
    title: 'Varanasi to Allahabad Taxi | Cab Booking Online | Tirupati Travel',
    description: 'Book Varanasi to Allahabad taxi. 125 km, ~3 hrs. Sedan ₹2500, Innova ₹3800. Call 8726124680.',
    canonical: `${BASE}/varanasi/varanasi-to-allahabad-taxi`,
  },
};

export const varanasiToAmbikapur: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Ambikapur',
  distance: '480 km', duration: '9 hrs',
  fare: { sedan: 7200, innova: 10500, ertiga: 8800 },
  highlights: ['NH-43 route', 'Professional drivers', 'AC cab'],
  placesEnRoute: ['Allahabad', 'Rewa'],
  faqs: defaultFaqs('Varanasi', 'Ambikapur'),
  seo: { title: 'Varanasi to Ambikapur Taxi', description: 'Book Varanasi to Ambikapur taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-ambikapur-taxi` },
};

export const varanasiToAmethi: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Amethi',
  distance: '225 km', duration: '4.5 hrs',
  fare: { sedan: 3375, innova: 4950, ertiga: 4180 },
  highlights: ['NH-27 route', 'AC cab', 'Professional driver'],
  placesEnRoute: ['Jaunpur', 'Sultanpur'],
  faqs: defaultFaqs('Varanasi', 'Amethi'),
  seo: { title: 'Varanasi to Amethi Taxi', description: 'Book Varanasi to Amethi taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-amethi-taxi` },
};

export const varanasiToAnpara: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Anpara',
  distance: '155 km', duration: '3.5 hrs',
  fare: { sedan: 2325, innova: 3410, ertiga: 2870 },
  highlights: ['NH-39 route', 'AC cab', 'Professional driver'],
  placesEnRoute: ['Robertsganj', 'Sonbhadra'],
  faqs: defaultFaqs('Varanasi', 'Anpara'),
  seo: { title: 'Varanasi to Anpara Taxi', description: 'Book Varanasi to Anpara taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-anpara-taxi` },
};

export const varanasiToArrah: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Arrah',
  distance: '115 km', duration: '2.5 hrs',
  fare: { sedan: 1725, innova: 2530, ertiga: 2128 },
  highlights: ['NH-19 route', 'Bihar border', 'AC cab'],
  placesEnRoute: ['Buxur'],
  faqs: defaultFaqs('Varanasi', 'Arrah'),
  seo: { title: 'Varanasi to Arrah Taxi', description: 'Book Varanasi to Arrah taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-arrah-taxi` },
};

export const varanasiToAyodhya: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Ayodhya',
  distance: '200 km', duration: '4 hrs',
  fare: { sedan: 3000, innova: 4500, ertiga: 3800 },
  highlights: ['NH-27 route', 'Ram Mandir darshan', 'Smooth highway', 'Clean cabs'],
  placesEnRoute: ['Jaunpur', 'Sultanpur', 'Faizabad'],
  faqs: [
    { q: 'How much does a taxi from Varanasi to Ayodhya cost?', a: 'Sedan starts at ₹3000, Innova at ₹4500, Ertiga at ₹3800 one-way.' },
    { q: 'How long does the Varanasi to Ayodhya taxi take?', a: 'Approximately 4 hours via NH-27.' },
    { q: 'Can I visit Ram Mandir on this trip?', a: 'Yes! We can plan your trip to include Ram Mandir darshan and all Ayodhya temples.' },
    { q: 'Do you provide pickup from hotels in Varanasi?', a: 'Yes, we provide doorstep pickup from any hotel or location in Varanasi.' },
    { q: 'Is the cab AC?', a: 'Yes, all cabs are fully air-conditioned.' },
  ],
  seo: {
    title: 'Varanasi to Ayodhya Taxi | Cab Booking Online | Tirupati Travel',
    description: 'Book Varanasi to Ayodhya taxi. 200 km, ~4 hrs. Sedan ₹3000, Innova ₹4500. Call 8726124680.',
    canonical: `${BASE}/varanasi/varanasi-to-ayodhya-taxi`,
  },
};

export const varanasiToAzamgarh: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Azamgarh',
  distance: '100 km', duration: '2.5 hrs',
  fare: { sedan: 1500, innova: 2200, ertiga: 1850 },
  highlights: ['NH-27 route', 'AC cab', 'Professional driver'],
  placesEnRoute: ['Mau road'],
  faqs: defaultFaqs('Varanasi', 'Azamgarh'),
  seo: { title: 'Varanasi to Azamgarh Taxi', description: 'Book Varanasi to Azamgarh taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-azamgarh-taxi` },
};

export const varanasiToBabatpur: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Babatpur',
  distance: '26 km', duration: '45 min',
  fare: { sedan: 600, innova: 900, ertiga: 750 },
  highlights: ['Varanasi Airport route', 'Quick transfer', 'AC cab'],
  placesEnRoute: [],
  faqs: defaultFaqs('Varanasi', 'Babatpur'),
  seo: { title: 'Varanasi to Babatpur Taxi', description: 'Book Varanasi to Babatpur taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-babatpur-taxi` },
};

export const varanasiToBadlapur: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Badlapur',
  distance: '600 km', duration: '11 hrs',
  fare: { sedan: 9000, innova: 13200, ertiga: 11100 },
  highlights: ['Long route', 'Experienced drivers', 'AC cab'],
  placesEnRoute: ['Allahabad', 'Indore'],
  faqs: defaultFaqs('Varanasi', 'Badlapur'),
  seo: { title: 'Varanasi to Badlapur Taxi', description: 'Book Varanasi to Badlapur taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-badlapur-taxi` },
};

export const varanasiToBagodar: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Bagodar',
  distance: '210 km', duration: '4 hrs',
  fare: { sedan: 3150, innova: 4620, ertiga: 3885 },
  highlights: ['Jharkhand route', 'AC cab', 'Professional driver'],
  placesEnRoute: ['Gaya'],
  faqs: defaultFaqs('Varanasi', 'Bagodar'),
  seo: { title: 'Varanasi to Bagodar Taxi', description: 'Book Varanasi to Bagodar taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-bagodar-taxi` },
};

export const varanasiToBallia: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Ballia',
  distance: '140 km', duration: '3 hrs',
  fare: { sedan: 2100, innova: 3080, ertiga: 2590 },
  highlights: ['NH-31 route', 'AC cab'],
  placesEnRoute: ['Ghazipur'],
  faqs: defaultFaqs('Varanasi', 'Ballia'),
  seo: { title: 'Varanasi to Ballia Taxi', description: 'Book Varanasi to Ballia taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-ballia-taxi` },
};

export const varanasiToBareilly: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Bareilly',
  distance: '500 km', duration: '9 hrs',
  fare: { sedan: 7500, innova: 11000, ertiga: 9250 },
  highlights: ['NH-27 route', 'Long route AC cab', 'Experienced driver'],
  placesEnRoute: ['Lucknow', 'Shahjahanpur'],
  faqs: defaultFaqs('Varanasi', 'Bareilly'),
  seo: { title: 'Varanasi to Bareilly Taxi', description: 'Book Varanasi to Bareilly taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-bareilly-taxi` },
};

export const varanasiToBaskhari: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Baskhari',
  distance: '185 km', duration: '4 hrs',
  fare: { sedan: 2775, innova: 4070, ertiga: 3423 },
  highlights: ['UP route', 'AC cab', 'Professional driver'],
  placesEnRoute: ['Jaunpur', 'Sultanpur'],
  faqs: defaultFaqs('Varanasi', 'Baskhari'),
  seo: { title: 'Varanasi to Baskhari Taxi', description: 'Book Varanasi to Baskhari taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-baskhari-taxi` },
};

export const varanasiToBasti: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Basti',
  distance: '220 km', duration: '4.5 hrs',
  fare: { sedan: 3300, innova: 4840, ertiga: 4070 },
  highlights: ['NH-27 route', 'AC cab', 'Professional driver'],
  placesEnRoute: ['Gorakhpur route'],
  faqs: defaultFaqs('Varanasi', 'Basti'),
  seo: { title: 'Varanasi to Basti Taxi', description: 'Book Varanasi to Basti taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-basti-taxi` },
};

export const varanasiToBelha: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Belha',
  distance: '165 km', duration: '3.5 hrs',
  fare: { sedan: 2475, innova: 3630, ertiga: 3053 },
  highlights: ['UP route', 'AC cab'],
  placesEnRoute: ['Allahabad'],
  faqs: defaultFaqs('Varanasi', 'Belha'),
  seo: { title: 'Varanasi to Belha Taxi', description: 'Book Varanasi to Belha taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-belha-taxi` },
};

export const varanasiToBelthara: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Belthara',
  distance: '115 km', duration: '2.5 hrs',
  fare: { sedan: 1725, innova: 2530, ertiga: 2128 },
  highlights: ['UP route', 'AC cab'],
  placesEnRoute: ['Ballia road'],
  faqs: defaultFaqs('Varanasi', 'Belthara'),
  seo: { title: 'Varanasi to Belthara Taxi', description: 'Book Varanasi to Belthara taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-belthara-taxi` },
};

export const varanasiToBettiah: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Bettiah',
  distance: '290 km', duration: '6 hrs',
  fare: { sedan: 4350, innova: 6380, ertiga: 5365 },
  highlights: ['Bihar route', 'AC cab', 'Experienced driver'],
  placesEnRoute: ['Patna', 'Motihari'],
  faqs: defaultFaqs('Varanasi', 'Bettiah'),
  seo: { title: 'Varanasi to Bettiah Taxi', description: 'Book Varanasi to Bettiah taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-bettiah-taxi` },
};

export const varanasiToBhabua: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Bhabua',
  distance: '100 km', duration: '2 hrs',
  fare: { sedan: 1500, innova: 2200, ertiga: 1850 },
  highlights: ['NH-19 route', 'Bihar border', 'AC cab'],
  placesEnRoute: ['Rohtas'],
  faqs: defaultFaqs('Varanasi', 'Bhabua'),
  seo: { title: 'Varanasi to Bhabua Taxi', description: 'Book Varanasi to Bhabua taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-bhabua-taxi` },
};

export const varanasiToBhadohi: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Bhadohi',
  distance: '60 km', duration: '1.5 hrs',
  fare: { sedan: 900, innova: 1320, ertiga: 1110 },
  highlights: ['Carpet city route', 'Short trip', 'AC cab'],
  placesEnRoute: [],
  faqs: defaultFaqs('Varanasi', 'Bhadohi'),
  seo: { title: 'Varanasi to Bhadohi Taxi', description: 'Book Varanasi to Bhadohi taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-bhadohi-taxi` },
};

export const varanasiToBikramganj: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Bikramganj',
  distance: '165 km', duration: '3.5 hrs',
  fare: { sedan: 2475, innova: 3630, ertiga: 3053 },
  highlights: ['Bihar route', 'AC cab'],
  placesEnRoute: ['Arrah'],
  faqs: defaultFaqs('Varanasi', 'Bikramganj'),
  seo: { title: 'Varanasi to Bikramganj Taxi', description: 'Book Varanasi to Bikramganj taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-bikramganj-taxi` },
};

export const varanasiToBuxur: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Buxur',
  distance: '120 km', duration: '2.5 hrs',
  fare: { sedan: 1800, innova: 2640, ertiga: 2220 },
  highlights: ['NH-19 route', 'Bihar border', 'AC cab'],
  placesEnRoute: ['Arrah'],
  faqs: defaultFaqs('Varanasi', 'Buxur'),
  seo: { title: 'Varanasi to Buxur Taxi', description: 'Book Varanasi to Buxur taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-buxur-taxi` },
};

export const varanasiToChandauli: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Chandauli',
  distance: '45 km', duration: '1 hr',
  fare: { sedan: 700, innova: 1000, ertiga: 850 },
  highlights: ['Short trip', 'AC cab'],
  placesEnRoute: [],
  faqs: defaultFaqs('Varanasi', 'Chandauli'),
  seo: { title: 'Varanasi to Chandauli Taxi', description: 'Book Varanasi to Chandauli taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-chandauli-taxi` },
};

export const varanasiToChhapra: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Chhapra',
  distance: '200 km', duration: '4 hrs',
  fare: { sedan: 3000, innova: 4400, ertiga: 3700 },
  highlights: ['Bihar route', 'AC cab', 'Experienced driver'],
  placesEnRoute: ['Arrah'],
  faqs: defaultFaqs('Varanasi', 'Chhapra'),
  seo: { title: 'Varanasi to Chhapra Taxi', description: 'Book Varanasi to Chhapra taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-chhapra-taxi` },
};

export const varanasiToChitrakoot: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Chitrakoot',
  distance: '250 km', duration: '5 hrs',
  fare: { sedan: 3750, innova: 5500, ertiga: 4625 },
  highlights: ['Pilgrimage route', 'Lord Ram\'s forest abode', 'AC cab'],
  placesEnRoute: ['Allahabad', 'Banda'],
  faqs: defaultFaqs('Varanasi', 'Chitrakoot'),
  seo: { title: 'Varanasi to Chitrakoot Taxi', description: 'Book Varanasi to Chitrakoot pilgrimage taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-chitrakoot-taxi` },
};

export const varanasiToChopan: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Chopan',
  distance: '175 km', duration: '3.5 hrs',
  fare: { sedan: 2625, innova: 3850, ertiga: 3238 },
  highlights: ['Sonbhadra route', 'AC cab'],
  placesEnRoute: ['Robertsganj'],
  faqs: defaultFaqs('Varanasi', 'Chopan'),
  seo: { title: 'Varanasi to Chopan Taxi', description: 'Book Varanasi to Chopan taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-chopan-taxi` },
};

export const varanasiToChunар: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Chunar',
  distance: '40 km', duration: '1 hr',
  fare: { sedan: 700, innova: 1000, ertiga: 850 },
  highlights: ['Chunar Fort route', 'Short trip', 'Scenic Ganga views'],
  placesEnRoute: [],
  faqs: defaultFaqs('Varanasi', 'Chunar'),
  seo: { title: 'Varanasi to Chunar Taxi', description: 'Book Varanasi to Chunar taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-chunar-taxi` },
};

export const varanasiToDaltonganj: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Daltonganj',
  distance: '290 km', duration: '6 hrs',
  fare: { sedan: 4350, innova: 6380, ertiga: 5365 },
  highlights: ['Jharkhand route', 'AC cab', 'Experienced driver'],
  placesEnRoute: ['Gaya', 'Hazaribagh'],
  faqs: defaultFaqs('Varanasi', 'Daltonganj'),
  seo: { title: 'Varanasi to Daltonganj Taxi', description: 'Book Varanasi to Daltonganj taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-daltonganj-taxi` },
};

export const varanasiToDehriOnSone: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Dehri On Sone',
  distance: '145 km', duration: '3 hrs',
  fare: { sedan: 2175, innova: 3190, ertiga: 2683 },
  highlights: ['Bihar route', 'AC cab'],
  placesEnRoute: ['Rohtas'],
  faqs: defaultFaqs('Varanasi', 'Dehri On Sone'),
  seo: { title: 'Varanasi to Dehri On Sone Taxi', description: 'Book Varanasi to Dehri On Sone taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-dehri-on-sone-taxi` },
};

export const varanasiToDeoria: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Deoria',
  distance: '180 km', duration: '4 hrs',
  fare: { sedan: 2700, innova: 3960, ertiga: 3330 },
  highlights: ['UP route', 'AC cab'],
  placesEnRoute: ['Gorakhpur route'],
  faqs: defaultFaqs('Varanasi', 'Deoria'),
  seo: { title: 'Varanasi to Deoria Taxi', description: 'Book Varanasi to Deoria taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-deoria-taxi` },
};

export const varanasiToDomariyaganj: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Domariyaganj',
  distance: '250 km', duration: '5 hrs',
  fare: { sedan: 3750, innova: 5500, ertiga: 4625 },
  highlights: ['UP route', 'AC cab', 'Experienced driver'],
  placesEnRoute: ['Basti'],
  faqs: defaultFaqs('Varanasi', 'Domariyaganj'),
  seo: { title: 'Varanasi to Domariyaganj Taxi', description: 'Book Varanasi to Domariyaganj taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-domariyaganj-taxi` },
};

export const varanasiToFaizabad: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Faizabad',
  distance: '195 km', duration: '4 hrs',
  fare: { sedan: 2925, innova: 4290, ertiga: 3608 },
  highlights: ['NH-27 route', 'Near Ayodhya', 'AC cab'],
  placesEnRoute: ['Jaunpur', 'Sultanpur'],
  faqs: defaultFaqs('Varanasi', 'Faizabad'),
  seo: { title: 'Varanasi to Faizabad Taxi', description: 'Book Varanasi to Faizabad taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-faizabad-taxi` },
};

export const varanasiToFatehpur: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Fatehpur',
  distance: '175 km', duration: '3.5 hrs',
  fare: { sedan: 2625, innova: 3850, ertiga: 3238 },
  highlights: ['NH-19 route', 'AC cab'],
  placesEnRoute: ['Allahabad'],
  faqs: defaultFaqs('Varanasi', 'Fatehpur'),
  seo: { title: 'Varanasi to Fatehpur Taxi', description: 'Book Varanasi to Fatehpur taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-fatehpur-taxi` },
};

export const varanasiToGaya: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Gaya',
  distance: '240 km', duration: '5 hrs',
  fare: { sedan: 3600, innova: 5280, ertiga: 4440 },
  highlights: ['Pilgrim route', 'Bodh Gaya nearby', 'NH-19 & NH-82', 'Smooth highway'],
  placesEnRoute: ['Sasaram', 'Dehri'],
  faqs: [
    { q: 'How much does a Varanasi to Gaya taxi cost?', a: 'Sedan starts at ₹3600, Innova at ₹5280, Ertiga at ₹4440 one-way.' },
    { q: 'Can we visit Bodh Gaya from Gaya?', a: 'Yes! Bodh Gaya is just 13 km from Gaya. We can include it in your itinerary.' },
    { q: 'Is this a pilgrimage route?', a: 'Yes, Gaya is famous for Pitru Paksha rituals and Vishnupad Temple. Bodh Gaya is the birthplace of Buddhism.' },
    { q: 'Do you provide night travel?', a: 'Yes, we provide 24/7 cab service for Varanasi to Gaya.' },
    { q: 'What is the return fare?', a: 'Call 8726124680 for current round-trip rates.' },
  ],
  seo: {
    title: 'Varanasi to Gaya Taxi | Cab Booking Online | Tirupati Travel',
    description: 'Book Varanasi to Gaya taxi. 240 km, ~5 hrs. Sedan ₹3600, Innova ₹5280. Pilgrimage route. Call 8726124680.',
    canonical: `${BASE}/varanasi/varanasi-to-gaya-taxi`,
  },
};

export const varanasiToGhazipur: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Ghazipur',
  distance: '80 km', duration: '2 hrs',
  fare: { sedan: 1200, innova: 1760, ertiga: 1480 },
  highlights: ['NH-19 route', 'Ganga riverside', 'AC cab'],
  placesEnRoute: [],
  faqs: defaultFaqs('Varanasi', 'Ghazipur'),
  seo: { title: 'Varanasi to Ghazipur Taxi', description: 'Book Varanasi to Ghazipur taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-ghazipur-taxi` },
};

export const varanasiToGorakhpur: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Gorakhpur',
  distance: '270 km', duration: '5 hrs',
  fare: { sedan: 4050, innova: 5940, ertiga: 4995 },
  highlights: ['NH-27 route', 'Gorakhpur Temple nearby', 'AC cab', 'Experienced driver'],
  placesEnRoute: ['Azamgarh', 'Mau'],
  faqs: defaultFaqs('Varanasi', 'Gorakhpur'),
  seo: { title: 'Varanasi to Gorakhpur Taxi', description: 'Book Varanasi to Gorakhpur taxi. 270 km, ~5 hrs. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-gorakhpur-taxi` },
};

export const varanasiToIndore: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Indore',
  distance: '760 km', duration: '14 hrs',
  fare: { sedan: 11400, innova: 16720, ertiga: 14060 },
  highlights: ['MP route', 'Experienced driver', 'Comfortable AC cab'],
  placesEnRoute: ['Allahabad', 'Rewa', 'Jabalpur'],
  faqs: defaultFaqs('Varanasi', 'Indore'),
  seo: { title: 'Varanasi to Indore Taxi', description: 'Book Varanasi to Indore taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-indore-taxi` },
};

export const varanasiToJabalpur: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Jabalpur',
  distance: '430 km', duration: '8 hrs',
  fare: { sedan: 6450, innova: 9460, ertiga: 7955 },
  highlights: ['MP route', 'Marble Rocks nearby', 'AC cab'],
  placesEnRoute: ['Allahabad', 'Rewa'],
  faqs: defaultFaqs('Varanasi', 'Jabalpur'),
  seo: { title: 'Varanasi to Jabalpur Taxi', description: 'Book Varanasi to Jabalpur taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-jabalpur-taxi` },
};

export const varanasiToJaisinghnagar: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Jaisinghnagar',
  distance: '410 km', duration: '8 hrs',
  fare: { sedan: 6150, innova: 9020, ertiga: 7585 },
  highlights: ['MP route', 'AC cab', 'Experienced driver'],
  placesEnRoute: ['Allahabad', 'Rewa'],
  faqs: defaultFaqs('Varanasi', 'Jaisinghnagar'),
  seo: { title: 'Varanasi to Jaisinghnagar Taxi', description: 'Book Varanasi to Jaisinghnagar taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-jaisinghnagar-taxi` },
};

export const varanasiToJamshedpur: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Jamshedpur',
  distance: '400 km', duration: '7.5 hrs',
  fare: { sedan: 6000, innova: 8800, ertiga: 7400 },
  highlights: ['Jharkhand route', 'Industrial city', 'AC cab'],
  placesEnRoute: ['Gaya', 'Dhanbad'],
  faqs: defaultFaqs('Varanasi', 'Jamshedpur'),
  seo: { title: 'Varanasi to Jamshedpur Taxi', description: 'Book Varanasi to Jamshedpur taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-jamshedpur-taxi` },
};

export const varanasiToJaunpur: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Jaunpur',
  distance: '60 km', duration: '1.5 hrs',
  fare: { sedan: 900, innova: 1320, ertiga: 1110 },
  highlights: ['Historic route', 'Shahi Bridge', 'AC cab'],
  placesEnRoute: [],
  faqs: defaultFaqs('Varanasi', 'Jaunpur'),
  seo: { title: 'Varanasi to Jaunpur Taxi', description: 'Book Varanasi to Jaunpur taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-jaunpur-taxi` },
};

export const varanasiToJiyanpur: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Jiyanpur',
  distance: '75 km', duration: '1.5 hrs',
  fare: { sedan: 1125, innova: 1650, ertiga: 1388 },
  highlights: ['UP route', 'AC cab'],
  placesEnRoute: [],
  faqs: defaultFaqs('Varanasi', 'Jiyanpur'),
  seo: { title: 'Varanasi to Jiyanpur Taxi', description: 'Book Varanasi to Jiyanpur taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-jiyanpur-taxi` },
};

export const varanasiToKanpur: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Kanpur',
  distance: '320 km', duration: '6 hrs',
  fare: { sedan: 4800, innova: 7040, ertiga: 5920 },
  highlights: ['NH-27 & NH-19', 'Industrial city', 'AC cab', 'Experienced driver'],
  placesEnRoute: ['Allahabad'],
  faqs: defaultFaqs('Varanasi', 'Kanpur'),
  seo: { title: 'Varanasi to Kanpur Taxi', description: 'Book Varanasi to Kanpur taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-kanpur-taxi` },
};

export const varanasiToKochas: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Kochas',
  distance: '150 km', duration: '3 hrs',
  fare: { sedan: 2250, innova: 3300, ertiga: 2775 },
  highlights: ['Bihar route', 'AC cab'],
  placesEnRoute: ['Sasaram'],
  faqs: defaultFaqs('Varanasi', 'Kochas'),
  seo: { title: 'Varanasi to Kochas Taxi', description: 'Book Varanasi to Kochas taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-kochas-taxi` },
};

export const varanasiToKudra: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Kudra',
  distance: '125 km', duration: '2.5 hrs',
  fare: { sedan: 1875, innova: 2750, ertiga: 2313 },
  highlights: ['Bihar border', 'NH-19', 'AC cab'],
  placesEnRoute: ['Bhabua'],
  faqs: defaultFaqs('Varanasi', 'Kudra'),
  seo: { title: 'Varanasi to Kudra Taxi', description: 'Book Varanasi to Kudra taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-kudra-taxi` },
};

export const varanasiToKunda: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Kunda',
  distance: '200 km', duration: '4 hrs',
  fare: { sedan: 3000, innova: 4400, ertiga: 3700 },
  highlights: ['UP route', 'AC cab'],
  placesEnRoute: ['Allahabad', 'Pratapgarh'],
  faqs: defaultFaqs('Varanasi', 'Kunda'),
  seo: { title: 'Varanasi to Kunda Taxi', description: 'Book Varanasi to Kunda taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-kunda-taxi` },
};

export const varanasiToKushinagar: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Kushinagar',
  distance: '255 km', duration: '5 hrs',
  fare: { sedan: 3825, innova: 5610, ertiga: 4718 },
  highlights: ['Buddhist circuit', 'Mahaparinirvana stupa', 'AC cab', 'Experienced driver'],
  placesEnRoute: ['Gorakhpur'],
  faqs: defaultFaqs('Varanasi', 'Kushinagar'),
  seo: { title: 'Varanasi to Kushinagar Taxi', description: 'Book Varanasi to Kushinagar Buddhist circuit taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-kushinagar-taxi` },
};

export const varanasiToLucknow: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Lucknow',
  distance: '320 km', duration: '6 hrs',
  fare: { sedan: 4800, innova: 7040, ertiga: 5920 },
  highlights: ['NH-27 route', 'Nawabi city', 'Smooth expressway', 'AC cab'],
  placesEnRoute: ['Sultanpur', 'Barabanki'],
  faqs: [
    { q: 'How much does Varanasi to Lucknow taxi cost?', a: 'Sedan starts at ₹4800, Innova at ₹7040, Ertiga at ₹5920.' },
    { q: 'Is there an expressway from Varanasi to Lucknow?', a: 'Yes, the Purvanchal Expressway connects the two cities efficiently.' },
    { q: 'Can I book a round trip?', a: 'Yes, round trips are available. Call 8726124680 for rates.' },
    { q: 'How long does it take?', a: 'Approximately 5-6 hours via Purvanchal Expressway.' },
    { q: 'Do you pick up from hotel?', a: 'Yes, doorstep pickup from any location in Varanasi.' },
  ],
  seo: {
    title: 'Varanasi to Lucknow Taxi | Cab Booking Online | Tirupati Travel',
    description: 'Book Varanasi to Lucknow taxi. 320 km, ~6 hrs. Sedan ₹4800, Innova ₹7040. Call 8726124680.',
    canonical: `${BASE}/varanasi/varanasi-to-lucknow-taxi`,
  },
};

export const varanasiToMaghar: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Maghar',
  distance: '110 km', duration: '2.5 hrs',
  fare: { sedan: 1650, innova: 2420, ertiga: 2035 },
  highlights: ['Kabir Math pilgrimage', 'UP route', 'AC cab'],
  placesEnRoute: ['Gorakhpur route'],
  faqs: defaultFaqs('Varanasi', 'Maghar'),
  seo: { title: 'Varanasi to Maghar Taxi', description: 'Book Varanasi to Maghar taxi. Kabir Math route. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-maghar-taxi` },
};

export const varanasiToMaihar: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Maihar',
  distance: '300 km', duration: '5.5 hrs',
  fare: { sedan: 4500, innova: 6600, ertiga: 5550 },
  highlights: ['Maihar Devi pilgrimage', 'MP route', 'Ropeway to temple', 'AC cab'],
  placesEnRoute: ['Allahabad', 'Satna'],
  faqs: defaultFaqs('Varanasi', 'Maihar'),
  seo: { title: 'Varanasi to Maihar Taxi', description: 'Book Varanasi to Maihar Devi pilgrimage taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-maihar-taxi` },
};

export const varanasiToMankapur: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Mankapur',
  distance: '215 km', duration: '4.5 hrs',
  fare: { sedan: 3225, innova: 4730, ertiga: 3978 },
  highlights: ['UP route', 'AC cab'],
  placesEnRoute: ['Ayodhya route'],
  faqs: defaultFaqs('Varanasi', 'Mankapur'),
  seo: { title: 'Varanasi to Mankapur Taxi', description: 'Book Varanasi to Mankapur taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-mankapur-taxi` },
};

export const varanasiToMau: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Mau',
  distance: '115 km', duration: '2.5 hrs',
  fare: { sedan: 1725, innova: 2530, ertiga: 2128 },
  highlights: ['UP route', 'AC cab'],
  placesEnRoute: ['Azamgarh'],
  faqs: defaultFaqs('Varanasi', 'Mau'),
  seo: { title: 'Varanasi to Mau Taxi', description: 'Book Varanasi to Mau taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-mau-taxi` },
};

export const varanasiToMohania: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Mohania',
  distance: '90 km', duration: '2 hrs',
  fare: { sedan: 1350, innova: 1980, ertiga: 1665 },
  highlights: ['Bihar border', 'NH-19', 'AC cab'],
  placesEnRoute: [],
  faqs: defaultFaqs('Varanasi', 'Mohania'),
  seo: { title: 'Varanasi to Mohania Taxi', description: 'Book Varanasi to Mohania taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-mohania-taxi` },
};

export const varanasiToMotihari: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Motihari',
  distance: '270 km', duration: '5.5 hrs',
  fare: { sedan: 4050, innova: 5940, ertiga: 4995 },
  highlights: ['Bihar route', 'Champaran', 'AC cab', 'Experienced driver'],
  placesEnRoute: ['Patna', 'Muzaffarpur'],
  faqs: defaultFaqs('Varanasi', 'Motihari'),
  seo: { title: 'Varanasi to Motihari Taxi', description: 'Book Varanasi to Motihari taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-motihari-taxi` },
};

export const varanasiToMughalsarai: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Mughalsarai',
  distance: '20 km', duration: '30 min',
  fare: { sedan: 500, innova: 750, ertiga: 625 },
  highlights: ['Short trip', 'Railway junction', 'AC cab'],
  placesEnRoute: [],
  faqs: defaultFaqs('Varanasi', 'Mughalsarai'),
  seo: { title: 'Varanasi to Mughalsarai Taxi', description: 'Book Varanasi to Mughalsarai taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-mughalsarai-taxi` },
};

export const varanasiToMuhammadabad: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Muhammadabad',
  distance: '90 km', duration: '2 hrs',
  fare: { sedan: 1350, innova: 1980, ertiga: 1665 },
  highlights: ['UP route', 'AC cab'],
  placesEnRoute: ['Ghazipur'],
  faqs: defaultFaqs('Varanasi', 'Muhammadabad'),
  seo: { title: 'Varanasi to Muhammadabad Taxi', description: 'Book Varanasi to Muhammadabad taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-muhammadabad-taxi` },
};

export const varanasiToMuzaffarpur: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Muzaffarpur',
  distance: '260 km', duration: '5.5 hrs',
  fare: { sedan: 3900, innova: 5720, ertiga: 4810 },
  highlights: ['Bihar route', 'Litchi region', 'AC cab', 'Experienced driver'],
  placesEnRoute: ['Patna'],
  faqs: defaultFaqs('Varanasi', 'Muzaffarpur'),
  seo: { title: 'Varanasi to Muzaffarpur Taxi', description: 'Book Varanasi to Muzaffarpur taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-muzaffarpur-taxi` },
};

export const varanasiToNaimisharanya: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Naimisharanya',
  distance: '310 km', duration: '6 hrs',
  fare: { sedan: 4650, innova: 6820, ertiga: 5735 },
  highlights: ['Sacred pilgrimage', 'Naimish Dham', 'AC cab', 'Experienced driver'],
  placesEnRoute: ['Lucknow', 'Sitapur'],
  faqs: defaultFaqs('Varanasi', 'Naimisharanya'),
  seo: { title: 'Varanasi to Naimisharanya Taxi', description: 'Book Varanasi to Naimisharanya pilgrimage taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-naimisharanya-taxi` },
};

export const varanasiToObra: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Obra',
  distance: '165 km', duration: '3.5 hrs',
  fare: { sedan: 2475, innova: 3630, ertiga: 3053 },
  highlights: ['Sonbhadra route', 'Rihand Dam nearby', 'AC cab'],
  placesEnRoute: ['Robertsganj'],
  faqs: defaultFaqs('Varanasi', 'Obra'),
  seo: { title: 'Varanasi to Obra Taxi', description: 'Book Varanasi to Obra taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-obra-taxi` },
};

export const varanasiToPadrauna: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Padrauna',
  distance: '200 km', duration: '4 hrs',
  fare: { sedan: 3000, innova: 4400, ertiga: 3700 },
  highlights: ['UP route', 'AC cab'],
  placesEnRoute: ['Gorakhpur'],
  faqs: defaultFaqs('Varanasi', 'Padrauna'),
  seo: { title: 'Varanasi to Padrauna Taxi', description: 'Book Varanasi to Padrauna taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-padrauna-taxi` },
};

export const varanasiToPatna: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Patna',
  distance: '290 km', duration: '6 hrs',
  fare: { sedan: 4350, innova: 6380, ertiga: 5365 },
  highlights: ['NH-19 route', 'Bihar capital', 'AC cab', 'Experienced driver'],
  placesEnRoute: ['Arrah', 'Buxur'],
  faqs: [
    { q: 'How much does Varanasi to Patna taxi cost?', a: 'Sedan starts at ₹4350, Innova at ₹6380, Ertiga at ₹5365.' },
    { q: 'How long does Varanasi to Patna take?', a: 'Approximately 5-6 hours via NH-19.' },
    { q: 'Do you provide pickup from Varanasi station?', a: 'Yes, we provide pickup from Varanasi Junction, Manduadih & all areas.' },
    { q: 'Is night travel available?', a: 'Yes, 24/7 cab service is available.' },
    { q: 'Can I book round trip?', a: 'Yes, round trip is available. Call 8726124680.' },
  ],
  seo: {
    title: 'Varanasi to Patna Taxi | Cab Booking Online | Tirupati Travel',
    description: 'Book Varanasi to Patna taxi. 290 km, ~6 hrs. Sedan ₹4350, Innova ₹6380. Call 8726124680.',
    canonical: `${BASE}/varanasi/varanasi-to-patna-taxi`,
  },
};

export const varanasiToPratapgarh: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Pratapgarh',
  distance: '160 km', duration: '3.5 hrs',
  fare: { sedan: 2400, innova: 3520, ertiga: 2960 },
  highlights: ['NH-27 route', 'UP route', 'AC cab'],
  placesEnRoute: ['Jaunpur', 'Sultanpur'],
  faqs: defaultFaqs('Varanasi', 'Pratapgarh'),
  seo: { title: 'Varanasi to Pratapgarh Taxi', description: 'Book Varanasi to Pratapgarh taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-pratapgarh-taxi` },
};

export const varanasiToRaibareli: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Raibareli',
  distance: '230 km', duration: '4.5 hrs',
  fare: { sedan: 3450, innova: 5060, ertiga: 4255 },
  highlights: ['NH-27 route', 'AC cab'],
  placesEnRoute: ['Jaunpur', 'Sultanpur'],
  faqs: defaultFaqs('Varanasi', 'Raibareli'),
  seo: { title: 'Varanasi to Raibareli Taxi', description: 'Book Varanasi to Raibareli taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-raibareli-taxi` },
};

export const varanasiToRobertsganj: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Robertsganj',
  distance: '155 km', duration: '3.5 hrs',
  fare: { sedan: 2325, innova: 3410, ertiga: 2868 },
  highlights: ['Sonbhadra district', 'Scenic route', 'AC cab'],
  placesEnRoute: ['Chandauli'],
  faqs: defaultFaqs('Varanasi', 'Robertsganj'),
  seo: { title: 'Varanasi to Robertsganj Taxi', description: 'Book Varanasi to Robertsganj taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-robertsganj-taxi` },
};

export const varanasiToSaidpur: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Saidpur',
  distance: '75 km', duration: '1.5 hrs',
  fare: { sedan: 1125, innova: 1650, ertiga: 1388 },
  highlights: ['UP route', 'AC cab'],
  placesEnRoute: ['Ghazipur'],
  faqs: defaultFaqs('Varanasi', 'Saidpur'),
  seo: { title: 'Varanasi to Saidpur Taxi', description: 'Book Varanasi to Saidpur taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-saidpur-taxi` },
};

export const varanasiToSarnath: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Sarnath',
  distance: '13 km', duration: '30 min',
  fare: { sedan: 400, innova: 600, ertiga: 500 },
  highlights: ['Buddhist heritage site', 'UNESCO World Heritage', 'Dhamek Stupa', 'Short trip'],
  placesEnRoute: [],
  faqs: [
    { q: 'How far is Sarnath from Varanasi?', a: 'Sarnath is just 13 km from Varanasi city center.' },
    { q: 'What is the fare from Varanasi to Sarnath?', a: 'Starting from ₹400 for a sedan, round trip included.' },
    { q: 'What can I visit at Sarnath?', a: 'Dhamek Stupa, Mulagandha Kuti Vihar, Archaeological Museum & deer park.' },
    { q: 'Can we combine Sarnath with other Varanasi sightseeing?', a: 'Yes! We offer full-day packages combining Sarnath with ghat visits and temples.' },
    { q: 'Is Sarnath open every day?', a: 'Yes, the site is open every day. Archaeological Museum is closed on Fridays.' },
  ],
  seo: {
    title: 'Varanasi to Sarnath Taxi | Buddhist Circuit | Tirupati Travel',
    description: 'Book Varanasi to Sarnath taxi. 13 km, 30 min. UNESCO site. Starting ₹400. Call 8726124680.',
    canonical: `${BASE}/varanasi/varanasi-to-sarnath-taxi`,
  },
};

export const varanasiToShahganj: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Shahganj',
  distance: '105 km', duration: '2.5 hrs',
  fare: { sedan: 1575, innova: 2310, ertiga: 1943 },
  highlights: ['UP route', 'AC cab'],
  placesEnRoute: ['Jaunpur'],
  faqs: defaultFaqs('Varanasi', 'Shahganj'),
  seo: { title: 'Varanasi to Shahganj Taxi', description: 'Book Varanasi to Shahganj taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-shahganj-taxi` },
};

export const varanasiToSonbhadra: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Sonbhadra',
  distance: '175 km', duration: '3.5 hrs',
  fare: { sedan: 2625, innova: 3850, ertiga: 3238 },
  highlights: ['Industrial district', 'Scenic route', 'AC cab'],
  placesEnRoute: ['Robertsganj'],
  faqs: defaultFaqs('Varanasi', 'Sonbhadra'),
  seo: { title: 'Varanasi to Sonbhadra Taxi', description: 'Book Varanasi to Sonbhadra taxi. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-to-sonbhadra-taxi` },
};

export const varanasiToVindhyachal: OutstationRouteData = {
  origin: 'Varanasi', destination: 'Vindhyachal',
  distance: '70 km', duration: '1.5 hrs',
  fare: { sedan: 1050, innova: 1540, ertiga: 1295 },
  highlights: ['Vindhyavasini Devi darshan', 'Sacred Shakti Peetha', 'NH-19 route', 'AC cab'],
  placesEnRoute: ['Mirzapur'],
  faqs: [
    { q: 'What is the fare from Varanasi to Vindhyachal?', a: 'Sedan starts at ₹1050, Innova at ₹1540, Ertiga at ₹1295.' },
    { q: 'Can I visit Vindhyachal Mandir on this trip?', a: 'Yes! We will take you directly to Vindhyavasini Devi Mandir.' },
    { q: 'How long does the journey take?', a: 'Approximately 1.5 hours via NH-19 through Mirzapur.' },
    { q: 'Is return cab available?', a: 'Yes, round-trip cabs available. Call 8726124680.' },
    { q: 'Can we visit Ashtabhuja and Kali Khoh temples too?', a: 'Yes, we can plan a complete Vindhyachal temple circuit tour.' },
  ],
  seo: {
    title: 'Varanasi to Vindhyachal Taxi | Devi Darshan | Tirupati Travel',
    description: 'Book Varanasi to Vindhyachal taxi. 70 km, 1.5 hrs. Devi darshan route. Sedan ₹1050. Call 8726124680.',
    canonical: `${BASE}/varanasi/varanasi-to-vindhyachal-taxi`,
  },
};