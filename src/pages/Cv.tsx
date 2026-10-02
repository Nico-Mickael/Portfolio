import { ArrowLeft, Printer } from 'lucide-react'
import { Link } from 'react-router-dom'

import photo from '../assets/photo-nico.jpg'
import { education } from '../data/education'
import { experiences } from '../data/experience'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'
import type { Experience } from '../types'

type Reference = NonNullable<Experience['reference']>

const references: Reference[] = experiences.flatMap((experience) =>
  experience.reference ? [experience.reference] : [],
)

/** Compact technical-skill rendering: category heading then comma-separated tags. */
function SkillLine({ title, items }: { title: string; items: string[] }) {
  return (
    <p className="text-[8.5pt] leading-[1.5]">
      <span className="font-semibold text-slate-900">{title} : </span>
      <span className="text-slate-600">{items.join(' · ')}</span>
    </p>
  )
}

export function Cv() {
  return (
    <div className="min-h-screen bg-slate-100 print:bg-white">
      <div className="no-print border-[var(--border-subtle)] bg-[var(--surface)] sticky top-0 z-10 border-b">
        <div className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between gap-4 px-5">
          <Link
            to="/"
            className="text-muted hover:text-strong -my-2 inline-flex min-h-11 items-center gap-2 py-2 text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au portfolio
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="bg-brand-700 hover:bg-brand-800 inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-medium text-white transition-colors"
          >
            <Printer className="h-4 w-4" />
            Imprimer / Enregistrer en PDF
          </button>
        </div>
      </div>

      <article className="mx-auto my-8 w-full max-w-[210mm] bg-white px-9 py-10 text-slate-700 shadow-sm print:my-0 print:max-w-none print:px-0 print:py-0 print:shadow-none">
        {/* Header */}
        <header className="border-b-2 border-blue-800 pb-4">
          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0 flex-1">
              <h1 className="text-[19pt] leading-tight font-bold tracking-tight text-slate-900">
                {profile.name}
              </h1>
              <p className="mt-1 text-[10pt] font-semibold tracking-wide text-blue-800 uppercase">
                {profile.headline}
              </p>
              <p className="mt-2.5 text-[8.5pt] text-slate-600">
                {profile.location} · {profile.phone} · {profile.email} · github.com/Nico-Mickael
              </p>
            </div>
            <img
              src={photo}
              alt={profile.name}
              width={420}
              height={551}
              className="h-[27mm] w-auto shrink-0 rounded-md object-cover object-top ring-1 ring-slate-300"
            />
          </div>
        </header>

        {/* Profile */}
        <section className="mt-5">
          <h2 className="text-[9.5pt] font-bold tracking-[0.12em] text-blue-800 uppercase">
            Profil
          </h2>
          <p className="mt-2 text-[9pt] leading-[1.6] text-slate-700">{profile.summary}</p>
        </section>

        {/* Technical skills */}
        <section className="mt-5">
          <h2 className="text-[9.5pt] font-bold tracking-[0.12em] text-blue-800 uppercase">
            Compétences techniques
          </h2>
          <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1.5">
            {skillGroups.map((group) => (
              <SkillLine
                key={group.id}
                title={group.title}
                items={group.items.map((item) => item.name)}
              />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-5">
          <h2 className="text-[9.5pt] font-bold tracking-[0.12em] text-blue-800 uppercase">
            Expériences professionnelles
          </h2>

          <div className="mt-2.5 flex flex-col gap-3">
            {experiences.map((experience) => (
              <div key={experience.id}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[10pt] font-bold text-slate-900">
                    {experience.role}
                    <span className="mx-1.5 font-normal text-slate-400">—</span>
                    {experience.company}
                  </h3>
                  <span className="shrink-0 text-[8.5pt] font-medium whitespace-nowrap text-slate-500">
                    {experience.period}
                  </span>
                </div>
                <ul className="mt-1.5 flex flex-col gap-1">
                  {experience.missions.map((mission) => (
                    <li key={mission} className="flex gap-2 text-[9pt] leading-[1.5]">
                      <span className="mt-[0.45rem] h-[3px] w-[3px] shrink-0 rounded-full bg-slate-400" />
                      <span>{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {references.length ? (
            <div className="mt-3 border-t border-slate-200 pt-2.5">
              <p className="text-[8pt] font-semibold tracking-[0.1em] text-blue-800 uppercase">
                Référence
              </p>
              {references.map((reference) => (
                <p key={reference.name} className="mt-1 text-[9pt] leading-[1.5] text-slate-700">
                  <span className="font-semibold text-slate-900">{reference.name}</span>
                  <span className="text-slate-600">
                    {' '}
                    — {reference.label} — {reference.phone}
                  </span>
                </p>
              ))}
            </div>
          ) : null}
        </section>

        {/* Projects */}
        <section className="mt-5">
          <h2 className="text-[9.5pt] font-bold tracking-[0.12em] text-blue-800 uppercase">
            Projets
          </h2>

          <div className="mt-2.5 flex flex-col gap-2.5">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[10pt] font-bold text-slate-900">
                    {project.name}
                    <span className="mx-1.5 font-normal text-slate-400">—</span>
                    <span className="font-medium text-slate-600">{project.subtitle}</span>
                  </h3>
                  <span className="shrink-0 text-[8.5pt] font-medium whitespace-nowrap text-slate-500">
                    {project.period}
                  </span>
                </div>
                <p className="mt-1 text-[9pt] leading-[1.5] text-slate-700">
                  {project.description}
                </p>
                <p className="mt-1 text-[8pt] text-slate-500">
                  <span className="font-semibold">Stack : </span>
                  {project.stack.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-5">
          <h2 className="text-[9.5pt] font-bold tracking-[0.12em] text-blue-800 uppercase">
            Formation
          </h2>
          {education.map((item) => (
            <div key={item.id} className="mt-2">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[10pt] font-bold text-slate-900">
                  {item.degree}
                  <span className="mx-1.5 font-normal text-slate-400">—</span>
                  {item.school}
                </h3>
                <span className="shrink-0 text-[8.5pt] font-medium whitespace-nowrap text-slate-500">
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Languages + interests */}
        <div className="mt-5 grid grid-cols-2 gap-x-6">
          <section>
            <h2 className="text-[9.5pt] font-bold tracking-[0.12em] text-blue-800 uppercase">
              Langues
            </h2>
            <p className="mt-2 text-[9pt] text-slate-600">
              Malagasy (langue maternelle) · Français (assez bien) · Anglais (technique)
            </p>
          </section>

          <section>
            <h2 className="text-[9.5pt] font-bold tracking-[0.12em] text-blue-800 uppercase">
              Centres d’intérêt
            </h2>
            <p className="mt-2 text-[9pt] text-slate-600">Lecture · Basketball · Musique</p>
          </section>
        </div>
      </article>
    </div>
  )
}