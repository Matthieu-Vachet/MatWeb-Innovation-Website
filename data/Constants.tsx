import {
    IconBuildingSkyscraper,
    IconChartBar,
    IconDeviceDesktopCode,
    IconDevices,
    IconFileUpload,
    IconLayoutGrid,
    IconSettings,
    IconWorldWww,
} from "@tabler/icons-react";

import { IconType } from "react-icons";
import {
    DiCss3,
    DiGithubAlt,
    DiHtml5,
    DiJavascript,
    DiJavascript1,
    DiMongodb,
    DiNodejsSmall,
    DiNpm,
    DiReact,
    DiSass,
    DiTrello,
} from "react-icons/di";
import { FaCss3Alt, FaHtml5, FaReact, FaRegSave, FaSass } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import {
    SiExpress,
    SiGitkraken,
    SiInkscape,
    SiNextdotjs,
    SiPostman,
    SiRedux,
    SiSlack,
    SiSwagger,
    SiTailwindcss,
    SiTestinglibrary,
    SiTrello,
    SiVite,
} from "react-icons/si";
import { TbBrandFigma, TbBrandFramerMotion, TbBrandVscode } from "react-icons/tb";

import {
    Competence,
    FaqItem,
    HeroPresencesProps,
    Item,
    LinkFooterType,
    Links,
    Projet,
    Service,
    SocialMedia,
    SocialMediaLink,
    Tier,
} from "./TypesDatas";

import { FacebookIcon } from "@/components/icons/Facebook";
import { InstagramIcon } from "@/components/icons/Instagram";
import { LinkedinIcon } from "@/components/icons/Linkedin";
import { TwitterIcon } from "@/components/icons/Twitter";

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                        HEADER SECTION                      */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

export const HeaderLinks: Links[] = [
    {
        name: "Accueil",
        title: "Retour à l'accueil",
        href: "#Home",
        arialabel: "Retour à l'accueil",
    },
    {
        name: "Services",
        title: "Voir les services proposés",
        href: "#mes-service",
        arialabel:
            "Voir la liste des services que je propose en développement web ou en intégration",
    },
    {
        name: "Compétences",
        title: "Consulter mes compétences",
        href: "#mes-competences",
        className: "md:hidden lg:block",
        arialabel: "Consulter mes compétences en développement web ou en intégration",
    },
    {
        name: "Projets",
        title: "Voir mes projets",
        href: "#mes-projets",
        className: "md:hidden lg:block",
        arialabel: "Voir les projets que j'ai réalisés",
    },
    {
        name: "À propos",
        title: "En savoir plus sur moi",
        href: "#a-propos-de-moi",
        className: "md:hidden lg:block",
        arialabel: "En savoir plus sur moi",
    },
    {
        name: "Offres",
        title: "Découvrir mes tarifs",
        href: "#mes-tarifs",
        arialabel:
            "Découvrir les tarifs pour les services que je propose en developpement web ou en intégration",
    },
    {
        name: "Contact",
        title: "Me contacter",
        href: "#Contact",
        arialabel: "Contacter Matthieu Vachet via le formulaire de contact",
    },
    {
        name: "F.A.Q",
        title: "Voir les questions freéquentes",
        href: "#Faqs",
        className: "md:hidden lg:block",
        arialabel: "Voir les questions freéquentes",
    },
];

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                        HERO SECTION                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

export const socialMedias: SocialMedia[] = [
    {
        id: 1,
        name: "Github",
        alt: "Lien vers le Github de Matthieu Vachet",
        url: "https://github.com/Matthieu-Vachet/",
        img: "/logo/logo-Github.svg",
    },
    {
        id: 2,
        name: "Twitter",
        alt: "Lien vers le Twitter de Matthieu Vachet",
        url: "https://twitter.com/matweb_innov/",
        img: "/logo/logo-Twitter.svg",
    },
    {
        id: 3,
        name: "LinkedIn",
        alt: "Lien vers le LinkedIn de Matthieu Vachet",
        url: "https://www.linkedin.com/in/matthieu-vachet-46b7231b0/",
        img: "/logo/logo-LinkedIn-2.svg",
    },
];

