"use client";

import React from "react";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./MagicButton";
import { socialMedias } from "@/data";
import GradualSpacing from "./ui/GradualSpacing";
import TopToScroll from "./TopToScroll";
import AnimatedElement from "./ui/AnimatedElements";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="pb-0 pt-0">
            <div className="mt-[10rem] mb-[3rem] h-[10rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
                {/* Titre de la page composant GRADUALSPACING */}
                <GradualSpacing
                    className="font-display text-center text-4xl font-medium tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem] z-10"
                    text="MatWeb Innovation"
                />
            </div>
            {/* Effet lumineux background composant SPOTLIGHT */}
            <div>
                <Spotlight
                    className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen "
                    fill="white"
                />
                <Spotlight className=" top-10 left-80 h-[50vh] w-[70vw]" fill="white" />
            </div>
            {/* Background Grid */}
            <div className="h-[75vh]  w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 mt-0 mb-0 pt-0 pb-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <div className="flex justify-center relative z-10">
                <div className="max-w-[85vw] md:max-w-[85vw] lg:max-w-[85vw] flex flex-col items-center justify-center">
                    <AnimatedElement delay={1}>
                        <h2 className=" uppercase tracking-widest text-lg text-center text-white-200 max-w-80">
                            Matthieu Vachet
                        </h2>
                    </AnimatedElement>
                    <AnimatedElement delay={1.5}>
                        <h3 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl">
                            Développeur Web Front-End{" "}
                            <span className="text-purple">Indépendant</span>
                        </h3>
                    </AnimatedElement>
                    <AnimatedElement delay={2}>
                        <p className="text-4xl mt-20 mx-auto font-normal text-blue-100 dark:text-white-200 text-center">
                            Création de site et d&apos;application Web
                        </p>
                    </AnimatedElement>
                    <AnimatedElement delay={2.5}>
                        <div className="text-lg lg:text-xl text-white-200 text-center mt-[25px] mb-[35px] opacity-75">
                            <p>Vitrine, Landing-Page, Portfolio, E-commerce</p>
                        </div>
                    </AnimatedElement>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 3, ease: "easeInOut" }}
                        className="flex items-center justify-center md:gap-5 gap-4 pb-4 md:pb-0 lg:pb-2 rounded-lg mb-1"
                    >
                        {socialMedias.map((media) => (
                            <a
                                key={media.id}
                                href={media.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[3rem] h-[3rem] cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-xl border-black-300 border hover:bg-black-300 hover:scale-110 transition-all"
                            >
                                <Image src={media.img} alt={media.name} width={30} height={30} />
                            </a>
                        ))}
                    </motion.div>
                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 3.5, ease: "easeInOut" }}
                        href="#about"
                    >
                        <MagicButton title="Me contacter" position="left" />
                    </motion.a>
                </div>
            </div>
            <TopToScroll />
        </div>
    );
};

export default Hero;
