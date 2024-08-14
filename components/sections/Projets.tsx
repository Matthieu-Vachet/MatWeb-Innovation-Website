"use client";
import Image from "next/image";
import { Features } from "@/components/Feature";
import Particles from "../ui/Particle";
import BlurIn from "../ui/BlurIn";
import { AppleCardsCarouselDemo } from "../ui/AppleCardsCarouselDemo";

const Projets = () => {
    return (
        <section
            id="mes-projets"
            className="relative bg-gradient-to-b from-black-100 via-purple-500/15 to-black-100"
        >
            <Features color="30, 11, 67" colorDark="30, 11, 67">
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
                <div className="flex flex-wrap items-center justify-center gap-14 md:gap-32 lg:gap-16 max-w-[100vw] md:max-w-[95vw] lg:max-w-[95vw]  mx-auto -mt-5 md:mt-5 lg:mt-12">
                    <AppleCardsCarouselDemo />
                </div>
            </div>
        </section>
    );
};

export default Projets;