export const HeroPresences: HeroPresencesProps[] = [
    {
        id: "Fiverr",
        href: "https://fr.fiverr.com/matthieu_vachet/developpeur-web-certifie-creation-de-sites-modernes-avec-react-et-next-js",
        title: "Voir le profil Fiverr de Matthieu Vachet",
        ariaLabel: "Lien vers le profil Fiverr de Matthieu Vachet",
        src: "/logo/logo-Fiverr.svg",
        alt: "Logo de Fiverr",
        width: 150,
        height: 150,
        className:
            "w-[60px] h-[60px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] opacity-50 hover:opacity-100 transition-opacity duration-500",
    },
    {
        id: "Linkedin",
        href: "https://www.linkedin.com/in/matthieu-vachet-46b7231b0/",
        title: "Voir le profil LinkedIn de Matthieu Vachet",
        ariaLabel: "Lien vers le profil LinkedIn de Matthieu Vachet",
        src: "/logo/logo-LinkedIn.svg",
        alt: "Logo de LinkedIn",
        width: 230,
        height: 200,
        className:
            "w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[60px] opacity-50 hover:opacity-100 transition-opacity duration-500",
    },
    {
        id: "Malt",
        href: "https://www.malt.fr",
        title: "Voir le site de Malt",
        ariaLabel: "Lien vers le site de Malt",
        src: "/logo/logo-Malt.svg",
        alt: "Logo de Malt",
        width: 200,
        height: 200,
        className:
            "w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] opacity-50 hover:opacity-100 transition-opacity duration-500",
    },
    {
        id: "Pylote",
        href: "https://pylote.io/",
        title: "Voir le site de Pylote",
        ariaLabel: "Lien vers le site de Pylote",
        src: "/logo/logo-Pylote.svg",
        alt: "Logo de Pylote",
        width: 200,
        height: 200,
        className:
            "w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] opacity-50 hover:opacity-100 transition-opacity duration-500",
    },
];

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                        SERVICE SECTION                     */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

export const Processus: Service[] = [
    {
        title: "1",
        subtitle: "échange",
        description:
            "Nous débutons par un échange, l'occasion idéale pour discuter de votre projet. Nous aborderons vos idées, vos objectifs et les détails essentiels à considérer.",
        icon: "PiCoffeeBold",
    },
    {
        title: "2",
        subtitle: "Analyse",
        description:
            "Après notre rendez-vous, j'analyserai en profondeur vos besoins. Nous examinerons ensemble les différentes possibilités et établirons une vision claire pour le projet.",
        icon: "PiNotePencilFill",
    },
    {
        title: "3",
        subtitle: "Design",
        description:
            "Une fois les bases définies, je me lancerai dans la conception initiale du site. Nous discuterons des premières esquisses et ajusterons les éléments selon vos retours.",
        icon: "PiPencil",
    },
    {
        title: "4",
        subtitle: "Code",
        description:
            "Une fois le design approuvé, je commencerai le développement du site. Je veillerai à ce que le code soit propre, efficace et conforme à vos attentes.",
        icon: "PiCodeBold",
    },
    {
        title: "5",
        subtitle: "Test",
        description:
            "Avant de finaliser le projet, des tests rigoureux seront effectués pour garantir que tout fonctionne parfaitement. Votre implication sera précieuse pour s'assurer que le site répond à vos besoins.",
        icon: "SiTestinglibrary",
    },
    {
        title: "6",
        subtitle: "Livraison",
        description:
            "Une fois le site prêt, je le livrerai avec enthousiasme. Nous passerons en revue les derniers détails, et je vous fournirai toutes les informations nécessaires pour la gestion et la maintenance futures du site.",
        icon: "BsSendCheck",
    },
];

