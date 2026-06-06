// src/data/ayodhyaRoutes.ts
// ──────────────────────────
// 20 Ayodhya outstation routes — STUB DATA.
// Distances/fares are estimated. Verify against live site before launch.
// TODO: Replace estimated values with confirmed data before going live.

import type { OutstationRouteData } from "./varanasiRoutes";

const BASE = "https://tirupatitravel.in";

function buildSeo(origin: string, dest: string, slug: string) {
  return {
    title: `${origin} to ${dest} Taxi | Book Cab | Tirupati Travel`,
    description: `Book ${origin} to ${dest} taxi at best price. AC cab, professional driver, 24/7 service. Sedan from ₹10.50/km. Call: 8726124680.`,
    canonical: `${BASE}/ayodhya/${slug}`,
  };
}

function buildFaqs(
  origin: string,
  dest: string,
  distance: string,
  fare: number,
) {
  return [
    {
      q: `How much does a taxi from ${origin} to ${dest} cost?`,
      a: `A one-way taxi from ${origin} to ${dest} starts at ₹${fare} for a sedan. Call 8726124680 for the latest rates.`,
    },
    {
      q: `How long is the ${origin} to ${dest} taxi journey?`,
      a: `The ${origin} to ${dest} route covers approximately ${distance}. Travel time depends on traffic and road conditions.`,
    },
    {
      q: `Is the ${origin} to ${dest} taxi available 24/7?`,
      a: `Yes, Tirupati Travel operates round the clock. Call or WhatsApp 8726124680 to book anytime.`,
    },
    {
      q: `Which vehicles are available for ${origin} to ${dest}?`,
      a: `Swift Dzire, Toyota Etios, Maruti Ertiga, Toyota Innova, and Innova Crysta are available for this route.`,
    },
  ];
}

// TODO: All values below are ESTIMATED — verify distances and fares before launch
export const ayodhyaToVaranasi: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Varanasi",
  distance: "205 km",
  duration: "4 hrs",
  fare: { sedan: 2153, ertiga: 2870, innova: 3280, crysta: 3690 },
  highlights: [
    "Kashi Vishwanath Temple",
    "Ganga Aarti at Dashashwamedh",
    "Sarnath Buddhist site",
  ],
  placesEnRoute: ["Faizabad", "Sultanpur", "Jaunpur"],
  faqs: buildFaqs("Ayodhya", "Varanasi", "205 km", 2153),
  seo: buildSeo("Ayodhya", "Varanasi", "ayodhya-to-varanasi-taxi"),
};

export const ayodhyaToLucknow: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Lucknow",
  distance: "135 km",
  duration: "2.5 hrs",
  fare: { sedan: 1418, ertiga: 1890, innova: 2160, crysta: 2430 },
  highlights: ["Bara Imambara", "Rumi Darwaza", "Hazratganj market"],
  placesEnRoute: ["Barabanki"],
  faqs: buildFaqs("Ayodhya", "Lucknow", "135 km", 1418),
  seo: buildSeo("Ayodhya", "Lucknow", "ayodhya-to-lucknow-taxi"),
};

export const ayodhyaToAllahabad: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Allahabad",
  distance: "165 km",
  duration: "3.5 hrs",
  fare: { sedan: 1733, ertiga: 2310, innova: 2640, crysta: 2970 },
  highlights: ["Triveni Sangam", "Anand Bhawan", "Kumbh Mela venue"],
  placesEnRoute: ["Pratapgarh"],
  faqs: buildFaqs("Ayodhya", "Allahabad", "165 km", 1733),
  seo: buildSeo("Ayodhya", "Allahabad", "ayodhya-to-allahabad-taxi"),
};

export const ayodhyaToGaya: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Gaya",
  distance: "380 km",
  duration: "7 hrs",
  fare: { sedan: 3990, ertiga: 5320, innova: 6080, crysta: 6840 },
  highlights: ["Mahabodhi Temple", "Vishnupad Temple", "Bodhi Tree"],
  placesEnRoute: ["Varanasi", "Sasaram"],
  faqs: buildFaqs("Ayodhya", "Gaya", "380 km", 3990),
  seo: buildSeo("Ayodhya", "Gaya", "ayodhya-to-gaya-taxi"),
};

