// src/components/shared/CTABanner.tsx
// Raw, industrial CTA — no glassmorphism, hard edges, honest copy
// Server Component

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { buildWALink } from '@/lib/utils';

/* ── Inline mandala — subtle background only ─────────── */
function InlineMandala({ className = '' }: { className?: string }) {
  const petals12 = Array.from({ length: 12 }, (_, i) => {
    const rad = ((i * 360) / 12 * Math.PI) / 180;
    const x1 = 100 + 60 * Math.cos(rad), y1 = 100 + 60 * Math.sin(rad);
    const x2 = 100 + 78 * Math.cos(rad + 0.26), y2 = 100 + 78 * Math.sin(rad + 0.26);
    const x3 = 100 + 78 * Math.cos(rad - 0.26), y3 = 100 + 78 * Math.sin(rad - 0.26);
    return `M100,100 Q${x2},${y2} ${x1},${y1} Q${x3},${y3} 100,100`;
  });
  const petals8 = Array.from({ length: 8 }, (_, i) => {
    const rad = (((i * 360) / 8 + 22.5) * Math.PI) / 180;
    const x1 = 100 + 38 * Math.cos(rad), y1 = 100 + 38 * Math.sin(rad);
    const x2 = 100 + 50 * Math.cos(rad + 0.35), y2 = 100 + 50 * Math.sin(rad + 0.35);
    const x3 = 100 + 50 * Math.cos(rad - 0.35), y3 = 100 + 50 * Math.sin(rad - 0.35);
    return `M100,100 Q${x2},${y2} ${x1},${y1} Q${x3},${y3} 100,100`;
  });
  const spokes = Array.from({ length: 16 }, (_, i) => {
    const rad = ((i * 360) / 16 * Math.PI) / 180;
    return { x2: 100 + 92 * Math.cos(rad), y2: 100 + 92 * Math.sin(rad) };
  });
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
      className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.45" />
      <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="0.3" strokeOpacity="0.3" strokeDasharray="3 3" />
      {spokes.map((s, i) => (
        <line key={i} x1="100" y1="100" x2={s.x2} y2={s.y2}
          stroke="currentColor" strokeWidth="0.2" strokeOpacity="0.18" />
      ))}
      {petals12.map((d, i) => (
        <path key={i} d={d} fill="currentColor" fillOpacity="0.06"
          stroke="currentColor" strokeWidth="0.35" strokeOpacity="0.3" />
      ))}
      {petals8.map((d, i) => (
        <path key={i} d={d} fill="currentColor" fillOpacity="0.10"
          stroke="currentColor" strokeWidth="0.45" strokeOpacity="0.35" />
      ))}
      <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="0.35" strokeOpacity="0.22" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="38" fill="none" stroke="currentColor" strokeWidth="0.35" strokeOpacity="0.22" />
      <circle cx="100" cy="100" r="22" fill="none" stroke="currentColor" strokeWidth="0.45" strokeOpacity="0.28" />
      <circle cx="100" cy="100" r="7"  fill="currentColor" fillOpacity="0.28" />
      {[0, 90, 180, 270].map((deg) => {
        const r = (deg * Math.PI) / 180;
        const cx = 100 + 83 * Math.cos(r), cy = 100 + 83 * Math.sin(r);
        return (
          <polygon key={deg}
            points={`${cx},${cy - 4} ${cx + 3},${cy} ${cx},${cy + 4} ${cx - 3},${cy}`}
            fill="currentColor" fillOpacity="0.35" />
        );
      })}
    </svg>
  );
}

const WA_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
    viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.888a.5.5 0 00.609.61l6.102-1.502A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.933 0-3.742-.523-5.287-1.434l-.378-.226-3.924.965.942-3.849-.247-.393A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

export default function CTABanner() {
  const waLink = buildWALink(
    `Hi Tirupati Travel,

I want to book a cab. Here are my details:

Pickup Location:
Drop Location:
Travel Date:
Passengers:

Please share the price.`
  );

  return (
    <section className="cta-banner-section">
      <div className="cta-banner-bg" aria-hidden="true" />

      {/* Mandala watermarks */}
      <div className="cta-mandala cta-mandala--left"  aria-hidden="true">
        <InlineMandala className="w-full h-full animate-mandala-slow" />
      </div>
      <div className="cta-mandala cta-mandala--right" aria-hidden="true">
        <InlineMandala className="w-full h-full animate-mandala-slow" />
      </div>
      <div className="cta-glow cta-glow--orange" aria-hidden="true" />
      <div className="cta-glow cta-glow--gold"   aria-hidden="true" />

      {/* Gold top rule */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
        style={{ background: 'linear-gradient(90deg, #8A5C0C, #DE9619, #F0B84A, #DE9619, #8A5C0C)' }}
        aria-hidden="true" />

      <div className="container-site relative z-10 py-14 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="cta-glass-card">

            {/* Eyebrow — plain, honest */}
            <div className="cta-eyebrow">
              <span className="w-1.5 h-1.5 flex-shrink-0" style={{ background: '#DE9619' }} />
              Book Your Cab — Varanasi &amp; Nearby
            </div>

            {/* Headline — specific, not generic */}
            <h2 className="cta-headline">
              Get Your Fare in{' '}
              <span className="text-gold-shimmer">15 Minutes.</span>
              <br className="hidden sm:block" />
              No Calls. Just WhatsApp.
            </h2>

            {/* Subheadline — conversational */}
            <p className="cta-subheadline">
              Send us your route on WhatsApp — pickup, drop, date. We reply with a
              fixed price within 15 minutes. No hidden charges. No meter. Book confirmed.
            </p>

            {/* CTA pair */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="cta-btn-primary">
                {WA_ICON}
                WhatsApp Us — Get Price Now
              </a>
              <a href="tel:8726124680" className="cta-btn-secondary">
                <Phone size={16} strokeWidth={2.5} />
                Call: 87261 24680
              </a>
            </div>

            {/* Trust row — specific facts, not marketing */}
            <div className="cta-trust-row">
              {[
                { icon: '🔒', text: 'Fixed price, no surprise' },
                { icon: '⚡', text: 'Reply in 15 minutes' },
                { icon: '🙏', text: '50,000+ trips done' },
                { icon: '📋', text: 'GST invoice provided' },
              ].map(({ icon, text }) => (
                <div key={text} className="cta-trust-item">
                  <span aria-hidden="true">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Soft secondary link */}
            <div className="cta-packages-link">
              <span className="text-[11px] uppercase tracking-wider"
                style={{ color: 'rgba(255,255,255,0.25)' }}>or browse first</span>
              <Link href="/varanasi/varanasi-tour-packages" className="cta-packages-anchor">
                View Tour Packages with Exact Prices →
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}