import React from "react";
import Image from "next/image";

import { cn } from "@/utils/cn";

import RetroGrid from "./RetroGrid";
import Globe from "./Globe";
import Ripple from "./Ripple";
import { VelocityScroll } from "./ScrollVelocity";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 lg:gap-8 mx-auto  ",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    icon,
    img,
    imgClassName,
    titleClassName,
    spareImgClassName,
    descriptionClassName,
    spareImg,
}: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    icon?: React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImgClassName?: string;
    descriptionClassName?: string;
    spareImg?: string;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 justify-between flex flex-col space-y-4 ",
                className,
            )}
            style={{
                background:
                    "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
                backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
            }}
        >
            {/* add img divs */}
            <div className=" h-full ">
                <div className="w-full h-full absolute">
                    {img && (
                        <Image
                            src={img}
                            alt={img}
                            quality={100}
                            width={500}
                            height={500}
                            className={cn(imgClassName, "object-cover object-center")}
                        />
                    )}
                </div>
                <div className={`absolute right-0 bottom-0`}>
                    {spareImg && (
                        <Image
                            src={spareImg}
                            alt={spareImg}
                            quality={100}
                            width={500}
                            height={500}
                            className={cn(spareImgClassName)}
                        />
                    )}
                </div>
                <div className={`absolute -right-10 -bottom-10 z-50  `}>{icon && <>{icon}</>}</div>
                {id === 1 && <RetroGrid />}
                {id === 2 && (
                    <div className="absolute top-0 flex h-full w-full items-center justify-center opacity-30">
                        <Ripple />
                    </div>
                )}
                {id === 3 && <Globe className="top-10 opacity-40" />}

                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
                    )}
                >
                    <div className="z-10">{title}</div>
                    <div
                        className={cn(
                            descriptionClassName,
                            "font-base lg:text-base text-sm md:text-sm text-white-200 z-10",
                        )}
                    >
                        {description}
                    </div>
                    {id === 4 && (
                        <VelocityScroll
                            text="Large Desktop - Desktop - Tablette - Mobile - "
                            default_velocity={1}
                            className="flex items-center pb-5 text-5xl font-bold tracking-[-0.02em] drop-shadow-sm text-white-200 opacity-30"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
