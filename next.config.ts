import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    
    experimental: {
        optimizeCss: true, 
        cssChunking: 'strict', 
    },

    ...(process.env.ANALYZE === 'true' && {
        bundlePagesRouterDependencies: false,
    }),
    
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 31536000,
        dangerouslyAllowSVG: false,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },

    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

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
                    },
                    {
                        key: 'Link',
                        value: '</css/app.css>; rel=preload; as=style'
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
            },
            {
                source: '/_next/static/css/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    },
                    {
                        key: 'Content-Type',
                        value: 'text/css'
                    }
                ]
            }
        ]
    },
    compress: true,

    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            config.optimization.splitChunks = {
                chunks: 'all',
                minSize: 20000,
                maxSize: 244000,
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
                    // Separate CSS chunks
                    styles: {
                        name: 'styles',
                        type: 'css/mini-extract',
                        chunks: 'all',
                        priority: 10,
                        reuseExistingChunk: true,
                        enforce: true,
                    },
                },
            }

            config.optimization.usedExports = true
            config.optimization.sideEffects = false
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