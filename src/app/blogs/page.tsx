// src/app/blogs/page.tsx
// Public blog listing page
// TODO: CHUNK 9 — full implementation

import type { Metadata } from 'next';
import LayoutShell from '@/components/shared/LayoutShell';

export const metadata: Metadata = {
  title: 'Travel Blog | Tirupati Travel Varanasi',
  description: 'Read our travel blog for tips on pilgrimage, Varanasi ghats, Ayodhya darshan, and outstation travel.',
  alternates: { canonical: 'https://tirupatitravel.in/blogs' },
};

export default function BlogsPage() {
  return (
    <LayoutShell>
      <div className="min-h-screen bg-section-cream">
        <div className="container-site section-pad">
          <h1 className="text-4xl font-serif font-bold text-secondary">Travel Blog</h1>
          <div className="divider-gold-left mt-3 mb-8" />
          <p className="text-text-secondary">
            Travel tips, pilgrimage guides & destination stories from Varanasi.
          </p>
          <p className="text-text-light mt-4 text-sm">Blog posts coming soon...</p>
        </div>
      </div>
    </LayoutShell>
  );
}
