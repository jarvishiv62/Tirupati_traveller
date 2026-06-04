// src/data/cityLanding.ts
// ★ City Landing page data — used by CityLandingTemplate
// Covers: 6 main city landings + 6 specialty pages (all CityLandingTemplate)
// dataKey pattern: cityLanding.<key>

import type { CityLandingData } from '@/types/templates';

// ─── VARANASI ─────────────────────────────────────────────────────────────────

export const varanasi: CityLandingData = {
  city: 'Varanasi',
  aliases: ['Kashi', 'Banaras'],
  heroText: 'Taxi & Tour Services in the Spiritual Capital of India',
  heroImage: '/Images/cities/varanasi-hero.webp',
  services: [
    { label: 'Outstation Taxi',   icon: '/svg/icons/taxi.svg',    slug: 'varanasi/one-way-cab-in-varanasi' },
    { label: 'Ganga Boat Rides',  icon: '/svg/icons/boat.svg',    slug: 'varanasi/varanasi-local-sightseeing-cab' },
    { label: 'Hotel Booking',     icon: '/svg/icons/hotel.svg',   slug: 'varanasi/hotel-in-varanasi' },
    { label: 'Temple Darshan',    icon: '/svg/icons/darshan.svg', slug: 'varanasi/varanasi-tour-packages' },
    { label: 'Airport Taxi',      icon: '/svg/icons/airport.svg', slug: 'varanasi/varanasi-airport-taxi' },
    { label: 'Car Rental',        icon: '/svg/icons/car.svg',     slug: 'varanasi/car-rental-varanasi' },
  ],
  vehicles: ['innova-crysta', 'ertiga', 'swift-dzire', 'tempo-traveller'],
  places: [
    { name: 'Kashi Vishwanath Temple', image: '/Images/places/kashi-vishwanath.webp', distance: '0 km' },
    { name: 'Dashashwamedh Ghat',      image: '/Images/places/dashashwamedh.webp',    distance: '0.5 km' },
    { name: 'Sarnath',                 image: '/Images/places/sarnath.webp',          distance: '12 km' },
    { name: 'Manikarnika Ghat',        image: '/Images/places/manikarnika.webp',      distance: '1 km' },
    { name: 'Ramnagar Fort',           image: '/Images/places/ramnagar.webp',         distance: '14 km' },
    { name: 'Assi Ghat',               image: '/Images/places/assi-ghat.webp',        distance: '3 km' },
  ],
  outstationLinks: [
    { destination: 'Ayodhya',    slug: 'varanasi/varanasi-to-ayodhya-taxi',    fare: 3200 },
    { destination: 'Allahabad',  slug: 'varanasi/varanasi-to-allahabad-taxi',  fare: 1800 },
    { destination: 'Lucknow',    slug: 'varanasi/varanasi-to-lucknow-taxi',    fare: 3500 },
    { destination: 'Gaya',       slug: 'varanasi/varanasi-to-gaya-taxi',       fare: 2800 },
    { destination: 'Agra',       slug: 'varanasi/varanasi-to-agra-taxi',       fare: 5500 },
    { destination: 'Delhi',      slug: 'varanasi/varanasi-to-delhi-taxi',      fare: 9000 },
    { destination: 'Gorakhpur',  slug: 'varanasi/varanasi-to-gorakhpur-taxi',  fare: 2600 },
    { destination: 'Patna',      slug: 'varanasi/varanasi-to-patna-taxi',      fare: 3800 },
  ],
  seo: {
    title: 'Taxi Service in Varanasi | Cab Booking Kashi Banaras | Tirupati Travel',
    description: 'Book reliable taxi and cab services in Varanasi (Kashi/Banaras). Outstation cabs, airport taxi, temple darshan tours. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/varanasi',
  },
};

// ─── VARANASI PLACES TO VISIT (CityLandingTemplate variant) ───────────────────

