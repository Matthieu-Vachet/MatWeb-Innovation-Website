"use client";
import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import BlurIn from "../ui/BlurIn";
import AnimatedElement from "../ui/AnimatedElement";
import { faqsList } from "@/data/Constants";

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
        <section className="relative z-30" id="Faqs">
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
                            <AnimatedElement key={item.id} delay={index * 0.2} duration={0.5}>
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
