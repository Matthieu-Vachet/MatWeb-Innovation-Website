import type { Metadata } from "next";
import { ThemeProvider } from "./themeProvider";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/components/GoogleAnalytics";

import RichSnippet from "./richSnippet";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.matthieu-vachet.fr/"),
    title: "MatWeb Innovation développeur Web freelance dans l'Aisne",
    description:
        "Developpeur Web Freelance, intégration, création de site web dans l'Aisne. Développement en React, Next.js, Tailwind CSS.",
    generator: "Next.js",
    applicationName: "MatWeb Innovation",
    keywords: [
        "Matweb-Innovation, Matweb innovation,Matthieu, matthieu, Matthieu Vachet, Vachet, freelance, developpeur, developer, intégrateur, freelance developer, developpeur freelance, frontend, nextjs, tailwind, react, frontend developer, developpeur frontend, creative, creative developer, tech, france, aisne, développeur freelance Aisne, software developer, portfolio, landing page, frontend developer portfolio, developpeur frontend portfolio, creative developer portfolio",
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    manifest: "/manifest.json",
    icons: [
        {
            rel: "icon",
            type: "image/x-icon",
            sizes: "16x16",
            url: "/favicon/favicon.ico",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon/favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "96x96",
            url: "/favicon/favicon-96x96.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "192x192",
            url: "/favicon/favicon-192x192.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "512x512",
            url: "/favicon/favicon-512x512.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon/favicon-16x16.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon/favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "96x96",
            url: "/favicon/favicon-96x96.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "256x256",
            url: "/favicon/favicon-256x256.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "57x57",
            url: "/favicon/apple-icon-57x57.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "60x60",
            url: "/favicon/apple-icon-60x60.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "72x72",
            url: "/favicon/apple-icon-72x72.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "76x76",
            url: "/favicon/apple-icon-76x76.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "114x114",
            url: "/favicon/apple-icon-114x114.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "120x120",
            url: "/favicon/apple-icon-120x120.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "144x144",
            url: "/favicon/apple-icon-144x144.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "152x152",
            url: "/favicon/apple-icon-152x152.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/favicon/apple-icon-180x180.png",
        },
    ],

    category: "Web Development",
    openGraph: {
        title: "Vachet Matthieu - Developpeur Freelance indépendant dans l'Aisne",
        description:
            "Developpeur Web Freelance, intégration, création de site web dans l'Aisne 02120. Développement en React, Next.js, Tailwind CSS.",
        url: "https://www.matthieu-vachet.fr/",
        siteName: "MatWeb Innovation",
        images: [
            {
                url: "/cards/OpengraphCard.png",
                width: 1200,
                height: 630,
                alt: "Vachet Matthieu - Developpeur Freelance indépendant dans l'Aisne",
            },
        ],
        locale: "fr-FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vachet Matthieu - Developpeur Freelance indépendant dans l'Aisne",
        description:
            "Developpeur Web Freelance, intégration, création de site web dans l'Aisne. Développement en React, Next.js, Tailwind CSS.",
        creator: "Vachet Matthieu",
        creatorId: "0000000000",
        images: ["/cards/OpengraphCard.png"],
        site: "MatWeb Innovation",
    },
    verification: {
        google: "1wXC-Kpw6ZNjYoRbmTe9K2ZEh4TSae17-heUzCXq_sQ",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang="fr" suppressHydrationWarning>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="author" content="Matthieu Vachet" />
                    <meta name="owner" content="Matthieu Vachet" />
                    <meta name="copyright" content="Copyright © 2024 Matthieu Vachet" />
                    <RichSnippet />
                </head>
                <body className={`w-full ${GeistSans.className}`}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        // defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <SpeedInsights />
                        <Analytics />
                        <GoogleAnalytics />
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </>
    );
}
