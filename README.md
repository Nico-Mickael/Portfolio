# Portfolio — Nico Mickael Andriamisata

Portfolio professionnel et CV imprimable.

**Stack :** React 19 · TypeScript · Vite 8 · Tailwind CSS 4 · React Router 7 · lucide-react

---

## Démarrage

```bash
npm install
npm run dev        # http://localhost:5173
```

| Commande          | Rôle                                                  |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Serveur de développement avec HMR                    |
| `npm run build`   | Vérification des types + build de production           |
| `npm run preview` | Sert le build de production localement                |
| `npm run lint`    | Lint (oxlint)                                         |

---

## Modifier le contenu

Tout le contenu éditorial est séparé du code UI. **Vous n’avez jamais besoin de toucher aux composants pour mettre à jour le portfolio.**

| Fichier                        | Contenu                                                 |
| ------------------------------ | ------------------------------------------------------- |
| `src/data/profile.ts`          | Nom, titre, résumé, coordonnées, liens, menu de navigation |
| `src/data/skills.ts`           | Groupes de compétences, langues, piliers                |
| `src/data/experience.ts`       | Expériences professionnelles et missions                |
| `src/data/projects.ts`         | Projets : stack, fonctionnalités, chiffres clés         |
| `src/data/education.ts`        | Formation et centres d’intérêt                          |

Les types correspondants sont dans `src/types/index.ts`.

### Ajouter un projet

```ts
// src/data/projects.ts
{
  id: 'mon-projet',
  name: 'Nom du projet',
  subtitle: 'Sous-titre court',
  description: 'Ce que fait l\'application.',
  context: 'Pourquoi elle a été construite.',
  icon: Wrench,                       // icône lucide-react
  period: '2026',
  status: 'Projet livré',
  role: 'Développeur full-stack',
  stack: ['React', 'Node.js'],
  features: ['Fonctionnalité 1', 'Fonctionnalité 2'],
  highlights: [{ label: 'Modèles', value: '21' }],
  architecture: ['Frontend', 'Backend', 'Base de données'],
  repo: 'https://github.com/…',       // optionnel
}
```

### Icônes

`lucide-react` v1 a supprimé les icônes de marque (GitHub, GitHub est fourni par
`src/components/icons/GithubMark.tsx`). Les autres icônes viennent de `lucide-react` :

```ts
import { ServerCog, ShieldCheck, Network } from 'lucide-react'
```

---

## Thème et Dark Mode

Le thème est piloté par des variables CSS définies dans `src/styles/index.css` :

- `:root` → thème clair
- `.dark` → thème sombre (bascule sur `<html>`)

La palette de marque (bleu) est déclarée dans le bloc `@theme` de Tailwind :

```css
--color-brand-50 … --color-brand-950
--color-accent-400 … --color-accent-600
```

Le mode est persisté dans `localStorage` (`portfolio-theme`) et appliqué **avant le
premier rendu** par le script inline de `index.html`, ce qui évite le flash blanc.

Classes utilitaires disponibles :

| Classe            | Effet                                                    |
| ----------------- | -------------------------------------------------------- |
| `surface-card`    | Fond blanc (sombre en dark) + bordure                      |
| `text-strong`     | Texte principal                                           |
| `text-muted`      | Texte secondaire                                          |
| `reveal`          | Animation d’apparition au scroll (opacité + translation)  |

---

## CV imprimable

La page `/cv` est une version A4 du CV, stylée pour l’impression.

- **Aperçu :** http://localhost:5173/cv
- **Générer le PDF :** bouton *Imprimer / Enregistrer en PDF*, puis choisir
  *Enregistrer au format PDF* comme destination. Format A4, marges 12 mm.

Les règles `@page` et `.no-print` sont dans `src/styles/index.css`.

> Le bouton **Télécharger mon CV** de la navbar navigue vers `/cv` et déclenche
> `window.print()`. Aucun fichier PDF n’est stocké dans le dépôt : le PDF est
> produit à la demande par le navigateur, donc toujours à jour.

---

## Formulaire de contact

Par défaut, le formulaire compose un message et l’ouvre dans le logiciel de
messagerie du visiteur via `mailto:` — aucun serveur requis.

Pour poster vers un service (Formspree, Web3Forms, votre API…), copiez
`.env.example` en `.env` et renseignez :

```
VITE_CONTACT_FORM_ENDPOINT=https://votre-service/endpoint
```

---

## Déploiement

Site statique : il fonctionne sur Netlify, Vercel, Cloudflare Pages, GitHub Pages
ou tout hébergement de fichiers.

```bash
npm run build     # génère dist/
```

**Netlify / Vercel / Cloudflare Pages** — commande de build `npm run build`,
dossier de publication `dist`. Aucune configuration supplémentaire.

**GitHub Pages** —/workflow :

```yaml
name: Deploy
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
```

Ajoutez `.nojekyll` dans `public/` si GitHub Pages ignore les fichiers `_`.

> **Routage :** le site utilise `BrowserRouter`. Sur un hébergeur statique, les
> URLs directes comme `/cv` doivent être réécrites vers `index.html`
> (règle *rewrite all → /index.html*). Pour un déploiement sous un sous-domaine
> (ex. `username.github.io/portfolio`), définissez le `base` de Vite dans
> `vite.config.ts` :
>
> ```ts
> export default defineConfig({
>   base: '/portfolio/',
>   plugins: [react(), tailwindcss()],
> })
> ```