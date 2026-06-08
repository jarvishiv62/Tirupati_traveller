"use client";

// src/components/shared/BookingEnquiryForm.tsx
// Contact / booking enquiry form.
// On submit → opens WhatsApp with pre-filled message.
// TODO: FUTURE — wire to /api/contact when Chunk 10 API is complete

import { useState } from "react";
import { Phone, MessageSquare, Send, CheckCircle } from "lucide-react";
import { buildWALink } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  phone: string;
  city: string;
  service: string;
  message: string;
}

const SERVICE_OPTIONS = [
  "Outstation Cab",
  "Local Sightseeing",
  "Airport Transfer",
  "Tour Package",
  "Tempo Traveller",
  "Car Rental (Monthly)",
  "Corporate Cab",
  "Other",
];

const CITY_OPTIONS = [
  "Varanasi",
  "Ayodhya",
  "Allahabad / Prayagraj",
  "Lucknow",
  "Gaya",
  "Vindhyachal",
  "Other",
];

interface BookingEnquiryFormProps {
  className?: string;
  defaultCity?: string;
  defaultService?: string;
}

export default function BookingEnquiryForm({
  className,
  defaultCity = "",
  defaultService = "",
}: BookingEnquiryFormProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    city: defaultCity,
    service: defaultService,
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  // Basic validation
  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.phone.trim()) newErrors.phone = "Please enter your phone number.";
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim()))
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number.";
    if (!form.city) newErrors.city = "Please select a city.";
    if (!form.service) newErrors.service = "Please select a service.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    // Build WhatsApp message
    const waMessage = [
      `Hi, I want to enquire about a booking with Tirupati Travel.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `City: ${form.city}`,
      `Service: ${form.service}`,
      form.message ? `Details: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const waLink = buildWALink(waMessage);

    // TODO: FUTURE — also POST to /api/contact when Chunk 10 API is complete
    // try {
    //   await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(form),
    //   });
    // } catch (err) { console.error(err); }

    setSubmitted(true);

    // Open WhatsApp in new tab
    window.open(waLink, "_blank", "noopener,noreferrer");
  }

  if (submitted) {
    return (
      <div className={cn("card-warm rounded-2xl p-8 text-center", className)}>
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-success" strokeWidth={1.5} />
        </div>
        <h3 className="font-serif font-bold text-text-primary text-xl mb-2">
          Opening WhatsApp…
        </h3>
        <p className="text-text-secondary text-sm mb-6">
          Your enquiry details have been pre-filled in WhatsApp. If WhatsApp did
          not open automatically, tap the button below.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={buildWALink(
              `Hi, I want to book a ${form.service || "cab"} in ${form.city || "Varanasi"}. My name is ${form.name}, phone: ${form.phone}.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-6 py-3 text-sm text-center"
          >
            Open WhatsApp
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-outline px-6 py-3 text-sm"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("card-warm rounded-2xl overflow-hidden", className)}>
      {/* Form header */}
      <div className="bg-secondary px-6 py-4">
        <h3 className="font-serif font-bold text-white text-lg flex items-center gap-2">
          <MessageSquare size={20} />
          Send an Enquiry
        </h3>
        <p className="text-white/60 text-xs mt-0.5">
          We respond within 30 minutes via WhatsApp or Call
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4" noValidate>
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-text-secondary text-sm font-medium mb-1.5"
          >
            Your Name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Ramesh Kumar"
            className={cn(
              "w-full border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-light focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors",
              errors.name
                ? "border-red-400 bg-red-50"
                : "border-border-warm bg-white",
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-text-secondary text-sm font-medium mb-1.5"
          >
            Phone Number <span className="text-primary">*</span>
          </label>
          <div className="flex">
            <span className="flex items-center px-3 border border-r-0 border-border-warm rounded-l-xl bg-cream text-text-secondary text-sm">
              +91
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              maxLength={10}
              className={cn(
                "flex-1 border rounded-r-xl px-4 py-3 text-sm text-text-primary placeholder-text-light focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors",
                errors.phone
                  ? "border-red-400 bg-red-50"
                  : "border-border-warm bg-white",
              )}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        {/* City + Service — 2 column on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* City */}
          <div>
            <label
              htmlFor="city"
              className="block text-text-secondary text-sm font-medium mb-1.5"
            >
              City <span className="text-primary">*</span>
            </label>
            <select
              id="city"
              name="city"
              value={form.city}
              onChange={handleChange}
              className={cn(
                "w-full border rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors appearance-none bg-white",
                errors.city ? "border-red-400 bg-red-50" : "border-border-warm",
              )}
            >
              <option value="">Select city…</option>
              {CITY_OPTIONS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.city && (
              <p className="text-red-500 text-xs mt-1">{errors.city}</p>
            )}
          </div>

          {/* Service */}
          <div>
            <label
              htmlFor="service"
              className="block text-text-secondary text-sm font-medium mb-1.5"
            >
              Service <span className="text-primary">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className={cn(
                "w-full border rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors appearance-none bg-white",
                errors.service
                  ? "border-red-400 bg-red-50"
                  : "border-border-warm",
              )}
            >
              <option value="">Select service…</option>
              {SERVICE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-500 text-xs mt-1">{errors.service}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-text-secondary text-sm font-medium mb-1.5"
          >
            Travel Details{" "}
            <span className="text-text-light font-normal">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={3}
            placeholder="e.g. Varanasi to Ayodhya, 2 passengers, 15 Jan 2025, morning departure"
            className="w-full border border-border-warm rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-light focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors resize-none bg-white"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn-whatsapp w-full py-3.5 text-base flex items-center justify-center gap-2"
        >
          <Send size={18} />
          Send via WhatsApp
        </button>

        {/* Or call */}
        <div className="text-center">
          <span className="text-text-light text-xs">
            or call us directly —{" "}
          </span>
          <a
            href="tel:8726124680"
            className="text-primary font-medium text-xs hover:underline inline-flex items-center gap-1"
          >
            <Phone size={12} />
            87261 24680
          </a>
        </div>
      </form>
    </div>
  );
}
