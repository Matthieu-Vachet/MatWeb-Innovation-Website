"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { HoverEffect } from "./ui/CardsHoverEffect";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Processus, items, slugs } from "@/data";
import IconCloud from "@/components/ui/IconCloud";
import { BorderBeam } from "./ui/BorderBeam";
import AnimatedElement from "./ui/AnimatedElements";
import WordRotate from "./ui/WordRotate";

const Service = () => {
    return (
        <section
            id="Service"
            className="bg-gradient-to-b from-black-100 to-purple-100/[0.5]  flex flex-col items-center justify-center mx-auto px-4"
        >
            <div className="pt-[10rem] max-w-[90vw] imac:max-w-[70vw]">
                <h1 className="relative heading text-white heading-bottom-spacing z-20">
                    <TextGenerateEffect
                        className="text-center"
                        words="Des prestations adaptées à vos besoins"
                    />
                </h1>
                <AnimatedElement delay={0}>
                    <BentoGrid className="relative dark:bg-white-100/[0.05] w-full rounded-xl border border-white/[0.1] p-5 z-100 shadow-[0px_5px_50px_5px_rgba(165,_39,_255,_0.1)]">
                        <BorderBeam size={250} duration={12} delay={9} />
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
                <h2 className=" heading flex flex-col text-center text-white text-bold text-2xl md:text-3xl lg:text-4xl heading-bottom-spacing ">
                    Processus de Conception et Développement <br />
                    <span className="text-purple text-xl md:text-3xl pt-1">
                        Une Tasse de Café et Six Étapes
                    </span>
                </h2>
                <div className="max-w-[90vw] mx-auto">
                    <HoverEffect items={Processus} />
                </div>
                <div className="relative flex items-center justify-center lg:justify-between overflow-hidden bg-transparent gap-1  flex-wrap heading-bottom-spacing  ">
                    <div className="flex max-w-[90vw] lg:max-w-[50%] flex-col items-center gap-5">
                        <h2 className="heading text-center text-white text-bold text-2xl md:text-3xl lg:text-4xl">
                            Des technologie qui n&apos;ont plus à faire leurs preuves ...
                        </h2>
                        <WordRotate
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-purple"
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
            </div>
        </section>
    );
};

export default Service;
