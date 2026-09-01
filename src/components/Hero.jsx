import { hero } from '../data/site'
import { usePrefersReducedMotion } from '../hooks/useInView'
import StatsBar from './StatsBar'

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {reducedMotion ? (
          <img
            src={hero.videoPoster}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <video
            className="h-full w-full object-cover"
            src={hero.video}
            autoPlay
            muted
            loop
            playsInline
            poster={hero.videoPoster}
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/95 via-brand-deep/60 to-brand-deep/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/70 to-transparent" />
      </div>

      <div className="section-shell pt-32 pb-10 sm:pt-36">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.28em] uppercase text-accent-light">
            <span className="h-px w-10 bg-accent" />
            Live from our events
          </p>

          <h1 className="mt-5 text-4xl leading-[1.08] font-semibold text-white sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-surface/85 sm:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={hero.primaryCta.href}
              className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-brand-lg transition-all hover:-translate-y-0.5 hover:bg-accent-light motion-reduce:hover:translate-y-0"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="rounded-full border border-surface/35 px-7 py-3.5 text-sm font-semibold text-surface backdrop-blur-sm transition-colors hover:border-accent hover:bg-white/10 hover:text-accent-light"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      <StatsBar />
    </section>
  )
}
