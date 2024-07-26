import { FaCss3Alt, FaReact, FaHtml5, FaSass } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";

export interface Tier {
    name: string;
    id: string;
    details: string;
    priceMonthly: string;
    description: string;
    features: string[];
    icones: JSX.Element[];
}

export const tiers: Tier[] = [
    {
        name: "Intégration",
        id: "tier-1",
        details: "(Maquette à fournir)",
        priceMonthly: "100€",
        description:
            "Site Web, Portfolio, Landing page, simple d'une page comportant jusqu'a 4 sections.",
        features: [
            "Technologies utilisées : HTML, CSS, Sass, JavaScript, React",
            "Site web fonctionnel",
            "Charte graphique à partir de la maquette fournie",
            "1 page",
            "4 sections",
            "Site responsive (adapté tous supports)",
            "Mise en place du contenu (texte, images, vidéos)",
            "Formulaire de contact",
            "Liens de partage sur les réseaux sociaux",
            "Optimisation du référencement naturel (SEO)",
            "1 révision de mise a jour ou de maintenance",
        ],
        icones: [
            <FaHtml5 key="IconesHtml-tier1" aria-label="Icones Html" />,
            <FaCss3Alt key="IconesCss-tier1" aria-label="Icones Css" />,
            <FaSass key="IconesSass-tier1" aria-label="Icones Sass" />,
            <DiJavascript key="IconesJavascript-tier1" aria-label="Icones Javascript" />,
            <FaReact key="IconesReact-tier1" aria-label="Icones React" />,
        ],
    },
    {
        name: "Intégration",
        id: "tier-2",
        details: "(Maquette à fournir)",
        priceMonthly: "250€",
        description: "Site Web, Portfolio, Landing page, de 2 pages comportant jusqu'a 5 sections.",
        features: [
            "Technologies utilisées : Tailwind CSS, React, Next.js",
            "Site web fonctionnel",
            "Charte graphique à partir de la maquette fournie",
            "2 page",
            "5 sections",
            "Site responsive (adapté tous supports)",
            "Mise en place du contenu (texte, images, vidéos)",
            "Formulaire de contact",
            "Liens de partage sur les réseaux sociaux",
            "Optimisation du référencement naturel (SEO)",
            "Optimisation des performances",
            "Optimisation de l'accessibilité",
            "Statistiques de visites",
            "2 révisions de mises à jours ou de maintenances",
        ],
        icones: [
            <RiTailwindCssLine key="IconesTailwind-tier2" aria-label="Icones Tailwind CSs" />,
            <FaReact key="IconesReact-tier2" aria-label="Icones React" />,
            <RiNextjsLine key="IconesNextjs-tier2" aria-label="Icones Next.js" />,
        ],
    },
    {
        name: "Développement",
        id: "tier-3",
        details: "(Avec ou sans maquette)",
        priceMonthly: "1200€",
        description: "Site Web, Portfolio, Landing page, sans limite de pages et de sections.",
        features: [
            "Technologies utilisées : Au choix du client",
            "Site web fonctionnel",
            "Charte graphique au choix",
            "Pas de limite de pages",
            "Pas de limite de sections",
            "Site responsive (adapté tous supports)",
            "Mise en place du contenu (texte, images, vidéos)",
            "Formulaire de contact",
            "Liens de partage sur les réseaux sociaux",
            "Optimisation du référencement naturel (SEO)",
            "Optimisation des performances",
            "Optimisation de l'accessibilité",
            "Statistiques de visites",
            "4 révisions de mises à jours ou de maintenances",
            "Domaine + hébergement + e-mail pendant 1 an",
            "Mise en ligne du site",
        ],
        icones: [
            <FaHtml5 key="IconesHtml-tier3" aria-label="Icones Html" />,
            <FaCss3Alt key="IconeCss-tier3" aria-label="Icones Css" />,
            <RiTailwindCssLine key="IconesTailwind-tier3" aria-label="Icones Tailwind CSs" />,
            <DiJavascript key="IconesJavascript-tier3" aria-label="Icones Javascript" />,
            <FaReact key="IconesReact-tier3" aria-label="Icones React" />,
            <RiNextjsLine key="IconesNextjs-tier3" aria-label="Icones Next.js" />,
        ],
    },
];
