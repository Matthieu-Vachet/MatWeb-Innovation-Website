"use client";

import Image from "next/image";

import { FaGithub, FaGlobe } from "react-icons/fa6";

import { Features } from "@/components/Feature";
import { PinContainer } from "../ui/PinContainer";
import Particles from "../ui/Particle";

import { projets } from "@/data/ProjetsData";
import { title } from "process";

const Projets = () => {
    return (
        <section
            id="mes-projets"
            className="relative bg-gradient-to-b from-black-100 via-purple-500/15 to-black-100"
        >
            <Features color="69, 50, 119" colorDark="69, 50, 119">
                <Features.Main
                    title="Mes réalisations"
                    text={
                        <>
                            Une petite partie de{" "}
                            <span className="text-purple uppercase font-bold">mes projets</span>
                        </>
                    }
                />
            </Features>
            <div className="relative">
                <Particles
                    className="hidden md:block absolute inset-0"
                    quantity={200}
                    ease={80}
                    color={"#fff"}
                    refresh
                />
                <div className="flex flex-wrap items-center justify-center gap-14 md:gap-32 lg:gap-16 max-w-[100vw] md:max-w-[95vw] lg:max-w-[95vw] imac:max-w-[75vw] mx-auto -mt-10 md:-mt-0">
                    {projets.map((item) => (
                        <div
                            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                            key={item.title + item.id}
                        >
                            <PinContainer title={item.title} href={item.link}>
                                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-auto mb-10 rounded-xl   ">
                                    <div
                                        className="relative w-full h-full overflow-hidden lg:rounded-sm opacity-50  "
                                        style={{ backgroundColor: "#13162D" }}
                                    >
                                        <Image
                                            src="/background/background-projets.webp"
                                            alt="Image de fond photo des projets"
                                            width={400}
                                            height={250}
                                            loading="lazy"
                                        />
                                    </div>
                                    <Image
                                        src={item.img}
                                        alt={item.alt}
                                        width={350}
                                        height={230}
                                        loading="lazy"
                                        className="z-10 absolute bottom-0 rounded-sm"
                                    />
                                </div>
                                <h3 className="font-bold composant-title-size  line-clamp-1">
                                    {item.title}
                                </h3>
                                <p
                                    className="text-md font-light text-white-100"
                                    style={{
                                        margin: "0.5vh 0",
                                    }}
                                >
                                    {item.des}
                                </p>

                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        {item.iconLists.map((icon, index) => (
                                            <div
                                                key={index}
                                                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                style={{
                                                    transform: `translateX(-${5 * index + 2}px)`,
                                                }}
                                            >
                                                <Image
                                                    src={icon}
                                                    alt="icon5"
                                                    width={40}
                                                    height={40}
                                                    loading="lazy"
                                                    className="p-2"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-center items-center text-center">
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            title="Voir le projet"
                                            rel="noopener noreferrer"
                                            className="flex justify-center items-center text-center gap-2"
                                            aria-label="Lien vers le projet"
                                        >
                                            <FaGithub
                                                className="ms-2"
                                                color="white"
                                                fontSize={30}
                                            />
                                            <FaGlobe className="ms-2" color="white" fontSize={30} />
                                        </a>
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projets;
