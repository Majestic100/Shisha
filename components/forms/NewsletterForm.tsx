'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * "Join the Connoisseur Circle" sign-up. UI only: validates client-side and
 * shows a success state. Wire `onSubmit` to a service (Resend, Mailchimp, a
 * route handler) when ready — no data leaves the browser as shipped.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'done'>('idle')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!EMAIL_RE.test(email)) {
      setStatus('error')
      return
    }
    // Placeholder for a future subscription request.
    setStatus('done')
    setEmail('')
  }

  if (status === 'done') {
    return (
      <p className="text-pretty text-sm text-ivory-muted" role="status">
        Thank you. You have joined the Connoisseur Circle.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex items-center gap-4 border-b border-hairline pb-3 focus-within:border-brass">
        <input
          id="newsletter-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === 'error') setStatus('idle')
          }}
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
          className="w-full bg-transparent font-sans text-sm text-ivory placeholder:text-ivory-faint focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 font-sans text-[0.72rem] uppercase tracking-[0.2em] text-brass transition-colors duration-300 hover:text-brass-light"
        >
          Join
        </button>
      </div>
      <p
        id="newsletter-error"
        className={cn(
          'mt-2 text-xs text-brass-light transition-opacity',
          status === 'error' ? 'opacity-100' : 'opacity-0'
        )}
        role={status === 'error' ? 'alert' : undefined}
      >
        Please enter a valid email address.
      </p>
    </form>
  )
}
