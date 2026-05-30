'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { primaryNav, site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const reduce = useReducedMotion()

  // Transparent over the hero, solid once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on navigation.
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Lock body scroll while the overlay is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-700 ease-luxe',
        scrolled || menuOpen
          ? 'border-b border-hairline bg-surface/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="container-page flex h-20 items-center justify-between md:h-24">
        <Link
          href="/"
          className="font-serif text-lg font-light tracking-[0.22em] text-foreground md:text-xl"
          aria-label={`${site.name} — home`}
        >
          SMOKE CONNOISSEUR
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={cn(
                'link-underline font-sans text-[0.78rem] uppercase tracking-[0.18em] transition-colors duration-300',
                isActive(item.href) ? 'text-brass' : 'text-foreground/80 hover:text-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden className="relative block h-3.5 w-6">
            <span
              className={cn(
                'absolute left-0 h-px w-6 bg-foreground transition-all duration-500 ease-luxe',
                menuOpen ? 'top-1/2 rotate-45' : 'top-0'
              )}
            />
            <span
              className={cn(
                'absolute bottom-0 left-0 h-px w-6 bg-foreground transition-all duration-500 ease-luxe',
                menuOpen ? 'bottom-1/2 -rotate-45' : 'bottom-0'
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="container-page flex flex-col gap-1 border-t border-hairline bg-surface pb-10 pt-4"
            >
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn(
                    'border-b border-hairline py-4 font-serif text-2xl font-light',
                    isActive(item.href) ? 'text-brass' : 'text-foreground'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
