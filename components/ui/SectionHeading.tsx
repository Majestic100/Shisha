import { cn } from '@/lib/utils'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'

/**
 * Eyebrow + serif heading + optional standfirst, wrapped in a scroll reveal.
 * Used to open most sections across the site.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  className,
  as = 'h2',
}: {
  eyebrow?: string
  title: React.ReactNode
  intro?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
  as?: 'h1' | 'h2'
}) {
  const Heading = as
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-6',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && <Eyebrow rule={align === 'left'}>{eyebrow}</Eyebrow>}
      <Heading
        className={cn(
          'text-balance font-light',
          as === 'h1' ? 'text-h1' : 'text-h2',
          align === 'center' && 'max-w-3xl'
        )}
      >
        {title}
      </Heading>
      {intro && (
        <p
          className={cn(
            'max-w-prose text-pretty text-ivory-muted',
            align === 'center' && 'mx-auto'
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  )
}
