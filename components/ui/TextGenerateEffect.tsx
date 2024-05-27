"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
    const [scope, animate] = useAnimate();
    const containerRef = useRef<HTMLDivElement | null>(null);
    let wordsArray = words.split(" ");

    useEffect(() => {
        const container = containerRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animate(
                            "span",
                            {
                                opacity: 1,
                            },
                            {
                                duration: 2,
                                delay: stagger(0.2),
                            },
                        );
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            },
        );

        if (container) {
            observer.observe(container);
        }

        return () => {
            if (container) {
                observer.disconnect();
            }
        };
    }, [animate]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className={`${
                                idx > 2 ? "text-purple" : "dark:text-white text-black"
                            } opacity-0`}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)} ref={containerRef}>
            <div className="my-4">
                <div className="dark:text-white text-black leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
