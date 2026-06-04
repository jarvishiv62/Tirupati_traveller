// src/data/allRoutes.ts
// ★ MASTER INDEX — every page slug, template, dataKey, seo
// Auto-included in sitemap.ts and generateStaticParams()

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

export type RouteEntry = {
  slug: string;
  template: TemplateName;
  dataKey: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
};

const BASE = 'https://tirupatitravel.in';

export const allRoutes: RouteEntry[] = [

  // ── CITY LANDING PAGES ────────────────────────────────────────────────────
  {
    slug: 'varanasi',
    template: 'CityLandingTemplate',
    dataKey: 'cityLanding.varanasi',
    seo: {
      title: 'Taxi Service in Varanasi | Cab Booking Varanasi | Tirupati Travel',
      description: 'Best cab service in Varanasi. Book outstation taxi, airport transfer, local sightseeing & tour packages. Call 8726124680.',
      canonical: `${BASE}/varanasi`,
    },
  },
  {
    slug: 'ayodhya',
    template: 'CityLandingTemplate',
    dataKey: 'cityLanding.ayodhya',
    seo: {
      title: 'Taxi Service in Ayodhya | Cab Booking Ayodhya | Tirupati Travel',
      description: 'Best cab service in Ayodhya. Book outstation taxi, local sightseeing & darshan packages. Call 8726124680.',
      canonical: `${BASE}/ayodhya`,
    },
  },
  {
    slug: 'allahabad',
    template: 'CityLandingTemplate',
    dataKey: 'cityLanding.allahabad',
    seo: {
      title: 'Taxi Service in Allahabad Prayagraj | Cab Booking | Tirupati Travel',
      description: 'Best cab service in Allahabad/Prayagraj. Book outstation taxi, Sangam tours & local sightseeing. Call 8726124680.',
      canonical: `${BASE}/allahabad`,
    },
  },
  {
    slug: 'lucknow',
    template: 'CityLandingTemplate',
    dataKey: 'cityLanding.lucknow',
    seo: {
      title: 'Taxi Service in Lucknow | Cab Booking Lucknow | Tirupati Travel',
      description: 'Best cab service in Lucknow. Book outstation taxi, airport transfer & local sightseeing. Call 8726124680.',
      canonical: `${BASE}/lucknow`,
    },
  },
  {
    slug: 'gaya',
    template: 'CityLandingTemplate',
    dataKey: 'cityLanding.gaya',
    seo: {
      title: 'Taxi Service in Gaya | Cab Booking Gaya | Tirupati Travel',
      description: 'Best cab service in Gaya & Bodh Gaya. Book outstation taxi & pilgrimage tours. Call 8726124680.',
      canonical: `${BASE}/gaya`,
    },
  },
  {
    slug: 'vindhyachal',
    template: 'CityLandingTemplate',
    dataKey: 'cityLanding.vindhyachal',
    seo: {
      title: 'Taxi Service in Vindhyachal | Cab Booking | Tirupati Travel',
      description: 'Best cab service in Vindhyachal. Book taxi for Vindhyachal Mandir darshan & outstation travel. Call 8726124680.',
      canonical: `${BASE}/vindhyachal`,
    },
  },
  {
    slug: 'lucknow/taxi-in-lucknow',
    template: 'CityLandingTemplate',
    dataKey: 'cityLanding.lucknowTaxi',
    seo: {
      title: 'Taxi in Lucknow | Cab Service Lucknow | Tirupati Travel',
      description: 'Book taxi in Lucknow for outstation, local & airport transfers. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/lucknow/taxi-in-lucknow`,
    },
  },

  // ── VARANASI OUTSTATION ROUTES (68) ──────────────────────────────────────
  {
    slug: 'varanasi/varanasi-to-allahabad-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToAllahabad',
    seo: {
      title: 'Varanasi to Allahabad Taxi | Cab Booking Online | Tirupati Travel',
      description: 'Book Varanasi to Allahabad taxi. 125 km, ~3 hrs. Sedan ₹2500, Innova ₹3800. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-allahabad-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-ambikapur-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToAmbikapur',
    seo: {
      title: 'Varanasi to Ambikapur Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Ambikapur taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-ambikapur-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-amethi-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToAmethi',
    seo: {
      title: 'Varanasi to Amethi Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Amethi taxi. Best rates, AC cabs, professional drivers. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-amethi-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-anpara-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToAnpara',
    seo: {
      title: 'Varanasi to Anpara Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Anpara taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-anpara-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-arrah-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToArrah',
    seo: {
      title: 'Varanasi to Arrah Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Arrah taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-arrah-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-ayodhya-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToAyodhya',
    seo: {
      title: 'Varanasi to Ayodhya Taxi | Cab Booking Online | Tirupati Travel',
      description: 'Book Varanasi to Ayodhya taxi. 200 km, ~4 hrs. Sedan ₹3000, Innova ₹4500. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-ayodhya-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-azamgarh-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToAzamgarh',
    seo: {
      title: 'Varanasi to Azamgarh Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Azamgarh taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-azamgarh-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-babatpur-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToBabatpur',
    seo: {
      title: 'Varanasi to Babatpur Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Babatpur taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-babatpur-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-badlapur-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToBadlapur',
    seo: {
      title: 'Varanasi to Badlapur Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Badlapur taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-badlapur-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-bagodar-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToBagodar',
    seo: {
      title: 'Varanasi to Bagodar Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Bagodar taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-bagodar-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-ballia-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToBallia',
    seo: {
      title: 'Varanasi to Ballia Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Ballia taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-ballia-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-bareilly-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToBareilly',
    seo: {
      title: 'Varanasi to Bareilly Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Bareilly taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-bareilly-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-baskhari-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToBaskhari',
    seo: {
      title: 'Varanasi to Baskhari Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Baskhari taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-baskhari-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-basti-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToBasti',
    seo: {
      title: 'Varanasi to Basti Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Basti taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-basti-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-belha-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToBelha',
    seo: {
      title: 'Varanasi to Belha Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Belha taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-belha-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-belthara-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToBelthara',
    seo: {
      title: 'Varanasi to Belthara Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Belthara taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-belthara-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-bettiah-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToBettiah',
    seo: {
      title: 'Varanasi to Bettiah Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Bettiah taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-bettiah-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-bhabua-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToBhabua',
    seo: {
      title: 'Varanasi to Bhabua Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Bhabua taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-bhabua-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-bhadohi-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToBhadohi',
    seo: {
      title: 'Varanasi to Bhadohi Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Bhadohi taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-bhadohi-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-bikramganj-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToBikramganj',
    seo: {
      title: 'Varanasi to Bikramganj Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Bikramganj taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-bikramganj-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-buxur-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToBuxur',
    seo: {
      title: 'Varanasi to Buxur Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Buxur taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-buxur-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-chandauli-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToChandauli',
    seo: {
      title: 'Varanasi to Chandauli Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Chandauli taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-chandauli-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-chhapra-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToChhapra',
    seo: {
      title: 'Varanasi to Chhapra Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Chhapra taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-chhapra-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-chitrakoot-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToChitrakoot',
    seo: {
      title: 'Varanasi to Chitrakoot Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Chitrakoot taxi. Pilgrimage route. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-chitrakoot-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-chopan-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToChopan',
    seo: {
      title: 'Varanasi to Chopan Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Chopan taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-chopan-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-chunar-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToChunар',
    seo: {
      title: 'Varanasi to Chunar Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Chunar taxi. Fort visit route. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-chunar-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-daltonganj-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToDaltonganj',
    seo: {
      title: 'Varanasi to Daltonganj Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Daltonganj taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-daltonganj-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-dehri-on-sone-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToDehriOnSone',
    seo: {
      title: 'Varanasi to Dehri On Sone Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Dehri On Sone taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-dehri-on-sone-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-deoria-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToDeoria',
    seo: {
      title: 'Varanasi to Deoria Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Deoria taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-deoria-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-domariyaganj-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToDomariyaganj',
    seo: {
      title: 'Varanasi to Domariyaganj Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Domariyaganj taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-domariyaganj-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-faizabad-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToFaizabad',
    seo: {
      title: 'Varanasi to Faizabad Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Faizabad taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-faizabad-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-fatehpur-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToFatehpur',
    seo: {
      title: 'Varanasi to Fatehpur Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Fatehpur taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-fatehpur-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-gaya-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToGaya',
    seo: {
      title: 'Varanasi to Gaya Taxi | Cab Booking Online | Tirupati Travel',
      description: 'Book Varanasi to Gaya taxi. 240 km, ~5 hrs. Sedan ₹3500, Innova ₹5000. Pilgrimage route. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-gaya-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-ghazipur-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToGhazipur',
    seo: {
      title: 'Varanasi to Ghazipur Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Ghazipur taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-ghazipur-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-gorakhpur-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToGorakhpur',
    seo: {
      title: 'Varanasi to Gorakhpur Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Gorakhpur taxi. 270 km, ~5 hrs. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-gorakhpur-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-indore-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToIndore',
    seo: {
      title: 'Varanasi to Indore Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Indore taxi. Long route, comfortable AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-indore-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-jabalpur-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToJabalpur',
    seo: {
      title: 'Varanasi to Jabalpur Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Jabalpur taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-jabalpur-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-jaisinghnagar-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToJaisinghnagar',
    seo: {
      title: 'Varanasi to Jaisinghnagar Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Jaisinghnagar taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-jaisinghnagar-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-jamshedpur-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToJamshedpur',
    seo: {
      title: 'Varanasi to Jamshedpur Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Jamshedpur taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-jamshedpur-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-jaunpur-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToJaunpur',
    seo: {
      title: 'Varanasi to Jaunpur Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Jaunpur taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-jaunpur-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-jiyanpur-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToJiyanpur',
    seo: {
      title: 'Varanasi to Jiyanpur Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Jiyanpur taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-jiyanpur-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-kanpur-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToKanpur',
    seo: {
      title: 'Varanasi to Kanpur Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Kanpur taxi. 320 km, ~6 hrs. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-kanpur-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-kochas-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToKochas',
    seo: {
      title: 'Varanasi to Kochas Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Kochas taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-kochas-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-kudra-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToKudra',
    seo: {
      title: 'Varanasi to Kudra Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Kudra taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-kudra-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-kunda-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToKunda',
    seo: {
      title: 'Varanasi to Kunda Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Kunda taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-kunda-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-kushinagar-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToKushinagar',
    seo: {
      title: 'Varanasi to Kushinagar Taxi | Buddhist Circuit Cab | Tirupati Travel',
      description: 'Book Varanasi to Kushinagar taxi. Buddhist pilgrimage route. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-kushinagar-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-lucknow-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToLucknow',
    seo: {
      title: 'Varanasi to Lucknow Taxi | Cab Booking Online | Tirupati Travel',
      description: 'Book Varanasi to Lucknow taxi. 320 km, ~6 hrs. Sedan ₹4500, Innova ₹6500. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-lucknow-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-maghar-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToMaghar',
    seo: {
      title: 'Varanasi to Maghar Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Maghar taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-maghar-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-maihar-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToMaihar',
    seo: {
      title: 'Varanasi to Maihar Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Maihar taxi. Maihar Devi pilgrimage route. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-maihar-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-mankapur-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToMankapur',
    seo: {
      title: 'Varanasi to Mankapur Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Mankapur taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-mankapur-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-mau-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToMau',
    seo: {
      title: 'Varanasi to Mau Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Mau taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-mau-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-mohania-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToMohania',
    seo: {
      title: 'Varanasi to Mohania Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Mohania taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-mohania-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-motihari-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToMotihari',
    seo: {
      title: 'Varanasi to Motihari Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Motihari taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-motihari-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-mughalsarai-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToMughalsarai',
    seo: {
      title: 'Varanasi to Mughalsarai Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Mughalsarai taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-mughalsarai-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-muhammadabad-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToMuhammadabad',
    seo: {
      title: 'Varanasi to Muhammadabad Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Muhammadabad taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-muhammadabad-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-muzaffarpur-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToMuzaffarpur',
    seo: {
      title: 'Varanasi to Muzaffarpur Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Muzaffarpur taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-muzaffarpur-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-naimisharanya-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToNaimisharanya',
    seo: {
      title: 'Varanasi to Naimisharanya Taxi | Pilgrimage Cab | Tirupati Travel',
      description: 'Book Varanasi to Naimisharanya taxi. Sacred pilgrimage route. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-naimisharanya-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-obra-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToObra',
    seo: {
      title: 'Varanasi to Obra Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Obra taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-obra-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-padrauna-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToPadrauna',
    seo: {
      title: 'Varanasi to Padrauna Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Padrauna taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-padrauna-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-patna-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToPatna',
    seo: {
      title: 'Varanasi to Patna Taxi | Cab Booking Online | Tirupati Travel',
      description: 'Book Varanasi to Patna taxi. 290 km, ~6 hrs. Sedan ₹4000, Innova ₹5800. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-patna-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-pratapgarh-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToPratapgarh',
    seo: {
      title: 'Varanasi to Pratapgarh Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Pratapgarh taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-pratapgarh-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-raibareli-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToRaibareli',
    seo: {
      title: 'Varanasi to Raibareli Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Raibareli taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-raibareli-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-robertsganj-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToRobertsganj',
    seo: {
      title: 'Varanasi to Robertsganj Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Robertsganj taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-robertsganj-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-saidpur-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToSaidpur',
    seo: {
      title: 'Varanasi to Saidpur Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Saidpur taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-saidpur-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-sarnath-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToSarnath',
    seo: {
      title: 'Varanasi to Sarnath Taxi | Buddhist Circuit Cab | Tirupati Travel',
      description: 'Book Varanasi to Sarnath taxi. Buddhist pilgrimage, 13 km from Varanasi. Best rates. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-sarnath-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-shahganj-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToShahganj',
    seo: {
      title: 'Varanasi to Shahganj Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Shahganj taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-shahganj-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-sonbhadra-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToSonbhadra',
    seo: {
      title: 'Varanasi to Sonbhadra Taxi | Cab Booking | Tirupati Travel',
      description: 'Book Varanasi to Sonbhadra taxi. Best rates, AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-sonbhadra-taxi`,
    },
  },
  {
    slug: 'varanasi/varanasi-to-vindhyachal-taxi',
    template: 'OutstationRouteTemplate',
    dataKey: 'varanasiRoutes.varanasiToVindhyachal',
    seo: {
      title: 'Varanasi to Vindhyachal Taxi | Devi Darshan Cab | Tirupati Travel',
      description: 'Book Varanasi to Vindhyachal taxi. Sacred Vindhyavasini Devi route. 70 km. Best rates. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-to-vindhyachal-taxi`,
    },
  },

  // ── VEHICLE PAGES ─────────────────────────────────────────────────────────
  // Innova
  {
    slug: 'varanasi/innova-crysta-on-rent-in-varanasi',
    template: 'VehicleTemplate',
    dataKey: 'vehicles.varanasiInnova',
    seo: {
      title: 'Innova Crysta on Rent in Varanasi | Toyota Innova Cab | Tirupati Travel',
      description: 'Book Toyota Innova Crysta on rent in Varanasi. 7-seater AC cab, ₹11/km. Airport, outstation, local. Call 8726124680.',
      canonical: `${BASE}/varanasi/innova-crysta-on-rent-in-varanasi`,
    },
  },
  {
    slug: 'ayodhya/innova-cabs-in-ayodhya',
    template: 'VehicleTemplate',
    dataKey: 'vehicles.ayodhyaInnova',
    seo: {
      title: 'Innova Cabs in Ayodhya | Toyota Innova Hire | Tirupati Travel',
      description: 'Book Innova cabs in Ayodhya. 7-seater AC cab for pilgrimage & outstation. Call 8726124680.',
      canonical: `${BASE}/ayodhya/innova-cabs-in-ayodhya`,
    },
  },
  {
    slug: 'allahabad/innova-cabs-in-allahabad',
    template: 'VehicleTemplate',
    dataKey: 'vehicles.allahabadInnova',
    seo: {
      title: 'Innova Cabs in Allahabad | Toyota Innova Hire | Tirupati Travel',
      description: 'Book Innova cabs in Allahabad/Prayagraj. 7-seater AC cab. Call 8726124680.',
      canonical: `${BASE}/allahabad/innova-cabs-in-allahabad`,
    },
  },
  {
    slug: 'lucknow/innova-cab-in-lucknow',
    template: 'VehicleTemplate',
    dataKey: 'vehicles.lucknowInnova',
    seo: {
      title: 'Innova Cab in Lucknow | Toyota Innova Hire | Tirupati Travel',
      description: 'Book Innova cab in Lucknow. 7-seater AC cab for airport & outstation. Call 8726124680.',
      canonical: `${BASE}/lucknow/innova-cab-in-lucknow`,
    },
  },
  // Ertiga
  {
    slug: 'varanasi/ertiga-car-on-rent-in-varanasi',
    template: 'VehicleTemplate',
    dataKey: 'vehicles.varanasiErtiga',
    seo: {
      title: 'Ertiga Car on Rent in Varanasi | Maruti Ertiga Cab | Tirupati Travel',
      description: 'Book Ertiga car on rent in Varanasi. 6-seater AC cab, ₹11/km. Outstation & local. Call 8726124680.',
      canonical: `${BASE}/varanasi/ertiga-car-on-rent-in-varanasi`,
    },
  },
  {
    slug: 'ayodhya/ertiga-cab-on-rent-in-ayodhya',
    template: 'VehicleTemplate',
    dataKey: 'vehicles.ayodhyaErtiga',
    seo: {
      title: 'Ertiga Cab on Rent in Ayodhya | Maruti Ertiga Hire | Tirupati Travel',
      description: 'Book Ertiga cab on rent in Ayodhya. 6-seater AC cab. Call 8726124680.',
      canonical: `${BASE}/ayodhya/ertiga-cab-on-rent-in-ayodhya`,
    },
  },
  {
    slug: 'allahabad/ertiga-cab-on-rent-in-allahabad',
    template: 'VehicleTemplate',
    dataKey: 'vehicles.allahabadErtiga',
    seo: {
      title: 'Ertiga Cab on Rent in Allahabad | Maruti Ertiga Hire | Tirupati Travel',
      description: 'Book Ertiga cab on rent in Allahabad. 6-seater AC cab. Call 8726124680.',
      canonical: `${BASE}/allahabad/ertiga-cab-on-rent-in-allahabad`,
    },
  },
  // Swift Dzire
  {
    slug: 'varanasi/swift-dzire-taxi-service-in-varanasi',
    template: 'VehicleTemplate',
    dataKey: 'vehicles.varanasiDzire',
    seo: {
      title: 'Swift Dzire Taxi Service in Varanasi | Sedan Cab | Tirupati Travel',
      description: 'Book Swift Dzire taxi in Varanasi. 4-seater AC sedan, ₹10.50/km. Best for outstation. Call 8726124680.',
      canonical: `${BASE}/varanasi/swift-dzire-taxi-service-in-varanasi`,
    },
  },
  {
    slug: 'ayodhya/swift-dzire-cab-in-ayodhya',
    template: 'VehicleTemplate',
    dataKey: 'vehicles.ayodhyaDzire',
    seo: {
      title: 'Swift Dzire Cab in Ayodhya | Sedan Taxi | Tirupati Travel',
      description: 'Book Swift Dzire cab in Ayodhya. 4-seater AC sedan. Outstation & local. Call 8726124680.',
      canonical: `${BASE}/ayodhya/swift-dzire-cab-in-ayodhya`,
    },
  },
  {
    slug: 'allahabad/swift-dzire-cab-in-allahabad',
    template: 'VehicleTemplate',
    dataKey: 'vehicles.allahabadDzire',
    seo: {
      title: 'Swift Dzire Cab in Allahabad | Sedan Taxi | Tirupati Travel',
      description: 'Book Swift Dzire cab in Allahabad. 4-seater AC sedan. Call 8726124680.',
      canonical: `${BASE}/allahabad/swift-dzire-cab-in-allahabad`,
    },
  },
  // Sedan
  {
    slug: 'varanasi/sedan-car-in-varanasi',
    template: 'VehicleTemplate',
    dataKey: 'vehicles.varanasiSedan',
    seo: {
      title: 'Sedan Car in Varanasi | AC Taxi Service | Tirupati Travel',
      description: 'Book sedan car in Varanasi. Comfortable AC cab for outstation & local travel. Call 8726124680.',
      canonical: `${BASE}/varanasi/sedan-car-in-varanasi`,
    },
  },
  {
    slug: 'ayodhya/sedan-cab-in-ayodhya',
    template: 'VehicleTemplate',
    dataKey: 'vehicles.ayodhyaSedan',
    seo: {
      title: 'Sedan Cab in Ayodhya | AC Taxi Service | Tirupati Travel',
      description: 'Book sedan cab in Ayodhya. Comfortable AC cab. Call 8726124680.',
      canonical: `${BASE}/ayodhya/sedan-cab-in-ayodhya`,
    },
  },
  {
    slug: 'allahabad/sedan-cab-in-allahabad',
    template: 'VehicleTemplate',
    dataKey: 'vehicles.allahabadSedan',
    seo: {
      title: 'Sedan Cab in Allahabad | AC Taxi Service | Tirupati Travel',
      description: 'Book sedan cab in Allahabad. Comfortable AC cab. Call 8726124680.',
      canonical: `${BASE}/allahabad/sedan-cab-in-allahabad`,
    },
  },
  // Toyota Etios
  {
    slug: 'varanasi/toyota-etios-on-rent-in-varanasi',
    template: 'VehicleTemplate',
    dataKey: 'vehicles.varanasiEtios',
    seo: {
      title: 'Toyota Etios on Rent in Varanasi | Cab Booking | Tirupati Travel',
      description: 'Book Toyota Etios on rent in Varanasi. Comfortable sedan for outstation & local. Call 8726124680.',
      canonical: `${BASE}/varanasi/toyota-etios-on-rent-in-varanasi`,
    },
  },
  {
    slug: 'ayodhya/toyota-etios-on-rent-in-ayodhya',
    template: 'VehicleTemplate',
    dataKey: 'vehicles.ayodhyaEtios',
    seo: {
      title: 'Toyota Etios on Rent in Ayodhya | Cab Booking | Tirupati Travel',
      description: 'Book Toyota Etios on rent in Ayodhya. Call 8726124680.',
      canonical: `${BASE}/ayodhya/toyota-etios-on-rent-in-ayodhya`,
    },
  },
  {
    slug: 'allahabad/toyota-etios-on-rent-in-allahabad',
    template: 'VehicleTemplate',
    dataKey: 'vehicles.allahabadEtios',
    seo: {
      title: 'Toyota Etios on Rent in Allahabad | Cab Booking | Tirupati Travel',
      description: 'Book Toyota Etios on rent in Allahabad. Call 8726124680.',
      canonical: `${BASE}/allahabad/toyota-etios-on-rent-in-allahabad`,
    },
  },

  // ── CAB SERVICES ──────────────────────────────────────────────────────────
  // Varanasi Cab Services
  {
    slug: 'varanasi/one-way-cab-in-varanasi',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.varanasiOneWay',
    seo: {
      title: 'One Way Cab in Varanasi | One Way Taxi | Tirupati Travel',
      description: 'Book one way cab in Varanasi. Affordable outstation one way taxi. No return fare. Call 8726124680.',
      canonical: `${BASE}/varanasi/one-way-cab-in-varanasi`,
    },
  },
  {
    slug: 'varanasi/round-trip-cab-varanasi',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.varanasiRoundTrip',
    seo: {
      title: 'Round Trip Cab Varanasi | Return Taxi | Tirupati Travel',
      description: 'Book round trip cab from Varanasi. Best rates for return journeys. Call 8726124680.',
      canonical: `${BASE}/varanasi/round-trip-cab-varanasi`,
    },
  },
  {
    slug: 'varanasi/full-day-taxi-in-varanasi',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.varanasiFullDay',
    seo: {
      title: 'Full Day Taxi in Varanasi | 8 Hour Cab | Tirupati Travel',
      description: 'Book full day taxi in Varanasi. 8 hrs / 80 km package. Sightseeing, temple visits. Call 8726124680.',
      canonical: `${BASE}/varanasi/full-day-taxi-in-varanasi`,
    },
  },
  {
    slug: 'varanasi/half-day-taxi-in-varanasi',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.varanasiHalfDay',
    seo: {
      title: 'Half Day Taxi in Varanasi | 4 Hour Cab | Tirupati Travel',
      description: 'Book half day taxi in Varanasi. 4 hrs / 40 km package. Ghat visits & temples. Call 8726124680.',
      canonical: `${BASE}/varanasi/half-day-taxi-in-varanasi`,
    },
  },
  {
    slug: 'varanasi/call-taxi-in-varanasi',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.varanasiCallTaxi',
    seo: {
      title: 'Call Taxi in Varanasi | On-Call Cab Service | Tirupati Travel',
      description: 'Book call taxi in Varanasi. 24/7 on-call cab service. Instant pickup. Call 8726124680.',
      canonical: `${BASE}/varanasi/call-taxi-in-varanasi`,
    },
  },
  {
    slug: 'varanasi/drop-taxi-service-varanasi',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.varanasiDrop',
    seo: {
      title: 'Drop Taxi Service Varanasi | One Way Drop Cab | Tirupati Travel',
      description: 'Book drop taxi service in Varanasi. Affordable one-way drop to any destination. Call 8726124680.',
      canonical: `${BASE}/varanasi/drop-taxi-service-varanasi`,
    },
  },
  {
    slug: 'varanasi/tourist-cab-varanasi',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.varanasiTourist',
    seo: {
      title: 'Tourist Cab Varanasi | Sightseeing Taxi | Tirupati Travel',
      description: 'Book tourist cab in Varanasi. Guided sightseeing packages, ghats & temples. Call 8726124680.',
      canonical: `${BASE}/varanasi/tourist-cab-varanasi`,
    },
  },
  // Ayodhya Cab Services
  {
    slug: 'ayodhya/call-taxi-in-ayodhya',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.ayodhyaCallTaxi',
    seo: {
      title: 'Call Taxi in Ayodhya | On-Call Cab Service | Tirupati Travel',
      description: 'Book call taxi in Ayodhya. 24/7 cab service for temple visits. Call 8726124680.',
      canonical: `${BASE}/ayodhya/call-taxi-in-ayodhya`,
    },
  },
  {
    slug: 'ayodhya/drop-taxi-service-ayodhya',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.ayodhyaDrop',
    seo: {
      title: 'Drop Taxi Service Ayodhya | One Way Drop Cab | Tirupati Travel',
      description: 'Book drop taxi service in Ayodhya. Affordable one-way drop. Call 8726124680.',
      canonical: `${BASE}/ayodhya/drop-taxi-service-ayodhya`,
    },
  },
  {
    slug: 'ayodhya/full-day-cab-in-ayodhya',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.ayodhyaFullDay',
    seo: {
      title: 'Full Day Cab in Ayodhya | 8 Hour Taxi | Tirupati Travel',
      description: 'Book full day cab in Ayodhya. 8 hrs / 80 km. Ram Mandir & all temples. Call 8726124680.',
      canonical: `${BASE}/ayodhya/full-day-cab-in-ayodhya`,
    },
  },
  {
    slug: 'ayodhya/half-day-cab-in-ayodhya',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.ayodhyaHalfDay',
    seo: {
      title: 'Half Day Cab in Ayodhya | 4 Hour Taxi | Tirupati Travel',
      description: 'Book half day cab in Ayodhya. 4 hrs / 40 km. Call 8726124680.',
      canonical: `${BASE}/ayodhya/half-day-cab-in-ayodhya`,
    },
  },
  {
    slug: 'ayodhya/one-way-cab-in-ayodhya',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.ayodhyaOneWay',
    seo: {
      title: 'One Way Cab in Ayodhya | One Way Taxi | Tirupati Travel',
      description: 'Book one way cab from Ayodhya. No return fare charged. Call 8726124680.',
      canonical: `${BASE}/ayodhya/one-way-cab-in-ayodhya`,
    },
  },
  {
    slug: 'ayodhya/outstation-cab-in-ayodhya',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.ayodhyaOutstation',
    seo: {
      title: 'Outstation Cab in Ayodhya | Outstation Taxi | Tirupati Travel',
      description: 'Book outstation cab from Ayodhya to Varanasi, Lucknow, Delhi & more. Call 8726124680.',
      canonical: `${BASE}/ayodhya/outstation-cab-in-ayodhya`,
    },
  },
  {
    slug: 'ayodhya/round-trip-cab-ayodhya',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.ayodhyaRoundTrip',
    seo: {
      title: 'Round Trip Cab Ayodhya | Return Taxi | Tirupati Travel',
      description: 'Book round trip cab from Ayodhya. Best rates for return journeys. Call 8726124680.',
      canonical: `${BASE}/ayodhya/round-trip-cab-ayodhya`,
    },
  },
  {
    slug: 'ayodhya/tourist-cab-ayodhya',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.ayodhyaTourist',
    seo: {
      title: 'Tourist Cab Ayodhya | Sightseeing Taxi | Tirupati Travel',
      description: 'Book tourist cab in Ayodhya. Ram Mandir, Hanuman Garhi & all temples. Call 8726124680.',
      canonical: `${BASE}/ayodhya/tourist-cab-ayodhya`,
    },
  },
  // Allahabad Cab Services
  {
    slug: 'allahabad/cab-service-in-allahabad',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.allahabadCabService',
    seo: {
      title: 'Cab Service in Allahabad Prayagraj | Taxi Booking | Tirupati Travel',
      description: 'Book cab service in Allahabad/Prayagraj. Best rates for local & outstation. Call 8726124680.',
      canonical: `${BASE}/allahabad/cab-service-in-allahabad`,
    },
  },
  {
    slug: 'allahabad/call-taxi-in-allahabad',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.allahabadCallTaxi',
    seo: {
      title: 'Call Taxi in Allahabad | On-Call Cab Service | Tirupati Travel',
      description: 'Book call taxi in Allahabad. 24/7 on-call cab service. Call 8726124680.',
      canonical: `${BASE}/allahabad/call-taxi-in-allahabad`,
    },
  },
  {
    slug: 'allahabad/drop-taxi-service-allahabad',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.allahabadDrop',
    seo: {
      title: 'Drop Taxi Service Allahabad | One Way Drop Cab | Tirupati Travel',
      description: 'Book drop taxi service in Allahabad. Affordable one-way drop. Call 8726124680.',
      canonical: `${BASE}/allahabad/drop-taxi-service-allahabad`,
    },
  },
  {
    slug: 'allahabad/full-day-cab-in-allahabad',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.allahabadFullDay',
    seo: {
      title: 'Full Day Cab in Allahabad | 8 Hour Taxi | Tirupati Travel',
      description: 'Book full day cab in Allahabad. 8 hrs / 80 km. Sangam & all sightseeing. Call 8726124680.',
      canonical: `${BASE}/allahabad/full-day-cab-in-allahabad`,
    },
  },
  {
    slug: 'allahabad/half-day-cab-in-allahabad',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.allahabadHalfDay',
    seo: {
      title: 'Half Day Cab in Allahabad | 4 Hour Taxi | Tirupati Travel',
      description: 'Book half day cab in Allahabad. 4 hrs / 40 km. Call 8726124680.',
      canonical: `${BASE}/allahabad/half-day-cab-in-allahabad`,
    },
  },
  {
    slug: 'allahabad/one-way-cab-in-allahabad',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.allahabadOneWay',
    seo: {
      title: 'One Way Cab in Allahabad | One Way Taxi | Tirupati Travel',
      description: 'Book one way cab from Allahabad. No return fare. Call 8726124680.',
      canonical: `${BASE}/allahabad/one-way-cab-in-allahabad`,
    },
  },
  {
    slug: 'allahabad/round-trip-cab-allahabad',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.allahabadRoundTrip',
    seo: {
      title: 'Round Trip Cab Allahabad | Return Taxi | Tirupati Travel',
      description: 'Book round trip cab from Allahabad. Best rates. Call 8726124680.',
      canonical: `${BASE}/allahabad/round-trip-cab-allahabad`,
    },
  },
  // Lucknow Cab Services
  {
    slug: 'lucknow/outstation-cab-in-lucknow',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.lucknowOutstation',
    seo: {
      title: 'Outstation Cab in Lucknow | Outstation Taxi | Tirupati Travel',
      description: 'Book outstation cab from Lucknow to Varanasi, Ayodhya, Delhi & more. Call 8726124680.',
      canonical: `${BASE}/lucknow/outstation-cab-in-lucknow`,
    },
  },

  // ── LOCAL SIGHTSEEING ─────────────────────────────────────────────────────
  {
    slug: 'varanasi/varanasi-local-sightseeing-cab',
    template: 'LocalServiceTemplate',
    dataKey: 'cityServices.varanasiLocalSightseeing',
    seo: {
      title: 'Varanasi Local Sightseeing Cab | City Tour Taxi | Tirupati Travel',
      description: 'Book local sightseeing cab in Varanasi. Ghats, temples, Sarnath & more. Hourly packages. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-local-sightseeing-cab`,
    },
  },
  {
    slug: 'ayodhya/ayodhya-local-sightseeing-cab',
    template: 'LocalServiceTemplate',
    dataKey: 'cityServices.ayodhyaLocalSightseeing',
    seo: {
      title: 'Ayodhya Local Sightseeing Cab | City Tour Taxi | Tirupati Travel',
      description: 'Book local sightseeing cab in Ayodhya. Ram Mandir, all temples & ghats. Hourly packages. Call 8726124680.',
      canonical: `${BASE}/ayodhya/ayodhya-local-sightseeing-cab`,
    },
  },

  // ── TEMPO TRAVELLER ───────────────────────────────────────────────────────
  {
    slug: 'varanasi/tempo-traveller-varanasi',
    template: 'TempoTravellerTemplate',
    dataKey: 'tempoTraveller.varanasi',
    seo: {
      title: 'Tempo Traveller in Varanasi | 12-17 Seater | Tirupati Travel',
      description: 'Book tempo traveller in Varanasi. 12-17 seater AC bus for group travel & outstation. Call 8726124680.',
      canonical: `${BASE}/varanasi/tempo-traveller-varanasi`,
    },
  },
  {
    slug: 'varanasi/luxury-tempo-traveller-varanasi',
    template: 'TempoTravellerTemplate',
    dataKey: 'tempoTraveller.varanasiLuxury',
    seo: {
      title: 'Luxury Tempo Traveller Varanasi | Premium Group Travel | Tirupati Travel',
      description: 'Book luxury tempo traveller in Varanasi. Push-back seats, AC, entertainment. Call 8726124680.',
      canonical: `${BASE}/varanasi/luxury-tempo-traveller-varanasi`,
    },
  },
  {
    slug: 'ayodhya/tempo-traveller-ayodhya',
    template: 'TempoTravellerTemplate',
    dataKey: 'tempoTraveller.ayodhya',
    seo: {
      title: 'Tempo Traveller in Ayodhya | Group Travel Cab | Tirupati Travel',
      description: 'Book tempo traveller in Ayodhya for group pilgrimage. 12-17 seater AC. Call 8726124680.',
      canonical: `${BASE}/ayodhya/tempo-traveller-ayodhya`,
    },
  },
  {
    slug: 'ayodhya/luxury-tempo-traveller-ayodhya',
    template: 'TempoTravellerTemplate',
    dataKey: 'tempoTraveller.ayodhyaLuxury',
    seo: {
      title: 'Luxury Tempo Traveller Ayodhya | Premium Group Travel | Tirupati Travel',
      description: 'Book luxury tempo traveller in Ayodhya. Push-back seats, AC. Call 8726124680.',
      canonical: `${BASE}/ayodhya/luxury-tempo-traveller-ayodhya`,
    },
  },
  {
    slug: 'lucknow/tempo-traveller-in-lucknow',
    template: 'TempoTravellerTemplate',
    dataKey: 'tempoTraveller.lucknow',
    seo: {
      title: 'Tempo Traveller in Lucknow | Group Travel Cab | Tirupati Travel',
      description: 'Book tempo traveller in Lucknow. 12-17 seater AC for group travel. Call 8726124680.',
      canonical: `${BASE}/lucknow/tempo-traveller-in-lucknow`,
    },
  },
  {
    slug: 'lucknow/maharaja-tempo-traveller-in-lucknow',
    template: 'TempoTravellerTemplate',
    dataKey: 'tempoTraveller.lucknowMaharaja',
    seo: {
      title: 'Maharaja Tempo Traveller in Lucknow | Premium Bus | Tirupati Travel',
      description: 'Book Maharaja tempo traveller in Lucknow. Ultra-luxury push-back seats. Call 8726124680.',
      canonical: `${BASE}/lucknow/maharaja-tempo-traveller-in-lucknow`,
    },
  },
  {
    slug: 'lucknow/urbania-tempo-traveller-in-lucknow',
    template: 'TempoTravellerTemplate',
    dataKey: 'tempoTraveller.lucknowUrbania',
    seo: {
      title: 'Urbania Tempo Traveller in Lucknow | Force Urbania | Tirupati Travel',
      description: 'Book Force Urbania tempo traveller in Lucknow. Premium 17-seater. Call 8726124680.',
      canonical: `${BASE}/lucknow/urbania-tempo-traveller-in-lucknow`,
    },
  },
  {
    slug: 'allahabad/luxury-tempo-traveller-allahabad',
    template: 'TempoTravellerTemplate',
    dataKey: 'tempoTraveller.allahabadLuxury',
    seo: {
      title: 'Luxury Tempo Traveller Allahabad | Group Travel | Tirupati Travel',
      description: 'Book luxury tempo traveller in Allahabad. Push-back seats, AC. Call 8726124680.',
      canonical: `${BASE}/allahabad/luxury-tempo-traveller-allahabad`,
    },
  },

  // ── CAR RENTAL ────────────────────────────────────────────────────────────
  {
    slug: 'varanasi/car-rental-varanasi',
    template: 'CarRentalTemplate',
    dataKey: 'carRental.varanasi',
    seo: {
      title: 'Car Rental Varanasi | Self Drive & Chauffeur | Tirupati Travel',
      description: 'Book car rental in Varanasi. Daily, weekly & monthly packages. AC cabs. Call 8726124680.',
      canonical: `${BASE}/varanasi/car-rental-varanasi`,
    },
  },
  {
    slug: 'varanasi/monthly-car-rentals-varanasi',
    template: 'CarRentalTemplate',
    dataKey: 'carRental.varanasiMonthly',
    seo: {
      title: 'Monthly Car Rentals Varanasi | Long Term Cab | Tirupati Travel',
      description: 'Book monthly car rental in Varanasi. Best rates for long-term cab hire. Call 8726124680.',
      canonical: `${BASE}/varanasi/monthly-car-rentals-varanasi`,
    },
  },
  {
    slug: 'ayodhya/car-rental-ayodhya',
    template: 'CarRentalTemplate',
    dataKey: 'carRental.ayodhya',
    seo: {
      title: 'Car Rental Ayodhya | Daily & Monthly Cab | Tirupati Travel',
      description: 'Book car rental in Ayodhya. Daily, weekly & monthly packages. Call 8726124680.',
      canonical: `${BASE}/ayodhya/car-rental-ayodhya`,
    },
  },
  {
    slug: 'ayodhya/monthly-car-rentals-ayodhya',
    template: 'CarRentalTemplate',
    dataKey: 'carRental.ayodhyaMonthly',
    seo: {
      title: 'Monthly Car Rentals Ayodhya | Long Term Cab | Tirupati Travel',
      description: 'Book monthly car rental in Ayodhya. Best rates for long-term hire. Call 8726124680.',
      canonical: `${BASE}/ayodhya/monthly-car-rentals-ayodhya`,
    },
  },
  {
    slug: 'allahabad/car-rental-allahabad',
    template: 'CarRentalTemplate',
    dataKey: 'carRental.allahabad',
    seo: {
      title: 'Car Rental Allahabad | Daily & Monthly Cab | Tirupati Travel',
      description: 'Book car rental in Allahabad. Daily, weekly & monthly packages. Call 8726124680.',
      canonical: `${BASE}/allahabad/car-rental-allahabad`,
    },
  },
  {
    slug: 'allahabad/monthly-car-rentals-allahabad',
    template: 'CarRentalTemplate',
    dataKey: 'carRental.allahabadMonthly',
    seo: {
      title: 'Monthly Car Rentals Allahabad | Long Term Cab | Tirupati Travel',
      description: 'Book monthly car rental in Allahabad. Best rates. Call 8726124680.',
      canonical: `${BASE}/allahabad/monthly-car-rentals-allahabad`,
    },
  },
  {
    slug: 'lucknow/car-rental-in-lucknow',
    template: 'CarRentalTemplate',
    dataKey: 'carRental.lucknow',
    seo: {
      title: 'Car Rental in Lucknow | Daily & Monthly Cab | Tirupati Travel',
      description: 'Book car rental in Lucknow. Daily, weekly & monthly packages. Call 8726124680.',
      canonical: `${BASE}/lucknow/car-rental-in-lucknow`,
    },
  },

  // ── TOUR PACKAGES ─────────────────────────────────────────────────────────
  {
    slug: 'varanasi/varanasi-tour-packages',
    template: 'TourPackageTemplate',
    dataKey: 'tourPackages.varanasiTour',
    seo: {
      title: 'Varanasi Tour Packages | Pilgrimage Travel | Tirupati Travel',
      description: 'Book Varanasi tour packages. Ganga Aarti, Kashi Vishwanath, Sarnath & Ghat tours. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-tour-packages`,
    },
  },
  {
    slug: 'varanasi/varanasi-darshan-tour-package',
    template: 'TourPackageTemplate',
    dataKey: 'tourPackages.varanasiDarshan',
    seo: {
      title: 'Varanasi Darshan Tour Package | Temple Tour | Tirupati Travel',
      description: 'Book Varanasi darshan tour. All major temples, Ganga Aarti & Ghat boat ride. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-darshan-tour-package`,
    },
  },
  {
    slug: 'ayodhya/ayodhya-tour-packages',
    template: 'TourPackageTemplate',
    dataKey: 'tourPackages.ayodhyaTour',
    seo: {
      title: 'Ayodhya Tour Packages | Ram Mandir Tour | Tirupati Travel',
      description: 'Book Ayodhya tour packages. Ram Mandir, Hanuman Garhi & all temple darshan. Call 8726124680.',
      canonical: `${BASE}/ayodhya/ayodhya-tour-packages`,
    },
  },
  {
    slug: 'ayodhya/ayodhya-darshan-tour-package',
    template: 'TourPackageTemplate',
    dataKey: 'tourPackages.ayodhyaDarshan',
    seo: {
      title: 'Ayodhya Darshan Tour Package | Temple Tour | Tirupati Travel',
      description: 'Book Ayodhya darshan tour. Ram Mandir, Kanak Bhavan & all holy sites. Call 8726124680.',
      canonical: `${BASE}/ayodhya/ayodhya-darshan-tour-package`,
    },
  },
  {
    slug: 'allahabad/allahabad-tour-packages',
    template: 'TourPackageTemplate',
    dataKey: 'tourPackages.allahabadTour',
    seo: {
      title: 'Allahabad Tour Packages | Sangam Tour | Tirupati Travel',
      description: 'Book Allahabad tour packages. Triveni Sangam, Kumbh Mela spots & temples. Call 8726124680.',
      canonical: `${BASE}/allahabad/allahabad-tour-packages`,
    },
  },
  {
    slug: 'allahabad/allahabad-darshan-tour-package',
    template: 'TourPackageTemplate',
    dataKey: 'tourPackages.allahabadDarshan',
    seo: {
      title: 'Allahabad Darshan Tour Package | Prayagraj Temple Tour | Tirupati Travel',
      description: 'Book Allahabad darshan tour. Sangam, Hanuman Mandir & temples. Call 8726124680.',
      canonical: `${BASE}/allahabad/allahabad-darshan-tour-package`,
    },
  },

  // ── ACCOMMODATION ─────────────────────────────────────────────────────────
  {
    slug: 'varanasi/hotel-in-varanasi',
    template: 'AccommodationTemplate',
    dataKey: 'accommodation.varanasiHotel',
    seo: {
      title: 'Hotel in Varanasi | Best Hotels Near Ghats | Tirupati Travel',
      description: 'Find best hotels in Varanasi near Dashashwamedh Ghat. Budget to premium. Book through Tirupati Travel. Call 8726124680.',
      canonical: `${BASE}/varanasi/hotel-in-varanasi`,
    },
  },
  {
    slug: 'varanasi/homestay-in-varanasi',
    template: 'AccommodationTemplate',
    dataKey: 'accommodation.varanasiHomestay',
    seo: {
      title: 'Homestay in Varanasi | Budget Stay Near Ghats | Tirupati Travel',
      description: 'Find best homestays in Varanasi. Authentic experience near the ghats. Book through Tirupati Travel. Call 8726124680.',
      canonical: `${BASE}/varanasi/homestay-in-varanasi`,
    },
  },
  {
    slug: 'varanasi/guest-house-in-varanasi',
    template: 'AccommodationTemplate',
    dataKey: 'accommodation.varanasiGuestHouse',
    seo: {
      title: 'Guest House in Varanasi | Affordable Stay | Tirupati Travel',
      description: 'Find best guest houses in Varanasi. Affordable rooms near ghats. Book with Tirupati Travel. Call 8726124680.',
      canonical: `${BASE}/varanasi/guest-house-in-varanasi`,
    },
  },
  {
    slug: 'varanasi/dharamshala-in-varanasi',
    template: 'AccommodationTemplate',
    dataKey: 'accommodation.varanasiDharamshala',
    seo: {
      title: 'Dharamshala in Varanasi | Pilgrim Stay | Tirupati Travel',
      description: 'Find best dharamshalas in Varanasi for pilgrims. Affordable stay near temples. Call 8726124680.',
      canonical: `${BASE}/varanasi/dharamshala-in-varanasi`,
    },
  },
  {
    slug: 'varanasi/dormitory-in-varanasi',
    template: 'AccommodationTemplate',
    dataKey: 'accommodation.varanasiDormitory',
    seo: {
      title: 'Dormitory in Varanasi | Budget Pilgrim Accommodation | Tirupati Travel',
      description: 'Find best dormitories in Varanasi for budget travelers & pilgrims. Call 8726124680.',
      canonical: `${BASE}/varanasi/dormitory-in-varanasi`,
    },
  },

  // ── PLACES TO VISIT ───────────────────────────────────────────────────────
  {
    slug: 'varanasi/places-to-visit-in-varanasi',
    template: 'PlacesToVisitTemplate',
    dataKey: 'placesToVisit.varanasi',
    seo: {
      title: 'Places to Visit in Varanasi | Tourist Attractions | Tirupati Travel',
      description: 'Best places to visit in Varanasi. Ghats, Kashi Vishwanath, Sarnath & more. Book cab with Tirupati Travel.',
      canonical: `${BASE}/varanasi/places-to-visit-in-varanasi`,
    },
  },
  {
    slug: 'allahabad/places-to-visit-in-allahabad',
    template: 'PlacesToVisitTemplate',
    dataKey: 'placesToVisit.allahabad',
    seo: {
      title: 'Places to Visit in Allahabad Prayagraj | Tourist Spots | Tirupati Travel',
      description: 'Best places to visit in Allahabad/Prayagraj. Sangam, Anand Bhavan & more. Book cab with Tirupati Travel.',
      canonical: `${BASE}/allahabad/places-to-visit-in-allahabad`,
    },
  },
  {
    slug: 'gaya/places-to-visit-in-gaya',
    template: 'PlacesToVisitTemplate',
    dataKey: 'placesToVisit.gaya',
    seo: {
      title: 'Places to Visit in Gaya | Bodh Gaya Tourist Spots | Tirupati Travel',
      description: 'Best places to visit in Gaya & Bodh Gaya. Mahabodhi Temple, Vishnupad & more. Book cab with Tirupati Travel.',
      canonical: `${BASE}/gaya/places-to-visit-in-gaya`,
    },
  },
  {
    slug: 'ayodhya/ayodhya-dham',
    template: 'PlacesToVisitTemplate',
    dataKey: 'placesToVisit.ayodhyaDham',
    seo: {
      title: 'Ayodhya Dham | Ram Mandir & Pilgrimage Guide | Tirupati Travel',
      description: 'Complete guide to Ayodhya Dham. Ram Mandir, Hanuman Garhi & all sacred sites. Book darshan tour with Tirupati Travel.',
      canonical: `${BASE}/ayodhya/ayodhya-dham`,
    },
  },
  {
    slug: 'vindhyachal/vindhyachal-mandir',
    template: 'PlacesToVisitTemplate',
    dataKey: 'placesToVisit.vindhyachalMandir',
    seo: {
      title: 'Vindhyachal Mandir | Vindhyavasini Devi Darshan | Tirupati Travel',
      description: 'Complete guide to Vindhyachal Mandir. Vindhyavasini Devi darshan & nearby temples. Book cab with Tirupati Travel.',
      canonical: `${BASE}/vindhyachal/vindhyachal-mandir`,
    },
  },

  // ── AIRPORT TAXI ──────────────────────────────────────────────────────────
  {
    slug: 'varanasi/varanasi-airport-taxi',
    template: 'AirportTaxiTemplate',
    dataKey: 'airportTaxi.varanasi',
    seo: {
      title: 'Varanasi Airport Taxi | LBS Airport Cab | Tirupati Travel',
      description: 'Book Varanasi airport taxi. Lal Bahadur Shastri Airport (VNS) pickup & drop. Call 8726124680.',
      canonical: `${BASE}/varanasi/varanasi-airport-taxi`,
    },
  },
  {
    slug: 'lucknow/airport-taxi-in-lucknow',
    template: 'AirportTaxiTemplate',
    dataKey: 'airportTaxi.lucknow',
    seo: {
      title: 'Airport Taxi in Lucknow | Chaudhary Charan Singh Airport | Tirupati Travel',
      description: 'Book airport taxi in Lucknow. Pickup & drop from CCS Airport. Call 8726124680.',
      canonical: `${BASE}/lucknow/airport-taxi-in-lucknow`,
    },
  },
  {
    slug: 'ayodhya/ayodhya-airport-taxi',
    template: 'AirportTaxiTemplate',
    dataKey: 'airportTaxi.ayodhya',
    seo: {
      title: 'Ayodhya Airport Taxi | Maharishi Valmiki Airport | Tirupati Travel',
      description: 'Book Ayodhya airport taxi. Maharishi Valmiki International Airport pickup & drop. Call 8726124680.',
      canonical: `${BASE}/ayodhya/ayodhya-airport-taxi`,
    },
  },

  // ── CORPORATE CAB ─────────────────────────────────────────────────────────
  {
    slug: 'varanasi/corporate-cab-service-varanasi',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.varanasiCorporate',
    seo: {
      title: 'Corporate Cab Service Varanasi | Employee Transport | Tirupati Travel',
      description: 'Book corporate cab service in Varanasi. Reliable employee transport, GST invoice. Call 8726124680.',
      canonical: `${BASE}/varanasi/corporate-cab-service-varanasi`,
    },
  },
  {
    slug: 'ayodhya/corporate-cab-service-ayodhya',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.ayodhyaCorporate',
    seo: {
      title: 'Corporate Cab Service Ayodhya | Employee Transport | Tirupati Travel',
      description: 'Book corporate cab service in Ayodhya. Reliable transport, GST invoice. Call 8726124680.',
      canonical: `${BASE}/ayodhya/corporate-cab-service-ayodhya`,
    },
  },
  {
    slug: 'allahabad/corporate-cab-service-allahabad',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.allahabadCorporate',
    seo: {
      title: 'Corporate Cab Service Allahabad | Employee Transport | Tirupati Travel',
      description: 'Book corporate cab service in Allahabad. Reliable transport, GST invoice. Call 8726124680.',
      canonical: `${BASE}/allahabad/corporate-cab-service-allahabad`,
    },
  },

  // ── AGENCY & FARE PAGES ───────────────────────────────────────────────────
  {
    slug: 'varanasi/taxi-fare-varanasi',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.varanasiTaxiFare',
    seo: {
      title: 'Taxi Fare Varanasi | Cab Rate List 2025 | Tirupati Travel',
      description: 'Check taxi fare in Varanasi. Complete rate list for sedan, Innova, Ertiga. Call 8726124680.',
      canonical: `${BASE}/varanasi/taxi-fare-varanasi`,
    },
  },
  {
    slug: 'allahabad/taxi-fare-allahabad',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.allahabadTaxiFare',
    seo: {
      title: 'Taxi Fare Allahabad | Cab Rate List 2025 | Tirupati Travel',
      description: 'Check taxi fare in Allahabad. Complete rate list for sedan, Innova, Ertiga. Call 8726124680.',
      canonical: `${BASE}/allahabad/taxi-fare-allahabad`,
    },
  },
  {
    slug: 'varanasi/travel-agency-in-varanasi',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.varanasiAgency',
    seo: {
      title: 'Travel Agency in Varanasi | Tour Operator | Tirupati Travel',
      description: 'Best travel agency in Varanasi. Tour packages, taxi booking & pilgrimage tours. Call 8726124680.',
      canonical: `${BASE}/varanasi/travel-agency-in-varanasi`,
    },
  },
  {
    slug: 'ayodhya/travel-agency-in-ayodhya',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.ayodhyaAgency',
    seo: {
      title: 'Travel Agency in Ayodhya | Tour Operator | Tirupati Travel',
      description: 'Best travel agency in Ayodhya. Tour packages & cab booking. Call 8726124680.',
      canonical: `${BASE}/ayodhya/travel-agency-in-ayodhya`,
    },
  },
  {
    slug: 'allahabad/travel-agency-in-allahabad',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.allahabadAgency',
    seo: {
      title: 'Travel Agency in Allahabad | Tour Operator | Tirupati Travel',
      description: 'Best travel agency in Allahabad/Prayagraj. Tour packages & cab booking. Call 8726124680.',
      canonical: `${BASE}/allahabad/travel-agency-in-allahabad`,
    },
  },
  {
    slug: 'varanasi/varanasi-cab-contact-number',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.varanasiContact',
    seo: {
      title: 'Varanasi Cab Contact Number | Book Taxi | Tirupati Travel',
      description: 'Varanasi cab contact number: 8726124680. Book taxi 24/7. Outstation, local, airport.',
      canonical: `${BASE}/varanasi/varanasi-cab-contact-number`,
    },
  },
  {
    slug: 'ayodhya/ayodhya-cab-contact-number',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.ayodhyaContact',
    seo: {
      title: 'Ayodhya Cab Contact Number | Book Taxi | Tirupati Travel',
      description: 'Ayodhya cab contact number: 8726124680. Book taxi 24/7.',
      canonical: `${BASE}/ayodhya/ayodhya-cab-contact-number`,
    },
  },
  {
    slug: 'allahabad/allahabad-cab-contact-number',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.allahabadContact',
    seo: {
      title: 'Allahabad Cab Contact Number | Book Taxi | Tirupati Travel',
      description: 'Allahabad cab contact number: 8726124680. Book taxi 24/7.',
      canonical: `${BASE}/allahabad/allahabad-cab-contact-number`,
    },
  },
  {
    slug: 'ayodhya/taxi-fare-ayodhya',
    template: 'CabServiceTemplate',
    dataKey: 'cityServices.ayodhyaTaxiFare',
    seo: {
      title: 'Taxi Fare Ayodhya | Cab Rate List 2025 | Tirupati Travel',
      description: 'Check taxi fare in Ayodhya. Complete rate list. Call 8726124680.',
      canonical: `${BASE}/ayodhya/taxi-fare-ayodhya`,
    },
  },

  // ── STATIC PAGES ──────────────────────────────────────────────────────────
  {
    slug: 'about-us',
    template: 'StaticPageTemplate',
    dataKey: 'staticPages.aboutUs',
    seo: {
      title: 'About Us | Tirupati Travel Varanasi | 10+ Years Experience',
      description: 'About Tirupati Travel — Varanasi\'s trusted travel agency since 2014. Pilgrimage tours, outstation taxi & local cab services.',
      canonical: `${BASE}/about-us`,
    },
  },
  {
    slug: 'contact-us',
    template: 'StaticPageTemplate',
    dataKey: 'staticPages.contactUs',
    seo: {
      title: 'Contact Us | Tirupati Travel Varanasi | 8726124680',
      description: 'Contact Tirupati Travel. Call 8726124680 or visit L-2/72, Dashashwamedh Plaza, Varanasi. 24/7 available.',
      canonical: `${BASE}/contact-us`,
    },
  },
  {
    slug: 'privacy-policy',
    template: 'StaticPageTemplate',
    dataKey: 'staticPages.privacyPolicy',
    seo: {
      title: 'Privacy Policy | Tirupati Travel',
      description: 'Privacy policy for Tirupati Travel services.',
      canonical: `${BASE}/privacy-policy`,
    },
  },
  {
    slug: 'terms-and-conditions',
    template: 'StaticPageTemplate',
    dataKey: 'staticPages.termsConditions',
    seo: {
      title: 'Terms and Conditions | Tirupati Travel',
      description: 'Terms and conditions for using Tirupati Travel services.',
      canonical: `${BASE}/terms-and-conditions`,
    },
  },
];