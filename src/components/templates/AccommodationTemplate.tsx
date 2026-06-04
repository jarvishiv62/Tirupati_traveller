// src/components/templates/AccommodationTemplate.tsx
// TODO: CHUNK 8 — full template implementation
import type { AccommodationData } from '@/data/accommodation';
export default function AccommodationTemplate({ data }: { data: unknown }) {
  const d = data as AccommodationData;
  return (
    <div className="min-h-screen bg-section-cream">
      <div className="container-site section-pad">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-secondary capitalize">{d.accType} in {d.city}</h1>
        <p className="text-text-secondary mt-3">₹{d.priceRange?.min} – ₹{d.priceRange?.max} per night</p>
        <a href="tel:8726124680" className="btn-primary mt-8 inline-flex">Book with Us: 8726124680</a>
      </div>
    </div>
  );
}
