// src/app/blogs/[slug]/page.tsx
// Individual blog post page
// TODO: CHUNK 9 — full implementation

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LayoutShell from '@/components/shared/LayoutShell';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: `Blog | Tirupati Travel`,
    alternates: { canonical: `https://tirupatitravel.in/blogs/${params.slug}` },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <LayoutShell>
      <div className="min-h-screen bg-section-cream">
        <div className="container-site section-pad">
          <h1 className="text-3xl font-serif font-bold text-secondary">Blog Post</h1>
          <p className="text-text-secondary mt-4">Slug: {params.slug}</p>
          <p className="text-text-light mt-2 text-sm">Full implementation in Chunk 9.</p>
        </div>
      </div>
    </LayoutShell>
  );
}
