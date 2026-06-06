// src/data/tourPackages.ts
//
// ★ IMPORTANT — Export structure matches allRoutes.ts dataKey pattern:
//   dataKey: 'tourPackages.varanasiTour'
//   → urlParser resolves: DATA_SOURCES['tourPackages']['varanasiTour']
//   → import * as tourPackages → tourPackages.varanasiTour
//
// So every package MUST be a named export, NOT just array entries.
//
// Chunk 2 had 4 packages in an array — this file restructures to named exports
// AND adds 2 new Allahabad packages + 2 extra packages (gaya, varanasi+ayodhya combo).
//
// TODO: FUTURE — replace with db.tourPackage.findMany() when Chunk 10 DB is active

export interface TourPackage {
  slug: string;
  packageName: string;
  city: string;
  duration: string;
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
    group?: number;
  };
  faqs: { q: string; a: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// VARANASI PACKAGES
// ─────────────────────────────────────────────────────────────────────────────

export const varanasiDarshan: TourPackage = {
  slug: "varanasi-darshan-tour-package",
  packageName: "Varanasi Darshan",
  city: "Varanasi",
  duration: "1 Night 2 Days",
  image: "/assets/images/varanasi-tour-package.jpg",
  itinerary: [
    {
      day: 1,
      title: "Arrival & Evening Ganga Aarti",
      activities: [
        "Pickup from Varanasi railway station or airport",
        "Hotel check-in and rest",
        "Evening visit to Dashashwamedh Ghat for Ganga Aarti",
        "Boat ride at sunset on the Ganga",
        "Dinner at a local restaurant near the ghats",
      ],
    },
    {
      day: 2,
      title: "Morning Kashi Darshan & Departure",
      activities: [
        "Early morning sunrise boat ride on the Ganga",
        "Visit Kashi Vishwanath Temple",
        "Explore Annapurna Devi Temple & Kal Bhairav Temple",
        "Shopping at Vishwanath Gali for silk sarees & souvenirs",
        "Drop at railway station or airport",
      ],
    },
  ],
  inclusions: [
    "AC cab for all transfers and sightseeing",
    "1-night accommodation in a 3-star hotel",
    "Breakfast on Day 2",
    "Driver allowance and toll charges",
    "Boat ride on the Ganga (both morning and evening)",
  ],
  exclusions: [
    "Flight / train tickets",
    "Lunch and dinner (except mentioned)",
    "Entry fees at monuments and temples",
    "Personal expenses",
    "Tips to driver",
  ],
  pricing: { perPerson: 3500, group: 2800 },
  faqs: [
    {
      q: "What is the best time to visit Varanasi?",
      a: "October to March is ideal. Avoid peak summer (May–June) due to extreme heat.",
    },
    {
      q: "Can I extend the package by one more day?",
      a: "Yes, contact us and we will customise the itinerary and pricing for you.",
    },
  ],
  seo: {
    title: "Varanasi Darshan Tour Package — 1N 2D | Tirupati Travel",
    description:
      "Book our 1 Night 2 Day Varanasi Darshan tour package. Includes Ganga Aarti, Kashi Vishwanath darshan, sunrise boat ride and AC cab. Starting ₹3,500/person.",
    canonical:
      "https://tirupatitravel.in/varanasi/varanasi-darshan-tour-package",
  },
};

export const varanasiTour: TourPackage = {
  slug: "varanasi-tour-packages",
  packageName: "Varanasi Explorer",
  city: "Varanasi",
  duration: "2 Nights 3 Days",
  image: "/assets/images/varanasitour-package.jpeg",
  itinerary: [
    {
      day: 1,
      title: "Arrival & Sacred Aarti",
      activities: [
        "Pickup from station/airport, hotel check-in",
        "Evening Ganga Aarti at Dashashwamedh Ghat",
        "Boat ride on the Ganga at dusk",
      ],
    },
    {
      day: 2,
      title: "Kashi Vishwanath & Sarnath",
      activities: [
        "Early morning sunrise boat ride",
        "Kashi Vishwanath Temple darshan",
        "Annapurna Devi and Kal Bhairav Temple",
        "Afternoon excursion to Sarnath (Buddhist pilgrimage site)",
        "Sarnath Museum visit",
      ],
    },
    {
      day: 3,
      title: "Ghats Walk & Departure",
      activities: [
        "Morning walk along the 84 ghats",
        "Visit Manikarnika Ghat, Assi Ghat",
        "Shopping at Godowlia market",
        "Drop at station/airport",
      ],
    },
  ],
  inclusions: [
    "AC cab for all transfers and sightseeing",
    "2-night accommodation in 3-star hotel",
    "Daily breakfast",
    "Boat rides (morning + evening)",
    "Sarnath tour",
    "Driver allowance and toll charges",
  ],
  exclusions: [
    "Flight / train tickets",
    "Lunch and dinner (except mentioned)",
    "Entry fees",
    "Personal expenses",
  ],
  pricing: { perPerson: 5500, group: 4500 },
  faqs: [
    {
      q: "Is this package suitable for senior citizens?",
      a: "Yes, we arrange wheelchair-friendly transfers and slow-paced darshan schedules on request.",
    },
  ],
  seo: {
    title:
      "Varanasi Tour Package 2N 3D | Kashi Darshan + Sarnath | Tirupati Travel",
    description:
      "Book 2 Night 3 Day Varanasi Explorer package. Covers Ganga Aarti, Kashi Vishwanath, Sarnath & 84 ghats. AC cab, hotel included. From ₹5,500/person.",
    canonical: "https://tirupatitravel.in/varanasi/varanasi-tour-packages",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// AYODHYA PACKAGES
// ─────────────────────────────────────────────────────────────────────────────

export const ayodhyaDarshan: TourPackage = {
  slug: "ayodhya-darshan-tour-package",
  packageName: "Ayodhya Darshan",
  city: "Ayodhya",
  duration: "1 Night 2 Days",
  image: "/assets/images/Ayodhya/ayodhya.jpeg",
  itinerary: [
    {
      day: 1,
      title: "Arrival & Ram Mandir Darshan",
      activities: [
        "Pickup from Varanasi or Lucknow",
        "Hotel check-in in Ayodhya",
        "Evening darshan at Ram Janmabhoomi (Ram Mandir)",
        "Visit Hanuman Garhi Temple",
        "Sarayu Aarti at Naya Ghat",
      ],
    },
    {
      day: 2,
      title: "Ayodhya Parikrama & Departure",
      activities: [
        "Morning Sarayu river boat ride",
        "Kanak Bhavan Temple darshan",
        "Sita ki Rasoi and Ramkot area",
        "Visit Tulsi Smarak Bhavan",
        "Drop at railway station or return to Varanasi",
      ],
    },
  ],
  inclusions: [
    "AC cab from Varanasi and back (or Lucknow)",
    "1-night hotel stay in Ayodhya",
    "Breakfast on Day 2",
    "All local transfers in Ayodhya",
    "Sarayu boat ride",
  ],
  exclusions: [
    "Train/flight tickets",
    "Meals (except breakfast)",
    "Temple entry charges (if any)",
    "Personal shopping",
  ],
  pricing: { perPerson: 4000, group: 3200 },
  faqs: [
    {
      q: "How far is Ayodhya from Varanasi?",
      a: "Ayodhya is approximately 200 km from Varanasi, about a 4-hour drive on NH-27.",
    },
  ],
  seo: {
    title: "Ayodhya Darshan Tour Package 1N 2D | Ram Mandir | Tirupati Travel",
    description:
      "Book Ayodhya Darshan package from Varanasi or Lucknow. Covers Ram Mandir, Hanuman Garhi, Sarayu Aarti. AC cab + hotel. Starting ₹4,000/person.",
    canonical: "https://tirupatitravel.in/ayodhya/ayodhya-darshan-tour-package",
  },
};

export const ayodhyaTour: TourPackage = {
  slug: "ayodhya-tour-packages",
  packageName: "Ayodhya Pilgrimage",
  city: "Ayodhya",
  duration: "2 Nights 3 Days",
  image: "/assets/images/Ayodhya/Ayodhya_fort.jpeg",
  itinerary: [
    {
      day: 1,
      title: "Arrival & Evening Darshan",
      activities: [
        "Pickup from Varanasi, Lucknow or Faizabad",
        "Hotel check-in",
        "Evening darshan at Ram Janmabhoomi Temple",
        "Sarayu Aarti at Ghat",
      ],
    },
    {
      day: 2,
      title: "Full Ayodhya Darshan",
      activities: [
        "Hanuman Garhi, Kanak Bhavan, Nageshwarnath Temple",
        "Sita ki Rasoi, Ramkot, Treta ka Thakur",
        "Afternoon rest",
        "Evening at Sarayu Ghat",
      ],
    },
    {
      day: 3,
      title: "Guptar Ghat & Departure",
      activities: [
        "Morning visit to Guptar Ghat (where Lord Ram took Jal Samadhi)",
        "Tulsi Smarak Bhavan",
        "Shopping at local markets",
        "Drop at railway station or hotel departure",
      ],
    },
  ],
  inclusions: [
    "AC cab round trip from Varanasi",
    "2-night hotel stay in Ayodhya",
    "Daily breakfast",
    "All local sightseeing transfers",
    "Sarayu boat ride",
  ],
  exclusions: [
    "Train tickets",
    "Lunch and dinners",
    "Personal expenses",
    "Entry fees",
  ],
  pricing: { perPerson: 6000, group: 5000 },
  faqs: [
    {
      q: "Can I visit Ayodhya with kids?",
      a: "Absolutely. Ayodhya is a family-friendly pilgrimage city. We ensure comfortable travel and appropriate pacing for families with children.",
    },
  ],
  seo: {
    title:
      "Ayodhya Pilgrimage Tour Package 2N 3D | Ram Mandir Darshan | Tirupati Travel",
    description:
      "Complete Ayodhya pilgrimage package — Ram Mandir, Hanuman Garhi, Sarayu Aarti, Guptar Ghat. 2 Nights, AC cab + hotel from Varanasi. ₹6,000/person.",
    canonical: "https://tirupatitravel.in/ayodhya/ayodhya-tour-packages",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ALLAHABAD PACKAGES (new in Chunk 7)
// ─────────────────────────────────────────────────────────────────────────────

export const allahabadDarshan: TourPackage = {
  slug: "allahabad-darshan-tour-package",
  packageName: "Allahabad Darshan",
  city: "Allahabad",
  duration: "1 Night 2 Days",
  image: "/assets/images/allahabad.webp",
  itinerary: [
    {
      day: 1,
      title: "Arrival & Triveni Sangam",
      activities: [
        "Pickup from Varanasi or Lucknow",
        "Hotel check-in in Allahabad",
        "Afternoon boat ride at Triveni Sangam (confluence of Ganga, Yamuna & Saraswati)",
        "Evening aarti at Sangam Ghat",
        "Visit Allahabad Fort (exterior view)",
      ],
    },
    {
      day: 2,
      title: "Prayagraj Temples & Departure",
      activities: [
        "Morning dip at Sangam (optional)",
        "Hanuman Mandir darshan (monkey temple at Sangam)",
        "Visit Anand Bhavan & Swaraj Bhavan (Nehru family home)",
        "Shankara Viman Mandapam temple",
        "Drop at railway station or return to Varanasi",
      ],
    },
  ],
  inclusions: [
    "AC cab from Varanasi and back (or from Lucknow)",
    "1-night hotel stay in Allahabad",
    "Breakfast on Day 2",
    "Sangam boat ride",
    "All local transfers",
    "Driver allowance and toll charges",
  ],
  exclusions: [
    "Train/flight tickets",
    "Meals (except breakfast)",
    "Anand Bhavan entry fee (₹70)",
    "Personal expenses",
  ],
  pricing: { perPerson: 3800, group: 3000 },
  faqs: [
    {
      q: "How far is Allahabad from Varanasi?",
      a: "Allahabad is about 125 km from Varanasi, approximately 2.5 hours by cab via NH-19.",
    },
    {
      q: "What is the best time to visit Allahabad?",
      a: "October to March is ideal. The Magh Mela (Jan–Feb) and Kumbh Mela attract millions of pilgrims.",
    },
  ],
  seo: {
    title:
      "Allahabad Darshan Tour Package 1N 2D | Sangam Tour | Tirupati Travel",
    description:
      "Book Allahabad Darshan package. Triveni Sangam boat ride, Hanuman Mandir, Anand Bhavan. AC cab + hotel. Starting ₹3,800/person.",
    canonical:
      "https://tirupatitravel.in/allahabad/allahabad-darshan-tour-package",
  },
};

export const allahabadTour: TourPackage = {
  slug: "allahabad-tour-packages",
  packageName: "Prayagraj Explorer",
  city: "Allahabad",
  duration: "2 Nights 3 Days",
  image: "/assets/images/allahabad.webp",
  itinerary: [
    {
      day: 1,
      title: "Arrival & Sangam Aarti",
      activities: [
        "Pickup from Varanasi or Lucknow, hotel check-in",
        "Afternoon Triveni Sangam boat ride",
        "Evening Sangam Ghat aarti",
      ],
    },
    {
      day: 2,
      title: "Prayagraj Heritage Tour",
      activities: [
        "Morning dip at Sangam",
        "Allahabad Fort (Akbar's Fort) — exterior view",
        "Ashoka Pillar in the fort complex",
        "Anand Bhavan & Swaraj Bhavan (Nehru family heritage)",
        "Khusro Bagh — Mughal garden tombs",
        "Evening at Civil Lines for dinner",
      ],
    },
    {
      day: 3,
      title: "Temples & Departure",
      activities: [
        "Hanuman Mandir at Sangam",
        "Shankara Viman Mandapam",
        "Saraswati Koop (sacred well within fort area)",
        "Shopping at Chowk market",
        "Drop at railway station",
      ],
    },
  ],
  inclusions: [
    "AC cab for all transfers and sightseeing",
    "2-night accommodation in 3-star hotel",
    "Daily breakfast",
    "Sangam boat rides (Day 1 + Day 2 morning)",
    "Driver allowance and toll charges",
  ],
  exclusions: [
    "Train / flight tickets",
    "Lunch and dinner (except mentioned)",
    "Anand Bhavan entry fee",
    "Personal expenses",
  ],
  pricing: { perPerson: 5000, group: 4200 },
  faqs: [
    {
      q: "Can I combine Allahabad and Varanasi in one trip?",
      a: "Yes. Many pilgrims do Varanasi (2 nights) + Allahabad (1 night) in a combined 4-night itinerary. Contact us for a custom package.",
    },
    {
      q: "Is the package available during Kumbh Mela?",
      a: "Yes, but prices and availability vary during Kumbh/Magh Mela. Book at least 3 months in advance for Kumbh season.",
    },
  ],
  seo: {
    title:
      "Allahabad Tour Package 2N 3D | Prayagraj Sangam Tour | Tirupati Travel",
    description:
      "Book 2 Night 3 Day Allahabad tour. Triveni Sangam, Allahabad Fort, Anand Bhavan, Khusro Bagh. AC cab + hotel. From ₹5,000/person.",
    canonical: "https://tirupatitravel.in/allahabad/allahabad-tour-packages",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// EXTRA PACKAGES — 2 additional (answer Q1: add 2 more that aren't live yet)
// ─────────────────────────────────────────────────────────────────────────────

export const varanasiAyodhyaTour: TourPackage = {
  slug: "varanasi-ayodhya-tour-package",
  packageName: "Varanasi & Ayodhya Combo",
  city: "Varanasi",
  duration: "3 Nights 4 Days",
  image: "/assets/images/varanasi-tour-package.jpg",
  itinerary: [
    {
      day: 1,
      title: "Arrival in Varanasi",
      activities: [
        "Pickup from Varanasi airport/station",
        "Hotel check-in",
        "Evening Ganga Aarti at Dashashwamedh Ghat",
        "Sunset boat ride",
      ],
    },
    {
      day: 2,
      title: "Varanasi Darshan",
      activities: [
        "Sunrise boat ride on the Ganga",
        "Kashi Vishwanath Temple darshan",
        "Kal Bhairav, Annapurna Devi temples",
        "Sarnath excursion (Buddhist pilgrimage, 12 km)",
      ],
    },
    {
      day: 3,
      title: "Varanasi to Ayodhya",
      activities: [
        "Post-breakfast departure to Ayodhya (4 hrs, NH-27)",
        "Hotel check-in in Ayodhya",
        "Evening darshan at Ram Janmabhoomi",
        "Sarayu Aarti at Ram ki Paidi",
      ],
    },
    {
      day: 4,
      title: "Ayodhya Darshan & Departure",
      activities: [
        "Morning Sarayu boat ride",
        "Hanuman Garhi, Kanak Bhavan darshan",
        "Sita ki Rasoi, Guptar Ghat",
        "Return to Varanasi or drop at Faizabad station",
      ],
    },
  ],
  inclusions: [
    "AC cab for all transfers and sightseeing",
    "2 nights in Varanasi + 1 night in Ayodhya (3-star hotels)",
    "Daily breakfast",
    "Ganga + Sarayu boat rides",
    "Sarnath excursion",
    "Driver allowance and toll charges",
  ],
  exclusions: [
    "Flight / train tickets",
    "Lunch and dinner (except mentioned)",
    "Temple entry fees",
    "Personal expenses",
  ],
  pricing: { perPerson: 9500, group: 8000 },
  faqs: [
    {
      q: "Can I start this package from Lucknow instead of Varanasi?",
      a: "Yes. We can reverse the itinerary — Ayodhya first, then Varanasi. Contact us for a custom package.",
    },
    {
      q: "Can I add Allahabad/Prayagraj to this combo?",
      a: "Yes. We offer a full Prayagraj-Varanasi-Ayodhya 5-night combo. Contact us for details.",
    },
  ],
  seo: {
    title:
      "Varanasi Ayodhya Tour Package 3N 4D | Pilgrimage Combo | Tirupati Travel",
    description:
      "Book Varanasi + Ayodhya combo pilgrimage package. Ganga Aarti, Kashi Vishwanath, Ram Mandir. 3 nights, AC cab + hotels. From ₹9,500/person.",
    canonical:
      "https://tirupatitravel.in/varanasi/varanasi-ayodhya-tour-package",
  },
};

export const gayaTour: TourPackage = {
  slug: "gaya-tour-packages",
  packageName: "Gaya & Bodh Gaya Darshan",
  city: "Gaya",
  duration: "1 Night 2 Days",
  image: "/assets/images/gaya.webp",
  itinerary: [
    {
      day: 1,
      title: "Arrival & Vishnupad Temple",
      activities: [
        "Pickup from Varanasi or Patna",
        "Hotel check-in in Gaya",
        "Vishnupad Temple darshan (Lord Vishnu's footprint)",
        "Falgu River pind-daan ghat visit",
        "Mangala Gauri Temple",
      ],
    },
    {
      day: 2,
      title: "Bodh Gaya Pilgrimage & Departure",
      activities: [
        "Morning transfer to Bodh Gaya (13 km from Gaya)",
        "Mahabodhi Temple (UNESCO World Heritage Site)",
        "Bodhi Tree (where Buddha attained enlightenment)",
        "Buddha statue (80 ft)",
        "Thai, Japanese, Tibetan Buddhist monasteries",
        "Return to Gaya — drop at station",
      ],
    },
  ],
  inclusions: [
    "AC cab from Varanasi to Gaya and back",
    "1-night hotel stay in Gaya",
    "Breakfast on Day 2",
    "Bodh Gaya excursion",
    "Driver allowance and toll charges",
  ],
  exclusions: [
    "Train/flight tickets",
    "Meals (except breakfast)",
    "Mahabodhi Temple entry (free)",
    "Personal expenses",
  ],
  pricing: { perPerson: 5500, group: 4500 },
  faqs: [
    {
      q: "How far is Bodh Gaya from Gaya?",
      a: "Bodh Gaya is 13 km from Gaya city, about 25 minutes by cab.",
    },
    {
      q: "Can I combine Gaya with Varanasi?",
      a: "Yes. A Varanasi + Gaya 3-night combo is one of our most popular packages. Contact us for details.",
    },
  ],
  seo: {
    title: "Gaya Bodh Gaya Tour Package 1N 2D | Pilgrimage | Tirupati Travel",
    description:
      "Book Gaya & Bodh Gaya darshan package. Vishnupad Temple, Mahabodhi Temple, Bodhi Tree. AC cab + hotel. From ₹5,500/person.",
    canonical: "https://tirupatitravel.in/gaya/gaya-tour-packages",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// HELPER — array export for TourPackageCards homepage component
// ─────────────────────────────────────────────────────────────────────────────
export const tourPackages: TourPackage[] = [
  varanasiDarshan,
  varanasiTour,
  ayodhyaDarshan,
  ayodhyaTour,
  allahabadDarshan,
  allahabadTour,
  varanasiAyodhyaTour,
  gayaTour,
];

export function getTourPackageBySlug(slug: string): TourPackage | undefined {
  return tourPackages.find((p) => p.slug === slug);
}
