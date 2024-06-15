import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedElementProps = {
    children: React.ReactNode;
    delay: number;
    duration?: number;
    className?: string;
};

export default function AnimatedElement({
    children,
    delay,
    duration,
    className,
}: AnimatedElementProps) {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.3, //  visibilité
        triggerOnce: true, // Se déclenche une seule fois
    });

    useEffect(() => {
        if (inView) {
            // Si l'élément est dans la vue
            ctrls.start("visible");
        }
        if (!inView) {
            // Si l'élément n'est pas dans la vue
            ctrls.start("hidden");
        }
    }, [ctrls, inView]);

    const ElementVariante = {
        hidden: {
            opacity: 0, // Opacité à 0
            y: `2em`, // Décalage de 1em vers le bas
        },
        visible: {
            opacity: 1, // Opacité à 1
            y: `0em`, // Pas de décalage
            transition: {
                delay: delay, // Délai de 0.3s
                duration: duration, // Durée de 0.3s
                ease: [0.9, 0.9, 0.9, 0.9], // Courbe de transition
                delayChildren: 0.5, // Délai des enfants
                staggerChildren: 0.5, // Délai d'attente
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={ctrls}
            variants={ElementVariante}
            className={className}
        >
            {children}
        </motion.div>
    );
}
