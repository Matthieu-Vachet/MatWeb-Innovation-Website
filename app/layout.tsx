import { ThemeProvider } from "./provider";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SEO from "@/components/SEO";

import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <head>
                <meta
                    name="google-site-verification"
                    content="1wXC-Kpw6ZNjYoRbmTe9K2ZEh4TSae17-heUzCXq_sQ"
                />
                <SEO
                    title="MatWeb Innovation"
                    description="Developpeur Web Freelance, intégration, création de site web dans l'Aisne. Développement en React, Next.js, Tailwind CSS."
                />
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
    );
}
