// src/app/[...slug]/page.tsx
// ★ CORE: Single catch-all route — handles ALL dynamic pages
// Reads slug → urlParser → picks template → renders it
// Next.js calls generateStaticParams() at build time — pre-builds all pages.
// Adding a new page = add an entry to src/data/allRoutes.ts + data file.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { parseUrl } from "@/lib/urlParser";
import { allRoutes } from "@/data/allRoutes";
import LayoutShell from "@/components/shared/LayoutShell";

// ── TEMPLATE IMPORTS ──────────────────────────────────────────────────────
// All templates are imported and mapped to their string identifiers
import OutstationRouteTemplate from "@/components/templates/OutstationRouteTemplate";
import AirportTaxiTemplate from "@/components/templates/AirportTaxiTemplate";
import VehicleTemplate from "@/components/templates/VehicleTemplate";
import CabServiceTemplate from "@/components/templates/CabServiceTemplate";
import LocalServiceTemplate from "@/components/templates/LocalServiceTemplate";
import CityLandingTemplate from "@/components/templates/CityLandingTemplate";
import TourPackageTemplate from "@/components/templates/TourPackageTemplate";
import TempoTravellerTemplate from "@/components/templates/TempoTravellerTemplate";
import CarRentalTemplate from "@/components/templates/CarRentalTemplate";
import PlacesToVisitTemplate from "@/components/templates/PlacesToVisitTemplate";
import AccommodationTemplate from "@/components/templates/AccommodationTemplate";
import StaticPageTemplate from "@/components/templates/StaticPageTemplate";

// ── TEMPLATE MAP ──────────────────────────────────────────────────────────
// Maps template name string → actual component
// Must stay in sync with TemplateName union in allRoutes.ts
const TEMPLATE_MAP: Record<
  string,
  React.ComponentType<{ data: any; currentSlug?: string }>
> = {
  OutstationRouteTemplate,
  AirportTaxiTemplate,
  VehicleTemplate,
  CabServiceTemplate,
  LocalServiceTemplate,
  CityLandingTemplate,
  TourPackageTemplate,
  TempoTravellerTemplate,
  CarRentalTemplate,
  PlacesToVisitTemplate,
  AccommodationTemplate,
  StaticPageTemplate,
};

// ── SSG: Pre-build all pages at build time (force-static) ─────────────────
export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return allRoutes.map((route) => ({
    slug: route.slug.split("/"),
  }));
}

// ── PER-PAGE METADATA from allRoutes.ts seo field ─────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.join("/");
  const route = allRoutes.find((r) => r.slug === slug);

  if (!route) {
    return {
      title: "Page Not Found | Tirupati Travel",
      description: "The requested page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const { title, description, canonical } = route.seo;

  return {
    title,
    description,
    alternates: {
      canonical: canonical || `https://tirupatitravel.com/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      title,
      description,
      url: canonical || `https://tirupatitravel.com/${slug}`,
      siteName: "Tirupati Travel",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "/assets/images/logo.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/images/logo.jpg"],
      site: "@tirupatitravel0",
    },
  };
}

// ── PAGE COMPONENT ────────────────────────────────────────────────────────
export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const resolved = parseUrl(slug);

  // 404 for unknown slugs
  if (!resolved) {
    return notFound();
  }

  const { template, data, slug: currentSlug } = resolved;
  const TemplateComponent = TEMPLATE_MAP[template];

  // Template not found or not yet implemented
  if (!TemplateComponent) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        `[SlugPage] Template "${template}" not yet implemented for slug: ${currentSlug}`,
      );
    }
    return notFound();
  }

  // Render the page with LayoutShell wrapper
  return (
    <LayoutShell>
      <TemplateComponent data={data} currentSlug={currentSlug} />
    </LayoutShell>
  );
}

// ─── FORCE STATIC GENERATION ───────────────────────────────────────────────
// Ensure Next.js never falls back to SSR or ISR for any route in allRoutes.ts.
// All pages are pre-built at build time as static HTML.
export const dynamic = "force-static";
export const revalidate = false;
