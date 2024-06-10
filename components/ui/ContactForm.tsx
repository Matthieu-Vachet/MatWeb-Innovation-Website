"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import { Textarea } from "./textarea";

export function ContactForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div className=" w-full mx-auto rounded-2xl p-5 md:p-8 border border-white/[0.1] shadow-[0px_5px_50px_5px_rgba(48,_58,_117,_0.2)] bg-glass-gradient hover:shadow-[0px_5px_50px_5px_rgba(48,_58,_117,_1)] transition-shadow duration-500">
            <form className="" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label className="text-lg" htmlFor="firstname">
                            Nom
                        </Label>
                        <Input className="text-lg" id="firstname" placeholder="Tyler" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label className="text-lg" htmlFor="lastname">
                            Prénom
                        </Label>
                        <Input className="text-lg" id="lastname" placeholder="Durden" type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label className="text-lg" htmlFor="email">
                        Email
                    </Label>
                    <Input
                        className="text-lg"
                        id="email"
                        placeholder="Exemple@gmail.com"
                        type="email"
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label className="text-lg" htmlFor="Sujets">
                        Sujets
                    </Label>
                    <Input
                        className="text-lg"
                        id="Sujets"
                        placeholder="Demande de devis"
                        type="text"
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                    <Label className="text-lg" htmlFor="message">
                        Votre message
                    </Label>
                    <Textarea
                        className="text-lg"
                        placeholder="Bonjour, je voudrais ..."
                        id="message"
                    />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br text-lg relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] mb-4"
                    type="submit"
                >
                    Envoyer &rarr;
                    <BottomGradient />
                </button>
                <button
                    className="bg-gradient-to-br text-lg relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Effacer &rarr;
                    <BottomGradient />
                </button>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-blue to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-blue to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
