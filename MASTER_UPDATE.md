# TIRUPATI TRAVEL — Next.js Rebuild Master Prompt
# Version: ChikuCabs Architecture | Template-Driven + Catch-All Routing
# Total chunks: 10 | Stack: Next.js 16+ App Router + Tailwind CSS | Mobile-first

---

## ─── PROJECT IDENTITY ───────────────────────────────────────────────────────

Project Name    : tirupatitravel-nextjs
Live Site       : https://tirupatitravel.in/
Design Goal     : Premium Varanasi heritage brand — NOT a generic cab website
Stack           : Next.js 16+ (App Router), Tailwind CSS v4, JSON data layer (Prisma-ready)
Styling         : Tailwind CSS v4, no component library, custom design system
Rendering       : SSG (default via generateStaticParams), ISR for review page
Hosting         : VPS + Nginx (same server, Node.js 20 LTS + PM2)

Phone           : 8726124680
WhatsApp        : +918726124680
Email           : [EMAIL_ADDRESS]
Address         : L-2/72, Dashashwamedh Plaza, Dashashwamedh Gath, Varanasi-221001

---

## ─── ARCHITECTURE PHILOSOPHY (ChikuCabs Pattern) ──────────────────────────

This project follows the **ChikuCabs template-driven architecture**. Understand
this fully before writing any code — it changes how EVERY chunk is built.

### The 5 Pillars

1. **All route data lives in `src/data/`**
   One file per city/service type. `allRoutes.ts` is the master index of every
   page on the site. Nothing gets a URL unless it exists in `allRoutes.ts`.

2. **Templates live in `src/components/templates/`**
   Each template is a FULL-PAGE layout component — hero + content + FAQ + CTA.
   It receives one typed `data` prop. It is NOT a small reusable UI component.
   12 templates cover all 222+ pages on the site.

3. **One catch-all route handles everything**
   `src/app/[...slug]/page.tsx` is the ONLY dynamic route file.
   It reads the slug → calls `urlParser.ts` → picks the template → renders it.
   No more 161 individual `page.js` files across nested city folders.

4. **`src/lib/urlParser.ts` is the brain**
   Input: slug array from Next.js params.
   Output: `{ template: string, data: object }`.
   Logic: looks up `allRoutes.ts`, resolves the `dataKey` dot-path to the
   actual data object in the correct data file, returns both.

5. **`src/components/shared/`** holds layout-level pieces reused inside every
   template: Navbar, Footer, BookingModal, WhatsAppFloat, EEATSection, etc.

### How a Page Renders (end-to-end)

```
User visits: /varanasi/varanasi-to-ayodhya-taxi
        │
        ▼
src/app/[...slug]/page.tsx  — Next.js routes here automatically
        │
        ▼  params.slug = ['varanasi', 'varanasi-to-ayodhya-taxi']
src/lib/urlParser.ts
        │  joins slug → 'varanasi/varanasi-to-ayodhya-taxi'
        │  finds entry in allRoutes.ts:
        │    { template: 'OutstationRouteTemplate',
        │      dataKey:  'varanasiRoutes.varanasiToAyodhya' }
        │  resolves dot-path → fetches data from src/data/varanasiRoutes.ts
        │
        ▼  returns { template, data }
[...slug]/page.tsx
        │  looks up TEMPLATE_MAP['OutstationRouteTemplate']
        │
        ▼
<LayoutShell>
  <OutstationRouteTemplate data={resolvedData} />
</LayoutShell>
```

This single pattern renders all 222+ pages. New pages = add an entry to
`allRoutes.ts` + add data to the correct data file. Zero new page files needed.

---

## ─── DESIGN SYSTEM ──────────────────────────────────────────────────────────

### Color Palette — tailwind.config.js `extend.colors`

```js
colors: {
  primary:   { DEFAULT: '#FF6B00', dark: '#E65100', light: '#FFF3E0' },
  secondary: { DEFAULT: '#1A237E', light: '#3949AB' },
  accent:    { DEFAULT: '#FFD600', dark: '#F9A825', light: '#FFFDE7' },

  cream: {
    DEFAULT: '#FDF8F0',
    dark:    '#F5EDD8',
    warm:    '#FAF0E0',
  },
  saffron:   { DEFAULT: '#FF6B00', pale: '#FFF3E0' },
  gold:      { DEFAULT: '#FFD600', deep: '#C49A00', pale: '#FFFDE7' },
  sandstone: '#C4A882',
  temple: {
    stone: '#8D7B68',
    dark:  '#4A3728',
  },

  surface:   { DEFAULT: '#FFFFFF', alt: '#F8F9FA', cream: '#FDF8F0' },

  text: {
    primary:   '#212121',
    secondary: '#616161',
    light:     '#9E9E9E',
    cream:     '#5C4A32',
  },

  success:       '#2E7D32',
  border:        '#E0E0E0',
  'border-warm': '#E8DDD0',
}
```

### Background Color Rule — CRITICAL

```
Section type          Background token       Tailwind class
──────────────────────────────────────────────────────────
Hero sections         cream                  bg-cream / bg-section-cream
Alternating content   cream / white          alternate each section
Individual cards      white (always)         bg-white
Dark CTA banners      secondary              bg-secondary
Footer                secondary              bg-secondary
Forms / modals        white                  bg-white
```
Never put two cream sections back-to-back without a white section between.

### Typography

```js
fontFamily: {
  sans:  ['var(--font-poppins)', 'Inter', 'sans-serif'],
  serif: ['var(--font-playfair)', 'Georgia', 'serif'],
}
```

Loaded via `next/font/google` in `src/app/layout.tsx`.

### Spacing Conventions

```
Section padding  : py-12 md:py-16 lg:py-20   → .section-pad
Container        : max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  → .container-site
Card gap         : gap-4 md:gap-6
```

### Shadows

```js
'card':       '0 4px 20px rgba(0,0,0,0.08)'
'card-hover': '0 12px 40px rgba(0,0,0,0.14)'
'card-warm':  '0 4px 20px rgba(196,168,130,0.20)'
'temple':     '0 8px 32px rgba(255,107,0,0.15), 0 2px 8px rgba(0,0,0,0.08)'
'gold':       '0 4px 20px rgba(255,214,0,0.30)'
'float':      '0 4px 16px rgba(255,107,0,0.35)'
```

