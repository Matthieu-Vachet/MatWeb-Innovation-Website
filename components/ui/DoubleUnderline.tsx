import { cn } from "@/utils/cn";

export default function DoubleUnderline({
    className,
    children,
    ...props
}: React.HTMLProps<HTMLSpanElement>) {
    const common =
        "absolute h-px w-full transition-all duration-200 group-hover:opacity-50 dark:bg-purple/70";
    return (
        <span
            {...props}
            className={cn("group relative inline-block cursor-pointer text-white", className)}
        >
            {children}
            <span
                className={cn(
                    common,
                    " pointer-events-none left-0 top-[calc(100%_-_2px)] group-hover:top-0",
                )}
            />
        </span>
    );
}
