import { useEffect, useState } from 'react'
import { business } from '../data/site'
import { Icon } from './icons'

/**
 * Mobile-first sticky call/WhatsApp buttons. Hidden until the visitor scrolls
 * past the hero so they never cover the hero CTAs.
 */
export default function FloatingActions() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed right-4 bottom-4 z-40 flex flex-col gap-3 transition-all duration-300 sm:right-6 sm:bottom-6 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <a
        href={`https://wa.me/${business.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="grid h-13 w-13 place-items-center rounded-full bg-[#25d366] text-white shadow-brand-lg transition-transform hover:scale-105 motion-reduce:hover:scale-100"
      >
        <Icon.whatsapp className="h-6 w-6" />
      </a>
      <a
        href={`tel:${business.phones[0].tel}`}
        aria-label={`Call ${business.phones[0].display}`}
        className="grid h-13 w-13 place-items-center rounded-full bg-brand text-accent-light shadow-brand-lg transition-transform hover:scale-105 motion-reduce:hover:scale-100"
      >
        <Icon.phone className="h-5.5 w-5.5" />
      </a>
    </div>
  )
}
