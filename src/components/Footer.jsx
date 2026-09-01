import { business, navLinks, services } from '../data/site'
import { Icon } from './icons'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-deep text-surface/70">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo footer />
          <p className="mt-5 max-w-md text-sm leading-relaxed">{business.serviceArea}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${business.phones[0].tel}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
            >
              <Icon.phone className="h-4 w-4" />
              Call Us
            </a>
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-surface/25 px-5 py-2.5 text-sm font-semibold text-surface transition-colors hover:border-accent hover:text-accent-light"
            >
              <Icon.whatsapp className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.24em] uppercase text-accent">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="transition-colors hover:text-accent-light">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.24em] uppercase text-accent">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-surface/10">
        <div className="section-shell flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <p className="text-surface/45">
            {business.addressLines[1]}, {business.addressLines[2]}
          </p>
        </div>
      </div>
    </footer>
  )
}
