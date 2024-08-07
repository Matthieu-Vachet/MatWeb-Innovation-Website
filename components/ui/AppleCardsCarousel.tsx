"use client";
import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import Link from "next/link";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconX } from "@tabler/icons-react";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Separator } from "./Separator";
import { IoPricetagsOutline, IoCalendarNumberOutline, IoCheckmark } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa6";
import MagicButton from "../MagicButton";
import Elypse from "./Elypse";

interface CarouselProps {
    items: JSX.Element[];
    initialScroll?: number;
}

type CardProps = {
    id: number;
    srcMockup: string;
    src1: string;
    src2: string;
    title: string;
    category: string;
    date: number;
    description: string;
    iconLists: string[];
    link: string;
    devList?: string[];
};

export const CarouselContext = createContext<{
    onCardClose: (index: number) => void;
    currentIndex: number;
}>({
    onCardClose: () => {},
    currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const handleCardClose = (index: number) => {
        if (carouselRef.current) {
            const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
            const gap = isMobile() ? 4 : 8;
            const scrollPosition = (cardWidth + gap) * (index + 1);
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    const isMobile = () => {
        return window && window.innerWidth < 768;
    };

    return (
        <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
            <div className="relative w-full">
                <div
                    className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] scrollbar-hide "
                    ref={carouselRef}
                    onScroll={checkScrollability}
                >
                    <div
                        className={cn(
                            "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l",
                        )}
                    ></div>

                    <div
                        className={cn(
                            "flex flex-row justify-start gap-4 pl-4",
                            "max-w-7xl mx-auto",
                        )}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.2 * index,
                                        ease: "easeOut",
                                        once: true,
                                    },
                                }}
                                key={"card" + index}
                                className="last:pr-[5%] md:last:pr-[33%]  rounded-2xl"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end md:justify-center gap-2 mt-10 mr-2 md:mr-0">
                    <button
                        className="relative z-40 h-10 w-10 md:h-14 md:w-14 rounded-full bg-gray-100/50 flex items-center justify-center disabled:opacity-50 hover:scale-105 transition-all duration-300"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                    >
                        <IconArrowNarrowLeft className="h-10 w-10 text-white" />
                    </button>
                    <button
                        className="relative z-40 h-10 w-10 md:h-14 md:w-14 rounded-full bg-gray-100/50 flex items-center justify-center disabled:opacity-50 hover:scale-105 transition-all duration-300"
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                    >
                        <IconArrowNarrowRight className="h-10 w-10 text-white" />
                    </button>
                </div>
            </div>
        </CarouselContext.Provider>
    );
};