export const ayodhyaToGorakhpur: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Gorakhpur",
  distance: "140 km",
  duration: "3 hrs",
  fare: { sedan: 1470, ertiga: 1960, innova: 2240, crysta: 2520 },
  highlights: ["Gorakhnath Temple", "Ramgarh Tal lake", "Geeta Press"],
  placesEnRoute: ["Basti"],
  faqs: buildFaqs("Ayodhya", "Gorakhpur", "140 km", 1470),
  seo: buildSeo("Ayodhya", "Gorakhpur", "ayodhya-to-gorakhpur-taxi"),
};

export const ayodhyaToAgra: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Agra",
  distance: "500 km",
  duration: "9 hrs",
  fare: { sedan: 5250, ertiga: 7000, innova: 8000, crysta: 9000 },
  highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
  placesEnRoute: ["Lucknow", "Kannauj"],
  faqs: buildFaqs("Ayodhya", "Agra", "500 km", 5250),
  seo: buildSeo("Ayodhya", "Agra", "ayodhya-to-agra-taxi"),
};

export const ayodhyaToMathura: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Mathura",
  distance: "430 km",
  duration: "8 hrs",
  fare: { sedan: 4515, ertiga: 6020, innova: 6880, crysta: 7740 },
  highlights: [
    "Krishna Janmabhoomi",
    "Vrindavan temples",
    "Banke Bihari Mandir",
  ],
  placesEnRoute: ["Lucknow", "Agra bypass"],
  faqs: buildFaqs("Ayodhya", "Mathura", "430 km", 4515),
  seo: buildSeo("Ayodhya", "Mathura", "ayodhya-to-mathura-taxi"),
};

export const ayodhyaToKanpur: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Kanpur",
  distance: "245 km",
  duration: "4.5 hrs",
  fare: { sedan: 2573, ertiga: 3430, innova: 3920, crysta: 4410 },
  highlights: ["JK Temple", "Bithoor Ganga Ghat", "Kanpur Zoo"],
  placesEnRoute: ["Lucknow"],
  faqs: buildFaqs("Ayodhya", "Kanpur", "245 km", 2573),
  seo: buildSeo("Ayodhya", "Kanpur", "ayodhya-to-kanpur-taxi"),
};

export const ayodhyaToPatna: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Patna",
  distance: "430 km",
  duration: "8 hrs",
  fare: { sedan: 4515, ertiga: 6020, innova: 6880, crysta: 7740 },
  highlights: ["Bihar capital", "Mahavir Mandir", "Patna Museum", "Golghar"],
  placesEnRoute: ["Varanasi", "Buxar"],
  faqs: buildFaqs("Ayodhya", "Patna", "430 km", 4515),
  seo: buildSeo("Ayodhya", "Patna", "ayodhya-to-patna-taxi"),
};

export const ayodhyaToDelhi: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Delhi",
  distance: "630 km",
  duration: "11 hrs",
  fare: { sedan: 6615, ertiga: 8820, innova: 10080, crysta: 11340 },
  highlights: ["Red Fort", "India Gate", "Qutub Minar", "Akshardham Temple"],
  placesEnRoute: ["Lucknow", "Agra"],
  faqs: buildFaqs("Ayodhya", "Delhi", "630 km", 6615),
  seo: buildSeo("Ayodhya", "Delhi", "ayodhya-to-delhi-taxi"),
};

export const ayodhyaToChitrakoot: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Chitrakoot",
  distance: "290 km",
  duration: "5.5 hrs",
  fare: { sedan: 3045, ertiga: 4060, innova: 4640, crysta: 5220 },
  highlights: [
    "Ram Ghat",
    "Kamadgiri sacred hill",
    "Gupt Godavari caves",
    "Sati Anusuya Ashram",
  ],
  placesEnRoute: ["Allahabad", "Banda"],
  faqs: buildFaqs("Ayodhya", "Chitrakoot", "290 km", 3045),
  seo: buildSeo("Ayodhya", "Chitrakoot", "ayodhya-to-chitrakoot-taxi"),
};

export const ayodhyaToVindhyachal: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Vindhyachal",
  distance: "245 km",
  duration: "4.5 hrs",
  fare: { sedan: 2573, ertiga: 3430, innova: 3920, crysta: 4410 },
  highlights: ["Vindhyavasini Devi Temple", "Ashtabhuja Temple", "Ganga Ghat"],
  placesEnRoute: ["Allahabad", "Mirzapur"],
  faqs: buildFaqs("Ayodhya", "Vindhyachal", "245 km", 2573),
  seo: buildSeo("Ayodhya", "Vindhyachal", "ayodhya-to-vindhyachal-taxi"),
};

