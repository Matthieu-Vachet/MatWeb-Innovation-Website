"use client";

import React from "react";
import dynamic from "next/dynamic";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { GlobeConfig, GlobeDatas } from "../utils/GlobeConfig";
import { HoverEffect } from "./ui/CardsHoverEffect";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Processus, items, slugs } from "@/data";
import IconCloud from "@/components/ui/IconCloud";

const World = dynamic(() => import("../components/ui/Globe").then((m) => m.World), {
    ssr: false,
});

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const Service = () => {
    return (
        <section id="Service" className="bg-black-100 pt-[15rem] ">
            <h1 className="relative heading text-white pb-10 z-20   ">
                <TextGenerateEffect
                    className="text-center "
                    words="Des prestations adaptées à vos besoins"
                />
            </h1>
            <div className="flex absolute w-full h-[30rem] md:h-[50rem] lg:h-[60rem] top-[66rem] md:top-[60rem] lg:top-[54rem] xl:top-[55rem] 2xl:top-[50rem]  right-1 z-0">
                <World data={GlobeDatas} globeConfig={GlobeConfig} />
            </div>
            <BentoGrid className="relative max-w-5xl mx-auto md:auto-rows-[20rem] z-50">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>
            <h2 className="flex flex-col text-center text-white text-bold text-2xl md:text-4xl pb-10 pt-14 ">
                Processus de Conception et Développement <br />
                <span className="text-purple text-xl md:text-3xl">
                    Une Tasse de Café et Six Étapes
                </span>
            </h2>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={Processus} />
            </div>
            <div className="relative flex items-center justify-between overflow-hidden bg-transparent pt-8 gap-1 lg:px-20 pb-30 flex-wrap ">
                <div className="flex w-full lg:max-w-[50%] ">
                    <TextGenerateEffect
                        className="text-center lg:text-start text-4xl"
                        words="Des technologie qui n'ont plus à faire leurs preuves ..."
                    />
                </div>
                <div className="flex lg:max-w-[40%]">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div>
        </section>
    );
};

export default Service;
