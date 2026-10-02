import { Settings2, Truck, Wrench } from 'lucide-react'

import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'gmao',
    name: 'GMAO Industrielle',
    subtitle: 'Gestion de Maintenance Assistée par Ordinateur',
    description:
      'Application web multi-site pour centraliser le patrimoine technique, les demandes d’intervention, les ordres de travail, la maintenance préventive et corrective, les stocks, les coûts et les KPI.',
    context:
      'Conçu pour un site industriel avec plusieurs ateliers : la maintenance était suivie sur des fichiers dispersés, sans historique traçable ni indicateurs. L’application centralise la demande, la planification, l’exécution et l’analyse.',
    icon: Wrench,
    period: '2026',
    status: 'Projet complet — 3 phases livrées',
    role: 'Développeur full-stack & administrateur infrastructure',
    stack: [
      'React 18',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL 16',
      'JWT',
      'Docker Compose',
      'Nginx',
    ],
    features: [
      'Authentification JWT et RBAC appliqués côté API et côté menus, sur 5 rôles (administrateur, responsable maintenance, technicien, opérateur, production).',
      'Arborescence du patrimoine : site → bâtiment → atelier → ligne → équipement, avec fiche équipement, documents et QR code.',
      'Workflow des demandes d’intervention : nouvelle → analyse → acceptée/refusée → planifiée.',
      'Workflow des ordres de travail : créé → planifié → en cours → terminé → clôturé.',
      'Gestion de stock : entrées, sorties, réservations, transferts, inventaire et alerte de seuil minimum.',
      'Maintenance préventive par calendrier, compteur ou condition, avec génération automatique des ordres de travail.',
      'Gammes de maintenance : check-lists avec résultats conforme / non conforme / non applicable.',
      'Planning jour / semaine / mois et charge des techniciens.',
      'Analyse des pannes par la méthode des 5 Pourquoi, temps d’arrêt et coût.',
      'KPI : MTTR, disponibilité, taux de préventif, coûts main-d’œuvre et pièces, tendance sur 6 mois.',
      'Fournisseurs et contrats avec alerte d’échéance, journal d’audit des actions sensibles.',
      'Convention de réponse API uniforme : pagination, filtres et erreurs structurées.',
    ],
    highlights: [
      { label: 'Modèles de données', value: '21' },
      { label: 'Contrôleurs API', value: '16' },
      { label: 'Rôles gérés', value: '5' },
      { label: 'Conteneurs', value: '4' },
    ],
    architecture: [
      'React 18 + Vite + Tailwind CSS',
      'API REST Node.js / Express',
      'ORM Prisma · PostgreSQL 16',
      'Nginx reverse proxy HTTPS',
      'Docker Compose',
    ],
  },
  {
    id: 'logistique',
    name: 'Gestion Logistique & Convoiage',
    subtitle: 'Optimisation des sorties de véhicules',
    description:
      'Application web de gestion des demandes de transport, de planification des sorties et de suivi de flotte, avec regroupement automatique des demandes compatibles et tableau de bord temps réel.',
    context:
      'Les demandes de transport étaient traitées manuellement, sans vision consolidée de la flotte. L’application automatise la validation des demandes, le regroupement par destination et le suivi kilométrique.',
    icon: Truck,
    period: '2026',
    status: 'Projet livré',
    role: 'Développeur full-stack',
    stack: [
      'React 19',
      'Vite',
      'Mantine 9',
      'Node.js',
      'Express 5',
      'Sequelize',
      'PostgreSQL',
      'Socket.io',
      'JWT',
      'Docker Compose',
    ],
    features: [
      'Authentification JWT et contrôle d’accès par rôle (employé, chef logistique, administrateur).',
      'Demandes de sortie : création, suivi du statut, validation, refus ou proposition de replanification.',
      'Regroupement automatique des demandes compatibles : même destination, écart horaire de 30 minutes maximum, capacité du véhicule non dépassée.',
      'Gestion de la flotte : disponibilité, déclaration en maintenance.',
      'Suivi kilométrique départ / arrivée avec calcul de la distance et clôture de la sortie.',
      'Notifications temps réel via Socket.io, par utilisateur.',
      'Tableau de bord administrateur : sorties par période, kilomètres par véhicule, taux de disponibilité de la flotte.',
      'Containerisation complète avec Docker Compose (PostgreSQL, backend, frontend).',
    ],
    highlights: [
      { label: 'Commits', value: '26' },
      { label: 'Pages', value: '14' },
      { label: 'Rôles', value: '3' },
      { label: 'Services', value: '3' },
    ],
    architecture: [
      'React 19 + Vite + Mantine',
      'API REST Express 5 + Socket.io',
      'ORM Sequelize · PostgreSQL',
      'Docker Compose',
      'Git / GitHub',
    ],
    repo: 'https://github.com/Nico-Mickael/logistique-app',
    repoLabel: 'Voir le dépôt sur GitHub',
  },
  {
    id: 'glpi',
    name: 'Personnalisation de GLPI',
    subtitle: 'Adaptation d’une solution open source de gestion d’IT',
    description:
      'Personnalisation de GLPI, solution open source de gestion de parc informatique et de tickets (PHP / MySQL), en modifiant son code source pour l’adapter aux besoins du service informatique.',
    // TODO(mickael) : préciser le contexte réel du besoin (qu’est-ce qui
    // manquait dans la version standard de GLPI et pourquoi la personnalisation
    // était nécessaire). Ne rien inventer ici.
    context: undefined,
    icon: Settings2,
    period: '2026',
    // TODO(mickael) : préciser le périmètre réel livré.
    status: 'Personnalisation en PHP du code source',
    role: 'Développeur PHP — modification du code source de GLPI',
    stack: ['GLPI', 'PHP', 'MySQL'],
    // TODO(mickael) : lister les personnalisations réellement développées
    // (ex. formulaire ou workflow modifié, champs personnalisés, tableau de
    // bord, rights, rapport…). Renseigner uniquement ce qui a été fait.
    features: [],
    // TODO(mickael) : ajouter des chiffres réels si disponibles
    // (ex. { label: 'Fichiers modifiés', value: '12' }). Sinon laisser vide.
    highlights: [],
    architecture: ['GLPI (fork applicatif)', 'PHP', 'MySQL'],
    // TODO(mickael) : ajouter repo si le code est publié publiquement.
    repo: undefined,
  },
]