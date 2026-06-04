// src/app/[...slug]/page.tsx
// ★ CORE: Single catch-all route — handles ALL 222+ dynamic pages
// Reads slug → urlParser → picks template → renders it

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { parseUrl } from '@/lib/urlParser';
import { allRoutes } from '@/data/allRoutes';
import LayoutShell from '@/components/shared/LayoutShell';

// ── TEMPLATE IMPORTS ──────────────────────────────────────────────────────
//import OutstationRouteTemplate from '@/components/templates/OutstationRouteTemplate';
//import AirportTaxiTemplate from '@/components/templates/AirportTaxiTemplate';
//import VehicleTemplate from '@/components/templates/VehicleTemplate';
//import CabServiceTemplate from '@/components/templates/CabServiceTemplate';
//import LocalServiceTemplate from '@/components/templates/LocalServiceTemplate';
import CityLandingTemplate from '@/components/templates/CityLandingTemplate';
//import TourPackageTemplate from '@/components/templates/TourPackageTemplate';
//import TempoTravellerTemplate from '@/components/templates/TempoTravellerTemplate';
//import CarRentalTemplate from '@/components/templates/CarRentalTemplate';
import PlacesToVisitTemplate from '@/components/templates/PlacesToVisitTemplate';
//import AccommodationTemplate from '@/components/templates/AccommodationTemplate';
//import StaticPageTemplate from '@/components/templates/StaticPageTemplate';

// ── TEMPLATE MAP ──────────────────────────────────────────────────────────
// Maps template name string → actual component
// Must stay in sync with TemplateName union in allRoutes.ts
const TEMPLATE_MAP: Record<string, React.ComponentType<{ data: any }>> = {
  //OutstationRouteTemplate,
  //AirportTaxiTemplate,
  //VehicleTemplate,
  //CabServiceTemplate,
  //LocalServiceTemplate,
  CityLandingTemplate,
  //TourPackageTemplate,
  //TempoTravellerTemplate,
  //CarRentalTemplate,
  PlacesToVisitTemplate,
  //AccommodationTemplate,
  //StaticPageTemplate,
};

// ── SSG: Pre-build all 222+ pages at build time ───────────────────────────
export async function generateStaticParams() {
  return allRoutes.map((route) => ({
    slug: route.slug.split('/'),
  }));
}

// ── PER-PAGE METADATA from allRoutes.ts seo field ─────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.join('/');
  const route = allRoutes.find((r) => r.slug === slug);

  if (!route) {
    return {
      title: 'Page Not Found | Tirupati Travel',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: route.seo.title,
    description: route.seo.description,
    robots: { index: true, follow: true },
    alternates: { canonical: route.seo.canonical },
    openGraph: {
      title: route.seo.title,
      description: route.seo.description,
      url: route.seo.canonical,
      type: 'website',
      locale: 'en_IN',
      siteName: 'Tirupati Travel',
    },
    twitter: {
      card: 'summary_large_image',
      title: route.seo.title,
      description: route.seo.description,
    },
  };
}

// ── PAGE COMPONENT ────────────────────────────────────────────────────────
export default async function SlugPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const resolved = parseUrl(resolvedParams.slug);

  if (!resolved) return notFound();

  const TemplateComponent = TEMPLATE_MAP[resolved.template];

  if (!TemplateComponent) {
    console.error(`[SlugPage] No template found for: "${resolved.template}"`);
    return notFound();
  }

  return (
    <LayoutShell>
      <TemplateComponent data={resolved.data} />
    </LayoutShell>
  );
}