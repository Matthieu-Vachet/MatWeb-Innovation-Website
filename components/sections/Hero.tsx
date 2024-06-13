"use client";

import React from "react";
import Image from "next/image";

import MagicButton from "@/components/MagicButton";
import { socialMedias } from "@/data/Hero-data";
import TopToScroll from "@/components/TopToScroll";

const Hero = () => {
    return (
        <section id="Home" className="pb-0 pt-0 px-4 bg-gradient-to-b from-purple-100 to-black-100">
            {/* Background Grid */}
            <div className="h-[80vh]  w-full bg-grid-white/[0.03] flex items-center justify-center absolute top-0 left-0 mt-0 mb-0 pt-0 pb-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gradient-to-b from-purple-100 to-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,purple)]" />
            </div>
            <div className="flex justify-center relative z-10">
                <div className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[80vw] flex flex-col items-center justify-center">
                    <p className="pt-[8rem] md:pt-[10rem] imac:pt-[17rem] uppercase tracking-widest text-sm md:text-lg text-center text-white-200 translate-y-[-1rem] animate-fade-in opacity-0">
                        Matthieu Vachet
                    </p>

                    <h1 className="text-center font-semibold text-3xl md:text-5xl lg:text-6xl pt-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] lg:max-w-[75vw]">
                        Développeur Web Front-End{" "}
                        <span className="bg-gradient-to-r from-purple to-white-200 bg-clip-text text-transparent">
                            Indépendant
                        </span>
                    </h1>

                    <h2 className="text-3xl md:text-4xl lg:text-4xl pt-10 md:pt-16 font-normal text-white-200 text-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                        Création de site et d&apos;application Web
                    </h2>
                    <div className="text-sm md:text-lg lg:text-xl text-white-200 text-center mt-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                        <p>Vitrine, Landing-Page, Portfolio, E-commerce</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-10 rounded-lg translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
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
                    <a
                        href="#about"
                        className="mt-10 lg:hover:scale-110 duration-200 transition-all translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]"
                    >
                        <MagicButton title="Me contacter" position="left" />
                    </a>
                </div>
            </div>
            <TopToScroll />
        </section>
    );
};

export default Hero;
