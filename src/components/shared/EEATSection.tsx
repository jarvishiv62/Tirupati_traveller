// src/components/shared/EEATSection.tsx
// Editorial EEAT — humanly, not card-grid AI
import {
  Shield, Star, Award, Users, Clock,
  Banknote, Headphones, Navigation, Car, Plane,
  Compass, Users2, Building2, BadgeCheck,
} from 'lucide-react';

const GOLD   = '#DE9619';
const GOLD_L = '#F0B84A';
const GOLD_D = '#B87A10';
const BLACK  = '#1A1A1A';

const EXPERIENCE_STATS = [
  { value: '12+',     label: 'Years on the Road',    icon: Clock,      color: GOLD   },
  { value: '50,000+', label: 'Trips Completed',       icon: Navigation, color: BLACK  },
  { value: '4.8★',    label: 'Google Rating',         icon: Star,       color: GOLD_L },
  { value: '24/7',    label: 'We Pick Up the Phone',  icon: Headphones, color: GOLD_D },
];

const EXPERTISE_TILES = [
  { icon: Building2, label: 'Temple Darshan Trips',   desc: 'Kashi Vishwanath, Ayodhya Ram Mandir, Vindhyachal — we know every ghat, every entry gate, every darshan window.' },
  { icon: Plane,     label: 'Airport Transfers',       desc: 'Lal Bahadur Shastri Airport pickups & drops, any hour. We track flights — no waiting charges.' },
  { icon: Users2,    label: 'Family Pilgrimage Tours', desc: 'Joint families, senior pilgrims, small children — we plan accordingly. Not a template, a real itinerary.' },
  { icon: Car,       label: 'Outstation Cab Hire',     desc: 'One-way & round-trip across UP & Bihar. Fixed price quoted before you board — no meter surprises.' },
  { icon: Compass,   label: 'Sightseeing Packages',    desc: 'Varanasi, Sarnath, Ramnagar Fort, Gaya. Our drivers explain what you\'re seeing — not just driving.' },
  { icon: Users,     label: 'Corporate Travel',         desc: 'Clean vehicles, punctual drivers, GST invoices. Trusted by Varanasi\'s business community.' },
];

const AUTHORITY_BADGES = [
  { icon: '🏛️', title: 'GST Registered',    subtitle: 'Govt. of India',   detail: 'Tax invoice provided on every trip' },
  { icon: '📋', title: 'Licensed Operator',  subtitle: 'UP Tourism Dept.', detail: 'Tourist Vehicle Permit — verified' },
  { icon: '🤝', title: 'IATO Member',        subtitle: 'Travel Association',detail: 'Indian Assoc. of Tour Operators' },
  { icon: '⭐', title: '4.8 on Google',      subtitle: '1,200+ Reviews',   detail: 'Verified reviews, not paid ratings' },
];

const TRUST_BADGES = [
  { icon: BadgeCheck, label: 'GST Invoice on Every Trip', color: GOLD   },
  { icon: Shield,     label: 'Police-Verified Drivers',   color: BLACK  },
  { icon: Banknote,   label: 'Price Fixed Before You Board', color: GOLD_L },
  { icon: Headphones, label: 'Call Any Hour — We Answer', color: GOLD_D },
  { icon: Navigation, label: 'Live Location Shared',      color: GOLD   },
  { icon: Award,      label: 'Fully Insured Fleet',       color: BLACK  },
];

/* ── Founder quote — editorial pull-quote ────────────────────── */
function FounderBlock() {
  return (
    <div className="eeat-founder-block">
      {/* OM column */}
      <div className="eeat-founder-icon" aria-hidden="true">
        <span className="eeat-founder-om">ॐ</span>
        <div className="eeat-founder-icon-ring" />
      </div>

      {/* Quote content */}
      <div className="eeat-founder-content">
        <div className="eeat-founder-quote-mark" aria-hidden="true">"</div>
        <blockquote className="eeat-founder-quote">
          I started Tirupati Travel because I saw pilgrims getting cheated at the station —
          random cabs, no fixed price, no accountability. For the last 12 years our one rule
          has been simple: <em>quote the price before the trip, not after.</em> Every driver
          knows it. Every customer expects it. That is why they come back.
        </blockquote>
        <div className="eeat-founder-attribution">
          <div className="eeat-founder-name">Founder - Tirupati Travel</div>
          <div className="eeat-founder-title">Operating since 2012 · Dashashwamedh Ghat</div>
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
                <div className="eeat-stat-icon" style={{ background: `${color}12`, color }}>
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

        {/* ── Section header — newspaper style ─────────── */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <span className="eeat-layer-pill">Since 2012</span>
            <div style={{ flex: 1, height: '1px', background: '#D4D4D4' }} />
          </div>
          <h2 className="section-title mb-2">
            Why Pilgrims Come Back to Us — Every Time
          </h2>
          <p className="text-text-secondary text-base max-w-2xl leading-relaxed">
            Not because of our website. Because when their father needed a cab at 4am for
            Kashi Vishwanath darshan — we showed up. That is the only marketing that works.
          </p>
          <div className="divider-gold-left mt-4" />
        </div>

        {/* ── Layer 1 — Numbers that mean something ──── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {EXPERIENCE_STATS.map(({ value, label, icon: Icon, color }) => (
            <div key={label} className="eeat-stat-card eeat-stat-card--full">
              <div className="eeat-stat-icon eeat-stat-icon--lg" style={{ background: `${color}10`, color }}>
                <Icon size={26} strokeWidth={1.5} />
              </div>
              <div className="eeat-stat-value eeat-stat-value--lg" style={{ color }}>{value}</div>
              <div className="eeat-stat-label">{label}</div>
            </div>
          ))}
        </div>

        {/* ── Layer 2 — Expertise ───────────────────── */}
        <div className="mb-16">
          <div className="eeat-layer-heading">
            <span className="eeat-layer-pill">What We Actually Do</span>
            <h3 className="eeat-layer-title">Six Things We Do Better Than Anyone in Varanasi</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {EXPERTISE_TILES.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="eeat-expertise-card">
                <div className="eeat-expertise-icon">
                  <Icon size={20} strokeWidth={1.5} style={{ color: GOLD }} />
                </div>
                <div>
                  <div className="eeat-expertise-label">{label}</div>
                  <div className="eeat-expertise-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Layer 3 — Authority ───────────────────── */}
        <div className="mb-16">
          <div className="eeat-layer-heading">
            <span className="eeat-layer-pill eeat-layer-pill--navy">Credentials</span>
            <h3 className="eeat-layer-title">Registered, Licensed, Verified — Not Just Claims</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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

        {/* ── Layer 4 — Trust ──────────────────────── */}
        <div className="mb-16">
          <div className="eeat-layer-heading">
            <span className="eeat-layer-pill eeat-layer-pill--gold">Our Promises</span>
            <h3 className="eeat-layer-title">Six Things We Guarantee on Every Trip</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {TRUST_BADGES.map(({ icon: Icon, label, color }) => (
              <div key={label} className="eeat-trust-badge-card">
                <div className="eeat-trust-badge-icon" style={{ color }}>
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div className="eeat-trust-badge-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Founder quote ─────────────────────────── */}
        <FounderBlock />
      </div>
    </section>
  );
}