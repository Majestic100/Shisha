'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Fields = { name: string; email: string; subject: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>

/**
 * Enquiry form. UI only: validates client-side and shows a success state.
 * No request is made — wire a route handler or service to `handleSubmit`
 * when ready. Nothing is transmitted anywhere as shipped.
 */
export function ContactForm() {
  const [fields, setFields] = useState<Fields>({
    name: '',
    email: '',
    subject: 'General enquiry',
    message: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function validate(f: Fields): Errors {
    const e: Errors = {}
    if (!f.name.trim()) e.name = 'Please tell us your name.'
    if (!EMAIL_RE.test(f.email)) e.email = 'Please enter a valid email address.'
    if (f.message.trim().length < 10) e.message = 'A little more detail, please.'
    return e
  }

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const found = validate(fields)
    setErrors(found)
    if (Object.keys(found).length === 0) {
      // Placeholder for a future enquiry request.
      setSent(true)
    }
  }

  if (sent) {
    return (
      <div role="status" className="border border-hairline p-10 text-center">
        <p className="font-serif text-3xl font-light text-foreground">Thank you.</p>
        <p className="mx-auto mt-4 max-w-sm text-pretty text-sm text-foreground-muted">
          Your enquiry has been received. We reply to every correspondence in
          person, and will be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      <Field
        id="name"
        label="Name"
        value={fields.name}
        onChange={(v) => update('name', v)}
        error={errors.name}
        autoComplete="name"
      />
      <Field
        id="email"
        label="Email"
        type="email"
        value={fields.email}
        onChange={(v) => update('email', v)}
        error={errors.email}
        autoComplete="email"
      />

      <div className="flex flex-col gap-3">
        <label htmlFor="subject" className="eyebrow text-foreground-faint">
          Subject
        </label>
        <select
          id="subject"
          value={fields.subject}
          onChange={(e) => update('subject', e.target.value)}
          className="border-b border-hairline bg-transparent py-3 font-sans text-foreground focus:border-brass focus:outline-none"
        >
          <option className="bg-surface">General enquiry</option>
          <option className="bg-surface">Commission an instrument</option>
          <option className="bg-surface">The Connoisseur Circle</option>
          <option className="bg-surface">Press</option>
        </select>
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="message" className="eyebrow text-foreground-faint">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={fields.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className="resize-none border-b border-hairline bg-transparent py-3 font-sans text-foreground placeholder:text-foreground-faint focus:border-brass focus:outline-none"
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-xs text-brass-light">
            {errors.message}
          </p>
        )}
      </div>

      <div className="pt-2">
        <Button type="submit" variant="solid" size="lg">
          Send Enquiry
        </Button>
      </div>
    </form>
  )
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
  autoComplete,
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  error?: string
  type?: string
  autoComplete?: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="eyebrow text-foreground-faint">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          'border-b bg-transparent py-3 font-sans text-foreground focus:outline-none',
          error ? 'border-brass-light' : 'border-hairline focus:border-brass'
        )}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-brass-light">
          {error}
        </p>
      )}
    </div>
  )
}
