// src/data/cityLanding.ts
// ★ City Landing page data — used by CityLandingTemplate
// Covers: 6 main city landings + 6 specialty pages (all CityLandingTemplate)
// dataKey pattern: cityLanding.<key>
//
// Change: faqs field added to the 6 main city objects (varanasi, ayodhya,
// allahabad, lucknow, gaya, vindhyachal). Specialty variants do not need faqs
// — the CityFAQSection renders conditionally only when faqs is populated.
//
// Also required: add  faqs?: { q: string; a: string }[]  to CityLandingData
// in src/types/templates.ts  (one-line addition).

import type { CityLandingData } from "@/types/templates";

// ─── VARANASI ─────────────────────────────────────────────────────────────────

export const varanasi: CityLandingData = {
  city: "Varanasi",
  aliases: ["Kashi", "Banaras"],
  heroText: "Taxi & Tour Services in the Spiritual Capital of India",
  heroImage: "/assets/images/varanasi-tour-package.jpeg",
  services: [
    {
      label: "Outstation Taxi",
      icon: "/assets/services/cab.icon.png",
      slug: "varanasi/one-way-cab-in-varanasi",
    },
    {
      label: "Ganga Boat Rides",
      icon: "/assets/services//sightseeing_icon.png",
      slug: "varanasi/varanasi-local-sightseeing-cab",
    },
    {
      label: "Hotel Booking",
      icon: "/assets/services/hotel_icon.png",
      slug: "varanasi/hotel-in-varanasi",
    },
    {
      label: "Temple Darshan",
      icon: "/assets/services/pind_daan_icon.png",
      slug: "varanasi/varanasi-tour-packages",
    },
    {
      label: "Airport Taxi",
      icon: "/assets/services/airplane_icon.png",
      slug: "varanasi/varanasi-airport-taxi",
    },
    {
      label: "Car Rental",
      icon: "/assets/services/cab.icon.png",
      slug: "varanasi/car-rental-varanasi",
    },
  ],
  vehicles: ["innova-crysta", "ertiga", "swift-dzire", "tempo-traveller"],
  places: [
    {
      name: "Kashi Vishwanath Temple",
      image: "/assets/images/VNS/kashi_vishwanath.webp",
      distance: "0 km",
    },
    {
      name: "Dashashwamedh ghat",
      image: "/assets/images/VNS/dashaswamedh.webp",
      distance: "1.5 km",
    },
    {
      name: "Sarnath",
      image: "/assets/images/VNS/sarnath.webp",
      distance: "12 km",
    },
    {
      name: "Manikarnika Ghat",
      image: "/assets/images/VNS/manikarnika.webp",
      distance: "1 km",
    },
    {
      name: "Ramnagar Fort",
      image: "/assets/images/VNS/ramnagar_fort.webp",
      distance: "14 km",
    },
    {
      name: "Assi Ghat",
      image: "/assets/images/VNS/assi.webp",
      distance: "3 km",
    },
  ],
  outstationLinks: [
    {
      destination: "Ayodhya",
      slug: "varanasi/varanasi-to-ayodhya-taxi",
      fare: 3200,
    },
    {
      destination: "Allahabad",
      slug: "varanasi/varanasi-to-allahabad-taxi",
      fare: 1800,
    },
    {
      destination: "Lucknow",
      slug: "varanasi/varanasi-to-lucknow-taxi",
      fare: 3500,
    },
    { destination: "Gaya", slug: "varanasi/varanasi-to-gaya-taxi", fare: 2800 },
    { destination: "Agra", slug: "varanasi/varanasi-to-agra-taxi", fare: 5500 },
    {
      destination: "Delhi",
      slug: "varanasi/varanasi-to-delhi-taxi",
      fare: 9000,
    },
    {
      destination: "Gorakhpur",
      slug: "varanasi/varanasi-to-gorakhpur-taxi",
      fare: 2600,
    },
    {
      destination: "Patna",
      slug: "varanasi/varanasi-to-patna-taxi",
      fare: 3800,
    },
  ],
  faqs: [
    {
      q: "What is the cab fare from Varanasi to Ayodhya?",
      a: "Varanasi to Ayodhya taxi starts from ₹3,200 for a sedan (approx. 200 km). Ertiga and Innova Crysta rates available on request. Call 8726124680 for exact rates and availability.",
    },
    {
      q: "Is cab service available from Varanasi airport?",
      a: "Yes. We provide 24/7 pickup and drop at Lal Bahadur Shastri International Airport (VNS). Book in advance at 8726124680 to have a driver waiting at arrivals.",
    },
    {
      q: "Which vehicles are available for outstation trips from Varanasi?",
      a: "We offer Swift Dzire (4-seater, ₹10.50/km), Maruti Ertiga (6-seater, ₹11/km), Toyota Innova Crysta (7-seater, ₹11/km), and Tempo Traveller for groups. All AC, all with professional drivers.",
    },
    {
      q: "Do you cover local sightseeing in Varanasi?",
      a: "Yes. Our Varanasi local sightseeing packages cover Kashi Vishwanath Temple, Dashashwamedh Ghat, Sarnath, Manikarnika Ghat, Assi Ghat, Ramnagar Fort, and all major ghats. Half-day (4 hr) and full-day (8 hr) options available.",
    },
    {
      q: "Can I book a one-way cab from Varanasi?",
      a: "Yes. One-way cabs are available from Varanasi to all major destinations — Ayodhya, Allahabad, Gaya, Lucknow, Agra, Delhi, Gorakhpur, Patna, and more. No return-trip obligation.",
    },
    {
      q: "How do I book a taxi in Varanasi?",
      a: "Simply call or WhatsApp 8726124680. Share your pickup location, destination, and travel date. We confirm the cab and driver details within minutes. No online forms or advance payment required.",
    },
  ],
  seo: {
    title:
      "Taxi Service in Varanasi | Cab Booking Kashi Banaras | Tirupati Travel",
    description:
      "Book reliable taxi and cab services in Varanasi (Kashi/Banaras). Outstation cabs, airport taxi, temple darshan tours. Call 8726124680.",
    canonical: "https://tirupatitravel.in/varanasi",
  },
};

