import type { Metadata } from "next";
import { ThemeProvider } from "./provider";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import RichSnippet from "./RichSnippet";

import "./globals.css";

export const metadata: Metadata = {
    title: "MatWeb Innovation",
    description:
        "Developpeur Web Freelance, intégration, création de site web dans l'Aisne. Développement en React, Next.js, Tailwind CSS.",
    generator: "Next.js",
    applicationName: "MatWeb Innovation",
    keywords: [
        "Matweb-Innovation, Matweb innovation, Matthieu Vachet, Vachet, freelance, developpeur, developer, intégrateur, freelance developer, developpeur freelance, frontend, nextjs, tailwind, react, frontend developer, developpeur frontend, creative, creative developer, tech, france, aisne, développeur freelance Aisne, software developer, portfolio, landing page, frontend developer portfolio, developpeur frontend portfolio, creative developer portfolio",
    ],
    themeColor: "#000000",
    colorScheme: "dark",
    viewport: "width=device-width, initial-scale=1",
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
            rel: "android-icon",
            type: "image/png",
            sizes: "192x192",
            url: "/favicon/android-icon-192x192.png",
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
        title: "Vachet Matthieu - Developpeur Freelance indépendant",
        description:
            "Developpeur Web Freelance, intégration, création de site web dans l'Aisne. Développement en React, Next.js, Tailwind CSS.",
        url: "https://mat-web-innovation-website.vercel.app/",
        siteName: "MatWeb Innovation",
        images: [
            {
                url: "/LogoWhite.webp",
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
        creator: "Vachet Matthieu",
        creatorId: "0000000000",
        images: ["/LogoWhite.webp"],
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
                    <meta name="author" content="Matthieu Vachet" />
                    <meta name="owner" content="Matthieu Vachet" />
                    <meta name="copyright" content="Copyright © 2024 Matthieu Vachet" />
                    <RichSnippet />
                </head>
                <body className={GeistSans.className}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        // defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <SpeedInsights />
                        <Analytics />
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </>
    );
}
