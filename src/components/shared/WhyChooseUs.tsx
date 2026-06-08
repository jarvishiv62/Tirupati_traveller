"use client";

import { useState } from "react";
import {
  CheckCircle,
  XCircle,
  MinusCircle,
  Phone,
  MessageCircle,
  Star,
  Shield,
  MapPin,
  Clock,
  Receipt,
  Users,
  ThumbsUp,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWALink } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────
type CellValue = "yes" | "no" | "partial" | string;

interface CompetitorColumn {
  id: string;
  name: string;
  type: "us" | "app" | "local";
  tagline: string;
  logo: string; // emoji or short label
  color: string; // Tailwind bg class for header
  textColor: string;
}

interface ComparisonRow {
  feature: string;
  icon: React.ElementType;
  tooltip?: string;
  values: Record<string, CellValue>;
}

// ─── Competitor data ──────────────────────────────────────────────────────────
const COLUMNS: CompetitorColumn[] = [
  {
    id: "us",
    name: "Tirupati Travel",
    type: "us",
    tagline: "Your Varanasi Specialist",
    logo: "🛕",
    color: "bg-primary",
    textColor: "text-white",
  },
  {
    id: "ola",
    name: "Ola",
    type: "app",
    tagline: "Ride-hailing app",
    logo: "🟡",
    color: "bg-yellow-500",
    textColor: "text-white",
  },
  {
    id: "uber",
    name: "Uber",
    type: "app",
    tagline: "Ride-hailing app",
    logo: "⚫",
    color: "bg-gray-900",
    textColor: "text-white",
  },
  {
    id: "rapido",
    name: "Rapido",
    type: "app",
    tagline: "Bike & cab app",
    logo: "🔴",
    color: "bg-red-600",
    textColor: "text-white",
  },
  {
    id: "local",
    name: "Local Agents",
    type: "local",
    tagline: "Unorganised sector",
    logo: "🤷",
    color: "bg-gray-400",
    textColor: "text-white",
  },
];

// ─── Comparison rows ──────────────────────────────────────────────────────────
const ROWS: ComparisonRow[] = [
  {
    feature: "Fixed fare — no surge pricing",
    icon: Receipt,
    tooltip: "App-based cabs surge 2–4× during festivals, rain, and peak hours",
    values: {
      us: "yes",
      ola: "no",
      uber: "no",
      rapido: "no",
      local: "partial",
    },
  },
  {
    feature: "Outstation pilgrimage trips",
    icon: MapPin,
    tooltip: "Varanasi → Gaya, Ayodhya, Allahabad, Lucknow etc.",
    values: {
      us: "yes",
      ola: "partial",
      uber: "partial",
      rapido: "no",
      local: "yes",
    },
  },
  {
    feature: "Pilgrimage route expertise",
    icon: Star,
    tooltip: "Temple timings, darshan queues, ghat access, gali navigation",
    values: {
      us: "yes",
      ola: "no",
      uber: "no",
      rapido: "no",
      local: "partial",
    },
  },
  {
    feature: "Pre-bookable in advance",
    icon: Clock,
    tooltip: "Book days or weeks ahead — confirmed cab, not a gamble",
    values: {
      us: "yes",
      ola: "partial",
      uber: "partial",
      rapido: "no",
      local: "yes",
    },
  },
  {
    feature: "Flight tracking (airport trips)",
    icon: Shield,
    tooltip:
      "Driver waits for you even if flight is delayed — at no extra cost",
    values: { us: "yes", ola: "no", uber: "no", rapido: "no", local: "no" },
  },
  {
    feature: "Verified, licensed drivers",
    icon: CheckCircle,
    tooltip:
      "Police verification, valid license, route familiarity — all checked",
    values: {
      us: "yes",
      ola: "yes",
      uber: "yes",
      rapido: "partial",
      local: "partial",
    },
  },
  {
    feature: "Tempo Traveller for groups",
    icon: Users,
    tooltip: "12 & 16-seater Tempo for pilgrim groups",
    values: {
      us: "yes",
      ola: "no",
      uber: "no",
      rapido: "no",
      local: "partial",
    },
  },
  {
    feature: "Transparent GST invoice",
    icon: Receipt,
    tooltip: "GST-compliant invoice for tax or reimbursement claims",
    values: {
      us: "yes",
      ola: "partial",
      uber: "partial",
      rapido: "no",
      local: "no",
    },
  },
  {
    feature: "Hotel + cab combo packages",
    icon: Star,
    tooltip: "End-to-end packages — cab + hotel + darshan in one booking",
    values: {
      us: "yes",
      ola: "no",
      uber: "no",
      rapido: "no",
      local: "partial",
    },
  },
  {
    feature: "Local phone support 24/7",
    icon: Phone,
    tooltip: "Speak to a real Varanasi-based person — not a bot or call centre",
    values: {
      us: "yes",
      ola: "partial",
      uber: "partial",
      rapido: "no",
      local: "partial",
    },
  },
  {
    feature: "WhatsApp booking (instant)",
    icon: MessageCircle,
    tooltip: "Book via WhatsApp — no app download, no account needed",
    values: {
      us: "yes",
      ola: "no",
      uber: "no",
      rapido: "no",
      local: "partial",
    },
  },
  {
    feature: "Price cheaper than app cabs",
    icon: ThumbsUp,
    tooltip:
      "Compared on a 50 km trip — Tirupati Travel is typically 20–35% cheaper",
    values: {
      us: "₹525",
      ola: "₹750–₹1,100",
      uber: "₹800–₹1,200",
      rapido: "₹600–₹900",
      local: "₹600–₹800",
    },
  },
];

