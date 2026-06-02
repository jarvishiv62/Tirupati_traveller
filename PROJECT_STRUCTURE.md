# Tirupati Travel — Next.js Project Folder Structure
**tirupatitravel.in** | Next.js 14 App Router | Tailwind CSS | Mobile-First
**10 Build Chunks** | **161 Pages** | Varanasi Visual Identity | Scalable to DB + CMS

---

## ⚠️ Living Document Rules
- Update this file at the END of every chunk build.
- If a file is created, add it here. If removed, delete it here.
- The `[BUILT]` tag means the file exists and is production-ready.
- The `[STUB]` tag means the file exists but content is placeholder.
- No tag = planned, not yet created.

---

## Complete Project Folder Structure

```
tirupatitravel-nextjs/
│
├── docs/                               ← Project documentation (this folder)
│   ├── PROJECT-STRUCTURE.md            ← [BUILT] This file — update each chunk
│   ├── MASTER-PROMPT.md                ← [BUILT] Full build reference for AI tools
│   └── BRAND-DIFFERENTIATION.md        ← [BUILT] Visual identity strategy
│
├── app/                                ← All routes (App Router)
│   ├── layout.js                       ← [BUILT] ROOT: GTM + Poppins + Playfair +
│   │                                              Header + Footer + FloatingButtons
│   │                                              metadataBase, GSC verification tag
│   │                                              mandataBase: https://tirupatitravel.in
│   ├── page.js                         ← [STUB]  Homepage (/) — Chunk 2 fills sections
│   │                                             generateMetadata() exact live site match
│   │                                             LocalBusiness + TravelAgency JSON-LD
│   ├── globals.css                     ← [BUILT] Tailwind base + full component layer:
│   │                                             btn-primary/outline/secondary/gold/whatsapp
│   │                                             card-base/warm/temple/temple-inner
│   │                                             arch-frame (temple arch image clip)
│   │                                             logo-mark (temple-arch clip-path shape)
│   │                                             mandala-watermark utility
│   │                                             texture-cream (dot pattern overlay)
│   │                                             ghat-skyline-wrap helper
│   │                                             divider-sacred + divider-gold
│   │                                             gradient-* utility classes
│   │                                             text-gold-shimmer animated utility
│   ├── not-found.js                    ← [BUILT] Branded 404 — mandala watermark,
│   │                                             logo-mark, sacred dividers, quick links
│   ├── sitemap.js                      ← [BUILT] All 161 indexable URLs from SF audit:
│   │                                             homepage (1.0), city landings (0.9),
│   │                                             sub-pages (0.8), outstation (0.7),
│   │                                             static (0.6), legal (0.3)
│   │                                             UPDATE each chunk — add new pages here
│   ├── robots.js                       ← [BUILT] allow '/', disallow ['/api/','/_next/']
│   │
│   ├── about-us/page.js                ← Chunk 9
│   ├── contact-us/page.js              ← Chunk 9
│   ├── review/page.js                  ← Chunk 9 | ISR: revalidate=3600
│   ├── terms-and-conditions/page.js    ← Chunk 9 | preserve exact PHP content
│   ├── privacy-policy/page.js          ← Chunk 9 | preserve exact PHP content
│   │
│   ├── varanasi/
│   │   ├── places-to-visit-in-varanasi/page.js     ← Chunk 3 | SSG
│   │   ├── varanasi-tour-packages/page.js           ← Chunk 7
│   │   ├── varanasi-darshan-tour-package/page.js    ← Chunk 7
│   │   ├── varanasi-local-sightseeing-cab/page.js   ← Chunk 9
│   │   ├── varanasi-cab-contact-number/page.js      ← Chunk 8
│   │   ├── car-rental-varanasi/page.js              ← Chunk 7
│   │   ├── monthly-car-rentals-varanasi/page.js     ← Chunk 7
│   │   ├── call-taxi-in-varanasi/page.js            ← Chunk 5
│   │   ├── one-way-cab-in-varanasi/page.js          ← Chunk 5
│   │   ├── round-trip-cab-varanasi/page.js          ← Chunk 5
│   │   ├── full-day-taxi-in-varanasi/page.js        ← Chunk 5
│   │   ├── half-day-taxi-in-varanasi/page.js        ← Chunk 5
│   │   ├── drop-taxi-service-varanasi/page.js       ← Chunk 5
│   │   ├── tourist-cab-varanasi/page.js             ← Chunk 5
│   │   ├── corporate-cab-service-varanasi/page.js   ← Chunk 9
│   │   ├── innova-crysta-on-rent-in-varanasi/page.js← Chunk 4
│   │   ├── ertiga-car-on-rent-in-varanasi/page.js   ← Chunk 4
│   │   ├── sedan-car-in-varanasi/page.js            ← Chunk 4
│   │   ├── swift-dzire-taxi-service-in-varanasi/page.js ← Chunk 4
│   │   ├── toyota-etios-on-rent-in-varanasi/page.js ← Chunk 4
│   │   ├── luxury-tempo-traveller-varanasi/page.js  ← Chunk 7
│   │   ├── tempo-traveller-varanasi/page.js         ← Chunk 7
│   │   ├── hotel-in-varanasi/page.js                ← Chunk 8
│   │   ├── homestay-in-varanasi/page.js             ← Chunk 8
│   │   ├── guest-house-in-varanasi/page.js          ← Chunk 8
│   │   ├── dharamshala-in-varanasi/page.js          ← Chunk 8
│   │   ├── dormitory-in-varanasi/page.js            ← Chunk 8
│   │   ├── travel-agency-in-varanasi/page.js        ← Chunk 8
│   │   ├── taxi-fare-varanasi/page.js               ← Chunk 8
│   │   └── [slug]/page.js                           ← Chunk 6 | generateStaticParams
│   │                                                   68 varanasi-to-X-taxi routes
│   │
│   ├── ayodhya/
│   │   ├── ayodhya-dham/page.js                     ← Chunk 3
│   │   ├── ayodhya-tour-packages/page.js            ← Chunk 7
│   │   ├── ayodhya-darshan-tour-package/page.js     ← Chunk 7
│   │   ├── ayodhya-local-sightseeing-cab/page.js    ← Chunk 9
│   │   ├── ayodhya-cab-contact-number/page.js       ← Chunk 8
│   │   ├── ayodhya-airport-taxi/page.js             ← Chunk 9
│   │   ├── car-rental-ayodhya/page.js               ← Chunk 7
│   │   ├── monthly-car-rentals-ayodhya/page.js      ← Chunk 7
│   │   ├── call-taxi-in-ayodhya/page.js             ← Chunk 5
│   │   ├── one-way-cab-in-ayodhya/page.js           ← Chunk 5
│   │   ├── round-trip-cab-ayodhya/page.js           ← Chunk 5
│   │   ├── full-day-cab-in-ayodhya/page.js          ← Chunk 5
│   │   ├── half-day-cab-in-ayodhya/page.js          ← Chunk 5
│   │   ├── drop-taxi-service-ayodhya/page.js        ← Chunk 5
│   │   ├── outstation-cab-in-ayodhya/page.js        ← Chunk 5
│   │   ├── tourist-cab-ayodhya/page.js              ← Chunk 5
│   │   ├── corporate-cab-service-ayodhya/page.js    ← Chunk 9
│   │   ├── innova-cabs-in-ayodhya/page.js           ← Chunk 4
│   │   ├── ertiga-cab-on-rent-in-ayodhya/page.js    ← Chunk 4
│   │   ├── sedan-cab-in-ayodhya/page.js             ← Chunk 4
│   │   ├── swift-dzire-cab-in-ayodhya/page.js       ← Chunk 4
│   │   ├── toyota-etios-on-rent-in-ayodhya/page.js  ← Chunk 4
│   │   ├── luxury-tempo-traveller-ayodhya/page.js   ← Chunk 7
│   │   ├── tempo-traveller-ayodhya/page.js          ← Chunk 7
│   │   └── travel-agency-in-ayodhya/page.js         ← Chunk 8
│   │
│   ├── allahabad/
│   │   ├── places-to-visit-in-allahabad/page.js     ← Chunk 3
│   │   ├── allahabad-tour-packages/page.js          ← Chunk 7
│   │   ├── allahabad-darshan-tour-package/page.js   ← Chunk 7
│   │   ├── cab-service-in-allahabad/page.js         ← Chunk 5
│   │   ├── allahabad-cab-contact-number/page.js     ← Chunk 8
│   │   ├── car-rental-allahabad/page.js             ← Chunk 7
│   │   ├── monthly-car-rentals-allahabad/page.js    ← Chunk 7
│   │   ├── call-taxi-in-allahabad/page.js           ← Chunk 5
│   │   ├── one-way-cab-in-allahabad/page.js         ← Chunk 5
│   │   ├── round-trip-cab-allahabad/page.js         ← Chunk 5
│   │   ├── full-day-cab-in-allahabad/page.js        ← Chunk 5
│   │   ├── half-day-cab-in-allahabad/page.js        ← Chunk 5
│   │   ├── drop-taxi-service-allahabad/page.js      ← Chunk 5
│   │   ├── corporate-cab-service-allahabad/page.js  ← Chunk 9
│   │   ├── innova-cabs-in-allahabad/page.js         ← Chunk 4
│   │   ├── ertiga-cab-on-rent-in-allahabad/page.js  ← Chunk 4
│   │   ├── sedan-cab-in-allahabad/page.js           ← Chunk 4
│   │   ├── swift-dzire-cab-in-allahabad/page.js     ← Chunk 4
│   │   ├── toyota-etios-on-rent-in-allahabad/page.js← Chunk 4
│   │   ├── luxury-tempo-traveller-allahabad/page.js ← Chunk 7
│   │   ├── travel-agency-in-allahabad/page.js       ← Chunk 8
│   │   └── taxi-fare-allahabad/page.js              ← Chunk 8
│   │
│   ├── gaya/
│   │   └── places-to-visit-in-gaya/page.js          ← Chunk 3
│   │
│   ├── vindhyachal/
│   │   └── vindhyachal-mandir/page.js               ← Chunk 3
│   │
│   ├── lucknow/
│   │   ├── taxi-in-lucknow/page.js                  ← Chunk 3
│   │   ├── innova-cab-in-lucknow/page.js            ← Chunk 4
│   │   ├── tempo-traveller-in-lucknow/page.js       ← Chunk 7
│   │   ├── maharaja-tempo-traveller-in-lucknow/page.js ← Chunk 7
│   │   ├── urbania-tempo-traveller-in-lucknow/page.js  ← Chunk 7
│   │   ├── car-rental-in-lucknow/page.js            ← Chunk 7
│   │   ├── outstation-cab-in-lucknow/page.js        ← Chunk 5
│   │   └── airport-taxi-in-lucknow/page.js          ← Chunk 9
│   │
│   └── api/                                         ← Chunk 10
│       ├── contact/route.js       ← POST → Nodemailer/cPanel SMTP
│       ├── booking/route.js       ← POST → WhatsApp deep link + confirmation
│       └── reviews/route.js       ← GET  → reviews for ISR page
│
│
├── components/
│   │
│   ├── layout/                         ← [BUILT] — All 4 layout components done
│   │   ├── Header.jsx                  ← [BUILT] Saffron gradient top bar +
│   │   │                                         Diya SVG icon + tagline
│   │   │                                         Temple-arch logo mark (clip-path)
│   │   │                                         Mandala watermark (opacity 0.06)
│   │   │                                         Gold accent line beneath header
│   │   │                                         All 6 city nav links
│   │   │                                         Always white + shadow-nav
│   │   │                                         Mobile: phone icon + hamburger
│   │   ├── Footer.jsx                  ← [BUILT] Ghat skyline SVG (bookend #1)
│   │   │                                         Two mandala watermarks (opacity 0.03-0.04)
│   │   │                                         Lotus divider under logo
│   │   │                                         Gold accent section headers
│   │   │                                         Ganga wave divider above bottom bar
│   │   │                                         Google Maps embed
│   │   │                                         All social icons (Pinterest custom SVG)
│   │   ├── MobileMenu.jsx              ← [BUILT] Full-screen slide drawer
│   │   │                                         Cities / Pages / Services sections
│   │   │                                         WhatsApp + Call CTAs in drawer footer
│   │   └── FloatingButtons.jsx         ← [BUILT] WhatsApp (green, slide-label on hover)
│   │                                             Call (saffron, slide-label on hover)
│   │                                             Fixed bottom-right, z-50
│   │
│   ├── home/                           ← Chunk 2 — not yet built
│   │   ├── HeroSection.jsx             ← Full-viewport | ghat-skyline.svg as layer
│   │   │                                  Rotating text: Memorable/Peaceful/Spiritual
│   │   │                                  gradient-hero overlay (navy→saffron)
│   │   │                                  Lotus divider at section bottom
│   │   ├── DestinationCards.jsx        ← 5 city cards using TempleArchCard
│   │   │                                  cream section bg | 2-col mobile / 4-col desktop
│   │   ├── TourPackageCards.jsx        ← 5 tour cards using TempleArchCard
│   │   │                                  badge-gold for duration (1N 2D)
│   │   ├── CTABanner.jsx               ← gradient-sacred (navy→saffron) full width
│   │   │                                  Mandala watermark behind text
│   │   ├── ThemeExplorer.jsx           ← 6 icon tiles | cream bg | 3-col mobile
│   │   │                                  SVG theme icons from /public/svg/icons/
│   │   ├── AboutSection.jsx            ← Left image | Right text | white bg
│   │   ├── WhyChooseUs.jsx             ← 3 feature cards | cream bg
│   │   └── FAQSection.jsx             ← Accordion ('use client') | FAQPage JSON-LD
│   │                                     Wave divider above section
│   │
│   ├── city/                           ← Chunk 3 — not yet built
│   │   ├── CityPageLayout.jsx          ← Master wrapper: receives city data object
│   │   │                                  Renders all 5 city sections in order
│   │   ├── CityHero.jsx                ← H1 + aliases | ghat-skyline.svg overlay
│   │   │                                  Scroll-down indicator
│   │   ├── PlacesGrid.jsx              ← TempleArchCard grid (2/3/4 col)
│   │   │                                  cream bg | Lotus divider above
│   │   ├── ServicesIcons.jsx           ← 3-col icon grid | white bg
│   │   ├── VehiclePricingCards.jsx     ← VehicleCard list | cream bg
│   │   │                                  Wave divider above
│   │   └── OutstationLinks.jsx         ← Route link grid | Mandala divider above
│   │
│   ├── vehicle/                        ← Chunk 4
│   │   ├── VehiclePageLayout.jsx
│   │   ├── VehicleHero.jsx             ← TempleArchCard style | price badge-gold
│   │   ├── SpecsCard.jsx               ← card-warm | border-border-warm
│   │   └── RelatedVehicles.jsx         ← Horizontal scroll on mobile
│   │
│   ├── service/                        ← Chunk 5
│   │   ├── CabServicePageLayout.jsx
│   │   ├── HowItWorks.jsx              ← 3-step | saffron numbered circles
│   │   └── PricingTable.jsx            ← card-warm table
│   │
│   ├── outstation/                     ← Chunk 6
│   │   ├── OutstationTaxiPage.jsx
│   │   ├── RouteHighlights.jsx         ← Distance/time badge-accent cards
│   │   └── VehicleComparison.jsx       ← Side-by-side table | card-warm
│   │
│   ├── shared/                         ← Chunk 1 partial, rest in Chunk 2+
│   │   ├── SacredDivider.jsx           ← [BUILT] 4 variants:
│   │   │                                   lotus   → after hero, before first section
│   │   │                                   wave    → between mid-page sections
│   │   │                                   mandala → before CTAs
│   │   │                                   gold-line → minimal inline use
│   │   │                                  Props: variant, size (sm/md/lg), className
│   │   ├── TempleArchCard.jsx          ← [BUILT] Signature arch-top card:
│   │   │                                   arch-frame image clip | lotus ornament
│   │   │                                   gold arch accent line at top
│   │   │                                   corner saffron triangle decorations
│   │   │                                   Props: image, title, subtitle, badge,
│   │   │                                          badgeColor, footer, imageHeight,
│   │   │                                          compact, priority, className
│   │   ├── VehicleCard.jsx             ← Chunk 3 — card-warm + specs grid
│   │   │                                  Props: vehicle{}, showCTA, compact
│   │   ├── PlaceCard.jsx               ← Chunk 3 — TempleArchCard wrapper
│   │   │                                  Props: place{name,image,description}, priority
│   │   ├── TourCard.jsx                ← Chunk 2 — TempleArchCard + badge-gold
│   │   │                                  Props: tour{city,image,nights,days,price}
│   │   ├── CTAButtons.jsx              ← Chunk 2 — Call + WhatsApp pair
│   │   │                                  Props: phone, message, variant
│   │   ├── SectionHeader.jsx           ← Chunk 2 — title + subtitle + divider-gold
│   │   │                                  Props: title, subtitle, align, divider
│   │   ├── Breadcrumb.jsx              ← Chunk 3 — auto from pathname
│   │   ├── BookingEnquiryForm.jsx      ← Chunk 9 | 'use client'
│   │   ├── StarRating.jsx              ← Chunk 9
│   │   └── PricingTable.jsx            ← Chunk 5
│   │
│   └── ui/                             ← Chunk 2+
│       ├── Button.jsx                  ← variant: primary|outline|ghost|gold|whatsapp
│       │                                  size: sm|md|lg | maps to globals.css btn-*
│       ├── Badge.jsx                   ← badge-primary|accent|gold|success
│       ├── Accordion.jsx               ← 'use client' | FAQSection, Terms
│       ├── ImageCard.jsx               ← Next.js Image + gradient-card overlay
│       └── Skeleton.jsx                ← Loading state for ISR pages
│
│
├── data/                               ← [BUILT] All stubs ready — fill content each Chunk
│   ├── cities/
│   │   ├── varanasi.js                 ← [BUILT] Full: 12 places, 10 vehicles,
│   │   │                                          outstation[], services[], seo{}
│   │   ├── ayodhya.js                  ← [BUILT] 6 places, vehicles, seo{}
│   │   ├── allahabad.js                ← [BUILT] 5 places, vehicles, seo{}
│   │   ├── gaya.js                     ← [BUILT] 5 places, vehicles, seo{}
│   │   ├── vindhyachal.js              ← [BUILT] 4 places, vehicles, seo{}
│   │   └── lucknow.js                  ← [BUILT] 5 places, vehicles, seo{}
│   ├── vehicles.js                     ← [BUILT] 11 vehicles | pricing verified from live site
│   │                                             getVehiclesByCity(), getVehicleById()
│   ├── outstation-routes.js            ← [BUILT] All 68 routes confirmed from SF crawl
│   │                                             getRouteBySlug(), getAllSlugs()
│   ├── tour-packages.js                ← [STUB]  4 packages — fill itinerary in Chunk 7
│   ├── accommodations.js               ← [STUB]  5 types — fill details in Chunk 8
│   ├── faqs.js                         ← [STUB]  4 homepage FAQs — expand Chunk 2
│   ├── themes.js                       ← [STUB]  6 themes — add icon paths Chunk 2
│   └── nav.js                          ← [BUILT] navLinks.cities (6), navLinks.services (6)
│                                                  footerLinks.cities/services/outstation/legal
│                                                  socialLinks (Facebook/Instagram/Twitter/
│                                                              LinkedIn/YouTube)
│                                                  Pinterest handled separately (no lucide icon)
│
│
├── lib/
│   ├── seo.js                          ← [BUILT] buildMetadata({title,description,canonical,
│   │                                              ogImage,ogType,noIndex,extra})
│   │                                             buildCityMetadata({city,slug,title,...})
│   │                                             buildOutstationMetadata({origin,dest,slug})
│   │                                             Warns in dev if required fields missing
│   ├── utils.js                        ← [BUILT] cn() — clsx + tailwind-merge
│   │                                             formatPrice(amount, perKm)
│   │                                             formatPhone(phone, withCountryCode)
│   │                                             slugToTitle(slug)
│   │                                             capitalize(str)
│   │                                             buildWALink(message)
│   │                                             truncate(str, n)
│   │                                             extractDestination(slug)
│   └── db.js                           ← [STUB]  PrismaClient singleton — uncomment Chunk 10
│
│
├── public/
│   ├── assets/images/                  ← Copy from PHP /assets/images/ (manual step)
│   │   └── [all existing site images]  ← varanasi-tour-package.webp, logo.jpg, etc.
│   ├── images/                         ← Copy from PHP /images/ (fixes 403 errors)
│   ├── fonts/                          ← Reserved (using next/font/google — may be empty)
│   └── svg/                            ← [BUILT] Varanasi visual identity SVGs
│       ├── ghats/
│       │   └── ghat-skyline.svg        ← [BUILT] Detailed Varanasi skyline silhouette
│       │                                          Ghats, shikhars, kalash finials, boats
│       │                                          Used: Hero section + Footer (bookends)
│       │                                          Color: currentColor | opacity layered
│       ├── mandalas/
│       │   └── corner-mandala.svg      ← [BUILT] Full 8-petal concentric mandala
│       │                                          Used: Header watermark (opacity 0.06)
│       │                                               Footer watermarks (opacity 0.03-0.04)
│       │                                               not-found.js (opacity 0.07)
│       │                                          Planned: Hero background, CTABanner
│       ├── dividers/
│       │   ├── lotus-divider.svg       ← [BUILT] Lotus petals + gold diamonds + lines
│       │   │                                      Use: after hero, before first section
│       │   ├── ganga-wave.svg          ← [BUILT] Double sine wave (saffron + gold)
│       │   │                                      Use: between mid-page sections, footer
│       │   └── mandala-divider.svg     ← [BUILT] 8-point mandala + dot cluster + lines
│       │                                          Use: before CTA sections
│       ├── icons/                      ← Chunk 2 — custom sacred icon set
│       │   ├── bell.svg                ← Temple bell (for ThemeExplorer / services)
│       │   ├── lotus.svg
│       │   ├── kalash.svg
│       │   ├── diya.svg
│       │   ├── route.svg               ← Sacred route/pilgrimage marker
│       │   └── driver.svg
│       ├── temples/                    ← Chunk 2 — temple geometry elements
│       │   ├── temple-arch.svg
│       │   └── shikhar.svg
│       └── patterns/                   ← Chunk 2 — texture patterns
│           └── sandstone-pattern.svg   ← Used in texture-cream CSS utility
│
│
├── prisma/
│   └── schema.prisma                   ← [STUB]  All models commented out — activate Chunk 10
│                                                  Models: Booking, Review, Enquiry
│
├── next.config.js                      ← [BUILT] trailingSlash: false
│                                                  image domains: tirupatitravel.in
│                                                  Security headers (X-Content-Type etc.)
│                                                  Redirects: index.php, home.php, *.php catch-all
│                                                  Long-cache for /_next/static/
├── tailwind.config.js                  ← [BUILT] See DESIGN SYSTEM section in MASTER-PROMPT.md
├── postcss.config.js                   ← [BUILT]
├── package.json                        ← [BUILT] Node 20+ | next@14.2.5 | lucide-react@0.383
├── .gitignore                          ← [BUILT]
└── env.local.example                   ← [BUILT] DATABASE_URL, SMTP_* stubs — copy to .env.local
```

