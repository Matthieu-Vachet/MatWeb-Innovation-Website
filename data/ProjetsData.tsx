export interface Projet {
    id: number;
    title: string;
    alt: string;
    cat: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
}

export const projets: Projet[] = [
    {
        id: 1,
        title: "Portfolio",
        alt: "Image du projet Portfolio",
        cat: "Portfolio",
        des: "Portfolio personnel développé avec React, Vite.js et Framer Motion, offrant une expérience immersive et dynamique. Intégration web et animation mises en valeur.",
        img: "/images-projets/projet-1-portfolio.svg",
        iconLists: [
            "/logo/logo-Sass.svg",
            "/logo/logo-React.svg",
            "/logo/logo-ViteJs.svg",
            "/logo/logo-MongoDb.svg",
            "/logo/logo-ExpressJs.svg",
            "/logo/logo-NodeJS.svg",
            "/logo/logo-FramerMotion.svg",
        ],
        link: "https://matthieu-vachet-portfolio.vercel.app",
    },
    {
        id: 2,
        title: "Projet 724Events",
        alt: "Image du projet 724Events",
        cat: "Débuguage",
        des: "Analyser et résoudre les problèmes d'un site d'agence événementielle, finaliser le code et compléter le cahier de recettes avec des tests.",
        img: "/images-projets/projet-2-724events.svg",
        iconLists: [
            "/logo/logo-Css.svg",
            "/logo/logo-Html.svg",
            "/logo/logo-Javascript.svg",
            "/logo/logo-Sass.svg",
            "/logo/logo-React.svg",
            "/logo/logo-Jest.svg",
            "/logo/logo-TestingLibrary.svg",
        ],
        link: "https://projet-10-openclassrooms-debuggez-une-application-react.vercel.app",
    },
    {
        id: 3,
        title: "Projet Nina",
        alt: "Image du projet Nina",
        cat: "Optimisation, SEO",
        des: "Optimiser complètement le site web en termes de performances, SEO, référencement local, métadonnées pour les réseaux sociaux et accessibilité, avec un rapport.",
        img: "/images-projets/projet-3-nina.svg",
        iconLists: ["/logo/logo-Css.svg", "/logo/logo-Html.svg", "/logo/logo-Javascript.svg"],
        link: "https://matthieu-vachet.github.io/Projet-9-Openclassrooms-Projet-Optimisation-Nina-Carducci",
    },
    {
        id: 4,
        title: "Projet Kasa",
        alt: "Image du projet Kasa",
        cat: "Site Web",
        des: "Application React complète pour Kasa, permettant la location d'appartements entre particuliers.",
        img: "/images-projets/projet-4-kasa.svg",
        iconLists: [
            "/logo/logo-Css.svg",
            "/logo/logo-Html.svg",
            "/logo/logo-Sass.svg",
            "/logo/logo-Javascript.svg",
            "/logo/logo-React.svg",
            "/logo/logo-ViteJs.svg",
        ],
        link: "https://projet-8-openclassrooms-projet-kasa.vercel.app",
    },
    {
        id: 5,
        title: "Projet Sophie Bluel",
        alt: "Image du projet Sophie Bluel",
        cat: "Portfolio",
        des: "Créer une page web dynamique avec JavaScript, présentant les travaux d'un architecte, une page de connexion pour l'administrateur du site, et une modale pour télécharger de nouveaux médias.",
        img: "/images-projets/projet-5-sophie-bluel.svg",
        iconLists: [
            "/logo/logo-Css.svg",
            "/logo/logo-Html.svg",
            "/logo/logo-Sass.svg",
            "/logo/logo-Javascript.svg",
        ],
        link: "https://github.com/Matthieu-Vachet/Projet-6-openclassrooms-Portfolio-Javascript",
    },
    {
        id: 6,
        title: "Projet Booki",
        alt: "Image du projet Booki",
        cat: "Site Web",
        des: "Développer un site Internet pour la société Booki, permettant aux utilisateurs de trouver des hébergements et des activités dans la ville de leur choix.",
        img: "/images-projets/projet-6-booki.svg",
        iconLists: ["/logo/logo-Css.svg", "/logo/logo-Html.svg"],
        link: "https://matthieu-vachet.github.io/Projet-3-openclassrooms-Integrateur_Web-/#",
    },
];
