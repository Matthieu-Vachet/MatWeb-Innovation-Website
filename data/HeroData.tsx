export interface SocialMedia {
    id: number;
    name: string;
    alt: string;
    url: string;
    img: string;
}

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
