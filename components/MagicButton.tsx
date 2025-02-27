import { MagicButtonProps } from "@/data/TypesComponents";
import React from "react";

const MagicButton = ({ title, icon, position, handleClick, otherClasses }: MagicButtonProps) => {
    return (
        <div
            role="button"
            tabIndex={0}
            className="relative inline-flex h-12 w-full md:w-full  overflow-hidden rounded-lg p-[1px] focus:outline-none lg:hover:scale-110 duration-500 transition-all"
            onClick={handleClick}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    handleClick?.();
                }
            }}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
                bg-black-100 px-5 md:px-8 text-sm md:text-md lg:text-lg imac:text-xl text-white backdrop-blur-3xl ${otherClasses}`}
            >
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </div>
    );
};

export default MagicButton;
