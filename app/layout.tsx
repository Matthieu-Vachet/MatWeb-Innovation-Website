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
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <SEO />
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
