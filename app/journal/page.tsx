import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Media } from '@/components/ui/Media'
import { PageHeader } from '@/components/sections/PageHeader'
import { getAllJournal } from '@/lib/journal'
import { buildMetadata } from '@/lib/seo'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = buildMetadata({
  title: 'Journal',
  description:
    'Writing from the house of Smoke Connoisseur. On permanence, the workshop, the county and the craft of building an heirloom.',
  path: '/journal',
})

export default function JournalPage() {
  const entries = getAllJournal()
  const [lead, ...rest] = entries

  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="On permanence, craft and the long view."
        intro="Occasional writing from the house. Considered, unhurried, and never for the sake of it."
      />

      {/* Lead entry */}
      {lead && (
        <section className="py-section">
          <Container>
            <Reveal>
              <Link href={`/journal/${lead.slug}`} className="group block">
                <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                  <div className="overflow-hidden lg:col-span-7">
                    <Media
                      asset={lead.cover}
                      aspect="16 / 10"
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      priority
                      className="transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="lg:col-span-5">
                    <p className="flex items-center gap-4 text-xs uppercase tracking-[0.16em] text-ivory-faint">
                      <span className="text-brass">{lead.category}</span>
                      <span aria-hidden>·</span>
                      <span>{formatDate(lead.date)}</span>
                    </p>
                    <h2 className="mt-6 text-balance text-h2 font-light text-ivory transition-colors group-hover:text-brass-light">
                      {lead.title}
                    </h2>
                    <p className="mt-5 max-w-prose text-pretty text-ivory-muted">
                      {lead.excerpt}
                    </p>
                    <span className="mt-7 inline-block text-[0.72rem] uppercase tracking-[0.2em] text-brass">
                      Read the entry
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Remaining entries */}
      {rest.length > 0 && (
        <section className="border-t border-hairline pb-section pt-16 md:pt-24">
          <Container>
            <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((entry, i) => (
                <Reveal as="article" key={entry.slug} delay={(i % 3) * 0.08}>
                  <Link href={`/journal/${entry.slug}`} className="group block">
                    <div className="overflow-hidden">
                      <Media
                        asset={entry.cover}
                        aspect="4 / 3"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.03]"
                      />
                    </div>
                    <p className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-ivory-faint">
                      <span className="text-brass">{entry.category}</span>
                      <span aria-hidden>·</span>
                      <span>{entry.readingTime}</span>
                    </p>
                    <h3 className="mt-4 text-balance font-serif text-2xl font-light text-ivory transition-colors group-hover:text-brass-light">
                      {entry.title}
                    </h3>
                    <p className="mt-3 text-pretty text-sm text-ivory-muted">
                      {entry.excerpt}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
