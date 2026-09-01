import { useCallback, useEffect, useMemo, useState } from 'react'
import { galleryFilters, galleryItems } from '../data/site'
import { Icon } from './icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function itemKey(item) {
  return item.type === 'video' ? item.src : item.image
}

function itemPoster(item) {
  return item.type === 'video' ? item.poster : item.image
}

function isVideo(item) {
  return item.type === 'video'
}

function Lightbox({ items, index, onClose, onNavigate }) {
  const item = items[index]

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNavigate(index + 1)
      if (event.key === 'ArrowLeft') onNavigate(index - 1)
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [index, onClose, onNavigate])

  if (!item) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center bg-brand-deep/92 p-4 backdrop-blur-sm sm:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-surface/25 text-surface transition-colors hover:border-accent hover:text-accent-light"
      >
        <Icon.close className="h-5 w-5" />
      </button>

      <button
        type="button"
        aria-label="Previous item"
        onClick={(event) => {
          event.stopPropagation()
          onNavigate(index - 1)
        }}
        className="absolute left-3 grid h-12 w-12 place-items-center rounded-full border border-surface/25 text-surface transition-colors hover:border-accent hover:text-accent-light sm:left-8"
      >
        <Icon.arrowLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        aria-label="Next item"
        onClick={(event) => {
          event.stopPropagation()
          onNavigate(index + 1)
        }}
        className="absolute right-3 grid h-12 w-12 place-items-center rounded-full border border-surface/25 text-surface transition-colors hover:border-accent hover:text-accent-light sm:right-8"
      >
        <Icon.arrowRight className="h-5 w-5" />
      </button>

      <figure
        onClick={(event) => event.stopPropagation()}
        className="max-h-full w-full max-w-4xl overflow-hidden rounded-2xl bg-brand-deep shadow-brand-lg"
      >
        {isVideo(item) ? (
          <video
            key={item.src}
            src={item.src}
            poster={item.poster}
            controls
            playsInline
            className="max-h-[72svh] w-full bg-black object-contain"
          />
        ) : (
          <img src={item.image} alt={item.title} className="max-h-[72svh] w-full object-contain" />
        )}
        <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-surface/10 px-6 py-4">
          <span className="font-display text-lg text-surface">{item.title}</span>
          <span className="text-xs tracking-[0.14em] uppercase text-surface/55">{item.meta}</span>
        </figcaption>
      </figure>
    </div>
  )
}

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const visible = useMemo(
    () => (filter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter],
  )

  const navigate = useCallback(
    (next) => {
      setLightboxIndex((next + visible.length) % visible.length)
    },
    [visible.length],
  )

  const changeFilter = (id) => {
    setFilter(id)
    setLightboxIndex(null)
  }

  return (
    <section id="gallery" className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Gallery"
          heading="Moments from our recent events"
          description="Photos and video highlights from our recent events — illuminated counters, wedding decor, and live event coverage."
        />

        <Reveal delay={100} className="mt-12">
          <div
            role="tablist"
            aria-label="Filter gallery by event type"
            className="mx-auto flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-full border border-brand/10 bg-surface p-1.5"
          >
            {galleryFilters.map((tab) => {
              const isActive = filter === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => changeFilter(tab.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
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

        <div className="mt-12 gap-5 [column-count:1] sm:[column-count:2] lg:[column-count:3]">
          {visible.map((item, i) => (
            <button
              key={`${filter}-${itemKey(item)}`}
              type="button"
              onClick={() => setLightboxIndex(i)}
              style={{ animationDelay: `${Math.min(i, 8) * 70}ms` }}
              className="group mb-5 block w-full break-inside-avoid animate-[tileIn_0.6s_ease-out_backwards] overflow-hidden rounded-2xl text-left shadow-brand motion-reduce:animate-none"
            >
              <span className="relative block overflow-hidden">
                <img
                  src={itemPoster(item)}
                  alt={item.title}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-108 motion-reduce:group-hover:scale-100 ${
                    i % 3 === 1 ? 'aspect-3/4' : i % 3 === 2 ? 'aspect-square' : 'aspect-4/3'
                  }`}
                />

                {isVideo(item) && (
                  <span className="absolute inset-0 grid place-items-center bg-brand-deep/25">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-accent/95 text-white shadow-brand-lg transition-transform group-hover:scale-110">
                      <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden="true">
                        <path d="M8 5v14l11-7L8 5Z" />
                      </svg>
                    </span>
                  </span>
                )}

                <span className="absolute inset-0 bg-gradient-to-t from-brand-deep/88 via-brand-deep/25 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                <span className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:translate-y-0">
                  <span className="font-display block text-lg font-semibold text-surface">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-xs tracking-[0.14em] uppercase text-accent-light">
                    {item.meta}
                  </span>
                </span>

                <span className="absolute top-4 right-4 grid h-10 w-10 scale-75 place-items-center rounded-full bg-accent/95 text-white opacity-0 transition-all duration-400 group-hover:scale-100 group-hover:opacity-100">
                  {isVideo(item) ? (
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-current" aria-hidden="true">
                      <path d="M8 5v14l11-7L8 5Z" />
                    </svg>
                  ) : (
                    <Icon.arrowRight className="h-4 w-4 -rotate-45" />
                  )}
                </span>
              </span>
            </button>
          ))}
        </div>

        <style>{`
          @keyframes tileIn {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={visible}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={navigate}
        />
      )}
    </section>
  )
}
