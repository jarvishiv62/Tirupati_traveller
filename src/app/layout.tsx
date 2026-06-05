// app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-MN5JDLKG";

export const metadata: Metadata = {
  metadataBase: new URL("https://tirupatitravel.in"),
  title: {
    default: "Tirupati Travel — Best Pilgrimage Tour Packages & Taxi Services",
    template: "%s | Tirupati Travel",
  },
  description:
    "Book affordable pilgrimage tour packages and outstation taxi services with Tirupati Travel. Serving Varanasi, Ayodhya, Allahabad, Gaya & more. Call 8726124680.",
  keywords: [
    "taxi varanasi",
    "varanasi to ayodhya cab",
    "pilgrimage tour packages",
    "outstation taxi varanasi",
    "tirupati travel varanasi",
    "cab booking varanasi",
  ],
  authors: [{ name: "Tirupati Travel", url: "https://tirupatitravel.in" }],
  creator: "Tirupati Travel",
  publisher: "Tirupati Travel",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tirupatitravel.in",
    siteName: "Tirupati Travel",
    title: "Tirupati Travel — Best Pilgrimage Tour Packages & Taxi Services",
    description:
      "Book affordable pilgrimage tour packages and outstation taxi services with Tirupati Travel. Varanasi | Ayodhya | Allahabad | Gaya.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tirupati Travel — Varanasi Pilgrimage Tours & Taxi Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirupati Travel — Best Pilgrimage Tour Packages & Taxi Services",
    description:
      "Book pilgrimage tour packages & outstation taxi from Varanasi.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-token-here",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />

        {/* AOS (Animate On Scroll) CSS */}
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

        {/* Swiper CSS for carousels/sliders */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />

        {/* Font Awesome Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />

        {/* Preconnect for Google Fonts (already using next/font but adding for external) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Lottie Web Player */}
        <script
          src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
          async
        />

        {/* Three.js for 3D effects (optional) */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
          async
        />

        {/* GSAP Core */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          async
        />

        {/* GSAP ScrollTrigger Plugin */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          async
        />

        {/* GSAP ScrollTo Plugin */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollToPlugin.min.js"
          async
        />

        {/* GSAP Text Plugin */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js"
          async
        />

        {/* CountUp.js for number animations */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.8.0/countUp.min.js"
          async
        />

        {/* Particles.js for background effects */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js"
          async
        />

        {/* Vanilla Tilt for 3D card effects */}
        <script
          src="https://cdn.jsdelivr.net/npm/vanilla-tilt@1.8.1/dist/vanilla-tilt.min.js"
          async
        />

        {/* ScrollReveal for scroll animations */}
        <script
          src="https://unpkg.com/scrollreveal@4.0.9/dist/scrollreveal.min.js"
          async
        />
      </head>
      <body>
        {/* GTM NoScript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Initialize AOS */}
        <Script
          id="aos-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                if (typeof AOS !== 'undefined') {
                  AOS.init({
                    duration: 800,
                    once: true,
                    offset: 100,
                    easing: 'ease-in-out'
                  });
                }
              });
            `,
          }}
        />

        {/* Initialize ScrollReveal */}
        <Script
          id="scrollreveal-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                if (typeof ScrollReveal !== 'undefined') {
                  ScrollReveal().reveal('.reveal', {
                    distance: '50px',
                    duration: 800,
                    easing: 'cubic-bezier(0.5, 0, 0, 1)',
                    interval: 100,
                    opacity: 0,
                    scale: 0.95,
                    origin: 'bottom'
                  });
                }
              });
            `,
          }}
        />

        {/* Initialize Vanilla Tilt for 3D cards */}
        <Script
          id="vanilla-tilt-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                if (typeof VanillaTilt !== 'undefined') {
                  VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
                    max: 25,
                    speed: 400,
                    glare: true,
                    'max-glare': 0.5,
                  });
                }
              });
            `,
          }}
        />

        {/* Custom initialization for all CDN libraries */}
        <Script
          id="cdn-libraries-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize GSAP ScrollTrigger
              document.addEventListener('DOMContentLoaded', function() {
                if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);
                  console.log('GSAP plugins registered successfully');
                }

                // Add CSS class for animations
                document.body.classList.add('cdn-libraries-loaded');
              });

              // Function to check if Lottie is loaded
              window.checkLottieLoaded = function() {
                return typeof lottie !== 'undefined';
              };

              // Console log for debugging
              console.log('CDN Libraries loaded:', {
                gsap: typeof gsap !== 'undefined',
                scrollTrigger: typeof ScrollTrigger !== 'undefined',
                lottie: typeof lottie !== 'undefined',
                aos: typeof AOS !== 'undefined',
                scrollReveal: typeof ScrollReveal !== 'undefined',
                particlesJS: typeof particlesJS !== 'undefined',
                VanillaTilt: typeof VanillaTilt !== 'undefined',
                Swiper: typeof Swiper !== 'undefined',
                countUp: typeof countUp !== 'undefined',
                THREE: typeof THREE !== 'undefined'
              });
            `,
          }}
        />

        {children}
      </body>
    </html>
  );
}
