import { useState } from 'react'
import { business } from '../data/site'

export default function Logo({ light = false, compact = false, footer = false, className = '' }) {
  const [src, setSrc] = useState(business.logo)

  const imgClass = compact
    ? 'h-11 w-auto max-w-[130px] object-contain sm:h-12 sm:max-w-[150px]'
    : footer
      ? 'h-[4.5rem] w-auto max-w-[200px] object-contain sm:h-20 sm:max-w-[220px]'
      : 'h-14 w-auto max-w-[150px] object-contain sm:h-16 sm:max-w-[170px]'

  // Hero and footer sit on dark/coloured backgrounds — white card keeps the logo readable.
  const needsCard = (light || footer) && !compact

  return (
    <a
      href="#home"
      className={`group inline-flex shrink-0 items-center ${className}`}
      aria-label={`${business.name} — back to top`}
    >
      <span
        className={`inline-flex items-center transition-opacity group-hover:opacity-90 ${
          needsCard ? 'rounded-xl bg-white px-2.5 py-1.5 shadow-md' : ''
        }`}
      >
        <img
          src={src}
          alt={business.name}
          onError={() => setSrc(business.logoFallback)}
          className={imgClass}
        />
      </span>
    </a>
  )
}