---

## Build Chunk Status

| # | Chunk | Status | Files Done | Pages Done |
|---|---|---|---|---|
| 1 | Setup & Design Foundation | ✅ COMPLETE | 38 files | 2 (homepage stub + 404) |
| 2 | Homepage | ⏳ NEXT | 0 / 8 components | 0 / 1 |
| 3 | City Landing Pages | ⏳ | 0 / 6 components | 0 / 6 |
| 4 | Vehicle Pages | ⏳ | 0 / 4 components | 0 / 16 |
| 5 | Cab Service Pages | ⏳ | 0 / 3 components | 0 / 24 |
| 6 | Outstation Routes | ⏳ | 0 / 3 components | 0 / 68 |
| 7 | Tour Packages + Tempo + Car Rental | ⏳ | 0 / 3 components | 0 / 21 |
| 8 | Accommodation + Fare + Agency | ⏳ | 0 / 2 components | 0 / 19 |
| 9 | Static + Specialty Pages | ⏳ | 0 / 2 components | 0 / 13 |
| 10 | API + Backend | ⏳ | 0 / 3 routes | 0 / 3 |
| **Total** | | | **38 / ~80** | **2 / 161** |

---

## Key Architecture Decisions (Updated)

### Background Color System
- **Cream (`#FDF8F0`)** — hero sections, alternating content sections, card grids on cream bg
- **White (`#FFFFFF`)** — individual cards, forms, modals — never a full section bg
- **Navy (`#1A237E`)** — footer, dark CTA banners, header top bar gradient base
- Rule: sections alternate cream → white → cream. Never two cream sections adjacent.

