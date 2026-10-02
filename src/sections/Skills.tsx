import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <Section
      id="competences"
      eyebrow="Compétences"
      title="Des compétences terrain, pas seulement sur le papier"
      description="Une grande partie de ces compétences a été acquise en stage : ce sont des systèmes administrés, des pare-feu configurés et des incidents traités, pas seulement des supports de cours."
      className="bg-[var(--surface-glass)] border-y border-[var(--border-subtle)] backdrop-blur-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.id} delay={(index % 3) * 70}>
            <article className="surface-card group h-full rounded-xl p-6 transition-colors duration-300 hover:border-brand-400">
              <div className="flex items-center gap-3">
                <span className="bg-brand-50 text-brand-700 ring-brand-600/15 dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-400/20 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 ring-inset">
                  <group.icon className="h-5 w-5" />
                </span>
                <h3 className="text-strong text-base font-semibold tracking-tight">{group.title}</h3>
              </div>

              {group.description ? (
                <p className="mt-4 text-sm leading-relaxed">{group.description}</p>
              ) : null}

              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="border-[var(--border-subtle)] bg-[var(--surface-muted)] text-muted rounded-md border px-2.5 py-1 text-xs font-medium"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}