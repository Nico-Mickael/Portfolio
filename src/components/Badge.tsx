interface BadgeProps {
  children: string
  tone?: 'brand' | 'accent' | 'neutral'
}

const tones = {
  brand:
    'bg-brand-50 text-brand-700 ring-brand-600/15 dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-400/20',
  accent:
    'bg-accent-500/10 text-accent-600 ring-accent-600/20 dark:text-accent-400 dark:ring-accent-400/20',
  neutral:
    'bg-slate-100 text-slate-600 ring-slate-500/15 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-600/30',
}

export function Badge({ children, tone = 'neutral' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${tones[tone]}`}
    >
      {children}
    </span>
  )
}