export const Card = ({
    card,
    index,
    layout = false,
}: {
    card: CardProps;
    index: number;
    layout?: boolean;
}) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { onCardClose, currentIndex } = useContext(CarouselContext);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                handleClose();
            }
        }

        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    useOutsideClick(containerRef, () => handleClose());

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        onCardClose(index);
    };

    return (
        <>
            <AnimatePresence>
                {open && (
                    <div className="fixed top-[4rem] inset-0 flex items-center justify-center z-50 overflow-auto ">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-lg "
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            ref={containerRef}
                            layoutId={layout ? `card-${card.title}` : undefined}
                            className=" relative bg-neutral-900/50 z-[60] p-4 md:p-5 rounded-3xl font-sans max-w-5xl w-full mx-4 md:mx-10 h-[85vh] max-h-[70vh] md:max-h-[85vh] overflow-auto border border-white/10"
                        >
                            <Elypse className="hidden lg:block absolute opacity-50 -top-[15rem] left-1/2 -z-8 h-[45rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" />

                            <div className="flex justify-between items-center text-center">
                                <button
                                    className="h-8 w-8 bg-transparent/15 rounded-full flex items-center justify-center"
                                    onClick={handleClose}
                                >
                                    <IconX className="h-6 w-6 text-white" />
                                </button>
                                <div className="flex ">
                                    <motion.h2
                                        layoutId={layout ? `title-${card.title}` : undefined}
                                        className="text-2xl md:text-5xl font-semibold text-gradient"
                                    >
                                        {card.title}
                                    </motion.h2>
                                </div>
                            </div>
                            <Separator />
                            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 ">
                                <Image
                                    src={card.src1}
                                    alt={card.title}
                                    width={450}
                                    height={230}
                                    className="z-10 rounded-xl border border-white/10 shadow-[0px_5px_30px_5px_rgba(79,57,136,_0.30)]"
                                />
                                <Image
                                    src={card.src2}
                                    alt={card.title}
                                    width={450}
                                    height={230}
                                    className="z-10 rounded-xl border border-white/10 shadow-[0px_5px_30px_5px_rgba(79,57,136,_0.30)]"
                                />
                            </div>
                            <div className="grid grid-col-1 md:grid-cols-3 mt-5 lg:p-7 ">
                                <div className="col-span-1 md:col-span-2 md:p-5">
                                    <motion.p
                                        layoutId={layout ? `title-${card.description}` : undefined}
                                        className="composant-title-size uppercase"
                                    >
                                        Description
                                    </motion.p>
                                    <Separator />
                                    <motion.p
                                        layoutId={
                                            layout ? `description-${card.description}` : undefined
                                        }
                                        className="text-white text-base md:text-md max-w-3xl mx-auto"
                                    >
                                        {card.description}
                                    </motion.p>
                                    <Separator />
                                    <div>
                                        {card.devList?.map((dev, index) => (
                                            <p
                                                key={card.title + index}
                                                className="flex items-start space-x-2 mb-1"
                                            >
                                                <IoCheckmark
                                                    className="flex-shrink-0 text-purple"
                                                    style={{ fontSize: "1.25rem" }}
                                                />
                                                <span className="break-words text-md text-white/75">
                                                    {dev}
                                                </span>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-span-1 md:p-5 mt-5 md:mt-0">
                                    <motion.p
                                        layoutId={layout ? `title-${card.title}` : undefined}
                                        className="composant-title-size uppercase"
                                    >
                                        Informations
                                    </motion.p>
                                    <Separator />
                                    <div className="flex items-center gap-2">
                                        <IoPricetagsOutline className="h-5 w-5 text-purple" />
                                        <motion.p
                                            layoutId={
                                                layout ? `category-${card.category}` : undefined
                                            }
                                            className="text-md"
                                        >
                                            Catégorie :{" "}
                                            <span className="font-bold">{card.category}</span>
                                        </motion.p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <IoCalendarNumberOutline className="h-5 w-5 text-purple" />
                                        <motion.p
                                            layoutId={layout ? `date-${card.date}` : undefined}
                                            className="text-md"
                                        >
                                            Année : {card.date}
                                        </motion.p>
                                    </div>
                                    <Separator />
                                    <div className="flex items-center">
                                        {card.iconLists.map((icon, index) => (
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
                                    <Separator />
                                    <div>
                                        <Link
                                            href={card.link}
                                            className="uppercase lg:hover:scale-110 duration-200 transition-all translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms]"
                                            aria-label="Lien vers le projet"
                                            title="Voir le projet"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <MagicButton
                                                title="Voir le site"
                                                position="left"
                                                icon={<FaGlobe />}
                                                otherClasses="gap-2 font-light"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            <motion.button
                layoutId={layout ? `card-${card.title}` : undefined}
                onClick={handleOpen}
                className=" rounded-[3rem] bg-neutral-900 h-[25rem] w-[15rem] md:h-[30rem] md:w-[20rem] imac:h-[40rem] imac:w-[25rem] overflow-hidden  flex flex-col items-start justify-start relative z-10 border border-white/.1 "
            >
                <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
                <div className="relative z-40 p-8">
                    <motion.p
                        layoutId={layout ? `category-${card.category}` : undefined}
                        className="text-white text-sm md:text-base font-medium font-sans text-left"
                    >
                        {card.category}
                    </motion.p>
                    <motion.p
                        layoutId={layout ? `title-${card.title}` : undefined}
                        className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
                    >
                        {card.title}
                    </motion.p>
                </div>
                <Image
                    src={card.srcMockup}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover opacity-50 hover:opacity-100 absolute z-10 inset-0 md:hover:scale-110 transition-all duration-700 "
                />
            </motion.button>
        </>
    );
};
