"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { WordRotateProps } from "@/data/TypesComponents";

export default function WordRotate({
    words,
    duration = 2500,
    framerProps = {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
        transition: { duration: 0.25, ease: "easeOut" },
    },
    className,
}: WordRotateProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, duration);

        return () => clearInterval(interval);
    }, [words, duration]);

    return (
        <div className="overflow-hidden py-3">
            <AnimatePresence mode="wait">
                <motion.p key={words[index]} className={cn(className)} {...framerProps}>
                    {words[index]}
                </motion.p>
            </AnimatePresence>
        </div>
    );
}
