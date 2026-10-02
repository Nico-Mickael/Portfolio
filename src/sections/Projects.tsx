import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

import { Badge } from '../components/Badge'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { GithubMark } from '../components/icons/GithubMark'
import { projects } from '../data/projects'
import type { Project } from '../types'

function ProjectDetail({ project }: { project: Project }) {
  const Icon = project.icon
  const features = project.features ?? []
  const highlights = project.highlights ?? []

  return (
    <div className="surface-card rounded-xl p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
        <div className="flex items-start gap-4">
          <span className="bg-brand-50 text-brand-700 ring-brand-600/15 dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-400/20 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ring-1 ring-inset">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-strong text-lg font-semibold tracking-tight">{project.name}</h3>
            <p className="text-muted mt-0.5 text-sm">{project.subtitle}</p>
          </div>
        </div>
        <Badge tone="brand">{project.status}</Badge>
      </div>

      <p className="mt-6 text-sm leading-relaxed">{project.description}</p>

      <dl className="border-[var(--border-subtle)] mt-6 grid gap-4 border-y py-5 text-sm sm:grid-cols-3">
        <div>
          <dt className="text-muted text-xs font-medium tracking-wide uppercase">Rôle</dt>
          <dd className="text-strong mt-1">{project.role}</dd>
        </div>
        <div>
          <dt className="text-muted text-xs font-medium tracking-wide uppercase">Période</dt>
          <dd className="text-strong mt-1">{project.period}</dd>
        </div>
        <div>
          <dt className="text-muted text-xs font-medium tracking-wide uppercase">Contexte</dt>
          <dd className="text-strong mt-1">{project.architecture[0]}</dd>
        </div>
      </dl>

      {project.context ? <p className="mt-6 text-sm leading-relaxed">{project.context}</p> : null}

      {highlights.length ? (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="border-[var(--border-subtle)] bg-[var(--surface-muted)] rounded-lg border px-4 py-3"
            >
              <p className="text-strong text-xl font-semibold tracking-tight">
                {highlight.value}
              </p>
              <p className="text-muted mt-0.5 text-xs">{highlight.label}</p>
            </div>
          ))}
        </div>
      ) : null}

      {features.length ? (
        <>
          <h4 className="text-strong mt-8 text-sm font-semibold tracking-tight">Fonctionnalités</h4>
          <ul className="mt-3 flex flex-col gap-2">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm leading-relaxed">
                <span
                  aria-hidden="true"
                  className="bg-accent-500 mt-[0.55rem] h-1 w-1 shrink-0 rounded-full"
                />
                {feature}
              </li>
            ))}
          </ul>
        </>
      ) : null}

      {project.architecture.length ? (
        <>
          <h4 className="text-strong mt-8 text-sm font-semibold tracking-tight">Architecture</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.architecture.map((item) => (
              <li
                key={item}
                className="border-[var(--border-subtle)] bg-[var(--surface-muted)] text-muted rounded-md border px-2.5 py-1 text-xs"
              >
                {item}
              </li>
            ))}
          </ul>
        </>
      ) : null}

      {project.repo ? (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer noopener"
          className="text-brand-700 dark:text-brand-300 hover:text-brand-800 dark:hover:text-brand-200 mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <GithubMark className="h-4 w-4" />
          {project.repoLabel ?? 'Voir le dépôt'}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      ) : null}
    </div>
  )
}

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <Section
      id="projets"
      eyebrow="Projets"
      title="Des projets livrés, dont deux applications en production"
      description="Deux applications métier développées de bout en bout — conception, développement, base de données, authentification, conteneurisation et documentation — ainsi que la personnalisation d’une solution open source de gestion d’IT."
      className="bg-[var(--surface-glass)] border-y border-[var(--border-subtle)] backdrop-blur-sm"
    >
      <div className="flex flex-col gap-5">
        {projects.map((project, index) => {
          const Icon = project.icon
          const isOpen = openId === project.id

          return (
            <Reveal key={project.id} delay={index * 80}>
              <article className="surface-card rounded-xl">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : project.id)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-start gap-4 p-6 text-left"
                >
                  <span className="bg-brand-50 text-brand-700 ring-brand-600/15 dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-400/20 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ring-1 ring-inset">
                    <Icon className="h-5 w-5" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="text-strong block text-lg font-semibold tracking-tight">
                      {project.name}
                    </span>
                    <span className="text-muted mt-0.5 block text-sm">{project.subtitle}</span>
                    <span className="mt-4 flex flex-wrap items-center gap-2">
                      {project.stack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="border-[var(--border-subtle)] text-muted rounded-md border px-2.5 py-1 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 5 ? (
                        <span className="text-muted text-xs">
                          +{project.stack.length - 5}
                        </span>
                      ) : null}
                    </span>
                  </span>

                  <ArrowUpRight
                    className={`text-muted group-hover:text-brand-700 dark:group-hover:text-brand-300 mt-1 h-5 w-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {isOpen ? (
                  <div className="border-[var(--border-subtle)] border-t">
                    <ProjectDetail project={project} />
                  </div>
                ) : null}
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}