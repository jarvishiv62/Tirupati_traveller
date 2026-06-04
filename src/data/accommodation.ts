// src/data/accommodation.ts
// Accommodation data — hotel, homestay, dharamshala, dormitory, guest house
// Full data populated in Chunk 8

export type AccommodationData = {
  city: string;
  accType: 'hotel' | 'homestay' | 'dharamshala' | 'dormitory' | 'guest-house';
  features: string[];
  priceRange: { min: number; max: number };
  nearbyGhats: string[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; canonical: string };
};

const BASE = 'https://tirupatitravel.in';

export const varanasiHotel: AccommodationData = {
  city: 'Varanasi', accType: 'hotel',
  features: ['AC Rooms', 'Free WiFi', 'Room Service', 'Restaurant', 'Parking', 'Ganga View Rooms', '24-hr Reception'],
  priceRange: { min: 800, max: 8000 },
  nearbyGhats: ['Dashashwamedh Ghat', 'Assi Ghat', 'Manikarnika Ghat'],
  faqs: [
    { q: 'What is the price range for hotels in Varanasi?', a: 'Hotels in Varanasi range from ₹800 (budget) to ₹8000+ (luxury) per night.' },
    { q: 'Which hotels are near Dashashwamedh Ghat?', a: 'Several hotels are within walking distance of Dashashwamedh Ghat. Contact us for recommendations.' },
    { q: 'Do hotels in Varanasi have Ganga views?', a: 'Many hotels near the ghats offer beautiful Ganga view rooms.' },
    { q: 'Can Tirupati Travel help with hotel booking?', a: 'Yes, we can assist with hotel recommendations and bookings. Call 8726124680.' },
    { q: 'Is early check-in available?', a: 'Early check-in depends on the property. Most hotels allow it for a small charge.' },
  ],
  seo: {
    title: 'Hotel in Varanasi | Best Hotels Near Ghats | Tirupati Travel',
    description: 'Find best hotels in Varanasi near Dashashwamedh Ghat. Budget to premium. Book through Tirupati Travel. Call 8726124680.',
    canonical: `${BASE}/varanasi/hotel-in-varanasi`,
  },
};

export const varanasiHomestay: AccommodationData = {
  city: 'Varanasi', accType: 'homestay',
  features: ['Home-cooked meals', 'Local experience', 'WiFi', 'Guided ghat walks', 'Cultural immersion', 'Affordable rates'],
  priceRange: { min: 500, max: 2500 },
  nearbyGhats: ['Assi Ghat', 'Tulsi Ghat', 'Kedar Ghat'],
  faqs: [
    { q: 'What is the price for homestays in Varanasi?', a: 'Homestays in Varanasi range from ₹500 to ₹2500 per night.' },
    { q: 'Are meals included in homestays?', a: 'Most homestays offer optional home-cooked meals for an additional charge.' },
    { q: 'Are homestays near the ghats?', a: 'Yes, many homestays are in the old city, within walking distance of the ghats.' },
    { q: 'Is a homestay suitable for solo travelers?', a: 'Yes, homestays are great for solo travelers seeking local experience.' },
    { q: 'How do I book?', a: 'Contact Tirupati Travel at 8726124680 for homestay recommendations.' },
  ],
  seo: {
    title: 'Homestay in Varanasi | Budget Stay Near Ghats | Tirupati Travel',
    description: 'Find best homestays in Varanasi. Authentic experience near the ghats. Book through Tirupati Travel. Call 8726124680.',
    canonical: `${BASE}/varanasi/homestay-in-varanasi`,
  },
};

