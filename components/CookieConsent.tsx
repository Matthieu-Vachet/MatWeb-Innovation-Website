"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { hasCookie, setCookie, deleteCookie } from "cookies-next";
import ShineBorder from "@/components/ui/ShineBorder";

const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        if (!hasCookie("localConsent")) {
            setShowConsent(true);
        }
    }, []);

    const acceptCookie = () => {
        setCookie("localConsent", "true", {
            maxAge: 60 * 60 * 24 * 365, // 1 an
            path: "/",
            secure: true,
            sameSite: "strict",
        });
        setShowConsent(false);
    };

    const refuseCookie = () => {
        deleteCookie("localConsent", { path: "/" });
        setShowConsent(false);
    };

    if (!showConsent) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-[99] h-5 flex items-center justify-center">
            <div className="fixed bottom-5 md:left-5 w-[90%] md:w-[50%] lg:w-[30%]">
                <ShineBorder
                    className="relative overflow-hidden flex flex-col md:flex-row md:justify-around text-center mx-auto gap-5 bg-black-100/85 rounded-lg border-2 md:shadow-xl"
                    color={["#905BF4", "#4E2BCC", "#594199"]}
                >
                    <span className="text-sm md:text-base md:text-start z-[100]">
                        Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur. En
                        utilisant le site, vous consentez à tous les cookies conformément à notre
                        politique de cookies. <br />
                        <Link
                            href="/mentions-legales"
                            className="text-purple underline cursor-pointer z-[100]"
                            title="En savoir plus"
                            aria-label="En savoir plus"
                        >
                            En savoir plus
                        </Link>
                    </span>
                    <div className="flex flex-col gap-5 justify-center">
                        <button
                            className="bg-gold-100 py-2 px-8 rounded text-white border border-white hover:bg-white-100 hover:text-black-100 transition-all duration-300 ease-in-out z-[100]"
                            onClick={acceptCookie}
                        >
                            Accepter
                        </button>
                        <button
                            className="bg-gold-100 py-2 px-8 rounded text-white border border-white hover:bg-white-100 hover:text-black-100 transition-all duration-300 ease-in-out z-[100]"
                            onClick={refuseCookie}
                        >
                            Refuser
                        </button>
                    </div>
                </ShineBorder>
            </div>
        </div>
    );
};

export default CookieConsent;
