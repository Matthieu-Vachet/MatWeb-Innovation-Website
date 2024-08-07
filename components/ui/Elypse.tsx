import { ElypseProps } from "@/data/TypesComponents";

const Elypse: React.FC<ElypseProps & { gradientId?: string }> = ({
    className,
    stopColor1 = "#905BF4",
    stopColor2 = "#594199",
    offset1 = 0,
    offset2 = 1,
    cx = 604,
    cy = 512,
    rx = 604,
    ry = 512,
    gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`, // Génération d'ID unique simple
}) => {
    return (
        <svg className={className} viewBox={`0 0 ${rx * 2} ${ry * 2}`} aria-hidden="true">
            <defs>
                <radialGradient id={gradientId} cx={cx} cy={cy} r={rx} fx={cx} fy={cy}>
                    <stop offset={offset1} stopColor={stopColor1} />
                    <stop offset={offset2} stopColor={stopColor2} />
                </radialGradient>
            </defs>
            <ellipse cx={cx} cy={cy} fill={`url(#${gradientId})`} rx={rx} ry={ry} />
        </svg>
    );
};

export default Elypse;
