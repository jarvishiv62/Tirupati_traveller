// src/lib/vehicleAdapter.ts
// Shared adapter utilities for bridging VehicleData (vehicles.ts)
// → VehicleCardData (VehicleCard.tsx).
//
// Previously these functions were defined inline in CityLandingTemplate.tsx.
// Extracting here lets CabServiceTemplate and VehicleTemplate share the same
// conversion logic without duplication.
//
// Imported by:
//   src/components/templates/CityLandingTemplate.tsx
//   src/components/templates/CabServiceTemplate.tsx
//   src/components/templates/VehicleTemplate.tsx

import type { VehicleData } from '@/data/vehicles';
import type { VehicleCardData } from '@/components/shared/VehicleCard';

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

/**
 * Operational defaults not stored in VehicleData.
 * Used in toCardData() and in VehicleTemplate SpecsCard.
 */
export const VEHICLE_DEFAULTS = {
  perDayKm:     250,  // km included per day on standard packages
  driverCharge: 200,  // ₹/day driver allowance (standard Varanasi market rate)
} as const;

/**
 * Maps generic vehicle IDs (used in CityLandingData.vehicles[])
 * to slug keywords for matching against city-specific VehicleData entries.
 *
 * e.g. 'innova-crysta' → matches slugs containing 'innova'
 *      'swift-dzire'   → matches slugs containing 'dzire'
 */
export const VEHICLE_ID_KEYWORDS: Record<string, string> = {
  'innova-crysta':   'innova',
  'ertiga':          'ertiga',
  'swift-dzire':     'dzire',
  'sedan':           'sedan',
  'etios':           'etios',
  'tempo-traveller': 'tempo',
};

// ─── ADAPTER ─────────────────────────────────────────────────────────────────

/**
 * Converts VehicleData (from vehicles.ts) → VehicleCardData (for <VehicleCard>).
 *
 * VehicleData stores: vehicleName, specs.seats, specs.luggage (string "3 bags"),
 *                     pricePerKm, images[0], features[].
 * VehicleCardData needs: id, name, category, tariff, luggage (number),
 *                        perDayKm, driverCharge, badge, etc.
 */
export function toCardData(v: VehicleData): VehicleCardData {
  const luggageBags   = parseInt(v.specs.luggage, 10) || 2;
  const isMostPopular = v.features.some(f =>
    f.toLowerCase().includes('most popular'),
  );

  return {
    id:           v.slug,
    name:         v.vehicleName,
    image:        v.images[0] ?? '/swift-dzire.png',
    category:     v.specs.seats >= 7 ? 'suv' : 'sedan',
    tariff:       v.pricePerKm,
    perDayKm:     VEHICLE_DEFAULTS.perDayKm,
    driverCharge: VEHICLE_DEFAULTS.driverCharge,
    seats:        v.specs.seats,
    luggage:      luggageBags,
    ac:           v.specs.ac,
    features:     v.features,
    badge: isMostPopular
      ? 'Most Popular'
      : v.specs.seats >= 7
      ? 'Best for Groups'
      : null,
  };
}

// ─── ORDERING ─────────────────────────────────────────────────────────────────

/**
 * Resolves and orders a VehicleData[] according to a vehicleIds preference array.
 *
 * @param vehicleIds   Generic IDs like ['innova-crysta', 'ertiga', 'swift-dzire']
 *                     from CityLandingData.vehicles.
 * @param cityVehicles Result of getVehiclesByCity(city).
 * @param maxCount     Maximum vehicles to return (default 4).
 *
 * Matching: each generic ID is mapped to a keyword via VEHICLE_ID_KEYWORDS,
 * then the first VehicleData whose slug/vehicleName contains the keyword is used.
 * Falls back to the original cityVehicles order if no IDs match.
 */
export function resolveOrderedVehicles(
  vehicleIds: string[],
  cityVehicles: VehicleData[],
  maxCount = 4,
): VehicleData[] {
  const seen    = new Set<string>();
  const ordered: VehicleData[] = [];

  for (const id of vehicleIds) {
    const kw  = VEHICLE_ID_KEYWORDS[id] ?? id;
    const hit = cityVehicles.find(v =>
      v.slug.toLowerCase().includes(kw) ||
      v.vehicleName.toLowerCase().includes(kw),
    );
    if (hit && !seen.has(hit.slug)) {
      seen.add(hit.slug);
      ordered.push(hit);
    }
  }

  // Fallback: if no vehicleIds matched, return city vehicles in their natural order
  const result = ordered.length ? ordered : cityVehicles;
  return result.slice(0, maxCount);
}