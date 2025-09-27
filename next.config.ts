import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    experimental: {
    optimizeCss: true,
    optimizePackageImports: [
        'lucide-react', 
        'date-fns',       
        'lodash',         
        'react-icons'     
    ]
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    reactStrictMode: true,                 
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
