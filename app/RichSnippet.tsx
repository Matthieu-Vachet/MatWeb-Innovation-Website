import JSONLD from "../components/JSONLD";

const RichSnippet = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Matthieu Vachet",
        url: "https://www.matthieu-vachet.fr/",
        logo: "/LogoWhite.webp",
        telephone: "+33744890831",
        email: "matweb_innovation@icloud.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: "10 rue de Marle",
            addressLocality: "Puisieux et Clanlieu",
            addressRegion: "Haut de France",
            postalCode: "02120",
            addressCountry: "FR",
        },
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: "+33744890831",
            email: "matweb_innovation@icloud.com",
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
            },
        },
        priceRange: "€€",
        image: "/OpengraphCard.png",
    };

    return (
        <>
            <JSONLD data={structuredData} />
        </>
    );
};

export default RichSnippet;
