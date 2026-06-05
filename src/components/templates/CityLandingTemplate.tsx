'use client';
// src/components/templates/CityLandingTemplate.tsx
// Full-page template for city landing pages and specialty city pages
// Sections: CityHero → PlacesGrid → ServicesIcons → VehiclePricingCards → OutstationLinks
// Uses 'use client' only for the rotating alias animation in hero

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, ArrowRight, ChevronRight } from 'lucide-react';

import SacredDivider from '@/components/shared/SacredDivider';
import PlaceCard from '@/components/shared/PlaceCard';
import VehicleCard from '@/components/shared/VehicleCard';
import InternalLinks from '@/components/shared/InternalLinks';
import EEATSection from '@/components/shared/EEATSection';

import type { CityLandingData } from '@/types/templates';
import * as vehiclesData from '@/data/vehicles';

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Props = {
    data: CityLandingData;
};

// ─── HERO SECTION ─────────────────────────────────────────────────────────────

function CityHero({ city, aliases, heroText, heroImage, slug }: {
    city: string;
    aliases: string[];
    heroText: string;
    heroImage: string;
    slug: string;
}) {
    const allNames = [city, ...aliases];
    const [nameIndex, setNameIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (allNames.length <= 1) return;
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setNameIndex(prev => (prev + 1) % allNames.length);
                setVisible(true);
            }, 400);
        }, 2500);
        return () => clearInterval(interval);
    }, [allNames.length]);

    const waMessage = encodeURIComponent(`Hi, I need a cab in ${city}. Please share details.`);

    return (
        <section className="relative min-h-[70vh] flex items-end bg-secondary overflow-hidden">
            {/* Hero image */}
            <div className="absolute inset-0">
                <Image
                    src={heroImage}
                    alt={`Taxi service in ${city}`}
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                {/* gradient-hero overlay */}
                <div className="gradient-hero absolute inset-0" />
            </div>

            {/* Corner mandala watermark */}
            <div
                className="mandala-watermark absolute top-0 right-0 w-64 h-64 text-white"
                style={{ opacity: 0.06 }}
                aria-hidden="true"
            >
                <Image src="/svg/corner-mandala.svg" alt="" fill className="object-contain" />
            </div>

            {/* Ghat skyline at bottom */}
            <div className="ghat-skyline-wrap absolute bottom-0 left-0 right-0 h-24 text-white opacity-25" aria-hidden="true">
                <Image src="/svg/ghats/ghat-skyline.svg" alt="" fill className="object-cover object-bottom" />
            </div>

            {/* Hero content */}
            <div className="relative container-site w-full pb-16 pt-32">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-1.5 text-white/60 text-sm mb-4" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-white">{city}</span>
                </nav>

                {/* Rotating H1 */}
                <h1 className="page-heading mb-3 max-w-3xl">
                    <span
                        className={`text-gold-shimmer inline-block transition-opacity duration-400 ${visible ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {allNames[nameIndex]}
                    </span>{' '}
                    <span>Taxi Service</span>
                </h1>

                <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                    {heroText}
                </p>

                {/* CTA row */}
                <div className="flex flex-wrap gap-3">
                    <a
                        href="tel:+918726124680"
                        className="btn-primary flex items-center gap-2 px-6 py-3 text-base"
                    >
                        <Phone size={18} />
                        Call: 8726124680
                    </a>
                    <a
                        href={`https://wa.me/918726124680?text=${waMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp flex items-center gap-2 px-6 py-3 text-base"
                    >
                        WhatsApp Us
                    </a>
                </div>

                {/* Location tag */}
                <div className="mt-6 flex items-center gap-1.5 text-white/60 text-sm">
                    <MapPin size={14} />
                    <span>Serving {city} & all nearby destinations</span>
                </div>
            </div>
        </section>
    );
}

// ─── SERVICES ICONS SECTION ───────────────────────────────────────────────────

