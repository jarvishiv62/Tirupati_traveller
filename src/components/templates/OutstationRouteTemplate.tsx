// src/components/templates/OutstationRouteTemplate.tsx
// TODO: CHUNK 6 — full template implementation
import type { OutstationRouteData } from '@/data/varanasiRoutes';
export default function OutstationRouteTemplate({ data }: { data: unknown }) {
  const d = data as OutstationRouteData;
  return (
    <div className="min-h-screen bg-section-cream">
      <div className="container-site section-pad">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-secondary">
          {d.origin} to {d.destination} Taxi
        </h1>
        <p className="text-text-secondary mt-3">{d.distance} · {d.duration}</p>
        <p className="mt-2 text-text-secondary">Sedan ₹{d.fare?.sedan} · Innova ₹{d.fare?.innova} · Ertiga ₹{d.fare?.ertiga}</p>
        <div className="flex gap-3 mt-8">
          <a href="tel:8726124680" className="btn-primary">Call: 8726124680</a>
          <a href={`https://wa.me/918726124680?text=Hi%2C%20I%20want%20to%20book%20taxi%20from%20${encodeURIComponent(d.origin)}%20to%20${encodeURIComponent(d.destination)}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
