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
import { ReactNode } from "react";
import Image from "next/image";

export const navItems = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Services",
        link: "#Service",
    },
    {
        name: "Competences",
        link: "#Competences",
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

export interface ServiceItem {
    title: string;
    description: string;
    content: ReactNode;
}

export const ServiceContent: ServiceItem[] = [
    {
        title: "Gestion de projet web",
        description:
            "Site vitrine, Évènementiel, E-commerce, Application Web, Landing-page, Portfolio.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/gest.svg"
                    width={500}
                    height={500}
                    className="object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Intégration WEB",
        description: "Intégration HTML/CSS/REACT respectueuses des standards du Web.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/int.svg"
                    width={500}
                    height={500}
                    className="object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Référencement Naturel",
        description:
            "Affichage sémantique des informations, des pages propres pour un référencement optimal sur le Web.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/seo.svg"
                    width={500}
                    height={500}
                    className=" object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Responsive Design",
        description: "Compatible tous supports, mobile, tablet, desktop.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/resp.svg"
                    width={500}
                    height={500}
                    className=" object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Dynamisme des pages",
        description:
            "Des pages dynamiques et interactives non intrusives pour embellir votre projet.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/dyna.svg"
                    width={500}
                    height={500}
                    className=" object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
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
