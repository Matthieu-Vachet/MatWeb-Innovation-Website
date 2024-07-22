import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Faqs() {
    const faqsList = [
        {
            questions: "What are some random questions to ask?",
            réponses:
                "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
        },
        {
            questions: "Do you include common questions?",
            réponses:
                "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
        },
        {
            questions: "Can I use this for 21 questions?",
            réponses:
                "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
        },
        {
            questions: "Are these questions for girls or for boys?",
            réponses:
                "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
        },
        {
            questions: "What do you wish you had more talent doing?",
            réponses:
                "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
        },
    ];

    return (
        <section
            className="relative bg-gradient-to-b from-black-100 via-blue-100/30 to-black-100"
            id="faq"
        >
            <div className=" relative max-w-[100vw] lg:max-w-[80vw] imac:max-w-[60vw] mx-auto  md:flex px-4 md:px-6">
                <div className="flex-1 ">
                    <div>
                        <h3 className="mt-3 font-extrabold title-size text-gradient ">F.A.Q</h3>
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
