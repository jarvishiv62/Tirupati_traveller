// src/data/lucknowRoutes.ts — 10 Lucknow outstation stubs
// TODO: Verify all distances and fares before launch.

import type { OutstationRouteData } from "./varanasiRoutes";
const BASE = "https://tirupatitravel.in";

function seo(o: string, d: string, slug: string) {
  return {
    title: `${o} to ${d} Taxi | Book Cab | Tirupati Travel`,
    description: `Book ${o} to ${d} taxi at best price. AC cab, professional driver. Sedan from ₹10.50/km. Call: 8726124680.`,
    canonical: `${BASE}/lucknow/${slug}`,
  };
}
function faqs(o: string, d: string, dist: string, fare: number) {
  return [
    {
      q: `How much does a taxi from ${o} to ${d} cost?`,
      a: `Starts at ₹${fare} for a sedan. Call 8726124680 for current rates.`,
    },
    { q: `How long is the ${o} to ${d} journey?`, a: `Approximately ${dist}.` },
    {
      q: `Is the ${o} to ${d} taxi available 24/7?`,
      a: `Yes. Call or WhatsApp 8726124680 anytime.`,
    },
    {
      q: `Which vehicles are available?`,
      a: `Swift Dzire, Etios, Ertiga, Innova, Innova Crysta.`,
    },
  ];
}

export const lucknowToVaranasi: OutstationRouteData = {
  origin: "Lucknow",
  destination: "Varanasi",
  distance: "320 km",
  duration: "6 hrs",
  fare: { sedan: 3360, ertiga: 4480, innova: 5120, crysta: 5760 },
  highlights: ["Kashi Vishwanath", "Ganga Aarti", "Sarnath"],
  placesEnRoute: ["Allahabad", "Sultanpur"],
  faqs: faqs("Lucknow", "Varanasi", "320 km", 3360),
  seo: seo("Lucknow", "Varanasi", "lucknow-to-varanasi-taxi"),
};
export const lucknowToAyodhya: OutstationRouteData = {
  origin: "Lucknow",
  destination: "Ayodhya",
  distance: "135 km",
  duration: "2.5 hrs",
  fare: { sedan: 1418, ertiga: 1890, innova: 2160, crysta: 2430 },
  highlights: ["Ram Janmabhoomi", "Hanuman Garhi", "Saryu Ghat"],
  placesEnRoute: ["Barabanki"],
  faqs: faqs("Lucknow", "Ayodhya", "135 km", 1418),
  seo: seo("Lucknow", "Ayodhya", "lucknow-to-ayodhya-taxi"),
};
export const lucknowToAllahabad: OutstationRouteData = {
  origin: "Lucknow",
  destination: "Allahabad",
  distance: "200 km",
  duration: "4 hrs",
  fare: { sedan: 2100, ertiga: 2800, innova: 3200, crysta: 3600 },
  highlights: ["Triveni Sangam", "Anand Bhawan", "Kumbh Mela venue"],
  placesEnRoute: ["Raebareli"],
  faqs: faqs("Lucknow", "Allahabad", "200 km", 2100),
  seo: seo("Lucknow", "Allahabad", "lucknow-to-allahabad-taxi"),
};
export const lucknowToAgra: OutstationRouteData = {
  origin: "Lucknow",
  destination: "Agra",
  distance: "335 km",
  duration: "6 hrs",
  fare: { sedan: 3518, ertiga: 4690, innova: 5360, crysta: 6030 },
  highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
  placesEnRoute: ["Kanpur", "Etawah"],
  faqs: faqs("Lucknow", "Agra", "335 km", 3518),
  seo: seo("Lucknow", "Agra", "lucknow-to-agra-taxi"),
};
export const lucknowToKanpur: OutstationRouteData = {
  origin: "Lucknow",
  destination: "Kanpur",
  distance: "85 km",
  duration: "1.5 hrs",
  fare: { sedan: 893, ertiga: 1190, innova: 1360, crysta: 1530 },
  highlights: ["JK Temple", "Bithoor Ganga Ghat", "Kanpur Zoological Park"],
  placesEnRoute: [],
  faqs: faqs("Lucknow", "Kanpur", "85 km", 893),
  seo: seo("Lucknow", "Kanpur", "lucknow-to-kanpur-taxi"),
};
export const lucknowToDelhi: OutstationRouteData = {
  origin: "Lucknow",
  destination: "Delhi",
  distance: "500 km",
  duration: "8 hrs",
  fare: { sedan: 5250, ertiga: 7000, innova: 8000, crysta: 9000 },
  highlights: ["Red Fort", "India Gate", "Qutub Minar", "Akshardham"],
  placesEnRoute: ["Agra", "Mathura"],
  faqs: faqs("Lucknow", "Delhi", "500 km", 5250),
  seo: seo("Lucknow", "Delhi", "lucknow-to-delhi-taxi"),
};
export const lucknowToGorakhpur: OutstationRouteData = {
  origin: "Lucknow",
  destination: "Gorakhpur",
  distance: "265 km",
  duration: "5 hrs",
  fare: { sedan: 2783, ertiga: 3710, innova: 4240, crysta: 4770 },
  highlights: ["Gorakhnath Temple", "Ramgarh Tal", "Geeta Press"],
  placesEnRoute: ["Basti"],
  faqs: faqs("Lucknow", "Gorakhpur", "265 km", 2783),
  seo: seo("Lucknow", "Gorakhpur", "lucknow-to-gorakhpur-taxi"),
};
export const lucknowToMathura: OutstationRouteData = {
  origin: "Lucknow",
  destination: "Mathura",
  distance: "310 km",
  duration: "5.5 hrs",
  fare: { sedan: 3255, ertiga: 4340, innova: 4960, crysta: 5580 },
  highlights: ["Krishna Janmabhoomi", "Vrindavan", "Banke Bihari Mandir"],
  placesEnRoute: ["Kanpur", "Agra"],
  faqs: faqs("Lucknow", "Mathura", "310 km", 3255),
  seo: seo("Lucknow", "Mathura", "lucknow-to-mathura-taxi"),
};
export const lucknowToGaya: OutstationRouteData = {
  origin: "Lucknow",
  destination: "Gaya",
  distance: "480 km",
  duration: "9 hrs",
  fare: { sedan: 5040, ertiga: 6720, innova: 7680, crysta: 8640 },
  highlights: ["Mahabodhi Temple", "Vishnupad Temple", "Bodhi Tree"],
  placesEnRoute: ["Allahabad", "Varanasi"],
  faqs: faqs("Lucknow", "Gaya", "480 km", 5040),
  seo: seo("Lucknow", "Gaya", "lucknow-to-gaya-taxi"),
};
export const lucknowToNaimisharanya: OutstationRouteData = {
  origin: "Lucknow",
  destination: "Naimisharanya",
  distance: "95 km",
  duration: "2 hrs",
  fare: { sedan: 998, ertiga: 1330, innova: 1520, crysta: 1710 },
  highlights: [
    "Chakra Tirtha",
    "Lalita Devi Temple",
    "Sacred pilgrimage forest",
  ],
  placesEnRoute: ["Sitapur"],
  faqs: faqs("Lucknow", "Naimisharanya", "95 km", 998),
  seo: seo("Lucknow", "Naimisharanya", "lucknow-to-naimisharanya-taxi"),
};
