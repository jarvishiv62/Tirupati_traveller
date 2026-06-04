// src/data/staticPages.ts
// Static page content — About, Contact, Terms, Privacy
// Full content in Chunk 9

export type StaticPageData = {
  pageTitle: string;
  content: string;
  seo: { title: string; description: string; canonical: string };
};

const BASE = 'https://tirupatitravel.in';

export const aboutUs: StaticPageData = {
  pageTitle: 'About Us',
  content: `<h2>About Tirupati Travel</h2><p>Varanasi's most trusted travel agency since 2014.</p>`,
  seo: {
    title: 'About Us | Tirupati Travel Varanasi | 10+ Years Experience',
    description: "About Tirupati Travel — Varanasi's trusted travel agency since 2014.",
    canonical: `${BASE}/about-us`,
  },
};

export const contactUs: StaticPageData = {
  pageTitle: 'Contact Us',
  content: `<h2>Contact Tirupati Travel</h2><p>Call 8726124680 | L-2/72, Dashashwamedh Plaza, Varanasi-221001</p>`,
  seo: {
    title: 'Contact Us | Tirupati Travel Varanasi | 8726124680',
    description: 'Contact Tirupati Travel. Call 8726124680. 24/7 available.',
    canonical: `${BASE}/contact-us`,
  },
};

export const privacyPolicy: StaticPageData = {
  pageTitle: 'Privacy Policy',
  content: `<h2>Privacy Policy</h2><p>TODO: CHUNK 9 — full policy content.</p>`,
  seo: {
    title: 'Privacy Policy | Tirupati Travel',
    description: 'Privacy policy for Tirupati Travel services.',
    canonical: `${BASE}/privacy-policy`,
  },
};

export const termsConditions: StaticPageData = {
  pageTitle: 'Terms and Conditions',
  content: `<h2>Terms and Conditions</h2><p>TODO: CHUNK 9 — full terms content.</p>`,
  seo: {
    title: 'Terms and Conditions | Tirupati Travel',
    description: 'Terms and conditions for using Tirupati Travel services.',
    canonical: `${BASE}/terms-and-conditions`,
  },
};