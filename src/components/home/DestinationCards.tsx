import TempleArchCard from '@/components/shared/TempleArchCard';
import SectionHeader from '@/components/shared/SectionHeader';

const DESTINATIONS = [
  {
    city: 'Varanasi',
    slug: '/varanasi',
    image: '/assets/images/varanasi-tour-package.jpg',
    alt: 'Dashashwamedh Ghat Varanasi',
    badge: '12 Tours',
    subtitle: 'Kashi · Banaras',
  },
  {
    city: 'Allahabad',
    slug: '/allahabad',
    image: '/assets/images/Allahabad_places/khusro.jpg',
    alt: 'Sangam Prayagraj Allahabad',
    badge: '6 Tours',
    subtitle: 'Prayagraj · Triveni Sangam',
  },
  {
    city: 'Gaya',
    slug: '/gaya',
    image: '/assets/images/Gaya_places/Gaya.jpeg',
    alt: 'Vishnupad Temple Gaya Bihar',
    badge: '4 Tours',
    subtitle: 'Bodh Gaya · Falgu River',
  },
  {
    city: 'Vindhyachal',
    slug: '/vindhyachal',
    image: '/assets/images/vindhyachal/vindhyachal.png',
    alt: 'Vindhyachal Mandir Mirzapur',
    badge: '3 Tours',
    subtitle: 'Mirzapur · Shakti Peeth',
  },
  {
    city: 'Ayodhya',
    slug: '/ayodhya',
    image: '/assets/images/Ayodhya/ram_janm.jpeg',
    alt: 'Ram Mandir Ayodhya',
    badge: '5 Tours',
    subtitle: 'Ram Janmabhoomi · Sarayu',
  },
];

export default function DestinationCards() {
  return (
    <section className="bg-section-cream texture-cream section-pad">
      <div className="container-site">
        <SectionHeader
          title="Explore Sacred Destinations"
          subtitle="Journey to India's most revered pilgrimage sites with trusted local expertise"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
          {DESTINATIONS.map((dest) => (
            <TempleArchCard
              key={dest.city}
              image={dest.image}
              imageAlt={dest.alt}
              title={dest.city}
              subtitle={dest.subtitle}
              badge={dest.badge}
              badgeColor="primary"
              imageHeight={220}
              className="h-full"
              footer={
                <a
                  href={dest.slug}
                  className="btn-outline text-sm px-4 py-2 w-full text-center block"
                >
                  Explore {dest.city}
                </a>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}