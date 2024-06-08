"use client";
import React from "react";
import useWindowSize from "@/hook/useWindowSize";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/Lamp";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BoxReveal } from "./ui/BoxReveal";
import { ContactForm } from "./ui/ContactForm";

const Contact = () => {
    const size = useWindowSize();

    const isDesktop2xl = size.width !== undefined && size.width >= 1700; // Détection pour les grands écrans (lg et plus)

    return (
        <section id="contact" className="bg-black-100  relative">
            {/* Titre Mobile */}
            <div className="flex md:hidden flex-col items-center heading-bottom-spacing">
                <h1 className="heading">
                    <TextGenerateEffect className="uppercase text-center " words="Contactez-moi" />
                </h1>
                <p className="text-white-100 text-xl mt-6 text-center">
                    Une idée ? Un Projet ? N&apos;hésitez pas à{" "}
                    <span className="text-purple uppercase">demander un devis</span>{" "}
                    <span className="font-bold uppercase text-white">GRATUIT</span> !
                </p>
            </div>

            {/* Titre Tablette / Desktop */}
            <div className="mt-20">
                <div className="hidden md:block">
                    <LampContainer>
                        <motion.h1
                            initial={{ opacity: 0.5, y: 100 }}
                            whileInView={{ opacity: 1, y: isDesktop2xl ? -150 : 20 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="text-white text-center text-4xl font-medium text-transparent md:text-7xl"
                        >
                            CONTACTEZ-MOI
                            <p className="text-white-100 text-xl mt-6 max-w-[90vw]">
                                Une idée ? Un Projet ? N&apos;hésitez pas à{" "}
                                <span className="text-purple uppercase">demander un devis</span>{" "}
                                <span className="font-bold uppercase text-white">GRATUIT</span> !
                            </p>
                        </motion.h1>
                    </LampContainer>
                </div>

                <div className="flex flex-wrap flex-col justify-center items-center md:flex-row md:-mt-52 w-full md:px-6 z-[100] gap-10 md:gap-0 max-w-[90vw] lg:max-w-[70vw] imac:max-w-[60vw] mx-auto px-4">
                    {/* Conteneur pour le BoxReveal */}
                    <div className="w-full md:w-[50%] flex flex-col z-50 lg:pl-10">
                        <BoxReveal boxColor={"#905BF4"} duration={0.5}>
                            <p className="text-3xl font-semibold lg:text-5xl">
                                Contact<span className="text-[#905BF4]">.</span>
                            </p>
                        </BoxReveal>
                        <BoxReveal boxColor={"#905BF4"} duration={0.5}>
                            <div>
                                <h2 className="mt-[1.5rem] lg:mt-[2rem] text-xl lg:text-2xl font-semibold text-white-100">
                                    Adresse :
                                </h2>
                                <p className="text-[#905BF4] text-lg lg:text-xl">
                                    10, Rue de Marle 02120 Puisieux et Clanlieu
                                </p>
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor={"#905BF4"} duration={0.5}>
                            <div>
                                <h2 className="mt-[1rem] text-xl lg:text-2xl text-white-100 font-semibold">
                                    Téléphone
                                </h2>
                                <p className="text-[#905BF4] text-lg lg:text-xl ">
                                    (+33)7.44.89.08.31
                                </p>
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor={"#905BF4"} duration={0.5}>
                            <div>
                                <h2 className="mt-[1rem] text-xl lg:text-2xl font-semibold text-white-100">
                                    E-Mail
                                </h2>
                                <p className="text-[#905BF4] text-lg lg:text-xl">
                                    matweb_innovation@icloud.com{" "}
                                </p>
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor={"#905BF4"} duration={0.5}>
                            <div>
                                <h2 className="mt-[1rem] text-xl lg:text-2xl font-semibold text-white-100">
                                    Horaires
                                </h2>
                                <p className="text-[#905BF4] text-lg lg:text-xl">
                                    Lundi - Vendredi
                                </p>
                                <p className="text-[#905BF4] text-lg lg:text-xl">09h00 - 18h00</p>
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor={"#905BF4"} duration={0.5}>
                            <div>
                                <h2 className="mt-[1rem] text-xl lg:text-2xl font-semibold text-white-100">
                                    S.I.R.E.N
                                </h2>
                                <p className="text-[#905BF4] text-lg lg:text-xl">544 456 000</p>
                            </div>
                        </BoxReveal>
                    </div>
                    <div className="w-full md:w-[50%] z-50">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