export const varanasiPlaces: CityLandingData = {
  city: 'Varanasi',
  aliases: ['Kashi', 'Banaras'],
  heroText: 'Explore the Sacred Ghats, Temples & Heritage of Kashi',
  heroImage: '/Images/cities/varanasi-ghats.webp',
  services: [
    { label: 'Ghat Tour Cab',    icon: '/svg/icons/boat.svg',    slug: 'varanasi/varanasi-local-sightseeing-cab' },
    { label: 'Temple Darshan',   icon: '/svg/icons/darshan.svg', slug: 'varanasi/varanasi-tour-packages' },
    { label: 'Outstation Taxi',  icon: '/svg/icons/taxi.svg',    slug: 'varanasi/one-way-cab-in-varanasi' },
    { label: 'Hotel Booking',    icon: '/svg/icons/hotel.svg',   slug: 'varanasi/hotel-in-varanasi' },
  ],
  vehicles: ['innova-crysta', 'ertiga', 'swift-dzire'],
  places: [
    { name: 'Kashi Vishwanath Temple', image: '/Images/places/kashi-vishwanath.webp', distance: '0 km' },
    { name: 'Dashashwamedh Ghat',      image: '/Images/places/dashashwamedh.webp',    distance: '0.5 km' },
    { name: 'Sarnath',                 image: '/Images/places/sarnath.webp',          distance: '12 km' },
    { name: 'Manikarnika Ghat',        image: '/Images/places/manikarnika.webp',      distance: '1 km' },
    { name: 'Ramnagar Fort',           image: '/Images/places/ramnagar.webp',         distance: '14 km' },
    { name: 'Assi Ghat',               image: '/Images/places/assi-ghat.webp',        distance: '3 km' },
    { name: 'Tulsi Manas Temple',      image: '/Images/places/tulsi-manas.webp',      distance: '2 km' },
    { name: 'Banaras Hindu University',image: '/Images/places/bhu.webp',              distance: '4 km' },
  ],
  outstationLinks: [
    { destination: 'Ayodhya',   slug: 'varanasi/varanasi-to-ayodhya-taxi',   fare: 3200 },
    { destination: 'Gaya',      slug: 'varanasi/varanasi-to-gaya-taxi',      fare: 2800 },
    { destination: 'Allahabad', slug: 'varanasi/varanasi-to-allahabad-taxi', fare: 1800 },
    { destination: 'Lucknow',   slug: 'varanasi/varanasi-to-lucknow-taxi',   fare: 3500 },
  ],
  seo: {
    title: 'Places to Visit in Varanasi | Top Tourist Spots Kashi | Tirupati Travel',
    description: 'Discover the top places to visit in Varanasi — Kashi Vishwanath, Dashashwamedh Ghat, Sarnath & more. Book a cab for your Varanasi tour today.',
    canonical: 'https://tirupatitravel.in/varanasi/places-to-visit-in-varanasi',
  },
};

// ─── AYODHYA ──────────────────────────────────────────────────────────────────

export const ayodhya: CityLandingData = {
  city: 'Ayodhya',
  aliases: ['Ram Nagri', 'Saket'],
  heroText: 'Taxi & Darshan Services in the Holy City of Lord Ram',
  heroImage: '/Images/cities/ayodhya-hero.webp',
  services: [
    { label: 'Outstation Taxi',  icon: '/svg/icons/taxi.svg',    slug: 'ayodhya/one-way-cab-in-ayodhya' },
    { label: 'Temple Darshan',   icon: '/svg/icons/darshan.svg', slug: 'ayodhya/ayodhya-tour-packages' },
    { label: 'Hotel Booking',    icon: '/svg/icons/hotel.svg',   slug: 'varanasi/hotel-in-varanasi' },
    { label: 'Airport Taxi',     icon: '/svg/icons/airport.svg', slug: 'ayodhya/ayodhya-airport-taxi' },
    { label: 'Local Sightseeing',icon: '/svg/icons/boat.svg',    slug: 'ayodhya/ayodhya-local-sightseeing-cab' },
    { label: 'Car Rental',       icon: '/svg/icons/car.svg',     slug: 'ayodhya/car-rental-ayodhya' },
  ],
  vehicles: ['innova-crysta', 'ertiga', 'swift-dzire', 'sedan'],
  places: [
    { name: 'Ram Mandir',         image: '/Images/places/ram-mandir.webp',    distance: '0 km' },
    { name: 'Hanuman Garhi',      image: '/Images/places/hanuman-garhi.webp', distance: '0.5 km' },
    { name: 'Kanak Bhawan',       image: '/Images/places/kanak-bhawan.webp',  distance: '1 km' },
    { name: 'Saryu Ghat',         image: '/Images/places/saryu-ghat.webp',    distance: '1.5 km' },
    { name: 'Nageshwarnath Temple',image: '/Images/places/nageshwarnath.webp',distance: '2 km' },
    { name: 'Moti Mahal',         image: '/Images/places/moti-mahal.webp',    distance: '3 km' },
  ],
  outstationLinks: [
    { destination: 'Varanasi',   slug: 'ayodhya/ayodhya-to-varanasi-taxi',   fare: 3200 },
    { destination: 'Lucknow',    slug: 'ayodhya/ayodhya-to-lucknow-taxi',    fare: 1600 },
    { destination: 'Allahabad',  slug: 'ayodhya/ayodhya-to-allahabad-taxi',  fare: 2800 },
    { destination: 'Delhi',      slug: 'ayodhya/ayodhya-to-delhi-taxi',      fare: 8500 },
    { destination: 'Gaya',       slug: 'ayodhya/ayodhya-to-gaya-taxi',       fare: 4500 },
    { destination: 'Gorakhpur',  slug: 'ayodhya/ayodhya-to-gorakhpur-taxi',  fare: 2200 },
  ],
  seo: {
    title: 'Taxi Service in Ayodhya | Cab Booking Ram Nagri | Tirupati Travel',
    description: 'Book taxi and cab services in Ayodhya. Temple darshan tours, airport taxi, outstation cabs. Tirupati Travel — trusted Ayodhya cab service. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/ayodhya',
  },
};

