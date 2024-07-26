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
            {
                protocol: "https",
                hostname: "farmui.vercel.app",
            },
            {
                protocol: "https",
                hostname: "avatar.vercel.sh",
            },
        ],
    },
};

export default nextConfig;
