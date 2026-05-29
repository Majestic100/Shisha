import { cn } from '@/lib/utils'
import type { ElementType, ReactNode } from 'react'

/**
 * Page container with the brand's generous gutters and 1440px content ceiling.
 * Renders a <div> by default; pass `as` for semantic sections.
 */
export function Container({
  as: Tag = 'div',
  className,
  children,
}: {
  as?: ElementType
  className?: string
  children: ReactNode
}) {
  return <Tag className={cn('container-page', className)}>{children}</Tag>
}
