// src/data/gayaRoutes.ts — 8 Gaya outstation stubs
// TODO: Verify all distances and fares before launch.

import type { OutstationRouteData } from "./varanasiRoutes";
const BASE = "https://tirupatitravel.in";

function seo(o: string, d: string, slug: string) {
  return {
    title: `${o} to ${d} Taxi | Book Cab | Tirupati Travel`,
    description: `Book ${o} to ${d} taxi at best price. AC cab, professional driver. Sedan from ₹10.50/km. Call: 8726124680.`,
    canonical: `${BASE}/gaya/${slug}`,
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
      q: `Is it available 24/7?`,
      a: `Yes. Call or WhatsApp 8726124680 anytime.`,
    },
    {
      q: `Which vehicles are available?`,
      a: `Swift Dzire, Etios, Ertiga, Innova, Innova Crysta.`,
    },
  ];
}

export const gayaToVaranasi: OutstationRouteData = {
  origin: "Gaya",
  destination: "Varanasi",
  distance: "250 km",
  duration: "5 hrs",
  fare: { sedan: 2625, ertiga: 3500, innova: 4000, crysta: 4500 },
  highlights: ["Kashi Vishwanath", "Ganga Aarti", "Sarnath stupa"],
  placesEnRoute: ["Sasaram", "Aurangabad"],
  faqs: faqs("Gaya", "Varanasi", "250 km", 2625),
  seo: seo("Gaya", "Varanasi", "gaya-to-varanasi-taxi"),
};
export const gayaToPatna: OutstationRouteData = {
  origin: "Gaya",
  destination: "Patna",
  distance: "100 km",
  duration: "2 hrs",
  fare: { sedan: 1050, ertiga: 1400, innova: 1600, crysta: 1800 },
  highlights: ["Mahavir Mandir", "Patna Sahib Gurudwara", "Golghar"],
  placesEnRoute: [],
  faqs: faqs("Gaya", "Patna", "100 km", 1050),
  seo: seo("Gaya", "Patna", "gaya-to-patna-taxi"),
};
export const gayaToAllahabad: OutstationRouteData = {
  origin: "Gaya",
  destination: "Allahabad",
  distance: "330 km",
  duration: "6.5 hrs",
  fare: { sedan: 3465, ertiga: 4620, innova: 5280, crysta: 5940 },
  highlights: ["Triveni Sangam", "Anand Bhawan", "Kumbh Mela venue"],
  placesEnRoute: ["Varanasi", "Bhadohi"],
  faqs: faqs("Gaya", "Allahabad", "330 km", 3465),
  seo: seo("Gaya", "Allahabad", "gaya-to-allahabad-taxi"),
};
export const gayaToAyodhya: OutstationRouteData = {
  origin: "Gaya",
  destination: "Ayodhya",
  distance: "380 km",
  duration: "7 hrs",
  fare: { sedan: 3990, ertiga: 5320, innova: 6080, crysta: 6840 },
  highlights: ["Ram Janmabhoomi", "Hanuman Garhi", "Ram Mandir"],
  placesEnRoute: ["Varanasi", "Sultanpur"],
  faqs: faqs("Gaya", "Ayodhya", "380 km", 3990),
  seo: seo("Gaya", "Ayodhya", "gaya-to-ayodhya-taxi"),
};
export const gayaToRajgir: OutstationRouteData = {
  origin: "Gaya",
  destination: "Rajgir",
  distance: "78 km",
  duration: "1.5 hrs",
  fare: { sedan: 819, ertiga: 1092, innova: 1248, crysta: 1404 },
  highlights: [
    "Vishwa Shanti Stupa",
    "Rajgir Ropeway",
    "Hot Springs",
    "Bimbisara Jail",
  ],
  placesEnRoute: [],
  faqs: faqs("Gaya", "Rajgir", "78 km", 819),
  seo: seo("Gaya", "Rajgir", "gaya-to-rajgir-taxi"),
};
export const gayaToNalanda: OutstationRouteData = {
  origin: "Gaya",
  destination: "Nalanda",
  distance: "95 km",
  duration: "2 hrs",
  fare: { sedan: 998, ertiga: 1330, innova: 1520, crysta: 1710 },
  highlights: [
    "Nalanda University ruins (UNESCO)",
    "Nalanda Museum",
    "Xuanzang Memorial Hall",
  ],
  placesEnRoute: ["Rajgir"],
  faqs: faqs("Gaya", "Nalanda", "95 km", 998),
  seo: seo("Gaya", "Nalanda", "gaya-to-nalanda-taxi"),
};
export const gayaToBodhgaya: OutstationRouteData = {
  origin: "Gaya",
  destination: "Bodh Gaya",
  distance: "15 km",
  duration: "30 min",
  fare: { sedan: 400, ertiga: 600, innova: 700, crysta: 800 },
  highlights: [
    "Mahabodhi Temple",
    "Bodhi Tree",
    "Great Buddha Statue",
    "Thai Monastery",
  ],
  placesEnRoute: [],
  faqs: faqs("Gaya", "Bodh Gaya", "15 km", 400),
  seo: seo("Gaya", "Bodh Gaya", "gaya-to-bodhgaya-taxi"),
};
export const gayaToRanchi: OutstationRouteData = {
  origin: "Gaya",
  destination: "Ranchi",
  distance: "215 km",
  duration: "4.5 hrs",
  fare: { sedan: 2258, ertiga: 3010, innova: 3440, crysta: 3870 },
  highlights: [
    "Jharkhand capital",
    "Hundru Falls",
    "Tagore Hill",
    "Rock Garden",
  ],
  placesEnRoute: ["Hazaribagh"],
  faqs: faqs("Gaya", "Ranchi", "215 km", 2258),
  seo: seo("Gaya", "Ranchi", "gaya-to-ranchi-taxi"),
};
