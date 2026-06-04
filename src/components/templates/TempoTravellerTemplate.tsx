// src/components/templates/TempoTravellerTemplate.tsx
// TODO: CHUNK 7 — full template implementation
import type { TempoTravellerData } from '@/data/tempoTraveller';
export default function TempoTravellerTemplate({ data }: { data: unknown }) {
  const d = data as TempoTravellerData;
  return (
    <div className="min-h-screen bg-section-cream">
      <div className="container-site section-pad">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-secondary capitalize">{d.variant} Tempo Traveller in {d.city}</h1>
        <p className="text-text-secondary mt-3">{d.capacity} seats · ₹{d.pricePerKm}/km</p>
        <a href="tel:8726124680" className="btn-primary mt-8 inline-flex">Book Now: 8726124680</a>
      </div>
    </div>
  );
}
