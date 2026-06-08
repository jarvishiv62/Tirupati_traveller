// src/data/accommodation.ts
// ──────────────────────────
// Accommodation data — currently Varanasi only (5 entries).
// Generic structure: add other cities by following the same shape.
// Used by: AccommodationTemplate via urlParser.ts → accommodation namespace.
//
// allRoutes.ts entries for Chunk 8:
//   varanasi/hotel-in-varanasi        → accommodation.hotelVaranasi
//   varanasi/homestay-in-varanasi     → accommodation.homestayVaranasi
//   varanasi/guest-house-in-varanasi  → accommodation.guestHouseVaranasi
//   varanasi/dharamshala-in-varanasi  → accommodation.dharamshalaVaranasi
//   varanasi/dormitory-in-varanasi    → accommodation.dormitoryVaranasi

const BASE = "https://tirupatitravel.in";

export type AccType =
  | "hotel"
  | "homestay"
  | "guest-house"
  | "dharamshala"
  | "dormitory";

export interface AccommodationData {
  city: string;
  citySlug: string;
  accType: AccType;
  displayName: string; // e.g. "Hotels in Varanasi"
  heroTagline: string; // subtitle below H1
  heroImage: string; // /assets/images/...
  priceRange: { min: number; max: number; unit: "per night" | "per bed" };
  features: string[]; // amenity list
  highlights: {
    // 4-6 feature cards
    icon: string; // lucide icon name
    title: string;
    description: string;
  }[];
  nearbyGhats: string[]; // ["Dashashwamedh Ghat (0.3 km)", ...]
  popularAreas: string[]; // ["Godowlia", "Assi Ghat", ...]
  bookingNote: string; // short note about booking process
  faqs: { q: string; a: string }[];
  mapsQuery: string; // Google Maps search query for link
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function buildFaqs(
  type: string,
  city: string,
  min: number,
  max: number,
): { q: string; a: string }[] {
  return [
    {
      q: `How much does a ${type} in ${city} cost per night?`,
      a: `${type} prices in ${city} typically range from ₹${min} to ₹${max} per night, depending on location, amenities, and season. Budget options near the ghats start around ₹${min}. Premium properties with Ganga views can exceed ₹${max}. Call Tirupati Travel at 8726124680 for curated recommendations in any budget.`,
    },
    {
      q: `Which are the best areas to stay in ${city}?`,
      a: `For pilgrimage travellers, the areas near Dashashwamedh Ghat, Assi Ghat, and Godowlia are most convenient. They offer walking access to the main temples and ghats. For a quieter experience, Cantonment and Sigra areas offer modern hotels away from the city centre.`,
    },
    {
      q: `Can Tirupati Travel help book accommodation in ${city}?`,
      a: `Yes. Tirupati Travel offers end-to-end pilgrimage packages that include accommodation, cab service, and darshan arrangements. Call us at 8726124680 or WhatsApp for customised recommendations based on your budget and travel dates.`,
    },
    {
      q: `What is the check-in and check-out time for ${type} in ${city}?`,
      a: `Standard check-in time is 12:00 noon and check-out is 11:00 AM at most properties. Early check-in and late check-out are available on request, subject to availability. Pilgrimage travellers arriving early for morning aarti can usually arrange early check-in.`,
    },
    {
      q: `Are ${type} near Kashi Vishwanath Temple available?`,
      a: `Yes. Several ${type.toLowerCase()} are located within 500 metres to 1 km of Kashi Vishwanath Temple. Properties in the Vishwanath Gali and Dashashwamedh areas offer the most convenient access for darshan. Tirupati Travel can recommend properties suited to your group size and budget.`,
    },
    {
      q: `Is it safe to stay near the ghats in Varanasi?`,
      a: `Yes. The ghat areas in Varanasi are active with pilgrims 24 hours a day and are generally safe. The lanes (galis) can be narrow — luggage trolleys may not work well. Tirupati Travel drivers are familiar with all ghat-side properties and will help with luggage assistance.`,
    },
  ];
}

// ═══════════════════════════════════════════════════════════════════════════════
// HOTEL IN VARANASI
// ═══════════════════════════════════════════════════════════════════════════════
export const hotelVaranasi: AccommodationData = {
  city: "Varanasi",
  citySlug: "varanasi",
  accType: "hotel",
  displayName: "Hotels in Varanasi",
  heroTagline: "Comfortable stays near the Ghats — Budget to Premium",
  heroImage: "/assets/images/varanasi/hotel.jpg",
  priceRange: { min: 800, max: 8000, unit: "per night" },

  features: [
    "AC & Non-AC rooms available",
    "Room service & housekeeping",
    "Free Wi-Fi in most properties",
    "24-hour reception",
    "Ganga view rooms (select properties)",
    "Attached bathrooms with hot water",
    "Restaurant & room service",
    "Laundry service",
    "Travel desk for sightseeing",
    "Lift / elevator (multi-storey hotels)",
  ],

  highlights: [
    {
      icon: "MapPin",
      title: "Prime Ghat Locations",
      description:
        "Stay within walking distance of Dashashwamedh Ghat, Assi Ghat, and Kashi Vishwanath Temple.",
    },
    {
      icon: "Star",
      title: "Budget to Premium",
      description:
        "Options from ₹800/night budget rooms to ₹8,000/night premium heritage hotels with Ganga views.",
    },
    {
      icon: "Clock",
      title: "24-Hour Reception",
      description:
        "Hotels near the ghats offer round-the-clock check-in — perfect for pilgrims arriving late or departing early.",
    },
    {
      icon: "ShieldCheck",
      title: "Verified Properties",
      description:
        "Tirupati Travel recommends only verified, guest-reviewed hotels with confirmed amenities.",
    },
    {
      icon: "Car",
      title: "Cab Pickup Available",
      description:
        "Book your hotel through Tirupati Travel and get seamless airport/station pickup in our AC cabs.",
    },
    {
      icon: "Utensils",
      title: "Vegetarian-Friendly",
      description:
        "Most hotels near the ghats serve pure vegetarian food, ideal for religious travellers.",
    },
  ],

  nearbyGhats: [
    "Dashashwamedh Ghat (0.3 km from Godowlia area)",
    "Assi Ghat (1.5 km from Godowlia)",
    "Manikarnika Ghat (0.8 km via gali)",
    "Harishchandra Ghat (0.6 km)",
    "Kedar Ghat (0.5 km)",
    "Raj Ghat (2.5 km)",
  ],

  popularAreas: [
    "Godowlia — closest to Vishwanath Temple",
    "Dashashwamedh — prime ghat access",
    "Assi Ghat — quieter, riverside",
    "Nadesar — upscale, away from crowds",
    "Sigra — modern area, good connectivity",
    "Cantonment — near railway station",
  ],

  bookingNote:
    "For best rates and hassle-free pilgrimage planning, call Tirupati Travel at 8726124680. We handle hotel booking + cab + darshan arrangements as a single package.",
  mapsQuery: "Hotels near Dashashwamedh Ghat Varanasi",
  faqs: buildFaqs("Hotel", "Varanasi", 800, 8000),

  seo: {
    title:
      "Hotels in Varanasi | Budget to Premium Near Ghats | Tirupati Travel",
    description:
      "Find the best hotels in Varanasi near Dashashwamedh Ghat and Kashi Vishwanath Temple. Budget rooms from ₹800 to premium stays with Ganga views. Book with Tirupati Travel: 8726124680.",
    canonical: `${BASE}/varanasi/hotel-in-varanasi`,
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// HOMESTAY IN VARANASI
// ═══════════════════════════════════════════════════════════════════════════════
export const homestayVaranasi: AccommodationData = {
  city: "Varanasi",
  citySlug: "varanasi",
  accType: "homestay",
  displayName: "Homestays in Varanasi",
  heroTagline: "Authentic Banaras Living — Stay with Local Families",
  heroImage: "/assets/images/varanasi/homestay.jpg",
  priceRange: { min: 600, max: 3000, unit: "per night" },

  features: [
    "Private room with attached or shared bathroom",
    "Home-cooked vegetarian meals (on request)",
    "Local family hosting experience",
    "Cultural immersion — festivals, rituals, cooking",
    "Personal attention and local guidance",
    "Wi-Fi in most properties",
    "Early morning Ganga Aarti guidance",
    "Yoga and meditation sessions (select homes)",
    "Pick and drop coordination",
    "Stories and history of Varanasi from local hosts",
  ],

  highlights: [
    {
      icon: "Home",
      title: "Live Like a Local",
      description:
        "Experience Varanasi beyond tourism — share meals, learn rituals, and explore the city with knowledgeable hosts.",
    },
    {
      icon: "Heart",
      title: "Warm & Personal",
      description:
        "Homestay hosts in Varanasi treat guests as family, offering genuine hospitality that hotels cannot match.",
    },
    {
      icon: "Utensils",
      title: "Home-Cooked Meals",
      description:
        "Authentic Banarasi cuisine — dal baati, chaura, litti chokha, tamatar chaat — made fresh by the host family.",
    },
    {
      icon: "MapPin",
      title: "Ghat Proximity",
      description:
        "Many homestays are located in the historic galis just steps from the Ganges ghats.",
    },
    {
      icon: "BookOpen",
      title: "Cultural Learning",
      description:
        "Hosts offer guided walks, temple visits, cooking classes, and Sanskrit lessons on request.",
    },
    {
      icon: "ShieldCheck",
      title: "Safe & Verified",
      description:
        "All Tirupati Travel-recommended homestays are verified, registered, and guest-reviewed.",
    },
  ],

  nearbyGhats: [
    "Dashashwamedh Ghat (accessible on foot from most gali homestays)",
    "Assi Ghat (10-15 min walk from southern Varanasi homestays)",
    "Kedar Ghat (5 min from several heritage homestays)",
    "Panchganga Ghat (15 min walk)",
  ],

  popularAreas: [
    "Vishwanath Gali — inside the old city, closest to temples",
    "Assi area — quieter, popular with long-stay guests",
    "Nagwa — near BHU, safe and residential",
    "Bhelupura — residential, good connectivity",
  ],

  bookingNote:
    "Homestay availability is limited. Contact Tirupati Travel at 8726124680 to arrange a verified homestay that matches your budget, group size, and dates.",
  mapsQuery: "Homestay near Assi Ghat Varanasi",
  faqs: buildFaqs("Homestay", "Varanasi", 600, 3000),

  seo: {
    title:
      "Homestay in Varanasi | Local Family Stay Near Ghats | Tirupati Travel",
    description:
      "Book authentic homestays in Varanasi near Dashashwamedh and Assi Ghat. Experience Banarasi culture, home-cooked meals, and local hospitality from ₹600/night. Call: 8726124680.",
    canonical: `${BASE}/varanasi/homestay-in-varanasi`,
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// GUEST HOUSE IN VARANASI
// ═══════════════════════════════════════════════════════════════════════════════
export const guestHouseVaranasi: AccommodationData = {
  city: "Varanasi",
  citySlug: "varanasi",
  accType: "guest-house",
  displayName: "Guest Houses in Varanasi",
  heroTagline: "Affordable Comfort Near the Ghats — Clean, Safe, Accessible",
  heroImage: "/assets/images/varanasi/guest-house.jpg",
  priceRange: { min: 500, max: 2500, unit: "per night" },

  features: [
    "Private rooms with clean attached bathrooms",
    "Hot water supply 24 hours",
    "Ceiling fan / AC options",
    "Common dining area or meal service",
    "Daily housekeeping",
    "Locker / safe for valuables",
    "Wi-Fi in common areas",
    "Ganga view (select rooms)",
    "Rooftop sitting area (many properties)",
    "Travel assistance and booking help",
  ],

  highlights: [
    {
      icon: "DollarSign",
      title: "Budget Friendly",
      description:
        "Guest houses offer clean private rooms at half the cost of hotels — ideal for pilgrims and solo travellers.",
    },
    {
      icon: "MapPin",
      title: "Ghat-Side Locations",
      description:
        "Many guest houses sit directly on ghat lanes, offering unmatched access to the Ganges and temples.",
    },
    {
      icon: "Users",
      title: "Group Accommodation",
      description:
        "Guest houses can accommodate larger pilgrim groups with multiple rooms at competitive group rates.",
    },
    {
      icon: "Coffee",
      title: "Rooftop Views",
      description:
        "Wake up to sunrise over the Ganga from rooftop seating areas common in Varanasi guest houses.",
    },
    {
      icon: "ShieldCheck",
      title: "Clean & Secure",
      description:
        "All recommended guest houses maintain basic cleanliness standards with 24-hour security.",
    },
    {
      icon: "Wifi",
      title: "Modern Amenities",
      description:
        "Most guest houses now offer Wi-Fi, hot water, and power backup — modern comforts in heritage settings.",
    },
  ],

  nearbyGhats: [
    "Dashashwamedh Ghat (0.2 km from central ghat-side guest houses)",
    "Manikarnika Ghat (0.5 km)",
    "Assi Ghat (2 km — popular area for long-stay guest houses)",
    "Scindia Ghat (1 km)",
    "Man Mandir Ghat (0.8 km)",
  ],

  popularAreas: [
    "Dashashwamedh — directly on the main ghat road",
    "Bengali Tola — heritage area, very close to Vishwanath Temple",
    "Assi Ghat Road — quieter, long-stay friendly",
    "Kabirchaura — affordable, local neighbourhood",
  ],

  bookingNote:
    "Guest house rooms fill up fast during pilgrim seasons (Navratri, Kartik Purnima, Dev Deepawali). Book early via Tirupati Travel: 8726124680.",
  mapsQuery: "Guest House near Dashashwamedh Ghat Varanasi",
  faqs: buildFaqs("Guest House", "Varanasi", 500, 2500),

  seo: {
    title:
      "Guest House in Varanasi | Affordable Rooms Near Ghats | Tirupati Travel",
    description:
      "Find affordable guest houses in Varanasi near Dashashwamedh Ghat and Kashi Vishwanath Temple. Clean rooms from ₹500/night. Book with Tirupati Travel: 8726124680.",
    canonical: `${BASE}/varanasi/guest-house-in-varanasi`,
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// DHARAMSHALA IN VARANASI
// ═══════════════════════════════════════════════════════════════════════════════
export const dharamshalaVaranasi: AccommodationData = {
  city: "Varanasi",
  citySlug: "varanasi",
  accType: "dharamshala",
  displayName: "Dharamshala in Varanasi",
  heroTagline: "Sacred Rest for Pilgrims — Simple, Pure, Affordable",
  heroImage: "/assets/images/varanasi/dharamshala.jpg",
  priceRange: { min: 150, max: 800, unit: "per night" },

  features: [
    "Simple clean rooms for pilgrims",
    "Common prayer hall / temple access",
    "Sattvic vegetarian meals (langar)",
    "Community-style accommodation",
    "No alcohol or non-vegetarian food allowed",
    "Safe drinking water",
    "Common bathrooms (mostly)",
    "Blankets and basic bedding provided",
    "Open 24 hours for pilgrim arrivals",
    "Minimal cost — donations welcome",
  ],

  highlights: [
    {
      icon: "Heart",
      title: "Sacred & Serene",
      description:
        "Dharamshalas maintain a devotional atmosphere with morning prayers, kirtan, and regular aarti.",
    },
    {
      icon: "DollarSign",
      title: "Very Affordable",
      description:
        "Accommodation from ₹150 to ₹800 per night — many accept donations in place of fixed charges.",
    },
    {
      icon: "Utensils",
      title: "Sattvic Meals",
      description:
        "Simple, pure vegetarian langar food served at fixed times — included or available at nominal cost.",
    },
    {
      icon: "Users",
      title: "Pilgrim Community",
      description:
        "Travel with fellow pilgrims in a community setting — share experiences and find spiritual companionship.",
    },
    {
      icon: "MapPin",
      title: "Temple Proximity",
      description:
        "Most dharamshalas in Varanasi are located within a short walk of major temples and ghats.",
    },
    {
      icon: "Moon",
      title: "Peaceful Nights",
      description:
        "Early to bed culture — ideal for pilgrims wishing to attend early morning Ganga Aarti.",
    },
  ],

  nearbyGhats: [
    "Dashashwamedh Ghat (within 1 km of most dharamshalas)",
    "Panchganga Ghat (many dharamshalas directly adjacent)",
    "Munshi Ghat (0.5 km)",
    "Harishchandra Ghat (0.8 km)",
  ],

  popularAreas: [
    "Panchkosi Road — many ashram dharamshalas",
    "Bengali Tola — several Bengali community dharamshalas",
    "Near Kashi Vishwanath — temple-run dharamshalas",
    "Dashashwamedh area — centrally located",
  ],

  bookingNote:
    "Many dharamshalas operate on a walk-in basis. For advance arrangement and guidance on which dharamshala suits your group, contact Tirupati Travel: 8726124680.",
  mapsQuery: "Dharamshala near Kashi Vishwanath Temple Varanasi",
  faqs: buildFaqs("Dharamshala", "Varanasi", 150, 800),

  seo: {
    title:
      "Dharamshala in Varanasi | Affordable Pilgrim Stay | Tirupati Travel",
    description:
      "Find the best dharamshalas in Varanasi for pilgrims near Kashi Vishwanath and Dashashwamedh Ghat. Sattvic meals, pure atmosphere. From ₹150/night. Call: 8726124680.",
    canonical: `${BASE}/varanasi/dharamshala-in-varanasi`,
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// DORMITORY IN VARANASI
// ═══════════════════════════════════════════════════════════════════════════════
export const dormitoryVaranasi: AccommodationData = {
  city: "Varanasi",
  citySlug: "varanasi",
  accType: "dormitory",
  displayName: "Dormitory Stay in Varanasi",
  heroTagline:
    "Budget Dorm Beds Near the Ghats — Perfect for Solo & Budget Travellers",
  heroImage: "/assets/images/varanasi/dormitory.jpg",
  priceRange: { min: 150, max: 600, unit: "per bed" },

  features: [
    "Shared dormitory rooms (4 to 12 beds)",
    "Individual bed with mattress and pillow",
    "Shared clean bathrooms with hot water",
    "Locker for personal belongings",
    "Wi-Fi included",
    "Common area / lounge",
    "Power backup",
    "Reading lights above each bed",
    "Morning tea / breakfast option",
    "24-hour security",
  ],

  highlights: [
    {
      icon: "DollarSign",
      title: "Lowest Cost Option",
      description:
        "Dorm beds from ₹150 to ₹600 per night — the most budget-friendly way to stay in Varanasi.",
    },
    {
      icon: "Users",
      title: "Social Atmosphere",
      description:
        "Meet fellow travellers from across India and the world. Popular among backpackers and solo pilgrims.",
    },
    {
      icon: "Lock",
      title: "Personal Locker",
      description:
        "Secure locker for your valuables included at most dormitories — travel light and worry-free.",
    },
    {
      icon: "Wifi",
      title: "Free Wi-Fi",
      description:
        "Stay connected — most dormitories near the ghats offer complimentary Wi-Fi in rooms and common areas.",
    },
    {
      icon: "MapPin",
      title: "Central Locations",
      description:
        "Dormitories are concentrated near Assi Ghat and Dashashwamedh — both prime spots for pilgrimage and sightseeing.",
    },
    {
      icon: "Sun",
      title: "Rooftop Access",
      description:
        "Many dorm hostels offer rooftop terraces with Ganga views — perfect for sunrise watching.",
    },
  ],

  nearbyGhats: [
    "Assi Ghat (most budget hostels/dorms are in the Assi area)",
    "Dashashwamedh Ghat (some dorms in the central area)",
    "Kedar Ghat (0.8 km walk)",
    "Tulsi Ghat (0.3 km from Assi area dorms)",
  ],

  popularAreas: [
    "Assi Ghat area — highest concentration of budget dormitories",
    "Sonarpura — good connectivity, budget-friendly",
    "Dashashwamedh — central, near all attractions",
  ],

  bookingNote:
    "Dormitory beds sell out fast in peak season (October–March). Pre-book at least a week in advance. Tirupati Travel can assist with coordination: 8726124680.",
  mapsQuery: "Dormitory Hostel near Assi Ghat Varanasi",
  faqs: buildFaqs("Dormitory", "Varanasi", 150, 600),

  seo: {
    title:
      "Dormitory in Varanasi | Budget Dorm Beds Near Ghats | Tirupati Travel",
    description:
      "Book budget dormitory beds in Varanasi near Assi Ghat and Dashashwamedh. Dorm beds from ₹150/night. Clean, safe, Wi-Fi included. Call Tirupati Travel: 8726124680.",
    canonical: `${BASE}/varanasi/dormitory-in-varanasi`,
  },
};
