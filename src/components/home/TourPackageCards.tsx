import TempleArchCard from '@/components/shared/TempleArchCard';
import SectionHeader from '@/components/shared/SectionHeader';
import { tourPackages } from '@/data/tourPackages';
import Link from 'next/link';

export default function TourPackageCards() {
  // Show max 4 on homepage
  const featured = tourPackages.slice(0, 4);

  return (
    <section className="bg-section-white section-pad">
      <div className="container-site">
        <SectionHeader
          title="Popular Tour Packages"
          subtitle="Carefully crafted pilgrimage journeys — comfortable travel, expert guidance"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {featured.map((pkg) => (
            <TempleArchCard
              key={pkg.slug}
              image={pkg.image}
              imageAlt={`${pkg.packageName} tour`}
              title={pkg.packageName}
              subtitle={pkg.city}
              badge={pkg.duration}
              badgeColor="gold"
              imageHeight={200}
              footer={
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-text-light">Starting from</span>
                    <div className="text-primary font-bold text-lg font-serif">
                      ₹{pkg.pricing.perPerson.toLocaleString('en-IN')}
                    </div>
                    <span className="text-xs text-text-light">per person</span>
                  </div>
                  <a
                    href={`/${pkg.city.toLowerCase()}/${pkg.slug}`}
                    className="btn-primary text-sm px-4 py-2"
                  >
                    View
                  </a>
                </div>
              }
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/varanasi/varanasi-tour-packages" className="btn-outline px-8 py-3">
            View All Tour Packages
          </Link>
        </div>
      </div>
    </section>
  );
}