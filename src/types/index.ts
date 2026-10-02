import type { ComponentType } from 'react'

/** Accepts both Lucide icons and the local brand marks. */
export type IconComponent = ComponentType<{ className?: string }>

export interface SocialLink {
  label: string
  href: string
  icon: IconComponent
}

export interface Profile {
  name: string
  role: string
  headline: string
  summary: string
  location: string
  email: string
  phone: string
  availability: string
  github: string
  socials: SocialLink[]
}

export interface SkillItem {
  name: string
  level?: number
}

export interface SkillGroup {
  id: string
  title: string
  icon: IconComponent
  description?: string
  items: SkillItem[]
}

export interface Experience {
  id: string
  company: string
  role: string
  contract: string
  location?: string
  period: string
  startDate: string
  endDate: string
  current?: boolean
  missions: string[]
  stack?: string[]
  reference?: {
    label: string
    name: string
    phone: string
  }
}

export interface ProjectHighlight {
  label: string
  value: string
}

export interface Project {
  id: string
  name: string
  subtitle: string
  description: string
  context?: string
  icon: IconComponent
  period: string
  status: string
  role: string
  stack: string[]
  features?: string[]
  highlights?: ProjectHighlight[]
  architecture: string[]
  repo?: string
  repoLabel?: string
}

export interface Education {
  id: string
  school: string
  degree: string
  period: string
  location: string
  description: string
}

export interface Language {
  name: string
  level: string
  native: boolean
}

export interface Interest {
  label: string
  icon: IconComponent
}

export interface NavItem {
  id: string
  label: string
}