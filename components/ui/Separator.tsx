"use client";
import * as React from "react";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";

const Separator = () => {
    const radius = 100;
    const [visible, setVisible] = React.useState(false);

    // Utilisation de motionValue pour la position de la souris
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            style={{
                background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--purple),
          transparent 80%
        )
      `,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="relative w-full py-[0.10rem] h-[2px] bg-transparent my-5"
        >
            <hr className="w-full h-[2px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2)_50%,transparent)] " />
        </motion.div>
    );
};

export { Separator };

// export const Separator = () => {
//     return (
//         <div className="w-full">
//             <hr className="mb-5 mt-5 h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2)_50%,transparent)]" />
//         </div>
//     );
// };
