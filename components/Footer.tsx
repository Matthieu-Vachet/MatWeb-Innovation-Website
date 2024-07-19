import Image from "next/image";

import { socialMedias } from "@/data/HeroData";

const Footer = () => {
    return (
        <footer className=" relative w-full pt-28 pb-5 " id="contact">
            <div className="w-full absolute left-0 bottom-0 min-h-96">
                <Image
                    src="/background/background-footer.svg"
                    alt="Image de fond du footer"
                    width={100}
                    height={100}
                    loading="lazy"
                    className="w-full h-screen opacity-70 "
                />
            </div>

            <div className="flex flex-col items-center max-w-[95vw] lg:max-w-[45vw] mx-auto">
                <h1 className="text-gradient translate-y-[40%] text-center text-3xl [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:text-4xl [.is-visible_&]:translate-y-0 ">
                    Développeur <span className="text-blue">Informatique</span> Indépendant
                </h1>
                <p className="bg-clip-text text-center text-lg [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:text-lg [.is-visible_&]:translate-y-0 mt-14">
                    Développeur Web front-end freelance, je suis à votre disposition pour répondre à
                    tout type de projets de création de sites internet, de développement spécifique
                    ou d&apos;applications web. Passionné par les technologies liées au Web, je mets
                    mes compétences au service de vos besoins dans divers domaines.
                </p>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center px-10 gap-5">
                <p className="md:text-base text-sm md:font-normal font-light text-center">
                    Copyright © 2024 Vachet Matthieu <br /> Tous droits reserves
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedias.map((media) => (
                        <a
                            key={media.id}
                            href={media.url}
                            aria-label={media.alt}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <Image
                                src={media.img}
                                alt={media.alt}
                                width={40}
                                height={40}
                                loading="lazy"
                                className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] md:opacity-80 hover:opacity-100"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
