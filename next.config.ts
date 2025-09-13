import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        qualities: [75, 100], // This will fix the warning
        formats: ['image/webp', 'image/avif'],
        // Add any other image configurations you need
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

// import createNextIntlPlugin from 'next-intl/plugin';

// const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // Compiler optimizations
//     compiler: {
//         removeConsole: process.env.NODE_ENV === 'production', // Remove console.logs in prod
//     },
    
//     // Image optimization (for your 66KB savings)
//     images: {
//         deviceSizes: [640, 750, 828, 1080, 1200, 1920],
//         imageSizes: [189, 256, 384, 512, 640, 750, 828, 1080, 1200],
//         formats: ['image/webp', 'image/avif'],
//         minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
//         dangerouslyAllowSVG: false,
//     },
    
//     // Bundle optimization
//     swcMinify: true, // Use SWC minifier for better performance
    
//     // Webpack optimizations
//     webpack: (config, { dev, isServer }) => {
//         // Optimize bundle splitting
//         if (!dev && !isServer) {
//             config.optimization.splitChunks = {
//                 ...config.optimization.splitChunks,
//                 cacheGroups: {
//                     ...config.optimization.splitChunks.cacheGroups,
//                     styles: {
//                         name: 'styles',
//                         test: /\.(css|scss|sass)$/,
//                         chunks: 'all',
//                         enforce: true,
//                     },
//                 },
//             };
//         }
        
//         return config;
//     },
    
//     // Headers for caching
//     async headers() {
//         return [
//                 {
//                     source: '/_next/static/:path*',
//                     headers: [
//                         {
//                             key: 'Cache-Control',
//                             value: 'public, max-age=31536000, immutable',
//                         },
//                     ],
//                 },
//                 {
//                     source: '/:path*.{jpg,jpeg,png,gif,ico,svg,webp,avif}',
//                     headers: [
//                         {
//                             key: 'Cache-Control',
//                             value: 'public, max-age=31536000, immutable',
//                         },
//                     ],
//                 },
//             ];
//         },
//     };

// export default withNextIntl(nextConfig);