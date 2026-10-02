import { ArrowRight, Download, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

import { GithubMark } from '../components/icons/GithubMark'
import { profile } from '../data/profile'

/** Staggered entrance delays, in ms. Above-the-fold so this uses a plain
 *  CSS animation rather than the scroll-reveal observer. */
const DELAYS = [0, 90, 180, 270, 380] as const

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <div
            className="bg-brand-50 text-brand-800 ring-brand-600/15 dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-400/20 animate-rise inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset"
            style={{ animationDelay: `${DELAYS[0]}ms` }}
          >
            <MapPin className="h-3.5 w-3.5" />
            {profile.location}
          </div>

          <h1
            className="text-strong animate-rise mt-6 text-3xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl"
            style={{ animationDelay: `${DELAYS[1]}ms` }}
          >
            {profile.name}
          </h1>

          <p
            className="text-brand-700 dark:text-brand-300 animate-rise mt-5 text-lg font-medium tracking-tight text-balance sm:text-xl"
            style={{ animationDelay: `${DELAYS[2]}ms` }}
          >
            {profile.headline}
          </p>

          <p
            className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-pretty"
            style={{ animationDelay: `${DELAYS[3]}ms` }}
          >
            {profile.summary}
          </p>

          <div
            className="animate-rise mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: `${DELAYS[4]}ms` }}
          >
            <a
              href="#projets"
              className="bg-brand-700 hover:bg-brand-800 active:bg-brand-900 dark:bg-brand-600 dark:hover:bg-brand-500 dark:text-brand-950 inline-flex h-12 items-center gap-2 rounded-lg px-6 text-base font-medium text-white transition-colors"
            >
              Voir mes projets
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              to="/cv"
              onClick={() => window.setTimeout(() => window.print(), 350)}
              className="border-[var(--border-subtle)] bg-[var(--surface-raised)] text-strong hover:border-brand-500 hover:text-brand-700 dark:hover:text-brand-300 inline-flex h-12 items-center gap-2 rounded-lg border px-6 text-base font-medium transition-colors"
            >
              <Download className="h-4 w-4" />
              Télécharger mon CV
            </Link>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Profil GitHub"
              className="text-muted hover:text-brand-700 dark:hover:text-brand-300 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-raised)] transition-colors"
            >
              <GithubMark className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}