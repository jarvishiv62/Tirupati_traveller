# Tirupati Travel — Next.js Project Structure
**tirupatitravel.in** | Next.js 16+ App Router | Tailwind CSS | ChikuCabs Architecture Pattern
**Template-Driven | All Routes Centralized in `src/data/` | Catch-All Dynamic Routing**

> **Gap Resolution Note:** This document is the single source of truth. All gaps identified between the original Project Structure file and the Master Prompt have been resolved. Changes include: added `ui/` folder, `home/` folder, all missing `shared/` primitives, `seo.ts`, `utils.ts`, `prisma/` folder, corrected `public/svg/` subfolder structure, added missing API routes, `not-found.tsx`, `review/page.tsx`, and aligned page count to 237.

---

## ⚠️ Architecture Philosophy

This project follows the **template pattern**:

1. **All route data lives in `src/data/`** — one file per city/service type, plus `allRoutes.ts` as the master index.
2. **Templates live in `src/components/templates/`** — each template is a full-page layout component (hero + sections + FAQ + CTA). A template is NOT a tiny UI component — it renders an entire page.
3. **One dynamic catch-all route `src/app/[...slug]/page.tsx`** handles 235+ pages by reading the slug → looking it up in `allRoutes.ts` → picking the right template → passing data as props.
4. **`src/lib/urlParser.ts`** is the brain — it maps any incoming URL slug to `{ template, data }`.
5. **Shared components** (`src/components/shared/`) are layout-level pieces reused across ALL templates: Navbar, Footer, BookingModal, WhatsAppFloat, etc.

---

## Complete Project Folder Structure

