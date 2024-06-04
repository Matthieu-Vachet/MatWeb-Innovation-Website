import {
    DiHtml5,
    DiCss3,
    DiSass,
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiMongodb,
    DiNpm,
    DiGithubAlt,
    DiTrello,
} from "react-icons/di";
import {
    SiVite,
    SiJest,
    SiTestinglibrary,
    SiRedux,
    SiSwagger,
    SiExpress,
    SiGitkraken,
    SiInkscape,
    SiSlack,
    SiPostman,
    SiTrello,
    SiNextdotjs,
    SiTailwindcss,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandVscode, TbBrandFigma } from "react-icons/tb";
import { IconType } from "react-icons";
import { IconBrandJavascript } from "@tabler/icons-react";
import { link } from "fs";

export const navItems = [
    {
        name: "Services",
        link: "#Service",
    },
    {
        name: "Competences",
        link: "#Competences",
    },
    {
        name: "Projets",
        link: "#Projets",
    },
];

export const socialMedias = [
    {
        id: 1,
        name: "Github",
        url: "https://github.com/Matthieu-Vachet",
        img: "/git.svg",
    },
    {
        id: 2,
        name: "Twitter",
        url: "https://twitter.com/ShinyHunting02",
        img: "/twit.svg",
    },
    {
        id: 3,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/matthieuvachet/",
        img: "/link.svg",
    },
];

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

export interface Skill {
    name: string;
    alt: string;
    img: string;
}

export interface Competence {
    id: number;
    title: string;
    desc: string;
    className: string;
    skills: Skill[];
}