// ─── Cell renderer ────────────────────────────────────────────────────────────
function Cell({ value, isUs }: { value: CellValue; isUs: boolean }) {
  if (value === "yes") {
    return (
      <div className="flex justify-center">
        <CheckCircle
          size={20}
          className={isUs ? "text-primary" : "text-success"}
          aria-label="Yes"
        />
      </div>
    );
  }
  if (value === "no") {
    return (
      <div className="flex justify-center">
        <XCircle size={20} className="text-red-400" aria-label="No" />
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="flex justify-center">
        <MinusCircle
          size={20}
          className="text-amber-400"
          aria-label="Partial"
        />
      </div>
    );
  }
  // Custom text value (e.g. price)
  return (
    <p
      className={cn(
        "text-center text-xs font-semibold leading-tight",
        isUs ? "text-primary text-sm font-bold" : "text-text-secondary",
      )}
    >
      {value}
    </p>
  );
}

// ─── USP cards below table ────────────────────────────────────────────────────
const USPS = [
  {
    icon: "🛕",
    title: "Ground-Level Varanasi Knowledge",
    desc: "Our drivers know every gali, temple gate, ghat lane, and parking spot. App cabs rely on Google Maps — we rely on 10+ years of Varanasi experience.",
  },
  {
    icon: "💰",
    title: "20–35% Cheaper Than App Cabs",
    desc: "No surge pricing. No dynamic fare. A 50 km trip costs ₹525 with us vs ₹750–₹1,200 on Ola/Uber — especially during festivals when app prices spike.",
  },
  {
    icon: "📞",
    title: "One Call, Everything Arranged",
    desc: "One call to 8726124680 — and your cab, hotel, darshan, and airport pickup are all handled. App cabs only do the last mile.",
  },
  {
    icon: "🤝",
    title: "Relationship, Not Transaction",
    desc: "We remember your preferences, call you by name, and make sure your pilgrimage goes smoothly. Local operators care in ways apps never can.",
  },
  {
    icon: "🚌",
    title: "Pilgrimage-Grade Fleet",
    desc: "From Swift Dzire to 16-seater Tempo Traveller — all AC, GPS-tracked, serviced vehicles. Right for solo travellers and pilgrim groups of 50+.",
  },
  {
    icon: "🕐",
    title: "No Surge on Festival Days",
    desc: "Navratri, Dev Deepawali, Kartik Purnima — when Ola/Uber surge 3–4×, our fares stay fixed. Your booking price is your travel price.",
  },
];

// ─── Main Component ────────────────────────────────────────────────────────────
interface WhyChooseUsProps {
  context?: { city?: string; vehicle?: string };
  className?: string;
  compact?: boolean; // compact mode — show USP cards only, no full table
}

