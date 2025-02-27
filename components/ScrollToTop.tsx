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

    const ScrollToTop = () => {
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
        <div className="fixed bottom-[10px] right-[10px] cursor-pointer animate-scroll-top-arrow transition-all z-[90]">
            <div className="flex justify-center items-center border border-white/50 md:border-none rounded-full md:rounded-none text-white ">
                {visible && (
                    <div
                        onClick={ScrollToTop}
                        aria-label="Flêche pour remonter au début de la page"
                        role="button"
                    >
                        <MdKeyboardDoubleArrowUp className="text-[3rem] md:text-[4rem]" />
                    </div>
                )}
            </div>
        </div>
    );
}
