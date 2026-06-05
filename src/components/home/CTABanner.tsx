// src/components/shared/CTABanner.tsx
// Full CTA section — Benefit + Urgency + Risk Reduction formula
// Inline animated mandala SVG (no image file dependency)
// Server Component

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { buildWALink } from '@/lib/utils';

/* ── Inline mandala — no /svg/ file needed ──────────────── */
function InlineMandala({ className = '' }: { className?: string }) {
  const petals12 = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 360) / 12;
    const rad   = (angle * Math.PI) / 180;
    const x1 = 100 + 60 * Math.cos(rad);
    const y1 = 100 + 60 * Math.sin(rad);
    const x2 = 100 + 78 * Math.cos(rad + 0.26);
    const y2 = 100 + 78 * Math.sin(rad + 0.26);
    const x3 = 100 + 78 * Math.cos(rad - 0.26);
    const y3 = 100 + 78 * Math.sin(rad - 0.26);
    return `M100,100 Q${x2},${y2} ${x1},${y1} Q${x3},${y3} 100,100`;
  });

  const petals8 = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * 360) / 8 + 22.5;
    const rad   = (angle * Math.PI) / 180;
    const x1 = 100 + 38 * Math.cos(rad);
    const y1 = 100 + 38 * Math.sin(rad);
    const x2 = 100 + 50 * Math.cos(rad + 0.35);
    const y2 = 100 + 50 * Math.sin(rad + 0.35);
    const x3 = 100 + 50 * Math.cos(rad - 0.35);
    const y3 = 100 + 50 * Math.sin(rad - 0.35);
    return `M100,100 Q${x2},${y2} ${x1},${y1} Q${x3},${y3} 100,100`;
  });

  const spokes16 = Array.from({ length: 16 }, (_, i) => {
    const rad = ((i * 360) / 16 * Math.PI) / 180;
    return { x2: 100 + 92 * Math.cos(rad), y2: 100 + 92 * Math.sin(rad) };
  });

  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
      className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
      <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="0.3" strokeOpacity="0.4" strokeDasharray="3 3" />
      {spokes16.map((s, i) => (
        <line key={i} x1="100" y1="100" x2={s.x2} y2={s.y2}
          stroke="currentColor" strokeWidth="0.25" strokeOpacity="0.25" />
      ))}
      {petals12.map((d, i) => (
        <path key={i} d={d} fill="currentColor" fillOpacity="0.07"
          stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.4" />
      ))}
      {petals8.map((d, i) => (
        <path key={i} d={d} fill="currentColor" fillOpacity="0.12"
          stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.45" />
      ))}
      <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.3" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="38" fill="none" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.3" />
      <circle cx="100" cy="100" r="22" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.35" />
      <circle cx="100" cy="100" r="8"  fill="currentColor" fillOpacity="0.3" />
      <circle cx="100" cy="100" r="13" fill="none" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.4" />
      {[0, 90, 180, 270].map((deg) => {
        const r  = (deg * Math.PI) / 180;
        const cx = 100 + 83 * Math.cos(r);
        const cy = 100 + 83 * Math.sin(r);
        return (
          <polygon key={deg}
            points={`${cx},${cy - 5} ${cx + 4},${cy} ${cx},${cy + 5} ${cx - 4},${cy}`}
            fill="currentColor" fillOpacity="0.4" />
        );
      })}
    </svg>
  );
}

/* ── Trust micro-badges ─────────────────────────────────── */
const TRUST_ITEMS = [
  { icon: '🔒', text: 'No Hidden Charges' },
  { icon: '⚡', text: 'Reply in 15 Minutes' },
  { icon: '🙏', text: '50,000+ Trips Completed' },
  { icon: '⭐', text: '4.8★ Rated Service' },
];

/* ── Main component ─────────────────────────────────────── */
export default function CTABanner() {
  const waLink = buildWALink(
    'Hi, I want to plan a pilgrimage trip with Tirupati Travel. Please help me.',
  );

  return (
    <section className="cta-banner-section">
      {/* ── Background gradient ──────────────────────────── */}
      <div className="cta-banner-bg" aria-hidden="true" />

      {/* ── Mandala — left watermark ─────────────────────── */}
      <div className="cta-mandala cta-mandala--left" aria-hidden="true">
        <InlineMandala className="w-full h-full animate-mandala-slow" />
      </div>

      {/* ── Mandala — right watermark ────────────────────── */}
      <div className="cta-mandala cta-mandala--right" aria-hidden="true">
        <InlineMandala className="w-full h-full animate-mandala-slow" />
      </div>

      {/* ── Glow blobs ──────────────────────────────────── */}
      <div className="cta-glow cta-glow--orange" aria-hidden="true" />
      <div className="cta-glow cta-glow--gold"   aria-hidden="true" />

      <div className="container-site relative z-10 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">

          {/* ── Glassmorphism card ───────────────────────── */}
          <div className="cta-glass-card">

            {/* Eyebrow */}
            <div className="cta-eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
              <span>Start Your Sacred Journey Today</span>
            </div>

            {/* Headline — Benefit-led */}
            <h2 className="cta-headline">
              Ready For A{' '}
              <span className="text-gold-shimmer">Stress‑Free</span>{' '}
              Pilgrimage?
            </h2>

            {/* Subheadline — Social proof */}
            <p className="cta-subheadline">
              Trusted by 50,000+ pilgrims across India. We handle everything —
              AC cabs, darshan slots, hotel bookings &amp; 24/7 support.
            </p>

            {/* ── CTA buttons ──────────────────────────── */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              {/* Primary — strong benefit copy */}
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="cta-btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.888a.5.5 0 00.609.61l6.102-1.502A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.933 0-3.742-.523-5.287-1.434l-.378-.226-3.924.965.942-3.849-.247-.393A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Get My Travel Plan
              </a>

              {/* Secondary — low friction */}
              <a href="tel:8726124680"
                className="cta-btn-secondary">
                <Phone size={18} strokeWidth={2} />
                Talk To Travel Expert
              </a>
            </div>

            {/* ── Trust micro-badges ───────────────────── */}
            <div className="cta-trust-row">
              {TRUST_ITEMS.map(({ icon, text }) => (
                <div key={text} className="cta-trust-item">
                  <span className="text-sm" aria-hidden="true">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* ── Secondary CTA — packages ─────────────── */}
            <div className="cta-packages-link">
              <span className="text-white/50 text-sm">or</span>
              <Link href="/varanasi/varanasi-tour-packages"
                className="cta-packages-anchor">
                See Exact Trip Cost — No Hidden Charges →
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}