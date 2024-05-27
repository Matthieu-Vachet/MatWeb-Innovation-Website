"use client";

import React from "react";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import WordRotate from "./ui/WordRotate";
import { socialMedias } from "@/data";
import GradualSpacing from "./ui/GradualSpacing";
import TopToScroll from "./TopToScroll";

const Hero = () => {
    return (
        <div className="pb-0 pt-0">
            <div className="mt-[10rem] mb-[3rem] h-[10rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
                <GradualSpacing
                    className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem] z-10"
                    text="MatWeb Innovation"
                />
                <div className="w-[30rem] h-30 md:w-[50rem] lg:w[80rem] lg:h-40 relative z-10 flex justify-center items-center">
                    <div className="absolute inset-x-10 lg:inset-x-30 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-15 lg:inset-x-30 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-50 lg:inset-x-65 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-50 lg:inset-x-65 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                </div>
            </div>
            <div>
                <Spotlight
                    className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen "
                    fill="white"
                />
                <Spotlight className=" top-10 left-full h-[50vh] w-[50vw]" fill="white" />
                <Spotlight className=" top-10 left-80 h-[50vh] w-[70vw]" fill="white" />
            </div>

            <div className="h-[75vh]  w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 mt-0 mb-0 pt-0 pb-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <div className="flex justify-center relative z-10">
                <div className="max-w-[85vw] md:max-w-[85vw] lg:max-w-[85vw] flex flex-col items-center justify-center">
                    <h2 className=" uppercase tracking-widest text-lg text-center text-blue-100 max-w-80">
                        Matthieu Vachet
                    </h2>
                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words="Développeur Web Front-End Indépendant"
                    />

                    <p className="text-4xl mx-auto font-normal text-blue-100 dark:text-neutral-400 text-center">
                        Création de site et d&apos;application Web
                    </p>
                    <div className="uppercase text-lg lg:text-xl text-blue-100 text-center mt-[25px] mb-[35px]">
                        <WordRotate
                            words={["Vitrine", "Landing-Page", "Portfolio", "E-commerce"]}
                        />
                    </div>
                    <div className="flex items-center justify-center md:gap-5 gap-4 pb-4 md:pb-0 lg:pb-2 rounded-lg mb-1">
                        {socialMedias.map((media) => (
                            <a
                                key={media.id}
                                href={media.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[3rem] h-[3rem] cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-xl border border-black-300 hover:bg-black-300 hover:scale-110 transition-all"
                            >
                                <Image src={media.img} alt={media.name} width={30} height={30} />
                            </a>
                        ))}
                    </div>
                    <a href="#about">
                        <MagicButton title="Me contacter" position="right" />
                    </a>
                </div>
            </div>
            <TopToScroll />
        </div>
    );
};

export default Hero;
