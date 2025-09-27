import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'es', 'ar'],
    defaultLocale: 'en',
    localePrefix: {
        mode: 'as-needed'
    }
});
