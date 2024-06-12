/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "aceternity.com",
            },
        ],
    },
};

export default nextConfig;