export default function WhyChooseUs({
  context,
  className,
  compact = false,
}: WhyChooseUsProps) {
  const [showFullTable, setShowFullTable] = useState(false);
  const VISIBLE_ROWS = 6; // rows shown before "Show more"

  const displayedRows = showFullTable ? ROWS : ROWS.slice(0, VISIBLE_ROWS);
  const waHref = buildWALink(
    `Hi, I want to know more about Tirupati Travel services${context?.city ? ` in ${context.city}` : ""}. Please assist.`,
  );

  return (
    <section
      className={cn("bg-section-white section-pad", className)}
      aria-labelledby="why-choose-heading"
    >
      <div className="container-site">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="badge-accent mb-3 inline-block">Why Choose Us</span>
          <h2 id="why-choose-heading" className="section-title">
            Tirupati Travel vs. App Cabs &amp; Local Agents
          </h2>
          <div
            className="flex items-center justify-center gap-2 mt-3 mb-4"
            aria-hidden="true"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-accent/60" />
            <span className="text-primary">✦</span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-accent/60" />
          </div>
          <p className="section-sub max-w-2xl mx-auto">
            On-ground pilgrimage service vs. algorithm-driven ride apps. Here's
            why thousands of pilgrims choose us — especially on festival days.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-xs text-text-secondary">
          <span className="flex items-center gap-1.5">
            <CheckCircle
              size={14}
              className="text-primary"
              aria-hidden="true"
            />{" "}
            Available
          </span>
          <span className="flex items-center gap-1.5">
            <MinusCircle
              size={14}
              className="text-amber-400"
              aria-hidden="true"
            />{" "}
            Limited / partial
          </span>
          <span className="flex items-center gap-1.5">
            <XCircle size={14} className="text-red-400" aria-hidden="true" />{" "}
            Not available
          </span>
        </div>

        {/* ── Comparison Table ────────────────────────────────────────────────── */}
        {!compact && (
          <div className="overflow-x-auto rounded-2xl border border-border-warm shadow-card-warm mb-4">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr>
                  {/* Feature column header */}
                  <th
                    className="text-left px-4 py-3 bg-cream border-b border-border-warm
                                 font-semibold text-secondary text-xs uppercase tracking-wider w-48"
                  >
                    Feature
                  </th>
                  {COLUMNS.map((col) => (
                    <th
                      key={col.id}
                      className={cn(
                        "px-3 py-3 text-center border-b border-border-warm",
                        col.type === "us" ? "bg-primary" : "bg-cream",
                      )}
                    >
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="text-lg" role="img" aria-hidden="true">
                          {col.logo}
                        </span>
                        <span
                          className={cn(
                            "font-bold text-xs leading-tight",
                            col.type === "us" ? "text-white" : "text-secondary",
                          )}
                        >
                          {col.name}
                        </span>
                        {col.type === "us" && (
                          <span className="text-white/70 text-[9px] uppercase tracking-wider">
                            Best Choice
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {displayedRows.map((row, rowIdx) => {
                  const Icon = row.icon;
                  const isAlt = rowIdx % 2 === 1;
                  return (
                    <tr
                      key={row.feature}
                      className={cn(
                        "border-b border-border-warm transition-colors",
                        isAlt ? "bg-cream/50" : "bg-white",
                        "hover:bg-primary-light/20",
                      )}
                    >
                      {/* Feature label */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Icon
                            size={14}
                            className="text-primary flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-text-primary text-xs font-medium leading-snug">
                            {row.feature}
                          </span>
                        </div>
                        {row.tooltip && (
                          <p className="text-text-light text-[10px] mt-0.5 pl-5 leading-tight">
                            {row.tooltip}
                          </p>
                        )}
                      </td>

                      {/* Value cells */}
                      {COLUMNS.map((col) => (
                        <td
                          key={col.id}
                          className={cn(
                            "px-3 py-3 text-center",
                            col.type === "us" && "bg-primary-light/30",
                          )}
                        >
                          <Cell
                            value={row.values[col.id] ?? "no"}
                            isUs={col.type === "us"}
                          />
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Show more / less toggle */}
            {ROWS.length > VISIBLE_ROWS && (
              <button
                onClick={() => setShowFullTable((p) => !p)}
                className="w-full py-3 flex items-center justify-center gap-2
                           text-primary text-xs font-semibold
                           bg-cream hover:bg-primary-light transition-colors
                           border-t border-border-warm"
                aria-expanded={showFullTable}
              >
                {showFullTable ? (
                  <>
                    <ChevronUp size={14} aria-hidden="true" /> Show less
                  </>
                ) : (
                  <>
                    <ChevronDown size={14} aria-hidden="true" /> Show{" "}
                    {ROWS.length - VISIBLE_ROWS} more comparisons
                  </>
                )}
              </button>
            )}
          </div>
        )}

        {/* Price note */}
        {!compact && (
          <p className="text-text-light text-[10px] text-center mb-10">
            * Price comparison based on a 50 km one-way trip in Varanasi. App
            cab prices vary with surge. Festival-day surge on Ola/Uber can be
            2–4× the base price shown.
          </p>
        )}

        {/* ── USP Cards ────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {USPS.map((usp) => (
            <div
              key={usp.title}
              className="card-warm rounded-2xl p-5 hover:-translate-y-1
                         hover:shadow-temple transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <span
                  className="text-2xl flex-shrink-0 w-10 h-10 flex items-center justify-center
                             bg-primary-light rounded-xl"
                  role="img"
                  aria-hidden="true"
                >
                  {usp.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-secondary text-sm mb-1 leading-snug">
                    {usp.title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {usp.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Social proof strip ────────────────────────────────────────────────── */}
        <div className="rounded-2xl bg-gradient-to-r from-secondary to-secondary-light p-6 text-white text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-5">
            {[
              { value: "50,000+", label: "Happy Pilgrims" },
              { value: "10+", label: "Years in Varanasi" },
              { value: "4.8 ★", label: "Average Rating" },
              { value: "24/7", label: "Support Available" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-accent font-serif font-bold text-2xl md:text-3xl leading-none">
                  {value}
                </p>
                <p className="text-white/70 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>

          <p className="text-white/80 text-sm max-w-lg mx-auto mb-5">
            Over 50,000 pilgrims have trusted us for their Varanasi, Ayodhya,
            Gaya, and Allahabad journeys. No app can replace local knowledge.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:8726124680"
              className="btn-gold !px-8 !py-3 !text-sm w-full sm:w-auto"
            >
              <Phone size={15} aria-hidden="true" />
              Call: 8726124680
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp !px-8 !py-3 !text-sm w-full sm:w-auto"
            >
              <MessageCircle size={15} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
