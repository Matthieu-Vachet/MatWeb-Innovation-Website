"use client";

import React from "react";

import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { HoverEffect } from "@/components/ui/CardsHoverEffect";
import IconCloud from "@/components/ui/IconCloud";
import WordRotate from "@/components/ui/WordRotate";
import { Features } from "@/components/feature";
import AnimatedElement from "../ui/AnimateElements";

import { Processus, items, slugs } from "@/data/Services-data";

const Service = () => {
    return (
        <section
            id="Service"
            className="bg-gradient-to-b from-black-100 via-purple-300/15 to-black-100 pt-0  md:pt-[10rem]"
        >
            <Features color="49, 35, 85" colorDark="49, 35, 85">
                <Features.Main
                    title="Service"
                    text={
                        <>
                            Des prestations adaptées à{" "}
                            <span className="text-purple uppercase font-bold">vos besoins</span>
                        </>
                    }
                />
            </Features>
            <div className="flex flex-col items-center justify-center mx-auto px-4 max-w-[100vw] imac:max-w-[70vw] -mt-[8rem] md:-mt-[15rem]">
                <AnimatedElement className="" delay={0.4} duration={0.6}>
                    <BentoGrid className="relative w-full z-100 ">
                        {items.map((item, i) => (
                            <BentoGridItem
                                id={item.id}
                                key={i}
                                title={item.title}
                                description={item.description}
                                className={item.className}
                                icon={item.icon}
                                img={item.img}
                                imgClassName={item.imgClassName}
                                titleClassName={item.titleClassName}
                                spareImg={item.spareImg}
                            />
                        ))}
                    </BentoGrid>
                </AnimatedElement>
                <AnimatedElement delay={0.4} duration={0.6}>
                    <h2 className=" w-full text-gradient translate-y-[40%] text-center text-3xl [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:text-5xl [.is-visible_&]:translate-y-0 mt-20 lg:mt-36 mb-28 md:mb-40 flex flex-col">
                        Processus de Conception et Développement <br />
                        <span className="text-purple subtitle">
                            Une Tasse de Café et Six Étapes
                        </span>
                    </h2>
                </AnimatedElement>
                <div className="max-w-[90vw] mx-auto">
                    <div>
                        <HoverEffect items={Processus} />
                    </div>
                </div>
                <AnimatedElement delay={0.4} duration={0.6}>
                    <div className="relative flex items-center justify-center lg:justify-between overflow-hidden bg-transparent gap-1  flex-wrap mt-20 lg:mt-36  ">
                        <div className="flex max-w-[90vw] lg:max-w-[50%] flex-col items-center gap-5">
                            <h2 className="text-gradient translate-y-[40%] text-center text-2xl [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:text-5xl [.is-visible_&]:translate-y-0 mb-8 md:mb-5 ">
                                Des technologie qui n&apos;ont plus à faire leurs preuves ...
                            </h2>
                            <WordRotate
                                className="subtitle text-purple font-semibold"
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
                        <div className="flex md:max-w-[50%] md:items-center md:mx-auto lg:max-w-[40%]">
                            <IconCloud iconSlugs={slugs} />
                        </div>
                    </div>
                </AnimatedElement>
            </div>
        </section>
    );
};

export default Service;
