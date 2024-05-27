import type { Metadata } from "next";
import { ThemeProvider } from "./provider";
// import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";

import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

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
        <html lang="en">
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
