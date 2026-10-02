import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      <span className="text-xs font-semibold tracking-[0.16em] text-brand-700 uppercase dark:text-brand-300">
        {eyebrow}
      </span>
      <h2 className="text-strong mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-pretty">{description}</p>
      ) : null}
    </div>
  )
}