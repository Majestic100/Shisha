import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { PageHeader } from '@/components/sections/PageHeader'
import { ContactForm } from '@/components/forms/ContactForm'
import { site } from '@/lib/site'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Enquire about an instrument, a commission, or the Connoisseur Circle. We reply to every correspondence in person.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Begin a correspondence."
        intro="Whether to acquire an instrument or to ask a single question, write to us. Every enquiry is answered in person."
      />

      <section className="py-section">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>

            {/* Details */}
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal className="space-y-12">
                <div>
                  <Eyebrow>The Works</Eyebrow>
                  <address className="mt-5 not-italic text-ivory-muted">
                    {site.contact.address.line1}
                    <br />
                    {site.contact.address.line2}
                    <br />
                    {site.contact.address.country}
                  </address>
                </div>

                <div>
                  <Eyebrow>Enquiries</Eyebrow>
                  <p className="mt-5">
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="link-underline text-ivory transition-colors hover:text-brass"
                    >
                      {site.contact.email}
                    </a>
                  </p>
                  <p className="mt-2">
                    <a
                      href={`tel:${site.contact.phone.replace(/[^+\d]/g, '')}`}
                      className="link-underline text-ivory-muted transition-colors hover:text-ivory"
                    >
                      {site.contact.phone}
                    </a>
                  </p>
                </div>

                <div>
                  <Eyebrow>Instagram</Eyebrow>
                  <p className="mt-5">
                    <a
                      href={site.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-ivory transition-colors hover:text-brass"
                    >
                      {site.social.instagramHandle}
                    </a>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