// ─── AYODHYA DHAM (CityLandingTemplate specialty) ─────────────────────────────

export const ayodhyaDham: CityLandingData = {
  city: 'Ayodhya',
  aliases: ['Ram Nagri', 'Saket'],
  heroText: 'Complete Ayodhya Dham Darshan — Ram Mandir to Saryu Ghat',
  heroImage: '/Images/cities/ayodhya-dham.webp',
  services: [
    { label: 'Dham Darshan Tour', icon: '/svg/icons/darshan.svg', slug: 'ayodhya/ayodhya-darshan-tour-package' },
    { label: 'Local Sightseeing', icon: '/svg/icons/boat.svg',    slug: 'ayodhya/ayodhya-local-sightseeing-cab' },
    { label: 'Outstation Taxi',   icon: '/svg/icons/taxi.svg',    slug: 'ayodhya/one-way-cab-in-ayodhya' },
    { label: 'Hotel Booking',     icon: '/svg/icons/hotel.svg',   slug: 'varanasi/hotel-in-varanasi' },
  ],
  vehicles: ['innova-crysta', 'ertiga', 'swift-dzire'],
  places: [
    { name: 'Ram Mandir',          image: '/Images/places/ram-mandir.webp',     distance: '0 km' },
    { name: 'Hanuman Garhi',       image: '/Images/places/hanuman-garhi.webp',  distance: '0.5 km' },
    { name: 'Kanak Bhawan',        image: '/Images/places/kanak-bhawan.webp',   distance: '1 km' },
    { name: 'Saryu Ghat',          image: '/Images/places/saryu-ghat.webp',     distance: '1.5 km' },
    { name: 'Nageshwarnath Temple', image: '/Images/places/nageshwarnath.webp', distance: '2 km' },
    { name: 'Dashrath Mahal',      image: '/Images/places/dashrath-mahal.webp', distance: '2.5 km' },
  ],
  outstationLinks: [
    { destination: 'Varanasi',  slug: 'ayodhya/ayodhya-to-varanasi-taxi',  fare: 3200 },
    { destination: 'Lucknow',   slug: 'ayodhya/ayodhya-to-lucknow-taxi',   fare: 1600 },
    { destination: 'Allahabad', slug: 'ayodhya/ayodhya-to-allahabad-taxi', fare: 2800 },
  ],
  seo: {
    title: 'Ayodhya Dham Darshan Package | Ram Mandir Tour | Tirupati Travel',
    description: 'Complete Ayodhya Dham darshan — Ram Mandir, Hanuman Garhi, Kanak Bhawan, Saryu Ghat. Book cab packages for Ayodhya Dham with Tirupati Travel.',
    canonical: 'https://tirupatitravel.in/ayodhya/ayodhya-dham',
  },
};

// ─── ALLAHABAD / PRAYAGRAJ ─────────────────────────────────────────────────────

