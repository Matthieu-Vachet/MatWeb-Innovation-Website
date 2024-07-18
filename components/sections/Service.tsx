"use client";

import React from "react";
import Link from "next/link";

import { HoverEffect } from "@/components/ui/CardsHoverEffect";
import IconCloud from "@/components/ui/IconCloud";
import WordRotate from "@/components/ui/WordRotate";
import { Features } from "@/components/feature";
import AnimatedElement from "../ui/AnimateElements";

import { Processus, items, slugs } from "@/data/Services-data";
import { FeaturesSection } from "../FeaturesSection";
import MagicButton from "../MagicButton";

const Service = () => {
    return (
        <section
            id="mes-service"
            className="bg-gradient-to-b from-black-100 via-purple-300/15 to-black-100 pt-0 md:pt-[10rem]"
        >
            <Features color="49, 35, 85" colorDark="49, 35, 85">
                <Features.Main
                    title="Mes Services"
                    text={
                        <>
                            Donnez vie à vos{" "}
                            <span className="text-purple uppercase font-bold">Projets</span>
                        </>
                    }
                    paragraphes="Je conçois et intégre des solutions adaptées pour soutenir la croissance de votre entreprise, en améliorant votre visibilité et votre positionnement sur internet"
                />
            </Features>

            <div className="flex flex-col items-center justify-center mx-auto px-4 max-w-[95vw] imac:max-w-[70vw] -mt-[8rem] md:-mt-[15rem]">
                <FeaturesSection />
                <div className="flex justify-center">
                    <Link
                        href="#formulaire-de-contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document
                                .getElementById("formulaire-de-contact")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="mt-5 md:mt-10 uppercase translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms]"
                    >
                        <MagicButton title="Besoin d'un devis ?" position="left" />
                    </Link>
                </div>
                <AnimatedElement delay={0.4} duration={0.6}>
                    <h3 className="w-[95vw] md:w-full text-gradient subtitle-size translate-y-[40%] text-center [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0 mt-10 lg:mt-36 mb-24 md:mb-36 lg:mb-28 flex flex-col">
                        Processus de Conception et Développement <br />
                        <span className="text-purple subtitle text-xl md:text-2xl">
                            Les étapes clés qui vous séparent de votre site internet
                        </span>
                    </h3>
                </AnimatedElement>
                <div className="max-w-[95vw] mx-auto">
                    <div>
                        <HoverEffect items={Processus} />
                    </div>
                </div>
                <AnimatedElement delay={0.4} duration={0.6}>
                    <div className="relative flex items-center justify-center lg:justify-between overflow-hidden bg-transparent gap-1  flex-wrap mt-20 lg:mt-36  ">
                        <div className="flex max-w-[90vw] lg:max-w-[50%] flex-col items-center gap-5">
                            <p className="text-gradient translate-y-[40%] text-center [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0 mb-8 md:mb-5 subtitle-size">
                                Utilisation de technologies qui n&apos;ont plus besoin de prouver
                                leur efficacité
                            </p>
                            <WordRotate
                                className="subtitle-size md:mt-10 text-purple font-semibold"
                                words={[
                                    "Javascript",
                                    "Typescript",
                                    "React.js",
                                    "Next.js",
                                    "Vite",
                                    "Redux",
                                    "Tailwind CSS",
                                    "Framer Motion",
                                ]}
                            />
                        </div>
                        <div className="flex md:max-w-[70%] md:items-center md:mx-auto lg:max-w-[40%]">
                            <IconCloud iconSlugs={slugs} />
                        </div>
                    </div>
                </AnimatedElement>
            </div>
        </section>
    );
};

export default Service;
