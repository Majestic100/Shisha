'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useId, useState } from 'react'
import type { EngineeredDetail } from '@/types'

/**
 * Accessible disclosure list for "engineered details". Single-open behaviour,
 * full keyboard support via native buttons, animated height (reduced-motion
 * aware). aria-expanded / aria-controls wire each header to its panel.
 */
export function Accordion({ items }: { items: EngineeredDetail[] }) {
  const [open, setOpen] = useState<number | null>(0)
  const reduce = useReducedMotion()
  const baseId = useId()

  return (
    <div className="border-t border-hairline">
      {items.map((item, i) => {
        const isOpen = open === i
        const headerId = `${baseId}-h-${i}`
        const panelId = `${baseId}-p-${i}`
        return (
          <div key={item.title} className="border-b border-hairline">
            <h3>
              <button
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-300"
              >
                <span className="font-serif text-2xl font-light text-ivory">
                  {item.title}
                </span>
                <span
                  aria-hidden
                  className="relative h-3 w-3 shrink-0 text-brass"
                >
                  <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-current" />
                  <span
                    className={`absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-500 ease-luxe ${
                      isOpen ? 'scale-y-0' : 'scale-y-100'
                    }`}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-prose pb-7 pr-10 text-pretty text-ivory-muted">
                    {item.body}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
