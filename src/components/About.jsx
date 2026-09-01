import { about, services } from '../data/site'
import { Icon } from './icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import ServiceIcon from './ServiceIcon'

export default function About() {
  return (
    <section id="about" className="bg-surface-muted py-20 sm:py-28">
      <div className="section-shell">
        {/* Intro: copy beside a portrait image */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-accent">
              {about.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold text-brand sm:text-4xl">
              {about.heading}
            </h2>
            <span className="mt-5 block h-px w-24 bg-gradient-to-r from-accent to-transparent" />

            {about.body.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-base leading-relaxed text-ink/70">
                {paragraph}
              </p>
            ))}

            <ul className="mt-8 space-y-3">
              {about.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-ink/80">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/20 text-brand">
                    <Icon.check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-brand-lg">
              <img
                src={about.image}
                alt="Our kitchen team preparing a banquet service"
                loading="lazy"
                className="aspect-4/5 w-full object-cover sm:aspect-3/2 lg:aspect-4/5"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/45 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-6 rounded-2xl border border-accent/30 bg-surface px-6 py-4 shadow-brand sm:left-auto sm:-right-6">
              <p className="font-display text-2xl font-semibold text-brand">13+</p>
              <p className="text-[0.65rem] font-semibold tracking-[0.16em] uppercase text-ink/55">
                Years Serving
                <br />
                Godavari Districts
              </p>
            </div>
          </Reveal>
        </div>

        {/* Service cards */}
        <div className="mt-28">
          <SectionHeading
            eyebrow="What We Do"
            heading="Every part of the celebration, handled"
            description="One team for the food, the setup and the service staff — so you are not chasing four different vendors the week of your event."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal
                key={service.title}
                delay={i * 90}
                className="group h-full"
              >
                <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/45 hover:shadow-brand-lg motion-reduce:hover:translate-y-0">
                  <span className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-accent/8 transition-transform duration-500 group-hover:scale-150" />

                  <span className="relative grid h-14 w-14 place-items-center rounded-xl bg-brand/6 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-accent-light">
                    <ServiceIcon name={service.icon} className="h-7 w-7" />
                  </span>

                  <h3 className="relative mt-6 text-lg font-semibold text-brand">{service.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-ink/65">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="relative mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-accent transition-colors hover:text-brand"
                  >
                    Enquire
                    <Icon.arrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
