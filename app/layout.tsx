import { ThemeProvider } from "./provider";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SEO from "@/components/SEO";
import Head from "next/head";

import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Head>
                <html lang="fr" />
                <meta
                    name="google-site-verification"
                    content="1wXC-Kpw6ZNjYoRbmTe9K2ZEh4TSae17-heUzCXq_sQ"
                />
                <SEO />
            </Head>
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
        </>
    );
}
