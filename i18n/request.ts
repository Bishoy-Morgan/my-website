import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'es', 'ar'];

export default getRequestConfig(async ({ locale }) => {
    const currentLocale = locale || 'en';

    if (!locales.includes(currentLocale)) {
        notFound();
    }

    try {
        const messages = (await import(`../messages/${currentLocale}.json`)).default;
        return {
            locale: currentLocale,
            messages
        };
    } catch {
        notFound();
    }
});