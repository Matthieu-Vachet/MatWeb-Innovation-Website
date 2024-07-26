import { cn } from "@/utils/cn";
import Marquee from "@/components/ui/Marquee";
import Image from "next/image";

const reviews = [
    {
        name: "Alex",
        username: "@alexr",
        body: "Une expérience incroyable ! La conception de mon site web est non seulement esthétique, mais aussi parfaitement fonctionnelle. Le niveau de détail et le professionnalisme sont impressionnants. Je recommande vivement ce service à quiconque cherche un travail de haute qualité.",
        img: "https://avatar.vercel.sh/alex",
    },
    {
        name: "Clara",
        username: "@clara_j",
        body: "Je suis totalement émerveillée par le résultat ! Le site a été conçu avec une telle précision et un soin inégalé. Le service est à la fois rapide et professionnel. Un grand merci pour ce travail exceptionnel !",
        img: "https://avatar.vercel.sh/clara",
    },
    {
        name: "Maxime",
        username: "@max_web",
        body: "Je suis vraiment impressionné par la qualité du travail. Le site est élégant et performant. Le processus de développement a été fluide et transparent. Travailler avec quelqu'un d'aussi talentueux et dévoué a été un vrai plaisir.",
        img: "https://avatar.vercel.sh/maxime",
    },
    {
        name: "Sophie",
        username: "@sophie_74",
        body: "Le travail réalisé a largement dépassé mes attentes. Chaque élément du site est parfaitement conçu et fonctionne à merveille. La communication tout au long du projet a été excellente. Je suis ravie du résultat et je n'hésiterai pas à recommander ce service.",
        img: "https://avatar.vercel.sh/sophie",
    },
    {
        name: "Thomas",
        username: "@tthomas",
        body: "Un service impeccable avec des résultats exceptionnels. Le site est non seulement beau, mais aussi optimisé pour offrir une excellente expérience utilisateur. La qualité du travail est évidente, et je suis très satisfait du résultat final.",
        img: "https://avatar.vercel.sh/thomas",
    },
    {
        name: "Léna",
        username: "@lena.design",
        body: "Un travail fantastique ! La conception du site est superbe et le niveau de détail est remarquable. Le service est professionnel et le résultat est exactement ce que je recherchais. Je suis très satisfait et je recommande vivement ce service !",
        img: "https://avatar.vercel.sh/lena",
    },
    {
        name: "Éric",
        username: "@ericb",
        body: "Un excellent service avec une qualité de conception hors pair. Le site est à la fois moderne et très fonctionnel. La communication a été fluide et le travail a été livré dans les délais. Je suis entièrement satisfait et je recommande sans réserve.",
        img: "https://avatar.vercel.sh/eric",
    },
    {
        name: "Laura",
        username: "@laura_g",
        body: "La qualité du travail est tout simplement exceptionnelle. Mon site web a été conçu avec un sens aigu du détail et une grande efficacité. L'expérience globale a été très professionnelle. Je suis ravie du résultat final et je n'hésiterai pas à revenir.",
        img: "https://avatar.vercel.sh/laura",
    },
    {
        name: "Nicolas",
        username: "@nicolas_w",
        body: "Un travail remarquable qui a largement répondu à mes attentes. Le site est magnifique et fonctionne parfaitement. Le professionnel avec qui j'ai travaillé a fait preuve d'une grande compétence et d'un excellent service client. Je suis très satisfait.",
        img: "https://avatar.vercel.sh/nicolas",
    },
    {
        name: "Marie",
        username: "@marie_c",
        body: "Je suis très impressionnée par la qualité du site réalisé. La conception est élégante et moderne, et chaque aspect du projet a été traité avec le plus grand soin. La communication a été impeccable et le service exceptionnel. Merci pour ce travail de qualité.",
        img: "https://avatar.vercel.sh/marie",
    },
    {
        name: "Julien",
        username: "@julien_89",
        body: "Une collaboration parfaite ! La conception du site est superbe et l'ensemble du projet a été géré de manière très professionnelle. La réactivité et la qualité du travail sont au rendez-vous. Je recommande vivement ce service à tous ceux qui recherchent un excellent résultat.",
        img: "https://avatar.vercel.sh/julien",
    },
];

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-[25rem] cursor-pointer overflow-hidden rounded-3xl border p-4 [box-shadow:0_-20px_80px_-20px_#8686f03f_inset]",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:[border:1px_solid_rgba(255,255,255,.1)] dark:bg-transparent/10 dark:hover:bg-purple/[.10]",
            )}
        >
            <div className="flex flex-row items-center gap-5">
                <Image src={img} alt={name} width={32} height={32} className="rounded-full" />
                <div className="flex flex-col">
                    <figcaption className="composant-title-size font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-md font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-md">{body}</blockquote>
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
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black-100"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black-100"></div>
        </div>
    );
}