export const allahabad: CityLandingData = {
  city: 'Allahabad',
  aliases: ['Prayagraj', 'Sangam City'],
  heroText: 'Taxi & Tour Services at the Triveni Sangam',
  heroImage: '/Images/cities/allahabad-hero.webp',
  services: [
    { label: 'Outstation Taxi',  icon: '/svg/icons/taxi.svg',    slug: 'allahabad/one-way-cab-in-allahabad' },
    { label: 'Sangam Boat Tour', icon: '/svg/icons/boat.svg',    slug: 'allahabad/cab-service-in-allahabad' },
    { label: 'Temple Darshan',   icon: '/svg/icons/darshan.svg', slug: 'allahabad/allahabad-tour-packages' },
    { label: 'Hotel Booking',    icon: '/svg/icons/hotel.svg',   slug: 'varanasi/hotel-in-varanasi' },
    { label: 'Car Rental',       icon: '/svg/icons/car.svg',     slug: 'allahabad/car-rental-allahabad' },
    { label: 'Full Day Cab',     icon: '/svg/icons/airport.svg', slug: 'allahabad/full-day-cab-in-allahabad' },
  ],
  vehicles: ['innova-crysta', 'ertiga', 'swift-dzire', 'sedan'],
  places: [
    { name: 'Triveni Sangam',        image: '/Images/places/triveni-sangam.webp',    distance: '0 km' },
    { name: 'Allahabad Fort',        image: '/Images/places/allahabad-fort.webp',    distance: '2 km' },
    { name: 'Anand Bhawan',          image: '/Images/places/anand-bhawan.webp',      distance: '3 km' },
    { name: 'Hanuman Mandir',        image: '/Images/places/hanuman-mandir-prayag.webp', distance: '1.5 km' },
    { name: 'Khusro Bagh',           image: '/Images/places/khusro-bagh.webp',       distance: '4 km' },
    { name: 'New Yamuna Bridge',     image: '/Images/places/yamuna-bridge.webp',     distance: '5 km' },
  ],
  outstationLinks: [
    { destination: 'Varanasi',   slug: 'allahabad/allahabad-to-varanasi-taxi',   fare: 1800 },
    { destination: 'Lucknow',    slug: 'allahabad/allahabad-to-lucknow-taxi',    fare: 2200 },
    { destination: 'Ayodhya',    slug: 'allahabad/allahabad-to-ayodhya-taxi',    fare: 2800 },
    { destination: 'Gaya',       slug: 'allahabad/allahabad-to-gaya-taxi',       fare: 3200 },
    { destination: 'Chitrakoot', slug: 'allahabad/allahabad-to-chitrakoot-taxi', fare: 2000 },
    { destination: 'Delhi',      slug: 'allahabad/allahabad-to-delhi-taxi',      fare: 7500 },
  ],
  seo: {
    title: 'Taxi Service in Allahabad Prayagraj | Cab Booking Sangam City | Tirupati Travel',
    description: 'Book taxi and cab services in Allahabad (Prayagraj). Sangam tours, outstation cabs, Kumbh mela transport. Tirupati Travel — trusted Prayagraj cab service.',
    canonical: 'https://tirupatitravel.in/allahabad',
  },
};

// ─── ALLAHABAD PLACES TO VISIT (CityLandingTemplate variant) ──────────────────

export const allahabadPlaces: CityLandingData = {
  city: 'Allahabad',
  aliases: ['Prayagraj', 'Sangam City'],
  heroText: 'Explore Prayagraj — Sangam, Fort, Anand Bhawan & More',
  heroImage: '/Images/cities/allahabad-places.webp',
  services: [
    { label: 'Sangam Boat Tour',  icon: '/svg/icons/boat.svg',    slug: 'allahabad/cab-service-in-allahabad' },
    { label: 'Temple Darshan',    icon: '/svg/icons/darshan.svg', slug: 'allahabad/allahabad-darshan-tour-package' },
    { label: 'Outstation Taxi',   icon: '/svg/icons/taxi.svg',    slug: 'allahabad/one-way-cab-in-allahabad' },
    { label: 'Full Day Cab',      icon: '/svg/icons/car.svg',     slug: 'allahabad/full-day-cab-in-allahabad' },
  ],
  vehicles: ['innova-crysta', 'ertiga', 'swift-dzire'],
  places: [
    { name: 'Triveni Sangam',        image: '/Images/places/triveni-sangam.webp',        distance: '0 km' },
    { name: 'Allahabad Fort',        image: '/Images/places/allahabad-fort.webp',        distance: '2 km' },
    { name: 'Anand Bhawan',          image: '/Images/places/anand-bhawan.webp',          distance: '3 km' },
    { name: 'Hanuman Mandir',        image: '/Images/places/hanuman-mandir-prayag.webp', distance: '1.5 km' },
    { name: 'Khusro Bagh',           image: '/Images/places/khusro-bagh.webp',           distance: '4 km' },
    { name: 'All Saints Cathedral',  image: '/Images/places/all-saints-cathedral.webp',  distance: '3.5 km' },
    { name: 'Minto Park',            image: '/Images/places/minto-park.webp',            distance: '2 km' },
    { name: 'Bharadwaj Ashram',      image: '/Images/places/bharadwaj-ashram.webp',      distance: '5 km' },
  ],
  outstationLinks: [
    { destination: 'Varanasi',  slug: 'allahabad/allahabad-to-varanasi-taxi',  fare: 1800 },
    { destination: 'Lucknow',   slug: 'allahabad/allahabad-to-lucknow-taxi',   fare: 2200 },
    { destination: 'Ayodhya',   slug: 'allahabad/allahabad-to-ayodhya-taxi',   fare: 2800 },
    { destination: 'Gaya',      slug: 'allahabad/allahabad-to-gaya-taxi',      fare: 3200 },
  ],
  seo: {
    title: 'Places to Visit in Allahabad Prayagraj | Tourist Spots Sangam | Tirupati Travel',
    description: 'Top places to visit in Allahabad (Prayagraj) — Triveni Sangam, Allahabad Fort, Anand Bhawan & more. Book a sightseeing cab with Tirupati Travel.',
    canonical: 'https://tirupatitravel.in/allahabad/places-to-visit-in-allahabad',
  },
};

