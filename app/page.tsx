import React, { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Toaster } from "sonner";

import Hero from "@/components/sections/Hero";
const Service = lazy(() => import("@/components/sections/Service"));
const Competences = lazy(() => import("@/components/sections/Competences"));
const Projets = lazy(() => import("@/components/sections/Projets"));
const About = lazy(() => import("@/components/sections/About"));
const Contact = lazy(() => import("@/components/sections/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Loader = () => (
    <div className="flex justify-center items-center h-full">
        <p>Loading...</p>
    </div>
);

export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
            {/* <PreLoader /> */}
            <div className="w-full">
                <Header />
                <Hero />
                <Suspense fallback={<Loader />}>
                    <Service />
                    <Competences />
                    <Projets />
                    <About />
                    <Contact />
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
