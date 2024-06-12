// components/SEO.tsx

import Head from "next/head";
import JSONLD from "./JSONLD";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string[];
    openGraph?: {
        title?: string;
        description?: string;
        url?: string;
        siteName?: string;
        images?: {
            url: string;
            width?: number;
            height?: number;
            alt?: string;
        }[];
        locale?: string;
        type?: string;
    };
    twitter?: {
        card?: string;
        title?: string;
        description?: string;
        url?: string;
        siteName?: string;
        images?: {
            url: string;
            width?: number;
            height?: number;
            alt?: string;
        }[];
        locale?: string;
        type?: string;
        creator?: string;
        creatorId?: string;
    };
    structuredData?: object;
}

const defaultProps: SEOProps = {
    title: "MatWeb Innovation",
    description:
        "Developpeur Web Freelance, intégration, création de site web dans l'Aisne. Développement en React, Next.js, Tailwind CSS.",
    keywords: [
        "Matweb-Innovation",
        "Matweb innovation",
        "Matthieu Vachet",
        "Vachet",
        "freelance",
        "developpeur",
        "developer",
        "intégrateur",
        "freelance developer",
        "developpeur freelance",
        "frontend",
        "nextjs",
        "tailwind",
        "react",
        "frontend developer",
        "developpeur frontend",
        "creative",
        "creative developer",
        "tech",
        "france",
        "aisne",
        "développeur freelance Aisne",
        "software developer",
        "portfolio",
        "landing page",
        "frontend developer portfolio",
        "developpeur frontend portfolio",
        "creative developer portfolio",
    ],
    openGraph: {
        title: "Vachet Matthieu Developpeur Freelance indépendant",
        description:
            "Developpeur Web Freelance, intégration, création de site web dans l'Aisne. Développement en React, Next.js, Tailwind CSS.",
        url: "https://mat-web-innovation-website.vercel.app/",
        siteName: "MatWeb Innovation",
        images: [
            {
                url: "",
                width: 1200,
                height: 630,
                alt: "Vachet Matthieu - Developpeur Freelance indépendant",
            },
        ],
        locale: "fr-FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vachet Matthieu - Developpeur Freelance indépendant",
        description:
            "Developpeur Web Freelance, intégration, création de site web dans l'Aisne. Développement en React, Next.js, Tailwind CSS.",
        url: "https://mat-web-innovation-website.vercel.app/",
        siteName: "MatWeb Innovation",
        images: [
            {
                url: "",
                width: 1200,
                height: 630,
                alt: "Vachet Matthieu - Developpeur Freelance indépendant",
            },
        ],
        locale: "fr-FR",
        type: "website",
        creator: "Vachet Matthieu",
    },
    structuredData: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Matthieu Vachet",
        url: "https://mat-web-innovation-website.vercel.app/",
        logo: "/LogoWhite.webp",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+33744890831",
            email: "matweb_innovation@icloud.com",
            address: {
                "@type": "PostalAddress",
                streetAddress: "10 rue de Marle",
                addressLocality: "Puisieux et Clanlieu",
                addressCountry: "FR",
                addressRegion: "Haut de France",
                postalCode: "02120",
            },
            openingHoursSpecification: [
                {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "09:00",
                    closes: "18:00",
                },
            ],
            contactType: "customer service",
        },
    },
};

const SEO: React.FC<SEOProps> = (props) => {
    const seo = { ...defaultProps, ...props };

    return (
        <>
            <Head>
                <meta name="language" content="fr" />
                <meta name="author" content="Matthieu Vachet" />
                <meta name="owner" content="Matthieu Vachet" />
                <meta name="generator" content="Next.js" />
                <meta name="copyright" content="Copyright © 2024 Matthieu Vachet" />
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta name="application-name" content="MatWeb Innovation" />
                <meta name="keywords" content={seo.keywords?.join(", ")} />

                {/* Balises de Geolocalisation */}
                <meta name="geo.region" content="FR-HDF" />
                <meta name="geo.placename" content="Puisieux-et-Clanlieu" />
                <meta name="geo.position" content="49.5521; 3.7048" />
                <meta name="ICBM" content="49.5521, 3.7048" />

                {/* Balises OpenGraph */}
                <meta property="og:title" content={seo.openGraph?.title} />
                <meta property="og:description" content={seo.openGraph?.description} />
                <meta property="og:url" content={seo.openGraph?.url} />
                <meta property="og:site_name" content={seo.openGraph?.siteName} />
                {seo.openGraph?.images?.map((image, index) => (
                    <meta key={index} property="og:image" content={image.url} />
                ))}
                <meta property="og:locale" content={seo.openGraph?.locale} />
                <meta property="og:type" content={seo.openGraph?.type} />

                {/* Balises Twitter */}
                <meta name="twitter:card" content={seo.twitter?.card} />
                <meta name="twitter:title" content={seo.twitter?.title} />
                <meta name="twitter:description" content={seo.twitter?.description} />
                <meta name="twitter:url" content={seo.twitter?.url} />
                <meta name="twitter:site_name" content={seo.twitter?.siteName} />
                {seo.twitter?.images?.map((image, index) => (
                    <meta key={index} name="twitter:image" content={image.url} />
                ))}
                <meta name="twitter:locale" content={seo.twitter?.locale} />
                <meta name="twitter:type" content={seo.twitter?.type} />
                <meta name="twitter:creator" content={seo.twitter?.creator} />

                {/* Icons */}
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-icon-192x192.png"
                />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

                {/* Balises Robots */}
                <link rel="manifest" href="/manifest.json" />
                <meta name="robots" content="index, follow" />
                <meta name="bingbot" content="index, follow" />
                <meta
                    name="googlebot"
                    content="index, follow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
                />
                <meta name="revisit-after" content="1 days" />

                {/* Balises outils verification */}
                <meta
                    name="google-site-verification"
                    content="1wXC-Kpw6ZNjYoRbmTe9K2ZEh4TSae17-heUzCXq_sQ"
                />
                {/* <meta name="msvalidate.01" content="VotreCodeDeVérificationBing" />  */}
            </Head>
            {seo.structuredData && <JSONLD data={seo.structuredData} />}
        </>
    );
};

export default SEO;