### Varanasi Visual Identity — 3 Core Elements (Chunk 1 built)
1. **Ghat Skyline SVG** — appears in Hero (background layer) + Footer (top element). Bookends every page.
2. **Sacred Dividers** — 3 variants used contextually (lotus after hero, wave between sections, mandala before CTAs).
3. **Temple Arch Cards** — `TempleArchCard` replaces all standard `card-base` for content cards (cities, vehicles, packages, places).

### What was NOT built from BRAND-DIFFERENTIATION.md (intentionally deferred)
- Journey Line Graphics → Chunk 6 (outstation route pages)
- Premium Texture Library (sandstone/parchment) → Chunk 2 hero only, 1-2% opacity
- Custom Icon Library (bell, lotus, diya, kalash) → Chunk 2 ThemeExplorer
- Temple geometry for modals → Chunk 9+ (booking form modal)
- Signature Hero Illustration → Chunk 2 HeroSection

### SacredDivider Usage Rule
```
After hero → lotus
Between content sections → wave
Before CTA / above footer → mandala
Inside cards or minimal use → gold-line
```

### TempleArchCard Usage Rule
Use for: City cards, Vehicle cards, Package cards, Place cards, Tour cards.
Do NOT use for: Pricing tables, Spec cards, Legal content, Form containers — use `card-warm` there.

