import { Dumbbell, Library, Music } from 'lucide-react'

import type { Education, Interest } from '../types'

export const education: Education[] = [
  {
    id: 'eni',
    school: 'École Nationale de l’Informatique',
    degree: 'Ingénieur informaticien',
    period: '2021 — 2026',
    location: 'Madagascar',
    description:
      'Cycle d’ingénierie en informatique : systèmes et réseaux, cybersécurité, bases de données, développement web et gestion de projets SI.',
  },
]

export const interests: Interest[] = [
  { label: 'Lecture', icon: Library },
  { label: 'Basketball', icon: Dumbbell },
  { label: 'Musique', icon: Music },
]