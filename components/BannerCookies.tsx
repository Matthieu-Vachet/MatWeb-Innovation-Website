"use client";

import React from "react";
import { hasCookie, setCookie, getCookies } from "cookies-next";

import MagicButton from "./MagicButton";

const CookieConsent = (props: any) => {
    const [showConsent, setShowConsent] = React.useState(true);

    React.useEffect(() => {
        setShowConsent(hasCookie("localConsent"));
    }, []);

    const acceptCookie = () => {
        setShowConsent(true);
        setCookie("localConsent", "true", {});
    };

    const refuseCookie = () => {
        setShowConsent(true);
    };

    const cookies = getCookies();
    Object.keys(cookies).forEach((cookieName) => {
        console.log(cookieName);
    });

    if (showConsent) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 h-5 flex items-center justify-center">
            <div className="fixed bottom-5 md:left-5 w-[90%] md:w-[30%] 3xl:w-[20%] flex flex-col md:flex-row md:justify-around text-center mx-auto py-4 gap-5 bg-black-100/80 p-5 rounded-xl border">
                <span className=" text-sm md:text-base md:text-start">
                    Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur. En
                    utilisant le site, vous consentez à tous les cookies conformément à notre
                    politique de cookies.
                </span>
                <div className="flex flex-col gap-5 justify-center">
                    <button
                        className="bg-gold-100 py-2 px-8 rounded text-white border border-white hover:bg-white-100 hover:text-black-100 transition-all duration-300 ease-in-out"
                        onClick={() => acceptCookie()}
                    >
                        Accepter
                    </button>
                    <button
                        className="bg-gold-100 py-2 px-8 rounded text-white border border-white hover:bg-white-100 hover:text-black-100 transition-all duration-300 ease-in-out"
                        onClick={() => refuseCookie()}
                    >
                        Refuser
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
