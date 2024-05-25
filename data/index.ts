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

export const navItems = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Service",
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
    // Ajoute d'autres icônes ici
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
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
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
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
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
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
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
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
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
