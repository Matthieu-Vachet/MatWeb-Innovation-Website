import Link from "next/link";
import { TwitchIcon } from "lucide-react";
import Image from "next/image";

type LinkFooterType = {
    id: string;
    title: string;
    link?: string;
    targetBlank?: boolean;
};

const QUICK_LINKS: LinkFooterType[] = [
    { id: "Acceuil-link", title: "Acceuil", link: "#Home", targetBlank: false },
    { id: "Service-link", title: "Service", link: "#mes-service", targetBlank: false },
    { id: "Tarifs-link", title: "Tarifs", link: "#mes-tarifs", targetBlank: false },
    { id: "Contact-link", title: "Contact", link: "#Contact", targetBlank: false },
    { id: "Faq-link", title: "F.A.Q", link: "#Faqs", targetBlank: false },
];
type SocialMediaLink = {
    id: string;
    icon: () => JSX.Element;
    link: string;
    title: string;
    index?: number;
};
const SOCIAL_MEDIAS: SocialMediaLink[] = [
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
export default function Footer() {
    return (
        <footer className="bg-gradient-to-tr from-transparent via-black-100/15 to-black-100 py-0 text-gray-400 backdrop-blur-lg lg:py-12 ">
            <Image
                src="/background/background-footer.svg"
                alt="Image de fond du footer"
                width={100}
                height={100}
                loading="lazy"
                className="w-full h-screen opacity-80 imac:opacity-50 absolute left-0 bottom-0 min-h-96 -z-50 "
            />

            <div className="flex flex-col items-center max-w-[95vw] lg:max-w-[45vw] mx-auto mb-16">
                <p className="bg-clip-text text-center text-lg [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:text-lg [.is-visible_&]:translate-y-0 mt-14"></p>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3 lg:px-8 z-50">
                <div className="flex flex-col items-start">
                    <div className="mb-2 flex items-center gap-2">
                        <Image src="/logo/logo-MatWeb.webp" alt="Logo" width={50} height={50} />
                        <span className="font-heading3 text-lg font-semibold text-gray-200 md:text-2xl">
                            Matthieu <span className=" uppercase text-purple">Vachet</span>
                        </span>
                    </div>
                    <p className="text-sm md:text-[0.6rem] lg:text-sm leading-relaxed">
                        Développeur web front-end freelance dans l&apos;Aisne, je suis à votre
                        disposition pour répondre à tout type de projet de création de sites
                        internet, de développement spécifique ou d&apos;applications web. Passionné
                        par les technologies liées au web, je mets mes compétences au service de vos
                        besoins dans divers domaines.
                    </p>
                </div>
                <div className="flex flex-col items-start md:items-center">
                    <h4 className="mb-4 font-heading2 font-semibold text-gray-200">
                        Liens rapides
                    </h4>
                    <ul className="space-y-2 text-start md:text-center">
                        {QUICK_LINKS.map(({ title, link, id }) => (
                            <li key={id}>
                                <Link
                                    className="transition-colors hover:text-purple"
                                    href={link ?? "#"}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-start md:items-end">
                    <h4 className="mb-4 font-heading2 font-semibold text-gray-200">Suivez-moi</h4>
                    <div className="flex space-x-4">
                        {SOCIAL_MEDIAS.map(({ icon, link, id, title }) => (
                            <Link
                                key={id}
                                className="transition-colors hover:text-purple"
                                href={link}
                                title={title}
                                aria-label={title}
                                target="_blank"
                                rel="noreferrer"
                                aria-labelledby="{title}-link"
                            >
                                {icon()}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container flex flex-col justify-center items-center mx-auto mt-8 px-4 text-center sm:px-6 lg:px-8 gap-2 text-sm">
                <p>© 2024 Vachet Matthieu - Développeur - Tous droits réservés</p>
                <Link href="/mentions-legales" className="transition-colors hover:text-purple">
                    Mentions légales
                </Link>
            </div>
        </footer>
    );
}

function FacebookIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function InstagramIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function LinkedinIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function MountainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}

function TwitterIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    );
}
