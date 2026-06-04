// src/components/templates/VehicleTemplate.tsx
// TODO: CHUNK 4 — full template implementation
import type { VehicleData } from '@/data/vehicles';
export default function VehicleTemplate({ data }: { data: unknown }) {
  const d = data as VehicleData;
  return (
    <div className="min-h-screen bg-section-cream">
      <div className="container-site section-pad">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-secondary">{d.vehicleName} in {d.city}</h1>
        <p className="text-text-secondary mt-3">₹{d.pricePerKm}/km · {d.specs?.seats} seats · AC</p>
        <a href="tel:8726124680" className="btn-primary mt-8 inline-flex">Book Now: 8726124680</a>
      </div>
    </div>
  );
}