export const items: Item[] = [
    {
        id: "Intégration-WEB",
        title: "Intégration WEB",
        description:
            "Intégration de solutions web sur mesure pour optimiser la performance de votre site. Nous assurons une compatibilité parfaite avec tous les navigateurs et appareils pour offrir une expérience utilisateur fluide et cohérente.",
        icon: <IconDeviceDesktopCode />,
    },
    {
        id: "Création-de-Site-Internet",
        title: "Création de Site Internet",
        description:
            "Conception de sites internet sur mesure qui convertissent vos prospects en clients. Mettez en avant votre image de marque grâce à des designs soignés et un référencement efficace.",
        icon: <IconWorldWww />,
    },
    {
        id: "Landing-Page",
        title: "Landing Page",
        description:
            "Développement de landing pages captivantes et performantes. Maximisez vos taux de conversion avec des pages d'atterrissage optimisées pour attirer et retenir l’attention de vos visiteurs.",
        icon: <IconFileUpload />,
    },
    {
        id: "Portfolio",
        title: "Portfolio",
        description:
            "Créez un portfolio en ligne professionnel qui reflète vos compétences et réalisations. Mettez en valeur vos projets avec un design élégant et une navigation intuitive.",
        icon: <IconLayoutGrid />,
    },
    {
        id: "Site-Vitrine",
        title: "Site Vitrine",
        description:
            "Conception de sites vitrines attractifs pour présenter votre entreprise et vos services. Améliorez votre présence en ligne avec des designs modernes et une optimisation SEO.",
        icon: <IconBuildingSkyscraper />,
    },
    {
        id: "SEO",
        title: "Référencement",
        description:
            "Boostez votre visibilité en ligne avec des stratégies de référencement naturel (SEO). Améliorez votre positionnement sur Google et attirez un trafic qualifié vers votre site.",
        icon: <IconChartBar />,
    },
    {
        id: "Responsive",
        title: "100% Responsive",
        description:
            "Optimisation de votre site pour une expérience utilisateur optimale sur toutes les plateformes : ordinateur, tablette et smartphone. Améliorez votre classement sur Google avec un site entièrement responsive.",
        icon: <IconDevices />,
    },
    {
        id: "Maintenance-Site-Internet",
        title: "Maintenance Site Internet",
        description:
            "Assurez la performance et la sécurité de votre site avec nos services de maintenance. Optimisation de la vitesse de chargement, correction des failles de sécurité et mise à jour régulière de votre contenu.",
        icon: <IconSettings />,
    },
];

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                    COMPETENCE SECTION                      */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

export const iconMap: { [key: string]: IconType } = {
    DiHtml5: DiHtml5,
    DiCss3: DiCss3,
    DiSass: DiSass,
    DiJavascript1: DiJavascript1,
    DiReact: DiReact,
    SiRedux: SiRedux,
    TbBrandFramerMotion: TbBrandFramerMotion,
    DiNodejsSmall: DiNodejsSmall,
    SiExpress: SiExpress,
    DiMongodb: DiMongodb,
    TbBrandVscode: TbBrandVscode,
    DiNpm: DiNpm,
    DiGithubAlt: DiGithubAlt,
    SiGitkraken: SiGitkraken,
    TbBrandFigma: TbBrandFigma,
    SiInkscape: SiInkscape,
    SiTrello: SiTrello,
    SiSlack: SiSlack,
    SiPostman: SiPostman,
    SiSwagger: SiSwagger,
    DiTrello: DiTrello,
    SiNextdotjs: SiNextdotjs,
    SiTailwindcss: SiTailwindcss,
    SiVite: SiVite,
    SiTestinglibrary: SiTestinglibrary,
};

