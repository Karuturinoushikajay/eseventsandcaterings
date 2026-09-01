import { Icon } from './icons'

/** Resolves a service's `icon` key from site data to its SVG component. */
export default function ServiceIcon({ name, className }) {
  const Glyph = Icon[name]
  return Glyph ? <Glyph className={className} /> : null
}