```
tirupatitravel-nextjs/
│
├── prisma/                                 ← Prisma ORM (gap fix: was entirely absent)
│   └── schema.prisma                       ← Models: Booking, Review, Enquiry, Blog
│
│
├── public/                                 ← Static assets
│   ├── Images/
│   └── svg/                               ← ★ Canonical name is svg/ (not svgs/)
│       ├── ghats/
│       │   └── ghat-skyline.svg           ← Hero + Footer bookend only
│       ├── icons/                         ← gap fix: icons subfolder
│       │   ├── bell.svg
│       │   ├── lotus.svg
│       │   ├── kalash.svg
│       │   ├── diya.svg
│       │   ├── route.svg
│       │   └── driver.svg
│       ├── patterns/                      ← gap fix: patterns subfolder
│       │   └── sandstone-pattern.svg
│       ├── routes/                        ← gap fix: route SVGs subfolder
│       │   ├── varanasi-gaya.svg
│       │   ├── varanasi-ayodhya.svg
│       │   ├── varanasi-allahabad.svg
│       │   ├── varanasi-lucknow.svg
│       │   ├── varanasi-delhi.svg
│       │   ├── varanasi-patna.svg
│       │   ├── varanasi-gorakhpur.svg
│       │   ├── varanasi-agra.svg
│       │   ├── varanasi-mathura.svg
│       │   └── varanasi-kanpur.svg
│       ├── corner-mandala.svg
│       ├── lotus-divider.svg
│       ├── ganga-wave.svg
│       └── mandala-divider.svg
│
│
├── src/
│   │
│   ├── app/                                ← Next.js App Router
│   │   │
│   │   ├── globals.css                     ← Global styles + Tailwind base
│   │   ├── layout.tsx                      ← Root layout: GTM + fonts + metadata base
│   │   ├── page.tsx                        ← Homepage (/)
│   │   ├── not-found.tsx                   ← Branded 404 page (gap fix: was missing)
│   │   ├── sitemap.ts                      ← Auto-generates all URLs from allRoutes.ts
│   │   ├── robots.ts                       ← allow '/', disallow '/api/', '/_next/'
│   │   │
│   │   ├── [...slug]/                      ← ★ CORE: Single catch-all route
│   │   │   └── page.tsx                    ←   Reads slug → urlParser → picks template
│   │   │                                       Handles ALL 235 dynamic pages
│   │   │                                       generateStaticParams() from allRoutes.ts
│   │   │                                       generateMetadata() per route
│   │   │
│   │   ├── review/                         ← gap fix: ISR review page was missing
│   │   │   └── page.tsx                    ←   ISR revalidate: 3600
│   │   │                                       AggregateRating JSON-LD schema
│   │   │
│   │   ├── admin/                          ← Admin panel (protected)
│   │   │   ├── layout.tsx                  ←   Auth guard layout
│   │   │   ├── page.tsx                    ←   Admin dashboard
│   │   │   └── blogs/
│   │   │       ├── page.tsx                ←   Blog list + manage
│   │   │       └── create/
│   │   │           └── page.tsx            ←   Blog editor (rich text)
│   │   │
│   │   ├── admin-login/
│   │   │   └── page.tsx                    ← Admin login page
│   │   │
│   │   ├── blogs/                          ← Public blog section
│   │   │   ├── page.tsx                    ←   Blog listing page
│   │   │   └── [slug]/
│   │   │       └── page.tsx                ←   Individual blog post
│   │   │
│   │   └── api/                            ← API route handlers
│   │       ├── blogs/
│   │       │   ├── route.ts                ←   GET all / POST new blog
│   │       │   └── [id]/
│   │       │       └── route.ts            ←   GET / PUT / DELETE single blog
│   │       ├── image/
│   │       │   └── [id]/
│   │       │       └── route.ts            ←   Serve blog images from DB/storage
│   │       ├── upload/
│   │       │   └── route.ts                ←   Image upload handler
│   │       ├── contact/                    ← gap fix: was missing
│   │       │   └── route.ts                ←   POST → Nodemailer SMTP
│   │       ├── booking/                    ← gap fix: was missing
│   │       │   └── route.ts                ←   POST → WhatsApp deep link + confirm email
│   │       └── reviews/                    ← gap fix: was missing
│   │           └── route.ts                ←   GET reviews for ISR review page
│   │
│   │
│   ├── components/
│   │   │
│   │   ├── shared/                         ← ★ Layout-level reusable pieces
│   │   │   │                                   Used inside EVERY template
│   │   │   ├── Navbar.tsx                  ←   Top nav: logo + city links + call CTA ('use client')
│   │   │   ├── Footer.tsx                  ←   Links + address + social + copyright
│   │   │   ├── BookingModal.tsx            ←   Floating booking form modal ('use client')
│   │   │   ├── WhatsAppFloat.tsx           ←   Fixed WhatsApp button
│   │   │   ├── EEATSection.tsx             ←   Trust signals: years, trips, ratings
│   │   │   ├── RouteMapSection.tsx         ←   Embedded Google Map for a route
│   │   │   ├── InternalLinks.tsx           ←   SEO cross-links grid (reads internalLinks.ts)
│   │   │   ├── LayoutShell.tsx             ←   Wraps Navbar + children + Footer + modals
│   │   │   ├── SacredDivider.tsx           ←   gap fix: built Chunk 1, missing from Doc 1
│   │   │   │                                   variant: lotus | wave | mandala | gold-line
│   │   │   ├── TempleArchCard.tsx          ←   gap fix: built Chunk 1, missing from Doc 1
│   │   │   │                                   arch-top card for cities, vehicles, places
│   │   │   ├── CTAButtons.tsx              ←   gap fix: Chunk 2 primitive
│   │   │   │                                   Call + WhatsApp pair (pre-filled message prop)
│   │   │   ├── SectionHeader.tsx           ←   gap fix: Chunk 2 primitive
│   │   │   │                                   title + subtitle + optional divider-gold
│   │   │   ├── Breadcrumb.tsx              ←   gap fix: Chunk 2 primitive
│   │   │   │                                   auto-generated from pathname
│   │   │   ├── VehicleCard.tsx             ←   gap fix: Chunk 3 addition
│   │   │   │                                   vehicle pricing card (arch-top style)
│   │   │   ├── PlaceCard.tsx               ←   gap fix: Chunk 3 addition
│   │   │   │                                   place image + name + distance
│   │   │   ├── PricingTable.tsx            ←   gap fix: Chunk 5 addition
│   │   │   │                                   card-warm table per vehicle type
│   │   │   └── BookingEnquiryForm.tsx      ←   gap fix: Chunk 9 addition ('use client')
│   │   │                                       Contact/booking enquiry form
│   │   │
│   │   ├── ui/                             ← ★ gap fix: entire folder was absent from Doc 1
│   │   │   ├── Button.tsx                  ←   variant: primary|outline|gold|whatsapp|secondary|ghost
│   │   │   ├── Badge.tsx                   ←   badge-primary|accent|gold|success
│   │   │   ├── Accordion.tsx               ←   'use client' | chevron + max-height animation
│   │   │   ├── ImageCard.tsx               ←   next/image + gradient-card overlay
│   │   │   ├── Skeleton.tsx                ←   loading state for ISR pages
│   │   │   └── StarRating.tsx              ←   star display for review page
│   │   │
│   │   ├── home/                           ← ★ gap fix: entire folder was absent from Doc 1
│   │   │   ├── HeroSection.tsx             ←   Full-viewport hero, rotating H1, CTAs ('use client')
│   │   │   ├── DestinationCards.tsx        ←   5-city TempleArchCard grid
│   │   │   ├── TourPackageCards.tsx        ←   4 package cards from tourPackages data
│   │   │   ├── CTABanner.tsx               ←   Full-width gradient-sacred CTA
│   │   │   ├── ThemeExplorer.tsx           ←   6-theme SVG icon tiles
│   │   │   ├── AboutSection.tsx            ←   Image + stats + CTA
│   │   │   ├── WhyChooseUs.tsx             ←   3-card trust section
│   │   │   └── FAQSection.tsx              ←   Accordion FAQ + FAQPage JSON-LD ('use client')
│   │   │
│   │   └── templates/                      ← ★ FULL-PAGE template components
│   │       │                                   Each renders a complete page layout.
│   │       │                                   Receives a typed `data` prop from urlParser.
│   │       │
│   │       ├── OutstationRouteTemplate.tsx ←   Varanasi→Ayodhya, Varanasi→Lucknow, etc.
│   │       │                                   Props: origin, destination, distance, duration,
│   │       │                                          fare{sedan,innova,ertiga}, highlights[],
│   │       │                                          faqs[], seo{title,desc,canonical}
│   │       │
│   │       ├── AirportTaxiTemplate.tsx     ←   Airport pickup/drop pages
│   │       │                                   Props: airport, city, terminals[], fare{},
│   │       │                                          inclusions[], faqs[], seo{}
│   │       │
│   │       ├── VehicleTemplate.tsx         ←   Innova, Ertiga, Swift Dzire, Tempo etc.
│   │       │                                   Props: vehicleName, specs{seats,ac,luggage},
│   │       │                                          pricePerKm, images[], faqs[], seo{}
│   │       │
│   │       ├── CabServiceTemplate.tsx      ←   One-way, round-trip, full-day, half-day,
│   │       │                                   outstation, local, corporate cab pages
│   │       │                                   Props: serviceType, city, pricing{},
│   │       │                                          howItWorks[], faqs[], seo{}
│   │       │
│   │       ├── LocalServiceTemplate.tsx    ←   Local sightseeing / city cab pages
│   │       │                                   Props: city, hourlyPackages[], places[],
│   │       │                                          faqs[], seo{}
│   │       │
│   │       ├── CityLandingTemplate.tsx     ←   Main city landing pages
│   │       │                                   (varanasi/, ayodhya/, allahabad/ etc.)
│   │       │                                   Props: city, heroText, services[], vehicles[],
│   │       │                                          places[], outstationLinks[], seo{}
│   │       │
│   │       ├── TourPackageTemplate.tsx     ←   Varanasi tour, Ayodhya darshan, etc.
│   │       │                                   Props: packageName, duration, itinerary[],
│   │       │                                          inclusions[], pricing{}, faqs[], seo{}
│   │       │
│   │       ├── TempoTravellerTemplate.tsx  ←   Tempo traveller service/route pages
│   │       │                                   Props: city, capacity, pricePerKm,
│   │       │                                          popularRoutes[], faqs[], seo{}
│   │       │
│   │       ├── CarRentalTemplate.tsx       ←   Monthly/weekly car rental pages
│   │       │                                   Props: city, rentalType, packages[],
│   │       │                                          vehicles[], faqs[], seo{}
│   │       │
│   │       ├── PlacesToVisitTemplate.tsx   ←   Places to visit in city pages
│   │       │                                   Props: city, places[{name,desc,image,distance}],
│   │       │                                          nearbyRoutes[], seo{}
│   │       │
│   │       ├── AccommodationTemplate.tsx   ←   Hotel, homestay, dharamshala, dormitory
│   │       │                                   Props: city, accType, listings[], faqs[], seo{}
│   │       │
│   │       └── StaticPageTemplate.tsx      ←   About, Contact, Terms, Privacy pages
│   │                                           Props: pageTitle, content (MDX/HTML), seo{}
│   │
│   │
│   ├── data/                               ← ★ ALL ROUTE & PAGE DATA LIVES HERE
│   │   │                                       This is the single source of truth.
│   │   │                                       allRoutes.ts is the master index.
│   │   │
│   │   ├── allRoutes.ts                    ← ★ MASTER INDEX of every page in the site
│   │   │                                       Maps slug → { template, dataKey, seo }
│   │   │                                       Used by: [...slug]/page.tsx, sitemap.ts
│   │   │                                       urlParser.ts reads this to resolve any URL
│   │   │
│   │   ├── varanasiRoutes.ts               ← All outstation routes FROM Varanasi (68 routes)
│   │   ├── ayodhyaRoutes.ts                ← All outstation routes FROM Ayodhya
│   │   ├── allahabadRoutes.ts              ← All outstation routes FROM Allahabad/Prayagraj
│   │   ├── lucknowRoutes.ts                ← All outstation routes FROM Lucknow
│   │   ├── gayaRoutes.ts                   ← All outstation routes FROM Gaya
│   │   ├── vindhyachalRoutes.ts            ← All outstation routes FROM Vindhyachal
│   │   ├── cityServices.ts                 ← All local/city cab service pages
│   │   ├── vehicles.ts                     ← All vehicle page data (all cities)
│   │   │                                       getVehiclesByCity(), getVehicleById()
│   │   ├── tourPackages.ts                 ← Tour package data
│   │   ├── airportTaxi.ts                  ← Airport taxi page data
│   │   ├── tempoTraveller.ts               ← Tempo traveller service data
│   │   ├── carRental.ts                    ← Car rental data
│   │   ├── placesToVisit.ts                ← Places to visit data (all cities)
│   │   ├── accommodation.ts                ← Hotel, homestay, dharamshala, dormitory data
│   │   └── cityCabRoutes.ts                ← Short intra-city cab route data
│   │
│   │
│   ├── lib/                                ← Utility/helper scripts
│   │   │
│   │   ├── urlParser.ts                    ← ★ BRAIN of the dynamic routing system
│   │   │                                       Input:  slug string
│   │   │                                       Output: { template: string, data: object }
│   │   │                                       DATA_SOURCES map — all data namespaces here
│   │   │
│   │   ├── internalLinks.ts                ← SEO internal linking rules
│   │   │                                       Maps each page type → related links to show
│   │   │
│   │   ├── seo.ts                          ← gap fix: was missing from Doc 1
│   │   │                                       buildMetadata()
│   │   │                                       buildCityMetadata()
│   │   │                                       buildOutstationMetadata()
│   │   │
│   │   ├── utils.ts                        ← gap fix: was missing from Doc 1
│   │   │                                       cn(), formatPrice(), buildWALink(),
│   │   │                                       slugToTitle(), formatPhone(), truncate(),
│   │   │                                       capitalize(), extractDestination()
│   │   │
│   │   ├── mongodb.ts                      ← MongoDB client singleton (for blogs)
│   │   └── firebase.ts                     ← Firebase client (image storage for blogs)
│   │
│   │
│   └── models/                             ← MongoDB data models
│       └── Blog.ts                         ← Blog post schema (title, slug, content,
│                                               image, author, publishedAt, tags)
│
│
├── .env.example                            ← MONGODB_URI, FIREBASE_*, SMTP_*, NEXT_PUBLIC_* stubs
├── .eslintrc.json
├── .gitignore
├── next.config.mjs                         ← Image domains, redirects, security headers
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## Resolved Gaps (Quick Reference)

| Category | Gap | Resolution |
|---|---|---|
| `shared/` | `SacredDivider.tsx` missing | Added — built in Chunk 1 |
| `shared/` | `TempleArchCard.tsx` missing | Added — built in Chunk 1 |
| `shared/` | `CTAButtons.tsx`, `SectionHeader.tsx`, `Breadcrumb.tsx` missing | Added — Chunk 2 primitives |
| `shared/` | `VehicleCard.tsx`, `PlaceCard.tsx` missing | Added — Chunk 3 additions |
| `shared/` | `PricingTable.tsx` missing | Added — Chunk 5 addition |
| `shared/` | `BookingEnquiryForm.tsx` missing | Added — Chunk 9 addition |
| `ui/` | Entire folder absent | Added — `Button`, `Badge`, `Accordion`, `ImageCard`, `Skeleton`, `StarRating` |
| `home/` | Entire folder absent | Added — all 8 homepage section components |
| `lib/` | `seo.ts` missing | Added with all 3 builder functions |
| `lib/` | `utils.ts` missing | Added with all utility functions |
| `app/` | `not-found.tsx` missing | Added — branded 404 built in Chunk 1 |
| `app/` | `review/page.tsx` missing | Added — ISR page, revalidate: 3600 |
| `api/` | `contact/route.ts` missing | Added — POST → Nodemailer SMTP |
| `api/` | `booking/route.ts` missing | Added — POST → WhatsApp deep link + email |
| `api/` | `reviews/route.ts` missing | Added — GET reviews for ISR page |
| `prisma/` | Entire folder absent | Added — `schema.prisma` with Booking, Review, Enquiry, Blog models |
| `public/` | `svgs/` vs `svg/` naming conflict | Resolved — canonical name is **`svg/`** |
| `public/svg/` | `ghats/`, `icons/`, `patterns/`, `routes/` subfolders missing | Added all 4 subfolders with correct files |
| Page count | Doc 1 counted ~222; Doc 2 has 237 | Aligned to 237 — see breakdown below |

---

## Page Count Breakdown (All Handled by [...slug])

| Data File | Template Used | Pages | Chunk |
|---|---|---|---|
| varanasiRoutes.ts | OutstationRouteTemplate | 68 | 6 |
| ayodhyaRoutes.ts | OutstationRouteTemplate | 20 | 6 |
| allahabadRoutes.ts | OutstationRouteTemplate | 15 | 6 |
| lucknowRoutes.ts | OutstationRouteTemplate | 10 | 6 |
| gayaRoutes.ts | OutstationRouteTemplate | 8 | 6 |
| vindhyachalRoutes.ts | OutstationRouteTemplate | 5 | 6 |
| vehicles.ts | VehicleTemplate | 25 | 4 |
| cityServices.ts | CabServiceTemplate | 24 | 5 |
| cityServices.ts | LocalServiceTemplate | 6 | 5 |
| airportTaxi.ts | AirportTaxiTemplate | 5 | 8 |
| tourPackages.ts | TourPackageTemplate | 8 | 7 |
| tempoTraveller.ts | TempoTravellerTemplate | **7** | 7 |
| carRental.ts | CarRentalTemplate | **7** | 7 |
| placesToVisit.ts | PlacesToVisitTemplate | 6 | 3 |
| accommodation.ts | AccommodationTemplate | **5** | 8 |
| allRoutes (static) | CityLandingTemplate | **12** | 3 |
| allRoutes (static) | StaticPageTemplate | **4** | 9 |
| **[...slug] subtotal** | | **235** | |
| `src/app/page.tsx` | Homepage (standalone) | 1 | 2 |
| `src/app/review/page.tsx` | ISR Review page (standalone) | 1 | 9 |
| **Grand Total** | | **237** | |

> **Conflicts resolved:** Tempo traveller = 7 (Master Prompt authoritative), Car rental = 7 (Master Prompt authoritative), Accommodation = 5 (Master Prompt authoritative). CityLandingTemplate (12) and StaticPageTemplate (4) pages were not counted in original Doc 1 — now included.

---

## How The Dynamic Routing Works

```
User visits: /varanasi/varanasi-to-ayodhya-taxi
       │
       ▼
