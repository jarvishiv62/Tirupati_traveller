// src/lib/utils.ts
// Shared utility helpers

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const PHONE = '8726124680';
const WHATSAPP = '918726124680';
const BASE_URL = 'https://tirupatitravel.in';

// ── TAILWIND CLASS MERGE ──────────────────────────────────────────────────
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ── PRICE FORMATTING ──────────────────────────────────────────────────────
export function formatPrice(amount: number, perKm = false): string {
  const formatted = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);

  return perKm ? `${formatted}/km` : formatted;
}

// ── PHONE FORMATTING ──────────────────────────────────────────────────────
export function formatPhone(phone: string = PHONE, withCC = false): string {
  // '8726124680' → '87261 24680' or '+91 87261 24680'
  const digits = phone.replace(/\D/g, '');
  const local = digits.slice(-10);
  const formatted = `${local.slice(0, 5)} ${local.slice(5)}`;
  return withCC ? `+91 ${formatted}` : formatted;
}

// ── SLUG HELPERS ──────────────────────────────────────────────────────────
export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function extractDestination(slug: string): string {
  // 'varanasi-to-gaya-taxi' → 'Gaya'
  const match = slug.match(/to-([a-z-]+?)(?:-taxi|-cab|-on)?$/i);
  if (!match) return slugToTitle(slug);
  return slugToTitle(match[1]);
}

// ── WHATSAPP HELPERS ──────────────────────────────────────────────────────
export function buildWALink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP}?text=${encoded}`;
}

export function buildCallLink(phone: string = PHONE): string {
  return `tel:${phone}`;
}

// ── WHATSAPP PRE-FILLED MESSAGES ──────────────────────────────────────────
export const WA_MESSAGES = {
  general: 'Hi, I want to book a cab with Tirupati Travel.',
  outstation: (from: string, to: string) =>
    `Hi, I want to book a taxi from ${from} to ${to} with Tirupati Travel.`,
  airport: (city: string) =>
    `Hi, I need airport taxi service in ${city}. Please share details.`,
  package: (name: string) =>
    `Hi, I am interested in the ${name}. Please share details and pricing.`,
  vehicle: (vehicle: string, city: string) =>
    `Hi, I want to book a ${vehicle} in ${city} with Tirupati Travel.`,
  tempo: (city: string) =>
    `Hi, I need a tempo traveller from ${city}. Please share details.`,
  local: (city: string) =>
    `Hi, I want to book a local sightseeing cab in ${city}. Please share details.`,
};

// ── TEXT HELPERS ──────────────────────────────────────────────────────────
export function truncate(str: string, n = 120): string {
  return str.length > n ? `${str.slice(0, n - 3)}...` : str;
}

// ── URL HELPERS ───────────────────────────────────────────────────────────
export function buildCanonical(slug: string): string {
  return `${BASE_URL}/${slug}`;
}

// ── CITY HELPERS ──────────────────────────────────────────────────────────
export const CITIES = [
  { name: 'Varanasi', slug: 'varanasi', aliases: ['Kashi', 'Banaras'] },
  { name: 'Ayodhya', slug: 'ayodhya', aliases: ['Ram Nagari'] },
  { name: 'Allahabad', slug: 'allahabad', aliases: ['Prayagraj'] },
  { name: 'Lucknow', slug: 'lucknow', aliases: ['City of Nawabs'] },
  { name: 'Gaya', slug: 'gaya', aliases: ['Bodh Gaya'] },
  { name: 'Vindhyachal', slug: 'vindhyachal', aliases: ['Vindhyavasini Dham'] },
] as const;

export type CitySlug = (typeof CITIES)[number]['slug'];

export function getCityBySlug(slug: string) {
  return CITIES.find((c) => c.slug === slug.toLowerCase());
}