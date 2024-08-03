"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BlurIntProps } from "@/data/TypesComponents";

const BlurIn = ({ children, className, variant, duration = 1, delay = 0 }: BlurIntProps) => {
    const defaultVariants = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    };
    const combinedVariants = variant || defaultVariants;

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
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
