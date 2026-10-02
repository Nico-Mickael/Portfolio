import { Building2, MapPin } from 'lucide-react'

import { Badge } from '../components/Badge'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { experiences } from '../data/experience'
import type { Experience } from '../types'

type Reference = NonNullable<Experience['reference']>

const references: Reference[] = experiences.flatMap((experience) =>
  experience.reference ? [experience.reference] : [],
)

export function Experience() {
  return (
    <Section
      id="experiences"
      eyebrow="Expériences"
      title="Quatre stages, quatre environnements différents"
      description="Du support utilisateur de proximité à la mise en place d’un SIEM, puis à l’administration d’un parc et au développement d’une application métier complète."
    >
      <ol className="relative flex flex-col gap-10">
        {/* Vertical rail */}
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[7px] w-px bg-[var(--border-subtle)] sm:left-[9px]"
        />

        {experiences.map((experience, index) => (
          <Reveal as="li" key={experience.id} delay={index * 80}>
            <div className="relative pl-8 sm:pl-12">
              <span
                aria-hidden="true"
                className="bg-brand-700 dark:bg-brand-500 absolute top-2 left-0 h-[15px] w-[15px] rounded-full ring-4 ring-[var(--surface-muted)] sm:h-[19px] sm:w-[19px]"
              />

              <div className="surface-card rounded-xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div>
                    <h3 className="text-strong text-lg font-semibold tracking-tight">
                      {experience.company}
                    </h3>
                    <p className="text-brand-700 dark:text-brand-300 mt-1 text-sm font-medium">
                      {experience.role}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="brand">{experience.contract}</Badge>
                    <span className="text-muted text-xs font-medium whitespace-nowrap">
                      {experience.period}
                    </span>
                  </div>
                </div>

                {experience.location ? (
                  <p className="text-muted mt-3 flex items-center gap-1.5 text-xs">
                    <MapPin className="h-3.5 w-3.5" />
                    {experience.location}
                  </p>
                ) : null}

                <ul className="mt-5 flex flex-col gap-2.5">
                  {experience.missions.map((mission) => (
                    <li key={mission} className="flex gap-3 text-sm leading-relaxed">
                      <span
                        aria-hidden="true"
                        className="bg-brand-700 dark:bg-brand-300 mt-[0.55rem] h-1 w-1 shrink-0 rounded-full"
                      />
                      {mission}
                    </li>
                  ))}
                </ul>

                {experience.stack?.length ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {experience.stack.map((tech) => (
                      <li
                        key={tech}
                        className="border-[var(--border-subtle)] text-muted rounded-md border px-2.5 py-1 text-xs"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      {references.length ? (
        <Reveal delay={120}>
          <div className="border-brand-600/20 bg-brand-50/60 dark:bg-brand-500/5 mt-10 flex flex-wrap items-start gap-x-10 gap-y-5 rounded-xl border p-6">
            <div className="flex items-start gap-3">
              <Building2 className="text-brand-700 dark:text-brand-300 mt-0.5 h-4 w-4 shrink-0" />
              <div className="text-sm">
                <p className="text-strong text-xs font-semibold tracking-[0.12em] uppercase">
                  Référence
                </p>
                {references.map((reference) => (
                  <div key={reference.name} className="mt-2">
                    <p className="text-strong font-medium">{reference.name}</p>
                    <p className="mt-0.5">{reference.label}</p>
                    <p className="text-muted mt-0.5 text-xs">{reference.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      ) : null}
    </Section>
  )
}