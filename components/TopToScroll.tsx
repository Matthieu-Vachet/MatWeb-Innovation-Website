import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export default function TopToScroll() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        if (window.scrollY > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
        return () => {
            window.removeEventListener("scroll", toggleVisible);
        };
    }, []);

    return (
        <div className="fixed bottom-[10px] right-[10px] cursor-pointer text-white-100 z-50">
            {visible && (
                <div onClick={scrollToTop} aria-label="Flêche pour remonter au début de la page">
                    <MdKeyboardDoubleArrowUp className="text-[4rem] animate-scroll-top-arrow transition-all  hover:text-white" />
                </div>
            )}
        </div>
    );
}
