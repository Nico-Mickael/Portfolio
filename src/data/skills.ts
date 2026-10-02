import {
  Blocks,
  Boxes,
  Cloud,
  Database,
  GitBranch,
  Network,
  ServerCog,
  ShieldCheck,
  Wrench,
} from 'lucide-react'

import type { Language, SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'systemes',
    title: 'Administration système',
    icon: ServerCog,
    description: 'Exploitation et administration des serveurs et systèmes d’entreprise.',
    items: [
      { name: 'Linux (Debian, Ubuntu)' },
      { name: 'Windows Server' },
      { name: 'Active Directory' },
      { name: 'GPO' },
      { name: 'NAS' },
    ],
  },
  {
    id: 'reseaux',
    title: 'Réseaux',
    icon: Network,
    description: 'Conception, adressage et sécurisation des infrastructures réseau.',
    items: [
      { name: 'TCP/IP' },
      { name: 'DNS' },
      { name: 'DHCP' },
      { name: 'VLAN' },
      { name: 'NAT' },
      { name: 'VPN' },
      { name: 'OSPF' },
    ],
  },
  {
    id: 'securite',
    title: 'Cybersécurité',
    icon: ShieldCheck,
    description: 'Pare-feu, IDS/IPS, durcissement et mise en place de dispositifs de détection et d’alerte.',
    items: [
      { name: 'OPNsense' },
      { name: 'pfSense' },
      { name: 'Kerio Control' },
      { name: 'FortiGate' },
      { name: 'MikroTik' },
      { name: 'Snort' },
      { name: 'Suricata' },
      { name: 'SSL/TLS' },
      { name: 'Hardening' },
      { name: 'Check Point' },
    ],
  },
  {
    id: 'infra',
    title: 'Virtualisation & conteneurisation',
    icon: Boxes,
    description: 'Isolation des environnements et déploiement reproductible.',
    items: [{ name: 'ESXi' }, { name: 'Proxmox' }, { name: 'Docker' }],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    icon: Cloud,
    description: 'Services cloud et environnement de travail collaboratif.',
    items: [{ name: 'Microsoft 365' }, { name: 'Azure' }],
  },
  {
    id: 'monitoring',
    title: 'Monitoring & logs',
    icon: Wrench,
    description: 'Supervision des systèmes et centralisation des journaux.',
    items: [{ name: 'Prometheus' }, { name: 'Grafana' }, { name: 'Wazuh' }],
  },
  {
    id: 'devops',
    title: 'DevOps',
    icon: GitBranch,
    description: 'Versionnement, automatisation et intégration continue.',
    items: [{ name: 'Git' }, { name: 'GitHub' }, { name: 'Bash' }, { name: 'GitHub Actions' }],
  },
  {
    id: 'dev',
    title: 'Développement',
    icon: Blocks,
    description: 'Applications web full-stack et bases de données.',
    items: [
      { name: 'Laravel' },
      { name: 'React.js' },
      { name: 'Express.js' },
      { name: 'Sequelize' },
    ],
  },
  {
    id: 'bd',
    title: 'Bases de données',
    icon: Database,
    description: 'Modélisation et administration de bases relationnelles.',
    items: [{ name: 'MySQL' }, { name: 'PostgreSQL' }],
  },
  {
    id: 'outils',
    title: 'Outils métier',
    icon: Wrench,
    description: 'Gestion de services, tickets et suivi de projet.',
    items: [{ name: 'GLPI' }, { name: 'Jira' }],
  },
]

export const languages: Language[] = [
  { name: 'Malagasy', level: 'Langue maternelle', native: true },
  { name: 'Français', level: 'Assez bien', native: false },
  { name: 'Anglais', level: 'Technique', native: false },
]

export const pillars = [
  {
    id: 'infra',
    title: 'Infrastructure',
    description:
      "Administration des systèmes, des réseaux et des environnements virtuels, du poste de travail au datacenter.",
  },
  {
    id: 'secu',
    title: 'Sécurité',
    description:
      'Pare-feu, IDS/IPS, durcissement et mise en place de dispositifs de détection et d’alerte.',
  },
  {
    id: 'devops',
    title: 'DevOps',
    description:
      'Conteneurisation, orchestration des déploiements et automatisation des pipelines avec Git et GitHub Actions.',
  },
  {
    id: 'dev',
    title: 'Développement',
    description:
      'Applications web full-stack en React et Express / Laravel, conception d’API et de bases de données.',
  },
]