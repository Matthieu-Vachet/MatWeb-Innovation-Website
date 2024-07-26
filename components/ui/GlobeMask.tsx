import classNames from "classnames";

export default function GlobeMask() {
    return (
        <div
            className={classNames(
                "mask-radial-faded relative pointer-events-none h-[15rem] md:h-[40rem] overflow-hidden -mt-[0rem] md:-mt-[15rem]",
                "[--color:#594199] before:absolute before:inset-0 before:bg-radial-faded before:top-[5%] md:before:top-[20%] before:-left-1/2 before:h-[142.8%] before:w-[200%] before:rounded-[50%] before:blur-lg md:before:blur-2xl", // Ajusté top-[30%] à top-[25%]
                "after:absolute after:top-[30%] after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:bg-black-100 after:border after:border-white/30 md:after:border-white/50",
            )}
        ></div>
    );
}
