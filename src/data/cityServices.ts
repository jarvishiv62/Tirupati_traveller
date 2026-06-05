// src/data/cityServices.ts
// Single source of truth for ALL city cab service page data.
// Maps to CabServiceTemplate and LocalServiceTemplate.
//
// Structure:
//   [city][ServiceType] — e.g. varanasiOneWay, ayodhyaFullDay
//
// Chunk 2 seeded: varanasiOneWay, varanasiRoundTrip, varanasiFullDay,
//                 varanasiHalfDay, varanasiCallTaxi, varanasiDropTaxi
// Chunk 5 adds:   varanasiTouristCab (missing from Chunk 2)
//                 all Ayodhya services
//                 all Allahabad services
//                 Lucknow outstation
//                 all LocalService entries (sightseeing + corporate)
//
// TODO: FUTURE — replace with db.cityService.findMany() when Chunk 10 DB is active

import type { CabServiceData } from '@/components/templates/CabServiceTemplate';
import type { LocalServiceData } from '@/components/templates/LocalServiceTemplate';

// Shared vehicle references — imported from vehicles.ts in real usage.
// Listed inline here as minimal stubs so this file is self-contained.
// VehicleCard in the template will pull full data from vehicles.ts.
const VARANASI_VEHICLES = ['swift-dzire', 'toyota-etios', 'ertiga', 'innova-crysta'];
const AYODHYA_VEHICLES = ['swift-dzire', 'toyota-etios', 'ertiga', 'innova-crysta'];
const ALLAHABAD_VEHICLES = ['swift-dzire', 'toyota-etios', 'ertiga', 'innova-crysta'];
const LUCKNOW_VEHICLES = ['swift-dzire', 'innova-crysta', 'ertiga', 'luxury-tempo-traveller'];

// ─────────────────────────────────────────────────────────────────────────────
// VARANASI CAB SERVICES
// ─────────────────────────────────────────────────────────────────────────────

