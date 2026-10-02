import { GraduationCap, MapPin } from 'lucide-react'

import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { education } from '../data/education'

export function Education() {
  return (
    <Section
      id="formation"
      eyebrow="Formation"
      title="Diplôme d’ingénieur en informatique"
      description="Une formation généraliste qui couvre les quatre domaines de ce portfolio : les fondations système et réseau, la sécurité, le DevOps et le développement."
    >
      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        {education.map((item, index) => (
          <Reveal key={item.id} delay={index * 70}>
            <article className="surface-card h-full rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="bg-brand-50 text-brand-700 ring-brand-600/15 dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-400/20 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ring-1 ring-inset">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-strong text-lg font-semibold tracking-tight">{item.school}</h3>
                  <p className="text-brand-700 dark:text-brand-300 mt-1 text-sm font-medium">
                    {item.degree}
                  </p>
                  <p className="text-muted mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                    <span>{item.period}</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.location}
                    </span>
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed">{item.description}</p>
            </article>
          </Reveal>
        ))}

        <Reveal delay={120}>
          <article className="surface-card h-full rounded-xl p-6 sm:p-8">
            <h3 className="text-strong text-base font-semibold tracking-tight">
              Ce que j’en retiens
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="bg-brand-700 dark:bg-brand-300 mt-[0.55rem] h-1 w-1 shrink-0 rounded-full"
                />
                Une base solide en systèmes, réseaux et bases de données, appliquée ensuite en
                entreprise.
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="bg-brand-700 dark:bg-brand-300 mt-[0.55rem] h-1 w-1 shrink-0 rounded-full"
                />
                Une approche sécurité et DevOps nourrie par des projets concrets, du conteneur à la
                détection d’intrusion.
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="bg-brand-700 dark:bg-brand-300 mt-[0.55rem] h-1 w-1 shrink-0 rounded-full"
                />
                L’habitude de livrer : chaque projet de stage s’est terminé par une application
                fonctionnelle, de la base de données au déploiement.
              </li>
            </ul>
          </article>
        </Reveal>
      </div>
    </Section>
  )
}