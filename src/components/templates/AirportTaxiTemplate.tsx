// src/components/templates/AirportTaxiTemplate.tsx
// TODO: CHUNK 8 — full template implementation
import type { AirportTaxiData } from '@/data/airportTaxi';
export default function AirportTaxiTemplate({ data }: { data: unknown }) {
  const d = data as AirportTaxiData;
  return (
    <div className="min-h-screen bg-section-cream">
      <div className="container-site section-pad">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-secondary">{d.city} Airport Taxi</h1>
        <p className="text-text-secondary mt-3">{d.airport} ({d.iataCode})</p>
        <p className="mt-2 text-text-secondary">Sedan ₹{d.fare?.sedan} · Innova ₹{d.fare?.innova} · Ertiga ₹{d.fare?.ertiga}</p>
        <a href="tel:8726124680" className="btn-primary mt-8 inline-flex">Book Now: 8726124680</a>
      </div>
    </div>
  );
}
