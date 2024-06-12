import React from "react";

const JSONLD = ({ data }: { data: Record<string, any> }) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
};

export default JSONLD;
