'use client'

import React, { useMemo } from 'react'
import { motion, Variants } from 'framer-motion'
import { useTranslations } from 'next-intl'

const Philosophy: React.FC = () => {
    const t = useTranslations('Philosophy')

    const containerVariants: Variants = useMemo(
        () => ({
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.2,
                    },
                },
            }),
        []
    )

  // Item animation (fade + slide-up + ease curve)
    const itemVariants: Variants = useMemo(
        () => ({
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: 1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    },
                },
            }),
        []
    )

    const leftParagraphs = ['paragraph', 'paragraphA', 'paragraphB']
    const rightParagraphs = ['paragraphC', 'paragraphD', 'paragraphE']

const ParagraphColumn: React.FC<{
    paragraphKeys: string[]
    className?: string
    spanClassName?: string
}> = ({ paragraphKeys, className = '', spanClassName = '' }) => (
    <motion.p
        className={`w-full md:w-1/2 h-full main-p flex flex-col items-start justify-between gap-y-10 md:gap-y-0 text-paleWhite/80 ${className}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
    >
        {paragraphKeys.map((key) => (
            <motion.span
                key={key}
                className={`border-l border-red ${spanClassName}`}
                variants={itemVariants}
            >
                {t(key)}
            </motion.span>
        ))}
    </motion.p>
)

    return (
        <main className="w-95 md:w-4/5 h-auto md:h-screen mx-auto flex py-20">
            <section className="w-full h-full">
                <motion.h2
                    className="w-full md:w-1/2 mb-[10%] md:mb-[5%] px-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true, amount: 0.6 }}
                >
                    {t('title')}
                </motion.h2>

                <div className="w-full flex flex-col md:flex-row md:h-3/4">
                    <ParagraphColumn
                        paragraphKeys={leftParagraphs}
                        spanClassName="px-8"
                    />
                    <ParagraphColumn
                        paragraphKeys={rightParagraphs}
                        className="mt-10 md:mt-0"
                        spanClassName="px-8"
                    />
                </div>
            </section>
        </main>
    )
}

export default Philosophy
