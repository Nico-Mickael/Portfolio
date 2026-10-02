import { createElement } from 'react'
import type { ReactNode } from 'react'

import { useReveal } from '../hooks/useReveal'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'article' | 'section'
}

/**
 * Wraps content in a scroll-reveal wrapper. The `as` prop changes the rendered
 * element so it can sit directly inside lists and articles.
 */
export function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>()

  return createElement(
    as,
    {
      ref,
      className: `reveal ${className}`,
      'data-visible': visible,
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children,
  )
}