// ─── LUCKNOW ──────────────────────────────────────────────────────────────────

export const lucknow: CityLandingData = {
  city: 'Lucknow',
  aliases: ['Nawabs City', 'City of Nawabs'],
  heroText: 'Taxi & Tour Services in the City of Nawabs',
  heroImage: '/Images/cities/lucknow-hero.webp',
  services: [
    { label: 'Outstation Taxi',  icon: '/svg/icons/taxi.svg',    slug: 'lucknow/outstation-cab-in-lucknow' },
    { label: 'Airport Taxi',     icon: '/svg/icons/airport.svg', slug: 'lucknow/airport-taxi-in-lucknow' },
    { label: 'Heritage Tour',    icon: '/svg/icons/darshan.svg', slug: 'lucknow/taxi-in-lucknow' },
    { label: 'Hotel Booking',    icon: '/svg/icons/hotel.svg',   slug: 'varanasi/hotel-in-varanasi' },
    { label: 'Tempo Traveller',  icon: '/svg/icons/car.svg',     slug: 'lucknow/tempo-traveller-in-lucknow' },
    { label: 'Car Rental',       icon: '/svg/icons/car.svg',     slug: 'lucknow/car-rental-in-lucknow' },
  ],
  vehicles: ['innova-crysta', 'ertiga', 'swift-dzire', 'tempo-traveller'],
  places: [
    { name: 'Bara Imambara',     image: '/Images/places/bara-imambara.webp',  distance: '0 km' },
    { name: 'Rumi Darwaza',      image: '/Images/places/rumi-darwaza.webp',   distance: '0.3 km' },
    { name: 'Hazratganj Market', image: '/Images/places/hazratganj.webp',     distance: '2 km' },
    { name: 'British Residency', image: '/Images/places/residency.webp',      distance: '3 km' },
    { name: 'Chota Imambara',    image: '/Images/places/chota-imambara.webp', distance: '1 km' },
    { name: 'Ambedkar Park',     image: '/Images/places/ambedkar-park.webp',  distance: '5 km' },
  ],
  outstationLinks: [
    { destination: 'Varanasi',  slug: 'lucknow/lucknow-to-varanasi-taxi',  fare: 3500 },
    { destination: 'Ayodhya',   slug: 'lucknow/lucknow-to-ayodhya-taxi',   fare: 1600 },
    { destination: 'Allahabad', slug: 'lucknow/lucknow-to-allahabad-taxi', fare: 2200 },
    { destination: 'Agra',      slug: 'lucknow/lucknow-to-agra-taxi',      fare: 4500 },
    { destination: 'Delhi',     slug: 'lucknow/lucknow-to-delhi-taxi',     fare: 6500 },
    { destination: 'Gaya',      slug: 'lucknow/lucknow-to-gaya-taxi',      fare: 5500 },
  ],
  seo: {
    title: 'Taxi Service in Lucknow | Cab Booking City of Nawabs | Tirupati Travel',
    description: 'Book reliable taxi and cab services in Lucknow. Outstation cabs, airport taxi, Tempo Traveller. Tirupati Travel — trusted Lucknow cab service. Call 8726124680.',
    canonical: 'https://tirupatitravel.in/lucknow',
  },
};

// ─── LUCKNOW TAXI (CityLandingTemplate specialty) ─────────────────────────────

