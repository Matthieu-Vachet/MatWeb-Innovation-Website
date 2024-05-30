"use client";

import React from "react";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./MagicButton";
import { socialMedias } from "@/data";
import TopToScroll from "./TopToScroll";
import AnimatedElement from "./ui/AnimatedElements";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Hero = () => {
    return (
        <div className="pb-0 pt-0">
            <Image
                src="/mInnovationWhite.webp"
                alt="hero"
                width={100}
                height={100}
                className="absolute top-10 z-[50] opacity-70 w-[4rem] h-[4rem]"
            />
            <div className="relative flex z-10 flex-row justify-center md:justify-end gap-5 pt-2 opacity-50 ">
                <div className="flex flex-row gap-1 items-center">
                    <FaPhoneAlt className="text-white-200 text-xs lg:text-sm" />
                    <span className="text-white-200 text-xs lg:text-sm">(+33) 7.44.89.08.31</span>
                </div>
                <div className="flex flex-row gap-1 items-center">
                    <IoIosMail className="text-white-200 text-sm lg:text-md" />
                    <span className="text-white-200 text-xs lg:text-sm">
                        matweb_innovation@icloud.com
                    </span>
                </div>
            </div>
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
                <div className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[80vw] flex flex-col items-center justify-center">
                    <AnimatedElement delay={1}>
                        <h2 className="pt-[8rem] md:pt-[15rem] uppercase tracking-widest text-sm md:text-lg text-center text-white-200">
                            Matthieu Vachet
                        </h2>
                    </AnimatedElement>
                    <AnimatedElement delay={1.5}>
                        <h3 className="text-center font-bold text-3xl md:text-5xl lg:text-6xl pt-5">
                            Développeur Web Front-End{" "}
                            <span className="text-purple">Indépendant</span>
                        </h3>
                    </AnimatedElement>
                    <AnimatedElement delay={2}>
                        <p className="text-3xl md:text-4xl lg:text-5xl pt-10 md:pt-16 font-normal text-blue-100 dark:text-white-200 text-center">
                            Création de site et d&apos;application Web
                        </p>
                    </AnimatedElement>
                    <AnimatedElement delay={2.5}>
                        <div className="text-sm md:text-lg lg:text-xl text-white-200 text-center mt-5 opacity-80">
                            <p>Vitrine, Landing-Page, Portfolio, E-commerce</p>
                        </div>
                    </AnimatedElement>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 3, ease: "easeInOut" }}
                        className="flex items-center justify-center gap-5 mt-10 rounded-lg"
                    >
                        {socialMedias.map((media) => (
                            <a
                                key={media.id}
                                href={media.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-xl border-black-300 border hover:bg-black-300 hover:scale-110 transition-all"
                            >
                                <Image
                                    src={media.img}
                                    alt={media.name}
                                    width={30}
                                    height={30}
                                    className="md:w-[2.5rem] md:h-[2.5rem] md:opacity-80 hover:opacity-100"
                                />
                            </a>
                        ))}
                    </motion.div>
                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 3.5, ease: "easeInOut" }}
                        href="#about"
                        className="mt-10 lg:hover:scale-110 duration-200 transition-all"
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
