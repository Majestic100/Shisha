import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'

/**
 * Standard inner-page header. Generous top padding clears the fixed header.
 */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: React.ReactNode
  intro?: React.ReactNode
}) {
  return (
    <header className="border-b border-hairline pb-16 pt-40 md:pb-24 md:pt-52">
      <Container>
        <div className="animate-fade-up">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-7 max-w-4xl text-balance text-h1 font-light text-ivory">
            {title}
          </h1>
          {intro && (
            <p className="mt-8 max-w-prose text-pretty text-lg text-ivory-muted">
              {intro}
            </p>
          )}
        </div>
      </Container>
    </header>
  )
}