### Animations

```
animate-mandala-slow   → 40s rotate (mandala watermarks)
animate-flame-pulse    → 2.5s scale pulse (diya icon)
animate-gold-shimmer   → 3s shimmer (text-gold-shimmer class)
animate-fade-in-up     → 0.5s entrance (section reveals)
```

---

## ─── VARANASI VISUAL IDENTITY SYSTEM ───────────────────────────────────────

### 3 Core Visual Systems (Built in Chunk 1)

#### 1. Ghat Skyline SVG — `public/svg/ghats/ghat-skyline.svg`
Appears ONLY in Hero (top bookend) and Footer (bottom bookend).
Never in mid-page sections. Color: `currentColor`.

#### 2. Sacred Dividers — `src/components/shared/SacredDivider.tsx`
```
variant="lotus"     → After hero section, before first content section
variant="wave"      → Between mid-page content sections
variant="mandala"   → Before CTA sections, above footer
variant="gold-line" → Inside cards or minimal inline use
```
Props: `variant`, `size` (sm/md/lg), `className`

#### 3. Temple Arch Card — `src/components/shared/TempleArchCard.tsx`
```
Use for:     City cards, Vehicle cards, Package cards, Place cards, Tour cards
Do NOT use:  Pricing tables, Spec cards, Legal content, Form containers
```
Props: `image`, `imageAlt`, `title`, `subtitle`, `badge`, `badgeColor`,
       `footer`, `imageHeight`, `compact`, `priority`, `className`, `children`

### Mandala Watermark Opacities
```
Header (right)     0.06   96px
Footer (right)     0.04   256px
Footer (left)      0.03   160px
404 page           0.07   128px
CTABanner          0.08   320px
Hero bg            0.04   400px
```

---

## ─── COMPONENT CSS CLASSES (globals.css) ───────────────────────────────────

### Buttons
```css
.btn-primary    → saffron bg, white text, rounded-full, shadow-float
.btn-outline    → saffron border + text, fills saffron on hover
.btn-secondary  → navy bg, white text
.btn-gold       → accent/gold bg, secondary text, shadow-gold
.btn-ghost      → text-primary only, hover fills primary-light
.btn-whatsapp   → #25D366 green bg, white text
```

### Cards
```css
.card-base         → white, rounded-2xl, shadow-card
.card-warm         → white, shadow-card-warm, border-border-warm
.card-temple       → arch-top border-radius, shadow-temple
.card-temple-inner → smaller arch radius (nested)
```

### Typography
```css
.section-title     → text-2xl md:text-4xl font-serif font-bold text-secondary
.section-sub       → text-base md:text-lg text-text-secondary mt-2
.page-heading      → text-3xl md:text-5xl font-serif font-bold text-white
.cream-title       → same as section-title (on cream bg)
.text-gold-shimmer → animated gold gradient text
```

### Layout
```css
.container-site    → max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
.section-pad       → py-12 md:py-16 lg:py-20
.section-pad-sm    → py-8 md:py-12
.bg-section-cream  → background: #FDF8F0
.bg-section-white  → background: #FFFFFF
.bg-section-dark   → background: #1A237E
```

### Special
```css
.logo-mark         → temple-arch clip-path, saffron gradient
.arch-frame        → arched-top image clip (inside TempleArchCard)
.mandala-watermark → absolute, pointer-events-none, color: currentColor
.texture-cream     → ::before dot pattern overlay (1-2% opacity)
.ghat-skyline-wrap → absolute bottom-0, overflow-hidden
.gradient-hero     → navy→saffron overlay for hero backgrounds
.gradient-sacred   → navy→saffron for dark CTABanner
```

---

## ─── DATA ARCHITECTURE ───────────────────────────────────────────────────────

### Rule: All content in `src/data/`. Never hardcode content in JSX or templates.

### File Map

```
src/data/
├── allRoutes.ts          ← ★ MASTER INDEX — every page slug, template, dataKey, seo
├── varanasiRoutes.ts     ← All outstation routes FROM Varanasi (68 routes)
├── ayodhyaRoutes.ts      ← All outstation routes FROM Ayodhya
├── allahabadRoutes.ts    ← All outstation routes FROM Allahabad/Prayagraj
├── lucknowRoutes.ts      ← All outstation routes FROM Lucknow
├── gayaRoutes.ts         ← All outstation routes FROM Gaya
├── vindhyachalRoutes.ts  ← All outstation routes FROM Vindhyachal
├── vehicles.ts           ← All vehicle page data, all cities
│                             getVehiclesByCity(), getVehicleById()
├── cityServices.ts       ← All local/city cab service page data
│                             one-way, full-day, half-day, round-trip, etc.
├── airportTaxi.ts        ← Airport taxi page data (all airports)
├── tourPackages.ts       ← Tour package + darshan package data
├── tempoTraveller.ts     ← Tempo traveller service data (all cities)
├── carRental.ts          ← Car rental data (monthly/weekly, all cities)
├── placesToVisit.ts      ← Places to visit data (all cities)
├── accommodation.ts      ← Hotel, homestay, dharamshala, dormitory data
└── cityCabRoutes.ts      ← Short intra-city cab route data
```

### allRoutes.ts — Entry Shape

