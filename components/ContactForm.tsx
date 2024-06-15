"use client";

import React, { useState } from "react";
import { cn } from "@/utils/cn";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [sujet, setSujet] = useState("");
    const [message, setMessage] = useState("");
    /* Etats de validation pour le mail */
    const [emailValid, setEmailValid] = useState(true);
    /* Etats des messages d'erreur */
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [sujetError, setSujetError] = useState("");
    const [messageError, setMessageError] = useState("");
    /* Etats de validation pour les champs */
    const [isFirstNameValid, setIsFirstNameValid] = useState(false);
    const [isLastNameValid, setIsLastNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isSujetValid, setIsSujetValid] = useState(false);
    const [isMessageValid, setIsMessageValid] = useState(false);
    /* Etats de succès pour les messages */
    const [firstNameSuccessShown, setFirstNameSuccessShown] = useState(false);
    const [lastNameSuccessShown, setLastNameSuccessShown] = useState(false);
    const [emailSuccessShown, setEmailSuccessShown] = useState(false);
    const [sujetSuccessShown, setSujetSuccessShown] = useState(false);
    const [messageSuccessShown, setMessageSuccessShown] = useState(false);

    type Email = string;

    const validateEmail = (email: Email) => {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        return pattern.test(email);
    };

    type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

    const handleChange = (e: ChangeEvent) => {
        const { name, value } = e.target;
        switch (name) {
            case "firstname":
                setFirstName(value);
                if (value.length < 3) {
                    toast.warning("Votre nom doit contenir au minimum 3 caractères");
                    setIsFirstNameValid(false);
                    setFirstNameSuccessShown(false);
                } else {
                    setFirstNameError("");
                    setIsFirstNameValid(true);
                    if (!firstNameSuccessShown) {
                        toast.success("Votre nom est valide");
                        setFirstNameSuccessShown(true);
                    }
                }
                break;
            case "lastname":
                setLastName(value);
                if (value.length < 3) {
                    toast.warning("Votre prénom doit contenir au minimum 3 caractères");
                    setIsLastNameValid(false);
                    setLastNameSuccessShown(false);
                } else {
                    setLastNameError("");
                    setIsLastNameValid(true);
                    if (!lastNameSuccessShown) {
                        toast.success("Votre prénom est valide");
                        setLastNameSuccessShown(true);
                    }
                }
                break;
            case "email":
                setEmail(value);
                setEmailValid(validateEmail(value));
                if (!validateEmail(value)) {
                    toast.warning("Veuillez entrer une adresse email valide");
                    setIsEmailValid(false);
                    setEmailSuccessShown(false);
                } else {
                    setEmailError("");
                    setIsEmailValid(true);
                    if (!emailSuccessShown) {
                        toast.success("Votre email est valide");
                        setEmailSuccessShown(true);
                    }
                }
                break;
            case "sujet":
                setSujet(value);
                if (value.length < 3) {
                    toast.warning("Votre sujet doit contenir au minimum 3 caractères");
                    setIsSujetValid(false);
                    setSujetSuccessShown(false);
                } else {
                    setSujetError("");
                    setIsSujetValid(true);
                    if (!sujetSuccessShown) {
                        toast.success("Votre sujet est valide");
                        setSujetSuccessShown(true);
                    }
                }
                break;
            case "message":
                setMessage(value);
                if (value.length < 3) {
                    toast.warning("Votre message doit contenir au minimum 3 caractères");
                    setIsMessageValid(false);
                    setMessageSuccessShown(false);
                } else {
                    setMessageError("");
                    setIsMessageValid(true);
                    if (!messageSuccessShown) {
                        toast.success("Votre message est valide");
                        setMessageSuccessShown(true);
                    }
                }
                break;
            default:
                break;
        }
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setSujet("");
        setMessage("");
        setFirstNameError("");
        setLastNameError("");
        setEmailError("");
        setSujetError("");
        setMessageError("");
        setIsFirstNameValid(false);
        setIsLastNameValid(false);
        setIsEmailValid(false);
        setIsSujetValid(false);
        setIsMessageValid(false);
        setFirstNameSuccessShown(false);
        setLastNameSuccessShown(false);
        setEmailSuccessShown(false);
        setSujetSuccessShown(false);
        setMessageSuccessShown(false);
        toast.success("Les champs ont été réinitialisés");
    };

    const handleSendEmail = () => {
        const subject = `${sujet} de ${firstName} ${lastName}`;
        const body = `Email: ${email}%0D%0A%0D%0A${message}`;
        window.location.href = `mailto:vachet.matthieu@icloud.com?subject=${subject}&body=${body}`;
    };

    type SubmitEvent = React.FormEvent<HTMLFormElement>;

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        if (
            !isFirstNameValid ||
            !isLastNameValid ||
            !isEmailValid ||
            !isSujetValid ||
            !isMessageValid
        ) {
            toast.error("Veuillez remplir correctement les champs");
            return;
        }
        handleSendEmail();
    };

    return (
        <div className=" w-full mx-auto rounded-2xl p-5 md:p-8 border border-white/[0.1] shadow-[0px_5px_50px_5px_rgba(48,_58,_117,_0.2)] bg-glass-gradient hover:shadow-[0px_5px_50px_5px_rgba(48,_58,_117,_1)] transition-shadow duration-500">
            <form className="" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label className="text-lg" htmlFor="firstname">
                            Nom
                        </Label>
                        <Input
                            className="text-lg"
                            id="firstname"
                            name="firstname"
                            placeholder="Tyler"
                            type="text"
                            value={firstName}
                            onChange={handleChange}
                            aria-label="firstname"
                        />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label className="text-lg" htmlFor="lastname">
                            Prénom
                        </Label>
                        <Input
                            className="text-lg"
                            id="lastname"
                            name="lastname"
                            placeholder="Durden"
                            type="text"
                            value={lastName}
                            onChange={handleChange}
                            aria-label="lastname"
                        />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label className="text-lg" htmlFor="email">
                        Email
                    </Label>
                    <Input
                        className="text-lg relative"
                        id="email"
                        name="email"
                        placeholder="Exemple@gmail.com"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        aria-label="email"
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label className="text-lg" htmlFor="Sujets">
                        Sujets
                    </Label>
                    <Input
                        className="text-lg"
                        id="Sujets"
                        name="sujet"
                        placeholder="Demande de devis"
                        type="text"
                        value={sujet}
                        onChange={handleChange}
                        aria-label="Sujets"
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                    <Label className="text-lg" htmlFor="message">
                        Votre message
                    </Label>
                    <Textarea
                        className="text-lg"
                        id="message"
                        name="message"
                        placeholder="Bonjour, je voudrais ..."
                        value={message}
                        onChange={handleChange}
                        aria-label="message"
                    />
                    <div>
                        {firstNameError && <p className="text-red-500">{firstNameError}</p>}
                        {lastNameError && <p className="text-red-500">{lastNameError}</p>}
                        {emailError && <p className="text-red-500">{emailError}</p>}
                        {sujetError && <p className="text-red-500">{sujetError}</p>}
                        {messageError && <p className="text-red-500">{messageError}</p>}
                    </div>
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br text-lg relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] mb-4"
                    type="submit"
                >
                    Envoyer &rarr;
                    <BottomGradient />
                </button>
                <button
                    className="bg-gradient-to-br text-lg relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="button"
                    onClick={handleReset}
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
