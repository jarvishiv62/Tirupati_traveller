// src/components/shared/EEATSection.tsx
import {
  Shield, Star, Award, Users, Clock, CheckCircle,
  Banknote, Headphones, Navigation, Car, Plane,
  Compass, Users2, Building2, BadgeCheck,
} from 'lucide-react';

const GOLD   = '#DE9619';
const GOLD_L = '#F0B84A';
const GOLD_D = '#B87A10';
const BLACK  = '#1A1A1A';
const CHAR   = '#2C2C2C';

const EXPERIENCE_STATS = [
  { value: '12+',     label: 'Years Serving Pilgrims', icon: Clock,      color: GOLD   },
  { value: '50,000+', label: 'Completed Trips',         icon: Navigation, color: BLACK  },
  { value: '4.8★',    label: 'Average Rating',          icon: Star,       color: GOLD_L },
  { value: '24/7',    label: 'Travel Support',          icon: Headphones, color: GOLD_D },
];

const EXPERTISE_TILES = [
  { icon: Building2, label: 'Temple Darshan Trips',   desc: 'Kashi, Ayodhya, Vindhyachal & all major shrines' },
  { icon: Plane,     label: 'Airport Transfers',       desc: 'Varanasi airport pickups & drops, all hours' },
  { icon: Users2,    label: 'Family Pilgrimage Tours', desc: 'Custom itineraries for groups & families' },
  { icon: Car,       label: 'Outstation Cab Hire',     desc: 'One-way & round-trip across UP & Bihar' },
  { icon: Compass,   label: 'Sightseeing Packages',    desc: 'Varanasi, Sarnath, Gaya & beyond' },
  { icon: Users,     label: 'Corporate Travel',         desc: 'Reliable fleet for business delegations' },
];

const AUTHORITY_BADGES = [
  { icon: '🏛️', title: 'GST Registered',     subtitle: 'Govt. of India',    detail: 'GSTIN: 09XXXXX0000X1ZX' },
  { icon: '📋', title: 'Licensed Operator',   subtitle: 'UP Tourism Dept.',  detail: 'Tourist Vehicle Permit Holder' },
  { icon: '🤝', title: 'Travel Association',  subtitle: 'IATO Member',       detail: 'Indian Assoc. of Tour Operators' },
  { icon: '⭐', title: 'Google Verified',     subtitle: '4.8 / 5.0 Rating',  detail: '1,200+ verified reviews' },
];

const TRUST_BADGES = [
  { icon: BadgeCheck, label: 'GST Verified Business',     color: GOLD   },
  { icon: Shield,     label: 'Verified & Licensed Drivers', color: BLACK  },
  { icon: Banknote,   label: 'Transparent Pricing',       color: GOLD_L },
  { icon: Headphones, label: '24/7 Customer Support',     color: GOLD_D },
  { icon: Navigation, label: 'Live Trip Tracking',        color: GOLD   },
  { icon: Award,      label: 'Insured Fleet',             color: BLACK  },
];

function FounderBlock() {
  return (
    <div className="eeat-founder-block">
      <div className="eeat-founder-icon" aria-hidden="true">
        <span className="eeat-founder-om">ॐ</span>
        <div className="eeat-founder-icon-ring" />
      </div>
      <div className="eeat-founder-content">
        <div className="eeat-founder-quote-mark" aria-hidden="true">"</div>
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

interface EEATSectionProps { className?: string; compact?: boolean; }

export default function EEATSection({ className = '', compact = false }: EEATSectionProps) {
  if (compact) {
    return (
      <section className={`bg-section-white section-pad-sm ${className}`}>
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {EXPERIENCE_STATS.map(({ value, label, icon: Icon, color }) => (
              <div key={label} className="eeat-stat-card">
                <div className="eeat-stat-icon"
                  style={{ background: `${color}14`, color }}>
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
    <section className={`bg-section-cream section-pad ${className}`}
      style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="eeat-bg-om" aria-hidden="true">ॐ</div>

      <div className="container-site relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-medium tracking-widest uppercase text-xs mb-3"
            style={{ color: GOLD }}>
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

        {/* Layer 1 — Experience */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {EXPERIENCE_STATS.map(({ value, label, icon: Icon, color }) => (
            <div key={label} className="eeat-stat-card eeat-stat-card--full">
              <div className="eeat-stat-icon eeat-stat-icon--lg"
                style={{ background: `${color}12`, color }}>
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <div className="eeat-stat-value eeat-stat-value--lg" style={{ color }}>{value}</div>
              <div className="eeat-stat-label">{label}</div>
            </div>
          ))}
        </div>

        {/* Layer 2 — Expertise */}
        <div className="mb-16">
          <div className="eeat-layer-heading">
            <span className="eeat-layer-pill">Expertise</span>
            <h3 className="eeat-layer-title">Dedicated Teams For Every Journey Type</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXPERTISE_TILES.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="eeat-expertise-card">
                <div className="eeat-expertise-icon">
                  <Icon size={22} strokeWidth={1.5} style={{ color: GOLD }} />
                </div>
                <div>
                  <div className="eeat-expertise-label">{label}</div>
                  <div className="eeat-expertise-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 3 — Authority */}
        <div className="mb-16">
          <div className="eeat-layer-heading">
            <span className="eeat-layer-pill eeat-layer-pill--navy">Authority</span>
            <h3 className="eeat-layer-title">Verified Credentials &amp; Registrations</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AUTHORITY_BADGES.map(({ icon, title, subtitle, detail }) => (
              <div key={title} className="eeat-authority-card">
                <div className="eeat-authority-icon">{icon}</div>
                <div className="eeat-authority-title">{title}</div>
                <div className="eeat-authority-subtitle">{subtitle}</div>
                <div className="eeat-authority-detail">{detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 4 — Trust */}
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

        {/* Founder block */}
        <FounderBlock />
      </div>
    </section>
  );
}