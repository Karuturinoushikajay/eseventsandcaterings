import { testimonials } from '../data/site'
import { Icon } from './icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5 text-accent" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon.star key={i} className="h-4 w-4" filled={i < rating} />
      ))}
    </div>
  )
}

function Card({ item }) {
  return (
    <figure className="relative flex h-full min-w-[85%] snap-center flex-col rounded-3xl border border-surface/12 bg-white/6 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-accent/40 sm:min-w-0">
      <Icon.quote className="h-8 w-8 text-accent/35" />

      <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-surface/80">
        {item.quote}
      </blockquote>

      <div className="mt-6">
        <Stars rating={item.rating} />
      </div>

      <figcaption className="mt-5 border-t border-surface/12 pt-5">
        <span className="font-display block text-base font-semibold text-surface">{item.name}</span>
        <span className="mt-0.5 block text-[0.7rem] tracking-[0.14em] uppercase text-accent-light/80">
          {item.event}
        </span>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  const average = (
    testimonials.reduce((sum, item) => sum + item.rating, 0) / testimonials.length
  ).toFixed(1)

  return (
    <section id="testimonials" className="relative overflow-hidden bg-brand py-20 sm:py-28">
      {/* Subtle texture */}
      <span className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <span className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-accent-light/8 blur-3xl" />

      <div className="section-shell relative">
        <SectionHeading
          light
          eyebrow="Testimonials"
          heading="What our clients say"
          description="Word of mouth is how most of our bookings arrive. Here is what families and companies across the Godavari districts have told us."
        />

        <Reveal delay={100} className="mt-8">
          <div className="flex items-center justify-center gap-3">
            <Stars rating={5} />
            <span className="text-sm font-semibold text-surface">{average} / 5</span>
            <span className="text-sm text-surface/50">
              from {testimonials.length} recent reviews
            </span>
          </div>
        </Reveal>

        {/* Snap-scrolling rail on mobile, three-up grid from md */}
        <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 110} className="flex min-w-[85%] sm:min-w-0">
              <Card item={item} />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-surface/40 md:hidden">Swipe to read more</p>
      </div>
    </section>
  )
}
