// src/components/home/DestinationCards.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import TempleArchCard from "@/components/shared/TempleArchCard";
import SectionHeader from "@/components/shared/SectionHeader";
import Lottie from "lottie-react";
import { motion, useInView } from "framer-motion";

// Animation JSON imports (you'll need to download these or use CDN URLs)
// For demo, I'm using CDN URLs, but you can also download and import JSON files

const DESTINATIONS = [
  {
    city: "Varanasi",
    slug: "/varanasi",
    image: "/assets/images/varanasi-tour-package.jpg",
    alt: "Dashashwamedh Ghat Varanasi",
    badge: "12 Tours",
    subtitle: "Kashi · Banaras",
    lottieUrl: "https://assets10.lottiefiles.com/packages/lf20_kzpqs2qv.json", // Temple animation
  },
  {
    city: "Allahabad",
    slug: "/allahabad",
    image: "/assets/images/Allahabad_places/khusro.jpg",
    alt: "Sangam Prayagraj Allahabad",
    badge: "6 Tours",
    subtitle: "Prayagraj · Triveni Sangam",
    lottieUrl: "https://assets2.lottiefiles.com/packages/lf20_jkZjq5.json", // River animation
  },
  {
    city: "Gaya",
    slug: "/gaya",
    image: "/assets/images/Gaya_places/Gaya.jpeg",
    alt: "Vishnupad Temple Gaya Bihar",
    badge: "4 Tours",
    subtitle: "Bodh Gaya · Falgu River",
    lottieUrl: "https://assets3.lottiefiles.com/packages/lf20_ltulczqe.json", // Meditation animation
  },
  {
    city: "Vindhyachal",
    slug: "/vindhyachal",
    image: "/assets/images/vindhyachal/vindhyachal.png",
    alt: "Vindhyachal Mandir Mirzapur",
    badge: "3 Tours",
    subtitle: "Mirzapur · Shakti Peeth",
    lottieUrl: "https://assets9.lottiefiles.com/packages/lf20_jcyduiib.json", // Divine energy animation
  },
  {
    city: "Ayodhya",
    slug: "/ayodhya",
    image: "/assets/images/Ayodhya/ram_janm.jpeg",
    alt: "Ram Mandir Ayodhya",
    badge: "5 Tours",
    subtitle: "Ram Janmabhoomi",
    lottieUrl: "https://assets1.lottiefiles.com/packages/lf20_kzpqs2qv.json", // Temple animation
  },
];

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 2 + Math.random() * 6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-gradient-to-r from-gold/40 to-primary/40 rounded-full"
          style={{
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: ["100vh", "-20vh"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Animated card component with hover effects
const AnimatedCard = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

// Lottie background component
const LottieBackground = ({
  url,
  isHovered,
}: {
  url: string;
  isHovered: boolean;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <motion.div
      className="absolute inset-0 z-0 opacity-0 pointer-events-none rounded-xl overflow-hidden"
      animate={{ opacity: isHovered ? 0.15 : 0 }}
      transition={{ duration: 0.4 }}
    >
      <Lottie
        animationData={url}
        loop={true}
        autoplay={isHovered}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </motion.div>
  );
};

// Custom card component with enhanced features
const EnhancedTempleCard = ({
  destination,
  index,
}: {
  destination: (typeof DESTINATIONS)[0];
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <AnimatedCard delay={index * 0.1}>
      <motion.div
        className="relative group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white">
          {/* Lottie Animation Background */}
          <LottieBackground url={destination.lottieUrl} isHovered={isHovered} />

          {/* Image Container with Skeleton Loader */}
          <div className="relative overflow-hidden" style={{ height: "220px" }}>
            {!imageLoaded && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            )}
            <motion.img
              src={destination.image}
              alt={destination.alt}
              className="w-full h-full object-cover"
              style={{ opacity: imageLoaded ? 1 : 0 }}
              onLoad={() => setImageLoaded(true)}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Badge */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="absolute top-3 left-3 z-10"
            >
              <span className="bg-gradient-to-r from-primary to-primary/80 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                {destination.badge}
              </span>
            </motion.div>

            {/* Title overlay */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="absolute bottom-3 left-3 right-3 z-10"
            >
              <h3 className="text-white font-serif font-bold text-xl leading-tight">
                {destination.city}
              </h3>
              <p className="text-white/90 text-xs">{destination.subtitle}</p>
            </motion.div>
          </div>

          {/* Footer Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
            className="p-4 bg-white"
          >
            <motion.a
              href={destination.slug}
              className="block text-center bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all shadow-md"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Explore {destination.city}
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute -inset-0.5 bg-gradient-to-r from-gold via-primary to-gold rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"
          animate={{ opacity: isHovered ? 0.5 : 0 }}
        />
      </motion.div>
    </AnimatedCard>
  );
};

// Main component
export default function DestinationCards() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-orange-50 via-white to-yellow-50 relative overflow-hidden section-pad"
    >
      {/* Background decorative elements */}
      <FloatingParticles />

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Explore Sacred Destinations"
            subtitle="Journey to India's most revered pilgrimage sites with trusted local expertise"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-7 mt-8">
          {DESTINATIONS.map((dest, idx) => (
            <EnhancedTempleCard
              key={dest.city}
              destination={dest}
              index={idx}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/destinations"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Destinations
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              🚗
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}