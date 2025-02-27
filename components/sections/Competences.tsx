"use client";
import { Features } from "@/components/Feature";
import { Button } from "@/components/ui/MovingBorder";
import { CompetencesList, iconMap } from "@/data/Constants";
import { Competence } from "@/data/TypesDatas";

const Competences = () => {
    return (
        <section
            id="mes-competences"
            className=" relative bg-gradient-to-b from-black-100 via-purple-400/15 to-black-100"
        >
            <Features color="79, 57, 136" colorDark="79, 57, 136">
                <Features.Main
                    title="Mes compétences"
                    text={
                        <>
                            Mon panel de compétences pour des sites web à la{" "}
                            <span className="text-purple uppercase font-bold">
                                pointe de la technologie
                            </span>
                        </>
                    }
                />
            </Features>
            <div className="relative">
                <div className="max-w-[95vw] imac:max-w-[70vw] flex flex-col items-center justify-center mx-auto -mt-10 lg:-mt-0">
                    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-5 lg:gap-10">
                        {CompetencesList.map((card: Competence) => (
                            <Button
                                as="div"
                                key={card.id}
                                duration={Math.floor(Math.random() * 10000) + 10000}
                                borderRadius="1.75rem"
                                style={{
                                    borderRadius: `calc(1.75rem* 0.96)`,
                                }}
                                className="flex-1 text-white border-slate-800"
                            >
                                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                                    <div className="lg:ms-5">
                                        <h1 className="text-center composant-title-size font-bold uppercase">
                                            {card.title}
                                        </h1>
                                        <p className="text-start text-white-100 mt-3 font-semibold text-md opacity-80">
                                            {card.desc}
                                        </p>
                                        <div className="flex flex-wrap mt-5 justify-center items-center">
                                            {card.skills.map((skill) => {
                                                const IconComponent = iconMap[skill.img];
                                                return (
                                                    <div
                                                        key={skill.img}
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
                                                        <span className="text-md">
                                                            {skill.name}
                                                        </span>
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
            </div>
        </section>
    );
};

export default Competences;