export const CompetencesList: Competence[] = [
    {
        id: "Front-End-Id",
        title: "Front-End",
        desc: "Création d'interfaces utilisateur dynamiques et responsives avec des technologies modernes comme React.js, tout en optimisant l'expérience utilisateur et les performances.",
        className: "md:col-span-2",
        skills: [
            {
                name: "Html5",
                alt: "Icône Html",
                img: "DiHtml5",
            },
            {
                name: "Css",
                alt: "Icône Css",
                img: "DiCss3",
            },
            {
                name: "Sass",
                alt: "Icône Sass",
                img: "DiSass",
            },
            {
                name: "Tailwind",
                alt: "Icône Tailwind Css",
                img: "SiTailwindcss",
            },
            {
                name: "JS",
                alt: "Icône Javascript",
                img: "DiJavascript1",
            },
            {
                name: "React",
                alt: "Icône React",
                img: "DiReact",
            },
            {
                name: "Vite",
                alt: "Icône Vite",
                img: "SiVite",
            },
            {
                name: "Next.js",
                alt: "Icône Next.js",
                img: "SiNextdotjs",
            },
            {
                name: "Redux",
                alt: "Icône Redux",
                img: "SiRedux",
            },
            {
                name: "Motion",
                alt: "Icône Framer Motion",
                img: "TbBrandFramerMotion",
            },
        ],
    },
    {
        id: "Back-End-Id",
        title: "Back-End",
        desc: "Développement de serveurs robustes et sécurisés, gestion des bases de données et des API avec Node.js, Express.js et MongoDB, garantissant l'efficacité et la scalabilité des applications.",
        className: "md:col-span-2",
        skills: [
            {
                name: "Node.js",
                alt: "Icône Noje.JS",
                img: "DiNodejsSmall",
            },
            {
                name: "Express.js",
                alt: "Icône Express.JS",
                img: "SiExpress",
            },
            {
                name: "MongoDB",
                alt: "Icône MongoDB",
                img: "DiMongodb",
            },
        ],
    },
    {
        id: "Tools-Dev-Id",
        title: "Outils de développement",
        desc: "Maîtrise des outils de développement modernes pour améliorer l'efficacité du workflow, y compris la gestion de version avec Git et la collaboration sur des projets complexes.",
        className: "md:col-span-2",
        skills: [
            {
                name: "VSCode",
                alt: "Icône VSCode",
                img: "TbBrandVscode",
            },
            {
                name: "NPM",
                alt: "Icône NPM",
                img: "DiNpm",
            },
            {
                name: "Github",
                alt: "Icône Github",
                img: "DiGithubAlt",
            },
            {
                name: "Git Kraken",
                alt: "Icône Git Kraken",
                img: "SiGitkraken",
            },
        ],
    },
    {
        id: "Tools-Design-Id",
        title: "Conception et collaboration",
        desc: "Utilisation des outils de conception et de gestion de projets pour créer des interfaces utilisateur intuitives et collaborer efficacement avec les équipes, assurant ainsi une cohérence dans le développement.",
        className: "md:col-span-2",
        skills: [
            {
                name: "Figma",
                alt: "Icône Figma",
                img: "TbBrandFigma",
            },
            {
                name: "Inkscape",
                alt: "Icône Inkscape",
                img: "SiInkscape",
            },
            {
                name: "Trello",
                alt: "Icône Trello",
                img: "DiTrello",
            },
            {
                name: "Slack",
                alt: "Icône Slack",
                img: "SiSlack",
            },
            {
                name: "Postman",
                alt: "Icône Postman",
                img: "SiPostman",
            },
            {
                name: "Swagger",
                alt: "Icône Swagger",
                img: "SiSwagger",
            },
        ],
    },
];

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     PROJET SECTION                         */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

