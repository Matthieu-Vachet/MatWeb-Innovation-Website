"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/AppleCardsCarousel";
import { DataProjets } from "@/data/Constants"; // Assure-toi d'importer tes données de projet correctement

export function AppleCardsCarouselDemo() {
    // Crée des cartes en utilisant les données des projets
    const cards = DataProjets.map((project, index) => (
        <Card key={project.id} card={project} index={index} />
    ));

    return (
        <div className="w-full h-full">
            <Carousel items={cards} />
        </div>
    );
}
