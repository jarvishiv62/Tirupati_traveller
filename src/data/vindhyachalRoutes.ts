// src/data/vindhyachalRoutes.ts — 5 Vindhyachal outstation stubs
// TODO: Verify all distances and fares before launch.

import type { OutstationRouteData } from "./varanasiRoutes";
const BASE = "https://tirupatitravel.in";

function seo(o: string, d: string, slug: string) {
  return {
    title: `${o} to ${d} Taxi | Book Cab | Tirupati Travel`,
    description: `Book ${o} to ${d} taxi at best price. Sedan from ₹10.50/km. Call: 8726124680.`,
    canonical: `${BASE}/vindhyachal/${slug}`,
  };
}
function faqs(o: string, d: string, dist: string, fare: number) {
  return [
    {
      q: `How much does ${o} to ${d} taxi cost?`,
      a: `Starts at ₹${fare} for a sedan. Call 8726124680.`,
    },
    { q: `How long is the journey?`, a: `Approximately ${dist}.` },
    {
      q: `Is the taxi available 24/7?`,
      a: `Yes. Call or WhatsApp 8726124680 anytime.`,
    },
    {
      q: `Which vehicles are available?`,
      a: `Swift Dzire, Etios, Ertiga, Innova, Innova Crysta.`,
    },
  ];
}

export const vindhyachalToVaranasi: OutstationRouteData = {
  origin: "Vindhyachal",
  destination: "Varanasi",
  distance: "80 km",
  duration: "1.5 hrs",
  fare: { sedan: 840, ertiga: 1120, innova: 1280, crysta: 1440 },
  highlights: ["Kashi Vishwanath", "Ganga Aarti Dashashwamedh", "Sarnath"],
  placesEnRoute: ["Mirzapur"],
  faqs: faqs("Vindhyachal", "Varanasi", "80 km", 840),
  seo: seo("Vindhyachal", "Varanasi", "vindhyachal-to-varanasi-taxi"),
};
export const vindhyachalToAllahabad: OutstationRouteData = {
  origin: "Vindhyachal",
  destination: "Allahabad",
  distance: "85 km",
  duration: "2 hrs",
  fare: { sedan: 893, ertiga: 1190, innova: 1360, crysta: 1530 },
  highlights: ["Triveni Sangam", "Anand Bhawan", "Kumbh Mela grounds"],
  placesEnRoute: ["Mirzapur"],
  faqs: faqs("Vindhyachal", "Allahabad", "85 km", 893),
  seo: seo("Vindhyachal", "Allahabad", "vindhyachal-to-allahabad-taxi"),
};
export const vindhyachalToChitrakoot: OutstationRouteData = {
  origin: "Vindhyachal",
  destination: "Chitrakoot",
  distance: "170 km",
  duration: "3.5 hrs",
  fare: { sedan: 1785, ertiga: 2380, innova: 2720, crysta: 3060 },
  highlights: [
    "Ram Ghat",
    "Kamadgiri hill circumambulation",
    "Gupt Godavari caves",
  ],
  placesEnRoute: ["Allahabad", "Banda"],
  faqs: faqs("Vindhyachal", "Chitrakoot", "170 km", 1785),
  seo: seo("Vindhyachal", "Chitrakoot", "vindhyachal-to-chitrakoot-taxi"),
};
export const vindhyachalToMirzapur: OutstationRouteData = {
  origin: "Vindhyachal",
  destination: "Mirzapur",
  distance: "8 km",
  duration: "20 min",
  fare: { sedan: 300, ertiga: 450, innova: 550, crysta: 650 },
  highlights: [
    "Mirzapur city tour",
    "Carpet and brass ware market",
    "Lalganj Temple",
  ],
  placesEnRoute: [],
  faqs: faqs("Vindhyachal", "Mirzapur", "8 km", 300),
  seo: seo("Vindhyachal", "Mirzapur", "vindhyachal-to-mirzapur-taxi"),
};
export const vindhyachalToAyodhya: OutstationRouteData = {
  origin: "Vindhyachal",
  destination: "Ayodhya",
  distance: "245 km",
  duration: "4.5 hrs",
  fare: { sedan: 2573, ertiga: 3430, innova: 3920, crysta: 4410 },
  highlights: [
    "Ram Janmabhoomi",
    "Ram Mandir",
    "Hanuman Garhi",
    "Saryu Ghat Aarti",
  ],
  placesEnRoute: ["Allahabad", "Pratapgarh"],
  faqs: faqs("Vindhyachal", "Ayodhya", "245 km", 2573),
  seo: seo("Vindhyachal", "Ayodhya", "vindhyachal-to-ayodhya-taxi"),
};
