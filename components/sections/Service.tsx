"use client";

import Link from "next/link";

import { Features } from "@/components/Feature";
import { HoverEffect } from "@/components/ui/HoverEffect";
import IconCloud from "@/components/ui/IconCloud";
import WordRotate from "@/components/ui/WordRotate";
import AnimatedElement from "../ui/AnimatedElement";

import { Processus, slugs } from "@/data/ServicesData";
import { FeaturesSection } from "../FeaturesSection";
import MagicButton from "../MagicButton";
import Particles from "../ui/Particle";

const Service = () => {
    return (
        <section
            id="mes-service"
            className=" relative bg-gradient-to-b from-black-100 via-purple-300/15 to-black-100 pt-0 md:-mt-[10rem] lg:pt-[10rem]"
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
                    paragraphes="Je conçois et intègre des solutions adaptées pour soutenir la croissance de votre entreprise, en améliorant votre visibilité et votre positionnement sur Internet."
                />
            </Features>
            <div className="relative">
                <Particles
                    className="hidden md:block absolute inset-0"
                    quantity={200}
                    ease={80}
                    color={"#fff"}
                    refresh
                />
                <div className="relative flex flex-col items-center justify-center mx-auto px-4 max-w-[95vw] imac:max-w-[70vw] -mt-16 lg:-mt-0">
                    <div className="hidden lg:block mx-auto lg:max-w-7xl px-6 text-center lg:px-8 ">
                        <div className="relative mt-6 opacity-50">
                            <svg
                                viewBox="0 0 1208 1024"
                                className="absolute opacity-50 left-1/2 -z-8 h-[80rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] md:-top-20 lg:-top-[20rem]"
                            >
                                <ellipse
                                    cx={604}
                                    cy={512}
                                    fill="url(#id6d1bd035-0dd1-437e-93fa-59d316231eb0)"
                                    rx={604}
                                    ry={512}
                                />
                                <defs>
                                    <radialGradient id="id6d1bd035-0dd1-437e-93fa-59d316231eb0">
                                        <stop offset={0} stopColor="#905BF4" />
                                        <stop offset={1} stopColor="#594199" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <FeaturesSection />
                    <div className="flex justify-center">
                        <Link
                            href="#formulaire-de-contact"
                            title="Demander un devis Gratuit"
                            aria-label="Demander un devis Gratuit"
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
                        <h3 className="w-[95vw] md:w-full text-gradient text-2xl md:subtitle-size translate-y-[40%] text-center [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0 mt-10 md:mt-14 lg:mt-36 mb-24 md:mb-34 lg:mb-28 flex flex-col">
                            Processus de Conception et Développement
                            <span className="text-purple subtitle text-lg md:text-2xl">
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
                                <h4 className=" text-white-100 translate-y-[40%] text-center [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0 mb-8 md:mb-5 subtitle-size">
                                    Utilisation de technologies qui n&apos;ont plus besoin de
                                    prouver leur efficacité
                                </h4>
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
            </div>
        </section>
    );
};

export default Service;
