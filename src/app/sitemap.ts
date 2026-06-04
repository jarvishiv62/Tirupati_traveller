import type { MetadataRoute } from 'next';
import { allRoutes } from '@/data/allRoutes';

const BASE_URL = 'https://tirupatitravel.in';

export default function sitemap(): MetadataRoute.Sitemap {
  // Homepage
  const homepage: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // Blog listing
  const blogPage: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ];

  // All dynamic routes from allRoutes.ts
  const dynamicRoutes: MetadataRoute.Sitemap = allRoutes.map((route) => {
    // Determine priority by template type
    let priority = 0.7;
    let changeFreq: MetadataRoute.Sitemap[0]['changeFrequency'] = 'monthly';

    if (route.template === 'CityLandingTemplate') {
      priority = 0.9;
      changeFreq = 'weekly';
    } else if (route.template === 'OutstationRouteTemplate') {
      priority = 0.8;
      changeFreq = 'monthly';
    } else if (route.template === 'TourPackageTemplate') {
      priority = 0.85;
      changeFreq = 'weekly';
    } else if (route.template === 'StaticPageTemplate') {
      priority = 0.5;
      changeFreq = 'yearly';
    }

    return {
      url: `${BASE_URL}/${route.slug}`,
      lastModified: new Date(),
      changeFrequency: changeFreq,
      priority,
    };
  });

  return [...homepage, ...blogPage, ...dynamicRoutes];
}