```typescript
export type RouteEntry = {
  slug: string;           // 'varanasi/varanasi-to-ayodhya-taxi'
  template: TemplateName; // which template component to render
  dataKey: string;        // dot-path: 'varanasiRoutes.varanasiToAyodhya'
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
};

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

### Vehicle Data Shape (prices from live site)

```typescript
{
  id: 'swift-dzire', name: 'Swift Dzire',
  image: '/assets/images/vehicles/swift-dzire.jpg',
  category: 'sedan',
  tariff: 10.50,               // ₹/km
  perDayKm: 250,
  driverCharge: 200,           // ₹/day
  seats: 4, luggage: 2,
  ac: true,
  available: ['varanasi', 'ayodhya', 'allahabad', 'lucknow'],
  features: ['AC', 'GPS', 'Music system', 'First aid kit'],
  badge: 'Most Popular',
}
```

---

## ─── TEMPLATE DATA CONTRACTS ────────────────────────────────────────────────

Each template receives a single `data` prop. Shape must match exactly.

### OutstationRouteTemplate
```typescript
type OutstationRouteData = {
  origin: string;              // 'Varanasi'
  destination: string;         // 'Ayodhya'
  distance: string;            // '200 km'
  duration: string;            // '4 hrs'
  fare: {
    sedan: number;
    innova: number;
    ertiga: number;
    tempo?: number;
  };
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

---

## ─── LIB HELPERS ────────────────────────────────────────────────────────────

### src/lib/urlParser.ts — THE BRAIN
```typescript
// Input: slug array from [...slug] params
// Output: { template: string, data: object } | null
export function parseUrl(slugArray: string[]): { template: string; data: any } | null

// Internal DATA_SOURCES map — import all data files here:
// varanasiRoutes, ayodhyaRoutes, allahabadRoutes, lucknowRoutes,
// gayaRoutes, vindhyachalRoutes, vehicles, cityServices, airportTaxi,
// tourPackages, tempoTraveller, carRental, placesToVisit, accommodation
```

### src/lib/internalLinks.ts — SEO CROSS-LINKING
```typescript
// Maps each template type → array of related links to inject via InternalLinks.tsx
// OutstationRoute page → vehicle pages + return route + city landing
// Vehicle page → other vehicles in city + cab service pages
// CabService page → vehicle options + outstation routes from city
export function getInternalLinks(template: TemplateName, data: any): LinkItem[]
```

### src/lib/seo.ts
```typescript
buildMetadata({ title, description, canonical, ogImage?, ogType?, noIndex?, extra? })
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
truncate(str, n=120)
extractDestination(slug)         // 'varanasi-to-gaya-taxi' → 'Gaya'
```

---

## ─── SEO RULES — NON-NEGOTIABLE ─────────────────────────────────────────────

1. `[...slug]/page.tsx` exports `generateMetadata()` — reads from `allRoutes.ts` seo field
2. Use `buildMetadata()` from `lib/seo.ts` — never write raw metadata objects
3. Every metadata MUST include: `title`, `description`, `canonical`, `robots`, `openGraph`
4. `robots: { index: true, follow: true }` on ALL public pages
5. Root `layout.tsx` holds: GTM, GSC verification, `metadataBase`, default OG
6. `app/sitemap.ts` auto-generates from `allRoutes.ts` — update each chunk
7. JSON-LD: `LocalBusiness` + `TravelAgency` on homepage, `FAQPage` on FAQ sections,
   `TouristAttraction` on city pages, `Service` on taxi route pages
8. Every page: exactly ONE `<h1>` — set inside the template's hero section
9. Images: always `next/image` with `alt`, `width`, `height` or `fill`

### generateMetadata in [...slug]/page.tsx
```typescript
export async function generateMetadata({ params }: { params: { slug: string[] } }) {
  const route = allRoutes.find(r => r.slug === params.slug.join('/'));
  if (!route) return {};
  return {
    title: route.seo.title,
    description: route.seo.description,
    robots: { index: true, follow: true },
    alternates: { canonical: route.seo.canonical },
    openGraph: { title: route.seo.title, description: route.seo.description }
  };
}
```

---

## ─── CONVENTIONS & RULES ─────────────────────────────────────────────────────

### File Naming
```
Routes:     kebab-case  (page.tsx, not-found.tsx)
Components: PascalCase  (Navbar.tsx, TempleArchCard.tsx)
Data files: camelCase   (varanasiRoutes.ts, cityServices.ts)
Templates:  PascalCase  (OutstationRouteTemplate.tsx)
SVG assets: kebab-case  (ghat-skyline.svg)
```

### `use client` — Strict Rule
```
NEEDS 'use client':  Navbar.tsx, BookingModal.tsx, any component
                     with useState / useEffect / onClick handlers
NEVER 'use client':  All templates, all data files, LayoutShell.tsx,
                     Footer.tsx, SacredDivider.tsx, TempleArchCard.tsx,
                     [...slug]/page.tsx, layout.tsx, sitemap.ts
```

### Image Rules
```typescript
import Image from 'next/image'
// Standard
<Image src="..." alt="descriptive text" width={400} height={300} />
// Fill (cards)
<div className="relative h-48">
  <Image src="..." alt="..." fill className="object-cover" />
</div>
// Above fold
<Image ... priority />
// Sizes hint
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
```

### WhatsApp Pre-fill Pattern
```typescript
const msg = buildWALink(`Hi, I want to book a taxi from Varanasi to Gaya`)
// encodes and appends to wa.me/918726124680
```

### Adding a New Page
```
1. Add data to the correct src/data/*.ts file
2. Add one entry to src/data/allRoutes.ts  ← ONLY step that creates the URL
3. Run: npm run build
   → generateStaticParams() picks it up automatically
   → sitemap.ts includes it automatically
   → No new page.tsx file needed
```

### Adding a New City
```
1. Create src/data/[city]Routes.ts
2. Add all outstation routes to allRoutes.ts pointing to that file
3. Add city landing entry to allRoutes.ts (template: 'CityLandingTemplate')
4. Add city-specific entries in vehicles.ts, cityServices.ts, etc.
5. Add city to urlParser.ts DATA_SOURCES map
6. Zero new page files — all routes handled by [...slug]
```

---

## ─── BUILD CHUNKS ────────────────────────────────────────────────────────────

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ CHUNK 1 — PROJECT SETUP & DESIGN FOUNDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Status : COMPLETE
Branch : chunk/1-setup

What was built:
- next.config.mjs, tailwind.config.js, postcss.config.js, package.json
- src/app/layout.tsx (GTM + next/font + LayoutShell)
- src/app/globals.css (full component layer + Varanasi visual classes)
- src/app/page.tsx (homepage stub)
- src/app/not-found.tsx (branded 404)
- src/app/sitemap.ts (reads allRoutes.ts — stub entries)
- src/app/robots.ts
- src/lib/seo.ts, src/lib/utils.ts, src/lib/mongodb.ts, src/lib/firebase.ts
- src/data/allRoutes.ts (stub — filled across chunks 2-9)
- src/data/ all data files as stubs
- src/components/shared/ — Navbar, Footer, LayoutShell, SacredDivider,
  TempleArchCard, WhatsAppFloat, EEATSection, RouteMapSection, InternalLinks
- src/app/[...slug]/page.tsx — CORE catch-all route (wired, ready for templates)
- src/lib/urlParser.ts — stub, expanded as templates are built each chunk
- src/lib/internalLinks.ts — stub
- src/models/Blog.ts
- Admin routes: src/app/admin/, src/app/admin-login/
- Blog routes: src/app/blogs/
- API routes: src/app/api/blogs/, src/app/api/image/, src/app/api/upload/
- public/svg/ — ghat-skyline, corner-mandala, lotus-divider, ganga-wave,
  mandala-divider
- prisma/schema.prisma (stub), .gitignore, .env.example

Design decisions locked in Chunk 1:
- Header: always white + shadow (never transparent)
- Header top bar: saffron gradient (E65100 → FF6B00 → E65100)
- Fonts: Poppins (sans) + Playfair Display (serif) via next/font/google
- Background: cream (#FDF8F0) sections, white cards
- Icon library: lucide-react only

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏳ CHUNK 2 — HOMEPAGE + SHARED UI + DATA FOUNDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Goal      : Full homepage + all shared UI primitives + seed all data files
Branch    : chunk/2-homepage
Route     : src/app/page.tsx (replace stub)
Rendering : SSG

PART A — Homepage (src/app/page.tsx)

Section build order:

1. HeroSection — src/components/home/HeroSection.tsx
   - Full-viewport (100dvh), bg: /assets/images/varanasi-tour-package.webp
   - gradient-hero overlay + ghat-skyline SVG at bottom (opacity 0.35)
   - Corner mandala watermark top-right (opacity 0.06)
   - H1 (font-serif): "Varanasi's Most Trusted" + rotating word
     ('use client' for rotation — Memorable / Peaceful / Spiritual, 2.5s cycle)
   - CTAs: btn-primary "View Tour Packages" + btn-outline "Call: 8726124680"
   - Scroll indicator: animated chevron-down (absolute bottom-8)
   ↓ <SacredDivider variant="lotus" />

2. DestinationCards — src/components/home/DestinationCards.tsx
   - bg-section-cream + texture-cream
   - SectionHeader: "Explore Sacred Destinations"
   - 5 cities: Varanasi, Allahabad, Gaya, Vindhyachal, Ayodhya
   - Each: TempleArchCard (imageHeight=220, badge = package count)
   - Grid: 1-col → 2-col sm → 3-col md → 5-col xl
   ↓ <SacredDivider variant="wave" />

3. TourPackageCards — src/components/home/TourPackageCards.tsx
   - bg-section-white
   - SectionHeader: "Popular Tour Packages"
   - 4 cards from tourPackages data (stub — expand in Chunk 7)
   - Each: TempleArchCard, badge-gold "1N 2D", footer: price + "View Package"
   - Grid: 1-col → 2-col md → 4-col xl
   ↓ <SacredDivider variant="mandala" />

4. CTABanner — src/components/home/CTABanner.tsx
   - Full-width gradient-sacred (navy→saffron), mandala watermark (opacity 0.08)
   - H2 (font-serif): "Plan Your Pilgrimage Today"
   - CTAs: btn-gold "View All Packages" + btn-outline (white border) "Call Now"
   ↓ <SacredDivider variant="wave" />

5. ThemeExplorer — src/components/home/ThemeExplorer.tsx
   - bg-section-cream + texture-cream
   - SectionHeader: "Explore by Theme"
   - 6 tiles from themes data: Pilgrimage, Heritage, Wildlife, Hill, Adventure, Beach
   - Each: SVG icon (public/svg/icons/*.svg) + label, card-warm
   - Grid: 3-col always
   ↓ <SacredDivider variant="wave" />

6. AboutSection — src/components/home/AboutSection.tsx
   - bg-section-white
   - Left: Image with arch-frame clip | Right: text + stats (10+ Years, 50k+ Pilgrims)
   - CTA: btn-outline "Learn More" → /about-us

7. WhyChooseUs — src/components/home/WhyChooseUs.tsx
   - bg-section-cream
   - SectionHeader: "Why Choose Tirupati Travel?"
   - 3 cards: ShieldCheck / Star / Award (lucide-react)
   ↓ <SacredDivider variant="lotus" />

8. FAQSection — src/components/home/FAQSection.tsx
   - bg-section-white | 'use client' (accordion)
   - 6 FAQs from faqs data | FAQPage JSON-LD schema

generateMetadata():
```typescript
title:       'Tirupati Travel – Best Pilgrimage Tour Packages & Taxi Services in India'
description: 'Book affordable pilgrimage tour packages with Tirupati Travel...'
canonical:   'https://tirupatitravel.in/'
```

PART B — Shared UI Primitives

New files to create (all in src/components/):

```
shared/CTAButtons.tsx         — Call + WhatsApp pair (pre-filled message prop)
shared/SectionHeader.tsx      — title + subtitle + optional divider-gold
shared/Breadcrumb.tsx         — auto-generated from pathname
ui/Button.tsx                 — variant: primary|outline|gold|whatsapp|secondary|ghost
ui/Badge.tsx                  — badge-primary|accent|gold|success
ui/Accordion.tsx              — 'use client' | chevron + max-height animation
ui/ImageCard.tsx              — next/image + gradient-card overlay
ui/Skeleton.tsx               — loading state for ISR pages
```

PART C — Data Files to Seed

Expand all stub data files with initial real content:
- `src/data/varanasiRoutes.ts` — seed 10 top routes (full 68 in Chunk 6)
- `src/data/vehicles.ts` — all 11 vehicles with confirmed prices
- `src/data/tourPackages.ts` — 4 package stubs (itinerary filled in Chunk 7)
- `src/data/cityServices.ts` — Varanasi service stubs (expanded in Chunk 5)
- `src/data/allRoutes.ts` — add homepage + varanasi city landing entry

SVG Icons to create in public/svg/icons/:
bell.svg, lotus.svg, kalash.svg, diya.svg, route.svg, driver.svg

Pattern: public/svg/patterns/sandstone-pattern.svg

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏳ CHUNK 3 — CityLandingTemplate + 6 City Pages
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Goal      : Build CityLandingTemplate. Register 6 city landing pages in allRoutes.ts.
Branch    : chunk/3-city-pages
Rendering : SSG via generateStaticParams() in [...slug]/page.tsx

Pages registered in allRoutes.ts:
```typescript
{ slug: 'varanasi',        template: 'CityLandingTemplate', dataKey: '...' }
{ slug: 'ayodhya',         template: 'CityLandingTemplate', dataKey: '...' }
{ slug: 'allahabad',       template: 'CityLandingTemplate', dataKey: '...' }
{ slug: 'lucknow',         template: 'CityLandingTemplate', dataKey: '...' }
{ slug: 'gaya',            template: 'CityLandingTemplate', dataKey: '...' }
{ slug: 'vindhyachal',     template: 'CityLandingTemplate', dataKey: '...' }
```
Also register places-to-visit and city dham pages:
```typescript
{ slug: 'varanasi/places-to-visit-in-varanasi',   template: 'PlacesToVisitTemplate', ... }
{ slug: 'allahabad/places-to-visit-in-allahabad', template: 'PlacesToVisitTemplate', ... }
{ slug: 'gaya/places-to-visit-in-gaya',           template: 'PlacesToVisitTemplate', ... }
{ slug: 'ayodhya/ayodhya-dham',                   template: 'CityLandingTemplate', ... }
{ slug: 'vindhyachal/vindhyachal-mandir',         template: 'CityLandingTemplate', ... }
{ slug: 'lucknow/taxi-in-lucknow',                template: 'CityLandingTemplate', ... }
```

New files:
- `src/components/templates/CityLandingTemplate.tsx`
- `src/components/templates/PlacesToVisitTemplate.tsx`
- `src/components/shared/VehicleCard.tsx`
- `src/components/shared/PlaceCard.tsx`

CityLandingTemplate — sections in order:
1. CityHero         — bg-section-dark + hero image overlay + ghat-skyline (opacity 0.25)
                      H1: city name + aliases (Kashi/Banaras rotating)
                      TouristAttraction JSON-LD
   ↓ <SacredDivider variant="lotus" />
2. PlacesGrid       — bg-section-cream, TempleArchCard grid (PlaceCard wrapper)
   ↓ <SacredDivider variant="wave" />
3. ServicesIcons    — bg-section-white, 3-col icon grid: Taxi/Boat/Hotel/Darshan etc.
4. VehiclePricingCards — bg-section-cream, VehicleCard list
   ↓ <SacredDivider variant="mandala" />
5. OutstationLinks  — bg-section-white, route link grid → outstation pages

PlacesToVisitTemplate — sections:
1. Hero with H1: "Places to Visit in [City]"
2. PlacesGrid with descriptions
3. NearbyRoutes links
4. BookingCTA + InternalLinks

Data to add to allRoutes.ts this chunk: all 12 entries above.
Data files to populate: placesToVisit.ts for varanasi, allahabad, gaya.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏳ CHUNK 4 — VehicleTemplate + 25 Vehicle Pages
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Goal      : Build VehicleTemplate. Register all vehicle pages in allRoutes.ts.
Branch    : chunk/4-vehicle-pages
Rendering : SSG

allRoutes.ts entries to add (all point to VehicleTemplate):
```
varanasi/innova-crysta-on-rent-in-varanasi
varanasi/ertiga-car-on-rent-in-varanasi
varanasi/swift-dzire-taxi-service-in-varanasi
varanasi/sedan-car-in-varanasi
varanasi/toyota-etios-on-rent-in-varanasi
ayodhya/innova-cabs-in-ayodhya
ayodhya/ertiga-cab-on-rent-in-ayodhya
ayodhya/swift-dzire-cab-in-ayodhya
ayodhya/sedan-cab-in-ayodhya
ayodhya/toyota-etios-on-rent-in-ayodhya
allahabad/innova-cabs-in-allahabad
allahabad/ertiga-cab-on-rent-in-allahabad
allahabad/swift-dzire-cab-in-allahabad
allahabad/sedan-cab-in-allahabad
allahabad/toyota-etios-on-rent-in-allahabad
lucknow/innova-cab-in-lucknow
... (all city×vehicle combos)
```

New file:
- `src/components/templates/VehicleTemplate.tsx`

VehicleTemplate — sections in order:
1. VehicleHero      — TempleArchCard style full-width | badge-gold for price/km
2. SpecsCard        — card-warm | 5-spec grid (tariff, perDayKm, driver, seats, luggage)
3. FeaturesSection  — AC / GPS / 24-7 / Professional driver / Toll-free
4. BookingCTA       — gradient-sacred | Call + WhatsApp (pre-filled: "Book [vehicle] in [city]")
5. RelatedVehicles  — Other vehicles in same city (TempleArchCard, horizontal scroll mobile)
6. InternalLinks    — CabService pages for same city

Data: populate vehicles.ts fully (all 11 vehicles × available cities).
Add all vehicle entries to allRoutes.ts.
urlParser.ts: add vehicles namespace to DATA_SOURCES.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏳ CHUNK 5 — CabServiceTemplate + LocalServiceTemplate + 30 Service Pages
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Goal      : Build CabServiceTemplate + LocalServiceTemplate.
            Register all city service pages in allRoutes.ts.
Branch    : chunk/5-cab-service-pages
Rendering : SSG

allRoutes.ts entries to add (serviceType × city combinations):

CabServiceTemplate entries:
```
varanasi/one-way-cab-in-varanasi
varanasi/round-trip-cab-varanasi
varanasi/full-day-taxi-in-varanasi
varanasi/half-day-taxi-in-varanasi
varanasi/call-taxi-in-varanasi
varanasi/drop-taxi-service-varanasi
varanasi/tourist-cab-varanasi
varanasi/outstation-cab-in-varanasi    ← if applicable
ayodhya/one-way-cab-in-ayodhya
ayodhya/round-trip-cab-ayodhya
ayodhya/full-day-cab-in-ayodhya
ayodhya/half-day-cab-in-ayodhya
ayodhya/call-taxi-in-ayodhya
ayodhya/drop-taxi-service-ayodhya
ayodhya/tourist-cab-ayodhya
ayodhya/outstation-cab-in-ayodhya
allahabad/cab-service-in-allahabad
allahabad/one-way-cab-in-allahabad
allahabad/round-trip-cab-allahabad
allahabad/full-day-cab-in-allahabad
allahabad/half-day-cab-in-allahabad
allahabad/call-taxi-in-allahabad
allahabad/drop-taxi-service-allahabad
lucknow/outstation-cab-in-lucknow
```

LocalServiceTemplate entries:
```
varanasi/varanasi-local-sightseeing-cab
ayodhya/ayodhya-local-sightseeing-cab
```

New files:
- `src/components/templates/CabServiceTemplate.tsx`
- `src/components/templates/LocalServiceTemplate.tsx`
- `src/components/shared/PricingTable.tsx`

CabServiceTemplate — sections in order:
1. ServiceHero    — H1: "[Service] in [City]" | starting price badge-gold
2. HowItWorks     — 3-step: Book → Driver arrives → Travel (saffron numbered circles)
3. VehicleOptions — VehicleCard grid for this city
4. PricingTable   — card-warm table per vehicle type (PricingTable.tsx)
5. WhyBook        — 5 USPs: 24/7, AC, No hidden charges, Experienced drivers, GST bill
6. BookingCTA     — gradient-sacred | Call + WhatsApp
7. InternalLinks  — Other services + vehicle pages for same city

Data: populate cityServices.ts fully for all service × city combos.
urlParser.ts: add cityServices namespace.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏳ CHUNK 6 — OutstationRouteTemplate + All Outstation Route Pages
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Goal      : Build OutstationRouteTemplate. Register all outstation routes.
Branch    : chunk/6-outstation-routes
Rendering : SSG — generateStaticParams() pre-builds every entry at build time

This is the highest-volume chunk: ~126 route pages across all cities.

allRoutes.ts entries to add:
```
Varanasi routes (68):  varanasi/varanasi-to-[dest]-taxi
Ayodhya routes (20):   ayodhya/ayodhya-to-[dest]-taxi
Allahabad routes (15): allahabad/allahabad-to-[dest]-taxi
Lucknow routes (10):   lucknow/lucknow-to-[dest]-taxi
Gaya routes (8):       gaya/gaya-to-[dest]-taxi
Vindhyachal routes(5): vindhyachal/vindhyachal-to-[dest]-taxi
```

New file:
- `src/components/templates/OutstationRouteTemplate.tsx`

OutstationRouteTemplate — sections in order:
1. RouteHero        — H1: "Varanasi to [Dest] Taxi" | distance + duration badges
                      Journey line SVG (create in public/svg/routes/ for major routes)
                      Service JSON-LD schema
   ↓ <SacredDivider variant="lotus" />
2. PricingCards     — 3 card-warm: Sedan / Ertiga / Innova
                      Each: vehicle image (TempleArchCard compact) + price + "Book Now"
   ↓ <SacredDivider variant="wave" />
3. RouteHighlights  — Distance, duration, best season, road type, highway name
4. VehicleComparison— Side-by-side card-warm table (all 3 vehicles)
   ↓ <SacredDivider variant="mandala" />
5. BookingCTA       — gradient-sacred | WhatsApp pre-filled: "Book taxi Varanasi to [Dest]"
6. RouteMapSection  — Embedded Google Map (origin → destination)
7. InternalLinks    — Return route + vehicle pages + city landing

Data: populate all 6 route files fully (varanasiRoutes.ts through vindhyachalRoutes.ts).
urlParser.ts: add all route namespaces.

Journey SVGs: create for top 10 routes (varanasi→gaya, →ayodhya, →allahabad, →lucknow,
→delhi, →patna, →gorakhpur, →agra, →mathura, →kanpur).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏳ CHUNK 7 — TourPackageTemplate + TempoTravellerTemplate + CarRentalTemplate
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Goal      : 3 new templates + ~22 pages registered in allRoutes.ts
Branch    : chunk/7-packages-tempo-rental
Rendering : SSG

allRoutes.ts entries to add:

TourPackageTemplate entries:
```
varanasi/varanasi-tour-packages
varanasi/varanasi-darshan-tour-package
ayodhya/ayodhya-tour-packages
ayodhya/ayodhya-darshan-tour-package
allahabad/allahabad-tour-packages
allahabad/allahabad-darshan-tour-package
```

TempoTravellerTemplate entries:
```
varanasi/tempo-traveller-varanasi
varanasi/luxury-tempo-traveller-varanasi
ayodhya/tempo-traveller-ayodhya
ayodhya/luxury-tempo-traveller-ayodhya
lucknow/tempo-traveller-in-lucknow
lucknow/maharaja-tempo-traveller-in-lucknow
lucknow/urbania-tempo-traveller-in-lucknow
```

CarRentalTemplate entries:
```
varanasi/car-rental-varanasi
varanasi/monthly-car-rentals-varanasi
ayodhya/car-rental-ayodhya
ayodhya/monthly-car-rentals-ayodhya
allahabad/car-rental-allahabad
allahabad/monthly-car-rentals-allahabad
lucknow/car-rental-in-lucknow
```

New files:
- `src/components/templates/TourPackageTemplate.tsx`
- `src/components/templates/TempoTravellerTemplate.tsx`
- `src/components/templates/CarRentalTemplate.tsx`

TourPackageTemplate — sections:
1. PackageHero    — City image + "X Night Y Day" badge-gold + H1
2. Itinerary      — Day-wise timeline (saffron connector line)
3. Inclusions     — icon list: hotel, cab, darshan, meals
4. VehicleOptions — VehicleCard (package-compatible vehicles)
5. PricingSection — card-warm price breakdown per person / group
6. BookingCTA     — gradient-sacred | Call + WhatsApp
7. InternalLinks  — City landing + related packages

Data: populate tourPackages.ts fully (full itinerary arrays).
Data: populate tempoTraveller.ts + carRental.ts.
urlParser.ts: add tourPackages, tempoTraveller, carRental namespaces.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏳ CHUNK 8 — AccommodationTemplate + AirportTaxiTemplate + Fare/Agency Pages
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Goal      : 2 new templates + ~19 pages registered in allRoutes.ts
Branch    : chunk/8-accommodation-airport
Rendering : SSG

allRoutes.ts entries to add:

AccommodationTemplate entries:
```
varanasi/hotel-in-varanasi
varanasi/homestay-in-varanasi
varanasi/guest-house-in-varanasi
varanasi/dharamshala-in-varanasi
varanasi/dormitory-in-varanasi
```

AirportTaxiTemplate entries:
```
varanasi/varanasi-airport-taxi
lucknow/airport-taxi-in-lucknow
ayodhya/ayodhya-airport-taxi
```

CabServiceTemplate entries (fare + agency — reuse existing template):
```
varanasi/taxi-fare-varanasi
allahabad/taxi-fare-allahabad
varanasi/travel-agency-in-varanasi
ayodhya/travel-agency-in-ayodhya
allahabad/travel-agency-in-allahabad
varanasi/varanasi-cab-contact-number
ayodhya/ayodhya-cab-contact-number
allahabad/allahabad-cab-contact-number
```

New files:
- `src/components/templates/AccommodationTemplate.tsx`
- `src/components/templates/AirportTaxiTemplate.tsx`

AccommodationTemplate — sections:
1. AccomHero     — accType + city | arch-frame image
2. FeaturesGrid  — Room types, amenities, price range — card-warm
3. Location      — "Near Dashashwamedh Ghat" + Google Maps link
4. BookingCTA    — gradient-sacred | Call + WhatsApp + Maps

AirportTaxiTemplate — sections:
1. AirportHero   — airport name + IATA code badge | H1: "Airport Taxi in [City]"
2. PricingCards  — Sedan / Innova / Ertiga fare cards
3. Terminals     — Terminal list + pickup instructions
4. Inclusions    — card-warm: toll, parking, waiting time included
5. BookingCTA    — gradient-sacred | Call + WhatsApp
6. InternalLinks — Outstation routes + city vehicles

Data: populate accommodation.ts + airportTaxi.ts fully.
urlParser.ts: add accommodation, airportTaxi namespaces.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏳ CHUNK 9 — StaticPageTemplate + Specialty Pages + About/Contact/Legal
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Goal      : StaticPageTemplate + all remaining pages + booking form
Branch    : chunk/9-static-specialty
Rendering : SSG (static pages), ISR revalidate:3600 (review page)

StaticPageTemplate entries in allRoutes.ts:
```
about-us
contact-us
terms-and-conditions
privacy-policy
```

Specialty service entries (reuse CabServiceTemplate):
```
varanasi/corporate-cab-service-varanasi
ayodhya/corporate-cab-service-ayodhya
allahabad/corporate-cab-service-allahabad
```

Note: review page is ISR — handled as a dedicated route outside [...slug]:
```
src/app/review/page.tsx   ← ISR, revalidate: 3600, AggregateRating JSON-LD
```

New file:
- `src/components/templates/StaticPageTemplate.tsx`
- `src/components/shared/BookingEnquiryForm.tsx` ('use client')
- `src/components/ui/StarRating.tsx`

StaticPageTemplate — sections:
1. PageHero    — H1: page title | bg-section-dark | breadcrumb
2. ContentBody — card-warm | prose content | divider-gold between sections
3. CTABanner   — gradient-sacred | Call + WhatsApp (except Terms/Privacy)

About Us sections: Story + Stats + Why Choose Us + Team
Contact Us: ContactPage JSON-LD + BookingEnquiryForm + phone + Google Maps embed
Terms/Privacy: preserve PHP site content EXACTLY, no rewriting

Data: no new data files needed — static content hardcoded in data file stubs.
urlParser.ts: add static page entries.
API stubs: src/app/api/contact/route.ts (stub), src/app/api/booking/route.ts (stub).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏳ CHUNK 10 — API ROUTES + BACKEND + PRISMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Goal      : Live API layer + Prisma DB setup
Branch    : chunk/10-api-backend

API Routes (complete implementations):
```
src/app/api/contact/route.ts   POST: name/email/phone/message/city → Nodemailer SMTP
src/app/api/booking/route.ts   POST: booking details → WhatsApp deep link + confirm email
src/app/api/reviews/route.ts   GET:  fetch reviews for ISR review page
src/app/api/blogs/route.ts     GET all / POST new blog (already stubbed in Chunk 1)
src/app/api/blogs/[id]/route.ts  GET/PUT/DELETE single blog
src/app/api/upload/route.ts    POST: image upload to Firebase Storage
src/app/api/image/[id]/route.ts  GET: serve blog image
```

SMTP config (cPanel mail):
```
SMTP_HOST: mail.tirupatitravel.in
SMTP_PORT: 465
SMTP_SECURE: true
SMTP_USER: info@tirupatitravel.in
```

Prisma setup:
```bash
npm install @prisma/client prisma
npx prisma migrate dev
```

Uncomment prisma/schema.prisma — Models: Booking, Review, Enquiry, Blog.

Data migration path:
```typescript
// Before (Chunks 1-9 — static data files):
import { varanasiRoutes } from '@/data/varanasiRoutes'

// After (Chunk 10+ — database):
const routes = await db.route.findMany({ where: { origin: 'varanasi' } })
```

---

## ─── PAGE COUNT BREAKDOWN ───────────────────────────────────────────────────

All pages below are rendered by `src/app/[...slug]/page.tsx`.

| Data File          | Template                  | Pages  | Chunk |
|--------------------|---------------------------|--------|-------|
| varanasiRoutes     | OutstationRouteTemplate   | 68     | 6     |
| ayodhyaRoutes      | OutstationRouteTemplate   | 20     | 6     |
| allahabadRoutes    | OutstationRouteTemplate   | 15     | 6     |
| lucknowRoutes      | OutstationRouteTemplate   | 10     | 6     |
| gayaRoutes         | OutstationRouteTemplate   | 8      | 6     |
| vindhyachalRoutes  | OutstationRouteTemplate   | 5      | 6     |
| vehicles           | VehicleTemplate           | 25     | 4     |
| cityServices       | CabServiceTemplate        | 24     | 5     |
| cityServices       | LocalServiceTemplate      | 6      | 5     |
| airportTaxi        | AirportTaxiTemplate       | 5      | 8     |
| tourPackages       | TourPackageTemplate       | 8      | 7     |
| tempoTraveller     | TempoTravellerTemplate    | 7      | 7     |
| carRental          | CarRentalTemplate         | 7      | 7     |
| placesToVisit      | PlacesToVisitTemplate     | 6      | 3     |
| accommodation      | AccommodationTemplate     | 5      | 8     |
| allRoutes (static) | CityLandingTemplate       | 12     | 3     |
| allRoutes (static) | StaticPageTemplate        | 4      | 9     |
| **Total**          |                           | **235**|       |

Plus: `src/app/page.tsx` (homepage), `src/app/review/page.tsx` (ISR) = **237 pages**

---

## ─── CHUNK BUILD CHECKLIST ───────────────────────────────────────────────────
Run before marking any chunk complete:

□ npm run build — zero errors, zero TypeScript warnings
□ allRoutes.ts updated with all new slug entries for this chunk
□ urlParser.ts DATA_SOURCES updated with new data namespaces
□ sitemap.ts auto-generates correctly from allRoutes.ts
□ generateStaticParams() in [...slug]/page.tsx verified (no new page files)
□ Every NEW template has exactly ONE H1 in its hero section
□ All images use next/image <Image> with alt text
□ Mobile layout verified at 375px (iPhone SE viewport)
□ Lighthouse SEO ≥ 95 on sample pages from this chunk
□ WhatsApp links pre-filled with contextual message per page
□ SacredDivider used between sections (correct variant)
□ TempleArchCard used for all content cards (not card-base)
□ Cream/white alternation maintained across all template sections
□ No 'use client' added unless component genuinely needs state/effects
□ All content sourced from src/data/ — zero hardcoded content in templates
□ internalLinks.ts updated for new template types
□ Git commit: "chunk/X: [description]"
□ docs/PROJECT-STRUCTURE.md build status table updated

---

## ─── FUTURE FEATURES ────────────────────────────────────────────────────────

All stubs to leave in code as TODO comments:

```typescript
// TODO: FUTURE — replace with db.route.findMany() when Chunk 10 DB is active
// TODO: FUTURE — add next-intl translation key here (Hindi + English)
// TODO: FUTURE — wire to /api/booking when Chunk 10 is complete
// TODO: FUTURE — add Mathura, Vrindavan, Chitrakoot as new cities
// TODO: FUTURE — price calculator widget at /calculator
// TODO: FUTURE — GA4 booking funnel events via GTM-MN5JDLKG
```

Planned features:
1. Online Booking Form — BookingEnquiryForm stub in Chunk 9, API in Chunk 10
2. Admin Dashboard — Prisma models ready from Chunk 10
3. Database — Prisma + PostgreSQL for dynamic pricing
4. Multi-language — Hindi + English (next-intl)
5. Blog CMS — already scaffolded (admin + API in Chunk 1)
6. Price Calculator — /calculator route
7. More cities — Mathura, Vrindavan, Chitrakoot, Prayagraj
8. Email Notifications — Nodemailer (Chunk 10 SMTP)
9. Analytics — GA4 + GTM booking funnel events (GTM-MN5JDLKG already active)
10. Verified Reviews — Review model in Prisma schema (Chunk 10)

---

*© 2026 Tirupati Travel — Next.js Migration Project | Confidential Development Reference*
*Architecture: ChikuCabs Template Pattern | Last updated: Post-Architecture-Upgrade*


------------------------------------------------------------------------------------------------
# PATCH — Master Prompt (Doc 2)
------------------------------------------------------------------------------------------------


## 2. PlacesToVisitTemplate — register missing 3 slugs in Chunk 3

In **Chunk 3**, under the `allRoutes.ts entries to add`, add the 3 missing PlacesToVisitTemplate slugs (Doc 1 counts 6 total, only 3 are listed here):

```typescript
{ slug: 'ayodhya/places-to-visit-in-ayodhya',           template: 'PlacesToVisitTemplate', ... }
{ slug: 'lucknow/places-to-visit-in-lucknow',           template: 'PlacesToVisitTemplate', ... }
{ slug: 'vindhyachal/places-to-visit-in-vindhyachal',   template: 'PlacesToVisitTemplate', ... }
```

Also update the **Page Count Breakdown** table:

| Data File | Template | Pages | Chunk |
|---|---|---|---|
| placesToVisit.ts | PlacesToVisitTemplate | ~~6~~ → **6** ✓ (confirm all 6 slugs above are in allRoutes.ts) | 3 |

---

## 3. CityLandingTemplate data contract — add missing type

In the **Template Data Contracts** section, add the missing `CityLandingTemplate` contract (present in Doc 1, absent here):

```typescript
### CityLandingTemplate
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

---

## 4. StaticPageTemplate data contract — add missing type

In the **Template Data Contracts** section, add the missing `StaticPageTemplate` contract (present in Doc 1, absent here):

```typescript
### StaticPageTemplate
type StaticPageData = {
  pageTitle: string;
  content: string;    // HTML/MDX string
  seo: { title: string; description: string; canonical: string };
}
```

---

## 5. cityCabRoutes.ts — add to data file map

In the **Data Architecture → File Map** section, add the missing file:

```
├── cityCabRoutes.ts  ← Short intra-city cab route data
│                         Chunk: 5 (confirm template owner — CabServiceTemplate or LocalServiceTemplate)
```

---

## 6. VehicleData type — add slug field

In the **Template Data Contracts → VehicleTemplate** block, add the missing `slug` field (present in Doc 1):

```typescript
type VehicleData = {
  vehicleName: string;
  city: string;
  slug: string;       // ← add this field
  specs: { seats: number; ac: boolean; luggage: string; fuelType: string };
  pricePerKm: number;
  basePrice: number;
  images: string[];
  features: string[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; canonical: string };
}
```