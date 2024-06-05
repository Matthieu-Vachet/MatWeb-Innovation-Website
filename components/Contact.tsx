"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/Lamp";

const Contact = () => {
    return (
        <section id="contact">
            <div className="hidden md:block">
                <LampContainer>
                    <motion.h1
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: -50 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="text-white text-center text-4xl font-medium text-transparent md:text-7xl"
                    >
                        CONTACTEZ-MOI
                        <p className="text-white-100 text-xl mt-6">
                            Une idée ? Un Projet ? N&apos;hésitez pas à{" "}
                            <span className="text-purple uppercase">demander un devis</span>{" "}
                            <span className="font-bold uppercase text-white">GRATUIT</span> !
                        </p>
                    </motion.h1>
                </LampContainer>
            </div>
        </section>
    );
};

export default Contact;
