import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    experimental: {
        externalDir: true,
    },
    reactCompiler: true,
};

export default nextConfig;
