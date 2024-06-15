"use client";

import React from "react";

import { CompetencesList, iconMap, Competence } from "@/data/Competences-data";

import { Button } from "@/components/ui/MovingBorders";
import { Features } from "@/components/feature";
import AnimatedElement from "../ui/AnimateElements";

const Competences = () => {
    return (
        <section
            id="Competences"
            className="bg-gradient-to-b from-black-100 via-purple-400/15 to-black-100 "
        >
            <Features color="120, 89, 171" colorDark="59, 42, 102">
                <Features.Main
                    title="Mes compétences"
                    text={
                        <p>
                            à votre <span className="text-purple uppercase font-bold">service</span>
                        </p>
                    }
                />
            </Features>
            <div className="max-w-[90vw] imac:max-w-[70vw] flex flex-col items-center justify-center mx-auto -mt-[8rem] md:-mt-[15rem]">
                <AnimatedElement delay={0.4} duration={0.6}>
                    <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-10">
                        {CompetencesList.map((card: Competence) => (
                            <Button
                                key={card.id}
                                duration={Math.floor(Math.random() * 10000) + 10000}
                                borderRadius="1.75rem"
                                style={{
                                    backgroundColor:
                                        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                                    borderRadius: `calc(1.75rem* 0.96)`,
                                }}
                                className="flex-1 text-white border-slate-800"
                            >
                                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                                    <div className="lg:ms-5">
                                        <h1 className="text-start text-2xl font-bold uppercase">
                                            {card.title}
                                        </h1>
                                        <p className="text-start text-white-100 mt-3 font-semibold text-sm md:text-sm lg:text-[1rem] opacity-80">
                                            {card.desc}
                                        </p>
                                        <div className="flex flex-wrap mt-3">
                                            {card.skills.map((skill, index) => {
                                                const IconComponent = iconMap[skill.img];
                                                return (
                                                    <div
                                                        key={index}
                                                        className="flex items-center mr-2 mb-2 border border-slate-800 rounded-lg py-1 px-2 hover:border-white  hover:scale-110 transition-all"
                                                    >
                                                        {IconComponent ? (
                                                            <IconComponent
                                                                className="w-5 h-5 mr-1 text-white hover:text-white-100"
                                                                aria-label={skill.alt}
                                                            />
                                                        ) : (
                                                            <span
                                                                className="w-5 h-5 mr-1"
                                                                aria-label={skill.alt}
                                                            >
                                                                ?
                                                            </span>
                                                        )}
                                                        <span>{skill.name}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </Button>
                        ))}
                    </div>
                </AnimatedElement>
            </div>
        </section>
    );
};

export default Competences;
