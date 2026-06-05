// src/components/shared/CTAButtons.tsx
// Composable CTA button pair — strong copy defaults baked in
// Benefit + Urgency + Risk Reduction formula

import { Phone } from 'lucide-react';
import { buildWALink, formatPhone } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface CTAButtonsProps {
  phone?:      string;
  waMessage?:  string;
  /** Primary button label — default uses benefit+urgency formula */
  phoneLabel?: string;
  /** WhatsApp button label */
  waLabel?:    string;
  layout?:     'row' | 'col';
  size?:       'sm' | 'md' | 'lg';
  className?:  string;
  /** Show micro-trust line below buttons */
  showTrust?:  boolean;
}

const SIZE_MAP = {
  sm: 'text-sm  px-5  py-2.5',
  md: 'text-base px-7  py-3.5',
  lg: 'text-lg  px-9  py-4',
};

const WA_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
    viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.888a.5.5 0 00.609.61l6.102-1.502A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.933 0-3.742-.523-5.287-1.434l-.378-.226-3.924.965.942-3.849-.247-.393A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

export default function CTAButtons({
  phone      = '8726124680',
  waMessage  = 'Hi, I want to book a cab with Tirupati Travel. Please share details.',
  phoneLabel,
  waLabel    = 'Get My Travel Plan',
  layout     = 'row',
  size       = 'md',
  className,
  showTrust  = false,
}: CTAButtonsProps) {
  const displayPhone = formatPhone ? formatPhone(phone) : phone;
  const waLink       = buildWALink(waMessage);

  // Strong default — benefit + action
  const defaultPhoneLabel = `Talk To Travel Expert`;

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <div className={cn(
        'flex gap-3',
        layout === 'col' ? 'flex-col' : 'flex-col sm:flex-row',
      )}>
        {/* WhatsApp — primary action */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'btn-whatsapp inline-flex items-center justify-center gap-2 font-semibold',
            SIZE_MAP[size],
          )}
        >
          {WA_ICON}
          {waLabel}
        </a>

        {/* Phone — secondary action */}
        <a
          href={`tel:${phone}`}
          className={cn(
            'btn-outline inline-flex items-center justify-center gap-2 font-semibold',
            SIZE_MAP[size],
          )}
        >
          <Phone size={18} strokeWidth={2} />
          {phoneLabel ?? defaultPhoneLabel}
        </a>
      </div>

      {/* Micro-trust line */}
      {showTrust && (
        <p className="text-xs text-text-light text-center flex items-center justify-center gap-1.5">
          <span>🔒</span>
          No hidden charges · Response within 15 minutes · 50,000+ pilgrims served
        </p>
      )}
    </div>
  );
}