export const CompetencesList: Competence[] = [
    {
        id: 1,
        title: "Front-End",
        desc: "Création d'interfaces utilisateur dynamiques et responsives avec des technologies modernes comme React.js, en optimisant l'expérience utilisateur et les performances.",
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
        id: 2,
        title: "Back-End",
        desc: "Développement de serveurs robustes et sécurisés, gestion des bases de données et API avec Node.js, Express.js, et MongoDB, garantissant l'efficacité et la scalabilité des applications.",
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
        id: 3,
        title: "Outils de développement",
        desc: "Maîtrise des outils de développement modernes pour améliorer l'efficacité du workflow, incluant la gestion de version avec Git et la collaboration sur des projets complexes.",
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
        id: 4,
        title: "Conception et collaboration",
        desc: "Utilisation des outils de conception et de gestion de projets pour créer des interfaces utilisateur intuitives et collaborer efficacement avec les équipes, assurant une cohérence dans le développement.",
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

export const Processus = [
    {
        title: "Etape 1",
        subtitle: "Café",
        description:
            "Nous commençons par un café ensemble, l'occasion parfaite pour échanger sur votre projet. Nous discuterons de vos idées, de vos objectifs et des détails importants à prendre en compte.",
        icon: "PiCoffeeBold",
    },
    {
        title: "Etape 2",
        subtitle: "Analyse",
        description:
            "Après notre café, je me plongerai dans une analyse approfondie de vos besoins. Nous examinerons ensemble les différentes possibilités et établirons une vision claire pour le projet.",
        icon: "PiNotePencilFill",
    },
    {
        title: "Etape 3",
        subtitle: "Design",
        description:
            "Une fois que nous avons défini les bases, je passerai à la conception initiale du site. Nous pourrons discuter des premières esquisses et ajuster les éléments en fonction de vos retours.",
        icon: "PiPencil",
    },
    {
        title: "Etape 4",
        subtitle: "Code",
        description:
            "Avec le design approuvé, je me mettrai au travail pour développer le site. Je veillerai à ce que le code soit propre, efficace et conforme à vos attentes.",
        icon: "PiCodeBold",
    },
    {
        title: "Etape 5",
        subtitle: "Test",
        description:
            "Avant de finaliser le projet, nous effectuerons des tests rigoureux pour nous assurer que tout fonctionne parfaitement. Votre implication est précieuse pour garantir que le site répond à vos besoins.",
        icon: "SiTestinglibrary",
    },
    {
        title: "Etape 6",
        subtitle: "Livraison",
        description:
            "Une fois que le site est prêt, je vous le livrerai avec enthousiasme. Nous pourrons passer en revue les derniers détails et je vous fournirai toutes les informations nécessaires pour assurer la gestion et la maintenance du site à l'avenir.",
        icon: "BsSendCheck",
    },
];

export const slugs = [
    "typescript",
    "react",
    "nodedotjs",
    "express",
    "nextdotjs",
    "vercel",
    "redux",
    "vite",
    "tailwindcss",
    "framer",
    "javascript",
];

export const items = [
    {
        id: 1,
        title: "Intégration WEB",
        description: "Intégration HTML/CSS/REACT respectueuses des standards du Web.",
        className: "md:col-span-3 md:row-span-2 ",
        imgClassName:
            "absolute right-2 bottom-2 w-[11rem] lg:w-[30%] border dark:border-white/10 p-3 rounded-2xl dark:bg-black-100 opacity-50",
        titleClassName:
            "text-2xl md:text-2xl lg:text-3xl font-bold gap-2 lg:gap-5 w-[55%] md:w-[65%] lg:flex lg:justify-center lg:text-start z-50",
        spareImgClassName: "",
        descriptionClassName: "",
        img: "/integration.png",
        spareImg: "",
        icon: "",
    },
    {
        id: 2,
        title: "Dynamisme des pages",
        description:
            "Des pages dynamiques et interactives non intrusives pour embellir votre projet.",
        className: "md:col-span-1 md:row-span-2",
        imgClassName: "",
        titleClassName:
            " text-2xl md:text-2xl md:gap-4 lg:text-2xl xl:text-4xl w-[90%] md:w-[100%] font-bold justify-center z-50 gap-2",
        spareImgClassName: "",
        descriptionClassName: "md:flex md:justify-center md:items-center md:text-center md:w-full",
        img: "",
        spareImg: "",
        icon: (
            <IconBrandJavascript className="h-[13rem] w-[13rem] md:h-[10rem] md:w-[10rem] lg:h-[15rem] lg:w-[15rem] text-black-200 z-20 opacity-50" />
        ),
    },

    {
        id: 3,
        title: "Référencement Naturel",
        description:
            "Affichage sémantique des informations, des pages propres pour un référencement optimal sur le Web.",
        className: "md:col-span-2 md:row-span-2",
        imgClassName:
            "absolute right-2 bottom-2 w-[11rem] lg:w-[50%] border dark:border-white/10 p-3 rounded-2xl dark:bg-black-100 opacity-50",
        titleClassName:
            "text-2xl md:text-2xl lg:text-3xl font-bold max-w-[55%] lg:max-w-[50%] gap-2 lg:gap-5",
        spareImgClassName: "",
        descriptionClassName: "",
        img: "/referencement.png",
        spareImg: "",
        icon: "",
    },
    {
        id: 4,
        title: "Responsive Design",
        description: `Compatible tous supports, 
        mobile, 
        tablet, 
        desktop.`,
        className: "md:col-span-2 md:row-span-2",
        imgClassName:
            "absolute right-2 bottom-2 w-auto lg:w-[50%] border dark:border-white/10 p-3 rounded-2xl dark:bg-black-100 opacity-60 z-10",
        titleClassName:
            "text-2xl md:text-2xl lg:text-3xl font-bold max-w-[55%] lg:max-w-[50%] gap-2 lg:gap-5",
        spareImgClassName: "",
        descriptionClassName: "",
        img: "/windows-dark.avif",
        spareImg: "",
        icon: "",
    },
];

export const projets = [
    {
        id: 1,
        title: "Portfolio",
        cat: "Portfolio",
        des: "Portfolio personnel développé avec React, Vite.js et Framer Motion, offre une expérience immersive et dynamique. Intégration web et animation mises en valeur.",
        img: "/p1.svg",
        iconLists: [
            "/Sass.svg",
            "/React.svg",
            "/ViteJs.svg",
            "/MongoDb.svg",
            "/ExpressJs.svg",
            "/NodeJS.svg",
            "/FramerMotion.svg",
        ],
        link: "https://matthieu-vachet-portfolio.vercel.app",
    },
    {
        id: 2,
        title: "Projet 724Events",
        cat: "Débuguage",
        des: "Analyser et résoudre les problèmes d'un site d'agence d'événementiel, finaliser le code, compléter le cahier de recette avec des tests.",
        img: "/p2.svg",
        iconLists: [
            "/Css.svg",
            "/Html.svg",
            "/Javascript.svg",
            "/Sass.svg",
            "/React.svg",
            "/Jest.svg",
            "/TestingLibrary.svg",
        ],
        link: "https://projet-10-openclassrooms-debuggez-une-application-react.vercel.app",
    },
    {
        id: 3,
        title: "Projet Nina",
        cat: "Optimisation, SEO",
        des: "Optimiser complètement le site web en termes de performances, SEO, référencement local, métadonnées pour les réseaux sociaux et accessibilité avec rapport.",
        img: "/p3.svg",
        iconLists: ["/Css.svg", "/Html.svg", "/Javascript.svg"],
        link: "https://matthieu-vachet.github.io/Projet-9-Openclassrooms-Projet-Optimisation-Nina-Carducci",
    },
    {
        id: 4,
        title: "Projet Kasa",
        cat: "Site Web",
        des: "Application React complète pour Kasa, permettant la location d'appartements entre particuliers.",
        img: "/p4.svg",
        iconLists: [
            "/Css.svg",
            "/Html.svg",
            "/Sass.svg",
            "/Javascript.svg",
            "/React.svg",
            "/ViteJs.svg",
        ],
        link: "https://projet-8-openclassrooms-projet-kasa.vercel.app",
    },
    {
        id: 5,
        title: "Projet Sophie Bluel",
        cat: "Portfolio",
        des: "Créer une page web dynamique avec JavaScript, présentant les travaux d'un architecte, une page de connexion pour l'administrateur du site, et une modale pour uploader de nouveaux médias.",
        img: "/p5.svg",
        iconLists: ["/Css.svg", "/Html.svg", "/Sass.svg", "/Javascript.svg"],
        link: "https://github.com/Matthieu-Vachet/Projet-6-openclassrooms-Portfolio-Javascript",
    },
    {
        id: 6,
        title: "Projet Booki",
        cat: "Site Web",
        des: "Développer un site Internet pour la société Booki, permettant aux utilisateurs de trouver des hébergements et des activités dans la ville de leurs choix.",
        img: "/p6.svg",
        iconLists: ["/Css.svg", "/Html.svg"],
        link: "https://matthieu-vachet.github.io/Projet-3-openclassrooms-Integrateur_Web-/#",
    },
];
