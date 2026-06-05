// src/components/shared/PricingTable.tsx
// Pricing table component — card-warm style, per-vehicle-type rows.
// Used in CabServiceTemplate and LocalServiceTemplate.
// Server Component.

import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWALink } from "@/lib/utils";

export interface PricingRow {
  vehicle: string; // e.g. 'Swift Dzire'
  category: string; // e.g. 'Sedan (4 seats)'
  price: number; // base/starting price
  priceLabel?: string; // override label e.g. '₹2,500 / 12 hrs'
  features: string[]; // short feature tags e.g. ['AC', 'GPS']
}

interface PricingTableProps {
  rows: PricingRow[];
  serviceLabel: string; // e.g. 'Full Day Taxi'
  city: string; // e.g. 'Varanasi'
  note?: string; // optional footnote
  className?: string;
}

export default function PricingTable({
  rows,
  serviceLabel,
  city,
  note,
  className,
}: PricingTableProps) {
  return (
    <div className={cn("card-warm rounded-2xl overflow-hidden", className)}>
      {/* Table header */}
      <div className="bg-secondary px-5 py-3 flex items-center justify-between">
        <h3 className="font-serif font-bold text-white text-base">
          {serviceLabel} — {city} Fare
        </h3>
        <span className="text-white/60 text-xs">All prices inclusive</span>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-3 bg-cream-dark px-5 py-2 border-b border-border-warm">
        <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
          Vehicle
        </span>
        <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide text-center">
          Starting Fare
        </span>
        <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide text-right">
          Book
        </span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-border-warm">
        {rows.map((row, idx) => {
          const waMsg = buildWALink(
            `Hi, I want to book a ${row.vehicle} for ${serviceLabel} in ${city}. Please confirm availability.`,
          );
          return (
            <div
              key={row.vehicle}
              className={cn(
                "grid grid-cols-3 items-center px-5 py-4 gap-2",
                idx % 2 === 0 ? "bg-white" : "bg-cream/40",
              )}
            >
              {/* Vehicle name + features */}
              <div>
                <div className="font-medium text-text-primary text-sm">
                  {row.vehicle}
                </div>
                <div className="text-text-light text-xs mt-0.5">
                  {row.category}
                </div>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {row.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-0.5 text-xs text-primary"
                    >
                      <CheckCircle size={10} />
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="text-center">
                <div className="font-bold text-primary font-serif text-lg leading-none">
                  ₹{row.price.toLocaleString("en-IN")}
                </div>
                {row.priceLabel && (
                  <div className="text-text-light text-xs mt-0.5">
                    {row.priceLabel}
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="flex justify-end">
                <a
                  href={waMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs px-3 py-2 rounded-full whitespace-nowrap"
                >
                  Book
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footnote */}
      {note && (
        <div className="px-5 py-3 bg-cream-dark border-t border-border-warm">
          <p className="text-text-light text-xs">{note}</p>
        </div>
      )}
    </div>
  );
}