export const DataProjets = [
    {
        id: 1,
        srcMockup: "/images-projets/projet-astral-mockup.webp",
        src1: "/images-projets/projet-astral-screen-1.webp",
        src2: "/images-projets/projet-astral-screen-2.webp",
        title: "Astral",
        category: "Intégration Web, Landing Page",
        date: 2024,
        description:
            "Landing page pour la plateforme Astral : générateur de sites web alimenté par une IA",
        iconLists: [
            "/logo/logo-NextJs.svg",
            "/logo/logo-TailwindCss.svg",
            "/logo/logo-ShadCnUi.svg",
            "/logo/logo-Clerk.svg",
        ],
        link: "https://astra-integration-landing-page.vercel.app/",
        devList: [
            "Next.js: Utilisé pour construire le site web basé sur React, facilitant le rendu côté serveur et les fonctionnalités avancées",
            "TailwindCSS: Appliqué pour le stylage du site avec une approche CSS utilitaire-first, permettant une personnalisation rapide et efficace",
            "Shadcn UI: Utilisé pour fournir des composants d'interface utilisateur modernes et réactifs",
            "Magic UI: Intégré pour offrir des composants d'interface utilisateur élégants et fonctionnels",
            "Clerk: Déployé pour la gestion de l'authentification des utilisateurs, assurant une connexion sécurisée et fluide",
        ],
    },
    {
        id: 2,
        srcMockup: "/images-projets/projet-Matweb-Mockup.webp",
        src1: "/images-projets/projet-Matweb-screen-1.webp",
        src2: "/images-projets/projet-Matweb-screen-2.webp",
        title: "MatWeb-Innovation",
        category: "Portfolio",
        date: 2023,
        description:
            "Portfolio personnel développé pour le dernier projet OpenClassrooms, dans le cadre de la validation du RNCP 5. Il offre une expérience immersive et dynamique, avec une intégration web et des animations mises en valeur",
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
        devList: [
            "Développement et gestion du portfolio dans sa globalité",
            "Développement spécifique (API REST, gestion de la modification et de la suppression de projets) directement via le site",
            "Développement avec React.js et Vite.js",
            "Gestion des bases de données (MongoDB, Express.js, Node.js)",
            "Gestion du CSS avec Sass",
            "Gestion des animations avec Framer Motion et GSAP",
            "Référencement naturel (SEO)",
            "Site responsive (compatible avec tous les supports)",
            "Internationalisation (i18n), thèmes sombre et clair",
        ],
    },
    {
        id: 3,
        srcMockup: "/images-projets/projet-724Events-Mockup.webp",
        src1: "/images-projets/projet-724Events-screen-1.webp",
        src2: "/images-projets/projet-724Events-screen-2.webp",
        title: "Projet 724Events",
        category: "Debugage",
        date: 2023,
        description:
            "Analyser et résoudre les problèmes d'un site d'agence événementielle, finaliser le code et compléter le cahier de recettes avec des tests.",
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
        devList: [
            "Déboguer un site web grâce aux Chrome DevTools",
            "Installer et utiliser React Developer Tools",
            "Écrire et exécuter des tests avec le framework de test Jest",
            "Comprendre les méthodes BDD et TDD",
            "Edition du cahier de recette",
        ],
    },
    {
        id: 4,
        srcMockup: "/images-projets/projet-Nina-Mockup.webp",
        src1: "/images-projets/projet-Nina-screen-1.webp",
        src2: "/images-projets/projet-Nina-screen-2.webp",
        title: "Projet Nina",
        category: "Optimisation, SEO",
        date: 2023,
        description:
            "Optimiser complètement le site web en termes de performances, SEO, référencement local, métadonnées pour les réseaux sociaux et accessibilité, avec un rapport.",
        iconLists: ["/logo/logo-Css.svg", "/logo/logo-Html.svg", "/logo/logo-Javascript.svg"],
        link: "https://matthieu-vachet.github.io/Projet-9-Openclassrooms-Projet-Optimisation-Nina-Carducci",
        devList: [
            "Appliquer les techniques de base pour améliorer le SEO d'un site",
            "Appliquer les règles et les normes de l'accessibilité pour rendre les contenus numériques accessibles à tous",
            "Utilisation des outils tels que Lighthouse et Wave pour auditer la performance d'un site web",
            "Mettre en place le rapport d'optimisation et de SEO pour le site web",
        ],
    },
    {
        id: 5,
        srcMockup: "/images-projets/projet-Kasa-Mockup.webp",
        src1: "/images-projets/projet-Kasa-screen-1.webp",
        src2: "/images-projets/projet-Kasa-screen-2.webp",
        title: "Projet Kasa",
        category: "Site Web",
        date: 2023,
        description:
            "Application React complète pour Kasa, permettant la location d'appartements entre particuliers.",
        iconLists: [
            "/logo/logo-Css.svg",
            "/logo/logo-Html.svg",
            "/logo/logo-Sass.svg",
            "/logo/logo-Javascript.svg",
            "/logo/logo-React.svg",
            "/logo/logo-ViteJs.svg",
        ],
        devList: [
            "Développement d'une application moderne en utilisant React.js pour construire des interfaces utilisateur réactives et dynamiques, tout en tirant parti de Vite.js pour des temps de construction rapides et un chargement instantané.",
            "Mise en œuvre d'une navigation fluide et cohérente à travers les différentes pages de l'application en utilisant React Router, garantissant une expérience utilisateur intuitive et sans friction.",
            "Conception et intégration d'éléments d'interface utilisateur via des composants React, permettant une gestion modulaire et efficace des différentes parties de l'application tout en assurant une cohérence visuelle.",
            "Application de Sass pour gérer les styles de l'application, facilitant l'organisation et la personnalisation des feuilles de style pour un rendu visuel attrayant et homogène.",
            "Ajout d'animations interactives à l'application en utilisant JavaScript, enrichissant l'expérience utilisateur avec des effets visuels engageants et dynamiques.",
        ],
        link: "https://projet-8-openclassrooms-projet-kasa.vercel.app",
    },
    {
        id: 6,
        srcMockup: "/images-projets/projet-Sophie-Mockup.webp",
        src1: "/images-projets/projet-Sophie-screen-1.webp",
        src2: "/images-projets/projet-Sophie-screen-2.webp",
        title: "Projet Sophie Bluel",
        category: "Portfolio",
        date: 2023,
        description:
            "Créer une page web dynamique avec JavaScript, présentant les travaux d'un architecte, une page de connexion pour l'administrateur du site, et une modale pour télécharger de nouveaux médias.",
        iconLists: [
            "/logo/logo-Css.svg",
            "/logo/logo-Html.svg",
            "/logo/logo-Sass.svg",
            "/logo/logo-Javascript.svg",
        ],
        link: "https://github.com/Matthieu-Vachet/Projet-6-openclassrooms-Portfolio-Javascript",
        devList: [
            "Gestion des événements utilisateurs avec JavaScript.",
            "Manipulation des éléments du DOM avec JavaScript.",
            "Récupération des données utilisateurs dans JavaScript via des formulaires.",
            "Communication avec une API pour récupérer, modifier et ajouter des données.",
        ],
    },
    {
        id: 7,
        srcMockup: "/images-projets/projet-Booki-Mockup.webp",
        src1: "/images-projets/projet-Booki-screen-1.webp",
        src2: "/images-projets/projet-Booki-screen-2.webp",
        title: "Projet Booki",
        category: "Site Web",
        date: 2023,
        description:
            "Développer un site Internet pour la société Booki, permettant aux utilisateurs de trouver des hébergements et des activités dans la ville de leur choix.",
        iconLists: ["/logo/logo-Css.svg", "/logo/logo-Html.svg"],
        link: "https://matthieu-vachet.github.io/Projet-3-openclassrooms-Integrateur_Web-/#",
        devList: [
            "Comprendre les détails d'une maquette et l'utilisation de Figma.",
            "Comprendre la responsivité et les breakpoints.",
            "Utilisation de Grid et Flexbox pour créer des mises en page responsives et flexibles.",
        ],
    },
];

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     ABOUT SECTION                          */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

