/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                      HEADER SECTION                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface Links {
    name: string;
    title: string;
    href: string;
    className?: string;
    arialabel?: string;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                       HERO SECTION                         */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface SocialMedia {
    id: number;
    name: string;
    alt: string;
    url: string;
    img: string;
}

export interface HeroPresencesProps {
    id: string;
    href: string;
    title: string;
    ariaLabel: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     SERVICE SECTION                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface Service {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
}

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

export interface Item {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                    COMPETENCES SECTION                     */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export interface Skill {
    name: string;
    alt: string;
    img: string;
}

export interface Competence {
    id: string;
    title: string;
    desc: string;
    className: string;
    skills: Skill[];
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     PROJET SECTION                         */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
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

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                    PRICING SECTION                         */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
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

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                      FAQ SECTION                           */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export type FaqItem = {
    id: string;
    questions: string;
    réponses: string;
};

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     FOOTER SECTION                         */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
export type LinkFooterType = {
    id: string;
    title: string;
    link?: string;
    targetBlank?: boolean;
};

export type SocialMediaLink = {
    id: string;
    icon: () => JSX.Element;
    link: string;
    title: string;
    index?: number;
};
