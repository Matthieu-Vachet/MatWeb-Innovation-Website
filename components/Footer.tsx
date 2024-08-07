import Link from "next/link";
import Image from "next/image";
import { QUICK_LINKS, SOCIAL_MEDIAS } from "@/data/Constants";
import Elypse from "./ui/Elypse";
export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-tr from-transparent via-black-100/15 to-black-100 py-0 text-gray-400 backdrop-blur-lg lg:py-12 overflow-hidden ">
            <Image
                src="/background/background-footer.svg"
                alt="Image de fond du footer"
                width={100}
                height={100}
                loading="lazy"
                className="w-full h-full md:h-[70vh] opacity-80 imac:opacity-50 absolute left-0 bottom-0 min-h-96 -z-50 "
            />

            <Elypse
                stopColor1="#303A75"
                stopColor2="#6062e8"
                className="absolute opacity-30 -bottom-[60%] lg:-bottom-1/2 left-1/2 -z-8 h-[35rem] lg:h-[40rem] imac:h-[45rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            />

            <div className="flex flex-col items-center max-w-[95vw] lg:max-w-[45vw] mx-auto mb-16">
                <p className="bg-clip-text text-center text-lg [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:text-lg [.is-visible_&]:translate-y-0 mt-14"></p>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3 lg:px-8 z-50">
                <div className="flex flex-col items-start">
                    <div className="mb-2 flex items-center gap-2">
                        <Image src="/logo/logo-MatWeb.webp" alt="Logo" width={50} height={50} />
                        <span className="font-heading3 text-lg font-semibold text-gray-200 md:text-2xl">
                            Matthieu <span className=" uppercase text-purple">Vachet</span>
                        </span>
                    </div>
                    <p className="text-sm md:text-[0.6rem] lg:text-sm leading-relaxed">
                        Développeur web front-end freelance dans l&apos;Aisne, je suis à votre
                        disposition pour répondre à tout type de projet de création de sites
                        internet, de développement spécifique ou d&apos;applications web. Passionné
                        par les technologies liées au web, je mets mes compétences au service de vos
                        besoins dans divers domaines.
                    </p>
                </div>
                <div className="flex flex-col items-start md:items-center z-50">
                    <h4 className="mb-4 font-heading2 font-semibold text-gray-200">
                        Liens rapides
                    </h4>
                    <ul className="space-y-2 text-start md:text-center">
                        {QUICK_LINKS.map(({ title, link, id }) => (
                            <li key={id}>
                                <Link
                                    className="transition-colors hover:text-purple"
                                    href={link ?? "#"}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-start md:items-end">
                    <h4 className="mb-4 font-heading2 font-semibold text-gray-200">Suivez-moi</h4>
                    <div className="flex space-x-4">
                        {SOCIAL_MEDIAS.map(({ icon, link, id, title }) => (
                            <Link
                                key={id}
                                className="transition-colors hover:text-purple"
                                href={link}
                                title={title}
                                aria-label={title}
                                target="_blank"
                                rel="noreferrer"
                                aria-labelledby="{title}-link"
                            >
                                {icon()}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container flex flex-col justify-center items-center mx-auto mt-8 px-4 text-center sm:px-6 lg:px-8 gap-2 text-sm z-50">
                <p>© 2024 Vachet Matthieu - Développeur - Tous droits réservés</p>
                <Link href="/mentions-legales" className="transition-colors text-purple z-50">
                    Mentions légales
                </Link>
            </div>
        </footer>
    );
}