// ─── VARANASI PLACES TO VISIT (CityLandingTemplate variant) ───────────────────

export const varanasiPlaces: CityLandingData = {
  city: "Varanasi",
  aliases: ["Kashi", "Banaras"],
  heroText: "Explore the Sacred Ghats, Temples & Heritage of Kashi",
  heroImage: "/assets/images/varanasi-tour-package.jpg",
  services: [
    {
      label: "Ghat Tour Cab",
      icon: "/assets/services/sightseeing_icon.png",
      slug: "varanasi/varanasi-local-sightseeing-cab",
    },
    {
      label: "Temple Darshan",
      icon: "/assets/services/temple_icon.png",
      slug: "varanasi/varanasi-tour-packages",
    },
    {
      label: "Outstation Taxi",
      icon: "/assets/services/cab.icon.png",
      slug: "varanasi/one-way-cab-in-varanasi",
    },
    {
      label: "Hotel Booking",
      icon: "/assets/services/hotel_icon.png",
      slug: "varanasi/hotel-in-varanasi",
    },
  ],
  vehicles: ["innova-crysta", "ertiga", "swift-dzire"],
  places: [
    {
      name: "Kashi Vishwanath Temple",
      image: "/assets/images/VNS/kashi_vishwanath.webp",
      distance: "0 km",
    },
    {
      name: "Dashashwamedh Ghat",
      image: "/assets/images/VNS/dashashwamedh.webp",
      distance: "0.5 km",
    },
    { name: "Sarnath", image: "/assets/images/VNS/sarnath.webp", distance: "12 km" },
    {
      name: "Manikarnika Ghat",
      image: "/assets/images/VNS/manikarnika.webp",
      distance: "1 km",
    },
    {
      name: "Ramnagar Fort",
      image: "/assets/images/VNS/ramnagar_fort.webp",
      distance: "14 km",
    },
    { name: "Assi Ghat", image: "/assets/images/VNS/assi.webp", distance: "3 km" },
    {
      name: "Tulsi Manas Temple",
      image: "/assets/images/VNS/tulsi-manas.webp",
      distance: "2 km",
    },
    {
      name: "Banaras Hindu University",
      image: "/assets/images/VNS/bhu.webp",
      distance: "4 km",
    },
  ],
  outstationLinks: [
    {
      destination: "Ayodhya",
      slug: "varanasi/varanasi-to-ayodhya-taxi",
      fare: 3200,
    },
    { destination: "Gaya", slug: "varanasi/varanasi-to-gaya-taxi", fare: 2800 },
    {
      destination: "Allahabad",
      slug: "varanasi/varanasi-to-allahabad-taxi",
      fare: 1800,
    },
    {
      destination: "Lucknow",
      slug: "varanasi/varanasi-to-lucknow-taxi",
      fare: 3500,
    },
  ],
  seo: {
    title:
      "Places to Visit in Varanasi | Top Tourist Spots Kashi | Tirupati Travel",
    description:
      "Discover the top places to visit in Varanasi — Kashi Vishwanath, Dashashwamedh Ghat, Sarnath & more. Book a cab for your Varanasi tour today.",
    canonical: "https://tirupatitravel.in/varanasi/places-to-visit-in-varanasi",
  },
};

// ─── AYODHYA ──────────────────────────────────────────────────────────────────

export const ayodhya: CityLandingData = {
  city: "Ayodhya",
  aliases: ["Ram Nagri", "Saket"],
  heroText: "Taxi & Darshan Services in the Holy City of Lord Ram",
  heroImage: "/assets/images/Ayodhya/ram_janm.webp",
  services: [
    {
      label: "Outstation Taxi",
      icon: "/assets/services/cab.icon.png",
      slug: "ayodhya/one-way-cab-in-ayodhya",
    },
    {
      label: "Temple Darshan",
      icon: "/assets/services/temple_icon.png",
      slug: "ayodhya/ayodhya-tour-packages",
    },
    {
      label: "Hotel Booking",
      icon: "/assets/services/hotel_icon.png",
      slug: "varanasi/hotel-in-varanasi",
    },
    {
      label: "Airport Taxi",
      icon: "/assets/services/airplane_icon.png",
      slug: "ayodhya/ayodhya-airport-taxi",
    },
    {
      label: "Local Sightseeing",
      icon: "/assets/services/sightseeing_icon.png",
      slug: "ayodhya/ayodhya-local-sightseeing-cab",
    },
    {
      label: "Car Rental",
      icon: "/assets/services/car.png",
      slug: "ayodhya/car-rental-ayodhya",
    },
  ],
  vehicles: ["innova-crysta", "ertiga", "swift-dzire", "sedan"],
  places: [
    {
      name: "Ram Mandir",
      image: "/assets/images/Ayodhya/ayodhya.webp",
      distance: "0 km",
    },
    {
      name: "Hanuman Garhi",
      image: "/assets/images/Ayodhya/hanuman_garhi.webp",
      distance: "0.5 km",
    },
    {
      name: "Kanak Bhawan",
      image: "/assets/images/Ayodhya/kanak_bhavan.webp",
      distance: "1 km",
    },
    {
      name: "Saryu Ghat",
      image: "/assets/images/Ayodhya/saryu-ghat.webp",
      distance: "1.5 km",
    },
    {
      name: "Nageshwarnath Temple",
      image: "/assets/images/Ayodhya/nageswarnath.webp",
      distance: "2 km",
    },
    {
      name: "Moti Mahal",
      image: "/assets/images/Ayodhya/dasarat-mahal.webp",
      distance: "3 km",
    },
  ],
  outstationLinks: [
    {
      destination: "Varanasi",
      slug: "ayodhya/ayodhya-to-varanasi-taxi",
      fare: 3200,
    },
    {
      destination: "Lucknow",
      slug: "ayodhya/ayodhya-to-lucknow-taxi",
      fare: 1600,
    },
    {
      destination: "Allahabad",
      slug: "ayodhya/ayodhya-to-allahabad-taxi",
      fare: 2800,
    },
    { destination: "Delhi", slug: "ayodhya/ayodhya-to-delhi-taxi", fare: 8500 },
    { destination: "Gaya", slug: "ayodhya/ayodhya-to-gaya-taxi", fare: 4500 },
    {
      destination: "Gorakhpur",
      slug: "ayodhya/ayodhya-to-gorakhpur-taxi",
      fare: 2200,
    },
  ],
  faqs: [
    {
      q: "What is the cab fare from Ayodhya to Varanasi?",
      a: "Ayodhya to Varanasi taxi starts from ₹3,200 for a sedan (approx. 200 km). Ertiga and Innova are also available. Call 8726124680 for the latest rates and to confirm availability.",
    },
    {
      q: "Do you provide Ram Mandir darshan tour packages from Ayodhya?",
      a: "Yes. We offer complete Ram Mandir darshan packages covering Ram Mandir, Hanuman Garhi, Kanak Bhawan, Nageshwarnath Temple, and Saryu Ghat. Half-day and full-day options available. Call 8726124680 to book.",
    },
    {
      q: "Is airport cab service available at Ayodhya?",
      a: "Yes. We provide 24/7 pickup and drop at Maharishi Valmiki International Airport (AYJ), Ayodhya. Book in advance at 8726124680 so your driver is ready when you land.",
    },
    {
      q: "What is the cab fare from Ayodhya to Lucknow?",
      a: "Ayodhya to Lucknow taxi starts from ₹1,600 for a sedan (approx. 135 km). Call 8726124680 to book a one-way or round-trip cab.",
    },
    {
      q: "How early should I book a cab for Ayodhya temple visits?",
      a: "We recommend booking at least 1–2 hours before your desired pickup. During festivals (Ram Navami, Diwali, Kartik Purnima) and peak pilgrimage season, advance booking of 1–2 days is strongly advised.",
    },
  ],
  seo: {
    title: "Taxi Service in Ayodhya | Cab Booking Ram Nagri | Tirupati Travel",
    description:
      "Book taxi and cab services in Ayodhya. Temple darshan tours, airport taxi, outstation cabs. Tirupati Travel — trusted Ayodhya cab service. Call 8726124680.",
    canonical: "https://tirupatitravel.in/ayodhya",
  },
};

