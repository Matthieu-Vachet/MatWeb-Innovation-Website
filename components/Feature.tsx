"use client";

import React from "react";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import { Container } from "./Container";

type FeaturesProps = {
    children: React.ReactNode;
    color: string;
    colorDark: string;
};

export const Features = ({ children, color, colorDark }: FeaturesProps) => {
    const { ref, inView } = useInView({ threshold: 0.6, triggerOnce: true });

    return (
        <div
            ref={ref}
            className={classNames(
                "after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent) relative flex flex-col items-center overflow-x-clip before:pointer-events-none before:absolute before:h-[20rem] md:before:h-[40rem] before:w-full before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-1000 before:ease-in before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%] after:pointer-events-none after:absolute after:inset-0",
                inView &&
                    "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]",
                !inView && "before:rotate-180 before:opacity-40",
            )}
            style={
                {
                    "--feature-color": color,
                    "--feature-color-dark": colorDark,
                } as React.CSSProperties
            }
        >
            <div className="mt-[3rem] w-full md:mt-[25.2rem] ">{children}</div>
        </div>
    );
};

type MainFeatureProps = {
    text?: React.ReactNode;
    title: React.ReactNode;
    paragraphes?: React.ReactNode;
    imageSize?: "small" | "large";
};

const MainFeature = ({ text, title, paragraphes, imageSize = "small" }: MainFeatureProps) => {
    return (
        <>
            <div className="relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.01),transparent)]">
                <Container
                    className={classNames(
                        "max-w-[95%] text-center",
                        imageSize === "small" ? "w-[78rem]" : "w-[102.4rem]",
                    )}
                >
                    <h1 className=" text-gradient mb-5 md:mb-11 translate-y-none md:translate-y-[100%] pt-[10rem] text-center [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:pt-0 title-size [.is-visible_&]:translate-y-0">
                        {title}
                    </h1>
                </Container>
            </div>
            <Container className="w-full md:w-[78rem] md:max-w-[90%] text-center">
                <h2 className="mx-auto my-5 md:my-16 leading-tight text-white-100 md:w-[80%] subtitle-size">
                    {text}
                </h2>
                <p className="my-5 md:my-16 text-sm md:text-2xl">{paragraphes}</p>
                <hr className="mb-[5rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2)_50%,transparent)]" />
            </Container>
        </>
    );
};

Features.Main = MainFeature;
