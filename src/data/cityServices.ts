// src/data/cityServices.ts
// All local/city cab service page data
// Full data populated in Chunk 5

export type CabServiceData = {
  serviceType: 'one-way' | 'round-trip' | 'full-day' | 'half-day' | 'outstation'
    | 'drop' | 'call-taxi' | 'tourist' | 'corporate' | 'fare' | 'agency' | 'contact' | 'local';
  city: string;
  pricing: { sedan: number; innova: number; ertiga: number };
  inclusions: string[];
  howItWorks: { step: number; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; canonical: string };
};

const BASE = 'https://tirupatitravel.in';

const defaultHowItWorks = [
  { step: 1, title: 'Book Your Cab', desc: 'Call 8726124680 or WhatsApp to confirm your booking instantly.' },
  { step: 2, title: 'Driver Arrives', desc: 'Your driver arrives on time at your location.' },
  { step: 3, title: 'Travel Comfortably', desc: 'Enjoy a safe, comfortable AC journey to your destination.' },
];

const defaultFaqs = (service: string, city: string) => [
  { q: `How much does ${service} cost in ${city}?`, a: `Call 8726124680 for the latest rates for ${service} in ${city}.` },
  { q: 'Are the cabs AC?', a: 'Yes, all our cabs are fully air-conditioned.' },
  { q: 'Is 24/7 service available?', a: 'Yes, we provide round-the-clock cab service.' },
  { q: 'Do you provide GST invoice?', a: 'Yes, GST invoice is available on request.' },
  { q: 'How do I book?', a: 'Call 8726124680 or WhatsApp +91 8726124680.' },
];