// MarqueeHorizontal.tsx
export const reviews = [
    {
        name: "Alex",
        username: "@alexr",
        body: "Une expérience incroyable ! La conception de mon site web est non seulement esthétique, mais aussi parfaitement fonctionnelle. Le niveau de détail et le professionnalisme sont impressionnants. Je recommande vivement ce service à quiconque cherche un travail de haute qualité.",
        img: "https://avatar.vercel.sh/alex",
    },
    {
        name: "Clara",
        username: "@clara_j",
        body: "Je suis totalement émerveillée par le résultat ! Le site a été conçu avec une telle précision et un soin inégalé. Le service est à la fois rapide et professionnel. Un grand merci pour ce travail exceptionnel !",
        img: "https://avatar.vercel.sh/clara",
    },
    // {
    //     name: "Maxime",
    //     username: "@max_web",
    //     body: "Je suis vraiment impressionné par la qualité du travail. Le site est élégant et performant. Le processus de développement a été fluide et transparent. Travailler avec quelqu'un d'aussi talentueux et dévoué a été un vrai plaisir.",
    //     img: "https://avatar.vercel.sh/maxime",
    // },
    // {
    //     name: "Sophie",
    //     username: "@sophie_74",
    //     body: "Le travail réalisé a largement dépassé mes attentes. Chaque élément du site est parfaitement conçu et fonctionne à merveille. La communication tout au long du projet a été excellente. Je suis ravie du résultat et je n'hésiterai pas à recommander ce service.",
    //     img: "https://avatar.vercel.sh/sophie",
    // },
    // {
    //     name: "Thomas",
    //     username: "@tthomas",
    //     body: "Un service impeccable avec des résultats exceptionnels. Le site est non seulement beau, mais aussi optimisé pour offrir une excellente expérience utilisateur. La qualité du travail est évidente, et je suis très satisfait du résultat final.",
    //     img: "https://avatar.vercel.sh/thomas",
    // },
    // {
    //     name: "Léna",
    //     username: "@lena.design",
    //     body: "Un travail fantastique ! La conception du site est superbe et le niveau de détail est remarquable. Le service est professionnel et le résultat est exactement ce que je recherchais. Je suis très satisfait et je recommande vivement ce service !",
    //     img: "https://avatar.vercel.sh/lena",
    // },
    // {
    //     name: "Éric",
    //     username: "@ericb",
    //     body: "Un excellent service avec une qualité de conception hors pair. Le site est à la fois moderne et très fonctionnel. La communication a été fluide et le travail a été livré dans les délais. Je suis entièrement satisfait et je recommande sans réserve.",
    //     img: "https://avatar.vercel.sh/eric",
    // },
    // {
    //     name: "Laura",
    //     username: "@laura_g",
    //     body: "La qualité du travail est tout simplement exceptionnelle. Mon site web a été conçu avec un sens aigu du détail et une grande efficacité. L'expérience globale a été très professionnelle. Je suis ravie du résultat final et je n'hésiterai pas à revenir.",
    //     img: "https://avatar.vercel.sh/laura",
    // },
    // {
    //     name: "Nicolas",
    //     username: "@nicolas_w",
    //     body: "Un travail remarquable qui a largement répondu à mes attentes. Le site est magnifique et fonctionne parfaitement. Le professionnel avec qui j'ai travaillé a fait preuve d'une grande compétence et d'un excellent service client. Je suis très satisfait.",
    //     img: "https://avatar.vercel.sh/nicolas",
    // },
    // {
    //     name: "Marie",
    //     username: "@marie_c",
    //     body: "Je suis très impressionnée par la qualité du site réalisé. La conception est élégante et moderne, et chaque aspect du projet a été traité avec le plus grand soin. La communication a été impeccable et le service exceptionnel. Merci pour ce travail de qualité.",
    //     img: "https://avatar.vercel.sh/marie",
    // },
    // {
    //     name: "Julien",
    //     username: "@julien_89",
    //     body: "Une collaboration parfaite ! La conception du site est superbe et l'ensemble du projet a été géré de manière très professionnelle. La réactivité et la qualité du travail sont au rendez-vous. Je recommande vivement ce service à tous ceux qui recherchent un excellent résultat.",
    //     img: "https://avatar.vercel.sh/julien",
    // },
];

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                    PRINCING SECTION                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

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

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                      FAQ SECTION                           */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

