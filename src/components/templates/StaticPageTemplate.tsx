// src/components/templates/StaticPageTemplate.tsx
// TODO: CHUNK 9 — full template implementation
import type { StaticPageData } from '@/data/staticPages';
export default function StaticPageTemplate({ data }: { data: unknown }) {
  const d = data as StaticPageData;
  return (
    <div className="min-h-screen bg-section-cream">
      <div className="container-site section-pad">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-secondary">{d.pageTitle}</h1>
        <div className="mt-6 prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: d.content }} />
      </div>
    </div>
  );
}
