import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    id: 'ades',
    company: 'ADES — SOLAIRE',
    role: 'Support IT',
    contract: 'Stage',
    location: 'Madagascar',
    period: '03/2026 — 08/2026',
    startDate: '06/03/2026',
    endDate: '31/08/2026',
    missions: [
      'Assistance aux utilisateurs, dépannage des équipements informatiques et maintenance des systèmes.',
      'Personnalisation de GLPI pour le suivi des demandes et du parc informatique.',
      'Création d’une application web de gestion logistique et de convoiage.',
      'Déploiement de l’application dans un environnement conteneurisé.',
    ],
    stack: ['GLPI', 'Docker', 'React', 'Express', 'PostgreSQL', 'Windows', 'Linux'],
    reference: {
      label: 'Responsable des Systèmes d’Information — ADES',
      name: 'NOMENJANAHARY Ravalison Alain',
      phone: '+261 34 12 172 71',
    },
  },
  {
    id: 'terra-linea',
    company: 'TERRA Linea',
    role: 'Mise en place d’un outil SIEM',
    contract: 'Stage',
    location: 'Madagascar',
    period: '06/2025 — 11/2025',
    startDate: '06/06/2025',
    endDate: '30/11/2025',
    missions: [
      'Mise en place d’un outil SIEM pour centraliser et analyser les événements de sécurité.',
      'Amélioration de la détection des incidents et automatisation de l’alerting.',
      'Notifications par e-mail et blocage automatique d’adresse IP.',
    ],
    stack: ['SIEM', 'Suricata', 'Snort', 'SSL/TLS', 'Linux'],
  },
  {
    id: 'ceres',
    company: 'CERES',
    role: 'Support IT',
    contract: 'Stage',
    period: '07/2022 — 10/2022',
    startDate: '09/07/2022',
    endDate: '31/10/2022',
    missions: [
      'Support informatique aux utilisateurs de l’organisation.',
      'Création d’une application web de gestion des congés (Laravel / MySQL).',
    ],
  },
  {
    id: 'mndpt',
    company: 'MNDPT',
    role: 'Support IT',
    contract: 'Stage',
    period: '08/2021 — 11/2021',
    startDate: '06/08/2021',
    endDate: '22/11/2021',
    missions: [
      'Support informatique aux utilisateurs de l’administration.',
      'Création d’une application web de gestion des congés (Laravel / MySQL).',
    ],
  },
]