export const faqsList: FaqItem[] = [
    {
        id: "faq-1",
        questions: "Quel est le prix d'un site internet ?",
        réponses:
            "En général, le coût dépend de la complexité du projet et du type de service requis. Par exemple, un CV en ligne ou une landing page est moins coûteux qu'un portfolio complet ou un site vitrine. L'intégration d'une maquette ou d'une palette graphique existante sera toujours moins chère que la création complète du design. Pour une estimation précise, n'hésitez pas à me contacter.",
    },
    {
        id: "faq-2",
        questions: "Le design de mon site sera-t-il unique ?",
        réponses:
            "Votre site sera unique, que ce soit par l'intégration de votre palette graphique ou maquette existante, ou par une création sur mesure. Chaque projet est personnalisé pour refléter votre image avec une interface moderne et élégante. J'utilise des animations avancées avec Framer Motion, GSAP et d'autres technologies pour garantir une expérience utilisateur exceptionnelle.",
    },
    {
        id: "faq-3",
        questions: "Mon site sera-t-il adapté sur mobile ?",
        réponses:
            "Oui, tous mes projets sont conçus pour être adaptés aux mobiles, tablettes et ordinateurs de bureau. Sur demande, je peux également adapter votre site pour des écrans très grands, garantissant ainsi une expérience utilisateur optimale sur tous les types de dispositifs.",
    },
    {
        id: "faq-4",
        questions: "Serai-je autonome pour gérer les contenus de mon site web ?",
        réponses:
            "Oui, vous pourrez gérer vos contenus de manière autonome si vous le souhaitez. Je vous fournirai une formation pour maîtriser l'outil de gestion. Pour un portfolio ou un CV en ligne, vous pourrez ajouter, modifier ou supprimer des projets, des expériences et des photos. Pour une landing page, vous pourrez ajuster les textes, les images et les galeries de photos. Si vous préférez déléguer cette gestion, je peux également prendre en charge cette tâche, partiellement ou totalement, via un contrat spécifique.",
    },
];

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                      FOOTER SECTION                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

