import { Mail, MapPin, Phone } from 'lucide-react'

import { interests } from '../data/education'
import { profile } from '../data/profile'
import { languages, pillars } from '../data/skills'
import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'

export function About() {
  return (
    <Section
      id="a-propos"
      eyebrow="À propos"
      title="Un profil qui va du poste de travail au datacenter"
      description="Mon parcours combine l’assistance aux utilisateurs, l’administration des systèmes et des réseaux, la sécurisation des accès et le développement d’applications web. Ces briques s’assemblent naturellement dans un même métier : faire fonctionner, et faire en confiance, une infrastructure IT."
    >
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div>
          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.id} delay={index * 70}>
                <Card className="h-full">
                  <h3 className="text-strong text-base font-semibold tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed">{pillar.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <Card className="mt-5">
              <h3 className="text-strong text-base font-semibold tracking-tight">Langues</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {languages.map((language) => (
                  <li key={language.name} className="flex items-center justify-between gap-4">
                    <span className="text-strong text-sm font-medium">{language.name}</span>
                    <span className="text-muted text-sm">{language.level}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={180}>
            <Card className="mt-5">
              <h3 className="text-strong text-base font-semibold tracking-tight">
                Centres d’intérêt
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <li
                    key={interest.label}
                    className="border-[var(--border-subtle)] bg-[var(--surface-muted)] text-muted inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm"
                  >
                    <interest.icon className="h-4 w-4" />
                    {interest.label}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <Card className="lg:sticky lg:top-24">
            <h3 className="text-strong text-base font-semibold tracking-tight">Coordonnées</h3>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail className="text-brand-700 dark:text-brand-300 mt-0.5 h-4 w-4 shrink-0" />
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-brand-700 dark:hover:text-brand-300 break-all text-sm transition-colors"
                >
                  {profile.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-brand-700 dark:text-brand-300 mt-0.5 h-4 w-4 shrink-0" />
                <a
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                  className="hover:text-brand-700 dark:hover:text-brand-300 text-sm transition-colors"
                >
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-700 dark:text-brand-300 mt-0.5 h-4 w-4 shrink-0" />
                <span className="text-sm">{profile.location}</span>
              </li>
            </ul>

            <div className="border-[var(--border-subtle)] mt-6 border-t pt-6">
              <p className="text-strong text-sm font-medium">{profile.availability}</p>
              <p className="mt-1.5 text-sm leading-relaxed">
                Ingénieur sortant de l’École Nationale de l’Informatique, à la recherche d’un poste
                en IT Support, systèmes et réseaux, cybersécurité ou DevOps.
              </p>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}