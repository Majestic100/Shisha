import Link from 'next/link'
import { footerNav, site } from '@/lib/site'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { NewsletterForm } from '@/components/forms/NewsletterForm'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hairline bg-surface">
      <Container as="div" className="py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Newsletter */}
          <div className="lg:col-span-5">
            <Eyebrow>The Connoisseur Circle</Eyebrow>
            <p className="mt-6 max-w-md text-balance font-serif text-3xl font-light leading-tight text-foreground">
              Join the Connoisseur Circle
            </p>
            <p className="mt-4 max-w-md text-pretty text-sm text-foreground-muted">
              Occasional correspondence on new instruments, the workshop and the
              craft. No noise. Unsubscribe whenever you wish.
            </p>
            <div className="mt-8 max-w-md">
              <NewsletterForm />
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-5 lg:col-start-8">
            {footerNav.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <p className="eyebrow mb-5 text-foreground-faint">{col.heading}</p>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="link-underline text-sm text-foreground/80 transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <nav aria-label="Elsewhere">
              <p className="eyebrow mb-5 text-foreground-faint">Elsewhere</p>
              <ul className="space-y-3">
                <li>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="link-underline text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    Enquiries
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-hairline pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-serif text-lg font-light tracking-[0.18em] text-foreground">
            SMOKE CONNOISSEUR
            <span className="ml-3 align-middle text-xs uppercase tracking-[0.2em] text-brass">
              {site.tagline}
            </span>
          </p>
          <p className="text-xs uppercase tracking-[0.16em] text-foreground-faint">
            &copy; {year} {site.name}. Made in England.
          </p>
        </div>
      </Container>
    </footer>
  )
}
