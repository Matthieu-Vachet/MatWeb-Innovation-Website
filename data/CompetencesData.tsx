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
