// src/components/shared/LayoutShell.tsx
// Wraps Navbar + children + Footer + WhatsAppFloat
// Server Component — no 'use client'

import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

interface LayoutShellProps {
  children: React.ReactNode;
}

export default function LayoutShell({ children }: LayoutShellProps) {
  return (
    <>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}