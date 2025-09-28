'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import RedLines from '@/components/ui/RedLines'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const BehindTheScreen: React.FC = () => {
    const t = useTranslations('BehindTheScreen')

    const containerVariants: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
    }

    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    }

    return (
        <section className="relative w-95 md:w-4/5 mx-auto flex justify-center py-32">
            {/* Red Decorative lines Desktop */}
            <RedLines
                className="hidden md:block"
                lines={['topRight', 'middleRight', 'bottomLeft']}
            />
            {/* Red Decorative lines Mobile */}
            <RedLines
                className="md:hidden"
                lines={['topRight', 'bottomRight', 'bottomLeft', 'middleTopLeft']}
            />

            {/* Content */}
            <motion.div
                className="w-full md:w-2/5 flex flex-col items-center justify-center gap-y-8"
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true, amount: 0.6 }}
            >
                {/* Heading */}
                <motion.h2 
                    className="text-center px-0 py-8" 
                    variants={fadeUpVariants}
                >
                    {t('title')}
                </motion.h2>

                {/* Paragraph */}
                <motion.p
                    className="main-p text-paleWhite text-center mb-16"
                    variants={fadeUpVariants}
                >
                    {t('paragraphA')}
                    <br />
                    {t('paragraphB')}
                    <br />
                    {t('paragraphC')}
                </motion.p>

                {/* Button */}
                <motion.div 
                    variants={fadeUpVariants}
                >
                    <Link href="/about">
                        <Button bgColor="#ff220e">
                            {t('button')}
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default BehindTheScreen
