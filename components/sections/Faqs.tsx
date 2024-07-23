import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Faqs() {
    const faqsList = [
        {
            questions: "Quel est le prix d'un site internet ?",
            réponses:
                "En général, le coût dépend de la complexité du projet et du type de service requis. Par exemple, un CV en ligne ou une landing page est moins coûteux qu'un portfolio complet ou un site vitrine. L'intégration d'une maquette ou d'une palette graphique existante sera toujours moins chère que la création complète du design. Pour une estimation précise, n'hésitez pas à me contacter.",
        },
        {
            questions: "Le design de mon site sera-t-il unique ?",
            réponses:
                "Votre site sera unique, que ce soit par l'intégration de votre palette graphique ou maquette existante, ou par une création sur mesure. Chaque projet est personnalisé pour refléter votre image avec une interface moderne et élégante. J'utilise des animations avancées avec Framer Motion, GSAP, et d'autres technologies pour garantir une expérience utilisateur exceptionnelle.",
        },
        {
            questions: "Mon site sera-t-il adapté sur mobile ?",
            réponses:
                "Oui, tous mes projets sont conçus pour être adaptés aux mobiles, tablettes et desktops. Sur demande, je peux également adapter votre site pour de très grands écrans, garantissant ainsi une expérience utilisateur optimale sur tous les types de dispositifs.",
        },
        {
            questions: "Serai-je autonome pour gérer les contenus de mon site web ?",
            réponses:
                "Oui, vous pourrez gérer vos contenus de manière autonome si vous le souhaitez. Je vous fournirai une formation pour maîtriser l'outil de gestion. Pour un portfolio ou un CV en ligne, vous pourrez ajouter, modifier ou supprimer des projets, des expériences et des photos. Sur une landing page, vous pourrez ajuster les textes, les images et les galeries de photos. Si vous préférez déléguer cette gestion, je peux également prendre en charge cette tâche, partiellement ou totalement, via un contrat spécifique.",
        },
    ];

    return (
        <section
            className="relative bg-gradient-to-b from-black-100 via-blue-100/20 to-black-100"
            id="faq"
        >
            <div className=" relative max-w-[100vw] lg:max-w-[80vw] imac:max-w-[60vw] mx-auto  md:flex px-4 md:px-6">
                <div className="flex-1 ">
                    <div>
                        <h3 className="mt-3 font-extrabold text-2xl md:text-9xl text-gradient ">
                            F.A.Q
                        </h3>
                    </div>
                </div>
                <div className="flex-1 mt-12 md:mt-0">
                    <ul className="space-y-4 divide-y">
                        {faqsList.map((item, idx) => (
                            <li className="py-5" key={idx}>
                                <summary className="flex items-center justify-between composant-title-size font-semibold text-blue">
                                    {item.questions}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.réponses }}
                                    className="mt-3 text-md text-white-100 leading-relaxed"
                                ></p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
