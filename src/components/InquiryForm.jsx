import { useMemo, useState } from 'react'
import {
  business,
  eventTypes,
  getPackageOptions,
  menuTypes,
  formatSelectedPackageForWhatsApp,
} from '../data/site'
import { Icon } from './icons'

const initialMenuType = 'food'

const initialValues = {
  name: '',
  phone: '',
  eventType: eventTypes[0],
  menuType: initialMenuType,
  packageChoice: getPackageOptions(initialMenuType)[0].value,
  date: '',
  guests: '',
  message: '',
}

function validate(values) {
  const errors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }

  const digits = values.phone.replace(/\D/g, '')
  if (!/^(91)?[6-9]\d{9}$/.test(digits)) {
    errors.phone = 'Enter a valid 10-digit mobile number.'
  }

  if (values.guests && Number(values.guests) < 1) {
    errors.guests = 'Guest count must be at least 1.'
  }

  return errors
}

const fieldClass =
  'w-full rounded-xl border border-brand/15 bg-surface/60 px-4 py-3 text-sm text-ink transition-colors placeholder:text-ink/35 focus:border-accent focus:bg-white focus:outline-none'
const labelClass = 'block text-xs font-semibold tracking-[0.14em] uppercase text-ink/55'
const errorClass = 'mt-1.5 text-xs font-medium text-brand-soft'

export default function InquiryForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const packageOptions = useMemo(() => getPackageOptions(values.menuType), [values.menuType])

  const update = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSent(false)
  }

  const updateMenuType = (event) => {
    const menuType = event.target.value
    const options = getPackageOptions(menuType)

    setValues((current) => ({
      ...current,
      menuType,
      packageChoice: options[0].value,
    }))
    setErrors((current) => ({ ...current, menuType: undefined, packageChoice: undefined }))
    setSent(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const lines = [
      `New enquiry from ${values.name.trim()}`,
      `Event: ${values.eventType}`,
      values.date ? `Date: ${values.date}` : null,
      values.guests ? `Guests: ${values.guests}` : null,
      `Phone: ${values.phone.trim()}`,
      values.message.trim() ? `Details: ${values.message.trim()}` : null,
      '',
      '---',
      formatSelectedPackageForWhatsApp(values.menuType, values.packageChoice),
    ].filter((line) => line !== null)

    const url = `https://wa.me/${business.whatsappEnquiries}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')

    setSent(true)
    setValues(initialValues)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update('name')}
            placeholder="e.g. Sravani K."
            aria-invalid={Boolean(errors.name)}
            className={`mt-2 ${fieldClass} ${errors.name ? 'border-brand-soft' : ''}`}
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            Mobile Number *
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update('phone')}
            placeholder="10-digit mobile"
            aria-invalid={Boolean(errors.phone)}
            className={`mt-2 ${fieldClass} ${errors.phone ? 'border-brand-soft' : ''}`}
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <label className={labelClass} htmlFor="eventType">
            Event Type
          </label>
          <select
            id="eventType"
            value={values.eventType}
            onChange={update('eventType')}
            className={`mt-2 ${fieldClass}`}
          >
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="menuType">
            Menu Type
          </label>
          <select
            id="menuType"
            value={values.menuType}
            onChange={updateMenuType}
            className={`mt-2 ${fieldClass}`}
          >
            {menuTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="packageChoice">
            Package
          </label>
          <select
            id="packageChoice"
            value={values.packageChoice}
            onChange={update('packageChoice')}
            className={`mt-2 ${fieldClass}`}
          >
            {packageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="date">
            Event Date
          </label>
          <input
            id="date"
            type="date"
            value={values.date}
            onChange={update('date')}
            className={`mt-2 ${fieldClass}`}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="guests">
            Guests
          </label>
          <input
            id="guests"
            type="number"
            min="1"
            step="10"
            value={values.guests}
            onChange={update('guests')}
            placeholder="e.g. 250"
            aria-invalid={Boolean(errors.guests)}
            className={`mt-2 ${fieldClass} ${errors.guests ? 'border-brand-soft' : ''}`}
          />
          {errors.guests && <p className={errorClass}>{errors.guests}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Tell us about the event
        </label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={update('message')}
          placeholder="Venue, menu preferences, veg or non-veg, budget per plate..."
          className={`mt-2 resize-y ${fieldClass}`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-surface transition-all hover:-translate-y-0.5 hover:bg-brand-deep motion-reduce:hover:translate-y-0"
      >
        <Icon.whatsapp className="h-4.5 w-4.5 text-accent-light" />
        Send Enquiry on WhatsApp
      </button>

      {sent ? (
        <p className="flex items-start gap-2 text-xs font-medium text-brand">
          <Icon.check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
          WhatsApp should have opened in a new tab with your enquiry ready to send. If it did not,
          call us directly on {business.phones[0].display}.
        </p>
      ) : (
        <p className="text-xs leading-relaxed text-ink/45">
          Submitting opens WhatsApp with your details and the selected menu package — just press
          send. Prefer to talk? Call {business.phones[0].display}.
        </p>
      )}
    </form>
  )
}
