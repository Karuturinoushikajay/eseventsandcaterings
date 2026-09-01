const strokeDefaults = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

/** Shared 24x24 stroked-icon frame used by the icon map in `icons.jsx`. */
export default function Svg({ children, className = 'h-6 w-6', ...rest }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeDefaults} {...rest}>
      {children}
    </svg>
  )
}
