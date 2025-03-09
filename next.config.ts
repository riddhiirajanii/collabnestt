import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/404',
        destination: '/not-found',
        permanent: false,
      },
    ];
  },

  eslint: {
    ignoreDuringBuilds: true,  // ✅ Ignore ESLint errors during build
  },

  typescript: {
    ignoreBuildErrors: true,  // ✅ Ignore TypeScript errors during build
  },
};

export default nextConfig;