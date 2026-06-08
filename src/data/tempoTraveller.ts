// src/data/tempoTraveller.ts
//
// ★ Export keys MUST match allRoutes.ts dataKey pattern:
//   dataKey: 'tempoTraveller.varanasi'       → export const varanasi
//   dataKey: 'tempoTraveller.varanasiLuxury' → export const varanasiLuxury
//   dataKey: 'tempoTraveller.ayodhya'        → export const ayodhya
//   dataKey: 'tempoTraveller.ayodhyaLuxury'  → export const ayodhyaLuxury
//   dataKey: 'tempoTraveller.lucknow'        → export const lucknow
//   dataKey: 'tempoTraveller.lucknowMaharaja'→ export const lucknowMaharaja
//   dataKey: 'tempoTraveller.lucknowUrbania' → export const lucknowUrbania
//   dataKey: 'tempoTraveller.allahabadLuxury'→ export const allahabadLuxury
//
// All 8 entries confirmed from Excel sheet "Tempo Traveller (8)"
//
// TODO: FUTURE — replace with db.tempoTraveller.findMany() when Chunk 10 DB is active

export interface TempoTravellerData {
  city: string;
  citySlug: string;
  variant: "standard" | "luxury" | "maharaja" | "urbania";
  vehicleName: string;
  image: string;
  capacity: number;
  pricePerKm: number;
  basePrice: number; // minimum booking / day rate
  features: string[];
  popularRoutes: {
    destination: string;
    destinationSlug: string;
    distance: string;
    fare: number;
  }[];
  inclusions: string[];
  faqs: { q: string; a: string }[];
  internalLinks: { label: string; href: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// VARANASI
// ─────────────────────────────────────────────────────────────────────────────

export const varanasi: TempoTravellerData = {
  city: "Varanasi",
  citySlug: "varanasi",
  variant: "standard",
  vehicleName: "Tempo Traveller (12-17 Seater)",
  image: "/assets/images/Fleet/tt1.jpg",
  capacity: 17,
  pricePerKm: 22,
  basePrice: 4000,
  features: [
    "AC (roof-mounted)",
    "GPS tracking",
    "Push-back recliner seats",
    "Large luggage compartment",
    "Music system",
    "Charging ports",
    "First aid kit",
  ],
  popularRoutes: [
    {
      destination: "Ayodhya",
      destinationSlug: "varanasi/varanasi-to-ayodhya-taxi",
      distance: "200 km",
      fare: 7500,
    },
    {
      destination: "Allahabad",
      destinationSlug: "varanasi/varanasi-to-allahabad-taxi",
      distance: "125 km",
      fare: 5000,
    },
    {
      destination: "Gaya",
      destinationSlug: "varanasi/varanasi-to-gaya-taxi",
      distance: "245 km",
      fare: 9000,
    },
    {
      destination: "Lucknow",
      destinationSlug: "varanasi/varanasi-to-lucknow-taxi",
      distance: "320 km",
      fare: 11000,
    },
    {
      destination: "Gorakhpur",
      destinationSlug: "varanasi/varanasi-to-gorakhpur-taxi",
      distance: "235 km",
      fare: 8500,
    },
    {
      destination: "Patna",
      destinationSlug: "varanasi/varanasi-to-patna-taxi",
      distance: "295 km",
      fare: 10500,
    },
  ],
  inclusions: [
    "AC tempo traveller with experienced driver",
    "Fuel charges included",
    "Driver allowance",
    "Toll charged at actual",
    "State permit included",
  ],
  faqs: [
    {
      q: "How many people can travel in a tempo traveller from Varanasi?",
      a: "Our standard tempo travellers seat 12 to 17 passengers comfortably with luggage space.",
    },
    {
      q: "What is the tempo traveller fare from Varanasi to Ayodhya?",
      a: "A 17-seater tempo traveller from Varanasi to Ayodhya (200 km) starts from ₹7,500 one-way.",
    },
    {
      q: "Is AC available in the tempo traveller?",
      a: "Yes. All our tempo travellers are fully air-conditioned with roof-mounted AC units.",
    },
  ],
  internalLinks: [
    {
      label: "Luxury Tempo Traveller Varanasi",
      href: "/varanasi/luxury-tempo-traveller-varanasi",
    },
    {
      label: "Varanasi to Ayodhya Taxi",
      href: "/varanasi/varanasi-to-ayodhya-taxi",
    },
    { label: "Varanasi to Gaya Taxi", href: "/varanasi/varanasi-to-gaya-taxi" },
    {
      label: "Varanasi Tour Packages",
      href: "/varanasi/varanasi-tour-packages",
    },
  ],
  seo: {
    title:
      "Tempo Traveller in Varanasi | 12-17 Seater Group Cab | Tirupati Travel",
    description:
      "Book tempo traveller in Varanasi for group travel. 12–17 seater AC bus. Outstation, pilgrimage & local tours. ₹22/km. Call 8726124680.",
    canonical: "https://tirupatitravel.in/varanasi/tempo-traveller-varanasi",
  },
};

export const varanasiLuxury: TempoTravellerData = {
  city: "Varanasi",
  citySlug: "varanasi",
  variant: "luxury",
  vehicleName: "Luxury Tempo Traveller (12 Seater)",
  image: "/assets/images/Fleet/tt2.jpg",
  capacity: 12,
  pricePerKm: 28,
  basePrice: 5500,
  features: [
    "Premium AC (dual zone)",
    "GPS tracking",
    "Aircraft-style push-back recliners",
    "Individual reading lights",
    "USB charging at every seat",
    "LCD TV / entertainment screen",
    "Curtains for privacy",
    "Premium upholstery",
    "Bluetooth music system",
  ],
  popularRoutes: [
    {
      destination: "Ayodhya",
      destinationSlug: "varanasi/varanasi-to-ayodhya-taxi",
      distance: "200 km",
      fare: 9500,
    },
    {
      destination: "Lucknow",
      destinationSlug: "varanasi/varanasi-to-lucknow-taxi",
      distance: "320 km",
      fare: 14000,
    },
    {
      destination: "Gaya",
      destinationSlug: "varanasi/varanasi-to-gaya-taxi",
      distance: "245 km",
      fare: 11000,
    },
    {
      destination: "Allahabad",
      destinationSlug: "varanasi/varanasi-to-allahabad-taxi",
      distance: "125 km",
      fare: 6500,
    },
    {
      destination: "Delhi",
      destinationSlug: "varanasi/varanasi-to-delhi-taxi",
      distance: "820 km",
      fare: 28000,
    },
  ],
  inclusions: [
    "Luxury AC tempo traveller with experienced driver",
    "Fuel charges included",
    "Driver allowance",
    "Toll charged at actual",
    "State permit included",
    "Complimentary water bottles",
  ],
  faqs: [
    {
      q: "What is the difference between standard and luxury tempo traveller?",
      a: "The luxury tempo traveller has aircraft-style recliner seats, individual USB charging, LCD TV, curtains for privacy, and premium upholstery. Standard tempos have push-back seats and basic AC.",
    },
    {
      q: "Is the luxury tempo traveller suitable for corporate groups?",
      a: "Yes. It is ideal for corporate offsite trips, wedding groups, and premium pilgrimage tours.",
    },
  ],
  internalLinks: [
    {
      label: "Standard Tempo Traveller Varanasi",
      href: "/varanasi/tempo-traveller-varanasi",
    },
    {
      label: "Varanasi Tour Packages",
      href: "/varanasi/varanasi-tour-packages",
    },
    {
      label: "Innova on Rent Varanasi",
      href: "/varanasi/innova-crysta-on-rent-in-varanasi",
    },
  ],
  seo: {
    title:
      "Luxury Tempo Traveller Varanasi | Premium Group Travel | Tirupati Travel",
    description:
      "Book luxury tempo traveller in Varanasi. Aircraft-style recliners, AC, LCD TV. 12-seater. Outstation & pilgrimage tours. ₹28/km. Call 8726124680.",
    canonical:
      "https://tirupatitravel.in/varanasi/luxury-tempo-traveller-varanasi",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// AYODHYA
// ─────────────────────────────────────────────────────────────────────────────

export const ayodhya: TempoTravellerData = {
  city: "Ayodhya",
  citySlug: "ayodhya",
  variant: "standard",
  vehicleName: "Tempo Traveller (12-17 Seater)",
  image: "/assets/images/Fleet/tt1.jpg",
  capacity: 17,
  pricePerKm: 22,
  basePrice: 4000,
  features: [
    "AC (roof-mounted)",
    "GPS tracking",
    "Push-back recliner seats",
    "Large luggage compartment",
    "Music system",
    "Charging ports",
  ],
  popularRoutes: [
    {
      destination: "Varanasi",
      destinationSlug: "ayodhya/ayodhya-to-varanasi-taxi",
      distance: "200 km",
      fare: 7500,
    },
    {
      destination: "Lucknow",
      destinationSlug: "ayodhya/ayodhya-to-lucknow-taxi",
      distance: "135 km",
      fare: 5500,
    },
    {
      destination: "Allahabad",
      destinationSlug: "ayodhya/ayodhya-to-allahabad-taxi",
      distance: "170 km",
      fare: 6500,
    },
    {
      destination: "Delhi",
      destinationSlug: "ayodhya/ayodhya-to-delhi-taxi",
      distance: "665 km",
      fare: 22000,
    },
    {
      destination: "Gorakhpur",
      destinationSlug: "ayodhya/ayodhya-to-gorakhpur-taxi",
      distance: "110 km",
      fare: 4500,
    },
  ],
  inclusions: [
    "AC tempo traveller with experienced driver",
    "Fuel charges included",
    "Driver allowance",
    "Toll charged at actual",
    "State permit included",
  ],
  faqs: [
    {
      q: "Is tempo traveller available for Ayodhya pilgrimage groups?",
      a: "Yes. Our tempo travellers are popular for group pilgrimages to Ram Mandir, Hanuman Garhi and all Ayodhya darshan sites.",
    },
    {
      q: "Can we book a tempo traveller from Varanasi to Ayodhya?",
      a: "Yes. A Varanasi to Ayodhya tempo traveller (17-seater) starts from ₹7,500 one-way.",
    },
  ],
  internalLinks: [
    {
      label: "Luxury Tempo Traveller Ayodhya",
      href: "/ayodhya/luxury-tempo-traveller-ayodhya",
    },
    { label: "Ayodhya Tour Packages", href: "/ayodhya/ayodhya-tour-packages" },
    {
      label: "Ayodhya Darshan Package",
      href: "/ayodhya/ayodhya-darshan-tour-package",
    },
  ],
  seo: {
    title:
      "Tempo Traveller in Ayodhya | Group Pilgrimage Cab | Tirupati Travel",
    description:
      "Book tempo traveller in Ayodhya for group travel. 12–17 seater AC bus. Ram Mandir group tours & outstation. ₹22/km. Call 8726124680.",
    canonical: "https://tirupatitravel.in/ayodhya/tempo-traveller-ayodhya",
  },
};

export const ayodhyaLuxury: TempoTravellerData = {
  city: "Ayodhya",
  citySlug: "ayodhya",
  variant: "luxury",
  vehicleName: "Luxury Tempo Traveller (12 Seater)",
  image: "/assets/images/Fleet/tt2.jpg",
  capacity: 12,
  pricePerKm: 28,
  basePrice: 5500,
  features: [
    "Premium AC (dual zone)",
    "GPS tracking",
    "Aircraft-style push-back recliners",
    "Individual reading lights",
    "USB charging at every seat",
    "LCD TV / entertainment screen",
    "Curtains for privacy",
    "Premium upholstery",
  ],
  popularRoutes: [
    {
      destination: "Varanasi",
      destinationSlug: "ayodhya/ayodhya-to-varanasi-taxi",
      distance: "200 km",
      fare: 9500,
    },
    {
      destination: "Lucknow",
      destinationSlug: "ayodhya/ayodhya-to-lucknow-taxi",
      distance: "135 km",
      fare: 6500,
    },
    {
      destination: "Delhi",
      destinationSlug: "ayodhya/ayodhya-to-delhi-taxi",
      distance: "665 km",
      fare: 26000,
    },
  ],
  inclusions: [
    "Luxury AC tempo with experienced driver",
    "Fuel charges",
    "Driver allowance",
    "Toll at actual",
    "Complimentary water bottles",
  ],
  faqs: [
    {
      q: "Can the luxury tempo traveller be booked for a wedding group in Ayodhya?",
      a: "Yes. It is ideal for wedding groups, corporate trips, and premium pilgrimage tours from Ayodhya.",
    },
  ],
  internalLinks: [
    {
      label: "Standard Tempo Traveller Ayodhya",
      href: "/ayodhya/tempo-traveller-ayodhya",
    },
    { label: "Ayodhya Tour Packages", href: "/ayodhya/ayodhya-tour-packages" },
  ],
  seo: {
    title:
      "Luxury Tempo Traveller Ayodhya | Premium Group Travel | Tirupati Travel",
    description:
      "Book luxury tempo traveller in Ayodhya. Aircraft-style recliners, AC, LCD TV. 12-seater. ₹28/km. Call 8726124680.",
    canonical:
      "https://tirupatitravel.in/ayodhya/luxury-tempo-traveller-ayodhya",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// LUCKNOW
// ─────────────────────────────────────────────────────────────────────────────

export const lucknow: TempoTravellerData = {
  city: "Lucknow",
  citySlug: "lucknow",
  variant: "standard",
  vehicleName: "Tempo Traveller (12-17 Seater)",
  image: "/assets/images/Fleet/tt3.jpg",
  capacity: 17,
  pricePerKm: 22,
  basePrice: 4000,
  features: [
    "AC (roof-mounted)",
    "GPS tracking",
    "Push-back recliner seats",
    "Large luggage compartment",
    "Music system",
    "Charging ports",
  ],
  popularRoutes: [
    {
      destination: "Varanasi",
      destinationSlug: "lucknow/lucknow-to-varanasi-taxi",
      distance: "320 km",
      fare: 11000,
    },
    {
      destination: "Ayodhya",
      destinationSlug: "lucknow/lucknow-to-ayodhya-taxi",
      distance: "135 km",
      fare: 5500,
    },
    {
      destination: "Allahabad",
      destinationSlug: "lucknow/lucknow-to-allahabad-taxi",
      distance: "210 km",
      fare: 7500,
    },
    {
      destination: "Delhi",
      destinationSlug: "lucknow/lucknow-to-delhi-taxi",
      distance: "550 km",
      fare: 18000,
    },
    {
      destination: "Agra",
      destinationSlug: "lucknow/lucknow-to-agra-taxi",
      distance: "360 km",
      fare: 12500,
    },
  ],
  inclusions: [
    "AC tempo traveller with experienced driver",
    "Fuel charges included",
    "Driver allowance",
    "Toll charged at actual",
    "State permit included",
  ],
  faqs: [
    {
      q: "Is tempo traveller available from Lucknow to Varanasi?",
      a: "Yes. A 17-seater tempo traveller from Lucknow to Varanasi (320 km) starts from ₹11,000.",
    },
    {
      q: "Can I book a tempo traveller for an office trip from Lucknow?",
      a: "Yes. We frequently handle corporate outstation trips for groups from Lucknow.",
    },
  ],
  internalLinks: [
    {
      label: "Maharaja Tempo Traveller Lucknow",
      href: "/lucknow/maharaja-tempo-traveller-in-lucknow",
    },
    {
      label: "Urbania Tempo Traveller Lucknow",
      href: "/lucknow/urbania-tempo-traveller-in-lucknow",
    },
    { label: "Innova Cab in Lucknow", href: "/lucknow/innova-cab-in-lucknow" },
    {
      label: "Outstation Cab in Lucknow",
      href: "/lucknow/outstation-cab-in-lucknow",
    },
  ],
  seo: {
    title: "Tempo Traveller in Lucknow | Group Travel Cab | Tirupati Travel",
    description:
      "Book tempo traveller in Lucknow. 12–17 seater AC bus for group travel & outstation. ₹22/km. Call 8726124680.",
    canonical: "https://tirupatitravel.in/lucknow/tempo-traveller-in-lucknow",
  },
};

export const lucknowMaharaja: TempoTravellerData = {
  city: "Lucknow",
  citySlug: "lucknow",
  variant: "maharaja",
  vehicleName: "Maharaja Tempo Traveller (9 Seater)",
  image: "/assets/images/Fleet/tt4.jpg",
  capacity: 9,
  pricePerKm: 32,
  basePrice: 6500,
  features: [
    "Ultra-luxury interior",
    "Throne-style push-back recliners (180° flat)",
    "Individual AC vents per seat",
    "Personal foldable tray tables",
    "Premium Bluetooth audio",
    "LCD screens",
    "Mini fridge (cold drinks)",
    "GPS tracking",
    "Ambient lighting",
    "Wooden panel interior",
  ],
  popularRoutes: [
    {
      destination: "Ayodhya",
      destinationSlug: "lucknow/lucknow-to-ayodhya-taxi",
      distance: "135 km",
      fare: 8000,
    },
    {
      destination: "Varanasi",
      destinationSlug: "lucknow/lucknow-to-varanasi-taxi",
      distance: "320 km",
      fare: 15000,
    },
    {
      destination: "Delhi",
      destinationSlug: "lucknow/lucknow-to-delhi-taxi",
      distance: "550 km",
      fare: 23000,
    },
    {
      destination: "Agra",
      destinationSlug: "lucknow/lucknow-to-agra-taxi",
      distance: "360 km",
      fare: 16000,
    },
  ],
  inclusions: [
    "Maharaja luxury tempo with experienced driver",
    "Fuel charges",
    "Driver allowance",
    "Toll at actual",
    "Complimentary cold water & refreshments",
    "Premium sound system for the journey",
  ],
  faqs: [
    {
      q: "What is a Maharaja tempo traveller?",
      a: "The Maharaja tempo is an ultra-luxury 9-seater van with throne-style recliners, individual AC vents, fridge, LCD screens, and premium interiors — the highest tier of group travel vehicle.",
    },
    {
      q: "Is the Maharaja tempo available for wedding ceremonies?",
      a: "Yes. It is popular for wedding groups, VIP transfers, corporate executives, and premium pilgrimage tours.",
    },
  ],
  internalLinks: [
    {
      label: "Urbania Tempo Traveller Lucknow",
      href: "/lucknow/urbania-tempo-traveller-in-lucknow",
    },
    {
      label: "Standard Tempo Traveller Lucknow",
      href: "/lucknow/tempo-traveller-in-lucknow",
    },
    { label: "Innova Cab Lucknow", href: "/lucknow/innova-cab-in-lucknow" },
  ],
  seo: {
    title:
      "Maharaja Tempo Traveller in Lucknow | Ultra Luxury Bus | Tirupati Travel",
    description:
      "Book Maharaja tempo traveller in Lucknow. 9-seater throne recliners, AC, fridge, LCD. ₹32/km. Wedding, VIP & corporate trips. Call 8726124680.",
    canonical:
      "https://tirupatitravel.in/lucknow/maharaja-tempo-traveller-in-lucknow",
  },
};

export const lucknowUrbania: TempoTravellerData = {
  city: "Lucknow",
  citySlug: "lucknow",
  variant: "urbania",
  vehicleName: "Force Urbania (17 Seater)",
  image: "/assets/images/Fleet/tt3.jpg",
  capacity: 17,
  pricePerKm: 30,
  basePrice: 6000,
  features: [
    "Premium roof-mounted AC",
    "GPS tracking",
    "Recliner seats with armrests",
    "Individual reading lights",
    "USB charging at every seat",
    "Large panoramic windows",
    "Premium Bluetooth audio",
    "High ceiling — extra headroom",
    "Wide comfortable aisles",
  ],
  popularRoutes: [
    {
      destination: "Ayodhya",
      destinationSlug: "lucknow/lucknow-to-ayodhya-taxi",
      distance: "135 km",
      fare: 7500,
    },
    {
      destination: "Varanasi",
      destinationSlug: "lucknow/lucknow-to-varanasi-taxi",
      distance: "320 km",
      fare: 14000,
    },
    {
      destination: "Delhi",
      destinationSlug: "lucknow/lucknow-to-delhi-taxi",
      distance: "550 km",
      fare: 22000,
    },
    {
      destination: "Allahabad",
      destinationSlug: "lucknow/lucknow-to-allahabad-taxi",
      distance: "210 km",
      fare: 9500,
    },
  ],
  inclusions: [
    "Force Urbania with experienced driver",
    "Fuel charges",
    "Driver allowance",
    "Toll at actual",
    "State permit",
  ],
  faqs: [
    {
      q: "What is Force Urbania?",
      a: "Force Urbania is a premium 17-seater van known for its high ceiling, panoramic windows, and comfortable recliner seats. It bridges standard tempo travellers and Maharaja luxury vans.",
    },
    {
      q: "Is Force Urbania good for long-distance travel?",
      a: "Yes. Its high ceiling and wide seats make it particularly comfortable for long journeys like Lucknow to Varanasi or Lucknow to Delhi.",
    },
  ],
  internalLinks: [
    {
      label: "Maharaja Tempo Traveller Lucknow",
      href: "/lucknow/maharaja-tempo-traveller-in-lucknow",
    },
    {
      label: "Standard Tempo Traveller Lucknow",
      href: "/lucknow/tempo-traveller-in-lucknow",
    },
    { label: "Car Rental in Lucknow", href: "/lucknow/car-rental-in-lucknow" },
  ],
  seo: {
    title:
      "Urbania Tempo Traveller in Lucknow | Force Urbania 17 Seater | Tirupati Travel",
    description:
      "Book Force Urbania tempo traveller in Lucknow. 17-seater, AC, recliner seats, panoramic windows. ₹30/km. Call 8726124680.",
    canonical:
      "https://tirupatitravel.in/lucknow/urbania-tempo-traveller-in-lucknow",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ALLAHABAD — Luxury (from Excel, missing in master prompt)
// ─────────────────────────────────────────────────────────────────────────────

export const allahabadLuxury: TempoTravellerData = {
  city: "Allahabad",
  citySlug: "allahabad",
  variant: "luxury",
  vehicleName: "Luxury Tempo Traveller (12 Seater)",
  image: "/assets/images/Fleet/tt4.jpg",
  capacity: 12,
  pricePerKm: 28,
  basePrice: 5500,
  features: [
    "Premium AC (dual zone)",
    "GPS tracking",
    "Aircraft-style push-back recliners",
    "Individual reading lights",
    "USB charging at every seat",
    "LCD TV / entertainment screen",
    "Curtains for privacy",
    "Premium upholstery",
  ],
  popularRoutes: [
    {
      destination: "Varanasi",
      destinationSlug: "allahabad/allahabad-to-varanasi-taxi",
      distance: "125 km",
      fare: 6500,
    },
    {
      destination: "Ayodhya",
      destinationSlug: "allahabad/allahabad-to-ayodhya-taxi",
      distance: "170 km",
      fare: 8000,
    },
    {
      destination: "Lucknow",
      destinationSlug: "allahabad/allahabad-to-lucknow-taxi",
      distance: "210 km",
      fare: 9500,
    },
    {
      destination: "Gaya",
      destinationSlug: "allahabad/allahabad-to-gaya-taxi",
      distance: "280 km",
      fare: 12000,
    },
    {
      destination: "Delhi",
      destinationSlug: "allahabad/allahabad-to-delhi-taxi",
      distance: "690 km",
      fare: 26000,
    },
  ],
  inclusions: [
    "Luxury AC tempo with experienced driver",
    "Fuel charges included",
    "Driver allowance",
    "Toll charged at actual",
    "State permit included",
    "Complimentary water bottles",
  ],
  faqs: [
    {
      q: "Can we book a luxury tempo for Kumbh Mela group travel from Allahabad?",
      a: "Yes. We handle group bookings for Kumbh and Magh Mela in Prayagraj. Book early as demand is very high during mela season.",
    },
    {
      q: "What is the difference between standard and luxury tempo in Allahabad?",
      a: "Luxury tempo has aircraft-style recliners, USB charging, LCD TV, curtains, and premium upholstery versus standard push-back seats.",
    },
  ],
  internalLinks: [
    {
      label: "Allahabad Tour Packages",
      href: "/allahabad/allahabad-tour-packages",
    },
    {
      label: "Allahabad to Varanasi Taxi",
      href: "/allahabad/allahabad-to-varanasi-taxi",
    },
    { label: "Car Rental Allahabad", href: "/allahabad/car-rental-allahabad" },
  ],
  seo: {
    title:
      "Luxury Tempo Traveller Allahabad | Premium Group Travel | Tirupati Travel",
    description:
      "Book luxury tempo traveller in Allahabad (Prayagraj). Aircraft-style recliners, AC, LCD TV. 12-seater. ₹28/km. Call 8726124680.",
    canonical:
      "https://tirupatitravel.in/allahabad/luxury-tempo-traveller-allahabad",
  },
};
