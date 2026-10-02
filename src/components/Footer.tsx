
import { navItems } from '../data/profile'
import { GithubMark } from './icons/GithubMark'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="surface-card border-x-0 border-b-0">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-strong text-sm font-semibold tracking-tight">
              NICO MICKAEL ANDRIAMISATA
            </p>
            <p className="mt-1 text-sm">
              Ingénieur informaticien — IT Support, Systèmes &amp; Réseaux, Cybersécurité, DevOps
            </p>
          </div>

          <nav aria-label="Pied de page">
            <ul className="-mx-2 flex flex-wrap">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-brand-700 dark:hover:text-brand-300 inline-flex min-h-11 items-center px-2 text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[var(--border-subtle)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted text-xs">
            © {year} Nico Mickael Andriamisata. Tous droits réservés.
          </p>
          <a
            href="https://github.com/Nico-Mickael"
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted hover:text-brand-700 dark:hover:text-brand-300 -my-1 inline-flex min-h-11 items-center gap-2 py-1 text-xs transition-colors"
          >
            <GithubMark className="h-4 w-4" />
            github.com/Nico-Mickael
          </a>
        </div>
      </div>
    </footer>
  )
}