src/app/[...slug]/page.tsx
       │
       ▼ passes slug → ['varanasi', 'varanasi-to-ayodhya-taxi']
src/lib/urlParser.ts
       │  looks up in allRoutes.ts
       │  finds → { template: 'OutstationRouteTemplate', dataKey: 'varanasiRoutes.varanasiToAyodhya' }
       │  fetches data from src/data/varanasiRoutes.ts
       │
       ▼
Returns { template: 'OutstationRouteTemplate', data: { origin, destination, fare, ... } }
       │
       ▼
[...slug]/page.tsx renders:
<LayoutShell>
  <OutstationRouteTemplate data={data} />
</LayoutShell>
```

This single pattern handles all 235 dynamic pages. New page = add one entry to `allRoutes.ts` + add data to the correct data file. Zero new `page.tsx` files needed.

---

## allRoutes.ts — Structure Reference

```typescript
// src/data/allRoutes.ts

export type RouteEntry = {
  slug: string;           // URL path e.g. 'varanasi/varanasi-to-ayodhya-taxi'
  template: TemplateName; // Which template component to use
  dataKey: string;        // Dot-path to data object e.g. 'varanasiRoutes.varanasiToAyodhya'
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
};

// Template name union — must match a key in TEMPLATE_MAP in urlParser.ts
export type TemplateName =
  | 'OutstationRouteTemplate'
  | 'AirportTaxiTemplate'
  | 'VehicleTemplate'
  | 'CabServiceTemplate'
  | 'LocalServiceTemplate'
  | 'CityLandingTemplate'
  | 'TourPackageTemplate'
  | 'TempoTravellerTemplate'
  | 'CarRentalTemplate'
  | 'PlacesToVisitTemplate'
  | 'AccommodationTemplate'
  | 'StaticPageTemplate';