// ─── AYODHYA DHAM (CityLandingTemplate specialty) ─────────────────────────────

export const ayodhyaDham: CityLandingData = {
  city: "Ayodhya",
  aliases: ["Ram Nagri", "Saket"],
  heroText: "Complete Ayodhya Dham Darshan — Ram Mandir to Saryu Ghat",
  heroImage: "/assets/images/Ayodhya/ram_janm.jpeg",
  services: [
    {
      label: "Dham Darshan Tour",
      icon: "/assets/services/temple_icon.png",
      slug: "ayodhya/ayodhya-darshan-tour-package",
    },
    {
      label: "Local Sightseeing",
      icon: "/assets/services/sightseeing_icon.png",
      slug: "ayodhya/ayodhya-local-sightseeing-cab",
    },
    {
      label: "Outstation Taxi",
      icon: "/assets/services/cab.icon.png",
      slug: "ayodhya/one-way-cab-in-ayodhya",
    },
    {
      label: "Hotel Booking",
      icon: "/assets/services/hotel_icon.png",
      slug: "varanasi/hotel-in-varanasi",
    },
  ],
  vehicles: ["innova-crysta", "ertiga", "swift-dzire"],
  places: [
    {
      name: "Ram Mandir",
      image: "/assets/images/Ayodhya/ayodhya.webp",
      distance: "0 km",
    },
    {
      name: "Hanuman Garhi",
      image: "/assets/images/Ayodhya/hanuman_garhi.webp",
      distance: "0.5 km",
    },
    {
      name: "Kanak Bhawan",
      image: "/assets/images/Ayodhya/kanak_bhawan.webp",
      distance: "1 km",
    },
    {
      name: "Saryu Ghat",
      image: "/assets/images/Ayodhya/saryu-ghat.webp",
      distance: "1.5 km",
    },
    {
      name: "Nageshwarnath Temple",
      image: "/assets/images/Ayodhya/nageshwarnath.webp",
      distance: "2 km",
    },
    {
      name: "Dashrath Mahal",
      image: "/assets/images/Ayodhya/dasarat-mahal.webp",
      distance: "2.5 km",
    },
  ],
  outstationLinks: [
    {
      destination: "Varanasi",
      slug: "ayodhya/ayodhya-to-varanasi-taxi",
      fare: 3200,
    },
    {
      destination: "Lucknow",
      slug: "ayodhya/ayodhya-to-lucknow-taxi",
      fare: 1600,
    },
    {
      destination: "Allahabad",
      slug: "ayodhya/ayodhya-to-allahabad-taxi",
      fare: 2800,
    },
  ],
  seo: {
    title: "Ayodhya Dham Darshan Package | Ram Mandir Tour | Tirupati Travel",
    description:
      "Complete Ayodhya Dham darshan — Ram Mandir, Hanuman Garhi, Kanak Bhawan, Saryu Ghat. Book cab packages for Ayodhya Dham with Tirupati Travel.",
    canonical: "https://tirupatitravel.in/ayodhya/ayodhya-dham",
  },
};

// ─── ALLAHABAD / PRAYAGRAJ ─────────────────────────────────────────────────────

