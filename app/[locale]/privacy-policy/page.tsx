'use client'

import React, { useEffect, useState } from 'react'
import Footer from '@/components/Footer'
import { motion, Variants } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'

const CONTACT_EMAIL = 'bishoy.morgan95@gmail.com'

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.15, duration: 0.6, ease: 'easeOut' }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export default function PrivacyPolicyPage() {
    const t = useTranslations('PrivacyPolicy')
    const locale = useLocale()
    const [lastUpdated, setLastUpdated] = useState("")

    useEffect(() => {
        setLastUpdated(new Date().toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }))
    }, [])

    return (
        <>
            <main className="w-95 md:w-4/5 mx-auto pt-[40%] md:pt-[10%] px-2 text-paleWhite">
                <motion.header
                    className="mb-10"
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                >
                    <h2 className="mb-4 !pl-0">
                        {t('title')}
                    </h2>
                    <p className="para-sm text-paleWhite/50">{t('lastUpdated')} {lastUpdated}</p>
                </motion.header>

                <motion.div
                    className="space-y-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Intro */}
                    <motion.section className="prose prose-invert max-w-xl mb-16" variants={itemVariants}>
                        <p>{t('intro')}</p>
                    </motion.section>

                    {/* Data collected */}
                    <motion.section className="max-w-4xl" variants={itemVariants}>
                        <h4 className="mb-2">{t("title1")}</h4>
                        <ul className={`${locale === 'ar' ? 'mr-[5%]' : 'ml-[5%]'} list-disc flex flex-col gap-y-4 text-paleWhite/80`}>
                            <li>{t('data_contactForm')}</li>
                            <li>{t('data_usage')}</li>
                        </ul>
                    </motion.section>

                    {/* How is your data used */}
                    <motion.section className="max-w-4xl" variants={itemVariants}>
                        <h4 className="mb-2">{t("title2")}</h4>
                        <p className={`${locale === 'ar' ? 'mr-[5%]' : 'ml-[5%]'} text-paleWhite/80`}>
                            {t('use_of_data')}
                        </p>
                    </motion.section>

                    {/* Third-party services */}
                    <motion.section className="max-w-4xl" variants={itemVariants}>
                        <h4 className="mb-2">{t("title3")}</h4>
                        <p className={`${locale === 'ar' ? 'mr-[5%]' : 'ml-[5%]'} text-paleWhite/80`}>
                            {t('third_party')}
                        </p>
                    </motion.section>

                    {/* Cookies */}
                    <motion.section className="max-w-4xl" variants={itemVariants}>
                        <h4 className="mb-2">{t("title4")}</h4>
                        <p className={`${locale === 'ar' ? 'mr-[5%]' : 'ml-[5%]'} text-paleWhite/80`}>
                            {t('cookies')}
                        </p>
                    </motion.section>

                    {/* Your rights */}
                    <motion.section className="max-w-4xl" variants={itemVariants}>
                        <h4 className="mb-2">{t("title5")}</h4>
                        <ul className={`${locale === 'ar' ? 'mr-[5%]' : 'ml-[5%]'} list-disc text-paleWhite/80 `}>
                            <li>{t('rights_list.copy')}</li>
                            <li>{t('rights_list.correction')}</li>
                            <li>{t('rights_list.withdraw')}</li>
                        </ul>
                        <p className="mt-3 text-paleWhite/50 ml-[5%] ">
                            {t('rights_footer')}{' '}
                            <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className={`${locale === 'ar' ? 'mr-1' : 'ml-1'} text-red tracking-wide hover:text-red transition-colors`}
                            >
                                {CONTACT_EMAIL}
                            </a>
                        </p>
                    </motion.section>

                    {/* Security */}
                    <motion.section className="max-w-4xl" variants={itemVariants}>
                        <h4 className="mb-2">{t("title6")}</h4>
                        <p className={`${locale === 'ar' ? 'mr-[5%]' : 'ml-[5%]'} text-paleWhite/80`}>
                            {t('security')}
                        </p>
                    </motion.section>

                    {/* Children */}
                    <motion.section className="max-w-4xl" variants={itemVariants}>
                        <h4 className="mb-2">{t("title7")}</h4>
                        <p className={`${locale === 'ar' ? 'mr-[5%]' : 'ml-[5%]'} text-paleWhite/80`}>
                            {t('children')}
                        </p>
                    </motion.section>

                    {/* Changes */}
                    <motion.section className="max-w-4xl" variants={itemVariants}>
                        <h4 className="mb-2">{t("title8")}</h4>
                        <p className={`${locale === 'ar' ? 'mr-[5%]' : 'ml-[5%]'} text-paleWhite/80`}>
                            {t('changes')}
                        </p>
                    </motion.section>
                </motion.div>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}
