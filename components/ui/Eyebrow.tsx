import { cn } from '@/lib/utils'

/**
 * Small uppercase brass label used to introduce sections.
 * A short hairline rule precedes the text for an engineering-catalogue feel.
 */
export function Eyebrow({
  children,
  className,
  rule = true,
}: {
  children: React.ReactNode
  className?: string
  rule?: boolean
}) {
  return (
    <span className={cn('inline-flex items-center gap-3 eyebrow', className)}>
      {rule && <span aria-hidden className="h-px w-8 bg-brass/60" />}
      {children}
    </span>
  )
}