export const allahabad: CityLandingData = {
  city: "Allahabad",
  aliases: ["Prayagraj", "Sangam City"],
  heroText: "Taxi & Tour Services at the Triveni Sangam",
  heroImage: "/assets/images/Allahabad_places/khusro.jpg",
  services: [
    {
      label: "Outstation Taxi",
      icon: "/assets/services/cab.icon.png",
      slug: "allahabad/one-way-cab-in-allahabad",
    },
    {
      label: "Sangam Boat Tour",
      icon: "/assets/services/sightseeing_icon.png",
      slug: "allahabad/cab-service-in-allahabad",
    },
    {
      label: "Temple Darshan",
      icon: "/assets/services/temple_icon.png",
      slug: "allahabad/allahabad-tour-packages",
    },
    {
      label: "Hotel Booking",
      icon: "/assets/services/hotel_icon.png",
      slug: "varanasi/hotel-in-varanasi",
    },
    {
      label: "Car Rental",
      icon: "/assets/services/car.png",
      slug: "allahabad/car-rental-allahabad",
    },
    {
      label: "Full Day Cab",
      icon: "/assets/services/airplane_icon.png",
      slug: "allahabad/full-day-cab-in-allahabad",
    },
  ],
  vehicles: ["innova-crysta", "ertiga", "swift-dzire", "sedan"],
  places: [
    {
      name: "Triveni Sangam",
      image: "/assets/images/prayagraj/kumbh-mela.webp",
      distance: "0 km",
    },
    {
      name: "Allahabad Fort",
      image: "/assets/images/prayagraj/allahabad_fort.webp",
      distance: "2 km",
    },
    {
      name: "Anand Bhawan",
      image: "/assets/images/prayagraj/anand_bhavan.webp",
      distance: "3 km",
    },
    {
      name: "Hanuman Mandir",
      image: "/assets/images/prayagraj/hanuman_mandir.webp",
      distance: "1.5 km",
    },
    {
      name: "Khusro Bagh",
      image: "/assets/images/prayagraj/khusro.webp",
      distance: "4 km",
    },
    {
      name: "New Yamuna Bridge",
      image: "/assets/images/prayagraj/naini_bridge.webp",
      distance: "5 km",
    },
  ],
  outstationLinks: [
    {
      destination: "Varanasi",
      slug: "allahabad/allahabad-to-varanasi-taxi",
      fare: 1800,
    },
    {
      destination: "Lucknow",
      slug: "allahabad/allahabad-to-lucknow-taxi",
      fare: 2200,
    },
    {
      destination: "Ayodhya",
      slug: "allahabad/allahabad-to-ayodhya-taxi",
      fare: 2800,
    },
    {
      destination: "Gaya",
      slug: "allahabad/allahabad-to-gaya-taxi",
      fare: 3200,
    },
    {
      destination: "Chitrakoot",
      slug: "allahabad/allahabad-to-chitrakoot-taxi",
      fare: 2000,
    },
    {
      destination: "Delhi",
      slug: "allahabad/allahabad-to-delhi-taxi",
      fare: 7500,
    },
  ],
  faqs: [
    {
      q: "What are the taxi fares from Allahabad (Prayagraj)?",
      a: "Popular routes: Allahabad to Varanasi from ₹1,800 · to Lucknow from ₹2,200 · to Ayodhya from ₹2,800 · to Delhi from ₹7,500. Rates are for sedan; Ertiga/Innova available on request. Call 8726124680 for current fares.",
    },
    {
      q: "Do you operate during Kumbh Mela in Prayagraj?",
      a: "Yes. We provide special transport services throughout the Kumbh Mela period. Demand is very high — advance booking of 2–3 days is strongly recommended. Call 8726124680 to reserve your cab early.",
    },
    {
      q: "Can I book a cab for the Triveni Sangam boat tour?",
      a: "Yes. Our Sangam tour cabs take you to the Triveni Sangam for the sacred boat ride experience, then continue to Allahabad Fort, Hanuman Mandir, and other major sights. Call 8726124680 for package details.",
    },
    {
      q: "What vehicles are available in Allahabad?",
      a: "We have Swift Dzire (4-seater), Maruti Ertiga (6-seater), Toyota Innova (7-seater), and standard sedans available in Allahabad for local, half-day, full-day, and outstation travel.",
    },
    {
      q: "How do I book a cab in Prayagraj / Allahabad?",
      a: "Call or WhatsApp 8726124680. We serve all areas including Civil Lines, Naini, Phaphamau, Jhunsi, Rambagh, and George Town. Confirmation within minutes, no advance payment needed.",
    },
  ],
  seo: {
    title:
      "Taxi Service in Allahabad Prayagraj | Cab Booking Sangam City | Tirupati Travel",
    description:
      "Book taxi and cab services in Allahabad (Prayagraj). Sangam tours, outstation cabs, Kumbh mela transport. Tirupati Travel — trusted Prayagraj cab service.",
    canonical: "https://tirupatitravel.in/allahabad",
  },
};

// ─── ALLAHABAD PLACES TO VISIT (CityLandingTemplate variant) ──────────────────

export const allahabadPlaces: CityLandingData = {
  city: "Allahabad",
  aliases: ["Prayagraj", "Sangam City"],
  heroText: "Explore Prayagraj — Sangam, Fort, Anand Bhawan & More",
  heroImage: "/assets/images/cities/allahabad-places.webp",
  services: [
    {
      label: "Sangam Boat Tour",
      icon: "/assets/services/sightseeing_icon.png",
      slug: "allahabad/cab-service-in-allahabad",
    },
    {
      label: "Temple Darshan",
      icon: "/assets/services/temple_icon.png",
      slug: "allahabad/allahabad-darshan-tour-package",
    },
    {
      label: "Outstation Taxi",
      icon: "/assets/services/cab.icon.png",
      slug: "allahabad/one-way-cab-in-allahabad",
    },
    {
      label: "Full Day Cab",
      icon: "/assets/services/car.png",
      slug: "allahabad/full-day-cab-in-allahabad",
    },
  ],
  vehicles: ["innova-crysta", "ertiga", "swift-dzire"],
  places: [
    {
      name: "Triveni Sangam",
      image: "/assets/images/prayagraj/kumbh-mela.webp",
      distance: "0 km",
    },
    {
      name: "Allahabad Fort",
      image: "/assets/images/prayagraj/allahabad_fort.webp",
      distance: "2 km",
    },
    {
      name: "Anand Bhawan",
      image: "/assets/images/prayagraj/anand_bhavan.webp",
      distance: "3 km",
    },
    {
      name: "Hanuman Mandir",
      image: "/assets/images/prayagraj/hanuman_mandir.webp",
      distance: "1.5 km",
    },
    {
      name: "Khusro Bagh",
      image: "/assets/images/prayagraj/khusro.webp",
      distance: "4 km",
    },
    {
      name: "All Saints Cathedral",
      image: "/assets/images/prayagraj/Saint_church.webp",
      distance: "3.5 km",
    },
    {
      name: "Minto Park",
      image: "/assets/images/prayagraj/nehru_park.webp",
      distance: "2 km",
    },
    {
      name: "Bharadwaj Ashram",
      image: "/assets/images/prayagraj/CSA_park.webp",
      distance: "5 km",
    },
  ],
  outstationLinks: [
    {
      destination: "Varanasi",
      slug: "allahabad/allahabad-to-varanasi-taxi",
      fare: 1800,
    },
    {
      destination: "Lucknow",
      slug: "allahabad/allahabad-to-lucknow-taxi",
      fare: 2200,
    },
    {
      destination: "Ayodhya",
      slug: "allahabad/allahabad-to-ayodhya-taxi",
      fare: 2800,
    },
    {
      destination: "Gaya",
      slug: "allahabad/allahabad-to-gaya-taxi",
      fare: 3200,
    },
  ],
  seo: {
    title:
      "Places to Visit in Allahabad Prayagraj | Tourist Spots Sangam | Tirupati Travel",
    description:
      "Top places to visit in Allahabad (Prayagraj) — Triveni Sangam, Allahabad Fort, Anand Bhawan & more. Book a sightseeing cab with Tirupati Travel.",
    canonical:
      "https://tirupatitravel.in/allahabad/places-to-visit-in-allahabad",
  },
};

