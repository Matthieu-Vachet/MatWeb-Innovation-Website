"use client";
import React from "react";
import { BoxReveal } from "./ui/BoxReveal";
import { ContactForm } from "./ui/ContactForm";
import { Features } from "./feature";
import { IoIosPin } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMailSharp, IoTime, IoPerson } from "react-icons/io5";

const Contact = () => {
    return (
        <section id="Contact" className="bg-black-100">
            <Features color="40,87,255" colorDark="48,58,117">
                <Features.Main
                    title="Contactez-moi"
                    text={
                        <p>
                            Une idée ? Un Projet ? N&apos;hésitez pas à{" "}
                            <span className="text-blue font-bold uppercase">demander un devis</span>{" "}
                            <span className="font-bold uppercase text-white underline">
                                GRATUIT
                            </span>{" "}
                            !
                        </p>
                    }
                />
            </Features>
            {/* Titre Tablette / Desktop */}
            <div className="flex mt-10">
                <div className="flex flex-wrap flex-col justify-center items-center md:flex-row w-full md:px-6 z-40 gap-10 md:gap-0 max-w-[95vw] lg:max-w-[70vw] imac:max-w-[60vw] mx-auto px-4 -mt-[10rem] md:-mt-[17rem]">
                    {/* Conteneur pour le BoxReveal */}
                    <div className="w-full md:w-[50%] flex flex-col z-50 lg:pl-10">
                        <BoxReveal boxColor={"#6062e8"} duration={0.5}>
                            <p className="text-3xl font-semibold lg:text-5xl">
                                Contact<span className="text-[#6062e8]">.</span>
                            </p>
                        </BoxReveal>
                        <BoxReveal boxColor={"#6062e8"} duration={0.5}>
                            <div>
                                <h2 className="flex items-center gap-2 mt-[1.5rem] lg:mt-[2rem] text-xl lg:text-2xl font-normal text-white-100">
                                    <IoIosPin />
                                    Adresse :
                                </h2>
                                <p className="text-[#6062e8] text-lg lg:text-xl">
                                    10, Rue de Marle 02120 Puisieux et Clanlieu
                                </p>
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor={"#6062e8"} duration={0.5}>
                            <div>
                                <h2 className="flex items-center gap-2 mt-[1rem] text-xl lg:text-2xl text-white-100 font-normal">
                                    <BsFillTelephoneFill />
                                    Téléphone
                                </h2>
                                <p className="text-[#6062e8] text-lg lg:text-xl ">
                                    (+33)7.44.89.08.31
                                </p>
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor={"#6062e8"} duration={0.5}>
                            <div>
                                <h2 className="flex items-center gap-2 mt-[1rem] text-xl lg:text-2xl font-normal text-white-100">
                                    <IoMailSharp />
                                    E-Mail
                                </h2>
                                <p className="text-[#6062e8] text-lg lg:text-xl">
                                    matweb_innovation@icloud.com{" "}
                                </p>
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor={"#6062e8"} duration={0.5}>
                            <div>
                                <h2 className="flex items-center gap-2 mt-[1rem] text-xl lg:text-2xl font-normal text-white-100">
                                    <IoTime />
                                    Horaires
                                </h2>
                                <p className="text-[#6062e8] text-lg lg:text-xl">
                                    Lundi - Vendredi
                                </p>
                                <p className="text-[#6062e8] text-lg lg:text-xl">09h00 - 18h00</p>
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor={"#6062e8"} duration={0.5}>
                            <div>
                                <h2 className=" flex items-center gap-2 mt-[1rem] text-xl lg:text-2xl font-normal text-white-100">
                                    <IoPerson />
                                    S.I.R.E.N
                                </h2>
                                <p className="text-[#6062e8] text-lg lg:text-xl">544 456 000</p>
                            </div>
                        </BoxReveal>
                    </div>
                    <div className="w-full md:w-[50%] z-50 sm:px-0">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
