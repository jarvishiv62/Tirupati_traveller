// src/data/offers.ts
// ───────────────────
// GLOBAL OFFERS STORE — single source of truth for all active offers.
// Add new offers here. Expired offers auto-hide via validUntil date check.
//
// Tags control where each offer appears:
//   'all'         → every page (homepage, city, outstation, vehicle)
//   'outstation'  → outstation route pages only
//   'varanasi'    → varanasi city pages only
//   'ayodhya'     → ayodhya city pages only
//   'allahabad'   → allahabad city pages only
//   'lucknow'     → lucknow city pages only
//   'gaya'        → gaya city pages only
//   'vehicle'     → vehicle-specific pages (Innova, Ertiga etc.)
//   'innova'      → Innova pages specifically
//   'tempo'       → Tempo Traveller pages
//   'airport'     → airport taxi pages
//   'seasonal'    → festival/seasonal offers (Navratri, Diwali etc.)
//   'group'       → group travel offers
//   'firsttime'   → first-time booking offers
//   'corporate'   → corporate booking pages
//   'package'     → tour package pages

export type OfferTag =
  | "all"
  | "outstation"
  | "varanasi"
  | "ayodhya"
  | "allahabad"
  | "lucknow"
  | "gaya"
  | "vindhyachal"
  | "vehicle"
  | "innova"
  | "tempo"
  | "airport"
  | "seasonal"
  | "group"
  | "firsttime"
  | "corporate"
  | "package";

export type OfferType =
  | "percentage" // e.g. 15% off
  | "flat" // e.g. ₹200 off
  | "free" // e.g. free driver stay
  | "upgrade" // e.g. free vehicle upgrade
  | "group" // group discount
  | "seasonal"; // festival/holiday offer

export interface Offer {
  id: string; // unique slug — used in coupon code
  title: string; // e.g. "First Ride Discount"
  tagline: string; // e.g. "Book your first trip and save"
  description: string; // shown on card body
  type: OfferType;
  badge: string; // e.g. "15% OFF", "₹200 OFF", "FREE UPGRADE"
  badgeColor: "saffron" | "gold" | "green" | "navy" | "red";
  couponCode: string; // e.g. "FIRST15" — shown on card, sent via WA
  termsShort: string; // 1-line terms shown on card
  termsFull: string[]; // full T&C for WhatsApp message
  tags: OfferTag[];
  validFrom: string; // ISO date string e.g. '2025-01-01'
  validUntil: string; // ISO date string — '' means no expiry
  featured: boolean; // pinned to front of slider
  limitedSlots?: number; // if set, shows "Only X slots left" urgency
  minBookingValue?: number; // minimum fare to apply offer
  emoji: string; // emoji for card visual flair
}

