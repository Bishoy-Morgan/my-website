'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { useTranslations } from 'next-intl'

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

interface ParagraphColumnProps {
    paragraphKeys: string[]
    className?: string
    spanClassName?: string
}

const ParagraphColumn: React.FC<ParagraphColumnProps> = ({ 
    paragraphKeys, 
    className = '', 
    spanClassName = '' 
}) => {
    const t = useTranslations("Philosophy")
    
    return (
        <motion.p
            className={`w-full md:w-1/2 h-full main-p flex flex-col items-start justify-between gap-y-10 md:gap-y-0 text-paleWhite/80 ${className}`}
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
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
}

const Philosophy: React.FC = () => {
    const t = useTranslations("Philosophy")
    
    const leftParagraphs = ['paragraph', 'paragraphA', 'paragraphB']
    const rightParagraphs = ['paragraphC', 'paragraphD', 'paragraphE']

    return (
        <main className='w-95 md:w-4/5 h-auto md:h-screen mx-auto flex py-20'>
            <section className='w-full h-full'>
                <h2 className='w-full md:w-1/2 mb-[10%] md:mb-[5%] px-2'>
                    {t('title')}
                </h2>
                <div className='w-full flex flex-col md:flex-row md:h-3/4'>
                    <ParagraphColumn 
                        paragraphKeys={leftParagraphs}
                        spanClassName='pl-4 md:pl-2 pr-8'
                    />
                    <ParagraphColumn 
                        paragraphKeys={rightParagraphs}
                        className='mt-10 md:mt-0'
                        spanClassName='pl-4 md:pl-8 pr-2'
                    />
                </div>
            </section>
        </main>
    )
}

export default Philosophy