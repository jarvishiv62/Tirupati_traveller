import { ShieldCheck, Star, Award } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const REASONS = [
  {
    Icon: ShieldCheck,
    title: 'Safe & Verified Drivers',
    description:
      'All our drivers are background-verified, licensed professionals with years of pilgrimage route experience. Your safety is our highest priority.',
  },
  {
    Icon: Star,
    title: '4.8★ Customer Rating',
    description:
      'Over 50,000 happy pilgrims have rated us. We maintain high standards across every trip — from booking confirmation to drop-off.',
  },
  {
    Icon: Award,
    title: 'Transparent & Fair Pricing',
    description:
      'No hidden charges, no surge pricing. The price you see is the price you pay — toll, parking and GST invoice included on request.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-section-cream section-pad">
      <div className="container-site">
        <SectionHeader
          title="Why Choose Tirupati Travel?"
          subtitle="Thousands of pilgrims trust us every year for good reason"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {REASONS.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="card-warm p-6 md:p-8 rounded-2xl group hover:shadow-temple transition-shadow duration-300"
            >
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon size={28} className="text-primary" strokeWidth={1.5} />
              </div>

              <h3 className="font-serif font-bold text-xl text-text-primary mb-3">
                {title}
              </h3>

              <p className="text-text-secondary leading-relaxed text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}