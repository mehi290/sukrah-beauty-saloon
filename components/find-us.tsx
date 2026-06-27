import { Clock, MapPin, MessageCircle, Phone } from "lucide-react"

const ADDRESS = " Mena Bazar Burdubai - Al Souq Al Kabeer - Al Fahidi - Dubai"
const PHONE = "+971  4 358 5848"
const PHONE_LINK = "+971 4 358 5848"
const HOURS = "Mon-Sun 10:00 AM - 10:00 PM"

const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&t=&z=16&ie=UTF8&iwloc=&output=embed`

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`

export function FindUs() {
  return (
    <section
      className="bg-[#141414] text-white"
      aria-labelledby="find-us-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/55 mb-4">
              Find us
            </p>
            <h2
              id="find-us-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-white mb-10"
            >
              Visit <span className="lowercase">Sehrish Beauty Saloon</span>{" "}

            </h2>

            <ul className="space-y-5 text-sm sm:text-base text-white/90 mb-10">
              <li className="flex gap-4">
                <MapPin
                  className="w-5 h-5 shrink-0 text-white mt-0.5"
                  aria-hidden
                />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-5 h-5 shrink-0 text-white" aria-hidden />
                <a
                  href={`tel:${PHONE_LINK}`}
                  className="hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  {PHONE}
                </a>
              </li>
              <li className="flex gap-4">
                <Clock
                  className="w-5 h-5 shrink-0 text-white mt-0.5"
                  aria-hidden
                />
                <span>{HOURS}</span>
              </li>
              <li className="flex gap-4 items-center">
                <MessageCircle
                  className="w-5 h-5 shrink-0 text-white"
                  aria-hidden
                />
                <span>
                  Mobile:{" "}
                  <a
                    href={`tel:${PHONE_LINK}`}
                    className="hover:text-white transition-colors underline-offset-4 hover:underline"
                  >
                    {PHONE}
                  </a>
                </span>
              </li>
            </ul>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#2563eb] hover:bg-[#1d4ed8] text-white uppercase text-xs sm:text-sm font-semibold tracking-widest px-8 py-3.5 transition-colors"
            >
              Get directions
            </a>
          </div>

          <div className="w-full overflow-hidden rounded-sm bg-neutral-900 h-[300px] sm:h-[380px] lg:h-[440px]">
            <iframe
              title="Map — Sehrish beauty saloon, Sharjah"
              src={mapEmbedSrc}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
