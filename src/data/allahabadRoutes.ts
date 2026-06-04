// src/data/allahabadRoutes.ts
// TODO: CHUNK 6 — populate full route data
export type OutstationRouteData = {
  origin: string; destination: string; distance: string; duration: string;
  fare: { sedan: number; innova: number; ertiga: number; tempo?: number };
  highlights: string[]; placesEnRoute: string[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; canonical: string };
};
