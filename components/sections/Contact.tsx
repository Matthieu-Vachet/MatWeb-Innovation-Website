"use client";

import React from "react";

import { BoxReveal } from "@/components/ui/BoxReveal";
import { ContactForm } from "@/components/ContactForm";
import { Features } from "@/components/feature";

import { IoIosPin } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMailSharp, IoTime, IoPerson } from "react-icons/io5";

const Contact = () => {
    return (
        <section
            id="Contact"
            className="bg-gradient-to-b from-black-100 via-blue-100/15 to-black-100"
        >
            <Features color="40,87,255" colorDark="48,58,117">
                <Features.Main
                    title="Contactez-moi"
                    text={
                        <>
                            Une idée ? Un Projet ? N&apos;hésitez pas à{" "}
                            <span className="text-blue font-bold uppercase">demander un devis</span>{" "}
                            <span className="font-bold uppercase text-white underline">
                                GRATUIT
                            </span>{" "}
                            !
                        </>
                    }
                />
            </Features>
            {/* Titre Tablette / Desktop */}
            <div className="flex mt-10">
                <div className="flex flex-wrap flex-col justify-center items-center md:flex-row w-full md:px-6 z-40 gap-10 md:gap-0 max-w-[100vw] lg:max-w-[80vw] imac:max-w-[60vw] mx-auto px-4 -mt-16 lg:-mt-10">
                    {/* Conteneur pour le BoxReveal */}
                    <div className="w-full md:w-[50%] flex flex-col z-50 lg:pl-10 gap-5">
                        <BoxReveal boxColor={"#6062e8"} duration={0.5}>
                            <p className="text-3xl font-semibold lg:text-5xl">
                                Contact<span className="text-[#6062e8]">.</span>
                            </p>
                        </BoxReveal>
                        <BoxReveal boxColor={"#6062e8"} duration={0.5}>
                            <div>
                                <p className="flex items-center gap-2 mt-[1.5rem] lg:mt-[2rem] text-xl lg:text-2xl text-white-100">
                                    <IoIosPin />
                                    Adresse :
                                </p>
                                <p className="text-[#6062e8] text-lg lg:text-xl">
                                    10, Rue de Marle 02120 Puisieux et Clanlieu
                                </p>
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor={"#6062e8"} duration={0.5}>
                            <div>
                                <p className="flex items-center gap-2 mt-[1rem] text-xl lg:text-2xl text-white-100">
                                    <BsFillTelephoneFill />
                                    Téléphone
                                </p>
                                <p className="text-[#6062e8] text-lg lg:text-xl ">
                                    (+33)7.44.89.08.31
                                </p>
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor={"#6062e8"} duration={0.5}>
                            <div>
                                <p className="flex items-center gap-2 mt-[1rem] text-xl lg:text-2xl text-white-100">
                                    <IoMailSharp />
                                    E-Mail
                                </p>
                                <p className="text-[#6062e8] text-lg lg:text-xl">
                                    matweb_innovation@icloud.com{" "}
                                </p>
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor={"#6062e8"} duration={0.5}>
                            <div>
                                <p className="flex items-center gap-2 mt-[1rem] text-xl lg:text-2xl text-white-100">
                                    <IoTime />
                                    Horaires
                                </p>
                                <p className="text-[#6062e8] text-lg lg:text-xl">
                                    Lundi - Vendredi
                                </p>
                                <p className="text-[#6062e8] text-lg lg:text-xl">09h00 - 18h00</p>
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor={"#6062e8"} duration={0.5}>
                            <div>
                                <p className=" flex items-center gap-2 mt-[1rem] text-xl lg:text-2xl text-white-100">
                                    <IoPerson />
                                    S.I.R.E.N
                                </p>
                                <p className="text-[#6062e8] text-lg lg:text-xl">544 456 000</p>
                            </div>
                        </BoxReveal>
                    </div>
                    <div id="formulaire-de-contact" className="w-full md:w-[50%] z-50 sm:px-0">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
