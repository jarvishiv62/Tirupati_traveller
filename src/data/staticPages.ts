// src/data/staticPages.ts
//
// ★ Export keys MUST match allRoutes.ts dataKey pattern:
//   dataKey: 'staticPages.aboutUs'        → export const aboutUs
//   dataKey: 'staticPages.contactUs'      → export const contactUs
//   dataKey: 'staticPages.privacyPolicy'  → export const privacyPolicy
//   dataKey: 'staticPages.termsConditions'→ export const termsConditions
//
// pageType drives which section layout StaticPageTemplate renders:
//   'about'   → Story + Stats + Why Choose Us + Team sections
//   'contact' → BookingEnquiryForm + Map + Contact details
//   'legal'   → Prose content only, no CTA banner
//
// TODO: FUTURE — replace with db.staticPage.findMany() when Chunk 10 DB is active

export type StaticPageType = "about" | "contact" | "legal";

export interface Stat {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export interface WhyUsPoint {
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface LegalSection {
  heading: string;
  content: string; // prose paragraphs separated by \n\n
}

export interface StaticPageData {
  pageType: StaticPageType;
  pageTitle: string;
  heroTagline: string;

  // About page fields
  aboutStory?: string;
  stats?: Stat[];
  whyUs?: WhyUsPoint[];
  team?: TeamMember[];

  // Contact page fields
  address?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  googleMapsEmbed?: string; // iframe src URL
  mapLink?: string; // Google Maps deep link

  // Legal page fields
  lastUpdated?: string;
  legalSections?: LegalSection[];