export const lucknowTaxi: CityLandingData = {
  city: 'Lucknow',
  aliases: ['Nawabs City', 'City of Nawabs'],
  heroText: 'Reliable Taxi Services Across Lucknow & Beyond',
  heroImage: '/Images/cities/lucknow-taxi.webp',
  services: [
    { label: 'Outstation Taxi',  icon: '/svg/icons/taxi.svg',    slug: 'lucknow/outstation-cab-in-lucknow' },
    { label: 'Airport Taxi',     icon: '/svg/icons/airport.svg', slug: 'lucknow/airport-taxi-in-lucknow' },
    { label: 'Tempo Traveller',  icon: '/svg/icons/car.svg',     slug: 'lucknow/tempo-traveller-in-lucknow' },
    { label: 'Car Rental',       icon: '/svg/icons/car.svg',     slug: 'lucknow/car-rental-in-lucknow' },
  ],
  vehicles: ['innova-crysta', 'ertiga', 'swift-dzire', 'tempo-traveller'],
  places: [
    { name: 'Bara Imambara',     image: '/Images/places/bara-imambara.webp',  distance: '0 km' },
    { name: 'Rumi Darwaza',      image: '/Images/places/rumi-darwaza.webp',   distance: '0.3 km' },
    { name: 'Hazratganj Market', image: '/Images/places/hazratganj.webp',     distance: '2 km' },
    { name: 'British Residency', image: '/Images/places/residency.webp',      distance: '3 km' },
  ],
  outstationLinks: [
    { destination: 'Varanasi',  slug: 'lucknow/lucknow-to-varanasi-taxi',  fare: 3500 },
    { destination: 'Ayodhya',   slug: 'lucknow/lucknow-to-ayodhya-taxi',   fare: 1600 },
    { destination: 'Allahabad', slug: 'lucknow/lucknow-to-allahabad-taxi', fare: 2200 },
    { destination: 'Agra',      slug: 'lucknow/lucknow-to-agra-taxi',      fare: 4500 },
  ],
  seo: {
    title: 'Taxi in Lucknow | Book Cab Lucknow | Outstation & Local | Tirupati Travel',
    description: 'Best taxi service in Lucknow for outstation, airport, and local rides. AC cabs, on-time pickup, experienced drivers. Book with Tirupati Travel — 8726124680.',
    canonical: 'https://tirupatitravel.in/lucknow/taxi-in-lucknow',
  },
};

// ─── GAYA ─────────────────────────────────────────────────────────────────────

export const gaya: CityLandingData = {
  city: 'Gaya',
  aliases: ['Bodh Gaya', 'Pitru Tirth'],
  heroText: 'Taxi & Pilgrimage Services in the Land of Moksha',
  heroImage: '/Images/cities/gaya-hero.webp',
  services: [
    { label: 'Outstation Taxi', icon: '/svg/icons/taxi.svg',    slug: 'gaya/gaya-to-varanasi-taxi' },
    { label: 'Pind Daan Tour',  icon: '/svg/icons/darshan.svg', slug: 'gaya/gaya-to-varanasi-taxi' },
    { label: 'Bodh Gaya Tour',  icon: '/svg/icons/boat.svg',    slug: 'gaya/gaya-to-patna-taxi' },
    { label: 'Hotel Booking',   icon: '/svg/icons/hotel.svg',   slug: 'varanasi/hotel-in-varanasi' },
    { label: 'Car Rental',      icon: '/svg/icons/car.svg',     slug: 'gaya/gaya-to-varanasi-taxi' },
    { label: 'Airport Transfer',icon: '/svg/icons/airport.svg', slug: 'gaya/gaya-to-patna-taxi' },
  ],
  vehicles: ['innova-crysta', 'ertiga', 'swift-dzire'],
  places: [
    { name: 'Vishnupad Temple',   image: '/Images/places/vishnupad.webp',      distance: '0 km' },
    { name: 'Bodh Gaya',          image: '/Images/places/bodh-gaya.webp',      distance: '13 km' },
    { name: 'Mahabodhi Temple',   image: '/Images/places/mahabodhi.webp',      distance: '13 km' },
    { name: 'Falgu River Ghat',   image: '/Images/places/falgu-ghat.webp',     distance: '1 km' },
    { name: 'Dungeshwari Cave',   image: '/Images/places/dungeshwari.webp',    distance: '20 km' },
    { name: 'Pretshila Hill',     image: '/Images/places/pretshila.webp',      distance: '8 km' },
  ],
  outstationLinks: [
    { destination: 'Varanasi',  slug: 'gaya/gaya-to-varanasi-taxi',  fare: 2800 },
    { destination: 'Patna',     slug: 'gaya/gaya-to-patna-taxi',     fare: 2000 },
    { destination: 'Rajgir',    slug: 'gaya/gaya-to-rajgir-taxi',    fare: 1500 },
    { destination: 'Nalanda',   slug: 'gaya/gaya-to-nalanda-taxi',   fare: 1800 },
    { destination: 'Allahabad', slug: 'gaya/gaya-to-allahabad-taxi', fare: 3200 },
    { destination: 'Kolkata',   slug: 'gaya/gaya-to-kolkata-taxi',   fare: 7000 },
  ],
  seo: {
    title: 'Taxi Service in Gaya | Cab Booking Bodh Gaya Pitru Tirth | Tirupati Travel',
    description: 'Book taxi and cab services in Gaya & Bodh Gaya. Pind Daan tours, Mahabodhi Temple visits, outstation cabs. Tirupati Travel — trusted Gaya cab service.',
    canonical: 'https://tirupatitravel.in/gaya',
  },
};

