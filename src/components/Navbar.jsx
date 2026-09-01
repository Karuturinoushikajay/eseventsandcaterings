import { useEffect, useState } from 'react'
import { business, navLinks } from '../data/site'
import { Icon } from './icons'
import Logo from './Logo'

/** Tracks which section currently occupies the middle of the viewport. */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((node) => node !== null)
    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids])

  return active
}

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent the page behind the mobile drawer from scrolling.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-brand/10 bg-surface/95 py-2 shadow-[0_6px_24px_-16px_rgba(20,90,58,0.45)] backdrop-blur-md'
          : 'border-b border-transparent bg-gradient-to-b from-black/45 to-transparent py-4'
      }`}
    >
      <div className="section-shell flex items-center justify-between gap-6">
        <Logo light={!solid} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  solid
                    ? isActive
                      ? 'text-brand'
                      : 'text-ink/65 hover:text-brand'
                    : isActive
                      ? 'text-white'
                      : 'text-white/75 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${business.phones[0].tel}`}
            className={`hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors sm:flex ${
              solid
                ? 'text-brand hover:bg-brand/5'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <Icon.phone className="h-4 w-4" />
            {business.phones[0].display}
          </a>

          <a
            href="#contact"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-brand transition-all hover:bg-accent-light hover:shadow-brand-lg md:inline-block"
          >
            Book Now
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden ${
              solid
                ? 'border-brand/15 text-brand hover:bg-brand/5'
                : 'border-white/30 text-white hover:bg-white/10'
            }`}
          >
            {open ? <Icon.close className="h-5 w-5" /> : <Icon.menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="section-shell flex flex-col gap-1 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                active === link.id
                  ? 'bg-brand/8 text-brand'
                  : 'text-ink/70 hover:bg-brand/5 hover:text-brand'
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-3 grid gap-2 border-t border-brand/10 pt-4">
            {business.phones.map((phone) => (
              <a
                key={phone.tel}
                href={`tel:${phone.tel}`}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand/5"
              >
                <Icon.phone className="h-4 w-4 text-accent" />
                {phone.display}
                <span className="ml-auto text-xs font-normal text-ink/45">{phone.label}</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-brand px-4 py-3.5 text-center text-sm font-semibold text-surface transition-colors hover:bg-brand-deep"
            >
              Get a Quote
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
