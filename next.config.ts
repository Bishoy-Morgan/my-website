import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        qualities: [75], 
        formats: ['image/webp', 'image/avif'],
    },
    experimental: {
        optimizeCss: true, // helps with CSS performance
    },
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
