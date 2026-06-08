// src/app/api/booking/route.ts
//
// Booking API handler.
// Current: validates input + returns WhatsApp deep link.
// TODO: FUTURE — add confirmation email via Nodemailer in Chunk 10.

import { NextRequest, NextResponse } from "next/server";

interface BookingPayload {
  name: string;
  phone: string;
  pickupCity: string;
  destination?: string;
  travelDate: string;
  vehicleType?: string;
  passengers?: number;
  serviceType: string;
  notes?: string;
}

const WHATSAPP_NUMBER = "918726124680";

function buildWhatsAppLink(payload: BookingPayload): string {
  const lines = [
    `Hi, I want to book a cab with Tirupati Travel.`,
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Service: ${payload.serviceType}`,
    `From: ${payload.pickupCity}`,
    payload.destination ? `To: ${payload.destination}` : "",
    `Date: ${payload.travelDate}`,
    payload.vehicleType ? `Vehicle: ${payload.vehicleType}` : "",
    payload.passengers ? `Passengers: ${payload.passengers}` : "",
    payload.notes ? `Notes: ${payload.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
}

function validate(body: Partial<BookingPayload>): string | null {
  if (!body.name?.trim()) return "Name is required.";
  if (!body.phone?.trim()) return "Phone number is required.";
  if (!/^[6-9]\d{9}$/.test(body.phone.trim()))
    return "Invalid Indian mobile number.";
  if (!body.pickupCity?.trim()) return "Pickup city is required.";
  if (!body.travelDate?.trim()) return "Travel date is required.";
  if (!body.serviceType?.trim()) return "Service type is required.";
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body: Partial<BookingPayload> = await request.json();

    const validationError = validate(body);
    if (validationError) {
      return NextResponse.json(
        { success: false, error: validationError },
        { status: 400 },
      );
    }

    const payload = body as BookingPayload;
    const waLink = buildWhatsAppLink(payload);

    // TODO: FUTURE — send confirmation email via Nodemailer in Chunk 10:
    // await transporter.sendMail({
    //   from: process.env.SMTP_USER,
    //   to: payload.email,          // collect email in form if desired
    //   subject: 'Booking Confirmation — Tirupati Travel',
    //   html: bookingConfirmationTemplate(payload),
    // });

    // Log in development
    if (process.env.NODE_ENV === "development") {
      console.log("[/api/booking] Booking request:", {
        name: payload.name,
        phone: payload.phone,
        service: payload.serviceType,
        pickupCity: payload.pickupCity,
        destination: payload.destination,
        travelDate: payload.travelDate,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Booking request received.",
        whatsappLink: waLink,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("[/api/booking] Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please call 8726124680 directly.",
      },
      { status: 500 },
    );
  }
}