export const ayodhyaToNaimisharanya: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Naimisharanya",
  distance: "140 km",
  duration: "3 hrs",
  fare: { sedan: 1470, ertiga: 1960, innova: 2240, crysta: 2520 },
  highlights: [
    "Chakra Tirtha",
    "Lalita Devi Temple",
    "Sacred forest pilgrimage",
  ],
  placesEnRoute: ["Sitapur"],
  faqs: buildFaqs("Ayodhya", "Naimisharanya", "140 km", 1470),
  seo: buildSeo("Ayodhya", "Naimisharanya", "ayodhya-to-naimisharanya-taxi"),
};

export const ayodhyaToBasti: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Basti",
  distance: "75 km",
  duration: "1.5 hrs",
  fare: { sedan: 788, ertiga: 1050, innova: 1200, crysta: 1350 },
  highlights: ["Basti district", "Makhoda Dham temple"],
  placesEnRoute: [],
  faqs: buildFaqs("Ayodhya", "Basti", "75 km", 788),
  seo: buildSeo("Ayodhya", "Basti", "ayodhya-to-basti-taxi"),
};

export const ayodhyaToDeoria: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Deoria",
  distance: "170 km",
  duration: "3.5 hrs",
  fare: { sedan: 1785, ertiga: 2380, innova: 2720, crysta: 3060 },
  highlights: ["Deoria district", "Kushmi forest range"],
  placesEnRoute: ["Gorakhpur"],
  faqs: buildFaqs("Ayodhya", "Deoria", "170 km", 1785),
  seo: buildSeo("Ayodhya", "Deoria", "ayodhya-to-deoria-taxi"),
};

export const ayodhyaToKushinagar: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Kushinagar",
  distance: "200 km",
  duration: "4 hrs",
  fare: { sedan: 2100, ertiga: 2800, innova: 3200, crysta: 3600 },
  highlights: [
    "Mahaparinirvana Temple",
    "Ramabhar Stupa",
    "Buddha circuit site",
  ],
  placesEnRoute: ["Gorakhpur"],
  faqs: buildFaqs("Ayodhya", "Kushinagar", "200 km", 2100),
  seo: buildSeo("Ayodhya", "Kushinagar", "ayodhya-to-kushinagar-taxi"),
};

export const ayodhyaToAzamgarh: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Azamgarh",
  distance: "145 km",
  duration: "3 hrs",
  fare: { sedan: 1523, ertiga: 2030, innova: 2320, crysta: 2610 },
  highlights: ["Durgaganj Devi temple", "Eastern UP town"],
  placesEnRoute: ["Sultanpur"],
  faqs: buildFaqs("Ayodhya", "Azamgarh", "145 km", 1523),
  seo: buildSeo("Ayodhya", "Azamgarh", "ayodhya-to-azamgarh-taxi"),
};

export const ayodhyaToJaunpur: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Jaunpur",
  distance: "130 km",
  duration: "2.5 hrs",
  fare: { sedan: 1365, ertiga: 1820, innova: 2080, crysta: 2340 },
  highlights: ["Shahi Bridge (Mughal)", "Atala Mosque", "Shahi Jama Masjid"],
  placesEnRoute: ["Sultanpur"],
  faqs: buildFaqs("Ayodhya", "Jaunpur", "130 km", 1365),
  seo: buildSeo("Ayodhya", "Jaunpur", "ayodhya-to-jaunpur-taxi"),
};

export const ayodhyaToSultanpur: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Sultanpur",
  distance: "70 km",
  duration: "1.5 hrs",
  fare: { sedan: 735, ertiga: 980, innova: 1120, crysta: 1260 },
  highlights: ["Sultanpur district", "Gomti River"],
  placesEnRoute: [],
  faqs: buildFaqs("Ayodhya", "Sultanpur", "70 km", 735),
  seo: buildSeo("Ayodhya", "Sultanpur", "ayodhya-to-sultanpur-taxi"),
};

export const ayodhyaToRaebareli: OutstationRouteData = {
  origin: "Ayodhya",
  destination: "Raebareli",
  distance: "120 km",
  duration: "2.5 hrs",
  fare: { sedan: 1260, ertiga: 1680, innova: 1920, crysta: 2160 },
  highlights: ["Dalmau Ghat on Ganga", "Historic constituency town"],
  placesEnRoute: ["Lucknow bypass"],
  faqs: buildFaqs("Ayodhya", "Raebareli", "120 km", 1260),
  seo: buildSeo("Ayodhya", "Raebareli", "ayodhya-to-raebareli-taxi"),
};
