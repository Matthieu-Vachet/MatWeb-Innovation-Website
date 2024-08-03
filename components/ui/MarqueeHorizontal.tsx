import { cn } from "@/utils/cn";
import Marquee from "@/components/ui/Marquee";
import Image from "next/image";
import { reviews } from "@/data/Constants";
import { ReviewCardProps } from "@/data/TypesComponents";

const ReviewCard = ({ img, name, username, body }: ReviewCardProps) => {
    return (
        <figure
            className={cn(
                "relative w-[20rem] md:w-[25rem] cursor-pointer overflow-hidden rounded-3xl border p-4 [box-shadow:0_-20px_80px_-20px_#8686f03f_inset]",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "[border:1px_solid_rgba(255,255,255,.1)] bg-transparent/10 hover:bg-purple/[.10]",
            )}
        >
            <div className="flex flex-row items-center gap-5">
                <Image src={img} alt={name} width={32} height={32} className="rounded-full" />
                <div className="flex flex-col">
                    <figcaption className="composant-title-size font-medium text-white">
                        {name}
                    </figcaption>
                    <p className="text-md font-medium text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm md:text-md">{body}</blockquote>
        </figure>
    );
};

export default function MarqueeHorizontal() {
    return (
        <div className="relative flex w-[90vw] flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl gap-5 backdrop-blur-sm z-30">
            <Marquee pauseOnHover className="[--duration:50s]">
                {reviews.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black-100"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black-100"></div>
        </div>
    );
}