// ── VARANASI ──────────────────────────────────────────────────────────────
export const varanasiOneWay: CabServiceData = {
  serviceType: 'one-way', city: 'Varanasi',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['AC Cab', 'Professional Driver', 'One-way fare only', 'Fuel included'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('one-way cab', 'Varanasi'),
  seo: { title: 'One Way Cab in Varanasi | One Way Taxi | Tirupati Travel', description: 'Book one way cab in Varanasi. Affordable outstation one way taxi. No return fare. Call 8726124680.', canonical: `${BASE}/varanasi/one-way-cab-in-varanasi` },
};

export const varanasiRoundTrip: CabServiceData = {
  serviceType: 'round-trip', city: 'Varanasi',
  pricing: { sedan: 2000, innova: 3100, ertiga: 2600 },
  inclusions: ['AC Cab', 'Professional Driver', 'Both way fare', 'Fuel included', 'Waiting charges included'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('round trip cab', 'Varanasi'),
  seo: { title: 'Round Trip Cab Varanasi | Return Taxi | Tirupati Travel', description: 'Book round trip cab from Varanasi. Best rates for return journeys. Call 8726124680.', canonical: `${BASE}/varanasi/round-trip-cab-varanasi` },
};

export const varanasiFullDay: CabServiceData = {
  serviceType: 'full-day', city: 'Varanasi',
  pricing: { sedan: 1800, innova: 2800, ertiga: 2300 },
  inclusions: ['AC Cab', '8 Hours / 80 km', 'Professional Driver', 'Fuel included', 'Parking charges extra'],
  howItWorks: defaultHowItWorks,
  faqs: [
    { q: 'What is included in full day taxi in Varanasi?', a: '8 hours and 80 km are included. Extra km charged at ₹10.50/km.' },
    { q: 'What places can I visit on full day taxi?', a: 'Dashashwamedh Ghat, Kashi Vishwanath, Sarnath, BHU & all major sights.' },
    { q: 'Can I extend beyond 8 hours?', a: 'Yes, extra hours are charged at ₹150/hr for sedan.' },
    { q: 'Is driver tip included?', a: 'Driver tip is optional and at your discretion.' },
    { q: 'How do I book?', a: 'Call 8726124680 or WhatsApp +91 8726124680.' },
  ],
  seo: { title: 'Full Day Taxi in Varanasi | 8 Hour Cab | Tirupati Travel', description: 'Book full day taxi in Varanasi. 8 hrs / 80 km package. Sightseeing, temple visits. Call 8726124680.', canonical: `${BASE}/varanasi/full-day-taxi-in-varanasi` },
};

export const varanasiHalfDay: CabServiceData = {
  serviceType: 'half-day', city: 'Varanasi',
  pricing: { sedan: 1000, innova: 1600, ertiga: 1300 },
  inclusions: ['AC Cab', '4 Hours / 40 km', 'Professional Driver', 'Fuel included'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('half day taxi', 'Varanasi'),
  seo: { title: 'Half Day Taxi in Varanasi | 4 Hour Cab | Tirupati Travel', description: 'Book half day taxi in Varanasi. 4 hrs / 40 km package. Ghat visits & temples. Call 8726124680.', canonical: `${BASE}/varanasi/half-day-taxi-in-varanasi` },
};

export const varanasiCallTaxi: CabServiceData = {
  serviceType: 'call-taxi', city: 'Varanasi',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['AC Cab', '24/7 Available', 'Professional Driver', 'Instant Pickup'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('call taxi', 'Varanasi'),
  seo: { title: 'Call Taxi in Varanasi | On-Call Cab Service | Tirupati Travel', description: 'Book call taxi in Varanasi. 24/7 on-call cab service. Instant pickup. Call 8726124680.', canonical: `${BASE}/varanasi/call-taxi-in-varanasi` },
};

export const varanasiDrop: CabServiceData = {
  serviceType: 'drop', city: 'Varanasi',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['AC Cab', 'One-way drop', 'Professional Driver', 'Fuel included'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('drop taxi', 'Varanasi'),
  seo: { title: 'Drop Taxi Service Varanasi | One Way Drop Cab | Tirupati Travel', description: 'Book drop taxi service in Varanasi. Affordable one-way drop to any destination. Call 8726124680.', canonical: `${BASE}/varanasi/drop-taxi-service-varanasi` },
};

export const varanasiTourist: CabServiceData = {
  serviceType: 'tourist', city: 'Varanasi',
  pricing: { sedan: 1800, innova: 2800, ertiga: 2300 },
  inclusions: ['AC Cab', '8 Hours / 80 km', 'Guide assistance', 'All major ghats & temples'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('tourist cab', 'Varanasi'),
  seo: { title: 'Tourist Cab Varanasi | Sightseeing Taxi | Tirupati Travel', description: 'Book tourist cab in Varanasi. Guided sightseeing packages, ghats & temples. Call 8726124680.', canonical: `${BASE}/varanasi/tourist-cab-varanasi` },
};

export const varanasiCorporate: CabServiceData = {
  serviceType: 'corporate', city: 'Varanasi',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['AC Cab', 'GST Invoice', 'Professional Driver', 'Monthly billing', '24/7 Support'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('corporate cab', 'Varanasi'),
  seo: { title: 'Corporate Cab Service Varanasi | Employee Transport | Tirupati Travel', description: 'Book corporate cab service in Varanasi. Reliable employee transport, GST invoice. Call 8726124680.', canonical: `${BASE}/varanasi/corporate-cab-service-varanasi` },
};

export const varanasiTaxiFare: CabServiceData = {
  serviceType: 'fare', city: 'Varanasi',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['Transparent pricing', 'No hidden charges', 'GST included'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('taxi fare', 'Varanasi'),
  seo: { title: 'Taxi Fare Varanasi | Cab Rate List 2025 | Tirupati Travel', description: 'Check taxi fare in Varanasi. Complete rate list for sedan, Innova, Ertiga. Call 8726124680.', canonical: `${BASE}/varanasi/taxi-fare-varanasi` },
};

export const varanasiAgency: CabServiceData = {
  serviceType: 'agency', city: 'Varanasi',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['Tour packages', 'Cab booking', 'Pilgrimage tours', 'Hotel assistance'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('travel agency', 'Varanasi'),
  seo: { title: 'Travel Agency in Varanasi | Tour Operator | Tirupati Travel', description: 'Best travel agency in Varanasi. Tour packages, taxi booking & pilgrimage tours. Call 8726124680.', canonical: `${BASE}/varanasi/travel-agency-in-varanasi` },
};

export const varanasiContact: CabServiceData = {
  serviceType: 'contact', city: 'Varanasi',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['24/7 Available', 'Instant booking', 'WhatsApp support'],
  howItWorks: defaultHowItWorks,
  faqs: [
    { q: 'What is the Varanasi cab contact number?', a: 'Call 8726124680 or WhatsApp +91 8726124680 for instant booking.' },
    { q: 'Is 24/7 service available?', a: 'Yes, we are available 24 hours a day, 7 days a week.' },
    { q: 'How quickly can a cab arrive?', a: 'We typically dispatch within 15-30 minutes depending on location.' },
    { q: 'Can I pre-book a cab for early morning?', a: 'Yes, advance booking is available for any time.' },
    { q: 'Do you cover all areas of Varanasi?', a: 'Yes, we cover all areas including Sigra, Lanka, Cantonment, BHU, Nadesar & more.' },
  ],
  seo: { title: 'Varanasi Cab Contact Number | Book Taxi | Tirupati Travel', description: 'Varanasi cab contact number: 8726124680. Book taxi 24/7.', canonical: `${BASE}/varanasi/varanasi-cab-contact-number` },
};

export const varanasiLocalSightseeing: CabServiceData = {
  serviceType: 'local', city: 'Varanasi',
  pricing: { sedan: 1800, innova: 2800, ertiga: 2300 },
  inclusions: ['AC Cab', '8 hrs / 80 km', 'All major ghats', 'Temples & BHU'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('local sightseeing cab', 'Varanasi'),
  seo: { title: 'Varanasi Local Sightseeing Cab | City Tour Taxi | Tirupati Travel', description: 'Book local sightseeing cab in Varanasi. Ghats, temples, Sarnath & more. Hourly packages. Call 8726124680.', canonical: `${BASE}/varanasi/varanasi-local-sightseeing-cab` },
};

// ── AYODHYA ───────────────────────────────────────────────────────────────
export const ayodhyaCallTaxi: CabServiceData = {
  serviceType: 'call-taxi', city: 'Ayodhya',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['AC Cab', '24/7 Available', 'Professional Driver', 'Instant Pickup'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('call taxi', 'Ayodhya'),
  seo: { title: 'Call Taxi in Ayodhya | On-Call Cab Service | Tirupati Travel', description: 'Book call taxi in Ayodhya. 24/7 cab service for temple visits. Call 8726124680.', canonical: `${BASE}/ayodhya/call-taxi-in-ayodhya` },
};

export const ayodhyaDrop: CabServiceData = {
  serviceType: 'drop', city: 'Ayodhya',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['AC Cab', 'One-way drop', 'Professional Driver'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('drop taxi', 'Ayodhya'),
  seo: { title: 'Drop Taxi Service Ayodhya | One Way Drop Cab | Tirupati Travel', description: 'Book drop taxi service in Ayodhya. Call 8726124680.', canonical: `${BASE}/ayodhya/drop-taxi-service-ayodhya` },
};

export const ayodhyaFullDay: CabServiceData = {
  serviceType: 'full-day', city: 'Ayodhya',
  pricing: { sedan: 1800, innova: 2800, ertiga: 2300 },
  inclusions: ['AC Cab', '8 Hours / 80 km', 'Ram Mandir visits', 'All major temples'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('full day cab', 'Ayodhya'),
  seo: { title: 'Full Day Cab in Ayodhya | 8 Hour Taxi | Tirupati Travel', description: 'Book full day cab in Ayodhya. 8 hrs / 80 km. Ram Mandir & all temples. Call 8726124680.', canonical: `${BASE}/ayodhya/full-day-cab-in-ayodhya` },
};

export const ayodhyaHalfDay: CabServiceData = {
  serviceType: 'half-day', city: 'Ayodhya',
  pricing: { sedan: 1000, innova: 1600, ertiga: 1300 },
  inclusions: ['AC Cab', '4 Hours / 40 km', 'Temple visits'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('half day cab', 'Ayodhya'),
  seo: { title: 'Half Day Cab in Ayodhya | 4 Hour Taxi | Tirupati Travel', description: 'Book half day cab in Ayodhya. 4 hrs / 40 km. Call 8726124680.', canonical: `${BASE}/ayodhya/half-day-cab-in-ayodhya` },
};

export const ayodhyaOneWay: CabServiceData = {
  serviceType: 'one-way', city: 'Ayodhya',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['AC Cab', 'One-way fare', 'Professional Driver'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('one way cab', 'Ayodhya'),
  seo: { title: 'One Way Cab in Ayodhya | One Way Taxi | Tirupati Travel', description: 'Book one way cab from Ayodhya. No return fare charged. Call 8726124680.', canonical: `${BASE}/ayodhya/one-way-cab-in-ayodhya` },
};

export const ayodhyaOutstation: CabServiceData = {
  serviceType: 'outstation', city: 'Ayodhya',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['AC Cab', 'Professional Driver', 'Fuel included', 'One-way & round trip'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('outstation cab', 'Ayodhya'),
  seo: { title: 'Outstation Cab in Ayodhya | Outstation Taxi | Tirupati Travel', description: 'Book outstation cab from Ayodhya to Varanasi, Lucknow, Delhi & more. Call 8726124680.', canonical: `${BASE}/ayodhya/outstation-cab-in-ayodhya` },
};

export const ayodhyaRoundTrip: CabServiceData = {
  serviceType: 'round-trip', city: 'Ayodhya',
  pricing: { sedan: 2000, innova: 3100, ertiga: 2600 },
  inclusions: ['AC Cab', 'Both way fare', 'Professional Driver'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('round trip cab', 'Ayodhya'),
  seo: { title: 'Round Trip Cab Ayodhya | Return Taxi | Tirupati Travel', description: 'Book round trip cab from Ayodhya. Best rates. Call 8726124680.', canonical: `${BASE}/ayodhya/round-trip-cab-ayodhya` },
};

export const ayodhyaTourist: CabServiceData = {
  serviceType: 'tourist', city: 'Ayodhya',
  pricing: { sedan: 1800, innova: 2800, ertiga: 2300 },
  inclusions: ['AC Cab', '8 hrs / 80 km', 'Ram Mandir, Hanuman Garhi, all temples'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('tourist cab', 'Ayodhya'),
  seo: { title: 'Tourist Cab Ayodhya | Sightseeing Taxi | Tirupati Travel', description: 'Book tourist cab in Ayodhya. Ram Mandir, Hanuman Garhi & all temples. Call 8726124680.', canonical: `${BASE}/ayodhya/tourist-cab-ayodhya` },
};

export const ayodhyaCorporate: CabServiceData = {
  serviceType: 'corporate', city: 'Ayodhya',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['AC Cab', 'GST Invoice', 'Professional Driver', 'Monthly billing'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('corporate cab', 'Ayodhya'),
  seo: { title: 'Corporate Cab Service Ayodhya | Employee Transport | Tirupati Travel', description: 'Book corporate cab service in Ayodhya. Reliable transport, GST invoice. Call 8726124680.', canonical: `${BASE}/ayodhya/corporate-cab-service-ayodhya` },
};

export const ayodhyaAgency: CabServiceData = {
  serviceType: 'agency', city: 'Ayodhya',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['Tour packages', 'Cab booking', 'Darshan tours'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('travel agency', 'Ayodhya'),
  seo: { title: 'Travel Agency in Ayodhya | Tour Operator | Tirupati Travel', description: 'Best travel agency in Ayodhya. Tour packages & cab booking. Call 8726124680.', canonical: `${BASE}/ayodhya/travel-agency-in-ayodhya` },
};

export const ayodhyaContact: CabServiceData = {
  serviceType: 'contact', city: 'Ayodhya',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['24/7 Available', 'Instant booking'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('cab contact', 'Ayodhya'),
  seo: { title: 'Ayodhya Cab Contact Number | Book Taxi | Tirupati Travel', description: 'Ayodhya cab contact number: 8726124680. Book taxi 24/7.', canonical: `${BASE}/ayodhya/ayodhya-cab-contact-number` },
};

export const ayodhyaTaxiFare: CabServiceData = {
  serviceType: 'fare', city: 'Ayodhya',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['Transparent pricing', 'No hidden charges'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('taxi fare', 'Ayodhya'),
  seo: { title: 'Taxi Fare Ayodhya | Cab Rate List 2025 | Tirupati Travel', description: 'Check taxi fare in Ayodhya. Complete rate list. Call 8726124680.', canonical: `${BASE}/ayodhya/taxi-fare-ayodhya` },
};

export const ayodhyaLocalSightseeing: CabServiceData = {
  serviceType: 'local', city: 'Ayodhya',
  pricing: { sedan: 1800, innova: 2800, ertiga: 2300 },
  inclusions: ['AC Cab', '8 hrs / 80 km', 'All major temples & ghats'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('local sightseeing cab', 'Ayodhya'),
  seo: { title: 'Ayodhya Local Sightseeing Cab | City Tour Taxi | Tirupati Travel', description: 'Book local sightseeing cab in Ayodhya. Ram Mandir, all temples & ghats. Call 8726124680.', canonical: `${BASE}/ayodhya/ayodhya-local-sightseeing-cab` },
};

// ── ALLAHABAD ─────────────────────────────────────────────────────────────
export const allahabadCabService: CabServiceData = {
  serviceType: 'local', city: 'Allahabad',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['AC Cab', 'Professional Driver', 'Local & outstation', '24/7 Service'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('cab service', 'Allahabad'),
  seo: { title: 'Cab Service in Allahabad Prayagraj | Taxi Booking | Tirupati Travel', description: 'Book cab service in Allahabad/Prayagraj. Best rates for local & outstation. Call 8726124680.', canonical: `${BASE}/allahabad/cab-service-in-allahabad` },
};

export const allahabadCallTaxi: CabServiceData = {
  serviceType: 'call-taxi', city: 'Allahabad',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['AC Cab', '24/7 Available', 'Professional Driver'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('call taxi', 'Allahabad'),
  seo: { title: 'Call Taxi in Allahabad | On-Call Cab Service | Tirupati Travel', description: 'Book call taxi in Allahabad. 24/7 on-call cab service. Call 8726124680.', canonical: `${BASE}/allahabad/call-taxi-in-allahabad` },
};

export const allahabadDrop: CabServiceData = {
  serviceType: 'drop', city: 'Allahabad',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['AC Cab', 'One-way drop', 'Professional Driver'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('drop taxi', 'Allahabad'),
  seo: { title: 'Drop Taxi Service Allahabad | One Way Drop Cab | Tirupati Travel', description: 'Book drop taxi service in Allahabad. Call 8726124680.', canonical: `${BASE}/allahabad/drop-taxi-service-allahabad` },
};

export const allahabadFullDay: CabServiceData = {
  serviceType: 'full-day', city: 'Allahabad',
  pricing: { sedan: 1800, innova: 2800, ertiga: 2300 },
  inclusions: ['AC Cab', '8 Hours / 80 km', 'Sangam & all sightseeing'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('full day cab', 'Allahabad'),
  seo: { title: 'Full Day Cab in Allahabad | 8 Hour Taxi | Tirupati Travel', description: 'Book full day cab in Allahabad. 8 hrs / 80 km. Sangam & all sightseeing. Call 8726124680.', canonical: `${BASE}/allahabad/full-day-cab-in-allahabad` },
};

export const allahabadHalfDay: CabServiceData = {
  serviceType: 'half-day', city: 'Allahabad',
  pricing: { sedan: 1000, innova: 1600, ertiga: 1300 },
  inclusions: ['AC Cab', '4 Hours / 40 km'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('half day cab', 'Allahabad'),
  seo: { title: 'Half Day Cab in Allahabad | 4 Hour Taxi | Tirupati Travel', description: 'Book half day cab in Allahabad. 4 hrs / 40 km. Call 8726124680.', canonical: `${BASE}/allahabad/half-day-cab-in-allahabad` },
};

export const allahabadOneWay: CabServiceData = {
  serviceType: 'one-way', city: 'Allahabad',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['AC Cab', 'One-way fare', 'Professional Driver'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('one way cab', 'Allahabad'),
  seo: { title: 'One Way Cab in Allahabad | One Way Taxi | Tirupati Travel', description: 'Book one way cab from Allahabad. No return fare. Call 8726124680.', canonical: `${BASE}/allahabad/one-way-cab-in-allahabad` },
};

export const allahabadRoundTrip: CabServiceData = {
  serviceType: 'round-trip', city: 'Allahabad',
  pricing: { sedan: 2000, innova: 3100, ertiga: 2600 },
  inclusions: ['AC Cab', 'Both way fare', 'Professional Driver'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('round trip cab', 'Allahabad'),
  seo: { title: 'Round Trip Cab Allahabad | Return Taxi | Tirupati Travel', description: 'Book round trip cab from Allahabad. Best rates. Call 8726124680.', canonical: `${BASE}/allahabad/round-trip-cab-allahabad` },
};

export const allahabadCorporate: CabServiceData = {
  serviceType: 'corporate', city: 'Allahabad',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['AC Cab', 'GST Invoice', 'Professional Driver', 'Monthly billing'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('corporate cab', 'Allahabad'),
  seo: { title: 'Corporate Cab Service Allahabad | Employee Transport | Tirupati Travel', description: 'Book corporate cab service in Allahabad. Reliable transport, GST invoice. Call 8726124680.', canonical: `${BASE}/allahabad/corporate-cab-service-allahabad` },
};

export const allahabadTaxiFare: CabServiceData = {
  serviceType: 'fare', city: 'Allahabad',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['Transparent pricing', 'No hidden charges'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('taxi fare', 'Allahabad'),
  seo: { title: 'Taxi Fare Allahabad | Cab Rate List 2025 | Tirupati Travel', description: 'Check taxi fare in Allahabad. Complete rate list. Call 8726124680.', canonical: `${BASE}/allahabad/taxi-fare-allahabad` },
};

export const allahabadAgency: CabServiceData = {
  serviceType: 'agency', city: 'Allahabad',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['Tour packages', 'Cab booking', 'Sangam tours'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('travel agency', 'Allahabad'),
  seo: { title: 'Travel Agency in Allahabad | Tour Operator | Tirupati Travel', description: 'Best travel agency in Allahabad. Tour packages & cab booking. Call 8726124680.', canonical: `${BASE}/allahabad/travel-agency-in-allahabad` },
};

export const allahabadContact: CabServiceData = {
  serviceType: 'contact', city: 'Allahabad',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['24/7 Available', 'Instant booking'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('cab contact', 'Allahabad'),
  seo: { title: 'Allahabad Cab Contact Number | Book Taxi | Tirupati Travel', description: 'Allahabad cab contact number: 8726124680. Book taxi 24/7.', canonical: `${BASE}/allahabad/allahabad-cab-contact-number` },
};

// ── LUCKNOW ───────────────────────────────────────────────────────────────
export const lucknowOutstation: CabServiceData = {
  serviceType: 'outstation', city: 'Lucknow',
  pricing: { sedan: 1050, innova: 1650, ertiga: 1375 },
  inclusions: ['AC Cab', 'Professional Driver', 'Fuel included', 'One-way & round trip'],
  howItWorks: defaultHowItWorks,
  faqs: defaultFaqs('outstation cab', 'Lucknow'),
  seo: { title: 'Outstation Cab in Lucknow | Outstation Taxi | Tirupati Travel', description: 'Book outstation cab from Lucknow to Varanasi, Ayodhya, Delhi & more. Call 8726124680.', canonical: `${BASE}/lucknow/outstation-cab-in-lucknow` },
};