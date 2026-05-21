# Copilot Instructions for MatWeb-Innovation-Website

## Vue d'ensemble

Ce projet est une application Next.js utilisant TypeScript et Tailwind CSS, structurée autour du dossier `app/` pour les pages et du dossier `components/` pour les composants réutilisables. Les sections principales du site sont dans `components/sections/`. Les styles globaux sont dans `app/globals.css`.

## Architecture et conventions

-   **Pages** : Utilisez le dossier `app/` pour les pages, avec des sous-dossiers pour les routes personnalisées (ex : `mentions-legales/`).
-   **Composants** : Placez les composants réutilisables dans `components/`. Les icônes sont dans `components/icons/`, les éléments UI dans `components/ui/`.
-   **Données** : Les constantes et types sont dans `data/Constants.tsx`, `data/TypesComponents.tsx`, et `data/TypesDatas.tsx`.
-   **Hooks** : Les hooks personnalisés sont dans `hooks/`.
-   **Utilitaires** : Les fonctions utilitaires sont dans `utils/`.

## Workflows critiques

-   **Développement local** :
    ```bash
    npm run dev
    # ou yarn dev, pnpm dev, bun dev
    ```
    Le serveur démarre sur [http://localhost:3000](http://localhost:3000).
-   **Déploiement** : Utilisez Vercel pour le déploiement (voir README).
-   **Styles** : Tailwind CSS est configuré via `tailwind.config.ts` et `postcss.config.mjs`.
-   **Configuration Next.js** : Les options avancées sont dans `next.config.mjs`.

## Patterns spécifiques

-   **Sectionnement** : Les pages sont construites à partir de sections importées depuis `components/sections/`.
-   **Animation et UI** : Les composants d'animation et d'effets visuels sont dans `components/ui/` (ex : `AppleCardsCarousel`, `BoxReveal`, `Particle`).
-   **Consentement cookies** : Le composant `CookieConsent` gère l'affichage du consentement.
-   **Google Analytics** : Intégré via `components/GoogleAnalytics.js`.
-   **SEO** : Utilisez `components/JSONLD.tsx` et `app/richSnippet.tsx` pour les balises structurées.

## Bonnes pratiques

-   Respectez la structure des dossiers pour la clarté et la réutilisabilité.
-   Préférez les composants existants dans `components/ui/` pour les effets visuels.
-   Centralisez les types et constantes dans `data/`.
-   Utilisez les hooks personnalisés pour la logique réutilisable.

## Exemples

-   Pour ajouter une nouvelle section à la page d'accueil, créez un composant dans `components/sections/` et importez-le dans `app/page.tsx`.
-   Pour ajouter une icône, placez le fichier dans `components/icons/` et importez-le là où nécessaire.

---

Pour toute ambiguïté ou besoin d'exemple, consultez les fichiers existants dans les dossiers mentionnés ou demandez des précisions.
