import { Mail, MapPin, Phone } from 'lucide-react'

import { GithubMark } from '../components/icons/GithubMark'

import type { NavItem, Profile } from '../types'

export const profile: Profile = {
  name: 'NICO MICKAEL ANDRIAMISATA',
  role: 'Responsable des Systèmes d’Information',
  headline: 'Responsable des Systèmes d’Information',
  summary:
    "Ingénieur sortant de l’École Nationale de l’Informatique, passionné par les infrastructures IT, les systèmes, les réseaux, la cybersécurité, le DevOps et le développement web.",
  location: 'Antananarivo, Madagascar',
  email: 'andriamisatanicomickael@gmail.com',
  phone: '+261 38 39 959 18',
  availability: 'Ouvert aux opportunités professionnelles',
  github: 'https://github.com/Nico-Mickael',
  socials: [
    { label: 'Email', href: 'mailto:andriamisatanicomickael@gmail.com', icon: Mail },
    { label: 'Téléphone', href: 'tel:+261383995918', icon: Phone },
    { label: 'GitHub', href: 'https://github.com/Nico-Mickael', icon: GithubMark },
    { label: 'Antananarivo, Madagascar', href: '', icon: MapPin },
  ],
}

export const navItems: NavItem[] = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'a-propos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'experiences', label: 'Expériences' },
  { id: 'projets', label: 'Projets' },
  { id: 'formation', label: 'Formation' },
  { id: 'contact', label: 'Contact' },
]