// ─── LUCKNOW ──────────────────────────────────────────────────────────────────

export const lucknow: CityLandingData = {
  city: "Lucknow",
  aliases: ["Nawabs City", "City of Nawabs"],
  heroText: "Taxi & Tour Services in the City of Nawabs",
  heroImage: "/assets/images/lucknow/lucknow-hero.webp",
  services: [
    {
      label: "Outstation Taxi",
      icon: "/assets/services/cab.icon.png",
      slug: "lucknow/outstation-cab-in-lucknow",
    },
    {
      label: "Airport Taxi",
      icon: "/assets/services/airplane_icon.png",
      slug: "lucknow/airport-taxi-in-lucknow",
    },
    {
      label: "Heritage Tour",
      icon: "/assets/services/temple_icon.png",
      slug: "lucknow/taxi-in-lucknow",
    },
    {
      label: "Hotel Booking",
      icon: "/assets/services/hotel_icon.png",
      slug: "varanasi/hotel-in-varanasi",
    },
    {
      label: "Tempo Traveller",
      icon: "/assets/services/car.png",
      slug: "lucknow/tempo-traveller-in-lucknow",
    },
    {
      label: "Car Rental",
      icon: "/assets/services/car.png",
      slug: "lucknow/car-rental-in-lucknow",
    },
  ],
  vehicles: ["innova-crysta", "ertiga", "swift-dzire", "tempo-traveller"],
  places: [
    {
      name: "Bara Imambara",
      image: "/assets/images/lucknow/bara-imambara.webp",
      distance: "0 km",
    },
    {
      name: "Rumi Darwaza",
      image: "/assets/images/lucknow/rumi-darwaza.webp",
      distance: "0.3 km",
    },
    {
      name: "Hazratganj Market",
      image: "/assets/images/lucknow/hazratganj.webp",
      distance: "2 km",
    },
    {
      name: "British Residency",
      image: "/assets/images/lucknow/residency.webp",
      distance: "3 km",
    },
    {
      name: "Chota Imambara",
      image: "/assets/images/lucknow/chota-imambara.webp",
      distance: "1 km",
    },
    {
      name: "Ambedkar Park",
      image: "/assets/images/lucknow/ambedkar-park.webp",
      distance: "5 km",
    },
  ],
  outstationLinks: [
    {
      destination: "Varanasi",
      slug: "lucknow/lucknow-to-varanasi-taxi",
      fare: 3500,
    },
    {
      destination: "Ayodhya",
      slug: "lucknow/lucknow-to-ayodhya-taxi",
      fare: 1600,
    },
    {
      destination: "Allahabad",
      slug: "lucknow/lucknow-to-allahabad-taxi",
      fare: 2200,
    },
    { destination: "Agra", slug: "lucknow/lucknow-to-agra-taxi", fare: 4500 },
    { destination: "Delhi", slug: "lucknow/lucknow-to-delhi-taxi", fare: 6500 },
    { destination: "Gaya", slug: "lucknow/lucknow-to-gaya-taxi", fare: 5500 },
  ],
  faqs: [
    {
      q: "What is the taxi fare from Lucknow to Ayodhya?",
      a: "Lucknow to Ayodhya taxi starts from ₹1,600 for a sedan (approx. 135 km). Innova and Ertiga also available. Call 8726124680 for current rates and booking.",
    },
    {
      q: "Do you offer outstation cab service from Lucknow?",
      a: "Yes. We cover all major outstation routes from Lucknow — Ayodhya, Varanasi, Allahabad, Agra, Delhi, Gaya, Gorakhpur, and more. One-way and round-trip options available. Call 8726124680.",
    },
    {
      q: "Is airport taxi service available at Lucknow?",
      a: "Yes. We provide 24/7 pickup and drop at Chaudhary Charan Singh International Airport (LKO), Lucknow. Book at 8726124680 so a driver is waiting at arrivals.",
    },
    {
      q: "What types of cabs are available in Lucknow?",
      a: "We offer Toyota Innova Crysta (7-seater), Maruti Ertiga (6-seater), Swift Dzire (4-seater), and Tempo Traveller for groups of 10–12 in Lucknow. All AC with experienced drivers.",
    },
    {
      q: "Can I book a monthly car rental in Lucknow?",
      a: "Yes. We offer weekly and monthly car rental packages for corporates and long-stay visitors in Lucknow. Call 8726124680 to discuss custom rates based on your daily km requirement.",
    },
  ],
  seo: {
    title:
      "Taxi Service in Lucknow | Cab Booking City of Nawabs | Tirupati Travel",
    description:
      "Book reliable taxi and cab services in Lucknow. Outstation cabs, airport taxi, Tempo Traveller. Tirupati Travel — trusted Lucknow cab service. Call 8726124680.",
    canonical: "https://tirupatitravel.in/lucknow",
  },
};

// ─── LUCKNOW TAXI (CityLandingTemplate specialty) ─────────────────────────────

