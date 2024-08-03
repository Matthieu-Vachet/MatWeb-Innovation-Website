"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { socialMedias, HeroPresences } from "@/data/Constants";
import MagicButton from "@/components/MagicButton";
import ScrollToTop from "@/components/ScrollToTop";
import BlurIn from "../ui/BlurIn";

const Hero = () => {
    return (
        <section
            id="Home"
            className="relative w-full flex pb-0 px-4 bg-gradient-to-b from-purple-950/15 to-black-100 pt-28 md:pt-40 lg:pt-32 imac:pt-40"
        >
            <div className="w-screen h-full flex flex-col justify-center items-center text-center">
                <Image
                    src="/background/background-hero.webp"
                    alt="Image background hero"
                    width={1000}
                    height={1000}
                    priority
                    quality={100}
                    className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10"
                    layout="responsive"
                />
                <Image
                    src="/background/map.webp"
                    alt="Image background hero"
                    width={1300}
                    height={1300}
                    priority
                    quality={100}
                    className="absolute top-[23rem] md:top-[35rem] lg:top-[30rem] imac:top-[35rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50 md:opacity-50 lg:opacity-55 imac:opacity-40 grayscale "
                />
                <div className="flex justify-center relative z-10">
                    <div className="max-w-[100vw] md:max-w-[80vw] lg:max-w-[80vw] flex flex-col items-center justify-center">
                        <p className="uppercase tracking-widest text-sm md:text-lg text-center text-white-200 translate-y-[-1rem] animate-fade-in opacity-0">
                            Matthieu Vachet
                        </p>
                        <h1 className="text-center font-semibold text-4xl md:text-7xl imac:text-8xl pt-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms] lg:max-w-[75vw]">
                            Développeur Web Front-End{" "}
                            <span className="bg-gradient-to-r from-purple to-white-200 bg-clip-text text-transparent">
                                Indépendant
                            </span>
                        </h1>
                        <h2 className="text-xl md:text-4xl lg:text-4xl pt-5 md:pt-16 imac:pt-20 font-normal text-white-200 text-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                            Création de sites et d&apos;applications Web
                        </h2>
                        <h3 className="text-sm md:text-lg lg:text-xl text-white-200 text-center mt-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:300ms]">
                            Vitrine, Landing-Page, Portfolio, CV
                        </h3>
                        <div className="flex items-center justify-center gap-5 mt-10 rounded-lg translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                            {socialMedias.map((media, index) => (
                                <a
                                    key={media.name + index}
                                    href={media.url}
                                    aria-label={media.alt}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[3rem] h-[3rem] cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-xl border-black-300 border hover:bg-black-300 hover:scale-110 transition-all"
                                >
                                    <Image
                                        src={media.img}
                                        alt={media.alt}
                                        width={40}
                                        height={40}
                                        priority
                                        className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] md:opacity-80 hover:opacity-100"
                                    />
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center justify-center gap-5 md:gap-10">
                            <Link
                                href="#mes-tarifs"
                                title="Découvrire mes offres"
                                aria-label="Découvrire mes offres"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .getElementById("mes-tarifs")
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="mt-10 uppercase translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms] hidden md:block"
                            >
                                <MagicButton
                                    title="Mes Offres"
                                    position="left"
                                    otherClasses="font-base"
                                />
                            </Link>
                            <Link
                                href="#formulaire-de-contact"
                                title="Me contacter pour un devis Gratuit"
                                aria-label="Me contacter pour un devis Gratuit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .getElementById("formulaire-de-contact")
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="mt-10 uppercase translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms] "
                            >
                                <MagicButton
                                    title="Devis Gratuit"
                                    position="right"
                                    otherClasses="bg-purple text-white font-semibold"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <BlurIn
                    delay={1}
                    className="flex flex-col w-full items-center mt-10 md:mt-16 lg:mt-32 z-30"
                >
                    <p className="text-sm md:text-lg lg:text-xl text-white-200/50 font-semibold">
                        Ma présence en ligne
                    </p>
                    <div className="flex gap-3 md:gap-10 lg:gap-14 items-center justify-center flex-wrap md:-mt-5">
                        {HeroPresences.map((presence, index) => (
                            <Link
                                href={presence.href}
                                title={presence.title}
                                aria-label={presence.ariaLabel}
                                key={presence.id + index}
                                className={presence.className}
                            >
                                <Image
                                    src={presence.src}
                                    alt={presence.alt}
                                    width={presence.width}
                                    height={presence.height}
                                    className={presence.className}
                                />
                            </Link>
                        ))}
                    </div>
                </BlurIn>
            </div>
            <ScrollToTop />
        </section>
    );
};

export default Hero;
