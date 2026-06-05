// src/components/shared/EEATSection.tsx
// Full EEAT rebuild — Experience · Expertise · Authority · Trust
// Server Component

import {
  Shield, Star, Award, Users, MapPin, Clock,
  CheckCircle, Banknote, Headphones, Navigation,
  Car, Plane, Compass, Users2, Building2, BadgeCheck,
} from 'lucide-react';

/* ── Layer 1 — Experience stats ────────────────────────── */
const EXPERIENCE_STATS = [
  { value: '12+',     label: 'Years Serving Pilgrims',  icon: Clock,      color: '#FF6B00' },
  { value: '50,000+', label: 'Completed Trips',          icon: Navigation, color: '#1A237E' },
  { value: '4.8★',    label: 'Average Rating',           icon: Star,       color: '#FFD600' },
  { value: '24/7',    label: 'Travel Support',           icon: Headphones, color: '#FF6B00' },
];

/* ── Layer 2 — Expertise service tiles ─────────────────── */
const EXPERTISE_TILES = [
  { icon: Building2, label: 'Temple Darshan Trips',   desc: 'Kashi, Ayodhya, Vindhyachal & all major shrines' },
  { icon: Plane,     label: 'Airport Transfers',       desc: 'Varanasi airport pickups & drops, all hours' },
  { icon: Users2,    label: 'Family Pilgrimage Tours', desc: 'Custom itineraries for groups & families' },
  { icon: Car,       label: 'Outstation Cab Hire',     desc: 'One-way & round-trip across UP & Bihar' },
  { icon: Compass,   label: 'Sightseeing Packages',    desc: 'Varanasi, Sarnath, Gaya & beyond' },
  { icon: Users,     label: 'Corporate Travel',         desc: 'Reliable fleet for business delegations' },
];

/* ── Layer 3 — Authority badges ────────────────────────── */
const AUTHORITY_BADGES = [
  {
    icon: '🏛️',
    title: 'GST Registered',
    subtitle: 'Govt. of India',
    detail: 'GSTIN: 09XXXXX0000X1ZX',
    color: 'from-blue-900/40 to-blue-800/20',
    border: 'border-blue-500/20',
  },
  {
    icon: '📋',
    title: 'Licensed Operator',
    subtitle: 'UP Tourism Dept.',
    detail: 'Tourist Vehicle Permit Holder',
    color: 'from-orange-900/40 to-orange-800/20',
    border: 'border-orange-500/20',
  },
  {
    icon: '🤝',
    title: 'Travel Association',
    subtitle: 'IATO Member',
    detail: 'Indian Assoc. of Tour Operators',
    color: 'from-amber-900/40 to-amber-800/20',
    border: 'border-amber-500/20',
  },
  {
    icon: '⭐',
    title: 'Google Verified',
    subtitle: '4.8 / 5.0 Rating',
    detail: '1,200+ verified reviews',
    color: 'from-yellow-900/40 to-yellow-800/20',
    border: 'border-yellow-500/20',
  },
];

/* ── Layer 4 — Trust verification badges ───────────────── */
const TRUST_BADGES = [
  { icon: BadgeCheck, label: 'GST Verified Business',  color: '#22c55e' },
  { icon: Shield,     label: 'Verified & Licensed Drivers', color: '#3b82f6' },
  { icon: Banknote,   label: 'Transparent Pricing',    color: '#f59e0b' },
  { icon: Headphones, label: '24/7 Customer Support',  color: '#FF6B00' },
  { icon: Navigation, label: 'Live Trip Tracking',     color: '#8b5cf6' },
  { icon: Award,      label: 'Insured Fleet',           color: '#ec4899' },
];

/* ── Founder quote block (text + decorative icon) ───────── */
function FounderBlock() {
  return (
    <div className="eeat-founder-block">
      {/* Decorative OM icon instead of image */}
      <div className="eeat-founder-icon" aria-hidden="true">
        <span className="eeat-founder-om">ॐ</span>
        <div className="eeat-founder-icon-ring" />
      </div>

      <div className="eeat-founder-content">
        <div className="eeat-founder-quote-mark" aria-hidden="true">
          &quot;
        </div>
        <blockquote className="eeat-founder-quote">
          For the last 12 years, our mission has been making pilgrimage travel{' '}
          <em>simple, safe and reliable</em> — so every pilgrim reaches their sacred
          destination with peace of mind, not stress.
        </blockquote>
        <div className="eeat-founder-attribution">
          <div className="eeat-founder-name">Tirupati Travel Team</div>
          <div className="eeat-founder-title">Varanasi · Since 2012</div>
        </div>
      </div>
    </div>
  );
}