// ─── GAYA PLACES TO VISIT (CityLandingTemplate variant) ───────────────────────

export const gayaPlaces: CityLandingData = {
  city: 'Gaya',
  aliases: ['Bodh Gaya', 'Pitru Tirth'],
  heroText: 'Explore Gaya — Vishnupad, Bodh Gaya, Mahabodhi Temple & More',
  heroImage: '/Images/cities/gaya-places.webp',
  services: [
    { label: 'Pind Daan Tour',  icon: '/svg/icons/darshan.svg', slug: 'gaya/gaya-to-varanasi-taxi' },
    { label: 'Bodh Gaya Tour',  icon: '/svg/icons/boat.svg',    slug: 'gaya/gaya-to-patna-taxi' },
    { label: 'Outstation Taxi', icon: '/svg/icons/taxi.svg',    slug: 'gaya/gaya-to-varanasi-taxi' },
    { label: 'Car Rental',      icon: '/svg/icons/car.svg',     slug: 'gaya/gaya-to-varanasi-taxi' },
  ],
  vehicles: ['innova-crysta', 'ertiga', 'swift-dzire'],
  places: [
    { name: 'Vishnupad Temple',  image: '/Images/places/vishnupad.webp',   distance: '0 km' },
    { name: 'Bodh Gaya',         image: '/Images/places/bodh-gaya.webp',   distance: '13 km' },
    { name: 'Mahabodhi Temple',  image: '/Images/places/mahabodhi.webp',   distance: '13 km' },
    { name: 'Falgu River Ghat',  image: '/Images/places/falgu-ghat.webp',  distance: '1 km' },
    { name: 'Dungeshwari Cave',  image: '/Images/places/dungeshwari.webp', distance: '20 km' },
    { name: 'Pretshila Hill',    image: '/Images/places/pretshila.webp',   distance: '8 km' },
    { name: 'Brahmayoni Hill',   image: '/Images/places/brahmayoni.webp',  distance: '3 km' },
    { name: 'Chinese Temple',    image: '/Images/places/chinese-temple.webp', distance: '14 km' },
  ],
  outstationLinks: [
    { destination: 'Varanasi',  slug: 'gaya/gaya-to-varanasi-taxi',  fare: 2800 },
    { destination: 'Patna',     slug: 'gaya/gaya-to-patna-taxi',     fare: 2000 },
    { destination: 'Allahabad', slug: 'gaya/gaya-to-allahabad-taxi', fare: 3200 },
    { destination: 'Rajgir',    slug: 'gaya/gaya-to-rajgir-taxi',    fare: 1500 },
  ],
  seo: {
    title: 'Places to Visit in Gaya | Bodh Gaya Tourist Spots | Tirupati Travel',
    description: 'Top places to visit in Gaya — Vishnupad Temple, Bodh Gaya, Mahabodhi Temple, Falgu Ghat. Book a sightseeing cab for Gaya & Bodh Gaya tour.',
    canonical: 'https://tirupatitravel.in/gaya/places-to-visit-in-gaya',
  },
};

// ─── VINDHYACHAL ──────────────────────────────────────────────────────────────

