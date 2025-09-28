'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import Button from '@/components/ui/Button'
import { useTranslations } from 'next-intl'

const CoreCompetencies = () => {
    const t = useTranslations('CoreCompetencies')
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const containerVariants: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
    }

    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    }

    const skills = [
        { name: t('js-ts'), level: 96 },
        { name: t('react-next'), level: 98 },
        { name: t('python'), level: 84 },
        { name: t('tailwind-bootstrap'), level: 99 },
        { name: t('performance-optimization'), level: 92 },
        { name: t('graphql-rest-apis'), level: 87 },
        { name: t('multilingual-web-development'), level: 99 },
        { name: t('performance-analytics'), level: 88 },
    ]

    return (
        <section className="w-95 md:w-4/5 mx-auto py-20">
            <motion.h2
                className="mb-12 w-full md:w-1/2"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
            >
                {t('title')}
            </motion.h2>

            <motion.div
                className="space-y-6 pr-2 md:pr-0"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
            >
                {skills.map(({ name, level }, i) => (
                    <motion.div key={i} variants={fadeUpVariants}>
                        <div
                            className="hidden md:flex cursor-pointer justify-between items-center"
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <h5 className="secondary-p text-paleWhite px-2 text-left w-1/4 border-l border-red hover:border-l-8 transition-all duration-200 ease-in-out">
                                {name}
                            </h5>

                            <AnimatePresence>
                                {hoveredIndex === i && (
                                    <motion.div
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: '50%' }}
                                        exit={{ opacity: 0, width: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex items-center gap-4 overflow-hidden px-4"
                                    >
                                        <div className="flex-1 bg-paleWhite/20 h-[2px]">
                                            <div
                                                className="bg-red h-[2px]"
                                                style={{ width: `${level}%` }}
                                            />
                                        </div>
                                        <div className="secondary-p text-paleWhite/70 font-bold tracking-tighter tabular-nums min-w-[2.5rem] text-right">
                                            {level}%
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Mobile Layout */}
                        <div className="md:hidden">
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <h5 className="main-p md:secondary-p text-paleWhite px-2 text-left border-l border-red">
                                        {name}
                                    </h5>
                                </div>
                                <div className="mt-2 ml-2 flex items-center gap-4">
                                    <div className="flex-1 bg-paleWhite/20 h-[2px]">
                                        <div
                                            className="bg-red h-[2px]"
                                            style={{ width: `${level}%` }}
                                        />
                                    </div>
                                    <div className="secondary-p text-paleWhite/70 font-bold tracking-tighter tabular-nums min-w-[2.5rem] text-right">
                                        {level}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA button */}
            <motion.div
                className="mt-16 text-center"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
            >
                <a
                    href="https://cal.com/bishoy-morgan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center"
                >
                    <Button bgColor="#ff220e">{t('book-call')}</Button>
                </a>
            </motion.div>
        </section>
    )
}

export default CoreCompetencies