```

---

## urlParser.ts — Structure Reference

```typescript
// src/lib/urlParser.ts

import { allRoutes } from '@/data/allRoutes';
import * as varanasiRoutes from '@/data/varanasiRoutes';
import * as ayodhyaRoutes from '@/data/ayodhyaRoutes';
import * as allahabadRoutes from '@/data/allahabadRoutes';
import * as lucknowRoutes from '@/data/lucknowRoutes';
import * as gayaRoutes from '@/data/gayaRoutes';
import * as vindhyachalRoutes from '@/data/vindhyachalRoutes';
import * as vehicles from '@/data/vehicles';
import * as cityServices from '@/data/cityServices';
import * as airportTaxi from '@/data/airportTaxi';
import * as tourPackages from '@/data/tourPackages';
import * as tempoTraveller from '@/data/tempoTraveller';
import * as carRental from '@/data/carRental';
import * as placesToVisit from '@/data/placesToVisit';
import * as accommodation from '@/data/accommodation';

const DATA_SOURCES: Record<string, any> = {
  varanasiRoutes,
  ayodhyaRoutes,
  allahabadRoutes,
  lucknowRoutes,
  gayaRoutes,
  vindhyachalRoutes,
  vehicles,
  cityServices,
  airportTaxi,
  tourPackages,
  tempoTraveller,
  carRental,
  placesToVisit,
  accommodation,
};

