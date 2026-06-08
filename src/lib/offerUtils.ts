// src/lib/offerUtils.ts
// ──────────────────────
// Offer utility functions — WhatsApp message builder, tag resolver,
// coupon code logic.

import type { Offer, OfferTag } from "@/data/offers";

const PHONE = "918726124680";

// ─── Build WhatsApp message for an offer claim ────────────────────────────────
// Produces a pre-filled WA message the customer sends to claim the offer.
export function buildOfferWALink(
  offer: Offer,
  context?: {
    origin?: string;
    destination?: string;
    vehicle?: string;
    city?: string;
  },
): string {
  const lines: string[] = [
    `Hi Tirupati Travel 🙏`,
    ``,
    `I want to claim the *${offer.title}* offer.`,
    `Coupon Code: *${offer.couponCode}*`,
  ];

  if (context?.origin && context?.destination) {
    lines.push(`Route: ${context.origin} → ${context.destination}`);
  }
  if (context?.city) {
    lines.push(`City: ${context.city}`);
  }
  if (context?.vehicle) {
    lines.push(`Vehicle: ${context.vehicle}`);
  }

  lines.push(``);
  lines.push(`Please confirm availability and apply the discount.`);
  lines.push(`Terms accepted: ${offer.termsShort}`);

  const message = lines.join("\n");
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

// ─── Page-type → OfferTag mapping ────────────────────────────────────────────
// Given a page's context, return the right offer tags to filter by.
export function getTagsForPage(pageType: string, city?: string): OfferTag[] {
  const base: OfferTag[] = ["all"];

  // Add city tag
  if (city) {
    const cityTag = city.toLowerCase() as OfferTag;
    base.push(cityTag);
  }

  // Add page-type tags
  switch (pageType) {
    case "OutstationRouteTemplate":
      base.push("outstation");
      break;
    case "VehicleTemplate":
      base.push("vehicle");
      break;
    case "AirportTaxiTemplate":
      base.push("airport");
      break;
    case "TourPackageTemplate":
      base.push("package");
      break;
    case "TempoTravellerTemplate":
      base.push("vehicle", "tempo", "group");
      break;
    case "CityLandingTemplate":
    case "PlacesToVisitTemplate":
      // city already added above
      break;
    case "CabServiceTemplate":
      base.push("outstation");
      break;
    default:
      break;
  }

  return [...new Set(base)] as OfferTag[];
}

// ─── Generate urgency label ───────────────────────────────────────────────────
export function getUrgencyLabel(offer: Offer): string | null {
  if (offer.limitedSlots !== undefined && offer.limitedSlots <= 5) {
    return `Only ${offer.limitedSlots} slots left!`;
  }
  if (offer.validUntil) {
    const days = Math.ceil(
      (new Date(offer.validUntil).getTime() - Date.now()) / 86_400_000,
    );
    if (days <= 3) return `Expires in ${days} day${days !== 1 ? "s" : ""}!`;
    if (days <= 7) return `Valid for ${days} more days`;
  }
  return null;
}

// ─── Badge color → Tailwind class map ────────────────────────────────────────
export const BADGE_CLASSES: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  saffron: {
    bg: "bg-primary",
    text: "text-white",
    border: "border-primary-dark",
  },
  gold: {
    bg: "bg-accent",
    text: "text-secondary",
    border: "border-accent-dark",
  },
  green: { bg: "bg-success", text: "text-white", border: "border-green-700" },
  navy: {
    bg: "bg-secondary",
    text: "text-white",
    border: "border-secondary-light",
  },
  red: { bg: "bg-red-600", text: "text-white", border: "border-red-700" },
};

// ─── Card gradient by badge color ────────────────────────────────────────────
export const CARD_GRADIENTS: Record<string, string> = {
  saffron: "from-[#FF6B00] to-[#E65100]",
  gold: "from-[#FFD600] to-[#F9A825]",
  green: "from-[#2E7D32] to-[#1B5E20]",
  navy: "from-[#1A237E] to-[#0D1B5E]",
  red: "from-[#D32F2F] to-[#B71C1C]",
};
