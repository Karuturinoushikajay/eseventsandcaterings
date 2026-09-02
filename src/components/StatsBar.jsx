import { useEffect, useState } from 'react'
import { stats } from '../data/site'
import { useInView, usePrefersReducedMotion } from '../hooks/useInView'

const DURATION_MS = 1600

/** Eases a number up from zero once `active` turns true. */
function useCountUp(target, active, skipAnimation) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active || skipAnimation) return

    let frame
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / DURATION_MS, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, skipAnimation])

  // With reduced motion the final figure is shown outright, no tweening.
  return skipAnimation ? target : value
}

function Stat({ stat, active, skipAnimation }) {
  const value = useCountUp(stat.value, active, skipAnimation)

  return (
    <div className="px-4 py-6 text-center sm:py-7">
      <p className="font-display text-3xl font-semibold text-accent-light sm:text-4xl">
        {value.toLocaleString('en-IN')}
        {stat.suffix}
      </p>
      <p className="mt-2 text-[0.7rem] font-medium tracking-[0.18em] uppercase text-surface/65">
        {stat.label}
      </p>
    </div>
  )
}

export default function StatsBar() {
  const [ref, inView] = useInView({ threshold: 0 })
  const reducedMotion = usePrefersReducedMotion()

  return (
    <div ref={ref} className="relative border-t border-accent/25 bg-brand-deep/70 backdrop-blur-sm">
      <div className="section-shell grid grid-cols-2 divide-x divide-y divide-accent/15 sm:grid-cols-4 sm:divide-y-0">
        {stats.map((stat) => (
          <Stat key={stat.label} stat={stat} active={inView} skipAnimation={reducedMotion} />
        ))}
      </div>
    </div>
  )
}
