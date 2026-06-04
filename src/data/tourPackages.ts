export interface TourPackage {
  slug: string;
  packageName: string;
  city: string;
  duration: string;       // e.g. '1 Night 2 Days'
  image: string;
  itinerary: {
    day: number;
    title: string;
    activities: string[];
  }[];
  inclusions: string[];
  exclusions: string[];
  pricing: {
    perPerson: number;
    group?: number;       // group price (per person for 4+ pax)
  };
  faqs: { q: string; a: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
}

// TODO: FUTURE — replace with db.tourPackage.findMany() when Chunk 10 DB is active
export const tourPackages: TourPackage[] = [
  {
    slug: 'varanasi-darshan-tour-package',
    packageName: 'Varanasi Darshan',
    city: 'Varanasi',
    duration: '1 Night 2 Days',
    image: '/assets/images/varanasi-tour-package.webp',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Evening Ganga Aarti',
        activities: [
          'Pickup from Varanasi railway station or airport',
          'Hotel check-in and rest',
          'Evening visit to Dashashwamedh Ghat for Ganga Aarti',
          'Boat ride at sunset on the Ganga',
          'Dinner at a local restaurant near the ghats',
        ],
      },
      {
        day: 2,
        title: 'Morning Kashi Darshan & Departure',
        activities: [
          'Early morning sunrise boat ride on the Ganga',
          'Visit Kashi Vishwanath Temple',
          'Explore Annapurna Devi Temple & Kal Bhairav Temple',
          'Shopping at Vishwanath Gali for silk sarees & souvenirs',
          'Drop at railway station or airport',
        ],
      },
    ],
    inclusions: [
      'AC cab for all transfers and sightseeing',
      '1-night accommodation in a 3-star hotel',
      'Breakfast on Day 2',
      'Driver allowance and toll charges',
      'Boat ride on the Ganga (both morning and evening)',
    ],
    exclusions: [
      'Flight / train tickets',
      'Lunch and dinner (except mentioned)',
      'Entry fees at monuments and temples',
      'Personal expenses',
      'Tips to driver',
    ],
    pricing: { perPerson: 3500, group: 2800 },
    faqs: [
      {
        q: 'What is the best time to visit Varanasi?',
        a: 'October to March is ideal. Avoid peak summer (May–June) due to extreme heat.',
      },
      {
        q: 'Can I extend the package by one more day?',
        a: 'Yes, contact us and we will customise the itinerary and pricing for you.',
      },
    ],
    seo: {
      title: 'Varanasi Darshan Tour Package — 1N 2D | Tirupati Travel',
      description:
        'Book our 1 Night 2 Day Varanasi Darshan tour package. Includes Ganga Aarti, Kashi Vishwanath darshan, sunrise boat ride and AC cab. Starting ₹3,500/person.',
      canonical: 'https://tirupatitravel.in/varanasi/varanasi-darshan-tour-package',
    },
  },

  {
    slug: 'varanasi-tour-packages',
    packageName: 'Varanasi Explorer',
    city: 'Varanasi',
    duration: '2 Nights 3 Days',
    image: '/assets/images/varanasi-tour-package.webp',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Sacred Aarti',
        activities: [
          'Pickup from station/airport, hotel check-in',
          'Evening Ganga Aarti at Dashashwamedh Ghat',
          'Boat ride on the Ganga at dusk',
        ],
      },
      {
        day: 2,
        title: 'Kashi Vishwanath & Sarnath',
        activities: [
          'Early morning sunrise boat ride',
          'Kashi Vishwanath Temple darshan',
          'Annapurna Devi and Kal Bhairav Temple',
          'Afternoon excursion to Sarnath (Buddhist pilgrimage site)',
          'Sarnath Museum visit',
        ],
      },
      {
        day: 3,
        title: 'Ghats Walk & Departure',
        activities: [
          'Morning walk along the 84 ghats',
          'Visit Manikarnika Ghat, Assi Ghat',
          'Shopping at Godowlia market',
          'Drop at station/airport',
        ],
      },
    ],
    inclusions: [
      'AC cab for all transfers and sightseeing',
      '2-night accommodation in 3-star hotel',
      'Daily breakfast',
      'Boat rides (morning + evening)',
      'Sarnath tour',
      'Driver allowance and toll charges',
    ],
    exclusions: [
      'Flight / train tickets',
      'Lunch and dinner (except mentioned)',
      'Entry fees',
      'Personal expenses',
    ],
    pricing: { perPerson: 5500, group: 4500 },
    faqs: [
      {
        q: 'Is this package suitable for senior citizens?',
        a: 'Yes, we arrange wheelchair-friendly transfers and slow-paced darshan schedules on request.',
      },
    ],
    seo: {
      title: 'Varanasi Tour Package 2N 3D | Kashi Darshan + Sarnath | Tirupati Travel',
      description:
        'Book 2 Night 3 Day Varanasi Explorer package. Covers Ganga Aarti, Kashi Vishwanath, Sarnath & 84 ghats. AC cab, hotel included. From ₹5,500/person.',
      canonical: 'https://tirupatitravel.in/varanasi/varanasi-tour-packages',
    },
  },

  {
    slug: 'ayodhya-darshan-tour-package',
    packageName: 'Ayodhya Darshan',
    city: 'Ayodhya',
    duration: '1 Night 2 Days',
    image: '/assets/images/ayodhya.webp',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Ram Mandir Darshan',
        activities: [
          'Pickup from Varanasi or Lucknow',
          'Hotel check-in in Ayodhya',
          'Evening darshan at Ram Janmabhoomi (Ram Mandir)',
          'Visit Hanuman Garhi Temple',
          'Sarayu Aarti at Naya Ghat',
        ],
      },
      {
        day: 2,
        title: 'Ayodhya Parikrama & Departure',
        activities: [
          'Morning Sarayu river boat ride',
          'Kanak Bhavan Temple darshan',
          'Sita ki Rasoi and Ramkot area',
          'Visit Tulsi Smarak Bhavan',
          'Drop at railway station or return to Varanasi',
        ],
      },
    ],
    inclusions: [
      'AC cab from Varanasi and back (or Lucknow)',
      '1-night hotel stay in Ayodhya',
      'Breakfast on Day 2',
      'All local transfers in Ayodhya',
      'Sarayu boat ride',
    ],
    exclusions: [
      'Train/flight tickets',
      'Meals (except breakfast)',
      'Temple entry charges (if any)',
      'Personal shopping',
    ],
    pricing: { perPerson: 4000, group: 3200 },
    faqs: [
      {
        q: 'How far is Ayodhya from Varanasi?',
        a: 'Ayodhya is approximately 200 km from Varanasi, about a 4-hour drive on NH-27.',
      },
    ],
    seo: {
      title: 'Ayodhya Darshan Tour Package 1N 2D | Ram Mandir | Tirupati Travel',
      description:
        'Book Ayodhya Darshan package from Varanasi or Lucknow. Covers Ram Mandir, Hanuman Garhi, Sarayu Aarti. AC cab + hotel. Starting ₹4,000/person.',
      canonical: 'https://tirupatitravel.in/ayodhya/ayodhya-darshan-tour-package',
    },
  },

  {
    slug: 'ayodhya-tour-packages',
    packageName: 'Ayodhya Pilgrimage',
    city: 'Ayodhya',
    duration: '2 Nights 3 Days',
    image: '/assets/images/ayodhya.webp',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Evening Darshan',
        activities: [
          'Pickup from Varanasi, Lucknow or Faizabad',
          'Hotel check-in',
          'Evening darshan at Ram Janmabhoomi Temple',
          'Sarayu Aarti at Ghat',
        ],
      },
      {
        day: 2,
        title: 'Full Ayodhya Darshan',
        activities: [
          'Hanuman Garhi, Kanak Bhavan, Nageshwarnath Temple',
          'Sita ki Rasoi, Ramkot, Treta ka Thakur',
          'Afternoon rest',
          'Evening at Sarayu Ghat',
        ],
      },
      {
        day: 3,
        title: 'Guptar Ghat & Departure',
        activities: [
          'Morning visit to Guptar Ghat (where Lord Ram took Jal Samadhi)',
          'Tulsi Smarak Bhavan',
          'Shopping at local markets',
          'Drop at railway station or hotel departure',
        ],
      },
    ],
    inclusions: [
      'AC cab round trip from Varanasi',
      '2-night hotel stay in Ayodhya',
      'Daily breakfast',
      'All local sightseeing transfers',
      'Sarayu boat ride',
    ],
    exclusions: [
      'Train tickets',
      'Lunch and dinners',
      'Personal expenses',
      'Entry fees',
    ],
    pricing: { perPerson: 6000, group: 5000 },
    faqs: [
      {
        q: 'Can I visit Ayodhya with kids?',
        a: 'Absolutely. Ayodhya is a family-friendly pilgrimage city. We ensure comfortable travel and appropriate pacing for families with children.',
      },
    ],
    seo: {
      title: 'Ayodhya Pilgrimage Tour Package 2N 3D | Ram Mandir Darshan | Tirupati Travel',
      description:
        'Complete Ayodhya pilgrimage package — Ram Mandir, Hanuman Garhi, Sarayu Aarti, Guptar Ghat. 2 Nights, AC cab + hotel from Varanasi. ₹6,000/person.',
      canonical: 'https://tirupatitravel.in/ayodhya/ayodhya-tour-packages',
    },
  },
];

// Helper — used by allRoutes.ts and TourPackageCards
export function getTourPackageBySlug(slug: string): TourPackage | undefined {
  return tourPackages.find((p) => p.slug === slug);
}