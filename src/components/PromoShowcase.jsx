import { promoBanners } from '../data/site'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function PromoShowcase() {
  return (
    <section id="services-showcase" className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Our Services"
          heading="Everything under one roof"
          description="Catering, events, live counters, ice creams, sweet pan, snacks and tiffins — all managed by one team across the Godavari districts."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {promoBanners.map((banner, i) => (
            <Reveal key={banner.image} delay={i * 100}>
              <figure className="overflow-hidden rounded-2xl border border-brand/10 bg-surface-muted shadow-brand transition-shadow hover:shadow-brand-lg">
                <img
                  src={banner.image}
                  alt={banner.alt}
                  loading="lazy"
                  className="w-full object-cover"
                />
                {banner.caption && (
                  <figcaption className="px-4 py-3 text-center text-xs font-medium tracking-wide text-ink/60">
                    {banner.caption}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
