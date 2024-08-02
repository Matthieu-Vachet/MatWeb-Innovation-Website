"use client";
import React, { useEffect, useState } from "react";

const ProgressBar: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const totalHeight =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollTop = window.scrollY;
        const scrollPosition = (scrollTop / totalHeight) * 100;
        setScrollPosition(scrollPosition);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Interpoler la couleur en fonction de la position du scroll
    const interpolateColor = (scrollPosition: number) => {
        const startColor = [142, 45, 226]; // Violet (rgb)
        const endColor = [74, 0, 224]; // Bleu (rgb)
        const ratio = scrollPosition / 100;

        const r = Math.round(startColor[0] + ratio * (endColor[0] - startColor[0]));
        const g = Math.round(startColor[1] + ratio * (endColor[1] - startColor[1]));
        const b = Math.round(startColor[2] + ratio * (endColor[2] - startColor[2]));

        return `rgb(${r},${g},${b})`;
    };

    return (
        <>
            <div className="fixed top-[3.9rem] md:top-[4.5rem] left-0 w-full h-1 bg-transparent z-50 ">
                <div
                    className="h-1 shadow-scrollBar"
                    style={{
                        width: `${scrollPosition}%`,
                        backgroundColor: interpolateColor(scrollPosition),
                    }}
                />
            </div>
            {children}
        </>
    );
};

export default ProgressBar;
