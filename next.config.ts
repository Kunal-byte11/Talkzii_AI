import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Add optimizations for faster routing
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Optimize page loading
  pageExtensions: ['tsx', 'ts'],
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;