// ─── ALL OFFERS ───────────────────────────────────────────────────────────────
export const allOffers: Offer[] = [
  // ── ALWAYS-ON OFFERS ────────────────────────────────────────────────────────

  {
    id: "first15",
    title: "First Ride Discount",
    tagline: "New to Tirupati Travel? Save on your first booking",
    description:
      "Get 15% off on your very first taxi or tour package booking with us. Valid for all vehicle types and destinations.",
    type: "percentage",
    badge: "15% OFF",
    badgeColor: "saffron",
    couponCode: "FIRST15",
    termsShort: "Valid for first-time customers only. Min booking ₹500.",
    termsFull: [
      "Valid for first-time bookings only.",
      "Maximum discount: ₹500.",
      "Minimum booking value: ₹500.",
      "Valid on all vehicle types and routes.",
      "Cannot be combined with other offers.",
      "Share coupon code FIRST15 on WhatsApp to claim.",
    ],
    tags: ["all", "firsttime"],
    validFrom: "2025-01-01",
    validUntil: "",
    featured: true,
    limitedSlots: undefined,
    minBookingValue: 500,
    emoji: "🎉",
  },

  {
    id: "group200",
    title: "Group Travel Discount",
    tagline: "Travelling in a group of 6 or more? Save ₹300",
    description:
      "Book a Tempo Traveller or Innova for 6+ people and get ₹300 off your total fare. Perfect for family pilgrimages.",
    type: "flat",
    badge: "₹300 OFF",
    badgeColor: "gold",
    couponCode: "GROUP300",
    termsShort: "Min 6 passengers. Valid on Innova & Tempo Traveller.",
    termsFull: [
      "Minimum 6 passengers required.",
      "Valid on Innova, Innova Crysta, and Tempo Traveller bookings.",
      "Discount applied on total fare before toll charges.",
      "Valid for outstation and full-day bookings.",
      "Share coupon code GROUP300 on WhatsApp to claim.",
    ],
    tags: ["all", "group", "vehicle", "innova", "tempo", "outstation"],
    validFrom: "2025-01-01",
    validUntil: "",
    featured: true,
    limitedSlots: undefined,
    minBookingValue: 1200,
    emoji: "👨‍👩‍👧‍👦",
  },

  {
    id: "earlybird",
    title: "Early Bird Booking",
    tagline: "Plan ahead and save ₹150 on any outstation trip",
    description:
      "Book your outstation taxi 48 hours or more in advance and get ₹150 off. Best for pilgrimage circuits — Varanasi to Gaya, Ayodhya, Allahabad.",
    type: "flat",
    badge: "₹150 OFF",
    badgeColor: "green",
    couponCode: "EARLY150",
    termsShort: "Book 48hrs+ in advance. Valid on all outstation routes.",
    termsFull: [
      "Booking must be made at least 48 hours before travel date.",
      "Valid on all outstation routes across all cities.",
      "Not valid for same-day or next-day bookings.",
      "Minimum booking value: ₹800.",
      "Share coupon code EARLY150 on WhatsApp to claim.",
    ],
    tags: ["outstation", "varanasi", "ayodhya", "allahabad", "gaya"],
    validFrom: "2025-01-01",
    validUntil: "",
    featured: false,
    minBookingValue: 800,
    emoji: "⏰",
  },

  {
    id: "upgrade-free",
    title: "Free Vehicle Upgrade",
    tagline: "Book a Sedan, get an Ertiga — at no extra cost",
    description:
      "On select dates, when you book a Sedan for an outstation trip, we upgrade you to an Ertiga for free. Subject to availability.",
    type: "upgrade",
    badge: "FREE UPGRADE",
    badgeColor: "navy",
    couponCode: "UPGRADE2025",
    termsShort: "Subject to vehicle availability. Outstation bookings only.",
    termsFull: [
      "Upgrade from Sedan to Ertiga at no extra cost.",
      "Subject to Ertiga availability on your travel date.",
      "Valid for outstation bookings of 100 km or more.",
      "Call us to confirm upgrade availability before booking.",
      "Share coupon UPGRADE2025 on WhatsApp to check availability.",
    ],
    tags: ["outstation", "vehicle"],
    validFrom: "2025-01-01",
    validUntil: "",
    featured: false,
    limitedSlots: 5,
    emoji: "⬆️",
  },

  {
    id: "corporate10",
    title: "Corporate Booking Offer",
    tagline: "Regular business travel? Get 10% off every booking",
    description:
      "Companies and corporate accounts get 10% off on all bookings — airport transfers, outstation trips, and monthly car rentals in Varanasi, Lucknow, and Allahabad.",
    type: "percentage",
    badge: "10% OFF",
    badgeColor: "navy",
    couponCode: "CORP10",
    termsShort:
      "Valid for registered corporate accounts. GST invoice provided.",
    termsFull: [
      "Valid for corporate / business accounts only.",
      "Minimum 2 bookings per month to maintain corporate rate.",
      "GST invoice provided for all corporate bookings.",
      "Valid across Varanasi, Lucknow, Ayodhya, and Allahabad.",
      "Contact us at 8726124680 to set up your corporate account.",
      "Share coupon code CORP10 on WhatsApp to get started.",
    ],
    tags: ["corporate", "all"],
    validFrom: "2025-01-01",
    validUntil: "",
    featured: false,
    emoji: "💼",
  },

  // ── DESTINATION-SPECIFIC OFFERS ─────────────────────────────────────────────

  {
    id: "varanasi-gaya-deal",
    title: "Varanasi → Gaya Special",
    tagline: "The most popular pilgrimage route — now cheaper",
    description:
      "Book the Varanasi to Gaya taxi and get ₹200 off your sedan fare. Covers Mahabodhi Temple, Vishnupad, and Bodhi Tree circuit.",
    type: "flat",
    badge: "₹200 OFF",
    badgeColor: "saffron",
    couponCode: "VNSGA200",
    termsShort: "Valid on sedan bookings Varanasi → Gaya only.",
    termsFull: [
      "Valid only on Varanasi to Gaya one-way sedan bookings.",
      "Cannot be applied to Innova or Crysta bookings.",
      "Toll charges are extra.",
      "Share coupon VNSGA200 on WhatsApp to claim.",
    ],
    tags: ["varanasi", "outstation", "gaya"],
    validFrom: "2025-01-01",
    validUntil: "",
    featured: true,
    minBookingValue: 2200,
    emoji: "🛕",
  },

  {
    id: "ayodhya-package",
    title: "Ayodhya Ram Mandir Package",
    tagline: "Taxi + darshan + hotel — all in one deal",
    description:
      "Book the Ayodhya pilgrimage package (1N 2D) and get ₹500 off. Includes AC taxi, hotel, and Ram Mandir darshan guidance.",
    type: "flat",
    badge: "₹500 OFF",
    badgeColor: "gold",
    couponCode: "RAMMANDIR500",
    termsShort: "Valid on 1N2D Ayodhya package bookings only.",
    termsFull: [
      "Valid on Ayodhya 1 Night 2 Day package bookings only.",
      "Includes taxi, hotel, and darshan coordination.",
      "Minimum package value ₹3,500.",
      "Cannot be combined with other offers.",
      "Share coupon RAMMANDIR500 on WhatsApp to claim.",
    ],
    tags: ["ayodhya", "package", "seasonal"],
    validFrom: "2025-01-01",
    validUntil: "",
    featured: true,
    emoji: "🙏",
  },

  {
    id: "lucknow-airport",
    title: "Lucknow Airport Flat Rate",
    tagline: "No meter, no surge — fixed ₹499 airport transfer",
    description:
      "Book a Sedan transfer to/from Lucknow Airport (LKO) at a fixed ₹499 — no surge pricing, no meter. Guaranteed rate.",
    type: "flat",
    badge: "FLAT ₹499",
    badgeColor: "green",
    couponCode: "LKOFLAT",
    termsShort: "Sedan only. Lucknow Airport transfers. Toll extra.",
    termsFull: [
      "Valid for Lucknow Airport (LKO) one-way sedan transfers only.",
      "Covers Hazratganj, Alambagh, Gomti Nagar, Aliganj, and Indira Nagar areas.",
      "Areas outside city limits may attract additional charges.",
      "Toll charges are extra.",
      "Share coupon LKOFLAT on WhatsApp to claim.",
    ],
    tags: ["lucknow", "airport"],
    validFrom: "2025-01-01",
    validUntil: "",
    featured: false,
    emoji: "✈️",
  },

  {
    id: "tempo-group",
    title: "Tempo Traveller Group Deal",
    tagline: "12-seater Tempo — split the cost, save big",
    description:
      "Book the 12-seater Tempo Traveller for your group pilgrimage and get ₹500 off. Ideal for Varanasi to Gaya, Ayodhya, or Allahabad circuits.",
    type: "flat",
    badge: "₹500 OFF",
    badgeColor: "saffron",
    couponCode: "TEMPO500",
    termsShort: "Valid on 12-seater Tempo bookings. Min 200 km.",
    termsFull: [
      "Valid for 12-seater Tempo Traveller bookings only.",
      "Minimum trip distance: 200 km.",
      "Minimum 8 passengers.",
      "Valid for outstation trips from any city.",
      "Share coupon TEMPO500 on WhatsApp to claim.",
    ],
    tags: ["tempo", "group", "outstation", "varanasi", "ayodhya"],
    validFrom: "2025-01-01",
    validUntil: "",
    featured: false,
    limitedSlots: 3,
    minBookingValue: 4000,
    emoji: "🚌",
  },

  // ── SEASONAL OFFERS ──────────────────────────────────────────────────────────

  {
    id: "navratri2025",
    title: "Navratri Special Offer",
    tagline: "Celebrate Navratri with pilgrimage savings",
    description:
      "Book any Varanasi or Vindhyachal trip during Navratri and get 12% off. Includes Vindhyavasini Devi darshan cab service.",
    type: "percentage",
    badge: "12% OFF",
    badgeColor: "red",
    couponCode: "NAVRATRI25",
    termsShort: "Valid Oct 2–12, 2025. Varanasi & Vindhyachal trips only.",
    termsFull: [
      "Valid for travel dates October 2–12, 2025 (Shardiya Navratri).",
      "Valid for Varanasi, Vindhyachal, and Ayodhya bookings.",
      "Maximum discount: ₹600.",
      "Cannot be combined with other offers.",
      "Share coupon NAVRATRI25 on WhatsApp to claim.",
    ],
    tags: ["seasonal", "varanasi", "vindhyachal", "ayodhya"],
    validFrom: "2025-10-02",
    validUntil: "2025-10-12",
    featured: true,
    emoji: "🪔",
  },

  {
    id: "diwali2025",
    title: "Diwali Festive Offer",
    tagline: "Diwali season — travel more, pay less",
    description:
      "Get ₹250 off on all outstation bookings during Diwali week. Valid October 18–24, 2025.",
    type: "flat",
    badge: "₹250 OFF",
    badgeColor: "gold",
    couponCode: "DIWALI250",
    termsShort: "Valid Oct 18–24, 2025. All outstation routes.",
    termsFull: [
      "Valid for travel dates October 18–24, 2025.",
      "Valid on all outstation routes from all cities.",
      "Minimum booking value: ₹1,000.",
      "Share coupon DIWALI250 on WhatsApp to claim.",
    ],
    tags: ["seasonal", "outstation", "all"],
    validFrom: "2025-10-18",
    validUntil: "2025-10-24",
    featured: true,
    emoji: "✨",
  },

  {
    id: "kartikpurnima2025",
    title: "Kartik Purnima Dev Deepawali",
    tagline: "Witness Dev Deepawali in Varanasi — special cab offer",
    description:
      "Travel to Varanasi during Dev Deepawali and get a flat ₹300 off on any cab booking. The most magical night on the Ghats.",
    type: "flat",
    badge: "₹300 OFF",
    badgeColor: "saffron",
    couponCode: "DEVDEEP300",
    termsShort: "Valid Nov 5, 2025 only. Varanasi bookings.",
    termsFull: [
      "Valid for Varanasi taxi bookings on November 5, 2025 only.",
      "Minimum booking value: ₹700.",
      "Limited slots — book early.",
      "Share coupon DEVDEEP300 on WhatsApp to claim.",
    ],
    tags: ["seasonal", "varanasi"],
    validFrom: "2025-11-01",
    validUntil: "2025-11-05",
    featured: false,
    limitedSlots: 8,
    emoji: "🪔",
  },

  {
    id: "winter2025",
    title: "Winter Pilgrimage Deal",
    tagline: "Peak pilgrimage season — guaranteed best rates",
    description:
      "December–February is peak pilgrimage season. Book now and lock in current rates. No price hike guarantee for advance bookings.",
    type: "flat",
    badge: "LOCKED RATE",
    badgeColor: "navy",
    couponCode: "WINTER2025",
    termsShort: "Advance booking Dec–Feb. Rate locked at booking.",
    termsFull: [
      "Book any trip for December 2025 – February 2026 travel.",
      "Fare locked at current rates — no increase.",
      "Cancellation free up to 24 hrs before travel.",
      "Valid for all vehicle types and routes.",
      "Share coupon WINTER2025 on WhatsApp to lock your rate.",
    ],
    tags: ["seasonal", "all", "outstation"],
    validFrom: "2025-11-01",
    validUntil: "2026-02-28",
    featured: false,
    emoji: "❄️",
  },

  // ── VEHICLE-SPECIFIC OFFERS ──────────────────────────────────────────────────

  {
    id: "innova-deal",
    title: "Innova Crysta Luxury Deal",
    tagline: "Upgrade to premium for less this month",
    description:
      "Book Innova Crysta for any outstation trip and get free driver stay charges included — saving ₹350.",
    type: "free",
    badge: "FREE DRIVER STAY",
    badgeColor: "gold",
    couponCode: "CRYSTAFREE",
    termsShort: "Outstation trips only. Innova Crysta bookings.",
    termsFull: [
      "Valid on Innova Crysta outstation bookings only.",
      "Driver stay charges (₹350) waived — saving ₹350.",
      "Valid for trips 150 km or more one-way.",
      "Share coupon CRYSTAFREE on WhatsApp to claim.",
    ],
    tags: ["innova", "vehicle", "outstation"],
    validFrom: "2025-01-01",
    validUntil: "",
    featured: false,
    emoji: "🚗",
  },
];