export const lucknowTaxi: CityLandingData = {
  city: "Lucknow",
  aliases: ["Nawabs City", "City of Nawabs"],
  heroText: "Reliable Taxi Services Across Lucknow & Beyond",
  heroImage: "/assets/images/cities/lucknow-taxi.webp",
  services: [
    {
      label: "Outstation Taxi",
      icon: "/assets/services/cab.icon.png",
      slug: "lucknow/outstation-cab-in-lucknow",
    },
    {
      label: "Airport Taxi",
      icon: "/assets/services/airplane_icon.png",
      slug: "lucknow/airport-taxi-in-lucknow",
    },
    {
      label: "Tempo Traveller",
      icon: "/assets/services/car.png",
      slug: "lucknow/tempo-traveller-in-lucknow",
    },
    {
      label: "Car Rental",
      icon: "/assets/services/car.png",
      slug: "lucknow/car-rental-in-lucknow",
    },
  ],
  vehicles: ["innova-crysta", "ertiga", "swift-dzire", "tempo-traveller"],
  places: [
    {
      name: "Bara Imambara",
      image: "/assets/images/lucknow/bara-imambara.webp",
      distance: "0 km",
    },
    {
      name: "Rumi Darwaza",
      image: "/assets/images/lucknow/rumi-darwaza.webp",
      distance: "0.3 km",
    },
    {
      name: "Hazratganj Market",
      image: "/assets/images/lucknow/hazratganj.webp",
      distance: "2 km",
    },
    {
      name: "British Residency",
      image: "/assets/images/lucknow/residency.webp",
      distance: "3 km",
    },
  ],
  outstationLinks: [
    {
      destination: "Varanasi",
      slug: "lucknow/lucknow-to-varanasi-taxi",
      fare: 3500,
    },
    {
      destination: "Ayodhya",
      slug: "lucknow/lucknow-to-ayodhya-taxi",
      fare: 1600,
    },
    {
      destination: "Allahabad",
      slug: "lucknow/lucknow-to-allahabad-taxi",
      fare: 2200,
    },
    { destination: "Agra", slug: "lucknow/lucknow-to-agra-taxi", fare: 4500 },
  ],
  seo: {
    title:
      "Taxi in Lucknow | Book Cab Lucknow | Outstation & Local | Tirupati Travel",
    description:
      "Best taxi service in Lucknow for outstation, airport, and local rides. AC cabs, on-time pickup, experienced drivers. Book with Tirupati Travel — 8726124680.",
    canonical: "https://tirupatitravel.in/lucknow/taxi-in-lucknow",
  },
};

// ─── GAYA ─────────────────────────────────────────────────────────────────────

export const gaya: CityLandingData = {
  city: "Gaya",
  aliases: ["Bodh Gaya", "Pitru Tirth"],
  heroText: "Taxi & Pilgrimage Services in the Land of Moksha",
  heroImage: "/assets/images/Gaya/Gaya.jpeg",
  services: [
    {
      label: "Outstation Taxi",
      icon: "/assets/services/cab.icon.png",
      slug: "gaya/gaya-to-varanasi-taxi",
    },
    {
      label: "Pind Daan Tour",
      icon: "/assets/services/temple_icon.png",
      slug: "gaya/gaya-to-varanasi-taxi",
    },
    {
      label: "Bodh Gaya Tour",
      icon: "/assets/services/sightseeing_icon.png",
      slug: "gaya/gaya-to-patna-taxi",
    },
    {
      label: "Hotel Booking",
      icon: "/assets/services/hotel_icon.png",
      slug: "varanasi/hotel-in-varanasi",
    },
    {
      label: "Car Rental",
      icon: "/assets/services/car.png",
      slug: "gaya/gaya-to-varanasi-taxi",
    },
    {
      label: "Airport Transfer",
      icon: "/assets/services/airplane_icon.png",
      slug: "gaya/gaya-to-patna-taxi",
    },
  ],
  vehicles: ["innova-crysta", "ertiga", "swift-dzire"],
  places: [
    {
      name: "Vishnupad Temple",
      image: "/assets/images/Gaya/vishnu-pad.webp",
      distance: "0 km",
    },
    { name: "Bodh Gaya", image: "/assets/images/Gaya/Gaya.webp", distance: "13 km" },
    {
      name: "Mahabodhi Temple",
      image: "/assets/images/Gaya/mahabodhi_temple.webp",
      distance: "13 km",
    },
    {
      name: "Falgu River Ghat",
      image: "/assets/images/Gaya/phalgu_river.webp",
      distance: "1 km",
    },
    {
      name: "Dungeshwari Cave",
      image: "/assets/images/Gaya/dungeswari_cave.webp",
      distance: "20 km",
    },
    {
      name: "Pretshila Hill",
      image: "/assets/images/Gaya/pretshila.webp",
      distance: "8 km",
    },
  ],
  outstationLinks: [
    { destination: "Varanasi", slug: "gaya/gaya-to-varanasi-taxi", fare: 2800 },
    { destination: "Patna", slug: "gaya/gaya-to-patna-taxi", fare: 2000 },
    { destination: "Rajgir", slug: "gaya/gaya-to-rajgir-taxi", fare: 1500 },
    { destination: "Nalanda", slug: "gaya/gaya-to-nalanda-taxi", fare: 1800 },
    {
      destination: "Allahabad",
      slug: "gaya/gaya-to-allahabad-taxi",
      fare: 3200,
    },
    { destination: "Kolkata", slug: "gaya/gaya-to-kolkata-taxi", fare: 7000 },
  ],
  faqs: [
    {
      q: "What is the taxi fare from Gaya to Varanasi?",
      a: "Gaya to Varanasi taxi starts from ₹2,800 for a sedan (approx. 240 km). Ertiga and Innova also available. Call 8726124680 for current rates and booking.",
    },
    {
      q: "Do you provide Pind Daan pilgrimage tour cabs in Gaya?",
      a: "Yes. We offer Pind Daan darshan packages covering Vishnupad Temple, Falgu River Ghat, Pretshila Hill, Brahmayoni Hill, and all required ritual spots. Call 8726124680 to arrange a dedicated pilgrimage cab.",
    },
    {
      q: "Is there cab service from Gaya to Bodh Gaya?",
      a: "Yes. Bodh Gaya is just 13 km from Gaya city. We offer day-trip packages to Mahabodhi Temple, Dungeshwari Cave, Sujata Kuti, and surrounding Buddhist sites. Call 8726124680 to book.",
    },
    {
      q: "What is the cab fare from Gaya to Patna?",
      a: "Gaya to Patna taxi starts from ₹2,000 for a sedan (approx. 100 km). Book by calling 8726124680.",
    },
    {
      q: "Do you provide pickup and drop from Gaya Airport?",
      a: "Yes. We provide 24/7 cab service from Gaya International Airport (GAY). Book at 8726124680 so your driver is ready on arrival.",
    },
  ],
  seo: {
    title:
      "Taxi Service in Gaya | Cab Booking Bodh Gaya Pitru Tirth | Tirupati Travel",
    description:
      "Book taxi and cab services in Gaya & Bodh Gaya. Pind Daan tours, Mahabodhi Temple visits, outstation cabs. Tirupati Travel — trusted Gaya cab service.",
    canonical: "https://tirupatitravel.in/gaya",
  },
};

