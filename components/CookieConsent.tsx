"use client";

import React, { useEffect, useState } from "react";
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
        <div className="fixed inset-0 z-[100] h-5 flex items-center justify-center">
            <div className="fixed bottom-5 md:left-5 w-[90%] md:w-[50%] lg:w-[30%]">
                <ShineBorder
                    className="relative overflow-hidden flex flex-col md:flex-row md:justify-around text-center mx-auto gap-5 bg-black-100/85 rounded-lg border-2 md:shadow-xl"
                    color={["#905BF4", "#4E2BCC", "#594199"]}
                >
                    <span className="text-sm md:text-base md:text-start">
                        Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur. En
                        utilisant le site, vous consentez à tous les cookies conformément à notre
                        politique de cookies.
                    </span>
                    <div className="flex flex-col gap-5 justify-center z-[100]">
                        <button
                            className="bg-gold-100 py-2 px-8 rounded text-white border border-white hover:bg-white-100 hover:text-black-100 transition-all duration-300 ease-in-out"
                            onClick={acceptCookie}
                        >
                            Accepter
                        </button>
                        <button
                            className="bg-gold-100 py-2 px-8 rounded text-white border border-white hover:bg-white-100 hover:text-black-100 transition-all duration-300 ease-in-out"
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
