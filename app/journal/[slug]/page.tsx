import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Media } from '@/components/ui/Media'
import { JsonLd } from '@/components/ui/JsonLd'
import { getAllJournal, getJournalBySlug } from '@/lib/journal'
import { articleSchema, buildMetadata } from '@/lib/seo'
import { formatDate } from '@/lib/utils'

type Params = { params: { slug: string } }

export function generateStaticParams() {
  return getAllJournal().map((e) => ({ slug: e.slug }))
}

export function generateMetadata({ params }: Params): Metadata {
  const entry = getJournalBySlug(params.slug)
  if (!entry) return {}
  return buildMetadata({
    title: entry.title,
    description: entry.excerpt,
    path: `/journal/${entry.slug}`,
    type: 'article',
  })
}

export default function JournalEntryPage({ params }: Params) {
  const entry = getJournalBySlug(params.slug)
  if (!entry) notFound()

  return (
    <>
      <JsonLd data={articleSchema(entry)} />

      <article>
        <header className="border-b border-hairline pb-16 pt-40 md:pt-52">
          <Container>
            <Reveal className="mx-auto max-w-prose text-center">
              <p className="flex items-center justify-center gap-4 text-xs uppercase tracking-[0.16em] text-ivory-faint">
                <span className="text-brass">{entry.category}</span>
                <span aria-hidden>·</span>
                <span>{formatDate(entry.date)}</span>
                <span aria-hidden>·</span>
                <span>{entry.readingTime}</span>
              </p>
              <h1 className="mt-8 text-balance text-h1 font-light text-ivory">
                {entry.title}
              </h1>
              <p className="mt-6 text-pretty text-lg italic text-ivory-muted">
                {entry.excerpt}
              </p>
            </Reveal>
          </Container>
        </header>

        <Container className="py-section">
          <Reveal className="mx-auto max-w-prose">
            <Media
              asset={entry.cover}
              aspect="16 / 9"
              sizes="(min-width: 1024px) 46rem, 100vw"
              priority
            />
          </Reveal>

          <div className="mx-auto mt-16 max-w-prose">
            {entry.body.map((para, i) => {
              if (para.startsWith('> ')) {
                return (
                  <Reveal key={i}>
                    <blockquote className="my-12 border-l border-brass pl-8">
                      <p className="text-balance font-serif text-3xl font-light italic leading-snug text-ivory">
                        {para.slice(2)}
                      </p>
                    </blockquote>
                  </Reveal>
                )
              }
              return (
                <Reveal key={i}>
                  <p className="mb-7 text-pretty text-lg leading-relaxed text-ivory-muted">
                    {para}
                  </p>
                </Reveal>
              )
            })}
          </div>

          <div className="mx-auto mt-16 max-w-prose border-t border-hairline pt-8">
            <Link
              href="/journal"
              className="link-underline text-[0.72rem] uppercase tracking-[0.2em] text-brass"
            >
              Return to the Journal
            </Link>
          </div>
        </Container>
      </article>
    </>
  )
}
