// src/components/shared/WhatsAppFloat.tsx

const WA = '918726124680';

const MESSAGE = encodeURIComponent(
  `Hi Tirupati Travels,

I would like a fare estimate.

Pickup Location:
Travel Date:
Number of Passengers:

Please share available options.`
);

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WA}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Booking"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative flex items-center">

        {/* Floating Tooltip (Desktop) */}
        <div
          className="
            hidden lg:flex
            absolute right-20
            items-center
            bg-white
            rounded-xl
            shadow-xl
            border border-gray-100
            px-4 py-3
            whitespace-nowrap
            opacity-0
            translate-x-4
            group-hover:opacity-100
            group-hover:translate-x-0
            transition-all
            duration-300
          "
        >
          <div>
            <p className="text-xs text-amber-500 font-semibold">
              ★★★★★ Trusted by Travellers
            </p>

            <p className="text-sm font-bold text-gray-900">
              Get Fare & Driver Details
            </p>

            <p className="text-xs text-gray-500">
              Within 15 Minutes
            </p>
          </div>
        </div>

        {/* Notification Dot */}
        <span className="absolute -top-1 -right-1 z-10 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-red-600"></span>
        </span>

        {/* Button */}
        <div
          className="
            relative
            flex items-center justify-center
            w-16 h-16
            rounded-full
            text-white
            transition-all
            duration-300
            group-hover:scale-110
            active:scale-95
            shadow-[0_8px_30px_rgba(37,211,102,0.40)]
          "
          style={{
            backgroundColor: '#25D366',
            animation: 'whatsappPulse 2.5s infinite',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
        </div>

        {/* Mobile Label */}
        <div
          className="
            lg:hidden
            absolute
            right-20
            bg-white
            rounded-full
            px-3 py-2
            shadow-lg
            border border-gray-100
          "
        >
          <p className="text-xs font-semibold text-gray-800 whitespace-nowrap">
            Get Fare Instantly 🚕
          </p>
        </div>
      </div>
    </a>
  );
}