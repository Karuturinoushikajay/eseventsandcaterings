import { useState } from 'react'
import { business, menuCatalog, menuTypes } from '../data/site'
import { Icon } from './icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Tier({ tier, delay }) {
  const featured = tier.popular

  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={`relative flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 sm:p-8 ${
          featured
            ? 'border-accent/50 bg-brand text-surface shadow-brand-lg lg:-my-4 lg:py-12'
            : 'border-brand/12 bg-white hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-brand motion-reduce:hover:translate-y-0'
        }`}
      >
        {featured && (
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1.5 text-[0.65rem] font-bold tracking-[0.18em] uppercase text-brand-deep">
            Most Popular
          </span>
        )}

        <header>
          <h3
            className={`font-display text-2xl font-semibold ${featured ? 'text-accent-light' : 'text-brand'}`}
          >
            {tier.name}
          </h3>
          <p
            className={`mt-1 text-xs font-semibold tracking-[0.18em] uppercase ${
              featured ? 'text-surface/55' : 'text-ink/45'
            }`}
          >
            {tier.subtitle}
          </p>
        </header>

        <div className="mt-6 flex items-end gap-1.5">
          <span className={`text-lg ${featured ? 'text-surface/70' : 'text-ink/55'}`}>&#8377;</span>
          <span
            className={`font-display text-5xl leading-none font-semibold ${
              featured ? 'text-surface' : 'text-brand'
            }`}
          >
            {tier.price}
          </span>
          <span className={`pb-1 text-sm ${featured ? 'text-surface/60' : 'text-ink/50'}`}>
            /{tier.unit.replace('per ', '')}
          </span>
        </div>

        <p className={`mt-4 text-sm leading-relaxed ${featured ? 'text-surface/75' : 'text-ink/65'}`}>
          {tier.description}
        </p>

        <span
          className={`mt-7 block h-px w-full ${featured ? 'bg-surface/15' : 'bg-brand/10'}`}
        />

        <ul className="mt-7 flex-1 space-y-2.5 sm:space-y-3.5">
          {tier.features.map((feature) => (
            <li
              key={feature}
              className={`flex items-start gap-3 text-sm ${featured ? 'text-surface/85' : 'text-ink/75'}`}
            >
              <span
                className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                  featured ? 'bg-accent/25 text-accent-light' : 'bg-accent/18 text-brand'
                }`}
              >
                <Icon.check className="h-3 w-3" />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`mt-9 block rounded-full px-6 py-3.5 text-center text-sm font-semibold transition-all ${
            featured
              ? 'bg-accent text-white hover:bg-accent-light'
              : 'border border-brand/20 text-brand hover:border-brand hover:bg-brand hover:text-surface'
          }`}
        >
          Book {tier.name}
        </a>
      </article>
    </Reveal>
  )
}

export default function Packages() {
  const [menuType, setMenuType] = useState('food')
  const activeMenu = menuCatalog[menuType]

  return (
    <section id="menu" className="relative overflow-hidden bg-surface-muted py-20 sm:py-28">
      <span className="pointer-events-none absolute top-0 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-mint/20 blur-3xl" />

      <div className="section-shell relative">
        <SectionHeading
          eyebrow={activeMenu.eyebrow}
          heading={activeMenu.heading}
          description={activeMenu.note}
        />

        <Reveal delay={80} className="mt-10">
          <div
            role="tablist"
            aria-label="Choose menu type"
            className="mx-auto flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-full border border-brand/10 bg-surface p-1.5"
          >
            {menuTypes.map((tab) => {
              const isActive = menuType === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setMenuType(tab.id)}
                  className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-brand text-surface shadow-brand'
                      : 'text-ink/60 hover:bg-brand/5 hover:text-brand'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div
          key={menuType}
          className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-7"
        >
          {activeMenu.tiers.map((tier, i) => (
            <Tier key={`${menuType}-${tier.price}`} tier={tier} delay={i * 120} />
          ))}
        </div>

        <Reveal delay={120} className="mt-20">
          <div className="rounded-3xl border border-brand/10 bg-white p-8 text-center sm:p-10">
            <h3 className="font-display text-xl font-semibold text-brand">
              {menuType === 'tiffins' ? 'Tiffins we serve' : 'Cuisines we cook'}
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-ink/60">
              {menuType === 'tiffins'
                ? 'Live counters and morning tiffin spreads for house functions, office events and wedding breakfasts.'
                : 'Mix and match any of these into a custom menu. Customer-based packages are also available — tell us your budget per plate and we will build the spread around it.'}
            </p>

            <ul className="mt-7 flex flex-wrap justify-center gap-2.5">
              {activeMenu.cuisines.map((cuisine) => (
                <li
                  key={cuisine}
                  className="rounded-full border border-accent/35 bg-accent/8 px-4 py-2 text-xs font-semibold tracking-wide text-brand"
                >
                  {cuisine}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${business.phones[0].tel}`}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-surface transition-colors hover:bg-brand-deep"
              >
                <Icon.phone className="h-4 w-4 text-accent-light" />
                Call for a custom menu
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-brand/20 px-6 py-3.5 text-sm font-semibold text-brand transition-colors hover:border-accent hover:bg-accent/10"
              >
                Send an enquiry
                <Icon.arrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
