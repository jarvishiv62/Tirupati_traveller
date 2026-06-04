// src/components/templates/CabServiceTemplate.tsx
// TODO: CHUNK 5 — full template implementation
import type { CabServiceData } from '@/data/cityServices';
export default function CabServiceTemplate({ data }: { data: unknown }) {
  const d = data as CabServiceData;
  return (
    <div className="min-h-screen bg-section-cream">
      <div className="container-site section-pad">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-secondary capitalize">{d.serviceType} Cab in {d.city}</h1>
        <p className="text-text-secondary mt-3">Sedan ₹{d.pricing?.sedan} · Innova ₹{d.pricing?.innova} · Ertiga ₹{d.pricing?.ertiga}</p>
        <a href="tel:8726124680" className="btn-primary mt-8 inline-flex">Book Now: 8726124680</a>
      </div>
    </div>
  );
}
