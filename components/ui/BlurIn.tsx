"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { cn } from "@/utils/cn";

interface BlurIntProps {
    children: React.ReactNode;
    className?: string;
    variant?: {
        hidden: { filter: string; opacity: number };
        visible: { filter: string; opacity: number };
    };
    duration?: number;
    delay?: number;
}

const BlurIn = ({ children, className, variant, duration = 1, delay = 0 }: BlurIntProps) => {
    const defaultVariants = {
        hidden: { filter: "blur(15px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    };
    const combinedVariants = variant || defaultVariants;

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once when it first comes into view
        threshold: 0.5, // Percentage of the component that needs to be visible to trigger the animation
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration }}
            variants={combinedVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default BlurIn;
