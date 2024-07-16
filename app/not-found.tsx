"use client";

import Link from "next/link";
import Image from "next/image";

import MagicButton from "@/components/MagicButton";

export default function NotFound() {
    return (
        <section
            id="not-found"
            className=" w-screen h-screen flex bg-gradient-to-b from-purple-950/15 to-black-100"
        >
            <div className="w-screen h-full flex flex-col justify-center items-center text-center">
                <Image
                    src="/background/background-hero.webp"
                    alt="Image background hero"
                    width={1000}
                    height={1000}
                    priority
                    className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10"
                    layout="responsive"
                />
                {/* Background Grid */}
                <div className="h-[80vh]  w-full bg-grid-white/[0.04] flex items-center justify-center absolute top-0 left-0 mt-0 mb-0 pt-0 pb-0 z-0">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gradient-to-b from-purple-950/10 to-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]" />
                </div>

                <div className="flex justify-center relative z-10">
                    <div className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[80vw] flex flex-col items-center justify-center gap-10">
                        <h1 className="uppercase tracking-widest text-3xl md:text-5xl lg:text-6xl imac:text-7xl text-center text-white-200 translate-y-[-1rem] animate-fade-in opacity-0">
                            Page not found
                        </h1>
                        <div className="text-center uppercase translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms] lg:max-w-[75vw] border-t-4 border-b-4 border-white-100 p-5">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl imac:text-7xl">
                                Erreur
                            </h2>
                            <h3 className="text-3xl md:text-5xl lg:text-6xl imac:text-[15rem] font-semibold bg-gradient-to-r from-purple to-white-200 bg-clip-text text-transparent">
                                404
                            </h3>
                        </div>

                        <p className="text-3xl md:text-4xl lg:text-4xl font-normal text-white-200 text-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                            Si vous avez saisi l&apos;URL directement, veuillez vérifier
                            l&apos;orthographe.
                        </p>

                        <Link
                            href="/"
                            className="uppercase lg:hover:scale-110 duration-200 transition-all translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms]"
                        >
                            <MagicButton title="Retour Acceuil" position="left" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