// ─── GAYA PLACES TO VISIT (CityLandingTemplate variant) ───────────────────────

export const gayaPlaces: CityLandingData = {
  city: "Gaya",
  aliases: ["Bodh Gaya", "Pitru Tirth"],
  heroText: "Explore Gaya — Vishnupad, Bodh Gaya, Mahabodhi Temple & More",
  heroImage: "/assets/images/cities/gaya-places.webp",
  services: [
    {
      label: "Pind Daan Tour",
      icon: "/assets/services/temple_icon.png",
      slug: "gaya/gaya-to-varanasi-taxi",
    },
    {
      label: "Bodh Gaya Tour",
      icon: "/assets/services/sightseeing_icon.png",
      slug: "gaya/gaya-to-patna-taxi",
    },
    {
      label: "Outstation Taxi",
      icon: "/assets/services/cab.icon.png",
      slug: "gaya/gaya-to-varanasi-taxi",
    },
    {
      label: "Car Rental",
      icon: "/assets/services/car.png",
      slug: "gaya/gaya-to-varanasi-taxi",
    },
  ],
  vehicles: ["innova-crysta", "ertiga", "swift-dzire"],
  places: [
    {
      name: "Vishnupad Temple",
      image: "/assets/images/Gaya/vishnu-pad.webp",
      distance: "0 km",
    },
    { name: "Bodh Gaya", image: "/assets/images/Gaya/Gaya.webp", distance: "13 km" },
    {
      name: "Mahabodhi Temple",
      image: "/assets/images/Gaya/mahabodhi_temple.webp",
      distance: "13 km",
    },
    {
      name: "Falgu River Ghat",
      image: "/assets/images/Gaya/phalgu_river.webp",
      distance: "1 km",
    },
    {
      name: "Dungeshwari Cave",
      image: "/assets/images/Gaya/dungeswari_cave.webp",
      distance: "20 km",
    },
    {
      name: "Pretshila Hill",
      image: "/assets/images/Gaya/pretshila.webp",
      distance: "8 km",
    },
    {
      name: "Brahmayoni Hill",
      image: "/assets/images/Gaya/brahmayoni.webp",
      distance: "3 km",
    },
    {
      name: "Chinese Temple",
      image: "/assets/images/Gaya/thai_monastery.webp",
      distance: "14 km",
    },
  ],
  outstationLinks: [
    { destination: "Varanasi", slug: "gaya/gaya-to-varanasi-taxi", fare: 2800 },
    { destination: "Patna", slug: "gaya/gaya-to-patna-taxi", fare: 2000 },
    {
      destination: "Allahabad",
      slug: "gaya/gaya-to-allahabad-taxi",
      fare: 3200,
    },
    { destination: "Rajgir", slug: "gaya/gaya-to-rajgir-taxi", fare: 1500 },
  ],
  seo: {
    title:
      "Places to Visit in Gaya | Bodh Gaya Tourist Spots | Tirupati Travel",
    description:
      "Top places to visit in Gaya — Vishnupad Temple, Bodh Gaya, Mahabodhi Temple, Falgu Ghat. Book a sightseeing cab for Gaya & Bodh Gaya tour.",
    canonical: "https://tirupatitravel.in/gaya/places-to-visit-in-gaya",
  },
};

// ─── VINDHYACHAL ──────────────────────────────────────────────────────────────

