import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'solid' | 'outline' | 'link'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 font-sans uppercase tracking-[0.18em] transition-colors duration-500 ease-luxe focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-brass disabled:opacity-50 disabled:pointer-events-none'

const sizes: Record<Size, string> = {
  md: 'text-[0.72rem] px-7 py-3.5',
  lg: 'text-[0.78rem] px-9 py-4',
}

const variants: Record<Variant, string> = {
  solid: 'bg-brass text-surface hover:bg-brass-light',
  outline: 'border border-brass/50 text-foreground hover:border-brass hover:bg-brass/5',
  link: 'px-0 py-0 text-brass hover:text-brass-light tracking-[0.2em]',
}

type CommonProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonAsLink = CommonProps & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    'href' | 'className' | 'children'
  >

type ButtonAsButton = CommonProps & { href?: undefined } & Omit<
    ComponentPropsWithoutRef<'button'>,
    'className' | 'children'
  >

/**
 * Restrained call to action. Labels should read "Discover", "Acquire",
 * "Explore the Collection" — never "Buy". Renders a Link when `href` is set.
 */
export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = 'outline', size = 'md', className, children } = props
  const classes = cn(base, sizes[size], variants[variant], className)

  if ('href' in props && props.href) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } =
    props as ButtonAsButton
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
