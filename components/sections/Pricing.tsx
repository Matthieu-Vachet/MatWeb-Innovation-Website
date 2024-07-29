"use client";
import { useState } from "react";
import Link from "next/link";
import SparklesText from "@/components/ui/SparklesText";
import MagicButton from "../MagicButton";
import { tiers } from "@/data/PricingData";
import { FaArrowRight } from "react-icons/fa";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import AnimatedElement from "../ui/AnimatedElement";
import ChevronAnimation from "@/components/ChevronAnimation";

const Pricing = () => {
    const [tierSelected, setTierSelected] = useState("Intégration");

    const handleCategoryChange = (category: string) => {
        setTierSelected(category);
    };

    const filteredTiers = tiers.filter((tier) => tier.category === tierSelected);

    return (
        <section
            id="mes-tarifs"
            className="relative bg-gradient-to-b from-black-100 via-purple-700/15 to-black-100"
        >
            <AnimatedElement delay={0.4} duration={0.5}>
                <h3 className="w-full text-gradient translate-y-[40%] text-center [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0 -mt-[8rem] md:-mt-[25rem] mb-28 lg:mb-40 flex flex-col title-size">
                    Aperçu de mes offres <br />
                    <span className="text-purple subtitle subtitle-size">
                        Des offres adaptées à vos projets pour des sites internet de qualité !
                    </span>
                </h3>
            </AnimatedElement>

            <div className="flex justify-center space-x-4 mb-8">
                <button
                    className={`px-4 py-2 rounded-md ${
                        tierSelected === "Intégration"
                            ? "bg-purple-600 text-white"
                            : "bg-gray-200 text-black"
                    }`}
                    onClick={() => handleCategoryChange("Intégration")}
                >
                    Intégration
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${
                        tierSelected === "Développement"
                            ? "bg-purple-600 text-white"
                            : "bg-gray-200 text-black"
                    }`}
                    onClick={() => handleCategoryChange("Développement")}
                >
                    Développement
                </button>
            </div>

            <div className="mx-auto max-w-[90vw] lg:max-w-[100vw] imac:max-w-[60vw] mt-26 lg:mt-20">
                <div className="md:hidden flex justify-end items-end w-full mb-3">
                    <ChevronAnimation />
                </div>
                <div className="hidden lg:block mx-auto lg:max-w-7xl px-6 text-center lg:px-8">
                    <div className="relative mt-6 opacity-50">
                        <svg
                            viewBox="0 0 1208 1024"
                            className="absolute opacity-50 left-1/2 -z-8 h-[50rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:top-[10rem]"
                        >
                            <ellipse
                                cx={604}
                                cy={512}
                                fill="url(#id6d1bd035-0dd1-437e-93fa-59d316231eb0)"
                                rx={604}
                                ry={512}
                            />
                            <defs>
                                <radialGradient id="id6d1bd035-0dd1-437e-93fa-59d316231eb0">
                                    <stop offset={0} stopColor="#905BF4" />
                                    <stop offset={1} stopColor="#594199" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="flow-root z-20 bg-transparent">
                    <div className="mx-auto max-w-[100vw] md:max-w-[95vw] lg:max-w-7xl">
                        <div className="relative flex flex-col gap-10">
                            <div className="flex lg:hidden overflow-x-auto scrollbar-hide gap-10 sm:gap-8">
                                {filteredTiers.map((tier) => (
                                    <div
                                        key={tier.id}
                                        className={`relative flex-shrink-0 w-[87vw] flex flex-col justify-between rounded-3xl p-8 shadow-xl ring-1 ring-gray-900/10 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] ${
                                            tier.bestSeller
                                                ? "[border:2px_solid_rgba(144,91,244,.5)]"
                                                : ""
                                        }`}
                                    >
                                        {tier.bestSeller && (
                                            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 text-lg font-bold rounded-br-lg">
                                                Best Seller
                                            </div>
                                        )}
                                        <div>
                                            <div className="flex gap-2 flex-col items-center">
                                                <div
                                                    id={tier.id}
                                                    className="text-xl font-semibold leading-7 text-purple"
                                                >
                                                    <SparklesText
                                                        text={tier.name}
                                                        colors={{
                                                            first: "#A07CFE",
                                                            second: "#FE8FB5",
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-sm text-white-100/70 text-center">
                                                    {tier.details}
                                                </span>
                                            </div>
                                            <hr className="my-5 h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2)_50%,transparent)]" />
                                            {tier.maintenance ? (
                                                <div className="flex justify-center items-baseline gap-x-2">
                                                    <span className="text-base font-semibold leading-7 text-gray-200">
                                                        Taux Horaire
                                                    </span>
                                                    <span className="text-5xl font-bold tracking-tight text-gray-100">
                                                        {tier.priceMonthly}
                                                    </span>
                                                </div>
                                            ) : (
                                                <div className="flex justify-center items-baseline gap-x-2">
                                                    <span
                                                        className={`text-base font-semibold leading-7 text-gray-200 ${
                                                            tier.fixedPrice ? "hidden" : ""
                                                        }`}
                                                    >
                                                        À partir de
                                                    </span>
                                                    <span className="text-5xl font-bold tracking-tight text-gray-100">
                                                        {tier.priceMonthly}
                                                    </span>
                                                </div>
                                            )}
                                            <hr className="my-5 h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2)_50%,transparent)]" />
                                            <p className="flex justify-center text-center mt-6 text-sm leading-7 text-gray-200">
                                                {tier.description}
                                            </p>
                                            <div className="mt-4 flex justify-center space-x-4">
                                                {tier.icones.map((icon, index) => (
                                                    <span
                                                        key={index}
                                                        className="text-2xl text-gray-100"
                                                    >
                                                        {icon}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="text-center mt-5 text-xl text-purple font-semibold">
                                                <p>{tier.paiement}</p>
                                            </div>
                                            <ul
                                                role="list"
                                                className="mt-10 space-y-4 text-sm leading-6 text-gray-200"
                                            >
                                                {tier.features.map((feature) => (
                                                    <li key={feature} className="flex gap-x-3">
                                                        <IoCheckmarkDoneOutline
                                                            className="h-6 w-5 flex-none text-purple"
                                                            aria-hidden="true"
                                                        />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {tier.button && (
                                            <Link
                                                href="#formulaire-de-contact"
                                                title="Demander un devis Gratuit"
                                                aria-describedby="Demander un devis Gratuit"
                                                className="mt-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms] text-center"
                                            >
                                                <MagicButton
                                                    title="Devis Gratuit en 24H"
                                                    position="left"
                                                />
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="hidden lg:grid lg:grid-cols-3 gap-10 sm:gap-8">
                                {filteredTiers.map((tier) => (
                                    <div
                                        key={tier.id}
                                        className={`relative flex-shrink-0 w-full sm:w-auto flex flex-col justify-between rounded-3xl p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] ${
                                            tier.bestSeller
                                                ? "[border:2px_solid_rgba(144,91,244,.5)]"
                                                : ""
                                        }`}
                                    >
                                        {tier.bestSeller && (
                                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 text-lg font-bold rounded-br-lg">
                                                Best Seller
                                            </div>
                                        )}
                                        <div>
                                            <div className="flex gap-2 flex-col items-center">
                                                <div
                                                    id={tier.id}
                                                    className="text-xl font-semibold leading-7 text-purple"
                                                >
                                                    <SparklesText
                                                        text={tier.name}
                                                        colors={{
                                                            first: "#A07CFE",
                                                            second: "#FE8FB5",
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-sm text-white-100/70 text-center">
                                                    {tier.details}
                                                </span>
                                            </div>
                                            <hr className="my-5 h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2)_50%,transparent)]" />
                                            {tier.maintenance ? (
                                                <div className="flex justify-center items-baseline gap-x-2">
                                                    <span className="text-base font-semibold leading-7 text-gray-200">
                                                        Taux Horaire
                                                    </span>
                                                    <span className="text-5xl font-bold tracking-tight text-gray-100">
                                                        {tier.priceMonthly}
                                                    </span>
                                                </div>
                                            ) : (
                                                <div className="flex justify-center items-baseline gap-x-2">
                                                    <span
                                                        className={`text-base font-semibold leading-7 text-gray-200 ${
                                                            tier.fixedPrice ? "hidden" : ""
                                                        }`}
                                                    >
                                                        À partir de
                                                    </span>
                                                    <span className="text-5xl font-bold tracking-tight text-gray-100">
                                                        {tier.priceMonthly}
                                                    </span>
                                                </div>
                                            )}
                                            <hr className="my-5 h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2)_50%,transparent)]" />
                                            <p className="flex justify-center text-center mt-6 text-sm leading-7 text-gray-200">
                                                {tier.description}
                                            </p>
                                            <div className="mt-4 flex justify-center space-x-4">
                                                {tier.icones.map((icon, index) => (
                                                    <span
                                                        key={index}
                                                        className="text-2xl text-gray-100"
                                                    >
                                                        {icon}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="text-center mt-5 text-xl text-purple font-semibold">
                                                <p>{tier.paiement}</p>
                                            </div>
                                            <ul
                                                role="list"
                                                className="mt-10 space-y-4 text-sm leading-6 text-gray-200"
                                            >
                                                {tier.features.map((feature) => (
                                                    <li key={feature} className="flex gap-x-3">
                                                        <IoCheckmarkDoneOutline
                                                            className="h-6 w-5 flex-none text-purple"
                                                            aria-hidden="true"
                                                        />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {tier.button && (
                                            <Link
                                                href="#formulaire-de-contact"
                                                title="Demander un devis Gratuit"
                                                aria-describedby="Demander un devis Gratuit"
                                                className="mt-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms] text-center"
                                            >
                                                <MagicButton
                                                    title="Devis Gratuit en 24H"
                                                    position="left"
                                                />
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col items-center gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-1 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
                                <div className="lg:min-w-0 text-center">
                                    <p className="uppercase text-xl font-semibold leading-8 tracking-tight text-purple">
                                        Développements spécifique
                                    </p>
                                    <p className="uppercase mt-1 text-base leading-7 text-gray-200 ">
                                        Taux journalier moyen
                                    </p>
                                    <p className="mt-1 mb-10 text-gray-200 text-5xl font-semibold">
                                        300€
                                        <span className="text-xl uppercase text-purple">/jour</span>
                                    </p>
                                    <Link
                                        href="#formulaire-de-contact"
                                        title="Me contacter pour un devis Gratuit"
                                        aria-label="Me contacter pour un devis Gratuit"
                                        className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms] text-center"
                                    >
                                        <MagicButton title="Me contacter" position="left" />
                                    </Link>
                                </div>
                            </div>
                            <div className="lg:flex lg:justify-center lg:space-x-8 lg:items-center">
                                <div className="flex-1">
                                    <p className="text-2xl md:text-4xl font-semibold leading-8 tracking-tight text-purple">
                                        Informations
                                    </p>
                                    <p className="flex items-center gap-3 mt-5 text-sm md:text-xl leading-7 text-gray-200 font-bold">
                                        <FaArrowRight className="h-5 w-4 flex-none text-purple" />
                                        L&apos;ensemble des tarifs indiqués sont H.T
                                    </p>
                                    <p className="flex items-center gap-3 mt-3 text-sm md:text-xl leading-7 text-gray-200">
                                        <FaArrowRight className="h-5 w-4 flex-none text-purple" />
                                        <span className="font-bold">
                                            Tarifs à titre informatif :
                                        </span>
                                    </p>
                                    <p className="text-sm md:text-lg leading-7 text-gray-200">
                                        Changement possible selon les demandes et les choix du
                                        client.
                                    </p>
                                    <p className="flex items-center gap-3 mt-3 text-sm md:text-xl">
                                        <FaArrowRight className="h-5 w-4 flex-none text-purple" />
                                        <span className="font-bold">
                                            Droit d&apos;auteur & Propriété intellectuelle :
                                        </span>
                                    </p>
                                    <p className="text-sm md:text-lg leading-7 text-gray-200">
                                        A la remise du projet, vous êtes propriétaire de
                                        l&apos;ensemble des sources composant votre site web.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;

// "use client";
// import { useState } from "react";
// import Link from "next/link";

// import SparklesText from "@/components/ui/SparklesText";
// import MagicButton from "../MagicButton";

// import { tiers } from "@/data/PricingData";

// import { FaArrowRight } from "react-icons/fa";
// import { IoCheckmarkDoneOutline } from "react-icons/io5";
// import AnimatedElement from "../ui/AnimatedElement";

// const Pricing = () => {
//     const [tierSelected, setTierSelected] = useState("Intégration");

//     const handleCategoryChange = (category: string) => {
//         setTierSelected(category);
//     };

//     const filteredTiers = tiers.filter((tier) => tier.category === tierSelected);

//     return (
//         <section
//             id="mes-tarifs"
//             className="relative bg-gradient-to-b from-black-100 via-purple-700/15 to-black-100"
//         >
//             <AnimatedElement delay={0.4} duration={0.5}>
//                 <h3 className="w-full text-gradient translate-y-[40%] text-center [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0 -mt-[8rem] md:-mt-[25rem] mb-28 md:mb-40 flex flex-col title-size">
//                     Apercu de mes offres <br />
//                     <span className="text-purple subtitle subtitle-size">
//                         Des offres adaptées à vos projets pour des sites internet de qualité !
//                     </span>
//                 </h3>
//             </AnimatedElement>

//             <div className="flex justify-center space-x-4 mb-8">
//                 <button
//                     className={`px-4 py-2 rounded-md ${
//                         tierSelected === "Intégration"
//                             ? "bg-purple-600 text-white"
//                             : "bg-gray-200 text-black"
//                     }`}
//                     onClick={() => handleCategoryChange("Intégration")}
//                 >
//                     Intégration
//                 </button>
//                 <button
//                     className={`px-4 py-2 rounded-md ${
//                         tierSelected === "Développement"
//                             ? "bg-purple-600 text-white"
//                             : "bg-gray-200 text-black"
//                     }`}
//                     onClick={() => handleCategoryChange("Développement")}
//                 >
//                     Développement
//                 </button>
//             </div>

//             <div className=" mx-auto max-w-[100vw] lg:max-w-[100vw] imac:max-w-[60vw] mt-32 md:mt-20 ">
//                 <div className="hidden md:block mx-auto lg:max-w-7xl px-6 text-center lg:px-8 ">
//                     <div className="relative mt-6 opacity-50">
//                         <svg
//                             viewBox="0 0 1208 1024"
//                             className="absolute opacity-50 left-1/2 -z-8 h-[50rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:top-[10rem]"
//                         >
//                             <ellipse
//                                 cx={604}
//                                 cy={512}
//                                 fill="url(#id6d1bd035-0dd1-437e-93fa-59d316231eb0)"
//                                 rx={604}
//                                 ry={512}
//                             />
//                             <defs>
//                                 <radialGradient id="id6d1bd035-0dd1-437e-93fa-59d316231eb0">
//                                     <stop offset={0} stopColor="#905BF4" />
//                                     <stop offset={1} stopColor="#594199" />
//                                 </radialGradient>
//                             </defs>
//                         </svg>
//                     </div>
//                 </div>
//                 <div className="flow-root z-20 bg-transparent pb-24 sm:pb-32">
//                     <div>
//                         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//                             <div className="mx-auto grid grid-cols-1 gap-10 lg:grid-cols-3">
//                                 {filteredTiers.map((tier) => (
//                                     <div
//                                         key={tier.id}
//                                         className={`relative flex z-10 flex-col justify-between rounded-3xl p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] ${
//                                             tier.bestSeller
//                                                 ? "[border:2px_solid_rgba(144,91,244,.5)]"
//                                                 : ""
//                                         }`}
//                                     >
//                                         {tier.bestSeller && (
//                                             <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 text-lg font-bold rounded-br-lg">
//                                                 Best Seller
//                                             </div>
//                                         )}
//                                         <div>
//                                             <div className="flex gap-2 flex-col items-center">
//                                                 <div
//                                                     id={tier.id}
//                                                     className="text-xl font-semibold leading-7 text-purple"
//                                                 >
//                                                     <SparklesText
//                                                         text={tier.name}
//                                                         colors={{
//                                                             first: "#A07CFE",
//                                                             second: "#FE8FB5",
//                                                         }}
//                                                     />
//                                                 </div>
//                                                 <span className="text-sm text-white-100/70 text-center">
//                                                     {tier.details}
//                                                 </span>
//                                             </div>
//                                             <hr className="my-5 h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2)_50%,transparent)]" />
//                                             {tier.maintenance ? (
//                                                 <div className=" flex justify-center items-baseline gap-x-2">
//                                                     <span className="text-base font-semibold leading-7 text-gray-200">
//                                                         Taux Horaire
//                                                     </span>
//                                                     <span className="text-5xl font-bold tracking-tight text-gray-100">
//                                                         {tier.priceMonthly}
//                                                     </span>
//                                                 </div>
//                                             ) : (
//                                                 <div className=" flex justify-center items-baseline gap-x-2">
//                                                     <span
//                                                         className={`text-base font-semibold leading-7 text-gray-200 ${
//                                                             tier.fixedPrice ? "hidden" : ""
//                                                         }`}
//                                                     >
//                                                         À partir de
//                                                     </span>
//                                                     <span className="text-5xl font-bold tracking-tight text-gray-100">
//                                                         {tier.priceMonthly}
//                                                     </span>
//                                                 </div>
//                                             )}
//                                             <hr className="my-5 h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2)_50%,transparent)]" />

//                                             <p className=" flex justify-center text-center mt-6 text-sm leading-7 text-gray-200">
//                                                 {tier.description}
//                                             </p>
//                                             <div className="mt-4 flex justify-center space-x-4">
//                                                 {tier.icones.map((icon, index) => (
//                                                     <span
//                                                         key={index}
//                                                         className="text-2xl text-gray-100"
//                                                     >
//                                                         {icon}
//                                                     </span>
//                                                 ))}
//                                             </div>
//                                             <div className=" text-center mt-5 text-xl text-purple font-semibold ">
//                                                 <p>{tier.paiement}</p>
//                                             </div>
//                                             <ul
//                                                 role="list"
//                                                 className="mt-10 space-y-4 text-sm leading-6 text-gray-200"
//                                             >
//                                                 {tier.features.map((feature) => (
//                                                     <li key={feature} className="flex gap-x-3">
//                                                         <IoCheckmarkDoneOutline
//                                                             className="h-6 w-5 flex-none text-purple"
//                                                             aria-hidden="true"
//                                                         />
//                                                         {feature}
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                         {tier.button && (
//                                             <Link
//                                                 href="#formulaire-de-contact"
//                                                 title="Demander un devis Gratuit"
//                                                 aria-describedby="Demander un devis Gratuit"
//                                                 className="mt-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms] text-center"
//                                             >
//                                                 <MagicButton
//                                                     title="Devis Gratuit en 24H"
//                                                     position="left"
//                                                 />
//                                             </Link>
//                                         )}
//                                     </div>
//                                 ))}
//                                 <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center  dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
//                                     <div className="lg:min-w-0 lg:flex-1">
//                                         <p className="text-2xl font-semibold leading-8 tracking-tight text-purple">
//                                             Informations
//                                         </p>
//                                         <p className="flex items-center gap-3 mt-5 text-sm leading-7 text-gray-200 font-bold">
//                                             <FaArrowRight className="h-5 w-4 flex-none text-purple" />
//                                             L&apos;ensemble des tarifs indiqués sont H.T
//                                         </p>
//                                         <p className="flex items-center gap-3 mt-3 text-sm leading-7 text-gray-200">
//                                             <FaArrowRight className="h-5 w-4 flex-none text-purple" />
//                                             <span className="font-bold">
//                                                 Tarifs à titre informatif :
//                                             </span>
//                                         </p>
//                                         <p className="text-sm leading-7 text-gray-200">
//                                             Changement possible selon les demandes et les choix du
//                                             client.
//                                         </p>
//                                         <p className="flex items-center gap-3 mt-3 text-sm ">
//                                             <FaArrowRight className="h-5 w-4 flex-none text-purple" />
//                                             <span className="font-bold">
//                                                 Droit d&apos;auteur & Propriété intellectuelle :
//                                             </span>
//                                         </p>
//                                         <p className="text-sm leading-7 text-gray-200">
//                                             A la remise du projet, vous êtes propriétaire de
//                                             l&apos;ensemble des sources composant votre site web.
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col items-center gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-1  [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
//                                     <div className="lg:min-w-0 text-center">
//                                         <p className="uppercase text-xl font-semibold leading-8 tracking-tight text-purple">
//                                             Développements spécifique
//                                         </p>
//                                         <p className="uppercase mt-1 text-base leading-7 text-gray-200 ">
//                                             Taux journalier moyen
//                                         </p>
//                                         <p className="mt-1 mb-10 text-gray-200 text-5xl font-semibold">
//                                             300€
//                                             <span className="text-xl uppercase text-purple">
//                                                 /jour
//                                             </span>
//                                         </p>
//                                         <Link
//                                             href="#formulaire-de-contact"
//                                             title="Me contacter pour un devis Gratuit"
//                                             aria-label="Me contacter pour un devis Gratuit"
//                                             className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms] text-center"
//                                         >
//                                             <MagicButton title="Me contacter" position="left" />
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Pricing;
