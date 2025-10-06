// import { getRequestConfig } from 'next-intl/server';
// import { redirect } from 'next/navigation';

// const locales = ['en', 'es', 'ar'];

// export default getRequestConfig(async ({ locale }) => {
//     const currentLocale = locale || 'en';

//     if (!locales.includes(currentLocale)) {
//         redirect('/oops-wrong-turn');
//     }

//     try {
//         const messages = (await import(`../messages/${currentLocale}.json`)).default;
//         return {
//             locale: currentLocale,
//             messages
//         };
//     } catch {
//         redirect('/oops-wrong-turn');
//     }
// });

import { getRequestConfig } from 'next-intl/server';
import { redirect } from 'next/navigation';

const locales = ['en', 'es', 'ar'];
const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
    const currentLocale = locale || defaultLocale;

    if (!locales.includes(currentLocale)) {
        redirect('/oops-wrong-turn');
    }

    try {
        const messages =
            currentLocale === defaultLocale
                ? (await import('../messages/en.json')).default
                : (await import(`../messages/${currentLocale}.json`)).default;

        return { locale: currentLocale, messages };
    } catch {
        redirect('/oops-wrong-turn');
    }
});