/* ── Main section ───────────────────────────────────────── */
interface EEATSectionProps {
  className?: string;
  compact?:   boolean;
}

export default function EEATSection({ className = '', compact = false }: EEATSectionProps) {
  if (compact) {
    /* Compact mode — just the stats row */
    return (
      <section className={`bg-section-white section-pad-sm ${className}`}>
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {EXPERIENCE_STATS.map(({ value, label, icon: Icon, color }) => (
              <div key={label} className="eeat-stat-card">
                <div className="eeat-stat-icon" style={{ background: `${color}18`, color }}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div className="eeat-stat-value" style={{ color }}>{value}</div>
                <div className="eeat-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`bg-section-cream section-pad ${className}`} style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Background decoration */}
      <div className="eeat-bg-om" aria-hidden="true">ॐ</div>

      <div className="container-site relative z-10">

        {/* ── Section header ────────────────────────────── */}
        <div className="text-center mb-14">
          <p className="text-primary font-medium tracking-widest uppercase text-xs mb-3">
            Trusted Since 2012
          </p>
          <h2 className="section-title">
            Why 50,000+ Travelers<br className="hidden sm:block" /> Choose Tirupati Travel
          </h2>
          <div className="divider-gold" />
          <p className="section-sub mt-4 max-w-xl mx-auto">
            Not just a cab service — a pilgrimage partner with verified credentials,
            expert teams, and a decade of sacred journeys.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════
            LAYER 1 — EXPERIENCE STATS
        ══════════════════════════════════════════════════ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {EXPERIENCE_STATS.map(({ value, label, icon: Icon, color }) => (
            <div key={label} className="eeat-stat-card eeat-stat-card--full">
              <div className="eeat-stat-icon eeat-stat-icon--lg" style={{ background: `${color}15`, color }}>
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <div className="eeat-stat-value eeat-stat-value--lg" style={{ color }}>{value}</div>
              <div className="eeat-stat-label">{label}</div>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════
            LAYER 2 — EXPERTISE TILES
        ══════════════════════════════════════════════════ */}
        <div className="mb-16">
          <div className="eeat-layer-heading">
            <span className="eeat-layer-pill">Expertise</span>
            <h3 className="eeat-layer-title">Dedicated Teams For Every Journey Type</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXPERTISE_TILES.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="eeat-expertise-card">
                <div className="eeat-expertise-icon">
                  <Icon size={22} strokeWidth={1.5} className="text-primary" />
                </div>
                <div>
                  <div className="eeat-expertise-label">{label}</div>
                  <div className="eeat-expertise-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            LAYER 3 — AUTHORITY BADGES
        ══════════════════════════════════════════════════ */}
        <div className="mb-16">
          <div className="eeat-layer-heading">
            <span className="eeat-layer-pill eeat-layer-pill--navy">Authority</span>
            <h3 className="eeat-layer-title">Verified Credentials &amp; Registrations</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AUTHORITY_BADGES.map(({ icon, title, subtitle, detail, color, border }) => (
              <div key={title} className={`eeat-authority-card bg-gradient-to-br ${color} ${border}`}>
                <div className="eeat-authority-icon">{icon}</div>
                <div className="eeat-authority-title">{title}</div>
                <div className="eeat-authority-subtitle">{subtitle}</div>
                <div className="eeat-authority-detail">{detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            LAYER 4 — TRUST VERIFICATION BADGES
        ══════════════════════════════════════════════════ */}
        <div className="mb-16">
          <div className="eeat-layer-heading">
            <span className="eeat-layer-pill eeat-layer-pill--gold">Trust</span>
            <h3 className="eeat-layer-title">Every Journey — Verified &amp; Secured</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {TRUST_BADGES.map(({ icon: Icon, label, color }) => (
              <div key={label} className="eeat-trust-badge-card">
                <div className="eeat-trust-badge-icon" style={{ color }}>
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <div className="eeat-trust-badge-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            FOUNDER QUOTE BLOCK
        ══════════════════════════════════════════════════ */}
        <FounderBlock />
      </div>
    </section>
  );
}