export function parseUrl(slugArray: string[]): { template: string; data: any } | null {
  const slug = slugArray.join('/');
  const route = allRoutes.find(r => r.slug === slug);
  if (!route) return null;

  const [namespace, key] = route.dataKey.split('.');
  const data = DATA_SOURCES[namespace]?.[key];
  if (!data) return null;

  return { template: route.template, data };
}
```

---

## [...slug]/page.tsx — Structure Reference

```typescript
// src/app/[...slug]/page.tsx

import { parseUrl } from '@/lib/urlParser';
import { allRoutes } from '@/data/allRoutes';
import { notFound } from 'next/navigation';
import LayoutShell from '@/components/shared/LayoutShell';

import OutstationRouteTemplate from '@/components/templates/OutstationRouteTemplate';
import AirportTaxiTemplate from '@/components/templates/AirportTaxiTemplate';
import VehicleTemplate from '@/components/templates/VehicleTemplate';
import CabServiceTemplate from '@/components/templates/CabServiceTemplate';
import LocalServiceTemplate from '@/components/templates/LocalServiceTemplate';
import CityLandingTemplate from '@/components/templates/CityLandingTemplate';
import TourPackageTemplate from '@/components/templates/TourPackageTemplate';
import TempoTravellerTemplate from '@/components/templates/TempoTravellerTemplate';
import CarRentalTemplate from '@/components/templates/CarRentalTemplate';
import PlacesToVisitTemplate from '@/components/templates/PlacesToVisitTemplate';
import AccommodationTemplate from '@/components/templates/AccommodationTemplate';
import StaticPageTemplate from '@/components/templates/StaticPageTemplate';

