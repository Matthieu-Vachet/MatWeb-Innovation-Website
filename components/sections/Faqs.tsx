"use client";

import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import BlurIn from "../ui/BlurIn";
import AnimatedElement from "../ui/AnimatedElement";

type FaqItem = {
    id: string;
    questions: string;
    réponses: string;
};

const faqsList: FaqItem[] = [
    {
        id: "faq-1",
        questions: "Quel est le prix d'un site internet ?",
        réponses:
            "En général, le coût dépend de la complexité du projet et du type de service requis. Par exemple, un CV en ligne ou une landing page est moins coûteux qu'un portfolio complet ou un site vitrine. L'intégration d'une maquette ou d'une palette graphique existante sera toujours moins chère que la création complète du design. Pour une estimation précise, n'hésitez pas à me contacter.",
    },
    {
        id: "faq-2",
        questions: "Le design de mon site sera-t-il unique ?",
        réponses:
            "Votre site sera unique, que ce soit par l'intégration de votre palette graphique ou maquette existante, ou par une création sur mesure. Chaque projet est personnalisé pour refléter votre image avec une interface moderne et élégante. J'utilise des animations avancées avec Framer Motion, GSAP et d'autres technologies pour garantir une expérience utilisateur exceptionnelle.",
    },
    {
        id: "faq-3",
        questions: "Mon site sera-t-il adapté sur mobile ?",
        réponses:
            "Oui, tous mes projets sont conçus pour être adaptés aux mobiles, tablettes et ordinateurs de bureau. Sur demande, je peux également adapter votre site pour des écrans très grands, garantissant ainsi une expérience utilisateur optimale sur tous les types de dispositifs.",
    },
    {
        id: "faq-4",
        questions: "Serai-je autonome pour gérer les contenus de mon site web ?",
        réponses:
            "Oui, vous pourrez gérer vos contenus de manière autonome si vous le souhaitez. Je vous fournirai une formation pour maîtriser l'outil de gestion. Pour un portfolio ou un CV en ligne, vous pourrez ajouter, modifier ou supprimer des projets, des expériences et des photos. Pour une landing page, vous pourrez ajuster les textes, les images et les galeries de photos. Si vous préférez déléguer cette gestion, je peux également prendre en charge cette tâche, partiellement ou totalement, via un contrat spécifique.",
    },
];

const panelVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

const Faqs = () => {
    return (
        <section
            className="relative bg-gradient-to-b from-black-100 via-blue-100/20 to-black-100 z-30"
            id="Faqs"
        >
            <div className="relative max-w-[100vw] lg:max-w-[80vw] imac:max-w-[60vw] mx-auto lg:flex px-4 md:px-6">
                <div className="flex-1">
                    <BlurIn>
                        <h3 className="mt-3 font-extrabold text-4xl md:text-6xl lg:text-8xl text-gradient">
                            F.A.Q
                        </h3>
                    </BlurIn>
                </div>
                <div className="flex-1 mt-5 lg:mt-16">
                    <ul className="space-y-4 divide-y divide-gray-700">
                        {faqsList.map((item, index) => (
                            <AnimatedElement key={item.id} delay={index * 0.5} duration={0.5}>
                                <li className="py-5">
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <DisclosureButton className="flex items-center justify-between w-full text-left text-md md:text-xl font-semibold text-blue focus:outline-none">
                                                    <span>{item.questions}</span>
                                                    <span className="pl-4">
                                                        {open ? (
                                                            <HiOutlineChevronUp className="w-7 h-7 text-white" />
                                                        ) : (
                                                            <HiOutlineChevronDown className="w-7 h-7 text-white" />
                                                        )}
                                                    </span>
                                                </DisclosureButton>
                                                <AnimatePresence initial={false}>
                                                    {open && (
                                                        <motion.div
                                                            variants={panelVariants}
                                                            initial="hidden"
                                                            animate="visible"
                                                            exit="hidden"
                                                        >
                                                            <DisclosurePanel className="mt-3 text-sm md:text-lg text-white-100 leading-relaxed">
                                                                <p
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: item.réponses,
                                                                    }}
                                                                />
                                                            </DisclosurePanel>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        )}
                                    </Disclosure>
                                </li>
                            </AnimatedElement>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Faqs;
