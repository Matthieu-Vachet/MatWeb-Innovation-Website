import React from "react";
import { CompetencesList, iconMap, Competence } from "@/data";
import { Button } from "./ui/MovingBorders";
import AnimatedTitle from "./ui/AnimatedTitle";

const Competences = () => {
    return (
        <div id="Competences" className="py-20 w-full h-full">
            <div className="heading mb-20 ">
                <AnimatedTitle title="Experience" />
            </div>

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {CompetencesList.map((card: Competence) => (
                    <Button
                        key={card.id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <div className="lg:ms-5">
                                <h1 className="text-start text-2xl font-bold uppercase">
                                    {card.title}
                                </h1>
                                <p className="text-start text-white-100 mt-3 font-semibold">
                                    {card.desc}
                                </p>
                                <div className="flex flex-wrap mt-4">
                                    {card.skills.map((skill, index) => {
                                        const IconComponent = iconMap[skill.img];
                                        return (
                                            <div
                                                key={index}
                                                className="flex items-center  mr-4 mb-2 border border-neutral-200 dark:border-slate-800 rounded-lg py-2 px-3 hover:dark:border-white-100 hover:scale-110 transition-all"
                                            >
                                                {IconComponent ? (
                                                    <IconComponent
                                                        className="w-10 h-10 mr-2 text-gray"
                                                        aria-label={skill.alt}
                                                    />
                                                ) : (
                                                    <span
                                                        className="w-10 h-10 mr-2 "
                                                        aria-label={skill.alt}
                                                    >
                                                        ?
                                                    </span>
                                                )}
                                                <span className="text-white">{skill.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Competences;
