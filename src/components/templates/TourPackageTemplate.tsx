// src/components/templates/TourPackageTemplate.tsx
// TODO: CHUNK 7 — full template implementation
import type { TourPackageData } from '@/data/tourPackages';
export default function TourPackageTemplate({ data }: { data: unknown }) {
  const d = data as TourPackageData;
  return (
    <div className="min-h-screen bg-section-cream">
      <div className="container-site section-pad">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-secondary">{d.packageName}</h1>
        <p className="text-text-secondary mt-3">{d.duration} · From ₹{d.pricing?.perPerson}/person</p>
        <a href="tel:8726124680" className="btn-primary mt-8 inline-flex">Book Now: 8726124680</a>
      </div>
    </div>
  );
}
