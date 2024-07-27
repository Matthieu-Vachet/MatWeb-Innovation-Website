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

    return (
        <>
            <div className="fixed top-[3.9rem] md:top-[4.5rem] left-0 w-full h-1 bg-transparent z-50 ">
                <div
                    className="h-1 bg-purple/80 shadow-scrollBar "
                    style={{ width: `${scrollPosition}%` }}
                />
            </div>
            {children}
        </>
    );
};

export default ProgressBar;
