"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { HamburgerIcon } from "@/components/icons/Hamburger";
import classNames from "classnames";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export const Header = () => {
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
    }, [hamburgerMenuIsOpen]);

    useEffect(() => {
        const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

        window.addEventListener("orientationchange", closeHamburgerNavigation);
        window.addEventListener("resize", closeHamburgerNavigation);

        return () => {
            window.removeEventListener("orientationchange", closeHamburgerNavigation);
            window.removeEventListener("resize", closeHamburgerNavigation);
        };
    }, [setHamburgerMenuIsOpen]);

    // Nouvelle fonction pour fermer le menu lors du clic sur un lien
    const handleLinkClick = () => {
        setHamburgerMenuIsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-transparent-white backdrop-blur-[12px] p-4">
            <Container className="flex justify-between items-center">
                <Link className="flex items-center text-md gap-3" href="/">
                    <Image
                        src="/minnovationWhite.webp"
                        alt="logo"
                        width={40}
                        height={40}
                        className="w-8 h-8 md:w-10 md:h-10"
                    />
                    <p>Matweb-Innovation</p>
                </Link>

                <div
                    className={classNames(
                        "transition-[visibility] md:visible",
                        hamburgerMenuIsOpen ? "visible" : "delay-500 invisible",
                    )}
                >
                    <nav
                        className={classNames(
                            "fixed bg-black-100/95 top-0 left-0 h-[100vh] w-[100vw] overflow-auto transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
                            hamburgerMenuIsOpen
                                ? "translate-x-0 opacity-100"
                                : "translate-x-[-100vw] opacity-0",
                        )}
                    >
                        <div>
                            <IoChevronBackCircleOutline
                                className="w-10 h-10 text-white m-5 cursor-pointer hover:text-purple duration-300 md:hidden"
                                onClick={() => setHamburgerMenuIsOpen(false)}
                            />
                        </div>
                        <ul
                            className={classNames(
                                "flex h-full flex-col md:flex-row md:items-center md:[&_li]:border-none text-3xl",
                                "ease-in [&_a:hover]:text-purple [&_a:hover]:scale-110 gap-5 [&_a]:flex [&_a]:w-full [&_a]:translate-y-0  [&_a]:justify-center [&_a]:text-5xl [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-xl md:hover:[&_a]:text-purple [&_a]:md:transition-colors",
                                hamburgerMenuIsOpen && "[&_a]:translate-y-0",
                            )}
                        >
                            <li>
                                <Link href="#Home" onClick={handleLinkClick}>
                                    Acceuil
                                </Link>
                            </li>
                            <li>
                                <Link href="#Service" onClick={handleLinkClick}>
                                    Service
                                </Link>
                            </li>
                            <li className="md:hidden lg:block">
                                <Link href="#Competences" onClick={handleLinkClick}>
                                    Competences
                                </Link>
                            </li>
                            <li className="md:hidden lg:block">
                                <Link href="#Projets" onClick={handleLinkClick}>
                                    Projets
                                </Link>
                            </li>
                            <li className="md:hidden lg:block">
                                <Link href="#About" onClick={handleLinkClick}>
                                    A propos
                                </Link>
                            </li>
                            <li>
                                <Link href="#Contact" onClick={handleLinkClick}>
                                    Contact
                                </Link>
                            </li>
                            <div className="flex z-10 flex-col justify-center items-center md:hidden pt-5 gap-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <FaPhoneAlt className="text-white-200 text-xs" />
                                    <span className=" text-white-200 text-xs">
                                        (+33) 7.44.89.08.31
                                    </span>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <IoIosMail className="text-white-200 text-xs" />
                                    <span className="text-white-200 text-xs">
                                        matweb_innovation@icloud.com
                                    </span>
                                </div>
                            </div>
                        </ul>
                    </nav>
                </div>
                <div className="relative hidden md:flex z-10 flex-col justify-end opacity-50">
                    <div className="flex flex-row gap-1 items-center">
                        <FaPhoneAlt className="text-white-200 text-xs" />
                        <span className="text-white-200 text-xs">(+33) 7.44.89.08.31</span>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <IoIosMail className="text-white-200 text-xs" />
                        <span className="text-white-200 text-xs">matweb_innovation@icloud.com</span>
                    </div>
                </div>
                <button
                    className="ml-6 md:hidden"
                    onClick={() => setHamburgerMenuIsOpen((open) => !open)}
                >
                    <span className="sr-only">Toggle menu</span>
                    <HamburgerIcon />
                </button>
            </Container>
        </header>
    );
};
