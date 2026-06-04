// src/lib/urlParser.ts
// ★ THE BRAIN of the dynamic routing system
// Input:  slug array from [...slug] params
// Output: { template: string, data: object } | null

import { allRoutes } from '@/data/allRoutes';

// ── DATA IMPORTS ─────────────────────────────────────────────────────────
import * as varanasiRoutes from '@/data/varanasiRoutes';
//import * as ayodhyaRoutes from '@/data/ayodhyaRoutes';
//import * as allahabadRoutes from '@/data/allahabadRoutes';
//import * as lucknowRoutes from '@/data/lucknowRoutes';
//import * as gayaRoutes from '@/data/gayaRoutes';
//import * as vindhyachalRoutes from '@/data/vindhyachalRoutes';
import * as vehicles from '@/data/vehicles';
import * as cityServices from '@/data/cityServices';
import * as airportTaxi from '@/data/airportTaxi';
import * as tourPackages from '@/data/tourPackages';
import * as tempoTraveller from '@/data/tempoTraveller';
import * as carRental from '@/data/carRental';
import * as placesToVisit from '@/data/placesToVisit';
import * as accommodation from '@/data/accommodation';
import * as staticPages from '@/data/staticPages';
import * as cityLanding from '@/data/cityLanding';

// ── DATA SOURCES MAP ──────────────────────────────────────────────────────
// Maps namespace string (from dataKey) → imported module
const DATA_SOURCES: Record<string, Record<string, unknown>> = {
  varanasiRoutes,
  //ayodhyaRoutes,
  //allahabadRoutes,
  //lucknowRoutes,
  //gayaRoutes,
  //vindhyachalRoutes,
  vehicles,
  cityServices,
  airportTaxi,
  tourPackages,
  tempoTraveller,
  carRental,
  placesToVisit,
  accommodation,
  staticPages,
  cityLanding,
};

// ── PARSE URL ─────────────────────────────────────────────────────────────
export function parseUrl(
  slugArray: string[]
): { template: string; data: unknown } | null {
  const slug = slugArray.join('/');

  // Look up slug in master route list
  const route = allRoutes.find((r) => r.slug === slug);
  if (!route) return null;

  // Resolve dot-path: 'varanasiRoutes.varanasiToAyodhya' → actual data object
  const [namespace, key] = route.dataKey.split('.');
  const namespace_data = DATA_SOURCES[namespace];
  if (!namespace_data) {
    console.warn(`[urlParser] Unknown namespace: "${namespace}" for slug: "${slug}"`);
    return null;
  }

  const data = namespace_data[key];
  if (!data) {
    console.warn(`[urlParser] Missing key: "${key}" in namespace: "${namespace}" for slug: "${slug}"`);
    return null;
  }

  return { template: route.template, data };
}

// ── GET ROUTE SEO ─────────────────────────────────────────────────────────
export function getRouteSeo(slug: string) {
  const route = allRoutes.find((r) => r.slug === slug);
  return route?.seo ?? null;
}