function ServicesIcons({ services, city }: { services: CityLandingData['services']; city: string }) {
    return (
        <section className="bg-section-white section-pad-sm">
            <div className="container-site">
                <div className="text-center mb-8">
                    <h2 className="section-title">Our Services in {city}</h2>
                    <p className="section-sub">Everything you need, one call away</p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {services.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/${service.slug}`}
                            className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-border-warm bg-white hover:bg-cream hover:border-primary/30 hover:shadow-card transition-all duration-300"
                        >
                            {/* SVG icon */}
                            <div className="w-12 h-12 text-primary transition-transform duration-300 group-hover:scale-110">
                                <img
                                    src={service.icon}
                                    alt={service.label}
                                    className="w-full h-full"
                                    style={{ color: 'var(--color-primary, #FF6B00)' }}
                                />
                            </div>
                            <span className="text-xs font-medium text-text-secondary text-center leading-tight group-hover:text-primary transition-colors duration-200">
                                {service.label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── PLACES GRID ─────────────────────────────────────────────────────────────

function PlacesGrid({ places, city }: { places: CityLandingData['places']; city: string }) {
    return (
        <section className="bg-section-cream texture-cream section-pad">
            <div className="container-site">
                <div className="text-center mb-10">
                    <h2 className="cream-title">Top Places to Visit in {city}</h2>
                    <p className="section-sub">Explore the highlights — we'll get you there comfortably</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {places.map((place) => (
                        <PlaceCard key={place.name} place={place} imageHeight={200} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── VEHICLE PRICING CARDS ────────────────────────────────────────────────────

function VehiclePricingCards({
    vehicleIds,
    city,
}: {
    vehicleIds: string[];
    city: string;
}) {
    // Pull vehicle data from vehicles.ts using the IDs
    const cityKey = city.toLowerCase();
    const citySlug = cityKey; // reuse slug for VehicleCard
    const allVehicles = (vehiclesData as any).getVehiclesByCity
        ? (vehiclesData as any).getVehiclesByCity(cityKey)
        : [];

    // Filter to only the requested vehicle IDs
    const vehicles = vehicleIds
        .map((id) => allVehicles.find((v: any) => v.id === id))
        .filter(Boolean);

    if (!vehicles.length) return null;

    return (
        <section className="bg-section-cream texture-cream section-pad">
            <div className="container-site">
                <div className="text-center mb-10">
                    <h2 className="cream-title">Our Fleet in {city}</h2>
                    <p className="section-sub">AC cabs, professional drivers, transparent pricing</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {vehicles.map((vehicle: any) => (
                        <VehicleCard key={vehicle.id} vehicle={vehicle} city={city} citySlug={citySlug} />
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-text-secondary">
                        All prices inclusive of driver. Toll, parking & state taxes extra.
                    </p>
                </div>
            </div>
        </section>
    );
}

// ─── OUTSTATION LINKS ─────────────────────────────────────────────────────────

function OutstationLinks({
    links,
    city,
}: {
    links: CityLandingData['outstationLinks'];
    city: string;
}) {
    return (
        <section className="bg-section-white section-pad">
            <div className="container-site">
                <div className="text-center mb-10">
                    <h2 className="section-title">Outstation Taxi from {city}</h2>
                    <p className="section-sub">One-way & round-trip cabs to all major destinations</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {links.map((route) => (
                        <Link
                            key={route.slug}
                            href={`/${route.slug}`}
                            className="group card-warm rounded-2xl p-4 flex items-center justify-between hover:shadow-card-hover hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                                    <MapPin size={16} className="text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <p className="font-semibold text-secondary text-sm group-hover:text-primary transition-colors duration-200">
                                        {city} → {route.destination}
                                    </p>
                                    <p className="text-xs text-text-secondary mt-0.5">
                                        Sedan from <span className="font-semibold text-primary">₹{route.fare.toLocaleString()}</span>
                                    </p>
                                </div>
                            </div>
                            <ArrowRight
                                size={16}
                                className="text-text-light group-hover:text-primary transition-all duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="tel:+918726124680"
                        className="btn-outline inline-flex items-center gap-2 px-6 py-3"
                    >
                        <Phone size={16} />
                        Don't see your route? Call us
                    </a>
                </div>
            </div>
        </section>
    );
}

// ─── CTA BANNER ───────────────────────────────────────────────────────────────

function CTABanner({ city }: { city: string }) {
    const waMessage = encodeURIComponent(`Hi, I need a cab in ${city}. Please share availability.`);
    return (
        <section className="relative bg-section-dark overflow-hidden section-pad-sm">
            {/* Mandala watermark */}
            <div
                className="mandala-watermark absolute -right-16 top-1/2 -translate-y-1/2 w-80 h-80 text-white"
                style={{ opacity: 0.08 }}
                aria-hidden="true"
            >
                <Image src="/svg/corner-mandala.svg" alt="" fill className="object-contain" />
            </div>

            <div className="relative container-site text-center">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                    Book Your {city} Cab Now
                </h2>
                <p className="text-white/70 text-base mb-6 max-w-xl mx-auto">
                    24/7 service · AC vehicles · Experienced drivers · No hidden charges
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    <a
                        href="tel:+918726124680"
                        className="btn-gold flex items-center gap-2 px-7 py-3 text-base font-semibold"
                    >
                        <Phone size={18} />
                        Call: 8726124680
                    </a>
                    <a
                        href={`https://wa.me/918726124680?text=${waMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline border-white text-white hover:bg-white hover:text-secondary flex items-center gap-2 px-7 py-3 text-base"
                    >
                        WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}

// ─── MAIN TEMPLATE ────────────────────────────────────────────────────────────

export default function CityLandingTemplate({ data }: Props) {
    const {
        city,
        aliases,
        heroText,
        heroImage,
        services,
        vehicles,
        places,
        outstationLinks,
    } = data;

    return (
        <>
            {/* 1. Hero */}
            <CityHero
                city={city}
                aliases={aliases}
                heroText={heroText}
                heroImage={heroImage}
                slug={city.toLowerCase()}
            />

            <SacredDivider variant="lotus" />

            {/* 2. Places Grid */}
            <PlacesGrid places={places} city={city} />

            <SacredDivider variant="wave" />

            {/* 3. Services Icons */}
            <ServicesIcons services={services} city={city} />

            {/* 4. EEAT trust section */}
            <EEATSection />

            <SacredDivider variant="mandala" />

            {/* 5. Vehicle Pricing Cards */}
            <VehiclePricingCards vehicleIds={vehicles} city={city} />

            <SacredDivider variant="wave" />

            {/* 6. CTA Banner */}
            <CTABanner city={city} />

            {/* 7. Outstation links */}
            <OutstationLinks links={outstationLinks} city={city} />

            {/* 8. Internal SEO links */}
            <InternalLinks template="CityLandingTemplate" data={data} />
        </>
    );
}