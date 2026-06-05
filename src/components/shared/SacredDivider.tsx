'use client';

// src/components/shared/SacredDivider.tsx
// Animated SVG mandala divider — reacts to scroll
// behavior="expand"   → mandala grows as user scrolls into view  (use AFTER hero, AFTER customer stories)
// behavior="compress" → mandala shrinks as user scrolls into view (use AFTER premium services)

import { useEffect, useRef, useState } from 'react';

type DividerVariant = 'lotus' | 'wave' | 'mandala' | 'gold-line';
type DividerSize    = 'sm' | 'md' | 'lg';
type DividerBehavior = 'expand' | 'compress';

interface SacredDividerProps {
  variant?:   DividerVariant;
  size?:      DividerSize;
  className?: string;
  fromColor?: string;
  toColor?:   string;
  /** expand = mandala grows on scroll-in | compress = mandala shrinks */
  behavior?:  DividerBehavior;
}

const HEIGHTS: Record<DividerSize, string> = {
  sm: 'h-16',
  md: 'h-24',
  lg: 'h-32',
};

/* ── Inline mandala SVG paths (no image dependency) ── */
function MandalaSVG({ scale, opacity }: { scale: number; opacity: number }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{
        transform: `scale(${scale})`,
        opacity,
        transition: 'transform 0.6s cubic-bezier(0.34,1.56,0.64,1), opacity 0.5s ease',
        willChange: 'transform, opacity',
      }}
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
      <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.3" />

      {/* Petal ring — 12 petals */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12;
        const rad   = (angle * Math.PI) / 180;
        const x1 = 100 + 60 * Math.cos(rad);
        const y1 = 100 + 60 * Math.sin(rad);
        const x2 = 100 + 80 * Math.cos(rad + 0.26);
        const y2 = 100 + 80 * Math.sin(rad + 0.26);
        const x3 = 100 + 80 * Math.cos(rad - 0.26);
        const y3 = 100 + 80 * Math.sin(rad - 0.26);
        return (
          <path
            key={i}
            d={`M100,100 Q${x2},${y2} ${x1},${y1} Q${x3},${y3} 100,100`}
            fill="currentColor"
            fillOpacity="0.08"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.35"
          />
        );
      })}

      {/* Inner petal ring — 8 petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8 + 22.5;
        const rad   = (angle * Math.PI) / 180;
        const x1 = 100 + 38 * Math.cos(rad);
        const y1 = 100 + 38 * Math.sin(rad);
        const x2 = 100 + 50 * Math.cos(rad + 0.35);
        const y2 = 100 + 50 * Math.sin(rad + 0.35);
        const x3 = 100 + 50 * Math.cos(rad - 0.35);
        const y3 = 100 + 50 * Math.sin(rad - 0.35);
        return (
          <path
            key={i}
            d={`M100,100 Q${x2},${y2} ${x1},${y1} Q${x3},${y3} 100,100`}
            fill="currentColor"
            fillOpacity="0.12"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeOpacity="0.4"
          />
        );
      })}

      {/* Spokes */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        const rad   = (angle * Math.PI) / 180;
        return (
          <line
            key={i}
            x1="100" y1="100"
            x2={100 + 92 * Math.cos(rad)}
            y2={100 + 92 * Math.sin(rad)}
            stroke="currentColor"
            strokeWidth="0.3"
            strokeOpacity="0.2"
          />
        );
      })}

      {/* Mid rings */}
      <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="38" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.25" />
      <circle cx="100" cy="100" r="22" fill="none" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />

      {/* Centre dot */}
      <circle cx="100" cy="100" r="5"  fill="currentColor" fillOpacity="0.4" />
      <circle cx="100" cy="100" r="10" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.35" />

      {/* Diamond accents at 4 cardinal spoke tips */}
      {[0, 90, 180, 270].map((deg) => {
        const r   = (deg * Math.PI) / 180;
        const cx  = 100 + 83 * Math.cos(r);
        const cy  = 100 + 83 * Math.sin(r);
        return (
          <polygon
            key={deg}
            points={`${cx},${cy - 4} ${cx + 3},${cy} ${cx},${cy + 4} ${cx - 3},${cy}`}
            fill="currentColor"
            fillOpacity="0.35"
          />
        );
      })}
    </svg>
  );
}

/* ── Gold line variant ─────────────────────────────────── */
function GoldLine({ className }: { className: string }) {
  return (
    <div className={`flex items-center justify-center py-4 ${className}`}>
      <div className="divider-gold" />
    </div>
  );
}

