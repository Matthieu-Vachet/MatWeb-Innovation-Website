import React, { lazy, Suspense } from "react";

import { Header } from "@/components/Header";
import CookieConsent from "@/components/CookieConsent";
import Hero from "@/components/sections/Hero";
const Pricing = lazy(() => import("@/components/sections/Pricing"));
const Service = lazy(() => import("@/components/sections/Service"));
const Competences = lazy(() => import("@/components/sections/Competences"));
const Projets = lazy(() => import("@/components/sections/Projets"));
const About = lazy(() => import("@/components/sections/About"));
const Contact = lazy(() => import("@/components/sections/Contact"));
const Faqs = lazy(() => import("@/components/sections/Faqs"));
const Footer = lazy(() => import("@/components/Footer"));
const GlobeMask = lazy(() => import("@/components/ui/GlobeMask"));

import { Toaster } from "sonner";

const Loader = () => (
    <div className="flex justify-center items-center h-full">
        <p>Loading...</p>
    </div>
);

export default function Home() {
    return (
        <main className="relative w-full bg-black-100 flex justify-center items-center flex-col mx-auto">
            {/* <PreLoader /> */}
            <div className="w-full h-full">
                <Header />
                <Hero />
                <CookieConsent />
                <Suspense fallback={<Loader />}>
                    <Service />
                    <Competences />
                    <Projets />
                    <About />
                    <GlobeMask />
                    <Pricing />
                    <Contact />
                    <Faqs />
                    <Footer />
                </Suspense>
                <Toaster
                    richColors
                    position="top-right"
                    toastOptions={{
                        closeButton: true,
                        className: "my-toast",
                    }}
                />
            </div>
        </main>
    );
}
