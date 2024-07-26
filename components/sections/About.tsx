"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import { Features } from "@/components/Feature";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import GaugeCircle from "@/components/ui/GaugeCircle";
import AnimatedElement from "../ui/AnimatedElement";
import MarqueeHorizontal from "../ui/MarqueeHorizontal";
import Particles from "../ui/Particle";

const About = () => {
    const [hovered, setHovered] = React.useState(false);

    const valueYears = 2;
    const valueProjets = 8;
    const valueClients = 2;

    return (
        <section
            id="a-propos-de-moi"
            className="relative bg-gradient-to-b from-black-100 via-purple-600/15 to-black-100 mb-[5rem] md:mb-[20rem]"
        >
            <Features color="79, 57, 136" colorDark="79, 57, 136">
                <Features.Main title="À propos de moi" />
            </Features>
            <div className="relative">
                <Particles
                    className="absolute inset-0"
                    quantity={200}
                    ease={80}
                    color={"#fff"}
                    refresh
                />
                <div className=" max-w-[90vw] imac:max-w-[70vw] flex flex-col items-center justify-center mx-auto -mt-10 lg:-mt-0">
                    <div
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className="h-auto flex flex-col relative overflow-hidden items-center justify-center w-full mx-auto p-10 md:px-20 border border-white/[0.1] rounded-2xl gap-16 shadow-[0px_5px_30px_5px_rgba(79,57,136,_0.30)] backdrop-blur-sm z-20  "
                    >
                        <div className="flex flex-col  w-full justify-items-start items-start text-left gap-5 Z-20">
                            <AnimatedElement delay={0.4} duration={0.6}>
                                <h2 className="composant-title-size font-bold text-white Z-20">
                                    Un développeur <span className="text-purple">passionné !</span>
                                </h2>
                                <p className="w-full max-w-3xl text-md font-semibold text-white-100 Z-20">
                                    Passionné par l&apos;informatique depuis mon enfance, j&apos;ai
                                    toujours été fasciné par le potentiel illimité de la
                                    technologie. Très tôt, j&apos;ai commencé à explorer le monde de
                                    la programmation, ce qui m&apos;a conduit à une carrière
                                    d&apos;intégrateur web. Pour moi, chaque ligne de code est une
                                    œuvre d&apos;art, une opportunité de créer et d&apos;innover.
                                    Aujourd&apos;hui, en tant que développeur indépendant, je suis
                                    prêt à mettre ma passion et mes compétences au service de vos
                                    projets.
                                </p>
                            </AnimatedElement>
                        </div>
                        <div className="flex flex-col w-full justify-items-end items-end text-right gap-5 Z-20">
                            <AnimatedElement delay={0.5} duration={0.6}>
                                <h2 className="composant-title-size font-bold text-white Z-20">
                                    <span className="text-purple">Mon parcours</span> en
                                    développement
                                </h2>
                                <p className="w-full max-w-3xl text-md font-semibold text-white-100 Z-20">
                                    Mon parcours en développement web a commencé bien avant ma
                                    reconversion professionnelle. Curieux et autodidacte, j&apos;ai
                                    appris les bases de la programmation à travers divers projets
                                    personnels. Depuis que j&apos;ai rejoint le programme
                                    d&apos;intégrateur web chez OpenClassrooms, j&apos;ai approfondi
                                    mes connaissances en HTML, CSS, Sass, JavaScript, et surtout
                                    React. Mon orientation vers les technologies modernes comme
                                    React, Next.js et Tailwind CSS me permet de créer des sites web
                                    dynamiques, réactifs et optimisés, prêts à répondre aux besoins
                                    des utilisateurs modernes.
                                </p>
                            </AnimatedElement>
                        </div>
                        <div className="flex flex-col w-full justify-items-start items-start text-left gap-5 Z-20">
                            <AnimatedElement delay={0.6} duration={0.6}>
                                <h2 className="composant-title-size font-bold text-white Z-20">
                                    Mes <span className="text-purple">compétences</span> et{" "}
                                    <span className="text-purple">projets</span>
                                </h2>
                                <p className="w-full max-w-3xl text-md font-semibold text-white-100 Z-20">
                                    Au cours de ma formation et de mes expériences, j&apos;ai
                                    développé un large éventail de compétences techniques et
                                    créatives. Je maîtrise les langages HTML, CSS, et Sass pour le
                                    style, ainsi que JavaScript, React, Next.js, et Tailwind CSS
                                    pour créer des interfaces utilisateur interactives et
                                    performantes. Travaillant désormais en tant que développeur
                                    indépendant, j&apos;ai eu l&apos;occasion de mener à bien
                                    plusieurs projets variés, allant de simples pages web à des
                                    applications complexes. Mon objectif est de continuer à
                                    améliorer mes compétences tout en contribuant à des projets
                                    innovants et de qualité.
                                </p>
                            </AnimatedElement>
                        </div>
                        <AnimatePresence>
                            {hovered && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full w-full absolute inset-0 opacity-10"
                                >
                                    <CanvasRevealEffect
                                        animationSpeed={1.5}
                                        containerClassName="bg-transparent"
                                        colors={[
                                            [59, 130, 246],
                                            [139, 92, 246],
                                        ]}
                                        opacities={[0, 0.1, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 0.8]}
                                        dotSize={1}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col md:flex-row flex-wrap pt-14 md:pt-24 imac:pt-32 gap-20 imac:gap-40">
                        <div className="flex flex-col justify-center items-center">
                            <GaugeCircle
                                max={100}
                                min={0}
                                value={valueYears}
                                gaugePrimaryColor="#905BF4"
                                gaugeSecondaryColor="rgba(17, 25, 40, 0.75)"
                            />
                            <p className="pt-5 composant-title-size uppercase">
                                Années d&apos;expérience
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <GaugeCircle
                                max={100}
                                min={0}
                                value={valueProjets}
                                gaugePrimaryColor="#905BF4"
                                gaugeSecondaryColor="rgba(17, 25, 40, 0.75)"
                            />
                            <p className="pt-5 composant-title-size uppercase">Projets réalisés</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <GaugeCircle
                                max={100}
                                min={0}
                                value={valueClients}
                                gaugePrimaryColor="#905BF4"
                                gaugeSecondaryColor="rgba(17, 25, 40, 0.75)"
                            />
                            <p className="pt-5 composant-title-size uppercase">
                                Clients satisfaits
                            </p>
                        </div>
                    </div>
                    <AnimatedElement delay={0.4} duration={0.6}>
                        <h3 className="w-[95vw] md:w-full text-gradient subtitle-size translate-y-[40%] text-center [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0 mt-10 lg:mt-36 mb-24 md:mb-36 lg:mb-28 flex flex-col">
                            Témoignages de mes clients satisfaits <br />
                            <span className="text-purple subtitle text-xl md:text-2xl">
                                Je suis fier des relations que j&apos;ai établies avec mes clients.
                                Voici ce qu&apos;ils disent de mon travail et de la qualité de mes
                                services.
                            </span>
                        </h3>
                    </AnimatedElement>
                    <div>
                        <MarqueeHorizontal />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
