import { Download } from 'lucide-react'
import { Link } from 'react-router-dom'

/** Routes to the printable A4 CV page and triggers the browser print dialog. */
export function DownloadCvButton({ className = '' }: { className?: string }) {
  return (
    <Link
      to="/cv"
      onClick={() => window.setTimeout(() => window.print(), 350)}
      className={`border-[var(--border-subtle)] bg-[var(--surface-raised)] text-strong hover:border-brand-500 hover:text-brand-700 dark:hover:text-brand-300 inline-flex h-10 items-center gap-2 rounded-lg border px-3.5 text-sm font-medium transition-colors ${className}`}
    >
      <Download className="h-4 w-4" />
      <span className="hidden sm:inline">Télécharger CV</span>
      <span className="sm:hidden">CV</span>
    </Link>
  )
}