export const varanasiOneWay: CabServiceData = {
  serviceType: 'one-way',
  city: 'Varanasi',
  citySlug: 'varanasi',
  heroTagline:
    'Book a one-way cab from Varanasi to any destination across UP and Bihar. Only pay for the journey you take — no return fare charged.',
  pricing: { sedan: 2000, ertiga: 2800, innova: 3400 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 2000, priceLabel: 'one-way', features: ['AC', 'GPS', 'Charging port'] },
    { vehicle: 'Toyota Etios', category: 'Sedan (4 seats)', price: 2100, priceLabel: 'one-way', features: ['AC', 'GPS', 'Large boot'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 2800, priceLabel: 'one-way', features: ['AC', 'GPS', '3-row seating'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 3400, priceLabel: 'one-way', features: ['Premium AC', 'GPS', 'Recliners'] },
  ],
  inclusions: [
    'AC cab with professional driver',
    'Fuel charges included',
    'Driver allowance',
    'GST invoice on request',
    'Free cancellation up to 2 hrs before pickup',
  ],
  howItWorks: [
    { step: 1, title: 'Book Your Cab', desc: 'Call or WhatsApp with pickup location, destination and travel date.' },
    { step: 2, title: 'Driver Assigned', desc: 'We confirm instantly and share driver details 2–3 hrs before departure.' },
    { step: 3, title: 'Travel Comfortably', desc: 'Driver arrives on time. Clean AC cab, no hidden charges.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Round Trip Cab Varanasi', href: '/varanasi/round-trip-cab-varanasi' },
    { label: 'Full Day Taxi Varanasi', href: '/varanasi/full-day-taxi-in-varanasi' },
    { label: 'Innova on Rent Varanasi', href: '/varanasi/innova-crysta-on-rent-in-varanasi' },
    { label: 'Varanasi to Ayodhya Taxi', href: '/varanasi/varanasi-to-ayodhya-taxi' },
    { label: 'Varanasi Airport Taxi', href: '/varanasi/varanasi-airport-taxi' },
  ],
  faqs: [
    { q: 'What is a one-way cab from Varanasi?', a: 'A one-way cab is a drop service from Varanasi to your destination. You only pay for the one-way journey — we absorb the driver return cost.' },
    { q: 'Is the pricing fixed or per km?', a: 'For outstation one-way trips we offer fixed pricing. For shorter local drops it may be per km. We clarify at booking.' },
    { q: 'Can I book a one-way cab for an early morning departure?', a: 'Yes. We are available 24/7 including early morning pickups from 3 AM or 4 AM for trains and flights.' },
  ],
  seo: {
    title: 'One Way Cab in Varanasi | One-Way Taxi Booking | Tirupati Travel',
    description: 'Book affordable one-way cab from Varanasi. Sedan from ₹2,000. AC taxi, verified driver, no hidden charges. 24/7 available.',
    canonical: 'https://tirupatitravel.in/varanasi/one-way-cab-in-varanasi',
  },
};

export const varanasiRoundTrip: CabServiceData = {
  serviceType: 'round-trip',
  city: 'Varanasi',
  citySlug: 'varanasi',
  heroTagline:
    'Book a round-trip cab from Varanasi — the same driver takes you there and brings you back. No hassle of booking two separate cabs.',
  pricing: { sedan: 3500, ertiga: 5000, innova: 6000 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 3500, priceLabel: 'round trip', features: ['AC', 'GPS', 'Driver waits'] },
    { vehicle: 'Toyota Etios', category: 'Sedan (4 seats)', price: 3700, priceLabel: 'round trip', features: ['AC', 'GPS', 'Driver waits'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 5000, priceLabel: 'round trip', features: ['AC', 'GPS', '3-row seating'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 6000, priceLabel: 'round trip', features: ['Premium AC', 'GPS', 'Recliners'] },
  ],
  inclusions: [
    'AC cab with professional driver',
    'Both onward and return journey',
    'Driver allowance and fuel',
    'Waiting time up to 8 hrs at destination',
    'GST invoice on request',
  ],
  howItWorks: [
    { step: 1, title: 'Book Round Trip', desc: 'Share your travel dates, pickup, destination and expected return time.' },
    { step: 2, title: 'Driver Waits for You', desc: 'Your driver waits at destination for up to the agreed time.' },
    { step: 3, title: 'Return in Comfort', desc: 'Driver brings you back safely. No separate return booking needed.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'One Way Cab Varanasi', href: '/varanasi/one-way-cab-in-varanasi' },
    { label: 'Full Day Taxi Varanasi', href: '/varanasi/full-day-taxi-in-varanasi' },
    { label: 'Varanasi Tour Packages', href: '/varanasi/varanasi-tour-packages' },
  ],
  faqs: [
    { q: 'Is a round-trip cab cheaper than two one-ways?', a: 'Yes. Our round-trip fares are priced lower than booking two separate one-way cabs.' },
    { q: 'How long will the driver wait at the destination?', a: 'Standard waiting time is up to 8 hours. Extended waiting is charged at ₹50–100/hr depending on vehicle.' },
  ],
  seo: {
    title: 'Round Trip Cab Varanasi | Return Taxi Booking | Tirupati Travel',
    description: 'Book round trip cab from Varanasi. Sedan from ₹3,500. Driver waits up to 8 hrs. AC taxi, all-inclusive pricing.',
    canonical: 'https://tirupatitravel.in/varanasi/round-trip-cab-varanasi',
  },
};

export const varanasiFullDay: CabServiceData = {
  serviceType: 'full-day',
  city: 'Varanasi',
  citySlug: 'varanasi',
  heroTagline:
    'Explore Varanasi at your own pace with a full-day taxi. 12 hours, 120 km — cover all the ghats, temples, and Sarnath in one comfortable journey.',
  pricing: { sedan: 2500, ertiga: 3500, innova: 4200 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 2500, priceLabel: '12 hrs / 120 km', features: ['AC', 'GPS'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 3500, priceLabel: '12 hrs / 120 km', features: ['AC', 'GPS', '3-row seating'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 4200, priceLabel: '12 hrs / 120 km', features: ['Premium AC', 'GPS', 'Recliners'] },
  ],
  inclusions: [
    '12 hrs / 120 km package',
    'AC cab with professional driver',
    'Fuel charges included',
    'Driver allowance',
    'All major Varanasi ghats and temples covered',
  ],
  howItWorks: [
    { step: 1, title: 'Book the Day', desc: 'Tell us your preferred date — we assign a knowledgeable local driver.' },
    { step: 2, title: 'Start Your Tour', desc: 'Driver picks you up at the agreed time, ready for a full day.' },
    { step: 3, title: 'Visit at Your Pace', desc: 'You decide the stops and timing. Driver is with you for the full 12 hours.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Half Day Taxi Varanasi', href: '/varanasi/half-day-taxi-in-varanasi' },
    { label: 'Tourist Cab Varanasi', href: '/varanasi/tourist-cab-varanasi' },
    { label: 'Places to Visit in Varanasi', href: '/varanasi/places-to-visit-in-varanasi' },
    { label: 'Varanasi Local Sightseeing', href: '/varanasi/varanasi-local-sightseeing-cab' },
  ],
  faqs: [
    { q: 'What is covered in a full-day taxi in Varanasi?', a: 'Our full-day package covers 12 hours and 120 km — ideal for all major ghats, Kashi Vishwanath, Kal Bhairav, and Sarnath.' },
    { q: 'Can I extend the full-day package?', a: 'Yes. Additional hours are charged at ₹200/hr and extra km at the standard per-km rate.' },
  ],
  seo: {
    title: 'Full Day Taxi in Varanasi | 12 Hr Cab Package | Tirupati Travel',
    description: 'Book full-day taxi in Varanasi for ₹2,500. 12 hrs / 120 km. Covers ghats, Kashi Vishwanath, Sarnath. AC cab with local driver.',
    canonical: 'https://tirupatitravel.in/varanasi/full-day-taxi-in-varanasi',
  },
};

export const varanasiHalfDay: CabServiceData = {
  serviceType: 'half-day',
  city: 'Varanasi',
  citySlug: 'varanasi',
  heroTagline:
    'Short on time? Our half-day taxi package covers Varanasi\'s highlights in 6 hours — perfect for a quick pilgrimage visit between trains.',
  pricing: { sedan: 1500, ertiga: 2000, innova: 2500 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 1500, priceLabel: '6 hrs / 60 km', features: ['AC', 'GPS'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 2000, priceLabel: '6 hrs / 60 km', features: ['AC', 'GPS'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 2500, priceLabel: '6 hrs / 60 km', features: ['Premium AC', 'GPS'] },
  ],
  inclusions: [
    '6 hrs / 60 km package',
    'AC cab with professional driver',
    'Fuel included',
    'Driver allowance',
  ],
  howItWorks: [
    { step: 1, title: 'Choose Your Slot', desc: 'Morning (6am–12pm) or afternoon (12pm–6pm). Tell us your preference.' },
    { step: 2, title: 'Driver Arrives on Time', desc: 'Punctual local driver familiar with Varanasi routes.' },
    { step: 3, title: 'Cover the Highlights', desc: '6 hours covers major ghats, Kashi Vishwanath, and Assi Ghat.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Full Day Taxi Varanasi', href: '/varanasi/full-day-taxi-in-varanasi' },
    { label: 'Varanasi Local Sightseeing', href: '/varanasi/varanasi-local-sightseeing-cab' },
    { label: 'Places to Visit in Varanasi', href: '/varanasi/places-to-visit-in-varanasi' },
  ],
  faqs: [
    { q: 'What can I cover in a half-day taxi in Varanasi?', a: 'In 6 hours you can visit Dashashwamedh Ghat, Kashi Vishwanath Temple, Kal Bhairav, and Assi Ghat comfortably.' },
    { q: 'Is morning or evening better for a half-day tour?', a: 'Morning is ideal for sunrise boat ride + darshan. Evenings are great for Ganga Aarti at Dashashwamedh Ghat.' },
  ],
  seo: {
    title: 'Half Day Taxi in Varanasi | 6 Hr Cab Package | Tirupati Travel',
    description: 'Book half-day taxi in Varanasi from ₹1,500. 6 hrs / 60 km. Cover ghats and temples. Morning and evening slots.',
    canonical: 'https://tirupatitravel.in/varanasi/half-day-taxi-in-varanasi',
  },
};

export const varanasiCallTaxi: CabServiceData = {
  serviceType: 'call-taxi',
  city: 'Varanasi',
  citySlug: 'varanasi',
  heroTagline:
    'Need a cab right now in Varanasi? Call or WhatsApp us — we dispatch the nearest driver immediately, available 24/7.',
  pricing: { sedan: 300, ertiga: 450, innova: 600 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 300, priceLabel: 'minimum 5 km', features: ['AC', 'Instant dispatch'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 450, priceLabel: 'minimum 5 km', features: ['AC', 'GPS'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 600, priceLabel: 'minimum 5 km', features: ['Premium AC', 'GPS'] },
  ],
  inclusions: [
    'Minimum 5 km booking',
    'AC cab on demand',
    'Available 24/7',
    'Short-notice pickup within 30 minutes',
    'Metered / fixed fare by destination',
  ],
  howItWorks: [
    { step: 1, title: 'Call or WhatsApp', desc: 'Contact us on 8726124680. Share your location and destination.' },
    { step: 2, title: 'Cab Dispatched', desc: 'We dispatch nearest available driver. Typical arrival: 15–30 minutes.' },
    { step: 3, title: 'Pay & Go', desc: 'Fixed fare agreed before trip. No meter surprises. Pay on arrival.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Drop Taxi Varanasi', href: '/varanasi/drop-taxi-service-varanasi' },
    { label: 'One Way Cab Varanasi', href: '/varanasi/one-way-cab-in-varanasi' },
    { label: 'Varanasi Airport Taxi', href: '/varanasi/varanasi-airport-taxi' },
  ],
  faqs: [
    { q: 'How quickly can I get a call taxi in Varanasi?', a: 'Typically within 15–30 minutes depending on your area and time of day.' },
    { q: 'Is call taxi available at night in Varanasi?', a: 'Yes, we operate 24/7 including late nights and early morning pickups.' },
  ],
  seo: {
    title: 'Call Taxi in Varanasi | On-Demand Cab Service | Tirupati Travel',
    description: 'Instant call taxi in Varanasi. AC cab 24/7. Pickup in 30 mins. Fixed fares, no hidden charges. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/varanasi/call-taxi-in-varanasi',
  },
};

export const varanasiDropTaxi: CabServiceData = {
  serviceType: 'drop',
  city: 'Varanasi',
  citySlug: 'varanasi',
  heroTagline:
    'Reliable point-to-point drop service in Varanasi — station drops, airport drops, and hotel transfers. On-time, every time.',
  pricing: { sedan: 500, ertiga: 700, innova: 900 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 500, priceLabel: 'city drop', features: ['AC', 'On-time', 'Luggage help'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 700, priceLabel: 'city drop', features: ['AC', 'GPS', 'Extra luggage space'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 900, priceLabel: 'city drop', features: ['Premium AC', 'GPS'] },
  ],
  inclusions: [
    'Point-to-point drop service',
    'Railway station and airport drops',
    'AC cab with driver',
    'Luggage assistance',
    '24/7 availability',
  ],
  howItWorks: [
    { step: 1, title: 'Book in Advance', desc: 'Call or WhatsApp with pickup location, drop destination and time.' },
    { step: 2, title: 'On-Time Pickup', desc: 'Driver arrives 10 minutes early — especially for train and flight drops.' },
    { step: 3, title: 'Hassle-Free Drop', desc: 'Driver helps with luggage. You reach your destination on time.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Varanasi Airport Taxi', href: '/varanasi/varanasi-airport-taxi' },
    { label: 'Call Taxi Varanasi', href: '/varanasi/call-taxi-in-varanasi' },
    { label: 'One Way Cab Varanasi', href: '/varanasi/one-way-cab-in-varanasi' },
  ],
  faqs: [
    { q: 'Do you offer drop taxi to Varanasi railway station?', a: 'Yes. We cover Varanasi Junction, Manduadih (Banaras) station, and all city areas.' },
    { q: 'Is early morning drop service available?', a: 'Yes, 24/7 including 3am or 4am drops for early morning trains and flights.' },
  ],
  seo: {
    title: 'Drop Taxi Service Varanasi | Station & Airport Drop | Tirupati Travel',
    description: 'Book drop taxi in Varanasi for station, airport or any destination. AC cab, on-time pickup. 24/7. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/varanasi/drop-taxi-service-varanasi',
  },
};

// ── Chunk 5 addition: tourist cab Varanasi ───────────────────────────────────
export const varanasiTouristCab: CabServiceData = {
  serviceType: 'tourist',
  city: 'Varanasi',
  citySlug: 'varanasi',
  heroTagline:
    'Explore Varanasi with a dedicated tourist cab — knowledgeable local driver, flexible itinerary, and comfortable AC vehicle for your pilgrimage.',
  pricing: { sedan: 2000, ertiga: 2800, innova: 3500 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 2000, priceLabel: 'per day', features: ['AC', 'GPS', 'Local guide knowledge'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 2800, priceLabel: 'per day', features: ['AC', 'GPS', '3-row seating'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 3500, priceLabel: 'per day', features: ['Premium AC', 'GPS', 'Recliners'] },
  ],
  inclusions: [
    'AC cab with experienced tourist driver',
    'Flexible itinerary — you choose the stops',
    'Fuel and driver allowance included',
    'Covers all major ghats, temples, and Sarnath',
    'Airport and station pickup/drop included if needed',
  ],
  howItWorks: [
    { step: 1, title: 'Share Your Itinerary', desc: 'Tell us which places you want to visit — ghats, temples, Sarnath, or custom stops.' },
    { step: 2, title: 'Driver Assigned', desc: 'We assign an experienced local driver with detailed Varanasi pilgrimage knowledge.' },
    { step: 3, title: 'Explore Freely', desc: 'Your driver accompanies you for the full day, adjusting pace as you wish.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Full Day Taxi Varanasi', href: '/varanasi/full-day-taxi-in-varanasi' },
    { label: 'Varanasi Local Sightseeing', href: '/varanasi/varanasi-local-sightseeing-cab' },
    { label: 'Places to Visit in Varanasi', href: '/varanasi/places-to-visit-in-varanasi' },
    { label: 'Varanasi Tour Packages', href: '/varanasi/varanasi-tour-packages' },
  ],
  faqs: [
    { q: 'What is a tourist cab in Varanasi?', a: 'A tourist cab is a dedicated cab with a local driver who knows all the major pilgrimage and tourist spots in Varanasi. You get a full day of flexible sightseeing.' },
    { q: 'Can the tourist cab cover Sarnath as well?', a: 'Yes. Sarnath is 12 km from central Varanasi and is covered in any full-day tourist cab package.' },
  ],
  seo: {
    title: 'Tourist Cab Varanasi | Sightseeing Taxi Booking | Tirupati Travel',
    description: 'Book a tourist cab in Varanasi for ₹2,000/day. Covers ghats, temples, Sarnath. Experienced local driver. Flexible itinerary. Call now.',
    canonical: 'https://tirupatitravel.in/varanasi/tourist-cab-varanasi',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// AYODHYA CAB SERVICES
// ─────────────────────────────────────────────────────────────────────────────

export const ayodhyaOneWay: CabServiceData = {
  serviceType: 'one-way',
  city: 'Ayodhya',
  citySlug: 'ayodhya',
  heroTagline:
    'Book a one-way cab from Ayodhya to Varanasi, Lucknow, Allahabad or anywhere in UP. Only pay for your journey — no return fare.',
  pricing: { sedan: 1800, ertiga: 2500, innova: 3200 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 1800, priceLabel: 'one-way', features: ['AC', 'GPS'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 2500, priceLabel: 'one-way', features: ['AC', 'GPS', '3-row seating'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 3200, priceLabel: 'one-way', features: ['Premium AC', 'GPS', 'Recliners'] },
  ],
  inclusions: [
    'AC cab with professional driver',
    'Fuel charges included',
    'Driver allowance',
    'GST invoice on request',
    'Free cancellation up to 2 hrs before pickup',
  ],
  howItWorks: [
    { step: 1, title: 'Book Your Cab', desc: 'Call or WhatsApp with pickup location, destination and travel date.' },
    { step: 2, title: 'Driver Assigned', desc: 'Instant confirmation. Driver details shared 2–3 hrs before departure.' },
    { step: 3, title: 'Travel Comfortably', desc: 'Driver arrives on time. Clean AC cab, no hidden charges.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Round Trip Cab Ayodhya', href: '/ayodhya/round-trip-cab-ayodhya' },
    { label: 'Ayodhya to Varanasi Taxi', href: '/ayodhya/ayodhya-to-varanasi-taxi' },
    { label: 'Innova Cabs in Ayodhya', href: '/ayodhya/innova-cabs-in-ayodhya' },
    { label: 'Ayodhya Tour Packages', href: '/ayodhya/ayodhya-tour-packages' },
  ],
  faqs: [
    { q: 'What is a one-way cab from Ayodhya?', a: 'You pay only for the one-way trip. No return charges. Ideal for travellers heading to Varanasi, Lucknow, or Allahabad.' },
    { q: 'Is early morning pickup available from Ayodhya?', a: 'Yes, 24/7 service including 4 AM pickups for early trains from Faizabad Junction.' },
  ],
  seo: {
    title: 'One Way Cab in Ayodhya | One-Way Taxi Booking | Tirupati Travel',
    description: 'Book one-way cab from Ayodhya. Sedan from ₹1,800. AC taxi, verified driver. 24/7 available. Call or WhatsApp.',
    canonical: 'https://tirupatitravel.in/ayodhya/one-way-cab-in-ayodhya',
  },
};

export const ayodhyaRoundTrip: CabServiceData = {
  serviceType: 'round-trip',
  city: 'Ayodhya',
  citySlug: 'ayodhya',
  heroTagline:
    'Visit the Ram Janmabhoomi and other sacred sites in Ayodhya with a round-trip cab — driver waits while you complete your darshan.',
  pricing: { sedan: 3200, ertiga: 4500, innova: 5500 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 3200, priceLabel: 'round trip', features: ['AC', 'GPS', 'Driver waits'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 4500, priceLabel: 'round trip', features: ['AC', 'GPS'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 5500, priceLabel: 'round trip', features: ['Premium AC', 'GPS'] },
  ],
  inclusions: [
    'Both onward and return journey',
    'AC cab with professional driver',
    'Waiting time up to 8 hrs at destination',
    'Fuel and driver allowance included',
    'GST invoice on request',
  ],
  howItWorks: [
    { step: 1, title: 'Book Round Trip', desc: 'Share travel dates, pickup, destination and expected return time.' },
    { step: 2, title: 'Driver Waits', desc: 'Driver waits at destination for up to the agreed waiting time.' },
    { step: 3, title: 'Return Comfortably', desc: 'Same driver brings you back. No separate return booking needed.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'One Way Cab Ayodhya', href: '/ayodhya/one-way-cab-in-ayodhya' },
    { label: 'Ayodhya Tour Packages', href: '/ayodhya/ayodhya-tour-packages' },
    { label: 'Ayodhya Darshan Package', href: '/ayodhya/ayodhya-darshan-tour-package' },
  ],
  faqs: [
    { q: 'Is a round-trip cab from Varanasi to Ayodhya available?', a: 'Yes. We offer round-trip service from Varanasi to Ayodhya (200 km). Driver waits for your darshan and brings you back the same day.' },
  ],
  seo: {
    title: 'Round Trip Cab Ayodhya | Return Taxi Booking | Tirupati Travel',
    description: 'Book round trip cab from Ayodhya. Sedan from ₹3,200. Driver waits up to 8 hrs. Ideal for Ram Mandir darshan visits.',
    canonical: 'https://tirupatitravel.in/ayodhya/round-trip-cab-ayodhya',
  },
};

export const ayodhyaFullDay: CabServiceData = {
  serviceType: 'full-day',
  city: 'Ayodhya',
  citySlug: 'ayodhya',
  heroTagline:
    'Explore all of Ayodhya\'s sacred sites with a full-day cab — Ram Mandir, Hanuman Garhi, Kanak Bhavan, Sarayu Ghat and more.',
  pricing: { sedan: 2200, ertiga: 3000, innova: 3800 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 2200, priceLabel: '12 hrs / 120 km', features: ['AC', 'GPS'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 3000, priceLabel: '12 hrs / 120 km', features: ['AC', 'GPS'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 3800, priceLabel: '12 hrs / 120 km', features: ['Premium AC', 'GPS'] },
  ],
  inclusions: [
    '12 hrs / 120 km package',
    'AC cab with local driver',
    'Fuel and driver allowance included',
    'Covers Ram Mandir, Hanuman Garhi, Sarayu Ghat',
  ],
  howItWorks: [
    { step: 1, title: 'Book the Day', desc: 'Tell us your preferred date — we assign a knowledgeable Ayodhya driver.' },
    { step: 2, title: 'Start Your Darshan', desc: 'Driver picks you up and covers all major temples at your pace.' },
    { step: 3, title: 'Visit Freely', desc: 'You decide the stops and timing across 12 hours.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Half Day Cab Ayodhya', href: '/ayodhya/half-day-cab-in-ayodhya' },
    { label: 'Ayodhya Darshan Package', href: '/ayodhya/ayodhya-darshan-tour-package' },
    { label: 'Ayodhya Local Sightseeing', href: '/ayodhya/ayodhya-local-sightseeing-cab' },
  ],
  faqs: [
    { q: 'How many temples can I visit in Ayodhya in one day?', a: 'In a full day you can cover Ram Janmabhoomi, Hanuman Garhi, Kanak Bhavan, Nageshwarnath, Sita ki Rasoi, Sarayu Ghat, and Guptar Ghat comfortably.' },
  ],
  seo: {
    title: 'Full Day Cab in Ayodhya | 12 Hr Taxi Package | Tirupati Travel',
    description: 'Book full-day cab in Ayodhya for ₹2,200. 12 hrs / 120 km. Covers Ram Mandir, Hanuman Garhi, Sarayu Ghat. AC cab.',
    canonical: 'https://tirupatitravel.in/ayodhya/full-day-cab-in-ayodhya',
  },
};

export const ayodhyaHalfDay: CabServiceData = {
  serviceType: 'half-day',
  city: 'Ayodhya',
  citySlug: 'ayodhya',
  heroTagline:
    'Cover the key pilgrim sites of Ayodhya in 6 hours — ideal for travellers with limited time between trains or buses.',
  pricing: { sedan: 1200, ertiga: 1700, innova: 2200 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 1200, priceLabel: '6 hrs / 60 km', features: ['AC', 'GPS'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 1700, priceLabel: '6 hrs / 60 km', features: ['AC', 'GPS'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 2200, priceLabel: '6 hrs / 60 km', features: ['Premium AC', 'GPS'] },
  ],
  inclusions: [
    '6 hrs / 60 km package',
    'AC cab with driver',
    'Fuel and driver allowance included',
  ],
  howItWorks: [
    { step: 1, title: 'Choose Your Slot', desc: 'Morning or afternoon — tell us your preferred time slot.' },
    { step: 2, title: 'Driver Arrives on Time', desc: 'Punctual driver familiar with Ayodhya routes.' },
    { step: 3, title: 'Key Darshans Done', desc: 'Ram Mandir, Hanuman Garhi, and Sarayu Ghat in 6 hours.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Full Day Cab Ayodhya', href: '/ayodhya/full-day-cab-in-ayodhya' },
    { label: 'Ayodhya Darshan Package', href: '/ayodhya/ayodhya-darshan-tour-package' },
  ],
  faqs: [
    { q: 'What can I cover in a half-day cab in Ayodhya?', a: 'In 6 hours you can comfortably visit Ram Janmabhoomi, Hanuman Garhi, Kanak Bhavan, and Sarayu Aarti (evening slot).' },
  ],
  seo: {
    title: 'Half Day Cab in Ayodhya | 6 Hr Taxi Package | Tirupati Travel',
    description: 'Book half-day cab in Ayodhya from ₹1,200. 6 hrs / 60 km. Ram Mandir, Hanuman Garhi darshan. AC cab.',
    canonical: 'https://tirupatitravel.in/ayodhya/half-day-cab-in-ayodhya',
  },
};

export const ayodhyaCallTaxi: CabServiceData = {
  serviceType: 'call-taxi',
  city: 'Ayodhya',
  citySlug: 'ayodhya',
  heroTagline:
    'Need an instant cab in Ayodhya? Call us — we dispatch a driver within 30 minutes, day or night.',
  pricing: { sedan: 250, ertiga: 380, innova: 500 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 250, priceLabel: 'minimum 5 km', features: ['AC', 'Instant dispatch'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 380, priceLabel: 'minimum 5 km', features: ['AC', 'GPS'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 500, priceLabel: 'minimum 5 km', features: ['Premium AC'] },
  ],
  inclusions: ['Minimum 5 km booking', 'AC cab on demand', '24/7 availability', 'Pickup within 30 minutes'],
  howItWorks: [
    { step: 1, title: 'Call or WhatsApp', desc: 'Contact us on 8726124680 with your location and destination.' },
    { step: 2, title: 'Cab Dispatched', desc: 'Nearest available driver dispatched immediately.' },
    { step: 3, title: 'Pay & Go', desc: 'Fixed fare agreed before trip. No hidden charges.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Drop Taxi Ayodhya', href: '/ayodhya/drop-taxi-service-ayodhya' },
    { label: 'Ayodhya Airport Taxi', href: '/ayodhya/ayodhya-airport-taxi' },
  ],
  faqs: [
    { q: 'Is call taxi available at night in Ayodhya?', a: 'Yes, 24/7 including late nights and early mornings for trains at Faizabad Junction.' },
  ],
  seo: {
    title: 'Call Taxi in Ayodhya | On-Demand Cab Service | Tirupati Travel',
    description: 'Instant call taxi in Ayodhya. AC cab 24/7. Pickup in 30 mins. Fixed fares. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/ayodhya/call-taxi-in-ayodhya',
  },
};

export const ayodhyaDropTaxi: CabServiceData = {
  serviceType: 'drop',
  city: 'Ayodhya',
  citySlug: 'ayodhya',
  heroTagline:
    'Reliable drop taxi service in Ayodhya — station drops, pilgrim guesthouse transfers, and inter-city drops from Ram ki Paidi to Faizabad Junction.',
  pricing: { sedan: 400, ertiga: 600, innova: 800 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 400, priceLabel: 'city drop', features: ['AC', 'On-time'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 600, priceLabel: 'city drop', features: ['AC', 'GPS'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 800, priceLabel: 'city drop', features: ['Premium AC'] },
  ],
  inclusions: ['Point-to-point drop', 'Station and airport drops', 'AC cab', 'Luggage assistance', '24/7'],
  howItWorks: [
    { step: 1, title: 'Book in Advance', desc: 'Share pickup location, destination and time via call or WhatsApp.' },
    { step: 2, title: 'On-Time Pickup', desc: 'Driver arrives 10 minutes early for trains and flights.' },
    { step: 3, title: 'Safe Drop', desc: 'Luggage assistance provided. Punctual drop guaranteed.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Ayodhya Airport Taxi', href: '/ayodhya/ayodhya-airport-taxi' },
    { label: 'Call Taxi Ayodhya', href: '/ayodhya/call-taxi-in-ayodhya' },
  ],
  faqs: [
    { q: 'Do you drop at Faizabad railway station?', a: 'Yes. We cover Faizabad Junction, Ayodhya Cantt station, and the new Ayodhya Dham railway station.' },
  ],
  seo: {
    title: 'Drop Taxi Service Ayodhya | Station & Transfer | Tirupati Travel',
    description: 'Book drop taxi in Ayodhya. Station drops, guesthouse transfers. AC cab 24/7. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/ayodhya/drop-taxi-service-ayodhya',
  },
};

export const ayodhyaTouristCab: CabServiceData = {
  serviceType: 'tourist',
  city: 'Ayodhya',
  citySlug: 'ayodhya',
  heroTagline:
    'Explore Ayodhya\'s sacred sites with a dedicated tourist cab and experienced local driver.',
  pricing: { sedan: 1800, ertiga: 2500, innova: 3200 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 1800, priceLabel: 'per day', features: ['AC', 'GPS', 'Local knowledge'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 2500, priceLabel: 'per day', features: ['AC', 'GPS'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 3200, priceLabel: 'per day', features: ['Premium AC', 'GPS'] },
  ],
  inclusions: ['AC cab with local tourist driver', 'Flexible itinerary', 'Fuel and driver allowance', 'All major temples and ghats covered'],
  howItWorks: [
    { step: 1, title: 'Share Itinerary', desc: 'Tell us which sites you want to visit.' },
    { step: 2, title: 'Driver Assigned', desc: 'Local driver with Ayodhya pilgrimage knowledge.' },
    { step: 3, title: 'Explore Freely', desc: 'Full day at your own pace.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Ayodhya Darshan Package', href: '/ayodhya/ayodhya-darshan-tour-package' },
    { label: 'Ayodhya Local Sightseeing', href: '/ayodhya/ayodhya-local-sightseeing-cab' },
  ],
  faqs: [
    { q: 'Does the tourist cab in Ayodhya cover Guptar Ghat?', a: 'Yes. Our tourist cabs cover Guptar Ghat, Ram ki Paidi, Ram Janmabhoomi, Hanuman Garhi, and all major sites.' },
  ],
  seo: {
    title: 'Tourist Cab Ayodhya | Sightseeing Taxi | Tirupati Travel',
    description: 'Book tourist cab in Ayodhya from ₹1,800/day. Covers Ram Mandir, Hanuman Garhi, Sarayu Ghat. AC cab, local driver.',
    canonical: 'https://tirupatitravel.in/ayodhya/tourist-cab-ayodhya',
  },
};

export const ayodhyaOutstationCab: CabServiceData = {
  serviceType: 'outstation',
  city: 'Ayodhya',
  citySlug: 'ayodhya',
  heroTagline:
    'Book an outstation cab from Ayodhya to Varanasi, Lucknow, Allahabad, Delhi, and other cities with Tirupati Travel.',
  pricing: { sedan: 2500, ertiga: 3500, innova: 4500 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 2500, priceLabel: 'one-way', features: ['AC', 'GPS'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 3500, priceLabel: 'one-way', features: ['AC', 'GPS'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 4500, priceLabel: 'one-way', features: ['Premium AC', 'GPS'] },
  ],
  inclusions: ['AC cab for outstation journey', 'Fuel and driver allowance', 'Toll charged at actual', 'GST invoice on request'],
  howItWorks: [
    { step: 1, title: 'Book Your Route', desc: 'Tell us your origin, destination and travel date.' },
    { step: 2, title: 'Driver Assigned', desc: 'Experienced outstation driver confirmed instantly.' },
    { step: 3, title: 'Travel Comfortably', desc: 'Comfortable AC cab for the full journey.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Ayodhya to Varanasi Taxi', href: '/ayodhya/ayodhya-to-varanasi-taxi' },
    { label: 'Ayodhya to Lucknow Taxi', href: '/ayodhya/ayodhya-to-lucknow-taxi' },
    { label: 'One Way Cab Ayodhya', href: '/ayodhya/one-way-cab-in-ayodhya' },
  ],
  faqs: [
    { q: 'Which cities can I travel to from Ayodhya by outstation cab?', a: 'We cover Varanasi, Lucknow, Allahabad, Delhi, Gorakhpur, Kanpur, Agra, Patna, and all major destinations.' },
  ],
  seo: {
    title: 'Outstation Cab in Ayodhya | Intercity Taxi Booking | Tirupati Travel',
    description: 'Book outstation cab from Ayodhya. Sedan from ₹2,500. Varanasi, Lucknow, Delhi and more. AC taxi, verified driver.',
    canonical: 'https://tirupatitravel.in/ayodhya/outstation-cab-in-ayodhya',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ALLAHABAD (PRAYAGRAJ) CAB SERVICES
// ─────────────────────────────────────────────────────────────────────────────

export const allahabadCabService: CabServiceData = {
  serviceType: 'one-way',
  city: 'Allahabad',
  citySlug: 'allahabad',
  heroTagline:
    'Reliable cab service in Allahabad (Prayagraj) — outstation, local sightseeing, Sangam trips, and airport transfers.',
  pricing: { sedan: 1800, ertiga: 2500, innova: 3200 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 1800, priceLabel: 'starting fare', features: ['AC', 'GPS'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 2500, priceLabel: 'starting fare', features: ['AC', 'GPS'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 3200, priceLabel: 'starting fare', features: ['Premium AC', 'GPS'] },
  ],
  inclusions: ['AC cab with professional driver', 'Fuel included', 'Driver allowance', 'GST invoice on request'],
  howItWorks: [
    { step: 1, title: 'Book Your Cab', desc: 'Call or WhatsApp with pickup, destination, and date.' },
    { step: 2, title: 'Instant Confirmation', desc: 'We confirm and share driver details before departure.' },
    { step: 3, title: 'Travel Comfortably', desc: 'Clean AC cab, verified driver, no hidden charges.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'One Way Cab Allahabad', href: '/allahabad/one-way-cab-in-allahabad' },
    { label: 'Allahabad to Varanasi Taxi', href: '/allahabad/allahabad-to-varanasi-taxi' },
    { label: 'Allahabad Tour Packages', href: '/allahabad/allahabad-tour-packages' },
  ],
  faqs: [
    { q: 'Does Tirupati Travel operate cabs in Prayagraj (Allahabad)?', a: 'Yes. We operate full cab services in Allahabad / Prayagraj including local sightseeing, outstation, and airport transfers.' },
  ],
  seo: {
    title: 'Cab Service in Allahabad (Prayagraj) | Taxi Booking | Tirupati Travel',
    description: 'Book cab service in Allahabad. Sedan from ₹1,800. AC taxi, verified driver. Outstation, local, airport transfers. Call now.',
    canonical: 'https://tirupatitravel.in/allahabad/cab-service-in-allahabad',
  },
};

export const allahabadCallTaxi: CabServiceData = {
  serviceType: 'call-taxi',
  city: 'Allahabad',
  citySlug: 'allahabad',
  heroTagline: 'On-demand call taxi in Allahabad — available 24/7 with 30-minute dispatch.',
  pricing: { sedan: 250, ertiga: 380, innova: 500 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 250, priceLabel: 'min 5 km', features: ['AC', 'Instant'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 380, priceLabel: 'min 5 km', features: ['AC'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 500, priceLabel: 'min 5 km', features: ['Premium AC'] },
  ],
  inclusions: ['Minimum 5 km booking', 'AC cab 24/7', 'Pickup within 30 minutes', 'Fixed fare'],
  howItWorks: [
    { step: 1, title: 'Call or WhatsApp', desc: 'Share your location and destination.' },
    { step: 2, title: 'Driver Dispatched', desc: 'Nearest driver sent immediately.' },
    { step: 3, title: 'Pay & Go', desc: 'Fixed fare, no surprises.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Drop Taxi Allahabad', href: '/allahabad/drop-taxi-service-allahabad' },
    { label: 'One Way Cab Allahabad', href: '/allahabad/one-way-cab-in-allahabad' },
  ],
  faqs: [
    { q: 'Is call taxi available near Sangam in Allahabad?', a: 'Yes, we dispatch from all areas including Sangam, Civil Lines, Lukerganj, and Allahabad Junction.' },
  ],
  seo: {
    title: 'Call Taxi in Allahabad | On-Demand Cab | Tirupati Travel',
    description: 'Instant call taxi in Allahabad (Prayagraj). AC cab 24/7. 30-min dispatch. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/allahabad/call-taxi-in-allahabad',
  },
};

export const allahabadDropTaxi: CabServiceData = {
  serviceType: 'drop',
  city: 'Allahabad',
  citySlug: 'allahabad',
  heroTagline: 'Reliable drop taxi in Allahabad — station drops, hotel transfers, and outstation drops.',
  pricing: { sedan: 400, ertiga: 600, innova: 800 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 400, priceLabel: 'city drop', features: ['AC', 'On-time'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 600, priceLabel: 'city drop', features: ['AC'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 800, priceLabel: 'city drop', features: ['Premium AC'] },
  ],
  inclusions: ['Point-to-point drop', 'AC cab', 'Luggage assistance', '24/7'],
  howItWorks: [
    { step: 1, title: 'Book Advance', desc: 'Share pickup, destination and time.' },
    { step: 2, title: 'Punctual Pickup', desc: 'Driver arrives 10 minutes early.' },
    { step: 3, title: 'Safe Drop', desc: 'Luggage help, on-time every time.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Call Taxi Allahabad', href: '/allahabad/call-taxi-in-allahabad' },
    { label: 'Allahabad to Varanasi Taxi', href: '/allahabad/allahabad-to-varanasi-taxi' },
  ],
  faqs: [
    { q: 'Do you drop at Allahabad Junction?', a: 'Yes. We cover Allahabad Junction, Prayagraj Rambagh, Phaphamau, and Naini station.' },
  ],
  seo: {
    title: 'Drop Taxi Service Allahabad | Station Drop | Tirupati Travel',
    description: 'Book drop taxi in Allahabad. Station drops, hotel transfers. AC cab 24/7. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/allahabad/drop-taxi-service-allahabad',
  },
};

export const allahabadFullDay: CabServiceData = {
  serviceType: 'full-day',
  city: 'Allahabad',
  citySlug: 'allahabad',
  heroTagline: 'Explore Allahabad\'s holy sites — Sangam, Triveni Ghat, Anand Bhavan, and Hanuman Mandir — with a full-day cab.',
  pricing: { sedan: 2200, ertiga: 3000, innova: 3800 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 2200, priceLabel: '12 hrs / 120 km', features: ['AC', 'GPS'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 3000, priceLabel: '12 hrs / 120 km', features: ['AC', 'GPS'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 3800, priceLabel: '12 hrs / 120 km', features: ['Premium AC', 'GPS'] },
  ],
  inclusions: ['12 hrs / 120 km package', 'AC cab with local driver', 'Fuel and driver allowance'],
  howItWorks: [
    { step: 1, title: 'Book the Day', desc: 'Share your preferred date.' },
    { step: 2, title: 'Driver Picks You Up', desc: 'Local driver familiar with Allahabad pilgrimage routes.' },
    { step: 3, title: 'Visit All Sites', desc: 'Sangam, Triveni Ghat, Anand Bhavan and more in one day.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Half Day Cab Allahabad', href: '/allahabad/half-day-cab-in-allahabad' },
    { label: 'Places to Visit in Allahabad', href: '/allahabad/places-to-visit-in-allahabad' },
  ],
  faqs: [
    { q: 'Can the full-day cab cover Sangam and Anand Bhavan?', a: 'Yes, easily. Sangam, Triveni Ghat, Anand Bhavan, Khusro Bagh and Allahabad Fort are all within 15 km of each other.' },
  ],
  seo: {
    title: 'Full Day Cab in Allahabad | 12 Hr Taxi Package | Tirupati Travel',
    description: 'Book full-day cab in Allahabad for ₹2,200. 12 hrs / 120 km. Covers Sangam, Triveni Ghat, Anand Bhavan. AC cab.',
    canonical: 'https://tirupatitravel.in/allahabad/full-day-cab-in-allahabad',
  },
};

export const allahabadHalfDay: CabServiceData = {
  serviceType: 'half-day',
  city: 'Allahabad',
  citySlug: 'allahabad',
  heroTagline: 'Visit Sangam and the key sites of Allahabad in just 6 hours with a half-day cab.',
  pricing: { sedan: 1200, ertiga: 1700, innova: 2200 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 1200, priceLabel: '6 hrs / 60 km', features: ['AC', 'GPS'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 1700, priceLabel: '6 hrs / 60 km', features: ['AC', 'GPS'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 2200, priceLabel: '6 hrs / 60 km', features: ['Premium AC'] },
  ],
  inclusions: ['6 hrs / 60 km package', 'AC cab', 'Fuel and driver allowance'],
  howItWorks: [
    { step: 1, title: 'Choose Slot', desc: 'Morning or afternoon.' },
    { step: 2, title: 'Driver Arrives', desc: 'Punctual local driver.' },
    { step: 3, title: 'Key Sites Done', desc: 'Sangam, Triveni Ghat in 6 hours.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Full Day Cab Allahabad', href: '/allahabad/full-day-cab-in-allahabad' },
    { label: 'Allahabad Tour Packages', href: '/allahabad/allahabad-tour-packages' },
  ],
  faqs: [
    { q: 'Can I do a Sangam boat ride and half-day cab?', a: 'Yes. Our driver takes you to the Sangam boat ghat, waits while you do the boat ride, and continues with the sightseeing.' },
  ],
  seo: {
    title: 'Half Day Cab in Allahabad | 6 Hr Taxi Package | Tirupati Travel',
    description: 'Book half-day cab in Allahabad from ₹1,200. 6 hrs / 60 km. Sangam, Triveni Ghat visit. AC cab.',
    canonical: 'https://tirupatitravel.in/allahabad/half-day-cab-in-allahabad',
  },
};

export const allahabadOneWay: CabServiceData = {
  serviceType: 'one-way',
  city: 'Allahabad',
  citySlug: 'allahabad',
  heroTagline: 'Book a one-way cab from Allahabad to Varanasi, Lucknow, or beyond — pay only for your journey.',
  pricing: { sedan: 1800, ertiga: 2500, innova: 3200 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 1800, priceLabel: 'one-way', features: ['AC', 'GPS'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 2500, priceLabel: 'one-way', features: ['AC', 'GPS'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 3200, priceLabel: 'one-way', features: ['Premium AC'] },
  ],
  inclusions: ['AC cab', 'Fuel', 'Driver allowance', 'GST invoice on request'],
  howItWorks: [
    { step: 1, title: 'Book', desc: 'Call or WhatsApp with details.' },
    { step: 2, title: 'Confirmed', desc: 'Instant confirmation + driver details.' },
    { step: 3, title: 'Travel', desc: 'Clean AC cab, no hidden charges.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Allahabad to Varanasi Taxi', href: '/allahabad/allahabad-to-varanasi-taxi' },
    { label: 'Round Trip Cab Allahabad', href: '/allahabad/round-trip-cab-allahabad' },
  ],
  faqs: [
    { q: 'What is the one-way cab fare from Allahabad to Varanasi?', a: 'Starting from ₹1,800 for a sedan, ₹2,500 for Ertiga, and ₹3,200 for Innova Crysta.' },
  ],
  seo: {
    title: 'One Way Cab in Allahabad | One-Way Taxi | Tirupati Travel',
    description: 'One-way cab from Allahabad. Sedan from ₹1,800. AC taxi. Varanasi, Lucknow and all destinations covered.',
    canonical: 'https://tirupatitravel.in/allahabad/one-way-cab-in-allahabad',
  },
};

export const allahabadRoundTrip: CabServiceData = {
  serviceType: 'round-trip',
  city: 'Allahabad',
  citySlug: 'allahabad',
  heroTagline: 'Round-trip cab from Allahabad — driver waits while you complete your darshan or meetings.',
  pricing: { sedan: 3200, ertiga: 4500, innova: 5500 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 3200, priceLabel: 'round trip', features: ['AC', 'GPS', 'Driver waits'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 4500, priceLabel: 'round trip', features: ['AC', 'GPS'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 5500, priceLabel: 'round trip', features: ['Premium AC'] },
  ],
  inclusions: ['Both onward and return', 'AC cab', 'Waiting time up to 8 hrs', 'Fuel and driver allowance'],
  howItWorks: [
    { step: 1, title: 'Book Round Trip', desc: 'Share dates, pickup and return time.' },
    { step: 2, title: 'Driver Waits', desc: 'Up to 8 hours at destination.' },
    { step: 3, title: 'Return Safely', desc: 'Same driver brings you back.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'One Way Cab Allahabad', href: '/allahabad/one-way-cab-in-allahabad' },
    { label: 'Allahabad Tour Packages', href: '/allahabad/allahabad-tour-packages' },
  ],
  faqs: [
    { q: 'Is a round-trip cab from Allahabad to Varanasi available?', a: 'Yes. Round trip from Allahabad to Varanasi (125 km) starts from ₹3,200. Driver waits for your visit and returns.' },
  ],
  seo: {
    title: 'Round Trip Cab Allahabad | Return Taxi | Tirupati Travel',
    description: 'Round trip cab from Allahabad. Sedan from ₹3,200. Driver waits. Varanasi, Gaya, Vindhyachal trips available.',
    canonical: 'https://tirupatitravel.in/allahabad/round-trip-cab-allahabad',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// LUCKNOW CAB SERVICES
// ─────────────────────────────────────────────────────────────────────────────

export const lucknowOutstationCab: CabServiceData = {
  serviceType: 'outstation',
  city: 'Lucknow',
  citySlug: 'lucknow',
  heroTagline:
    'Book an outstation cab from Lucknow to Varanasi, Ayodhya, Delhi, Agra, or anywhere across UP and beyond.',
  pricing: { sedan: 2500, ertiga: 3500, innova: 4500 },
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 2500, priceLabel: 'one-way', features: ['AC', 'GPS'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 3500, priceLabel: 'one-way', features: ['AC', 'GPS'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 4500, priceLabel: 'one-way', features: ['Premium AC', 'GPS'] },
  ],
  inclusions: ['AC cab with professional driver', 'Fuel and driver allowance', 'Toll at actual', 'GST invoice on request'],
  howItWorks: [
    { step: 1, title: 'Book Your Route', desc: 'Tell us origin, destination and travel date.' },
    { step: 2, title: 'Driver Confirmed', desc: 'Experienced outstation driver assigned and confirmed.' },
    { step: 3, title: 'Travel Comfortably', desc: 'Clean AC cab for the full journey.' },
  ],
  vehicles: [],
  internalLinks: [
    { label: 'Lucknow to Varanasi Taxi', href: '/lucknow/lucknow-to-varanasi-taxi' },
    { label: 'Lucknow to Ayodhya Taxi', href: '/lucknow/lucknow-to-ayodhya-taxi' },
    { label: 'Innova Cab in Lucknow', href: '/lucknow/innova-cab-in-lucknow' },
    { label: 'Car Rental Lucknow', href: '/lucknow/car-rental-in-lucknow' },
  ],
  faqs: [
    { q: 'Which cities can I travel to from Lucknow by outstation cab?', a: 'Varanasi (320 km), Ayodhya (135 km), Allahabad (210 km), Delhi (550 km), Agra (360 km), Gorakhpur (270 km), and all major destinations.' },
    { q: 'How far is Varanasi from Lucknow?', a: 'About 320 km via NH-27, approximately 6 hours by cab.' },
  ],
  seo: {
    title: 'Outstation Cab in Lucknow | Intercity Taxi | Tirupati Travel',
    description: 'Book outstation cab from Lucknow. Sedan from ₹2,500. Varanasi, Ayodhya, Delhi. AC taxi, verified driver. 24/7.',
    canonical: 'https://tirupatitravel.in/lucknow/outstation-cab-in-lucknow',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// LOCAL SERVICE ENTRIES — CabServiceTemplate or LocalServiceTemplate
// Master prompt assigns these to LocalServiceTemplate (6 total).
// Per master prompt: sightseeing (2) + corporate (3) + 1 more.
// Excel confirms: varanasi-local-sightseeing-cab, ayodhya-local-sightseeing-cab,
//   corporate-cab-service-varanasi, corporate-cab-service-ayodhya,
//   corporate-cab-service-allahabad.
// ─────────────────────────────────────────────────────────────────────────────

export const varanasiLocalSightseeing: LocalServiceData = {
  city: 'Varanasi',
  citySlug: 'varanasi',
  serviceType: 'local-sightseeing',
  heroTagline:
    'Explore every sacred corner of Kashi with a dedicated local sightseeing cab — 84 ghats, ancient temples, Sarnath, and the Ganga Aarti.',
  hourlyPackages: [
    { hours: 4, km: 40, price: 1000, label: undefined },
    { hours: 6, km: 60, price: 1500, label: 'Most Popular' },
    { hours: 8, km: 80, price: 1800, label: undefined },
    { hours: 12, km: 120, price: 2500, label: 'Full Day' },
  ],
  places: [
    { name: 'Dashashwamedh Ghat', distance: '0.5 km from city centre', description: 'Famous Ganga Aarti every evening.' },
    { name: 'Kashi Vishwanath Temple', distance: '0.8 km from Dashashwamedh', description: 'One of the 12 Jyotirlinga shrines.' },
    { name: 'Manikarnika Ghat', distance: '1.2 km from Dashashwamedh', description: 'Sacred cremation ghat.' },
    { name: 'Assi Ghat', distance: '3 km from Dashashwamedh', description: 'Sunrise yoga and boat rides.' },
    { name: 'Sarnath', distance: '12 km from city centre', description: 'Where Buddha gave his first sermon.' },
    { name: 'Kal Bhairav Temple', distance: '1 km from Vishwanath', description: 'Guardian deity of Kashi.' },
    { name: 'Annapurna Devi Temple', distance: '0.9 km from Vishwanath', description: 'Goddess of food and nourishment.' },
    { name: 'Banaras Hindu University', distance: '5 km from city centre', description: 'Historic campus and Vishwanath temple inside.' },
    { name: 'Ramnagar Fort', distance: '14 km from Dashashwamedh', description: 'Royal fort across the Ganga.' },
  ],
  vehicles: [],
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 1500, priceLabel: '6 hrs / 60 km', features: ['AC', 'GPS', 'Local guide knowledge'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 2000, priceLabel: '6 hrs / 60 km', features: ['AC', 'GPS', '3-row seating'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 2500, priceLabel: '6 hrs / 60 km', features: ['Premium AC', 'GPS', 'Recliners'] },
  ],
  pricingNote: 'Boat ride charges at Ganga Ghat are separate (₹200–500). Sarnath entry fee ₹15 per person.',
  inclusions: [
    'AC cab with local driver',
    'Flexible itinerary — you choose the stops',
    'Fuel and driver allowance',
    'All major ghats and temples covered',
    'Parking charges included',
  ],
  internalLinks: [
    { label: 'Full Day Taxi Varanasi', href: '/varanasi/full-day-taxi-in-varanasi' },
    { label: 'Tourist Cab Varanasi', href: '/varanasi/tourist-cab-varanasi' },
    { label: 'Places to Visit in Varanasi', href: '/varanasi/places-to-visit-in-varanasi' },
    { label: 'Varanasi Tour Packages', href: '/varanasi/varanasi-tour-packages' },
    { label: 'Varanasi Airport Taxi', href: '/varanasi/varanasi-airport-taxi' },
  ],
  faqs: [
    { q: 'What is included in the Varanasi local sightseeing cab?', a: 'Our local sightseeing cab covers all major ghats (Dashashwamedh, Manikarnika, Assi), Kashi Vishwanath Temple, Kal Bhairav, and optionally Sarnath — within your chosen package hours.' },
    { q: 'Can I do a sunrise boat ride with the sightseeing cab?', a: 'Yes. Start at 5:30 AM — driver takes you to the ghat, waits while you do the boat ride, and then begins the temple tour.' },
    { q: 'Is Sarnath covered in the local sightseeing package?', a: 'Sarnath is 12 km away and is covered in the 8-hour and 12-hour packages. It can be added to 6-hour packages at extra per-km charges.' },
  ],
  seo: {
    title: 'Varanasi Local Sightseeing Cab | City Tour Taxi | Tirupati Travel',
    description: 'Book Varanasi local sightseeing cab. 6-hr package from ₹1,500. Covers ghats, Kashi Vishwanath, Sarnath. AC cab, local driver.',
    canonical: 'https://tirupatitravel.in/varanasi/varanasi-local-sightseeing-cab',
  },
};

export const ayodhyaLocalSightseeing: LocalServiceData = {
  city: 'Ayodhya',
  citySlug: 'ayodhya',
  serviceType: 'local-sightseeing',
  heroTagline:
    'Explore the sacred city of Ayodhya with a dedicated local sightseeing cab — Ram Mandir, Hanuman Garhi, Sarayu Ghat, and all pilgrimage sites.',
  hourlyPackages: [
    { hours: 4, km: 40, price: 800, label: undefined },
    { hours: 6, km: 60, price: 1200, label: 'Most Popular' },
    { hours: 8, km: 80, price: 1600, label: undefined },
    { hours: 12, km: 120, price: 2200, label: 'Full Day' },
  ],
  places: [
    { name: 'Ram Janmabhoomi (Ram Mandir)', distance: '1 km from main bus stand', description: 'The holiest site of Ayodhya — birthplace of Lord Rama.' },
    { name: 'Hanuman Garhi', distance: '0.8 km from Ram Mandir', description: '76-step hilltop temple dedicated to Lord Hanuman.' },
    { name: 'Kanak Bhavan', distance: '0.4 km from Ram Mandir', description: 'Beautiful temple gifted to Sita and Rama.' },
    { name: 'Sarayu Ghat (Ram ki Paidi)', distance: '1.5 km from Ram Mandir', description: 'Sacred ghat for evening Sarayu Aarti.' },
    { name: 'Guptar Ghat', distance: '12 km from city centre', description: 'Where Lord Rama is said to have taken Jal Samadhi.' },
    { name: 'Nageshwarnath Temple', distance: '1.2 km from Ram Mandir', description: 'Ancient Shiva temple near Sarayu river.' },
    { name: 'Sita ki Rasoi', distance: '0.5 km from Ram Mandir', description: 'Historic kitchen of Goddess Sita.' },
    { name: 'Tulsi Smarak Bhavan', distance: '2 km from bus stand', description: 'Memorial for poet-saint Tulsidas.' },
  ],
  vehicles: [],
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 1200, priceLabel: '6 hrs / 60 km', features: ['AC', 'GPS', 'Local knowledge'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 1700, priceLabel: '6 hrs / 60 km', features: ['AC', 'GPS'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 2200, priceLabel: '6 hrs / 60 km', features: ['Premium AC', 'GPS'] },
  ],
  pricingNote: 'Boat ride on Sarayu river charged separately. Entry to Ram Mandir is free.',
  inclusions: [
    'AC cab with local Ayodhya driver',
    'Flexible darshan itinerary',
    'Fuel and driver allowance',
    'All major temples and ghats covered',
    'Parking included',
  ],
  internalLinks: [
    { label: 'Full Day Cab Ayodhya', href: '/ayodhya/full-day-cab-in-ayodhya' },
    { label: 'Tourist Cab Ayodhya', href: '/ayodhya/tourist-cab-ayodhya' },
    { label: 'Ayodhya Darshan Package', href: '/ayodhya/ayodhya-darshan-tour-package' },
    { label: 'Ayodhya to Varanasi Taxi', href: '/ayodhya/ayodhya-to-varanasi-taxi' },
  ],
  faqs: [
    { q: 'What is the Ayodhya local sightseeing cab?', a: 'A dedicated local cab that covers Ram Mandir, Hanuman Garhi, Kanak Bhavan, Sarayu Ghat, and other pilgrimage sites in Ayodhya.' },
    { q: 'How many hours does it take to complete Ayodhya darshan?', a: 'A thorough Ayodhya darshan covers 6–8 hours. Major sites like Ram Mandir, Hanuman Garhi, and Sarayu Aarti (evening) can be done in 6 hours.' },
    { q: 'Is the evening Sarayu Aarti covered in the sightseeing cab?', a: 'Yes. If you book the 8-hour or full-day package, the evening Sarayu Aarti at Ram ki Paidi is included.' },
  ],
  seo: {
    title: 'Ayodhya Local Sightseeing Cab | City Tour Taxi | Tirupati Travel',
    description: 'Book Ayodhya local sightseeing cab. 6-hr from ₹1,200. Ram Mandir, Hanuman Garhi, Sarayu Ghat darshan. AC cab, local driver.',
    canonical: 'https://tirupatitravel.in/ayodhya/ayodhya-local-sightseeing-cab',
  },
};

export const varanasiCorporateCab: LocalServiceData = {
  city: 'Varanasi',
  citySlug: 'varanasi',
  serviceType: 'corporate',
  heroTagline:
    'Professional corporate cab service in Varanasi — employee transport, client airport transfers, and daily office commutes with GST billing.',
  hourlyPackages: [
    { hours: 8, km: 80, price: 2000, label: 'Office Day' },
    { hours: 10, km: 100, price: 2400, label: undefined },
    { hours: 12, km: 120, price: 2800, label: undefined },
    { hours: 24, km: 250, price: 4500, label: 'All-Day Exec' },
  ],
  places: [
    { name: 'Varanasi Junction (Railway)', distance: '4 km from city centre', description: 'Employee and client pickups.' },
    { name: 'Lal Bahadur Shastri Airport', distance: '18 km from city centre', description: 'Airport transfers.' },
    { name: 'Sarnath Industrial Area', distance: '12 km from city centre', description: 'Factory and business park commutes.' },
    { name: 'BHU / Medical Campus', distance: '5 km from city centre', description: 'Staff transport.' },
    { name: 'Ordnance Factory Bhadohi', distance: '60 km from city centre', description: 'Industrial outstation runs.' },
  ],
  vehicles: [],
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 2000, priceLabel: '8 hrs / 80 km', features: ['AC', 'GPS', 'GST invoice'] },
    { vehicle: 'Toyota Etios', category: 'Sedan (4 seats)', price: 2100, priceLabel: '8 hrs / 80 km', features: ['AC', 'GPS', 'Large boot'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 2800, priceLabel: '8 hrs / 80 km', features: ['AC', 'GPS', '3-row seating'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 3500, priceLabel: '8 hrs / 80 km', features: ['Premium AC', 'GPS', 'Executive comfort'] },
  ],
  pricingNote: 'Monthly corporate contracts available with dedicated vehicle assignment. GST invoices provided for all bookings.',
  inclusions: [
    'Dedicated cab for your company',
    'GST invoice for all bookings',
    'Driver in uniform',
    'Fuel and driver allowance included',
    'Monthly billing available',
    'Multiple vehicle fleet for large teams',
  ],
  internalLinks: [
    { label: 'Varanasi Airport Taxi', href: '/varanasi/varanasi-airport-taxi' },
    { label: 'Full Day Taxi Varanasi', href: '/varanasi/full-day-taxi-in-varanasi' },
    { label: 'Outstation Cab Varanasi', href: '/varanasi/one-way-cab-in-varanasi' },
  ],
  faqs: [
    { q: 'Do you provide monthly corporate cab contracts in Varanasi?', a: 'Yes. We offer monthly contracts with dedicated vehicles, fixed pricing, and GST invoicing for businesses in Varanasi.' },
    { q: 'Can you manage airport pickup for our clients?', a: 'Yes. We provide executive airport pickups with name boards, meet-and-greet service, and real-time flight tracking.' },
  ],
  seo: {
    title: 'Corporate Cab Service Varanasi | Employee Transport | Tirupati Travel',
    description: 'Book corporate cab in Varanasi. GST billing, dedicated drivers. Office commutes, airport transfers, monthly contracts. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/varanasi/corporate-cab-service-varanasi',
  },
};

export const ayodhyaCorporateCab: LocalServiceData = {
  city: 'Ayodhya',
  citySlug: 'ayodhya',
  serviceType: 'corporate',
  heroTagline:
    'Corporate cab service in Ayodhya — reliable employee transport, client transfers, and GST-billed monthly contracts.',
  hourlyPackages: [
    { hours: 8, km: 80, price: 1800, label: 'Office Day' },
    { hours: 10, km: 100, price: 2200, label: undefined },
    { hours: 12, km: 120, price: 2600, label: undefined },
    { hours: 24, km: 250, price: 4000, label: 'All-Day Exec' },
  ],
  places: [
    { name: 'Faizabad Railway Junction', distance: '7 km from Ram Mandir', description: 'Staff and client pickups.' },
    { name: 'Ayodhya Dham Station (New)', distance: '2 km from city centre', description: 'VIP and client pickups.' },
    { name: 'Ayodhya Airport (New)', distance: '8 km from city centre', description: 'Executive airport transfers.' },
    { name: 'Ayodhya Industrial Area', distance: '10 km from city centre', description: 'Daily staff commutes.' },
  ],
  vehicles: [],
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 1800, priceLabel: '8 hrs / 80 km', features: ['AC', 'GPS', 'GST invoice'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 2400, priceLabel: '8 hrs / 80 km', features: ['AC', 'GPS'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 3200, priceLabel: '8 hrs / 80 km', features: ['Premium AC', 'GPS'] },
  ],
  inclusions: ['Dedicated corporate cab', 'GST invoice', 'Driver in uniform', 'Fuel and allowance', 'Monthly billing'],
  internalLinks: [
    { label: 'Ayodhya Airport Taxi', href: '/ayodhya/ayodhya-airport-taxi' },
    { label: 'Outstation Cab Ayodhya', href: '/ayodhya/outstation-cab-in-ayodhya' },
  ],
  faqs: [
    { q: 'Is corporate cab available in Ayodhya?', a: 'Yes. We provide corporate cab services in Ayodhya with GST billing, dedicated drivers, and monthly contracts.' },
  ],
  seo: {
    title: 'Corporate Cab Service Ayodhya | Employee Transport | Tirupati Travel',
    description: 'Corporate cab in Ayodhya. GST invoice. Office commutes, airport transfers, monthly contracts. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/ayodhya/corporate-cab-service-ayodhya',
  },
};

export const allahabadCorporateCab: LocalServiceData = {
  city: 'Allahabad',
  citySlug: 'allahabad',
  serviceType: 'corporate',
  heroTagline:
    'Corporate cab service in Allahabad (Prayagraj) — professional employee transport, client pickups, and monthly billing with GST invoices.',
  hourlyPackages: [
    { hours: 8, km: 80, price: 1800, label: 'Office Day' },
    { hours: 10, km: 100, price: 2200, label: undefined },
    { hours: 12, km: 120, price: 2600, label: undefined },
    { hours: 24, km: 250, price: 4000, label: 'All-Day Exec' },
  ],
  places: [
    { name: 'Allahabad Junction', distance: '3 km from Civil Lines', description: 'Staff and client station pickups.' },
    { name: 'Bamrauli Airport', distance: '12 km from city centre', description: 'Executive airport transfers.' },
    { name: 'Naini Industrial Area', distance: '8 km from city centre', description: 'Daily factory staff commutes.' },
    { name: 'High Court (Civil Lines)', distance: '1 km from city centre', description: 'Legal professional transport.' },
    { name: 'IIIT Allahabad', distance: '10 km from city centre', description: 'Staff and faculty transport.' },
  ],
  vehicles: [],
  pricingRows: [
    { vehicle: 'Swift Dzire', category: 'Sedan (4 seats)', price: 1800, priceLabel: '8 hrs / 80 km', features: ['AC', 'GPS', 'GST invoice'] },
    { vehicle: 'Maruti Ertiga', category: 'SUV (6 seats)', price: 2400, priceLabel: '8 hrs / 80 km', features: ['AC', 'GPS'] },
    { vehicle: 'Innova Crysta', category: 'Premium SUV (7 seats)', price: 3200, priceLabel: '8 hrs / 80 km', features: ['Premium AC', 'GPS'] },
  ],
  inclusions: ['Dedicated corporate cab', 'GST invoice for all bookings', 'Uniformed driver', 'Fuel and allowance included', 'Monthly billing available'],
  internalLinks: [
    { label: 'Allahabad to Varanasi Taxi', href: '/allahabad/allahabad-to-varanasi-taxi' },
    { label: 'Full Day Cab Allahabad', href: '/allahabad/full-day-cab-in-allahabad' },
    { label: 'Allahabad Tour Packages', href: '/allahabad/allahabad-tour-packages' },
  ],
  faqs: [
    { q: 'Do you offer monthly corporate cab contracts in Allahabad?', a: 'Yes. Monthly corporate contracts with dedicated vehicle, fixed routes, and GST invoices are available in Allahabad.' },
    { q: 'Can you provide multiple cabs for a large team in Prayagraj?', a: 'Yes. We have a fleet and can manage multi-vehicle daily operations for large organizations.' },
  ],
  seo: {
    title: 'Corporate Cab Service Allahabad | Employee Transport | Tirupati Travel',
    description: 'Corporate cab in Allahabad (Prayagraj). GST billing, uniformed drivers. Monthly contracts. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/allahabad/corporate-cab-service-allahabad',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// NAMED EXPORTS MAP — used by urlParser.ts DATA_SOURCES
// ─────────────────────────────────────────────────────────────────────────────
export const cityServices = {
  // Varanasi — CabServiceTemplate
  varanasiOneWay,
  varanasiRoundTrip,
  varanasiFullDay,
  varanasiHalfDay,
  varanasiCallTaxi,
  varanasiDropTaxi,
  varanasiTouristCab,       // ← added Chunk 5

  // Ayodhya — CabServiceTemplate
  ayodhyaOneWay,
  ayodhyaRoundTrip,
  ayodhyaFullDay,
  ayodhyaHalfDay,
  ayodhyaCallTaxi,
  ayodhyaDropTaxi,
  ayodhyaTouristCab,
  ayodhyaOutstationCab,

  // Allahabad — CabServiceTemplate
  allahabadCabService,
  allahabadCallTaxi,
  allahabadDropTaxi,
  allahabadFullDay,
  allahabadHalfDay,
  allahabadOneWay,
  allahabadRoundTrip,

  // Lucknow — CabServiceTemplate
  lucknowOutstationCab,

  // LocalServiceTemplate entries
  varanasiLocalSightseeing,
  ayodhyaLocalSightseeing,
  varanasiCorporateCab,
  ayodhyaCorporateCab,
  allahabadCorporateCab,
};