### `use client` Rule (strict)
Only these component types get `use client`:
- `Accordion.jsx` — FAQ open/close
- `MobileMenu.jsx` — isOpen state
- `Header.jsx` — scroll + mobile state
- `BookingEnquiryForm.jsx` — form state
- `FloatingButtons.jsx` — none needed (static links) — consider converting to Server Component
- Everything else = Server Component

### Data → DB migration path
Every `data/*.js` file mirrors a future Prisma model. When DB is added (Chunk 10), replace:
```js
// Before (Chunk 1-9):
import { vehicles } from '@/data/vehicles'

// After (Chunk 10+):
const vehicles = await db.vehicle.findMany({ where: { available: city } })
```

---

## Chunk 1 — Quick Start Commands
```bash
# 1. Install
cd tirupatitravel-nextjs
npm install

# 2. Copy assets from PHP site (manual)
# Copy /assets/images/ → /public/assets/images/
# Copy /images/ → /public/images/

# 3. Create .env.local
cp env.local.example .env.local
# Edit .env.local with your values

# 4. Run dev server
npm run dev
# → http://localhost:3000

# 5. Build check (run before every commit)
npm run build
```

---

## Chunk 2 — What To Build Next

**Branch:** `git checkout -b chunk/2-homepage`

**Files to create:**
```
app/page.js                    ← Replace stub with all 8 sections
components/home/
  HeroSection.jsx              ← Uses ghat-skyline.svg + gradient-hero overlay
  DestinationCards.jsx         ← 5 × TempleArchCard | cream bg
  TourPackageCards.jsx         ← 5 × TempleArchCard + badge-gold | white bg
  CTABanner.jsx                ← gradient-sacred | mandala watermark
  ThemeExplorer.jsx            ← 6 tiles | cream bg | custom SVG icons
  AboutSection.jsx             ← Left/right split | white bg
  WhyChooseUs.jsx              ← 3 cards | cream bg
  FAQSection.jsx               ← Accordion | FAQPage JSON-LD | use client
components/shared/
  CTAButtons.jsx
  SectionHeader.jsx
  TourCard.jsx
components/ui/
  Button.jsx
  Badge.jsx
  Accordion.jsx
public/svg/icons/              ← bell.svg, lotus.svg, kalash.svg, diya.svg, route.svg
public/svg/patterns/           ← sandstone-pattern.svg
data/faqs.js                   ← Expand to 6 FAQs with full answers
data/themes.js                 ← Add icon paths
data/tour-packages.js          ← Verify content matches live site
```

**Section → Divider mapping:**
```
HeroSection → <SacredDivider variant="lotus" />
DestinationCards → <SacredDivider variant="wave" />
TourPackageCards → <SacredDivider variant="mandala" />
CTABanner → (no divider — full bleed)
ThemeExplorer → <SacredDivider variant="wave" />
AboutSection → <SacredDivider variant="gold-line" />
WhyChooseUs → <SacredDivider variant="lotus" />
FAQSection → (last section — footer follows)
```

---

*© 2026 Tirupati Travel — Next.js Migration Project | Last updated: Chunk 1 complete*