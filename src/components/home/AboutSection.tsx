import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const STATS = [
  { value: '10+', label: 'Years Experience' },
  { value: '50K+', label: 'Happy Pilgrims' },
  { value: '6', label: 'Cities Covered' },
  { value: '24/7', label: 'Support Available' },
];

const USP_LIST = [
  'Verified professional drivers with local pilgrimage expertise',
  'Clean, air-conditioned sedans, SUVs & tempo travellers',
  'Transparent pricing — no hidden charges ever',
  'Customised darshan & sightseeing itineraries',
];

export default function AboutSection() {
  return (
    <section className="bg-section-white section-pad">
      <div className="container-site">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center">

          {/* Left — Image with arch frame */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="arch-frame relative overflow-hidden rounded-2xl shadow-temple">
              <Image
                src="/assets/images/about-incrdble.webp"
                alt="Tirupati Travel — trusted cab service in Varanasi"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gold corner accent */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold opacity-60 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold opacity-60 rounded-br-lg" />
            </div>
          </div>

          {/* Right — Text content */}
          <div className="w-full md:w-1/2">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
              About Us
            </p>

            <h2 className="section-title text-left mb-4">
              Varanasi&apos;s Trusted Pilgrimage Travel Partner
            </h2>

            {/* Gold divider */}
            <div className="h-1 w-16 bg-primary rounded-full mb-5" />

            <p className="text-text-secondary leading-relaxed mb-5">
              Tirupati Travel has been serving pilgrims and tourists since 2014, operating
              from the heart of Varanasi. We specialise in comfortable cab services,
              outstation taxis, and guided pilgrimage tours across Uttar Pradesh and Bihar.
            </p>

            {/* USP list */}
            <ul className="space-y-2.5 mb-7">
              {USP_LIST.map((point) => (
                <li key={point} className="flex items-start gap-3 text-text-secondary text-sm">
                  <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 p-4 bg-cream rounded-xl">
              {STATS.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-primary font-bold text-2xl font-serif leading-none">
                    {value}
                  </div>
                  <div className="text-text-light text-xs mt-1 leading-snug">{label}</div>
                </div>
              ))}
            </div>

            <Link href="/about-us" className="btn-outline px-8 py-3">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}