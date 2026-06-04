import Link from 'next/link';
import LayoutShell from '@/components/shared/LayoutShell';

export default function NotFound() {
  return (
    <LayoutShell>
      <main className="min-h-screen bg-section-cream flex items-center justify-center relative overflow-hidden">
        {/* Mandala watermark */}
        <div
          className="mandala-watermark text-secondary"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.07,
            fontSize: '128px',
            width: '128px',
            height: '128px',
          }}
        >
          ☸
        </div>

        <div className="container-site text-center section-pad relative z-10">
          <div className="text-8xl font-serif font-bold text-primary mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
            Page Not Found
          </h1>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            The page you&apos;re looking for doesn&apos;t exist. It may have been moved or removed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <a href="tel:8726124680" className="btn-outline">
              Call Us: 8726124680
            </a>
          </div>
        </div>
      </main>
    </LayoutShell>
  );
}