export const vindhyachal: CityLandingData = {
  city: "Vindhyachal",
  aliases: ["Vindhya Dham", "Shakti Peeth"],
  heroText: "Taxi & Darshan Services at the Sacred Vindhya Shakti Peeth",
  heroImage: "/assets/images/vindhyachal/vindhyachal.png",
  services: [
    {
      label: "Outstation Taxi",
      icon: "/assets/services/cab.icon.png",
      slug: "vindhyachal/vindhyachal-to-varanasi-taxi",
    },
    {
      label: "Devi Darshan",
      icon: "/assets/services/temple_icon.png",
      slug: "vindhyachal/vindhyachal-to-varanasi-taxi",
    },
    {
      label: "Local Sightseeing",
      icon: "/assets/services/sightseeing_icon.png",
      slug: "vindhyachal/vindhyachal-to-allahabad-taxi",
    },
    {
      label: "Hotel Booking",
      icon: "/assets/services/hotel_icon.png",
      slug: "varanasi/hotel-in-varanasi",
    },
  ],
  vehicles: ["innova-crysta", "ertiga", "swift-dzire"],
  places: [
    {
      name: "Vindhyavasini Temple",
      image: "/assets/images/vindhyachal/vindhyachal.webp",
      distance: "0 km",
    },
    {
      name: "Ashtabhuja Temple",
      image: "/assets/images/vindhyachal/ashtabhuja_temple.webp",
      distance: "3 km",
    },
    {
      name: "Kali Khoh Temple",
      image: "/assets/images/vindhyachal/kali_khoh_temple.webp",
      distance: "2 km",
    },
    {
      name: "Ganges Ghat",
      image: "/assets/images/vindhyachal/vindyachal_dham.webp",
      distance: "0.5 km",
    },
    {
      name: "Sita Kund",
      image: "/assets/images/vindhyachal/sita_kund.webp",
      distance: "4 km",
    },
    {
      name: "Ram Gaya Ghat",
      image: "/assets/images/vindhyachal/ramgaya_ghat.webp",
      distance: "1 km",
    },
  ],
  outstationLinks: [
    {
      destination: "Varanasi",
      slug: "vindhyachal/vindhyachal-to-varanasi-taxi",
      fare: 1500,
    },
    {
      destination: "Allahabad",
      slug: "vindhyachal/vindhyachal-to-allahabad-taxi",
      fare: 1200,
    },
    {
      destination: "Lucknow",
      slug: "vindhyachal/vindhyachal-to-lucknow-taxi",
      fare: 4000,
    },
    {
      destination: "Ayodhya",
      slug: "vindhyachal/vindhyachal-to-ayodhya-taxi",
      fare: 4500,
    },
    {
      destination: "Gaya",
      slug: "vindhyachal/vindhyachal-to-gaya-taxi",
      fare: 4000,
    },
  ],
  faqs: [
    {
      q: "What is the taxi fare from Vindhyachal to Varanasi?",
      a: "Vindhyachal to Varanasi taxi starts from ₹1,500 for a sedan (approx. 65 km). Ertiga and Innova also available. Call 8726124680 to book.",
    },
    {
      q: "Do you provide complete Vindhyachal Devi darshan packages?",
      a: "Yes. We offer complete Vindhyachal darshan covering all three Shakti Peeths — Vindhyavasini Temple, Ashtabhuja Temple, and Kali Khoh Temple — in a single cab trip. Call 8726124680 to arrange.",
    },
    {
      q: "How far is Vindhyachal from Allahabad (Prayagraj)?",
      a: "Vindhyachal is approximately 60 km from Allahabad. Taxi fare starts from ₹1,200 for a sedan. Call 8726124680 to book a one-way or round trip.",
    },
    {
      q: "Can I visit Vindhyachal and Varanasi in a single day trip?",
      a: "Yes. A Vindhyachal–Varanasi combined day trip is very popular. Vindhyachal darshan in the morning, then onward to Varanasi for Ganga Aarti in the evening. Call 8726124680 to plan your itinerary.",
    },
    {
      q: "Is accommodation available near Vindhyachal temple?",
      a: "Yes. Dharamshalas, budget hotels, and guest houses are available near Vindhyavasini Temple. We can assist with both cab booking and accommodation recommendations. Call 8726124680.",
    },
  ],
  seo: {
    title:
      "Taxi Service in Vindhyachal | Cab Booking Shakti Peeth | Tirupati Travel",
    description:
      "Book taxi and cab services in Vindhyachal. Devi darshan tours, outstation cabs to Varanasi & Allahabad. Tirupati Travel — trusted Vindhyachal cab service.",
    canonical: "https://tirupatitravel.in/vindhyachal",
  },
};

// ─── VINDHYACHAL MANDIR (CityLandingTemplate specialty) ───────────────────────

export const vindhyachalMandir: CityLandingData = {
  city: "Vindhyachal",
  aliases: ["Vindhya Dham", "Shakti Peeth"],
  heroText: "Complete Vindhyachal Mandir Darshan — Three Shakti Peeths",
  heroImage: "/assets/images/cities/vindhyachal-mandir.webp",
  services: [
    {
      label: "Devi Darshan",
      icon: "/assets/services/temple_icon.png",
      slug: "vindhyachal/vindhyachal-to-varanasi-taxi",
    },
    {
      label: "Local Sightseeing",
      icon: "/assets/services/sightseeing_icon.png",
      slug: "vindhyachal/vindhyachal-to-allahabad-taxi",
    },
    {
      label: "Outstation Taxi",
      icon: "/assets/services/cab.icon.png",
      slug: "vindhyachal/vindhyachal-to-varanasi-taxi",
    },
    {
      label: "Hotel Booking",
      icon: "/assets/services/hotel_icon.png",
      slug: "varanasi/hotel-in-varanasi",
    },
  ],
  vehicles: ["innova-crysta", "ertiga", "swift-dzire"],
  places: [
    {
      name: "Vindhyavasini Temple",
      image: "/assets/images/vindhyachal/vindhyachal.webp",
      distance: "0 km",
    },
    {
      name: "Ashtabhuja Temple",
      image: "/assets/images/vindhyachal/ashtabhuja_temple.webp",
      distance: "3 km",
    },
    {
      name: "Kali Khoh Temple",
      image: "/assets/images/vindhyachal/kali_khoh_temple.webp",
      distance: "2 km",
    },
    {
      name: "Ganges Ghat",
      image: "/assets/images/vindhyachal/vindyachal.webp",
      distance: "0.5 km",
    },
    {
      name: "Sita Kund",
      image: "/assets/images/vindhyachal/sita_kund.webp",
      distance: "4 km",
    },
    {
      name: "Ram Gaya Ghat",
      image: "/assets/images/vindhyachal/ramgaya_ghat.webp",
      distance: "1 km",
    },
  ],
  outstationLinks: [
    {
      destination: "Varanasi",
      slug: "vindhyachal/vindhyachal-to-varanasi-taxi",
      fare: 1500,
    },
    {
      destination: "Allahabad",
      slug: "vindhyachal/vindhyachal-to-allahabad-taxi",
      fare: 1200,
    },
    {
      destination: "Lucknow",
      slug: "vindhyachal/vindhyachal-to-lucknow-taxi",
      fare: 4000,
    },
  ],
  seo: {
    title: "Vindhyachal Mandir Darshan | Shakti Peeth Tour | Tirupati Travel",
    description:
      "Complete Vindhyachal Mandir darshan — Vindhyavasini, Ashtabhuja, Kali Khoh temples. Book cab packages for the three Shakti Peeths with Tirupati Travel.",
    canonical: "https://tirupatitravel.in/vindhyachal/vindhyachal-mandir",
  },
};
