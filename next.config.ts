import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 31536000, // Cache images for 1 year
        dangerouslyAllowSVG: false,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },

    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

    ...(process.env.ANALYZE === 'true' && {
        experimental: {
            bundlePagesExternals: false,
        },
    }),

    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    }
                ]
            },
            {
                source: '/static/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    }
                ]
            }
        ]
    },
    compress: true,

    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            // Split chunks for better caching
            config.optimization.splitChunks = {
                chunks: 'all',
                cacheGroups: {
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        priority: -10,
                        chunks: 'all',
                    },
                },
            }
        }

        if (!dev) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@': '.',
            }
        }

        return config
    },

    productionBrowserSourceMaps: false,
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)