const TEMPLATE_MAP: Record<string, React.ComponentType<any>> = {
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

export async function generateStaticParams() {
  return allRoutes.map(route => ({
    slug: route.slug.split('/'),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string[] } }) {
  const route = allRoutes.find(r => r.slug === params.slug.join('/'));
  if (!route) return {};
  return {
    title: route.seo.title,
    description: route.seo.description,
    robots: { index: true, follow: true },
    alternates: { canonical: route.seo.canonical },
    openGraph: { title: route.seo.title, description: route.seo.description },
  };
}

export default function SlugPage({ params }: { params: { slug: string[] } }) {
  const resolved = parseUrl(params.slug);
  if (!resolved) return notFound();

  const TemplateComponent = TEMPLATE_MAP[resolved.template];
  if (!TemplateComponent) return notFound();

  return (
    <LayoutShell>
      <TemplateComponent data={resolved.data} />
    </LayoutShell>
  );
}
```

---

## Template Data Contracts (Props Reference)

### OutstationRouteTemplate
```typescript
type OutstationRouteData = {
  origin: string;
  destination: string;
  distance: string;
  duration: string;
  fare: { sedan: number; innova: number; ertiga: number; tempo?: number };
  highlights: string[];
  placesEnRoute: string[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; canonical: string };
}
```

### VehicleTemplate
```typescript
type VehicleData = {
  vehicleName: string;
  city: string;
  slug: string;
  specs: { seats: number; ac: boolean; luggage: string; fuelType: string };
  pricePerKm: number;
  basePrice: number;
  images: string[];
  features: string[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; canonical: string };
}
```

### CabServiceTemplate
```typescript
type CabServiceData = {
  serviceType: 'one-way' | 'round-trip' | 'full-day' | 'half-day'
             | 'outstation' | 'drop' | 'call-taxi' | 'tourist' | 'corporate';
  city: string;
  pricing: { sedan: number; innova: number; ertiga: number };
  inclusions: string[];
  howItWorks: { step: number; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; canonical: string };
}
```

### AirportTaxiTemplate
```typescript
type AirportTaxiData = {
  airport: string;
  iataCode: string;
  city: string;
  terminals: string[];
  fare: { sedan: number; innova: number; ertiga: number };
  inclusions: string[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; canonical: string };
}
```

### TourPackageTemplate
```typescript
type TourPackageData = {
  packageName: string;
  city: string;
  duration: string;
  itinerary: { day: number; title: string; activities: string[] }[];
  inclusions: string[];
  exclusions: string[];
  pricing: { perPerson: number; group?: number };
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; canonical: string };
}
```

### LocalServiceTemplate
```typescript
type LocalServiceData = {
  city: string;
  serviceType: string;
  hourlyPackages: { hours: number; km: number; price: number }[];
  places: { name: string; distance: string }[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; canonical: string };
}
```

### TempoTravellerTemplate
```typescript
type TempoTravellerData = {
  city: string;
  variant: 'standard' | 'luxury' | 'maharaja' | 'urbania';
  capacity: number;
  pricePerKm: number;
  popularRoutes: { destination: string; fare: number }[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; canonical: string };
}
```

### CarRentalTemplate
```typescript
type CarRentalData = {
  city: string;
  rentalType: 'daily' | 'weekly' | 'monthly';
  packages: { duration: string; km: number; price: number; vehicle: string }[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; canonical: string };
}
```

### PlacesToVisitTemplate
```typescript
type PlacesToVisitData = {
  city: string;
  places: { name: string; description: string; image: string; distance: string }[];
  nearbyRoutes: { destination: string; slug: string }[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; canonical: string };
}
```

### AccommodationTemplate
```typescript
type AccommodationData = {
  city: string;
  accType: 'hotel' | 'homestay' | 'dharamshala' | 'dormitory' | 'guest-house';
  features: string[];
  priceRange: { min: number; max: number };
  nearbyGhats: string[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; canonical: string };
}
```

### CityLandingTemplate
```typescript
type CityLandingData = {
  city: string;
  heroText: string;
  services: { label: string; icon: string; slug: string }[];
  vehicles: string[];           // vehicle IDs — pulled from vehicles.ts
  places: { name: string; image: string; distance: string }[];
  outstationLinks: { destination: string; slug: string; fare: number }[];
  seo: { title: string; description: string; canonical: string };
}
```

### StaticPageTemplate
```typescript
type StaticPageData = {
  pageTitle: string;
  content: string;              // HTML/MDX string
  seo: { title: string; description: string; canonical: string };
}
```

---

## lib/ Helpers — Full API Reference

### src/lib/seo.ts
```typescript
buildMetadata({
  title, description, canonical,
  ogImage?: string,
  ogType?: string,
  noIndex?: boolean,
  extra?: Record<string, any>
})

buildCityMetadata({ city, slug, title, description, ogImage? })

buildOutstationMetadata({ origin, destination, slug })
```

### src/lib/utils.ts
```typescript
cn(...inputs)                    // clsx + tailwind-merge
formatPrice(amount, perKm?)      // → '₹10.50/km' or '₹2,625'
formatPhone(phone, withCC?)      // → '87261 24680' or '+91 87261 24680'
slugToTitle(slug)                // 'varanasi-to-gaya-taxi' → 'Varanasi To Gaya Taxi'
capitalize(str)
buildWALink(message)             // → 'https://wa.me/918726124680?text=...'
truncate(str, n = 120)
extractDestination(slug)         // 'varanasi-to-gaya-taxi' → 'Gaya'
```

---

## prisma/schema.prisma — Models Reference

```prisma
model Booking {
  id        String   @id @default(cuid())
  name      String
  phone     String
  email     String?
  origin    String
  destination String
  date      DateTime
  vehicle   String
  createdAt DateTime @default(now())
}

model Review {
  id        String   @id @default(cuid())
  author    String
  rating    Int
  comment   String
  city      String?
  verified  Boolean  @default(false)
  createdAt DateTime @default(now())
}

model Enquiry {
  id        String   @id @default(cuid())
  name      String
  phone     String
  email     String?
  message   String
  createdAt DateTime @default(now())
}

model Blog {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  content     String
  imageId     String?
  author      String
  tags        String[]
  publishedAt DateTime @default(now())
}
```

---

## Key Architecture Rules

### 1. Where does data live?
**Always in `src/data/`**. Never hardcode content inside a template or page component.

### 2. Where do new pages get registered?
**Always in `allRoutes.ts`**. Add a new entry → it auto-appears in `sitemap.ts` and `generateStaticParams()`.

### 3. When to create a new template?
When a page type has a **fundamentally different layout**. Do NOT create a new template just because the content topic differs.

### 4. `use client` rule
```
NEEDS 'use client':   Navbar.tsx, BookingModal.tsx, HeroSection.tsx,
                      Accordion.tsx, FAQSection.tsx, BookingEnquiryForm.tsx,
                      any component with useState / useEffect / onClick

NEVER 'use client':   All templates, all data files, LayoutShell.tsx,
                      Footer.tsx, SacredDivider.tsx, TempleArchCard.tsx,
                      [...slug]/page.tsx, layout.tsx, sitemap.ts
```

### 5. Template vs Shared Component
- **Template** = renders an entire page (hero + body + FAQ + CTA + internal links)
- **Shared component** = a layout piece reused inside templates
- **UI component** = a primitive reused inside shared components and templates

### 6. Asset naming — RESOLVED CONFLICT
The canonical folder is **`public/svg/`** (not `public/svgs/`). All references in code and config must use `svg/`.

### 7. SEO ownership
Each route entry in `allRoutes.ts` owns its SEO metadata. Templates do NOT manage SEO — they just render UI.

### 8. Adding a new page
```
1. Add data to the correct src/data/*.ts file
2. Add one entry to src/data/allRoutes.ts  ← ONLY step that creates the URL
3. npm run build — auto-picked up by generateStaticParams() and sitemap.ts
```

### 9. Adding a new city
```
1. Create src/data/[city]Routes.ts
2. Add all outstation routes to allRoutes.ts
3. Add city landing entry (template: 'CityLandingTemplate')
4. Add city entries in vehicles.ts, cityServices.ts, etc.
5. Add new namespace to urlParser.ts DATA_SOURCES
6. Zero new page files needed
```

---

## Build Chunks — Status Table

| Chunk | Branch | Status | Key Deliverables |
|---|---|---|---|
| 1 | chunk/1-setup | ✅ COMPLETE | Foundation, shared components, SacredDivider, TempleArchCard, all stubs |
| 2 | chunk/2-homepage | ⏳ | Homepage, home/ components, ui/ folder, CTAButtons, SectionHeader, Breadcrumb |
| 3 | chunk/3-city-pages | ⏳ | CityLandingTemplate, PlacesToVisitTemplate, VehicleCard, PlaceCard, 12 city pages |
| 4 | chunk/4-vehicle-pages | ⏳ | VehicleTemplate, 25 vehicle pages |
| 5 | chunk/5-cab-service-pages | ⏳ | CabServiceTemplate, LocalServiceTemplate, PricingTable, 30 service pages |
| 6 | chunk/6-outstation-routes | ⏳ | OutstationRouteTemplate, 126 route pages, route SVGs |
| 7 | chunk/7-packages-tempo-rental | ⏳ | TourPackageTemplate, TempoTravellerTemplate, CarRentalTemplate, 22 pages |
| 8 | chunk/8-accommodation-airport | ⏳ | AccommodationTemplate, AirportTaxiTemplate, 19 pages |
| 9 | chunk/9-static-specialty | ⏳ | StaticPageTemplate, BookingEnquiryForm, review/ ISR page, 4 static pages |
| 10 | chunk/10-api-backend | ⏳ | Live API routes, Prisma migration, SMTP, Firebase |

---

## Quick Start

```bash
# Install
npm install

# Dev server
npm run dev
# → http://localhost:3000

# Build (run before every commit)
npm run build

# Type check
npx tsc --noEmit

# Prisma (Chunk 10+)
npx prisma migrate dev
```

---

*Tirupati Travel — Next.js Project | Architecture based on ChikuCabs template pattern*

--------------------------------------------------------------------------------------
# PATCH — Project Structure (Doc 1)
--------------------------------------------------------------------------------------

## 2. PlacesToVisitTemplate — missing 3 pages

In the **Page Count Breakdown** table, the `placesToVisit.ts` row shows **6 pages** but only 3 slugs are ever registered in either doc. Either:

- Confirm the 3 missing slugs and add them to the table:

| Slug | Template |
|---|---|
| `ayodhya/places-to-visit-in-ayodhya` | PlacesToVisitTemplate |
| `lucknow/places-to-visit-in-lucknow` | PlacesToVisitTemplate |
| `vindhyachal/places-to-visit-in-vindhyachal` | PlacesToVisitTemplate |

- Or correct the count to **3** if those pages are not planned.

---

## 3. CityLandingTemplate — clarify the 12-page breakdown

In the **Page Count Breakdown** table, add a footnote to the `CityLandingTemplate = 12` row:

```
12 = 6 main city landings + 6 specialty pages:
  - ayodhya/ayodhya-dham
  - vindhyachal/vindhyachal-mandir
  - lucknow/taxi-in-lucknow
  - varanasi/places-to-visit-in-varanasi  ← only if using CityLandingTemplate, not PlacesToVisitTemplate
  - allahabad/places-to-visit-in-allahabad
  - gaya/places-to-visit-in-gaya
```

> Resolve conflict with Doc 2 Chunk 3 which lists these specialty slugs under a mix of templates.

---

## 4. cityCabRoutes.ts — add chunk ownership

In the `src/data/` folder listing, `cityCabRoutes.ts` has no assigned chunk or template. Add:

```
├── cityCabRoutes.ts    ← Short intra-city cab route data
│                           Template: CabServiceTemplate or LocalServiceTemplate
│                           Chunk: 5 (to be confirmed)
│                           NOTE: Not yet registered in allRoutes.ts — needs chunk owner
```

---

## 5. VehicleData type — add slug field note

In the **Template Data Contracts → VehicleTemplate** block, the `slug` field is present here but absent in Doc 2. Add a comment:

```typescript
type VehicleData = {
  vehicleName: string;
  city: string;
  slug: string;        // ← present in project structure; confirm inclusion in Doc 2 VehicleData type
  ...
}
```