/* ── Wave variant ──────────────────────────────────────── */
function WaveDivider({
  size, toColor, className,
}: { size: DividerSize; toColor: string; className: string }) {
  return (
    <div className={`relative overflow-hidden ${HEIGHTS[size]} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <path
          d="M0,24 C180,0 360,48 540,24 C720,0 900,48 1080,24 C1260,0 1380,36 1440,24 L1440,48 L0,48 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}

/* ── Lotus variant ─────────────────────────────────────── */
function LotusDivider({
  size, toColor, className,
}: { size: DividerSize; toColor: string; className: string }) {
  return (
    <div className={`relative overflow-hidden ${HEIGHTS[size]} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <path
          d="M0,0 C240,48 480,48 720,24 C960,0 1200,0 1440,24 L1440,48 L0,48 Z"
          fill={toColor}
        />
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary z-10"
        style={{ fontSize: '20px', opacity: 0.5 }}>
        ❀
      </div>
    </div>
  );
}

/* ── Main mandala divider ──────────────────────────────── */
function MandalaDivider({
  size, toColor, fromColor, className, behavior,
}: {
  size: DividerSize; toColor: string; fromColor: string;
  className: string; behavior: DividerBehavior;
}) {
  const ref      = useRef<HTMLDivElement>(null);
  const [ratio, setRatio]   = useState(0); // 0 → 1 as it enters viewport
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // IntersectionObserver gives us broad entry signal
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setEntered(true);
        else setEntered(false);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    io.observe(el);

    // Scroll handler for fine-grained ratio
    const onScroll = () => {
      if (!el) return;
      const rect   = el.getBoundingClientRect();
      const vh     = window.innerHeight;
      // ratio = 0 when element top is at bottom of screen, 1 when fully centered
      const raw    = 1 - rect.top / vh;
      setRatio(Math.min(1, Math.max(0, raw)));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // init

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // expand: 0.5 → 1.15 as ratio 0→1
  // compress: 1.2 → 0.6 as ratio 0→1
  const scale = behavior === 'expand'
    ? 0.5 + ratio * 0.65
    : 1.2 - ratio * 0.6;

  const opacity = behavior === 'expand'
    ? 0.08 + ratio * 0.22
    : 0.3 - ratio * 0.15;

  const heightMap: Record<DividerSize, string> = {
    sm: 'h-20',
    md: 'h-32',
    lg: 'h-44',
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${heightMap[size]} ${className}`}
      aria-hidden="true"
    >
      {/* Wave shape filling to next section color */}
      <svg viewBox="0 0 1440 128" xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full">
        <path
          d="M0,64 C360,128 720,0 1080,64 C1260,96 1380,40 1440,64 L1440,128 L0,128 Z"
          fill={toColor}
        />
      </svg>

      {/* Mandala centered over the wave seam */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        style={{
          width: size === 'sm' ? 64 : size === 'md' ? 96 : 128,
          height: size === 'sm' ? 64 : size === 'md' ? 96 : 128,
          color: '#FF6B00',
        }}>
        <MandalaSVG scale={scale} opacity={opacity} />
      </div>

      {/* Glow behind mandala */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-0"
        style={{
          width: size === 'sm' ? 80 : size === 'md' ? 120 : 160,
          height: size === 'sm' ? 80 : size === 'md' ? 120 : 160,
          background: 'radial-gradient(circle, rgba(255,107,0,0.18) 0%, transparent 70%)',
          opacity: ratio,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Gold horizontal lines flanking the mandala */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center z-0 px-8 pointer-events-none">
        <div className="sacred-divider-line" />
        <div style={{ width: size === 'sm' ? 80 : size === 'md' ? 112 : 148, flexShrink: 0 }} />
        <div className="sacred-divider-line" />
      </div>
    </div>
  );
}

/* ── Export ────────────────────────────────────────────── */
export default function SacredDivider({
  variant   = 'wave',
  size      = 'md',
  className = '',
  fromColor = '#FDF8F0',
  toColor   = '#FFFFFF',
  behavior  = 'expand',
}: SacredDividerProps) {
  if (variant === 'gold-line') return <GoldLine className={className} />;
  if (variant === 'wave')      return <WaveDivider  size={size} toColor={toColor} className={className} />;
  if (variant === 'lotus')     return <LotusDivider size={size} toColor={toColor} className={className} />;
  if (variant === 'mandala')   return (
    <MandalaDivider
      size={size} toColor={toColor} fromColor={fromColor}
      className={className} behavior={behavior}
    />
  );
  return null;
}