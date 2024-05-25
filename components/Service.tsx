"use client";
import React from "react";
import { StickyScroll } from "../components/ui/StickyScrollReveal";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { GlobeConfig, GlobeDatas } from "../utils/GlobeConfig";

const World = dynamic(() => import("../components/ui/Globe").then((m) => m.World), {
    ssr: false,
});

const ServiceContent = [
    {
        title: "Gestion de projet web",
        description:
            "Site vitrine, Évènementiel, E-commerce, Application Web, Landing-page, Portfolio.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/gest.svg"
                    width={500}
                    height={500}
                    className="object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Intégration WEB",
        description: "Intégration HTML/CSS/REACT respectueuses des standards du Web.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/int.svg"
                    width={500}
                    height={500}
                    className="object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Référencement Naturel",
        description:
            "Affichage sémantique des informations, des pages propres pour un référencement optimal sur le Web.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/seo.svg"
                    width={500}
                    height={500}
                    className=" object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Responsive Design",
        description: "Compatible tous supports, mobile, tablet, desktop.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/resp.svg"
                    width={500}
                    height={500}
                    className=" object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Dynamisme des pages",
        description:
            "Des pages dynamiques et interactives non intrusives pour embellir votre projet.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/dyna.svg"
                    width={500}
                    height={500}
                    className=" object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
];

const Service = () => {
    return (
        <section id="Service" className="bg-black-100 pt-[15rem] ">
            <h1 className="relative heading text-white pb-10 z-20   ">
                Des prestations adaptées à <span className="text-purple">vos besoins</span>
            </h1>
            <div className="flex absolute w-full h-[30rem] md:h-[50rem] lg:h-[60rem] top-[72rem] md:top-[65rem] lg:top-[60rem] xl:top-[55rem] 2xl:top-[50rem]  right-1 z-0">
                <World data={GlobeDatas} globeConfig={GlobeConfig} />
            </div>

            <div className="p-5">
                <StickyScroll content={ServiceContent} />
            </div>
        </section>
    );
};

export default Service;
