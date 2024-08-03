import { ElypseProps } from "@/data/TypesComponents";

export const Elypse = ({
    className,
    stopColor1 = "#905BF4",
    stopColor2 = "#594199",
    offset1 = 0,
    offset2 = 1,
}: ElypseProps) => {
    return (
        <svg viewBox="0 0 1208 1024" className={className}>
            <ellipse
                cx={604}
                cy={512}
                fill="url(#id6d1bd035-0dd1-437e-93fa-59d316231eb0)"
                rx={604}
                ry={512}
            />
            <defs>
                <radialGradient id="id6d1bd035-0dd1-437e-93fa-59d316231eb0">
                    <stop offset={offset1} stopColor={stopColor1} />
                    <stop offset={offset2} stopColor={stopColor2} />
                </radialGradient>
            </defs>
        </svg>
    );
};