export const vindhyachal: CityLandingData = {
  city: 'Vindhyachal',
  aliases: ['Vindhya Dham', 'Shakti Peeth'],
  heroText: 'Taxi & Darshan Services at the Sacred Vindhya Shakti Peeth',
  heroImage: '/Images/cities/vindhyachal-hero.webp',
  services: [
    { label: 'Outstation Taxi',  icon: '/svg/icons/taxi.svg',    slug: 'vindhyachal/vindhyachal-to-varanasi-taxi' },
    { label: 'Devi Darshan',     icon: '/svg/icons/darshan.svg', slug: 'vindhyachal/vindhyachal-to-varanasi-taxi' },
    { label: 'Local Sightseeing',icon: '/svg/icons/boat.svg',    slug: 'vindhyachal/vindhyachal-to-allahabad-taxi' },
    { label: 'Hotel Booking',    icon: '/svg/icons/hotel.svg',   slug: 'varanasi/hotel-in-varanasi' },
  ],
  vehicles: ['innova-crysta', 'ertiga', 'swift-dzire'],
  places: [
    { name: 'Vindhyavasini Temple', image: '/Images/places/vindhyavasini.webp', distance: '0 km' },
    { name: 'Ashtabhuja Temple',    image: '/Images/places/ashtabhuja.webp',    distance: '3 km' },
    { name: 'Kali Khoh Temple',     image: '/Images/places/kali-khoh.webp',     distance: '2 km' },
    { name: 'Ganges Ghat',          image: '/Images/places/vindhyachal-ghat.webp', distance: '0.5 km' },
    { name: 'Sita Kund',            image: '/Images/places/sita-kund.webp',     distance: '4 km' },
    { name: 'Ram Gaya Ghat',        image: '/Images/places/ram-gaya-ghat.webp', distance: '1 km' },
  ],
  outstationLinks: [
    { destination: 'Varanasi',  slug: 'vindhyachal/vindhyachal-to-varanasi-taxi',  fare: 1500 },
    { destination: 'Allahabad', slug: 'vindhyachal/vindhyachal-to-allahabad-taxi', fare: 1200 },
    { destination: 'Lucknow',   slug: 'vindhyachal/vindhyachal-to-lucknow-taxi',   fare: 4000 },
    { destination: 'Ayodhya',   slug: 'vindhyachal/vindhyachal-to-ayodhya-taxi',   fare: 4500 },
    { destination: 'Gaya',      slug: 'vindhyachal/vindhyachal-to-gaya-taxi',      fare: 4000 },
  ],
  seo: {
    title: 'Taxi Service in Vindhyachal | Cab Booking Shakti Peeth | Tirupati Travel',
    description: 'Book taxi and cab services in Vindhyachal. Devi darshan tours, outstation cabs to Varanasi & Allahabad. Tirupati Travel — trusted Vindhyachal cab service.',
    canonical: 'https://tirupatitravel.in/vindhyachal',
  },
};

// ─── VINDHYACHAL MANDIR (CityLandingTemplate specialty) ───────────────────────

export const vindhyachalMandir: CityLandingData = {
  city: 'Vindhyachal',
  aliases: ['Vindhya Dham', 'Shakti Peeth'],
  heroText: 'Complete Vindhyachal Mandir Darshan — Three Shakti Peeths',
  heroImage: '/Images/cities/vindhyachal-mandir.webp',
  services: [
    { label: 'Devi Darshan',     icon: '/svg/icons/darshan.svg', slug: 'vindhyachal/vindhyachal-to-varanasi-taxi' },
    { label: 'Local Sightseeing',icon: '/svg/icons/boat.svg',    slug: 'vindhyachal/vindhyachal-to-allahabad-taxi' },
    { label: 'Outstation Taxi',  icon: '/svg/icons/taxi.svg',    slug: 'vindhyachal/vindhyachal-to-varanasi-taxi' },
    { label: 'Hotel Booking',    icon: '/svg/icons/hotel.svg',   slug: 'varanasi/hotel-in-varanasi' },
  ],
  vehicles: ['innova-crysta', 'ertiga', 'swift-dzire'],
  places: [
    { name: 'Vindhyavasini Temple', image: '/Images/places/vindhyavasini.webp', distance: '0 km' },
    { name: 'Ashtabhuja Temple',    image: '/Images/places/ashtabhuja.webp',    distance: '3 km' },
    { name: 'Kali Khoh Temple',     image: '/Images/places/kali-khoh.webp',     distance: '2 km' },
    { name: 'Ganges Ghat',          image: '/Images/places/vindhyachal-ghat.webp', distance: '0.5 km' },
    { name: 'Sita Kund',            image: '/Images/places/sita-kund.webp',     distance: '4 km' },
    { name: 'Ram Gaya Ghat',        image: '/Images/places/ram-gaya-ghat.webp', distance: '1 km' },
  ],
  outstationLinks: [
    { destination: 'Varanasi',  slug: 'vindhyachal/vindhyachal-to-varanasi-taxi',  fare: 1500 },
    { destination: 'Allahabad', slug: 'vindhyachal/vindhyachal-to-allahabad-taxi', fare: 1200 },
    { destination: 'Lucknow',   slug: 'vindhyachal/vindhyachal-to-lucknow-taxi',   fare: 4000 },
  ],
  seo: {
    title: 'Vindhyachal Mandir Darshan | Shakti Peeth Tour | Tirupati Travel',
    description: 'Complete Vindhyachal Mandir darshan — Vindhyavasini, Ashtabhuja, Kali Khoh temples. Book cab packages for the three Shakti Peeths with Tirupati Travel.',
    canonical: 'https://tirupatitravel.in/vindhyachal/vindhyachal-mandir',
  },
};