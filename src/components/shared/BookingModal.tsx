'use client';

import { useState } from 'react';
import { X, Phone } from 'lucide-react';
import { buildWALink, WA_MESSAGES } from '@/lib/utils';

const PHONE = '8726124680';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillMessage?: string;
}

export default function BookingModal({ isOpen, onClose, prefillMessage }: BookingModalProps) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [vehicle, setVehicle] = useState('sedan');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const waMessage = prefillMessage
    || (from && to
      ? WA_MESSAGES.outstation(from, to)
      : WA_MESSAGES.general);

  const whatsappUrl = buildWALink(
    `${waMessage}${name ? `\nName: ${name}` : ''}${phone ? `\nPhone: ${phone}` : ''}${from ? `\nFrom: ${from}` : ''}${to ? `\nTo: ${to}` : ''}${date ? `\nDate: ${date}` : ''}${vehicle ? `\nVehicle: ${vehicle}` : ''}`
  );

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 bg-white rounded-2xl shadow-2xl max-w-md mx-auto overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Book a Cab"
      >
        {/* Header */}
        <div
          className="gradient-sacred px-6 py-4 flex items-center justify-between"
        >
          <div>
            <h2 className="font-serif font-bold text-white text-lg">Book Your Cab</h2>
            <p className="text-white/80 text-xs">Instant confirmation via WhatsApp</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-1">From</label>
              <input
                type="text"
                placeholder="Varanasi"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="input-base text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-1">To</label>
              <input
                type="text"
                placeholder="Ayodhya"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="input-base text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="input-base text-sm"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-1">Vehicle</label>
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="input-base text-sm"
              >
                <option value="sedan">Sedan (₹10.50/km)</option>
                <option value="ertiga">Ertiga (₹11/km)</option>
                <option value="innova">Innova (₹11/km)</option>
                <option value="tempo">Tempo Traveller</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-base text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input-base text-sm"
            />
          </div>

          {/* CTA buttons */}
          <div className="space-y-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book via WhatsApp
            </a>
            <a href={`tel:${PHONE}`} className="btn-outline w-full justify-center gap-2">
              <Phone size={16} />
              Call {PHONE}
            </a>
          </div>

          <p className="text-center text-xs text-text-light">
            No hidden charges · AC Cab · 24/7 Available
          </p>
        </div>
      </div>
    </>
  );
}