// ─── Helper: check if an offer is currently active ────────────────────────────
export function isOfferActive(offer: Offer): boolean {
  const now = new Date();
  const from = new Date(offer.validFrom);
  if (now < from) return false;
  if (offer.validUntil) {
    const until = new Date(offer.validUntil);
    until.setHours(23, 59, 59, 999);
    if (now > until) return false;
  }
  return true;
}

// ─── Helper: get active offers filtered by tags ───────────────────────────────
// Usage: getOffersForPage(['varanasi', 'outstation'])
export function getOffersForPage(tags: OfferTag[]): Offer[] {
  return allOffers
    .filter(isOfferActive)
    .filter(
      (offer) =>
        offer.tags.includes("all") ||
        tags.some((tag) => offer.tags.includes(tag)),
    )
    .sort((a, b) => {
      // Featured first, then by limitedSlots urgency, then alphabetical
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      if (a.limitedSlots && !b.limitedSlots) return -1;
      if (!a.limitedSlots && b.limitedSlots) return 1;
      return 0;
    });
}

// ─── Helper: format days remaining ───────────────────────────────────────────
export function getDaysRemaining(validUntil: string): number | null {
  if (!validUntil) return null;
  const now = new Date();
  const until = new Date(validUntil);
  const diff = Math.ceil(
    (until.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
  );
  return diff > 0 ? diff : 0;
}
