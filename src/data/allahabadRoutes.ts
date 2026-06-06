// src/data/allahabadRoutes.ts — 15 Allahabad outstation stubs
// TODO: Verify all distances and fares before launch.

import type { OutstationRouteData } from "./varanasiRoutes";
const BASE = "https://tirupatitravel.in";

function seo(o: string, d: string, slug: string) {
  return {
    title: `${o} to ${d} Taxi | Book Cab | Tirupati Travel`,
    description: `Book ${o} to ${d} taxi at best price. AC cab, professional driver. Sedan from ₹10.50/km. Call: 8726124680.`,
    canonical: `${BASE}/allahabad/${slug}`,
  };
}

function faqs(o: string, d: string, dist: string, fare: number) {
  return [
    {
      q: `How much does a taxi from ${o} to ${d} cost?`,
      a: `Starts at ₹${fare} for a sedan. Call 8726124680 for current rates.`,
    },
    {
      q: `How long is the ${o} to ${d} taxi journey?`,
      a: `Approximately ${dist}. Actual time varies with traffic.`,
    },
    {
      q: `Is the ${o} to ${d} taxi available 24/7?`,
      a: `Yes. Call or WhatsApp 8726124680 anytime.`,
    },
    {
      q: `Which vehicles are available?`,
      a: `Swift Dzire, Toyota Etios, Ertiga, Innova, and Innova Crysta.`,
    },
  ];
}

