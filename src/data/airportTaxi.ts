// src/data/airportTaxi.ts
// ───────────────────────
// Airport taxi data — 3 airports, fully populated with real terminal info.
// Used by: AirportTaxiTemplate via urlParser.ts → airportTaxi namespace.
//
// allRoutes.ts entries for Chunk 8:
//   varanasi/varanasi-airport-taxi    → airportTaxi.varanasi
//   lucknow/airport-taxi-in-lucknow   → airportTaxi.lucknow
//   ayodhya/ayodhya-airport-taxi      → airportTaxi.ayodhya

const BASE = 'https://tirupatitravel.in';

export interface AirportTaxiData {
  airport: string;
  iataCode: string;
  city: string;
  citySlug: string;
  slug: string;
  distance: string;          // airport to city centre
  duration: string;          // drive time
  terminals: {
    name: string;
    description: string;
    pickupPoint: string;
  }[];
  fare: {
    sedan: number;
    ertiga: number;
    innova: number;
    crysta?: number;
    tempo?: number;
  };
  inclusions: string[];
  flightInfo: {
    airlines: string[];
    majorRoutes: string[];
    runwayNote: string;
  };
  bookingInstructions: string[];
  faqs: { q: string; a: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// VARANASI — Lal Bahadur Shastri International Airport (VNS)
// ═══════════════════════════════════════════════════════════════════════════════
export const varanasi: AirportTaxiData = {
  airport:   'Lal Bahadur Shastri International Airport',
  iataCode:  'VNS',
  city:      'Varanasi',
  citySlug:  'varanasi',
  slug:      'varanasi-airport-taxi',
  distance:  '26 km from Dashashwamedh Ghat',
  duration:  '45–60 min (traffic dependent)',

  terminals: [
    {
      name:         'Terminal 1 — Domestic',
      description:  'Handles all domestic flights including IndiGo, Air India, SpiceJet, Akasa Air, and Vistara. This is the main and most used terminal for travellers arriving from Delhi, Mumbai, Bengaluru, and other domestic hubs.',
      pickupPoint:  'Exit from baggage claim, turn right — pre-paid taxi counter is at Gate 2. For Tirupati Travel pickup, driver will wait at the Arrivals Gate with your name board.',
    },
    {
      name:         'Terminal 2 — International',
      description:  'Handles limited international charter flights and flights from select Gulf destinations. Not used for regular scheduled international services currently.',
      pickupPoint:  'International arrivals exit on ground floor. Driver will wait at the main gate with name board. Call 8726124680 upon landing for driver location.',
    },
  ],

  fare: {
    sedan:  700,
    ertiga: 950,
    innova: 1100,
    crysta: 1300,
    tempo:  2200,
  },

  inclusions: [
    'One-way airport to city or city to airport transfer',
    'Driver charges and fuel included',
    'GST included in fare',
    'Meet & greet at arrivals gate',
    'Flight tracking — driver adjusts for delays',
    'AC cab throughout',
    'Assistance with luggage',
    'Up to 45 min wait time after landing',
  ],

  flightInfo: {
    airlines: ['IndiGo', 'Air India', 'SpiceJet', 'Akasa Air', 'Vistara', 'GoFirst'],
    majorRoutes: [
      'Varanasi ↔ Delhi (1.5 hrs)',
      'Varanasi ↔ Mumbai (2 hrs)',
      'Varanasi ↔ Bengaluru (2.5 hrs)',
      'Varanasi ↔ Hyderabad (2 hrs)',
      'Varanasi ↔ Kolkata (1.5 hrs)',
      'Varanasi ↔ Chennai (2.5 hrs)',
    ],
    runwayNote: 'LBS International Airport has a single runway. Fog in December–January can cause delays. Always check flight status before booking your pickup time.',
  },

  bookingInstructions: [
    'Share your flight number, arrival time, and terminal when booking.',
    'Driver will track your flight — no need to call unless there is a significant change.',
    'For early morning flights (before 5am), book the cab the night before.',
    'For return trips, book at least 3 hours before scheduled departure.',
    'Cab will wait up to 45 minutes after landing at no extra charge.',
    'Contact: Call or WhatsApp 8726124680 with your booking details.',
  ],

  faqs: [
    {
      q: 'How far is Varanasi Airport (VNS) from the city?',
      a: 'Lal Bahadur Shastri International Airport is located at Babatpur, approximately 26 km from Dashashwamedh Ghat and 30 km from Assi Ghat. The drive typically takes 45 to 60 minutes depending on traffic. Early morning airport trips can take as little as 35 minutes.',
    },
    {
      q: 'What is the airport taxi fare from Varanasi airport to the city?',
      a: 'Tirupati Travel charges ₹700 for a sedan (Swift Dzire / Etios), ₹950 for an Ertiga, and ₹1,100 for an Innova for a one-way airport transfer. Fares include driver charges, fuel, and GST. Toll charges are extra. No surge pricing.',
    },
    {
      q: 'How do I find my Tirupati Travel driver at Varanasi Airport?',
      a: 'Your driver will wait at the Arrivals Gate with a name board showing your name. Share your flight number when booking so the driver can track your arrival. You can also call the driver directly on the number shared in your booking confirmation.',
    },
    {
      q: 'Does Tirupati Travel track flight delays at VNS?',
      a: 'Yes. Once you share your flight number, our driver monitors real-time flight status. If your flight is delayed, your driver adjusts arrival time at no extra charge. We wait up to 45 minutes after landing.',
    },
    {
      q: 'Can I book a Varanasi airport taxi for early morning flights?',
      a: 'Yes. Tirupati Travel operates 24/7. For flights departing before 5am, we recommend booking the cab the previous evening. Our drivers are experienced with pre-dawn departures from Varanasi — the drive is faster with no traffic.',
    },
    {
      q: 'Is there a pre-paid taxi counter at Varanasi Airport?',
      a: 'Yes, there is a government pre-paid taxi counter at VNS. However, pre-booking with Tirupati Travel guarantees a known fare, tracked flight service, and a reliable AC vehicle — advantages the pre-paid counter cannot offer. Call 8726124680 to pre-book.',
    },
    {
      q: 'Can I hire a cab from Varanasi airport directly to Ayodhya, Gaya, or Prayagraj?',
      a: 'Yes. Tirupati Travel offers direct outstation cab service from Varanasi Airport to any pilgrimage destination. Varanasi to Ayodhya is approximately ₹2,153 (sedan), Varanasi to Gaya ₹2,625, and Varanasi to Prayagraj ₹1,313. Share your destination when booking.',
    },
  ],

  seo: {
    title:       'Varanasi Airport Taxi | LBS Airport Cab Booking (VNS) | Tirupati Travel',
    description: 'Book reliable Varanasi Airport (VNS) taxi service with Tirupati Travel. Sedan from ₹700, Innova from ₹1,100. Flight tracking, meet & greet, 24/7 service. Call: 8726124680.',
    canonical:   `${BASE}/varanasi/varanasi-airport-taxi`,
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// LUCKNOW — Chaudhary Charan Singh International Airport (LKO)
// ═══════════════════════════════════════════════════════════════════════════════
export const lucknow: AirportTaxiData = {
  airport:   'Chaudhary Charan Singh International Airport',
  iataCode:  'LKO',
  city:      'Lucknow',
  citySlug:  'lucknow',
  slug:      'airport-taxi-in-lucknow',
  distance:  '15 km from Hazratganj (city centre)',
  duration:  '30–45 min (traffic dependent)',

  terminals: [
    {
      name:         'Terminal 1 — Domestic',
      description:  'Main domestic terminal handling IndiGo, Air India, SpiceJet, Akasa Air, and Vistara. Most travellers to Lucknow use this terminal. It has a well-organised arrivals hall with prepaid taxi counters and airport shuttle services.',
      pickupPoint:  'Exit baggage claim, proceed to Arrivals Gate. Tirupati Travel driver will be at the designated pickup area with your name board. Look for the orange Tirupati Travel placard.',
    },
    {
      name:         'Terminal 2 — International',
      description:  'Handles international flights including Dubai (Emirates/IndiGo), Sharjah, Abu Dhabi, Muscat, Riyadh, and Kuala Lumpur. Separate building from Terminal 1 — inform us which terminal when booking.',
      pickupPoint:  'International arrivals exit on the ground floor. Driver will wait outside the glass exit doors. Call 8726124680 upon clearing immigration.',
    },
  ],

  fare: {
    sedan:  550,
    ertiga: 750,
    innova: 900,
    crysta: 1100,
    tempo:  1800,
  },

  inclusions: [
    'One-way airport to city or city to airport transfer',
    'Driver charges and fuel included',
    'GST included in fare',
    'Meet & greet at arrivals',
    'Flight tracking for delays',
    'AC vehicle throughout',
    'Luggage assistance',
    'Up to 45 min wait after landing',
  ],

  flightInfo: {
    airlines: ['IndiGo', 'Air India', 'SpiceJet', 'Akasa Air', 'Vistara', 'Emirates', 'flydubai', 'Air Arabia'],
    majorRoutes: [
      'Lucknow ↔ Delhi (1 hr)',
      'Lucknow ↔ Mumbai (2 hrs)',
      'Lucknow ↔ Bengaluru (2.5 hrs)',
      'Lucknow ↔ Dubai (3.5 hrs)',
      'Lucknow ↔ Kolkata (2 hrs)',
      'Lucknow ↔ Hyderabad (2 hrs)',
    ],
    runwayNote: 'CCS Airport has two runways and handles both domestic and international traffic. Generally reliable with fewer weather delays than Varanasi. Expansion work may cause terminal changes — always verify terminal before travel.',
  },

  bookingInstructions: [
    'Share your flight number, arrival time, and which terminal (1 or 2) when booking.',
    'For international flights, allow extra time — immigration can take 30–60 min after landing.',
    'Driver tracks flight status and waits at no extra charge for up to 45 min.',
    'For early morning or late night flights, booking the previous day is recommended.',
    'Contact: Call or WhatsApp 8726124680 with your booking details.',
  ],

  faqs: [
    {
      q: 'How far is Lucknow Airport (LKO) from the city centre?',
      a: 'Chaudhary Charan Singh International Airport is approximately 15 km from Hazratganj (city centre) and 18 km from the Lucknow railway station. The drive takes 30 to 45 minutes in normal traffic. During peak hours (8–10am, 5–8pm), it can take up to 60 minutes.',
    },
    {
      q: 'What is the taxi fare from Lucknow Airport to the city?',
      a: 'Tirupati Travel charges ₹550 for a sedan, ₹750 for an Ertiga, and ₹900 for an Innova for a one-way transfer between Lucknow Airport and the city. All fares include driver charges and GST. Toll charges (approx ₹100) are extra.',
    },
    {
      q: 'Does the taxi serve both Terminal 1 (domestic) and Terminal 2 (international) at LKO?',
      a: 'Yes. Tirupati Travel picks up from both terminals at CCS Airport Lucknow. Please specify your terminal when booking. Terminal 2 (international) is a separate building — it requires a different pickup point and may involve additional wait time for immigration clearance.',
    },
    {
      q: 'Can I book a cab from Lucknow Airport to Ayodhya?',
      a: 'Yes. Tirupati Travel offers direct Lucknow Airport to Ayodhya taxi service. The distance is approximately 140 km and takes about 2.5 hours. Fare starts at ₹1,418 for a sedan. This is a popular pilgrimage route — book in advance.',
    },
    {
      q: 'Is the Lucknow Airport taxi available 24 hours?',
      a: 'Yes. Tirupati Travel operates 24/7 for all airport transfers including early morning departures and midnight arrivals. Our drivers are familiar with all LKO flight schedules.',
    },
    {
      q: 'Can I book a cab from Lucknow Airport to Varanasi directly?',
      a: 'Yes. Direct taxi from Lucknow Airport to Varanasi covers approximately 320 km and takes 6 hours. Sedan fare starts at ₹3,360. This is a popular option for pilgrims landing in Lucknow who wish to travel directly to Kashi.',
    },
    {
      q: 'What if my flight lands at night? Is the Lucknow Airport taxi safe?',
      a: 'Tirupati Travel drivers are verified, licensed, and familiar with night routes. All our vehicles have GPS tracking. For late-night arrivals, simply call or WhatsApp your driver before boarding — they will be ready at arrivals.',
    },
  ],

  seo: {
    title:       'Lucknow Airport Taxi | CCS Airport Cab Booking (LKO) | Tirupati Travel',
    description: 'Book Lucknow Airport (LKO) taxi with Tirupati Travel. Sedan from ₹550, Innova from ₹900. Domestic & international terminals, flight tracking, 24/7 service. Call: 8726124680.',
    canonical:   `${BASE}/lucknow/airport-taxi-in-lucknow`,
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// AYODHYA — Maharishi Valmiki International Airport (AYJ)
// ═══════════════════════════════════════════════════════════════════════════════
export const ayodhya: AirportTaxiData = {
  airport:   'Maharishi Valmiki International Airport',
  iataCode:  'AYJ',
  city:      'Ayodhya',
  citySlug:  'ayodhya',
  slug:      'ayodhya-airport-taxi',
  distance:  '8 km from Ram Janmabhoomi / city centre',
  duration:  '15–25 min',

  terminals: [
    {
      name:         'Terminal 1 — Domestic & International',
      description:  'Maharishi Valmiki International Airport has a single modern terminal inaugurated in December 2023 by Prime Minister Narendra Modi, designed with temple architecture. It handles all flights — currently domestic routes with international charter operations. The terminal is inspired by the Ram Mandir architecture and features a grand arrival hall.',
      pickupPoint:  'Exit from the main arrivals gate — single-exit terminal. Tirupati Travel driver will wait at the designated pick-up bay immediately outside the exit with your name board. The airport is compact — very easy to navigate.',
    },
  ],

  fare: {
    sedan:  350,
    ertiga: 500,
    innova: 650,
    crysta: 800,
  },

  inclusions: [
    'One-way airport to Ram Janmabhoomi area or city hotel',
    'Driver charges and fuel included',
    'GST included in fare',
    'Meet & greet at arrivals',
    'Flight tracking for delays',
    'AC vehicle throughout',
    'Luggage assistance',
    'Up to 30 min wait after landing',
  ],

  flightInfo: {
    airlines: ['IndiGo', 'Air India', 'SpiceJet', 'Akasa Air'],
    majorRoutes: [
      'Ayodhya ↔ Delhi (1.5 hrs)',
      'Ayodhya ↔ Mumbai (2 hrs)',
      'Ayodhya ↔ Bengaluru (2.5 hrs)',
      'Ayodhya ↔ Ahmedabad (2 hrs)',
      'Ayodhya ↔ Kolkata (2 hrs)',
    ],
    runwayNote: 'Maharishi Valmiki International Airport is a newly expanded airport (2023). Flight operations are increasing rapidly following the Ram Mandir inauguration. More routes are being added each quarter — check airline websites for current schedules.',
  },

  bookingInstructions: [
    'Share your flight number and arrival time when booking — the airport is new and small, easy to navigate.',
    'The terminal has a single exit — your driver will be directly outside.',
    'Given the short distance to the city (8 km), the taxi fare is lower than other airports.',
    'For Ram Janmabhoomi visits, we recommend combining the airport transfer with a darshan package.',
    'Contact: Call or WhatsApp 8726124680 with your booking details.',
  ],

  faqs: [
    {
      q: 'How far is Ayodhya Airport (AYJ) from Ram Janmabhoomi?',
      a: 'Maharishi Valmiki International Airport is approximately 8 km from Ram Janmabhoomi and the city centre. The drive takes just 15 to 25 minutes. It is one of the most conveniently located pilgrimage airports in India — you are practically in the holy city upon landing.',
    },
    {
      q: 'What is the taxi fare from Ayodhya Airport to the city?',
      a: 'Due to the short distance, fares are lower than most airports. Tirupati Travel charges ₹350 for a sedan, ₹500 for an Ertiga, and ₹650 for an Innova for a one-way transfer from Ayodhya Airport to the city/Ram Mandir area. All inclusive — no hidden charges.',
    },
    {
      q: 'Which airlines fly to Maharishi Valmiki International Airport (AYJ)?',
      a: 'IndiGo, Air India, SpiceJet, and Akasa Air operate scheduled services to Ayodhya. Flights connect Ayodhya to Delhi, Mumbai, Bengaluru, Ahmedabad, and Kolkata. The route network is expanding rapidly following the 2024 Ram Mandir inauguration.',
    },
    {
      q: 'Is Ayodhya Airport a new airport?',
      a: 'Yes. Maharishi Valmiki International Airport Ayodhya was inaugurated in December 2023. It is a modern, well-designed airport with architecture inspired by the Ram Mandir. The terminal is clean, efficient, and easy to navigate — ideal for pilgrims.',
    },
    {
      q: 'Can I book a combined airport transfer + Ram Mandir darshan package?',
      a: 'Yes. Tirupati Travel offers combined packages — airport pickup, hotel check-in assistance, Ram Janmabhoomi darshan, and Hanuman Garhi visit. Call 8726124680 to book a customised Ayodhya pilgrimage package starting from the airport.',
    },
    {
      q: 'Can I travel from Ayodhya Airport directly to Varanasi?',
      a: 'Yes. Direct taxi from Ayodhya Airport to Varanasi covers approximately 205 km and takes about 4 hours. Sedan fare starts at ₹2,153. Many pilgrims do the Ayodhya–Varanasi pilgrimage circuit — we offer both one-way and round-trip packages.',
    },
    {
      q: 'Is Ayodhya Airport taxi available for pre-dawn flights?',
      a: 'Yes. Tirupati Travel operates 24/7. Early morning flights departing from AYJ are common for pilgrims — we ensure your driver is ready well in advance. Book the previous evening for next-morning pickups.',
    },
  ],

  seo: {
    title:       'Ayodhya Airport Taxi | Maharishi Valmiki Airport Cab (AYJ) | Tirupati Travel',
    description: 'Book Ayodhya Airport (AYJ) taxi with Tirupati Travel. Sedan from ₹350. Just 8 km from Ram Janmabhoomi. Flight tracking, 24/7 service, meet & greet. Call: 8726124680.',
    canonical:   `${BASE}/ayodhya/ayodhya-airport-taxi`,
  },
};