  seo: {
    title: string;
    description: string;
    canonical: string;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT US
// ─────────────────────────────────────────────────────────────────────────────

export const aboutUs: StaticPageData = {
  pageType: "about",
  pageTitle: "About Us",
  heroTagline: "Varanasi's most trusted pilgrimage travel partner since 2014",

  aboutStory: `Tirupati Travel was founded in 2014 by a team of passionate Varanasi locals who saw a deep need for reliable, trustworthy cab services for pilgrims visiting India's spiritual heartland. What began as a small fleet of three cabs serving Varanasi's ghats and temples has grown into a full-service travel company covering six sacred cities across Uttar Pradesh and Bihar.\n\nOur journey started with a simple promise: every pilgrim deserves a safe, comfortable, and on-time journey — at a fair price with no hidden charges. That promise has not changed. Over a decade later, we have served more than 50,000 pilgrims and travellers, and every trip is a reminder of why we started.\n\nBased at Dashashwamedh Plaza — the heart of Varanasi — we are deeply rooted in the culture and spirituality of Kashi. Our drivers are local professionals who know not just the roads, but the significance of every temple, ghat, and pilgrimage route. We do not just drive you — we guide you.`,

  stats: [
    { value: "10+", label: "Years of Service" },
    { value: "50K+", label: "Happy Pilgrims" },
    { value: "6", label: "Cities Covered" },
    { value: "24/7", label: "Always Available" },
    { value: "100+", label: "Verified Drivers" },
    { value: "4.8★", label: "Average Rating" },
  ],

  whyUs: [
    {
      title: "Verified Professional Drivers",
      description:
        "Every driver on our platform is background-verified, licensed, and trained in pilgrim-route expertise. Your safety is our first responsibility.",
      icon: "ShieldCheck",
    },
    {
      title: "Transparent Pricing",
      description:
        "The price quoted is the price you pay. No hidden charges, no surge pricing, no surprises. Toll and parking charged at actual where applicable.",
      icon: "Receipt",
    },
    {
      title: "Local Knowledge",
      description:
        "Our drivers are Varanasi locals with deep knowledge of ghats, temples, and pilgrimage circuits across UP and Bihar. They guide, not just drive.",
      icon: "MapPin",
    },
    {
      title: "24/7 Support",
      description:
        "Call or WhatsApp us any time — 3 AM airport drops, last-minute bookings, route changes mid-journey. We are always reachable.",
      icon: "Clock",
    },
    {
      title: "Clean AC Vehicles",
      description:
        "All vehicles are regularly serviced, sanitised, and GPS-equipped. From sedans to Innova Crysta to luxury tempo travellers — every vehicle is trip-ready.",
      icon: "Car",
    },
    {
      title: "GST Invoices",
      description:
        "We provide proper GST invoices on request — ideal for corporate travellers and business expense claims.",
      icon: "FileText",
    },
  ],

  team: [
    {
      name: "Ramesh Kumar",
      role: "Founder & Director",
      description:
        "A Varanasi native with 15+ years in travel and hospitality. Ramesh built Tirupati Travel on the belief that pilgrims deserve the same comfort and reliability as business travellers.",
    },
    {
      name: "Sunita Devi",
      role: "Operations Head",
      description:
        "Sunita manages daily operations, driver coordination, and customer relations. Her attention to detail ensures every booking runs on time.",
    },
    {
      name: "Ajay Singh",
      role: "Fleet Manager",
      description:
        "Ajay oversees vehicle maintenance, safety standards, and driver onboarding. His 10-year background in automotive keeps the fleet in top condition.",
    },
  ],

  seo: {
    title: "About Us | Tirupati Travel Varanasi | 10+ Years Experience",
    description:
      "About Tirupati Travel — Varanasi's trusted travel agency since 2014. 50,000+ happy pilgrims, 6 cities, 100+ verified drivers. Pilgrimage tours, outstation taxi & local cab services.",
    canonical: "https://tirupatitravel.in/about-us",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT US
// ─────────────────────────────────────────────────────────────────────────────

export const contactUs: StaticPageData = {
  pageType: "contact",
  pageTitle: "Contact Us",
  heroTagline: "Available 24/7 — Call, WhatsApp, or send us a message",

  address:
    "L-2/72, Dashashwamedh Plaza, Dashashwamedh Ghat, Varanasi – 221001, Uttar Pradesh",
  phone: "8726124680",
  whatsapp: "+918726124680",
  email: "info@tirupatitravel.in",

  // Google Maps embed for Dashashwamedh Ghat area, Varanasi
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.9!2d83.0092!3d25.3109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e29bbbbbbbb%3A0xbbbbbbbbbbbbbbbb!2sDashashwamedh+Ghat%2C+Varanasi!5e0!3m2!1sen!2sin!4v1700000000000",
  mapLink: "https://maps.google.com/?q=Dashashwamedh+Ghat+Varanasi",

  seo: {
    title: "Contact Us | Tirupati Travel Varanasi | 8726124680",
    description:
      "Contact Tirupati Travel. Call 8726124680 or WhatsApp +91 8726124680. Visit L-2/72, Dashashwamedh Plaza, Varanasi. Available 24/7.",
    canonical: "https://tirupatitravel.in/contact-us",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PRIVACY POLICY
// ─────────────────────────────────────────────────────────────────────────────

export const privacyPolicy: StaticPageData = {
  pageType: "legal",
  pageTitle: "Privacy Policy",
  heroTagline: "How we collect, use, and protect your information",
  lastUpdated: "January 2025",

  legalSections: [
    {
      heading: "1. Introduction",
      content: `Tirupati Travel ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website tirupatitravel.in or use our cab booking and tour services.\n\nPlease read this policy carefully. If you disagree with its terms, please discontinue use of our website and services.`,
    },
    {
      heading: "2. Information We Collect",
      content: `We may collect the following personal information when you book a cab, enquire about a tour, or contact us:\n\n• **Name** — to address you and confirm your booking.\n• **Phone number** — for booking confirmation, driver coordination, and WhatsApp communication.\n• **Email address** — for sending booking confirmations and invoices (if provided).\n• **Travel details** — pickup location, destination, travel date and time, number of passengers.\n• **Payment information** — we do not store card details. Payments are handled by cash or UPI at the time of travel.\n\nWe also collect non-personal information automatically, including browser type, IP address, pages visited, and time spent on our website through standard web server logs and analytics tools.`,
    },
    {
      heading: "3. How We Use Your Information",
      content: `We use the information we collect for the following purposes:\n\n• To process and confirm your cab or tour booking.\n• To assign a driver and share driver details with you.\n• To send booking confirmations and reminders via WhatsApp or call.\n• To respond to your enquiries and provide customer support.\n• To improve our website, services, and user experience.\n• To send promotional offers or updates (only with your consent; you may opt out at any time by messaging us on WhatsApp or calling 8726124680).`,
    },
    {
      heading: "4. Sharing of Information",
      content: `We do not sell, trade, or rent your personal information to third parties.\n\nWe may share your information with:\n\n• **Drivers** — your name and pickup location are shared with the assigned driver to complete your booking.\n• **Service providers** — third-party tools we use to operate our website (hosting, analytics) may process your data under strict confidentiality agreements.\n• **Legal requirements** — we may disclose your information if required by law or to protect the rights, property, or safety of Tirupati Travel, our customers, or the public.`,
    },
    {
      heading: "5. Data Retention",
      content: `We retain your personal information for as long as necessary to provide our services and comply with our legal obligations. Booking records are typically retained for a period of 3 years for accounting and dispute resolution purposes. You may request deletion of your data by contacting us at info@tirupatitravel.in.`,
    },
    {
      heading: "6. Cookies",
      content: `Our website may use cookies — small data files stored on your browser — to improve your browsing experience, remember your preferences, and analyse website traffic. You may disable cookies in your browser settings, though some features of our website may not function correctly as a result.`,
    },
    {
      heading: "7. Third-Party Links",
      content: `Our website may contain links to third-party websites (such as Google Maps). We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies before providing any personal information.`,
    },
    {
      heading: "8. Security",
      content: `We implement reasonable security measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction. However, no internet transmission or electronic storage method is 100% secure. We cannot guarantee absolute security.`,
    },
    {
      heading: "9. Your Rights",
      content: `You have the right to:\n\n• **Access** the personal information we hold about you.\n• **Correct** any inaccurate or incomplete information.\n• **Request deletion** of your personal data (subject to legal retention requirements).\n• **Opt out** of marketing communications at any time.\n\nTo exercise any of these rights, contact us at info@tirupatitravel.in or call 8726124680.`,
    },
    {
      heading: "10. Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on this page with a revised "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.`,
    },
    {
      heading: "11. Contact",
      content: `If you have questions or concerns about this Privacy Policy, please contact us:\n\nTirupati Travel\nL-2/72, Dashashwamedh Plaza, Dashashwamedh Ghat\nVaranasi – 221001, Uttar Pradesh\nPhone: 8726124680\nEmail: info@tirupatitravel.in`,
    },
  ],

  seo: {
    title: "Privacy Policy | Tirupati Travel",
    description:
      "Privacy policy for Tirupati Travel services. How we collect, use, and protect your personal information.",
    canonical: "https://tirupatitravel.in/privacy-policy",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// TERMS AND CONDITIONS
// ─────────────────────────────────────────────────────────────────────────────

export const termsConditions: StaticPageData = {
  pageType: "legal",
  pageTitle: "Terms and Conditions",
  heroTagline: "Please read these terms carefully before booking with us",
  lastUpdated: "January 2025",

  legalSections: [
    {
      heading: "1. Acceptance of Terms",
      content: `By booking a cab, tour package, or any service through Tirupati Travel (tirupatitravel.in), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.\n\nThese terms apply to all cab bookings, outstation trips, tour packages, airport transfers, and any other services offered by Tirupati Travel.`,
    },
    {
      heading: "2. Booking and Confirmation",
      content: `Bookings may be made via phone call (8726124680), WhatsApp (+91 8726124680), or through our website contact form.\n\nA booking is confirmed only when you receive a verbal or written confirmation from Tirupati Travel along with the assigned driver's name and contact number.\n\nWe recommend confirming your booking at least 2 hours before the scheduled departure time. For early morning trips (before 6 AM), please confirm the previous evening.`,
    },
    {
      heading: "3. Fares and Pricing",
      content: `All fares quoted are inclusive of driver allowance and fuel for the agreed distance or hourly package.\n\n**Additional charges that apply at actual:**\n• Toll taxes on highways\n• State border permits (for inter-state travel)\n• Parking fees\n• Night surcharge for trips between 11 PM and 5 AM may apply\n\n**Extra km and hours:** If your trip exceeds the agreed package distance or time, additional charges apply at the rate communicated at booking.\n\nAll prices are in Indian Rupees (INR). We do not charge in foreign currencies.`,
    },
    {
      heading: "4. Payment Terms",
      content: `Payment is accepted in cash (INR) or via UPI at the time of travel, unless otherwise agreed in writing for corporate accounts.\n\nFor outstation trips, a partial advance may be requested to confirm the booking. This will be communicated clearly at the time of booking.\n\nGST invoices are available on request for all bookings.`,
    },
    {
      heading: "5. Cancellation and Refund Policy",
      content: `**Cancellations by Customer:**\n• Cancellations made more than 2 hours before scheduled pickup: No charge.\n• Cancellations made within 2 hours of scheduled pickup: A cancellation fee equivalent to one hour's waiting charge may apply.\n• No-show (customer not available at pickup point): Driver waiting charges may apply.\n\n**Cancellations by Tirupati Travel:**\nIn rare cases of vehicle breakdown or unavailability, we will make every effort to arrange an alternative vehicle or offer a full refund of any advance paid.\n\nRefunds, where applicable, are processed within 3–5 business days via the original payment method.`,
    },
    {
      heading: "6. Driver and Vehicle",
      content: `Tirupati Travel reserves the right to assign any suitable vehicle from its fleet that meets the booked category (sedan, SUV, tempo traveller, etc.), subject to availability.\n\nIf a specific vehicle model is requested (e.g., Toyota Innova Crysta), we will make every effort to provide it but cannot guarantee the exact model in all cases.\n\nAll drivers provided by Tirupati Travel hold valid commercial vehicle driving licences and are familiar with pilgrimage and tourist routes across UP and Bihar.`,
    },
    {
      heading: "7. Passenger Responsibilities",
      content: `Passengers agree to:\n\n• Treat the driver and vehicle with respect.\n• Not carry prohibited, illegal, or hazardous materials in the vehicle.\n• Not smoke inside any Tirupati Travel vehicle.\n• Inform us of any additional stops or route changes as early as possible — last-minute changes may affect timing and fares.\n• Not ask the driver to violate traffic laws or exceed safe speed limits.\n\nTirupati Travel reserves the right to refuse service to passengers behaving in an abusive, intoxicated, or disorderly manner.`,
    },
    {
      heading: "8. Liability",
      content: `Tirupati Travel is not liable for:\n\n• Delays caused by traffic, road closures, weather, or force majeure events beyond our control.\n• Loss or damage to passenger baggage or personal belongings during travel.\n• Any indirect, consequential, or special damages arising from the use of our services.\n\nOur liability for any claim arising from a booking is limited to the fare paid for that booking.\n\nAll our vehicles carry valid commercial vehicle insurance as required by Indian law.`,
    },
    {
      heading: "9. Tour Packages",
      content: `Tour package itineraries are indicative. Actual coverage may vary based on road conditions, temple timings, crowd levels, and weather.\n\nHotel accommodations included in packages are subject to availability. We will provide equivalent alternatives if the stated property is unavailable.\n\nAny personal expenses, entry fees, monument charges, boat rides, or guide fees not explicitly mentioned in the inclusions list are the passenger's responsibility.`,
    },
    {
      heading: "10. Privacy",
      content: `Your personal information is collected and used in accordance with our Privacy Policy, which is available at tirupatitravel.in/privacy-policy. By using our services, you consent to the collection and use of your information as described in that policy.`,
    },
    {
      heading: "11. Governing Law",
      content: `These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in Varanasi, Uttar Pradesh.`,
    },
    {
      heading: "12. Changes to Terms",
      content: `We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the revised terms.`,
    },
    {
      heading: "13. Contact",
      content: `For questions about these Terms and Conditions:\n\nTirupati Travel\nL-2/72, Dashashwamedh Plaza, Dashashwamedh Ghat\nVaranasi – 221001, Uttar Pradesh\nPhone: 8726124680\nEmail: info@tirupatitravel.in`,
    },
  ],

  seo: {
    title: "Terms and Conditions | Tirupati Travel",
    description:
      "Terms and conditions for using Tirupati Travel cab booking and tour services.",
    canonical: "https://tirupatitravel.in/terms-and-conditions",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// NAMED EXPORTS MAP — used by urlParser.ts DATA_SOURCES
// import * as staticPages → staticPages.aboutUs, staticPages.contactUs, etc.
// ─────────────────────────────────────────────────────────────────────────────
export const staticPages = {
  aboutUs,
  contactUs,
  privacyPolicy,
  termsConditions,
};
