import { business } from '../data/site'
import { Icon } from './icons'
import InquiryForm from './InquiryForm'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const { lat, lng, zoom } = business.map
// Keyless embed: the `output=embed` endpoint needs no Google Maps API key.
const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&hl=en&output=embed`

function DetailRow({ icon: IconComponent, label, children }) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-brand">
        <IconComponent className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-ink/45">
          {label}
        </p>
        <div className="mt-1.5 text-sm leading-relaxed text-ink/80">{children}</div>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Get In Touch"
          heading="Tell us about your event"
          description="Call us for an instant quote, or send the form below and we will get back to you the same day with a menu and a per-plate rate."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-14">
          {/* Left: contact details + map */}
          <Reveal className="flex flex-col gap-8">
            <div className="grid gap-7 rounded-3xl border border-brand/10 bg-surface/50 p-7 sm:p-8">
              <DetailRow icon={Icon.phone} label="Call Us">
                <ul className="space-y-1.5">
                  {business.phones.map((phone) => (
                    <li key={phone.tel}>
                      <a
                        href={`tel:${phone.tel}`}
                        className="font-semibold text-brand transition-colors hover:text-accent"
                      >
                        {phone.display}
                      </a>
                      <span className="ml-2 text-xs text-ink/45">({phone.label})</span>
                    </li>
                  ))}
                </ul>
              </DetailRow>

              <DetailRow icon={Icon.whatsapp} label="WhatsApp">
                <a
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-brand transition-colors hover:text-accent"
                >
                  Message us on WhatsApp
                </a>
              </DetailRow>

              <DetailRow icon={Icon.pin} label="Visit Us">
                <address className="not-italic">
                  {business.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <a
                  href={business.map.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-accent transition-colors hover:text-brand"
                >
                  Get directions
                  <Icon.arrowRight className="h-3.5 w-3.5" />
                </a>
              </DetailRow>

              <DetailRow icon={Icon.clock} label="Office Hours">
                <ul className="space-y-1">
                  {business.hours.map((entry) => (
                    <li key={entry.days} className="flex flex-wrap gap-x-2">
                      <span className="text-ink/55">{entry.days}</span>
                      <span className="font-medium">{entry.time}</span>
                    </li>
                  ))}
                </ul>
              </DetailRow>
            </div>

            <div className="overflow-hidden rounded-3xl border border-brand/10 shadow-brand">
              <iframe
                title={`Map showing ${business.name}`}
                src={mapSrc}
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block h-[300px] w-full border-0 sm:h-[340px]"
              />
            </div>
          </Reveal>

          {/* Right: inquiry form */}
          <Reveal delay={150}>
            <div className="rounded-3xl border border-brand/10 bg-surface/40 p-7 shadow-brand sm:p-9">
              <h3 className="font-display text-2xl font-semibold text-brand">Request a quote</h3>
              <p className="mt-2 text-sm text-ink/60">
                Fields marked * are required. The rest helps us quote accurately.
              </p>
              <div className="mt-8">
                <InquiryForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
