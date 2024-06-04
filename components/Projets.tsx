import React from "react";
import { PinContainer } from "./ui/Pin";
import { FaGithub, FaGlobe } from "react-icons/fa6";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

import { projets } from "@/data";

export const Projets = () => {
    return (
        <div
            id="Projets"
            className="bg-black-100 max-w-[90vw] lg:max-w-[80vw] imac:max-w-[75vw] flex flex-col items-center justify-center mx-auto"
        >
            <div className="heading heading-bottom-spacing">
                <TextGenerateEffect className="text-center " words="Une partie de mes projets" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-24 ">
                {projets.map((item) => (
                    <div
                        className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                        key={item.id}
                    >
                        <PinContainer title={item.title} href={item.link}>
                            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-auto mb-10 rounded-xl">
                                <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                    style={{ backgroundColor: "#13162D" }}
                                >
                                    <Image
                                        src="/bg.png"
                                        alt="Image de fond photo des projets"
                                        width={552}
                                        height={330}
                                    />
                                </div>
                                <Image
                                    src={item.img}
                                    alt="cover"
                                    width={350}
                                    height={350}
                                    className="z-10 absolute bottom-0 rounded-xl"
                                />
                            </div>
                            <h1 className="font-bold lg:text-1xl text-xl  line-clamp-1">
                                {item.title}
                            </h1>
                            <p
                                className="text-sm lg:text-lg font-light text-white-100"
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
                                                width={100}
                                                height={100}
                                                className="p-2"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center items-center text-center">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex justify-center items-center text-center gap-2 "
                                    >
                                        <FaGithub className="ms-2" color="white" fontSize={30} />
                                        <FaGlobe className="ms-2" color="white" fontSize={30} />
                                    </a>
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projets;
