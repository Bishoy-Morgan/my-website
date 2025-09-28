'use cleint'

import React from 'react'
import { motion } from 'framer-motion'
import RedLines from '@/components/ui/RedLines'
import { useTranslations } from 'next-intl'

const AboutHeroSection = () => {
    const t = useTranslations('AboutHeroSection')

    return (
        <main className='relative w-95 md:w-4/5 mx-auto pt-[40%] md:pt-[16%] '>
            <RedLines lines={['middleLeft', 'middleTopRight', 'bottomRight']} />
            {/* Heading */}
            <motion.h1
                className="text-center mb-16 "
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                {t('title')}
            </motion.h1>

            {/* Intro */}
            <motion.section
                className="w-full flex items-center justify-center text-center mx-auto mb-16 px-2 md:px-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <div className="text-paleWhite flex flex-col items-center justify-center text-center mx-auto space-y-6">
                    <span 
                    className="secondary-p italic w-1/2 " 
                    >
                        {t('subtitle')}
                    </span>
                    <h3 
                    className="text-white !font-bolder tracking-tighter my-[10%]"
                    >
                        {t("introTitle")}
                    </h3>
                    <p 
                    className="secondary-p leading-relaxed text-paleWhite/70 "                     
                    >
                        {t("paragraph")}
                    </p>
                    <p 
                    className="secondary-p mt-6 leading-relaxed text-paleWhite/70 "  
                    >
                        {t("paragraphA")}
                    </p>
                </div>
            </motion.section>
        </main>
    )
}

export default AboutHeroSection
