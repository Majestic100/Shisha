import type { Specification } from '@/types'

/**
 * Specification table rendered as a definition list with hairline rules.
 * Reads as an engineering datasheet, not a marketing panel.
 */
export function SpecTable({ specifications }: { specifications: Specification[] }) {
  return (
    <dl className="border-t border-hairline">
      {specifications.map((spec) => (
        <div
          key={spec.label}
          className="flex items-baseline justify-between gap-6 border-b border-hairline py-4"
        >
          <dt className="text-xs uppercase tracking-[0.16em] text-ivory-faint">
            {spec.label}
          </dt>
          <dd className="text-right font-sans text-sm text-ivory">{spec.value}</dd>
        </div>
      ))}
    </dl>
  )
}
