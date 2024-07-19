import { items } from "@/data/ServicesData";
import { cn } from "@/utils/cn";

export function FeaturesSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-[90vw] mx-auto">
            {items.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-5 lg:py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800",
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-purple-100 dark:from-purple-100/70 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-purple-100 dark:from-purple-100/70 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 text-xl relative z-10 px-10 text-purple group-hover/feature:text-white transition-all duration-500">
                {icon}
            </div>
            <div className="composant-title-size font-semibold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-purple transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 group-hover/feature:text-purple transition-all duration-500 inline-block text-white">
                    {title}
                </span>
            </div>
            <p className="text-md text-white/70 relative z-10 px-10">{description}</p>
        </div>
    );
};