export const allahabadToVaranasi: OutstationRouteData = {
  origin: "Allahabad",
  destination: "Varanasi",
  distance: "125 km",
  duration: "2.5 hrs",
  fare: { sedan: 1313, ertiga: 1750, innova: 2000, crysta: 2250 },
  highlights: ["Kashi Vishwanath", "Ganga Aarti", "Sarnath"],
  placesEnRoute: ["Bhadohi"],
  faqs: faqs("Allahabad", "Varanasi", "125 km", 1313),
  seo: seo("Allahabad", "Varanasi", "allahabad-to-varanasi-taxi"),
};
export const allahabadToLucknow: OutstationRouteData = {
  origin: "Allahabad",
  destination: "Lucknow",
  distance: "200 km",
  duration: "4 hrs",
  fare: { sedan: 2100, ertiga: 2800, innova: 3200, crysta: 3600 },
  highlights: ["Bara Imambara", "Rumi Darwaza", "Hazratganj"],
  placesEnRoute: ["Raebareli"],
  faqs: faqs("Allahabad", "Lucknow", "200 km", 2100),
  seo: seo("Allahabad", "Lucknow", "allahabad-to-lucknow-taxi"),
};
export const allahabadToAyodhya: OutstationRouteData = {
  origin: "Allahabad",
  destination: "Ayodhya",
  distance: "165 km",
  duration: "3.5 hrs",
  fare: { sedan: 1733, ertiga: 2310, innova: 2640, crysta: 2970 },
  highlights: ["Ram Janmabhoomi", "Hanuman Garhi", "Saryu Ghat"],
  placesEnRoute: ["Pratapgarh"],
  faqs: faqs("Allahabad", "Ayodhya", "165 km", 1733),
  seo: seo("Allahabad", "Ayodhya", "allahabad-to-ayodhya-taxi"),
};
export const allahabadToKanpur: OutstationRouteData = {
  origin: "Allahabad",
  destination: "Kanpur",
  distance: "200 km",
  duration: "3.5 hrs",
  fare: { sedan: 2100, ertiga: 2800, innova: 3200, crysta: 3600 },
  highlights: ["JK Temple", "Bithoor Ghat", "Kanpur Zoo"],
  placesEnRoute: ["Fatehpur"],
  faqs: faqs("Allahabad", "Kanpur", "200 km", 2100),
  seo: seo("Allahabad", "Kanpur", "allahabad-to-kanpur-taxi"),
};
export const allahabadToAgra: OutstationRouteData = {
  origin: "Allahabad",
  destination: "Agra",
  distance: "380 km",
  duration: "7 hrs",
  fare: { sedan: 3990, ertiga: 5320, innova: 6080, crysta: 6840 },
  highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
  placesEnRoute: ["Kanpur", "Etawah"],
  faqs: faqs("Allahabad", "Agra", "380 km", 3990),
  seo: seo("Allahabad", "Agra", "allahabad-to-agra-taxi"),
};
export const allahabadToGaya: OutstationRouteData = {
  origin: "Allahabad",
  destination: "Gaya",
  distance: "330 km",
  duration: "6.5 hrs",
  fare: { sedan: 3465, ertiga: 4620, innova: 5280, crysta: 5940 },
  highlights: ["Mahabodhi Temple", "Vishnupad", "Bodhi Tree"],
  placesEnRoute: ["Varanasi", "Sasaram"],
  faqs: faqs("Allahabad", "Gaya", "330 km", 3465),
  seo: seo("Allahabad", "Gaya", "allahabad-to-gaya-taxi"),
};
export const allahabadToVindhyachal: OutstationRouteData = {
  origin: "Allahabad",
  destination: "Vindhyachal",
  distance: "85 km",
  duration: "2 hrs",
  fare: { sedan: 893, ertiga: 1190, innova: 1360, crysta: 1530 },
  highlights: ["Vindhyavasini Temple", "Ashtabhuja Temple", "Kali Khoh Cave"],
  placesEnRoute: ["Mirzapur"],
  faqs: faqs("Allahabad", "Vindhyachal", "85 km", 893),
  seo: seo("Allahabad", "Vindhyachal", "allahabad-to-vindhyachal-taxi"),
};
export const allahabadToChitrakoot: OutstationRouteData = {
  origin: "Allahabad",
  destination: "Chitrakoot",
  distance: "130 km",
  duration: "2.5 hrs",
  fare: { sedan: 1365, ertiga: 1820, innova: 2080, crysta: 2340 },
  highlights: ["Ram Ghat", "Kamadgiri", "Gupt Godavari caves"],
  placesEnRoute: ["Banda"],
  faqs: faqs("Allahabad", "Chitrakoot", "130 km", 1365),
  seo: seo("Allahabad", "Chitrakoot", "allahabad-to-chitrakoot-taxi"),
};
export const allahabadToGorakhpur: OutstationRouteData = {
  origin: "Allahabad",
  destination: "Gorakhpur",
  distance: "300 km",
  duration: "5.5 hrs",
  fare: { sedan: 3150, ertiga: 4200, innova: 4800, crysta: 5400 },
  highlights: ["Gorakhnath Temple", "Ramgarh Tal", "Geeta Press"],
  placesEnRoute: ["Jaunpur", "Azamgarh"],
  faqs: faqs("Allahabad", "Gorakhpur", "300 km", 3150),
  seo: seo("Allahabad", "Gorakhpur", "allahabad-to-gorakhpur-taxi"),
};
export const allahabadToMathura: OutstationRouteData = {
  origin: "Allahabad",
  destination: "Mathura",
  distance: "320 km",
  duration: "5.5 hrs",
  fare: { sedan: 3360, ertiga: 4480, innova: 5120, crysta: 5760 },
  highlights: ["Krishna Janmabhoomi", "Vrindavan", "Banke Bihari"],
  placesEnRoute: ["Kanpur", "Agra"],
  faqs: faqs("Allahabad", "Mathura", "320 km", 3360),
  seo: seo("Allahabad", "Mathura", "allahabad-to-mathura-taxi"),
};
export const allahabadToDelhi: OutstationRouteData = {
  origin: "Allahabad",
  destination: "Delhi",
  distance: "590 km",
  duration: "10 hrs",
  fare: { sedan: 6195, ertiga: 8260, innova: 9440, crysta: 10620 },
  highlights: ["Red Fort", "India Gate", "Akshardham Temple"],
  placesEnRoute: ["Kanpur", "Agra"],
  faqs: faqs("Allahabad", "Delhi", "590 km", 6195),
  seo: seo("Allahabad", "Delhi", "allahabad-to-delhi-taxi"),
};
export const allahabadToBanaras: OutstationRouteData = {
  origin: "Allahabad",
  destination: "Varanasi",
  distance: "125 km",
  duration: "2.5 hrs",
  fare: { sedan: 1313, ertiga: 1750, innova: 2000, crysta: 2250 },
  highlights: ["Kashi Vishwanath", "Ganga Aarti", "Sarnath"],
  placesEnRoute: ["Bhadohi"],
  faqs: faqs("Allahabad", "Banaras", "125 km", 1313),
  seo: seo("Allahabad", "Banaras", "allahabad-to-banaras-taxi"),
};
export const allahabadToJaunpur: OutstationRouteData = {
  origin: "Allahabad",
  destination: "Jaunpur",
  distance: "100 km",
  duration: "2 hrs",
  fare: { sedan: 1050, ertiga: 1400, innova: 1600, crysta: 1800 },
  highlights: ["Shahi Bridge", "Atala Mosque", "Shahi Jama Masjid"],
  placesEnRoute: [],
  faqs: faqs("Allahabad", "Jaunpur", "100 km", 1050),
  seo: seo("Allahabad", "Jaunpur", "allahabad-to-jaunpur-taxi"),
};
export const allahabadToMirzapur: OutstationRouteData = {
  origin: "Allahabad",
  destination: "Mirzapur",
  distance: "65 km",
  duration: "1.5 hrs",
  fare: { sedan: 683, ertiga: 910, innova: 1040, crysta: 1170 },
  highlights: [
    "Vindhyachal Devi proximity",
    "Carpet industry",
    "Brass ware craft",
  ],
  placesEnRoute: [],
  faqs: faqs("Allahabad", "Mirzapur", "65 km", 683),
  seo: seo("Allahabad", "Mirzapur", "allahabad-to-mirzapur-taxi"),
};
export const allahabadToBanda: OutstationRouteData = {
  origin: "Allahabad",
  destination: "Banda",
  distance: "130 km",
  duration: "2.5 hrs",
  fare: { sedan: 1365, ertiga: 1820, innova: 2080, crysta: 2340 },
  highlights: ["Chitrakoot gateway", "Ken River", "Banda Fort"],
  placesEnRoute: [],
  faqs: faqs("Allahabad", "Banda", "130 km", 1365),
  seo: seo("Allahabad", "Banda", "allahabad-to-banda-taxi"),
};
