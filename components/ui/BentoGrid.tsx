import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

import { GridPattern } from "./GridPattern";
import { DotPattern } from "./DotPattern";
import Meteors from "./Meteor";
import RetroGrid from "./RetroGrid";

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
                "row-span-1 relative overflow-hidden rounded-xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 ",
                className,
            )}
            style={{
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
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
                    <div className="absolute top-0 flex h-full w-full items-center justify-center overflow-hidden opacity-30">
                        <Meteors number={30} />
                    </div>
                )}
                {id === 3 && (
                    <DotPattern
                        className={cn(
                            "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)] opacity-30",
                        )}
                    />
                )}
                {id === 4 && (
                    <GridPattern
                        squares={[
                            [4, 4],
                            [5, 1],
                            [8, 2],
                            [6, 6],
                            [10, 5],
                            [13, 3],
                        ]}
                        className={cn(
                            "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
                            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 opacity-30",
                        )}
                    />
                )}
                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
                    )}
                >
                    <div className="z-10">{title}</div>
                    <div
                        className={cn(
                            "font-base  lg:text-base text-sm md:text-sm text-white-200 z-10",
                            descriptionClassName,
                        )}
                    >
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};
