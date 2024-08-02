"use client";
// app/mentions-legales.tsx
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import MagicButton from "@/components/MagicButton";
import ScrollToTop from "@/components/ScrollToTop";
import { ShootingStars } from "@/components/ui/ShootingStars";
import { StarsBackground } from "@/components/ui/StarsBackground";
import BlurIn from "@/components/ui/BlurIn";
import AnimatedElement from "@/components/ui/AnimatedElement";

const MentionsLegales = () => {
    return (
        <main
            id="mentions-legales"
            className=" bg-black-100 relative w-full flex justify-center items-center flex-col mx-auto pb-0 px-4 bg-gradient-to-b from-purple-950/15 to-black-100 pt-28 md:pt-40 lg:pt-32 imac:pt-40"
        >
            <div className="absolute left-5 top-5 cursor-pointer z-50 hover:scale-105 transition-all duration-300 ">
                <Link
                    href="/"
                    title="Retourner sur la page d'accueil"
                    aria-label="Retourner sur la page d’accueil"
                >
                    <FaArrowLeft className=" text-[2rem] imac:text-[3rem] text-white-100 hover:text-purple" />
                </Link>
            </div>
            <div className="w-screen h-full flex flex-col justify-center items-center text-center">
                <Image
                    src="/background/background-hero.webp"
                    alt="Image background hero"
                    width={1000}
                    height={1000}
                    priority
                    className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10"
                    layout="responsive"
                />
                <div className="flex relative z-10">
                    <div className="max-w-[95vw] md:max-w-[80vw] lg:max-w-[70vw] flex flex-col">
                        <BlurIn>
                            <h1 className="text-gradient font-semibold title-size md:pt-5 text-center">
                                Mentions légales
                            </h1>
                        </BlurIn>

                        <div className="mt-10 text-start">
                            <section>
                                <AnimatedElement delay={0.5} duration={0.5}>
                                    <h2 className="subtitle-size text-gradient font-semibold mb-5">
                                        <span className="text-purple text-3xl md:text-4xl imac:text-5xl">
                                            1.
                                        </span>{" "}
                                        Présentation du site
                                    </h2>
                                    <p className="text-white-100 text-md md:text-xl">
                                        Conformément aux dispositions de l’article 6 de la loi n°
                                        2004-575 du 21 juin 2004 pour la confiance dans l’économie
                                        numérique, il est prècisé aux utilisateurs du site
                                        www.matthieu-vachet.fr l&apos;identitè des différents
                                        intervenants dans le cadre de sa réalisation et de son suivi
                                        :
                                    </p>
                                    <ul className="flex flex-col list-none mt-5 gap-2 text-white text-md md:text-xl">
                                        <li>
                                            <strong className="text-white-100 underline">
                                                Nom de la société :
                                            </strong>{" "}
                                            MatWeb Innovation
                                        </li>
                                        <li>
                                            <strong className="text-white-100 underline">
                                                Forme juridique :
                                            </strong>{" "}
                                            Entrepreneur individuel
                                        </li>
                                        <li>
                                            <strong className="text-white-100 underline">
                                                Adresse du siège social :
                                            </strong>{" "}
                                            10 Rue de Marle, PORTE 9, 02120 Puisieux et Clanlieu
                                        </li>
                                        <li>
                                            <strong className="text-white-100 underline">
                                                Numéro de téléphone :
                                            </strong>{" "}
                                            (+33)7.44.89.08.31
                                        </li>
                                        <li>
                                            <strong className="text-white-100 underline">
                                                Adresse e-mail :
                                            </strong>{" "}
                                            matweb_innovation@icloud.com
                                        </li>
                                        <li>
                                            <strong className="text-white-100 underline">
                                                Numéro d&apos;immatriculation au RCS :
                                            </strong>{" "}
                                            92816675000010
                                        </li>
                                        <li>
                                            <strong className="text-white-100 underline">
                                                Numéro de TVA intracommunautaire :
                                            </strong>{" "}
                                            FR26928166750
                                        </li>
                                        <li>
                                            <strong className="text-white-100 underline">
                                                Responsable de la publication :
                                            </strong>{" "}
                                            VACHET Matthieu
                                        </li>
                                    </ul>
                                </AnimatedElement>
                            </section>

                            <section className="mt-10">
                                <AnimatedElement delay={0.5} duration={0.5}>
                                    <h2 className="subtitle-size text-gradient font-semibold mb-5">
                                        <span className="text-purple text-3xl md:text-4xl imac:text-5xl">
                                            2.
                                        </span>{" "}
                                        Hébergeur du site
                                    </h2>
                                    <ul className="flex flex-col list-none mt-5 gap-2 text-white text-md md:text-xl">
                                        <li>
                                            <strong className="text-white-100 underline">
                                                Nom de l’hébergeur :
                                            </strong>{" "}
                                            <a
                                                href="https://www.ionos.fr/"
                                                className="text-purple"
                                                target="_blank"
                                                rel="noreferrer"
                                                title="lien vers le site de l'hébergeur IONOS SARL"
                                                aria-label="lien vers le site de l'hébergeur IONOS SARL"
                                            >
                                                IONOS SARL
                                            </a>
                                        </li>
                                        <li>
                                            <strong className="text-white-100 underline">
                                                Adresse :
                                            </strong>{" "}
                                            7, place de la Gare - BP 70109 - 57201 SARREGUEMINES
                                        </li>
                                        <li>
                                            <strong className="text-white-100 underline">
                                                Numéro de téléphone :
                                            </strong>{" "}
                                            0970.808.911
                                        </li>
                                    </ul>
                                </AnimatedElement>
                            </section>
                            <section className="mt-10">
                                <AnimatedElement delay={0.5} duration={0.5}>
                                    <h2 className="subtitle-size text-gradient font-semibold mb-5">
                                        <span className="text-purple text-3xl md:text-4xl imac:text-5xl">
                                            3.
                                        </span>{" "}
                                        Propriété intellectuelle
                                    </h2>
                                    <p className="text-white-100 text-md md:text-xl">
                                        Tous les contenus présents sur ce site (textes, images,
                                        graphismes, logos, etc.) sont protégés par le droit
                                        d&apos;auteur et la propriété intellectuelle. Toute
                                        reproduction, représentation, modification, publication,
                                        totale ou partielle de ce site ou de ses contenus est
                                        interdite sans autorisation préalable.
                                    </p>
                                </AnimatedElement>
                            </section>
                            <section className="mt-10">
                                <AnimatedElement delay={0.5} duration={0.5}>
                                    <h2 className="subtitle-size text-gradient font-semibold mb-5">
                                        <span className="text-purple text-3xl md:text-4xl imac:text-5xl">
                                            4.
                                        </span>{" "}
                                        Responsabilité
                                    </h2>
                                    <p className="text-white-100 text-md md:text-xl">
                                        Le site{" "}
                                        <a
                                            href="www.matthieu-vachet.fr"
                                            className="text-purple"
                                            target="_blank"
                                            rel="noreferrer"
                                            title="lien vers le site de Matthieu VACHET"
                                            aria-label="lien vers le site de Matthieu VACHET"
                                        >
                                            www.matthieu-vachet.fr
                                        </a>{" "}
                                        est proposé en l&apos;état et est accessible sans garantie
                                        d&apos;aucune sorte. Nous ne saurions être tenus
                                        responsables des éventuels dommages directs ou indirects
                                        résultant de l&apos;accès à ce site ou de son utilisation.
                                    </p>
                                </AnimatedElement>
                            </section>
                            <section className="mt-10">
                                <AnimatedElement delay={0.5} duration={0.5}>
                                    <h2 className="subtitle-size text-gradient font-semibold mb-5">
                                        <span className="text-purple text-3xl md:text-4xl imac:text-5xl">
                                            5.
                                        </span>{" "}
                                        Données personnelles
                                    </h2>
                                    <p className="text-white-100 text-md md:text-xl">
                                        Conformément au Règlement Général sur la Protection des
                                        Données (RGPD) et à la Loi Informatique et Libertés, vous
                                        disposez d&apos;un droit d&apos;accès, de rectification et
                                        de suppression des données vous concernant. Pour exercer ces
                                        droits, veuillez nous contacter à l&apos;adresse suivante :
                                        matweb_innovation@icloud.com.
                                    </p>
                                </AnimatedElement>
                            </section>
                            <section className="mt-10">
                                <AnimatedElement delay={0.5} duration={0.5}>
                                <h2 className="subtitle-size text-gradient font-semibold mb-5">
                                    <span className="text-purple text-3xl md:text-4xl imac:text-5xl">
                                        6.
                                    </span>{" "}
                                    Cookies
                                </h2>
                                <p className="text-white-100 text-md md:text-xl">
                                    L’Utilisateur est informé que lors de ses visites sur le site,
                                    un cookie peut s’installer automatiquement sur son logiciel de
                                    navigation. En naviguant sur le site, il les accepte. Un cookie
                                    est un élément qui ne permet pas d’identifier l’Utilisateur mais
                                    sert à enregistrer des informations relatives à la navigation de
                                    celui-ci sur le site Internet. L’Utilisateur pourra désactiver
                                    ce cookie par l’intermédiaire des paramètres figurant au sein de
                                    son logiciel de navigation.
                                </p>
                                </AnimatedElement>
                            </section>
                            <section className="mt-10">
                                <AnimatedElement delay={0.5} duration={0.5}>
                                <h2 className="subtitle-size text-gradient font-semibold mb-5">
                                    <span className="text-purple text-3xl md:text-4xl imac:text-5xl">
                                        7.
                                    </span>{" "}
                                    Liens hypertextes
                                </h2>
                                <p className="text-white-100 text-md md:text-xl">
                                    Le site peut contenir des liens vers d&apos;autres sites web.
                                    Nous ne sommes pas responsables du contenu de ces sites et
                                    déclinons toute responsabilité quant aux dommages pouvant
                                    résulter de leur utilisation.
                                </p>
                                </AnimatedElement>
                            </section>
                            <section className="mt-10">
                                <AnimatedElement delay={0.5} duration={0.5}>
                                <h2 className="subtitle-size text-gradient font-semibold mb-5">
                                    <span className="text-purple text-3xl md:text-4xl imac:text-5xl">
                                        8.
                                    </span>{" "}
                                    Loi applicable
                                </h2>
                                <p className="text-white-100 text-md md:text-xl">
                                    Les présentes mentions légales sont régies par la loi française.
                                    Tout litige relatif à l&apos;utilisation du site sera soumis à
                                    la compétence des tribunaux français.
                                </p>
                                </AnimatedElement>
                            </section>
                        </div>
                        <div className="mt-10 mb-16 flex items-center justify-center">
                            <Link
                                href="/"
                                title="Retour au site"
                                aria-label="Retour au site"
                                className="mt-10 uppercase translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms]"
                            >
                                <MagicButton
                                    title="Retour au site"
                                    position="left"
                                    otherClasses="font-base"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <ShootingStars />
            <StarsBackground />
            <ScrollToTop />
        </main>

        //

        // </Container>
    );
};

export default MentionsLegales;
