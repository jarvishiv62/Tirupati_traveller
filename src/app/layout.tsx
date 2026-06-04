import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-MN5JDLKG';

export const metadata: Metadata = {
  metadataBase: new URL('https://tirupatitravel.in'),
  title: {
    default: 'Tirupati Travel — Best Pilgrimage Tour Packages & Taxi Services',
    template: '%s | Tirupati Travel',
  },
  description:
    'Book affordable pilgrimage tour packages and outstation taxi services with Tirupati Travel. Serving Varanasi, Ayodhya, Allahabad, Gaya & more. Call 8726124680.',
  keywords: [
    'taxi varanasi',
    'varanasi to ayodhya cab',
    'pilgrimage tour packages',
    'outstation taxi varanasi',
    'tirupati travel varanasi',
    'cab booking varanasi',
  ],
  authors: [{ name: 'Tirupati Travel', url: 'https://tirupatitravel.in' }],
  creator: 'Tirupati Travel',
  publisher: 'Tirupati Travel',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://tirupatitravel.in',
    siteName: 'Tirupati Travel',
    title: 'Tirupati Travel — Best Pilgrimage Tour Packages & Taxi Services',
    description:
      'Book affordable pilgrimage tour packages and outstation taxi services with Tirupati Travel. Varanasi | Ayodhya | Allahabad | Gaya.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tirupati Travel — Varanasi Pilgrimage Tours & Taxi Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tirupati Travel — Best Pilgrimage Tour Packages & Taxi Services',
    description: 'Book pilgrimage tour packages & outstation taxi from Varanasi.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-token-here',
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
      </head>
      <body>
        {/* GTM NoScript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}