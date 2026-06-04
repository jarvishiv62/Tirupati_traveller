// src/components/templates/CarRentalTemplate.tsx
// TODO: CHUNK 7 — full template implementation
import type { CarRentalData } from '@/data/carRental';
export default function CarRentalTemplate({ data }: { data: unknown }) {
  const d = data as CarRentalData;
  return (
    <div className="min-h-screen bg-section-cream">
      <div className="container-site section-pad">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-secondary capitalize">Car Rental {d.city} — {d.rentalType}</h1>
        <p className="text-text-secondary mt-3">From ₹{d.packages?.[0]?.price} / {d.packages?.[0]?.duration}</p>
        <a href="tel:8726124680" className="btn-primary mt-8 inline-flex">Book Now: 8726124680</a>
      </div>
    </div>
  );
}
