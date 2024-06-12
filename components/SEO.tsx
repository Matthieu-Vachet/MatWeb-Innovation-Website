import Head from "next/head";
import JSONLD from "./JSONLD";

const SEO = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Matthieu Vachet",
        "url": "https://mat-web-innovation-website.vercel.app/",
        "logo": "/LogoWhite.webp",
        "telephone": "+33744890831",
        "email": "matweb_innovation@icloud.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "10 rue de Marle",
            "addressLocality": "Puisieux et Clanlieu",
            "addressRegion": "Haut de France",
            "postalCode": "02120",
            "addressCountry": "FR"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "telephone": "+33744890831",
            "email": "matweb_innovation@icloud.com",
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
            }
        },
        "priceRange": "€€",
        "image": "/LogoWhite.webp"
    };

    return (
        <>
            <Head>
                <meta name="language" content="fr" />
                <meta name="author" content="Matthieu Vachet" />
                <meta name="owner" content="Matthieu Vachet" />
                <meta name="generator" content="Next.js" />
                <meta name="copyright" content="Copyright © 2024 Matthieu Vachet" />
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
                <title>MatWeb Innovation</title>
                <meta name="description" content="Developpeur Web Freelance, intégration, création de site web dans l'Aisne. Développement en React, Next.js, Tailwind CSS." />
                <meta name="application-name" content="MatWeb Innovation" />
                <meta name="keywords" content="Matweb-Innovation, Matweb innovation, Matthieu Vachet, Vachet, freelance, developpeur, developer, intégrateur, freelance developer, developpeur freelance, frontend, nextjs, tailwind, react, frontend developer, developpeur frontend, creative, creative developer, tech, france, aisne, développeur freelance Aisne, software developer, portfolio, landing page, frontend developer portfolio, developpeur frontend portfolio, creative developer portfolio" />

                {/* Balises de Geolocalisation */}
                <meta name="geo.region" content="FR-HDF" />
                <meta name="geo.placename" content="Puisieux-et-Clanlieu" />
                <meta name="geo.position" content="49.5521; 3.7048" />
                <meta name="ICBM" content="49.5521, 3.7048" />

                {/* Balises OpenGraph */}
                <meta property="og:title" content="Vachet Matthieu - Developpeur Freelance indépendant" />
                <meta property="og:description" content="Developpeur Web Freelance, intégration, création de site web dans l'Aisne. Développement en React, Next.js, Tailwind CSS." />
                <meta property="og:url" content="https://mat-web-innovation-website.vercel.app/" />
                <meta property="og:site_name" content="MatWeb Innovation" />
                <meta property="og:image" content="/LogoWhite.webp" />
                <meta property="og:locale" content="fr-FR" />
                <meta property="og:type" content="website" />

                {/* Balises Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Vachet Matthieu - Developpeur Freelance indépendant" />
                <meta name="twitter:description" content="Developpeur Web Freelance, intégration, création de site web dans l'Aisne. Développement en React, Next.js, Tailwind CSS." />
                <meta name="twitter:url" content="https://mat-web-innovation-website.vercel.app/" />
                <meta name="twitter:site_name" content="MatWeb Innovation" />
                <meta name="twitter:image" content="/LogoWhite.webp" />
                <meta name="twitter:locale" content="fr-FR" />
                <meta name="twitter:type" content="website" />
                <meta name="twitter:creator" content="Vachet Matthieu" />

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
                <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

                {/* Balises Robots */}
                <link rel="manifest" href="/manifest.json" />
                <meta name="robots" content="index, follow" />
                <meta name="bingbot" content="index, follow" />
                <meta name="googlebot" content="index, follow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
                <meta name="revisit-after" content="1 days" />

                {/* Balises outils verification */}
                <meta name="google-site-verification" content="1wXC-Kpw6ZNjYoRbmTe9K2ZEh4TSae17-heUzCXq_sQ" />
            </Head>
            <JSONLD data={structuredData} />
        </>
    );
};

export default SEO;
