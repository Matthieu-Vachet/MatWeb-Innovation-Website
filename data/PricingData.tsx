import { FaCss3Alt, FaReact, FaHtml5, FaSass, FaRegSave } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssLine, RiNextjsLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { SiTestinglibrary } from "react-icons/si";

export interface Tier {
    name: string;
    id: string;
    category: string;
    details: string;
    paiement?: string;
    priceMonthly: string;
    description: string;
    features: string[];
    icones: JSX.Element[];
    bestSeller?: boolean;
    maintenance?: boolean;
    fixedPrice?: boolean;
    button?: boolean;
}

export const tiers: Tier[] = [
    {
        name: "Starter Pack",
        id: "Tier-1-Intégration",
        category: "Intégration",
        details: "L'essentiel pour votre présence en ligne",
        priceMonthly: "150€",
        description: "Site web, portfolio, landing page, CV",
        features: [
            "Technologies au choix : HTML, CSS, Sass, JavaScript, React, Next.js",
            "Choix et adaptation du site à votre charte graphique et maquette",
            "Site comprenant 1 page",
            "Site responsive (mobile, tablette, ordinateur)",
            "Intégration et mise en page de vos données (textes, images, vidéos)",
            "Optimisation du référencement (SEO), performance globale et accessibilité",
            "Formation à la modification des données",
            "Aide à l’hébergement de votre site",
            "Révisions de mises à jour ou de maintenance (sous contrat)",
        ],
        icones: [
            <FaHtml5 key="IconesHtml-tier1-Intégration" aria-label="Icones Html" />,
            <FaCss3Alt key="IconesCss-tier1-Intégration" aria-label="Icones Css" />,
            <FaSass key="IconesSass-tier1-Intégration" aria-label="Icones Sass" />,
            <DiJavascript
                key="IconesJavascript-tier1-Intégration"
                aria-label="Icones Javascript"
            />,
            <FaReact key="IconesReact-tier1-Intégration" aria-label="Icones React" />,
            <RiNextjsLine key="IconesNextjs-tier1-Intégration" aria-label="Icones Nextjs" />,
        ],
        fixedPrice: true,
    },
    {
        name: "Site Complet",
        id: "Tier-2-Intégration",
        category: "Intégration",
        details: "Un site complet pour vos besoins",
        paiement: "Paiement en plusieurs fois possible",
        priceMonthly: "300€",
        description: "Site web, portfolio, landing page, CV",
        features: [
            "Technologies au choix : HTML, CSS, Sass, JavaScript, React, Next.js",
            "Choix et adaptation du site à votre charte graphique et maquette",
            "Site comprenant jusqu’à 5 pages",
            "Site responsive (mobile, tablette, ordinateur)",
            "Intégration et mise en page de vos données (textes, images, vidéos)",
            "Optimisation du référencement (SEO), performance globale et accessibilité",
            "Formation à la modification des données",
            "Aide à l’hébergement de votre site",
            "Révisions de mises à jour ou de maintenance (sous contrat)",
        ],
        icones: [
            <FaHtml5 key="IconesHtml-tier2-Intégration" aria-label="Icones Html" />,
            <FaCss3Alt key="IconesCss-tier2-Intégration" aria-label="Icones Css" />,
            <FaSass key="IconesSass-tier2-Intégration" aria-label="Icones Sass" />,
            <DiJavascript
                key="IconesJavascript-tier2-Intégration"
                aria-label="Icones Javascript"
            />,
            <FaReact key="IconesReact-tier2-Intégration" aria-label="Icones React" />,
            <RiNextjsLine key="IconesNextjs-tier2-Intégration" aria-label="Icones Nextjs" />,
        ],
        bestSeller: true,
        fixedPrice: true,
    },
    {
        name: "Avancé",
        id: "Tier-3-Intégration",
        category: "Intégration",
        details: "Une solution complète pour les grandes ambitions",
        paiement: "Paiement en plusieurs fois possible",
        priceMonthly: "600€",
        description: "Site web, portfolio, landing page, CV",
        features: [
            "Technologies au choix : HTML, CSS, Sass, JavaScript, React, Next.js",
            "Choix et adaptation du site à votre charte graphique et maquette",
            "Site comprenant jusqu’à 10 pages",
            "Site responsive (mobile, tablette, ordinateur)",
            "Intégration et mise en page de vos données (textes, images, vidéos)",
            "Optimisation du référencement (SEO), performance globale et accessibilité",
            "Formation à la modification des données",
            "Aide à l’hébergement de votre site",
            "Révisions de mises à jour ou de maintenance (sous contrat)",
        ],
        icones: [
            <FaHtml5 key="IconesHtml-tier3-Intégration" aria-label="Icones Html" />,
            <FaCss3Alt key="IconesCss-tier3-Intégration" aria-label="Icones Css" />,
            <FaSass key="IconesSass-tier3-Intégration" aria-label="Icones Sass" />,
            <DiJavascript
                key="IconesJavascript-tier3-Intégration"
                aria-label="Icones Javascript"
            />,
            <FaReact key="IconesReact-tier3-Intégration" aria-label="Icones React" />,
        ],
        button: true,
    },
    {
        name: "Essentiel",
        id: "Tier-1-Développement",
        category: "Développement",
        details: "La base pour apparaître sur le net",
        priceMonthly: "700€",
        paiement: "Paiement en plusieurs fois possible",
        description: "Site web, portfolio, landing page, CV",
        features: [
            "Technologies au choix : HTML, CSS, Sass, JavaScript, React, Next.js",
            "Site web fonctionnel",
            "Création de la charte graphique et design personnalisé",
            "Site comprenant de 1 à 3 pages",
            "Site responsive (mobile, tablette, ordinateur)",
            "Formulaire de contact",
            "Liens de partage sur les réseaux sociaux",
            "Optimisation des performances globales",
            "Hébergement et nom de domaine",
            "Fiche sur Google",
            "Emails professionnels",
            "1 révision, mise à jour ou maintenance",
        ],
        icones: [
            <FaHtml5 key="IconesHtml-tier1-Développement" aria-label="Icones Html" />,
            <FaCss3Alt key="IconesCss-tier1-Développement" aria-label="Icones Css" />,
            <FaSass key="IconesSass-tier1-Développement" aria-label="Icones Sass" />,
            <DiJavascript
                key="IconesJavascript-tier1-Développement"
                aria-label="Icones Javascript"
            />,
            <FaReact key="IconesReact-tier1-Développement" aria-label="Icones React" />,
            <RiNextjsLine key="IconesNextjs-tier1-Développement" aria-label="Icones Nextjs" />,
        ],
        fixedPrice: true,
        bestSeller: true,
    },
    {
        name: "Standard",
        id: "Tier-2-Développement",
        category: "Développement",
        details: "Toutes les pages nécessaires pour vous démarquer",
        priceMonthly: "1200€",
        paiement: "Paiement en plusieurs fois possible",
        description: "Site web, portfolio, landing page, CV",
        features: [
            "Technologies au choix : HTML, CSS, Sass, JavaScript, React, Next.js",
            "Site web fonctionnel",
            "Création de la charte graphique et design personnalisé",
            "Pas de limite de pages",
            "Site responsive (mobile, tablette, ordinateur)",
            "Formulaire de contact",
            "Liens de partage sur les réseaux sociaux",
            "Optimisation du référencement (SEO), des performances globales et de l’accessibilité",
            "Hébergement et nom de domaine",
            "Fiche sur Google",
            "Emails professionnels",
            "Formation à la modification des données",
            "5 révisions, mises à jour ou maintenances",
        ],
        icones: [
            <FaHtml5 key="IconesHtml-tier2-Développement" aria-label="Icones Html" />,
            <FaCss3Alt key="IconesCss-tier2-Développement" aria-label="Icones Css" />,
            <FaSass key="IconesSass-tier2-Développement" aria-label="Icones Sass" />,
            <DiJavascript
                key="IconesJavascript-tier2-Développement"
                aria-label="Icones Javascript"
            />,
            <FaReact key="IconesReact-tier2-Développement" aria-label="Icones React" />,
            <RiNextjsLine key="IconesNextjs-tier2-Développement" aria-label="Icones Nextjs" />,
        ],
        button: true,
    },
    {
        name: "Maintenance",
        id: "Tier-3-Maintenance",
        category: "Développement",
        details: "Dépannage, maintenance, mise à jour",
        priceMonthly: "50€/h",
        description: "",
        features: [
            "Mises à jour des dépendances et des bibliothèques",
            "Analyse et optimisation des performances",
            "Sauvegardes régulières du code source",
            "Assistance pour les bugs et les problèmes",
            "Support en cas de panne",
            "Révisions et ajustements de contenu",
            "Optimisation SEO et accessibilité",
        ],
        icones: [
            <IoSettingsOutline
                key="IoSettingsOutline-tier3-Maintenance"
                aria-label="Icones de maintenance"
            />,
            <FaRegSave key="FaRegSave-tier3-Maintenance" aria-label="Icones de sauvegarde" />,
            <SiTestinglibrary
                key="SiTestinglibrary-tier3-Maintenance"
                aria-label="Icones React testing library"
            />,
        ],
        maintenance: true,
    },
];
