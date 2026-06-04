// src/components/shared/EEATSection.tsx
// Trust signals — experience, expertise, authority, trust
// Server Component

import { Shield, Star, Award, Users, MapPin, Clock } from 'lucide-react';

const STATS = [
  { icon: Clock, value: '10+', label: 'Years Experience', color: 'text-primary' },
  { icon: Users, value: '50,000+', label: 'Happy Pilgrims', color: 'text-secondary' },
  { icon: MapPin, value: '200+', label: 'Routes Covered', color: 'text-primary' },
  { icon: Star, value: '4.8★', label: 'Average Rating', color: 'text-accent' },
  { icon: Shield, value: '24/7', label: 'Customer Support', color: 'text-secondary' },
  { icon: Award, value: '100%', label: 'Verified Drivers', color: 'text-primary' },
];

interface EEATSectionProps {
  className?: string;
  compact?: boolean;
}

export default function EEATSection({ className = '', compact = false }: EEATSectionProps) {
  return (
    <section className={`bg-section-white ${compact ? 'section-pad-sm' : 'section-pad'} ${className}`}>
      <div className="container-site">
        {!compact && (
          <div className="text-center mb-10">
            <h2 className="section-title">Why Pilgrims Trust Us</h2>
            <div className="divider-gold" />
          </div>
        )}

        <div className={`grid gap-6 ${compact ? 'grid-cols-3 md:grid-cols-6' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'}`}>
          {STATS.map(({ icon: Icon, value, label, color }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center card-warm p-4 rounded-2xl"
            >
              <Icon className={`mb-2 ${color}`} size={compact ? 20 : 28} strokeWidth={1.5} />
              <div className={`font-bold font-serif text-secondary ${compact ? 'text-xl' : 'text-2xl md:text-3xl'}`}>
                {value}
              </div>
              <div className="text-text-secondary text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}