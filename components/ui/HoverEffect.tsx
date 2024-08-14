"use strict";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import {
    CardDescriptionProps,
    CardIconsProps,
    CardProps,
    CardSubtitleProps,
    CardTitleProps,
    HoverEffectProps,
} from "@/data/TypesComponents";
import { PiNotePencilFill, PiCoffeeBold, PiPencil, PiCodeBold } from "react-icons/pi";
import { BsSendCheck } from "react-icons/bs";
import { SiTestinglibrary } from "react-icons/si";
import Particles from "./Particle";

export const HoverEffect = ({ items, className }: HoverEffectProps) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "relative z-30 max-w-[90vw] mx-auto md:border md:border-white-100/10 md:rounded-3xl md:shadow-[0px_5px_30px_5px_rgba(79,57,136,_0.30)]",
                className,
            )}
        >
            <Particles className="hidden md:block absolute inset-0 overflow-hidden" />
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:snap-none space-x-4 md:space-x-0">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="relative group block p-2 h-full w-80 md:w-full shrink-0 "
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <motion.div
                                    className="hidden absolute inset-0 h-full w-full bg-purple/[0.04] md:block rounded-3xl "
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <Card>
                            <CardTitle>{item.title}</CardTitle>
                            <CardIcons className="absolute top-0 right-0 ">
                                {item.icon === "PiNotePencilFill" && (
                                    <PiNotePencilFill
                                        className="text-[3rem] md:text-[5rem] rotate-12 text-white-100 z-0 opacity-15"
                                        title="Image d'un crayon pour désigner la carte design"
                                        aria-label="Image d'un crayon pour désigner la carte design"
                                    />
                                )}
                                {item.icon === "PiCoffeeBold" && (
                                    <PiCoffeeBold
                                        className="text-[3rem] md:text-[5rem] rotate-12 text-white-100 z-0 opacity-15"
                                        title="Image tasse de cafe pour la carte échange"
                                        aria-label="Image tasse de cafe pour la carte échange"
                                    />
                                )}
                                {item.icon === "PiPencil" && (
                                    <PiPencil
                                        className="text-[3rem] md:text-[5rem] rotate-12 text-white-100 z-0 opacity-15"
                                        title="Image crayon pour la carte analyse"
                                        aria-label="Image crayon pour la carte analyse"
                                    />
                                )}
                                {item.icon === "PiCodeBold" && (
                                    <PiCodeBold
                                        className="text-[3rem] md:text-[5rem] rotate-12 text-white-100 z-0 opacity-15"
                                        title="Image de code pour la carte code"
                                        aria-label="Image de code pour la carte code"
                                    />
                                )}
                                {item.icon === "BsSendCheck" && (
                                    <BsSendCheck
                                        className="text-[3rem] md:text-[5rem] rotate-12 text-white-100 z-0 opacity-15"
                                        title="Image d'une enveloppe pour la carte livraison"
                                        aria-label="Image d'une enveloppe pour la carte livraison"
                                    />
                                )}
                                {item.icon === "SiTestinglibrary" && (
                                    <SiTestinglibrary
                                        className="text-[3rem] md:text-[5rem] rotate-12 text-white z-0 opacity-15"
                                        title="Image de React testing library pour la carte test"
                                        aria-label="Image de React testing library pour la carte test"
                                    />
                                )}
                            </CardIcons>
                            <CardSubtitle>{item.subtitle}</CardSubtitle>
                            <CardDescription>{item.description}</CardDescription>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Card = ({ className, children }: CardProps) => {
    return (
        <div
            className={cn(
                "flex flex-col rounded-2xl  min-h-[300px] h-full w-full p-6 overflow-visible backdrop-blur-sm md:backdrop-blur-none border border-white-100/15 md:border-none group-hover:border-white-100/20 relative z-30 shadow-lg md:shadow-none",
                className,
            )}
        >
            <div className="relative z-50 flex-grow">
                <div className="md:p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({ className, children }: CardTitleProps) => {
    return (
        <p className={cn("text-purple text-3xl md:text-4xl font-normal tracking-wide", className)}>
            {children}
        </p>
    );
};

export const CardIcons = ({ className, children }: CardIconsProps) => {
    return <div className={cn("flex justify-center", className)}>{children}</div>;
};

export const CardSubtitle = ({ className, children }: CardSubtitleProps) => {
    return (
        <p
            className={cn(
                "text-center text-white uppercase composant-title-size font-bold tracking-wide mt-2 md:mt-4",
                className,
            )}
        >
            {children}
        </p>
    );
};

export const CardDescription = ({ className, children }: CardDescriptionProps) => {
    return (
        <p
            className={cn(
                "mt-3 md:mt-6 text-white/60 tracking-wide leading-relaxed text-md",
                className,
            )}
        >
            {children}
        </p>
    );
};
