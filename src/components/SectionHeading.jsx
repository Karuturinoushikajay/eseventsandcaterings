import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, heading, description, align = 'center', light = false }) {
  const centered = align === 'center'

  return (
    <Reveal className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold tracking-[0.28em] uppercase ${
            light ? 'text-accent-light' : 'text-accent'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 text-3xl leading-tight font-semibold sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-surface' : 'text-brand'
        }`}
      >
        {heading}
      </h2>
      <span
        className={`mt-5 block h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent ${
          centered ? 'mx-auto' : ''
        }`}
      />
      {description && (
        <p className={`mt-5 text-base leading-relaxed ${light ? 'text-surface/75' : 'text-ink/70'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
