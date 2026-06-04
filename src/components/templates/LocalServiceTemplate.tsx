// src/components/templates/LocalServiceTemplate.tsx
// TODO: CHUNK 5 — full template implementation
import type { CabServiceData } from '@/data/cityServices';
export default function LocalServiceTemplate({ data }: { data: unknown }) {
  const d = data as CabServiceData;
  return (
    <div className="min-h-screen bg-section-cream">
      <div className="container-site section-pad">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-secondary">{d.city} Local Sightseeing Cab</h1>
        <p className="text-text-secondary mt-3">8 hrs / 80 km · Sedan ₹{d.pricing?.sedan}</p>
        <a href="tel:8726124680" className="btn-primary mt-8 inline-flex">Book Now: 8726124680</a>
      </div>
    </div>
  );
}
