"use strict";

import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";

import { PiNotePencilFill, PiCoffeeBold, PiPencil, PiCodeBold } from "react-icons/pi";
import { BsSendCheck } from "react-icons/bs";
import { SiTestinglibrary } from "react-icons/si";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        subtitle: string;
        description: string;
        link?: string;
        icon?: any;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3", className)}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === index && (
                            <motion.div
                                className="absolute inset-0 h-full w-full bg-purple/[0.04] block rounded-3xl "
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
                        <CardIcons className="absolute top-0 right-0">
                            {item.icon === "PiNotePencilFill" && (
                                <PiNotePencilFill
                                    className="text-[4rem] md:text-[5rem] rotate-12 text-white-100 z-0 opacity-15"
                                    title="Image d'un crayon pour désigner la carte design"
                                    aria-label="Image d'un crayon pour désigner la carte design"
                                />
                            )}
                            {item.icon === "PiCoffeeBold" && (
                                <PiCoffeeBold
                                    className="text-[4rem] md:text-[5rem] rotate-12 text-white-100 z-0 opacity-15"
                                    title="Image tasse de cafe pour la carte échange"
                                    aria-label="Image tasse de cafe pour la carte échange"
                                />
                            )}
                            {item.icon === "PiPencil" && (
                                <PiPencil
                                    className="text-[4rem] md:text-[5rem] rotate-12 text-white-100 z-0 opacity-15"
                                    title="Image crayon pour la carte analyse"
                                    aria-label="Image crayon pour la carte analyse"
                                />
                            )}
                            {item.icon === "PiCodeBold" && (
                                <PiCodeBold
                                    className="text-[4rem] md:text-[5rem] rotate-12 text-white-100 z-0 opacity-15"
                                    title="Image de code pour la carte code"
                                    aria-label="Image de code pour la carte code"
                                />
                            )}
                            {item.icon === "BsSendCheck" && (
                                <BsSendCheck
                                    className="text-[4rem] md:text-[5rem] rotate-12 text-white-100 z-0 opacity-15"
                                    title="Image d'une enveloppe pour la carte livraison"
                                    aria-label="Image d'une enveloppe pour la carte livraison"
                                />
                            )}
                            {item.icon === "SiTestinglibrary" && (
                                <SiTestinglibrary
                                    className="text-[4rem] md:text-[5rem] rotate-12 text-white z-0 opacity-15"
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
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "flex rounded-2xl h-full w-full p-3 overflow-hidden bg-glass-gradient backdrop-blur-sm border border-white/[0.15] group-hover:border-white-200/50 relative z-30  shadow-[0px_5px_50px_0px_rgba(49,35,85,_0.70)]",
                className,
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p className={cn("text-purple text-4xl font-normal tracking-wide", className)}>
            {children}
        </p>
    );
};

export const CardIcons = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return <div className={cn("flex justify-center", className)}>{children}</div>;
};

export const CardSubtitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                " text-center text-white uppercase composant-title-size font-bold tracking-wide mt-4",
                className,
            )}
        >
            {children}
        </p>
    );
};

export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p className={cn("mt-6 text-white/60 tracking-wide leading-relaxed text-md", className)}>
            {children}
        </p>
    );
};
