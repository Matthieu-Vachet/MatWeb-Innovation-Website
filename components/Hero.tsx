"use client";

import React from "react";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { SparklesCore } from "./ui/Sparkles";
import { FlipWords } from "./ui/FlipWords";
import { socialMedias } from "@/data";

const Hero = () => {
    const words = ["Vitrine", "Landing-Page", "Portfolio", "E-commerce"];

    return (
        <div className="pb-0 pt-0">
            <div className="mt-[15rem] mb-[5rem] h-[10rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center text-white relative z-10 mt-5">
                    MatWeb Innovation
                </h1>
                <div className="w-[30rem] h-30 md:w-[50rem] lg:[80rem] lg:h-40 relative z-10 flex justify-center items-center">
                    {/* Gradients */}
                    <div className="absolute inset-x-10 lg:inset-x-30 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-15 lg:inset-x-30 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-50 lg:inset-x-65 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-50 lg:inset-x-65 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={200}
                        className=" w-[70%] h-[100px] md:w-[75%] lg:w-screen lg:h-full flex justify-center items-center"
                        particleColor="#FFFFFF"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                </div>
            </div>
            {/* Spotlight */}
            <div>
                <Spotlight
                    className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen "
                    fill="white"
                />
                <Spotlight className=" top-10 left-full h-[50vh] w-[50vw]" fill="white" />
                <Spotlight className=" top-10 left-80 h-[50vh] w-[70vw]" fill="white" />
            </div>

            {/* Grid Background */}
            <div className="h-[75vh]  w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 mt-0 mb-0 pt-0 pb-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            {/* Title */}
            <div className="flex justify-center relative z-10">
                <div className="max-w-[85vw] md:max-w-[85vw] lg:max-w-[85vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-lg text-center text-blue-100 max-w-80">
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
                        <FlipWords words={words} />
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
                        <MagicButton
                            title="Me contacter"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
