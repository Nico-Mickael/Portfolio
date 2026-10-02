import { Mail, MapPin, Phone } from 'lucide-react'

import { Section } from '../components/Section'
import { GithubMark } from '../components/icons/GithubMark'
import { profile } from '../data/profile'

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Parlons de votre infrastructure"
      description="Disponible pour un poste en IT Support, systèmes et réseaux, cybersécurité ou DevOps. N’hésitez pas à me contacter pour une question technique ou une opportunité."
    >
      <ul className="grid gap-5 sm:grid-cols-2">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="surface-card hover:border-brand-500 flex items-start gap-4 rounded-xl p-5 transition-colors"
              >
                <span className="bg-brand-50 text-brand-700 ring-brand-600/15 dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-400/20 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 ring-inset">
                  <Mail className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0">
                  <span className="text-muted block text-xs font-medium tracking-wide uppercase">
                    E-mail
                  </span>
                  <span className="text-strong mt-1 block text-sm break-all">{profile.email}</span>
                </span>
              </a>
            </li>

            <li>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="surface-card hover:border-brand-500 flex items-start gap-4 rounded-xl p-5 transition-colors"
              >
                <span className="bg-brand-50 text-brand-700 ring-brand-600/15 dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-400/20 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 ring-inset">
                  <Phone className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0">
                  <span className="text-muted block text-xs font-medium tracking-wide uppercase">
                    Téléphone
                  </span>
                  <span className="text-strong mt-1 block text-sm">{profile.phone}</span>
                </span>
              </a>
            </li>

            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="surface-card hover:border-brand-500 flex items-start gap-4 rounded-xl p-5 transition-colors"
              >
                <span className="bg-brand-50 text-brand-700 ring-brand-600/15 dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-400/20 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 ring-inset">
                  <GithubMark className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0">
                  <span className="text-muted block text-xs font-medium tracking-wide uppercase">
                    GitHub
                  </span>
                  <span className="text-strong mt-1 block text-sm break-all">
                    github.com/Nico-Mickael
                  </span>
                </span>
              </a>
            </li>

            <li className="surface-card flex items-start gap-4 rounded-xl p-5">
              <span className="bg-brand-50 text-brand-700 ring-brand-600/15 dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-400/20 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 ring-inset">
                <MapPin className="h-[18px] w-[18px]" />
              </span>
              <span className="min-w-0">
                <span className="text-muted block text-xs font-medium tracking-wide uppercase">
                  Localisation
                </span>
                <span className="text-strong mt-1 block text-sm">{profile.location}</span>
              </span>
            </li>
          </ul>

      <div className="mt-6 flex items-center gap-2.5">
        <span className="bg-accent-500 inline-block h-2 w-2 rounded-full" />
        <p className="text-strong text-sm font-medium">{profile.availability}</p>
      </div>
    </Section>
  )
}