export const QUICK_LINKS: LinkFooterType[] = [
    { id: "Acceuil-link", title: "Acceuil", link: "#Home", targetBlank: false },
    { id: "Service-link", title: "Service", link: "#mes-service", targetBlank: false },
    { id: "Tarifs-link", title: "Tarifs", link: "#mes-tarifs", targetBlank: false },
    { id: "Contact-link", title: "Contact", link: "#Contact", targetBlank: false },
    { id: "Faq-link", title: "F.A.Q", link: "#Faqs", targetBlank: false },
];

export const SOCIAL_MEDIAS: SocialMediaLink[] = [
    {
        id: "Twitter-link",
        icon: (...props) => <TwitterIcon />,
        link: "https://twitter.com/matweb_innov/",
        title: "Voir le profil Twitter de Matthieu Vachet",
    },
    {
        id: "Facebook-link",
        icon: (...props) => <FacebookIcon />,
        link: "https://www.facebook.com/profile.php?id=61561295637110",
        title: "Voir la page Facebook de Matthieu Vachet",
    },
    {
        id: "Linkedin-link",
        icon: (...props) => <LinkedinIcon />,
        link: "https://www.linkedin.com/in/matthieu-vachet-46b7231b0/",
        title: "Voir le profil LinkedIn de Matthieu Vachet",
    },
    {
        id: "Instagram-link",
        icon: (...props) => <InstagramIcon />,
        link: "https://www.instagram.com/matthieuvachet02/",
        title: "Voir le profil Instagram de Matthieu Vachet",
    },
];
