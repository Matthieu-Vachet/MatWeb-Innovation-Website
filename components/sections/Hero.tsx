"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { socialMedias } from "@/data/Hero-data";

import MagicButton from "@/components/MagicButton";
import TopToScroll from "@/components/TopToScroll";

const Hero = () => {
    return (
        <section
            id="Home"
            className=" w-full flex pb-0 px-4 bg-gradient-to-b from-purple-950/15 to-black-100 pt-32 imac:pt-40"
        >
            <div className="w-screen h-full flex flex-col justify-center items-center text-center">
                <Image
                    src="/bg-back.webp"
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
                    <div className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[80vw] flex flex-col items-center justify-center">
                        <p className="uppercase tracking-widest text-sm md:text-lg text-center text-white-200 translate-y-[-1rem] animate-fade-in opacity-0">
                            Matthieu Vachet
                        </p>

                        <h1 className="text-center font-semibold text-3xl md:text-5xl lg:text-6xl imac:text-8xl pt-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms] lg:max-w-[75vw]">
                            Développeur Web Front-End{" "}
                            <span className="bg-gradient-to-r from-purple to-white-200 bg-clip-text text-transparent">
                                Indépendant
                            </span>
                        </h1>

                        <h2 className="text-3xl md:text-4xl lg:text-4xl pt-10 md:pt-16 imac:pt-20 font-normal text-white-200 text-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                            Création de site et d&apos;application Web
                        </h2>
                        <div className="text-sm md:text-lg lg:text-xl text-white-200 text-center mt-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:300ms]">
                            <p>Vitrine, Landing-Page, Portfolio, E-commerce</p>
                        </div>
                        <div className="flex items-center justify-center gap-5 mt-10 rounded-lg translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                            {socialMedias.map((media) => (
                                <a
                                    key={media.id}
                                    href={media.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[3rem] h-[3rem] cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-xl border-black-300 border hover:bg-black-300 hover:scale-110 transition-all"
                                >
                                    <Image
                                        src={media.img}
                                        alt={media.name}
                                        width={40}
                                        height={40}
                                        priority
                                        className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] md:opacity-80 hover:opacity-100"
                                    />
                                </a>
                            ))}
                        </div>
                        <Link
                            href="#Formulaire"
                            className="mt-10 lg:hover:scale-110 duration-200 transition-all translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms]"
                        >
                            <MagicButton title="Me contacter" position="left" />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col w-full items-center mt-20 lg:mt-32 z-10 bg-transparent">
                    <p className="text-sm md:text-lg lg:text-xl text-white-200/50 font-semibold">
                        Ma présence en ligne
                    </p>
                    <div className="flex gap-3 md:gap-10 lg:gap-14 items-center justify-center opacity-50 flex-wrap md:-mt-5">
                        <Image
                            src="/FiverrLogo.svg"
                            alt="Logo de Fiverr"
                            width={150}
                            height={150}
                            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[150px] lg:h-[150px]"
                        />
                        <Image
                            src="/LinkedInLogo.svg"
                            alt="Logo de LinkdIn"
                            width={230}
                            height={200}
                            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[200px] lg:h-[60px]"
                        />
                        <Image
                            src="/MaltLogo.svg"
                            alt="Logo de Malt"
                            width={200}
                            height={200}
                            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[200px] lg:h-[200px]"
                        />
                        <Image
                            src="/PyloteLogo.svg"
                            alt="Logo de Pylote"
                            width={200}
                            height={200}
                            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[200px] lg:h-[200px]"
                        />
                    </div>
                </div>
            </div>
            <TopToScroll />
        </section>
    );
};

export default Hero;
