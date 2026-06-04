import Image from 'next/image';
import SectionHeader from '@/components/shared/SectionHeader';

const THEMES = [
  {
    label: 'Pilgrimage',
    icon: '/svg/icons/kalash.svg',
    href: '/varanasi/varanasi-tour-packages',
    description: 'Char Dham, Jyotirlinga & Shakti Peeths',
  },
  {
    label: 'Heritage',
    icon: '/svg/icons/bell.svg',
    href: '/varanasi',
    description: 'Ancient temples, ghats & monuments',
  },
  {
    label: 'Wildlife',
    icon: '/svg/icons/route.svg',
    href: '/allahabad',
    description: 'Sarnath, Corbett & sanctuary tours',
  },
  {
    label: 'Hill Stations',
    icon: '/svg/icons/route.svg',
    href: '/lucknow',
    description: 'Mussoorie, Nainital & Auli getaways',
  },
  {
    label: 'Adventure',
    icon: '/svg/icons/driver.svg',
    href: '/varanasi',
    description: 'River rafting, trekking & camping',
  },
  {
    label: 'Spiritual',
    icon: '/svg/icons/lotus.svg',
    href: '/ayodhya',
    description: 'Meditation retreats & yoga tours',
  },
];

export default function ThemeExplorer() {
  return (
    <section className="bg-section-cream texture-cream section-pad">
      <div className="container-site">
        <SectionHeader
          title="Explore by Theme"
          subtitle="Find the perfect journey for your spiritual calling"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {THEMES.map((theme) => (
            <a
              key={theme.label}
              href={theme.href}
              className="card-warm group flex flex-col items-center text-center p-5 rounded-2xl hover:-translate-y-1 transition-all duration-300 hover:shadow-temple hover:border-primary/30 border border-transparent"
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-3 relative flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={theme.icon}
                  alt={`${theme.label} icon`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Label */}
              <span className="font-medium text-text-primary text-sm font-sans">
                {theme.label}
              </span>

              {/* Description — hidden on mobile, visible md+ */}
              <span className="text-text-light text-xs mt-1 leading-snug hidden md:block">
                {theme.description}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}