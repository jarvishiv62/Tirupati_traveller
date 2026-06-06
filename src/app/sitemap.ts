// src/app/sitemap.ts
// ───────────────────
// Auto-generates /sitemap.xml
// Reads allRoutes.ts as single source of truth — no manual URL lists.
// UPDATE: add new page entries to allRoutes.ts, not here.

import type { MetadataRoute } from "next";
import { allRoutes } from "@/data/allRoutes";

const BASE = "https://tirupatitravel.in";
const NOW = new Date();

// ─── Priority map by template ─────────────────────────────────────────────────
const TEMPLATE_PRIORITY: Record<string, number> = {
  CityLandingTemplate: 0.9,
  PlacesToVisitTemplate: 0.9,
  OutstationRouteTemplate: 0.7,
  VehicleTemplate: 0.8,
  CabServiceTemplate: 0.8,
  TourPackageTemplate: 0.8,
  TempoTravellerTemplate: 0.7,
  CarRentalTemplate: 0.7,
  AccommodationTemplate: 0.6,
  AirportTaxiTemplate: 0.7,
  LocalServiceTemplate: 0.7,
  StaticPageTemplate: 0.5,
};

const TEMPLATE_FREQUENCY: Record<
  string,
  MetadataRoute.Sitemap[0]["changeFrequency"]
> = {
  CityLandingTemplate: "monthly",
  OutstationRouteTemplate: "monthly",
  VehicleTemplate: "monthly",
  CabServiceTemplate: "monthly",
  TourPackageTemplate: "monthly",
  StaticPageTemplate: "yearly",
};

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static pages (not in allRoutes.ts — handled by dedicated page.tsx files)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/`,
      lastModified: NOW,
      priority: 1.0,
      changeFrequency: "weekly",
    },
    {
      url: `${BASE}/about-us`,
      lastModified: NOW,
      priority: 0.6,
      changeFrequency: "yearly",
    },
    {
      url: `${BASE}/contact-us`,
      lastModified: NOW,
      priority: 0.6,
      changeFrequency: "yearly",
    },
    {
      url: `${BASE}/review`,
      lastModified: NOW,
      priority: 0.6,
      changeFrequency: "weekly",
    },
    {
      url: `${BASE}/terms-and-conditions`,
      lastModified: NOW,
      priority: 0.3,
      changeFrequency: "yearly",
    },
    {
      url: `${BASE}/privacy-policy`,
      lastModified: NOW,
      priority: 0.3,
      changeFrequency: "yearly",
    },
  ];

  // ── Dynamic pages from allRoutes.ts (single source of truth)
  const dynamicPages: MetadataRoute.Sitemap = allRoutes.map((route) => ({
    url: `${BASE}/${route.slug}`,
    lastModified: NOW,
    priority: TEMPLATE_PRIORITY[route.template] ?? 0.5,
    changeFrequency: TEMPLATE_FREQUENCY[route.template] ?? "monthly",
  }));

  return [...staticPages, ...dynamicPages];
}
