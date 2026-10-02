import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover
    ? 'transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-lg hover:shadow-brand-900/5'
    : ''

  return (
    <div className={`surface-card rounded-xl p-6 ${hoverStyles} ${className}`}>{children}</div>
  )
}