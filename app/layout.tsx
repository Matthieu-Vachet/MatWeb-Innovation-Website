import type { Metadata } from "next";
import { ThemeProvider } from "./provider";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata: Metadata = {
    title: "MatWeb Innovation",
    description: "Developed by MatWeb Innovation",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={GeistSans.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    // defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