export const varanasiGuestHouse: AccommodationData = {
  city: 'Varanasi', accType: 'guest-house',
  features: ['Clean rooms', 'WiFi', 'Attached bathroom', 'Rooftop views', 'Budget-friendly', 'Central location'],
  priceRange: { min: 400, max: 2000 },
  nearbyGhats: ['Dashashwamedh Ghat', 'Assi Ghat', 'Manikarnika Ghat'],
  faqs: [
    { q: 'What is the price for guest houses in Varanasi?', a: 'Guest houses in Varanasi range from ₹400 to ₹2000 per night.' },
    { q: 'Are guest houses near the ghats?', a: 'Yes, many guest houses are in old city lanes within walking distance of ghats.' },
    { q: 'Do guest houses have attached bathrooms?', a: 'Most guest houses have attached bathrooms. Confirm when booking.' },
    { q: 'Are guest houses safe for solo female travelers?', a: 'Yes, many reputable guest houses in Varanasi welcome solo female travelers.' },
    { q: 'How do I book?', a: 'Contact Tirupati Travel at 8726124680 for guest house recommendations.' },
  ],
  seo: {
    title: 'Guest House in Varanasi | Affordable Stay | Tirupati Travel',
    description: 'Find best guest houses in Varanasi. Affordable rooms near ghats. Book with Tirupati Travel. Call 8726124680.',
    canonical: `${BASE}/varanasi/guest-house-in-varanasi`,
  },
};

export const varanasiDharamshala: AccommodationData = {
  city: 'Varanasi', accType: 'dharamshala',
  features: ['Pilgrim accommodation', 'Very affordable', 'Near temples', 'Vegetarian food', 'Clean facilities'],
  priceRange: { min: 100, max: 500 },
  nearbyGhats: ['Dashashwamedh Ghat', 'Manikarnika Ghat'],
  faqs: [
    { q: 'What is the price for dharamshala in Varanasi?', a: 'Dharamshalas in Varanasi typically charge ₹100-₹500 per night for pilgrims.' },
    { q: 'Are dharamshalas open to all pilgrims?', a: 'Most dharamshalas are open to all Hindu pilgrims. Some are community-specific.' },
    { q: 'Is food available at dharamshalas?', a: 'Many dharamshalas serve simple vegetarian food, often free or at minimal cost.' },
    { q: 'Where are the best dharamshalas in Varanasi?', a: 'There are many dharamshalas near Vishwanath Gali & Dashashwamedh Ghat. Contact us for info.' },
    { q: 'How do I find a good dharamshala?', a: 'Contact Tirupati Travel at 8726124680 for recommendations.' },
  ],
  seo: {
    title: 'Dharamshala in Varanasi | Pilgrim Stay | Tirupati Travel',
    description: 'Find best dharamshalas in Varanasi for pilgrims. Affordable stay near temples. Call 8726124680.',
    canonical: `${BASE}/varanasi/dharamshala-in-varanasi`,
  },
};

export const varanasiDormitory: AccommodationData = {
  city: 'Varanasi', accType: 'dormitory',
  features: ['Shared dormitory beds', 'Most affordable', 'Common bathrooms', 'Lockers', 'WiFi', 'Social atmosphere'],
  priceRange: { min: 200, max: 600 },
  nearbyGhats: ['Assi Ghat', 'Tulsi Ghat'],
  faqs: [
    { q: 'What is the price for dormitories in Varanasi?', a: 'Dormitory beds in Varanasi range from ₹200 to ₹600 per night.' },
    { q: 'Are dormitories safe in Varanasi?', a: 'Yes, reputable hostels with dormitories have lockers and 24-hr security.' },
    { q: 'Are dormitories suitable for solo budget travelers?', a: 'Yes, dormitories are ideal for solo budget travelers and backpackers.' },
    { q: 'Are meals available at dormitories?', a: 'Many hostels with dorms serve breakfast. Common areas have food options.' },
    { q: 'How do I book?', a: 'Contact Tirupati Travel at 8726124680 for recommendations.' },
  ],
  seo: {
    title: 'Dormitory in Varanasi | Budget Pilgrim Accommodation | Tirupati Travel',
    description: 'Find best dormitories in Varanasi for budget travelers & pilgrims. Call 8726124680.',
    canonical: `${BASE}/varanasi/dormitory-in-varanasi`,
  },
};