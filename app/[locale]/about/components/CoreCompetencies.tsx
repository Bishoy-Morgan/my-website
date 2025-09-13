'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import Button from '@/components/ui/Button'

const skills = [
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'React.js / Next.js', level: 95 },
    { name: 'Python', level: 80 },
    { name: 'Tailwind CSS / Bootstrap', level: 90 },
    { name: 'Performance Optimization', level: 85 },
    { name: 'GraphQL / REST APIs', level: 75 },
    { name: 'Multilingual Web Development', level: 95 },
    { name: 'Web Performance Monitoring & Analytics', level: 75 },
]

const headingVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const listVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
}

const CoreCompetencies = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <section className="w-95 md:w-4/5 mx-auto py-20">
            <motion.h2
                className="mb-12 w-full md:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={headingVariants}
            >
                Core Competencies
            </motion.h2>
            <motion.div
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={listVariants}
            >
                {skills.map(({ name, level }, i) => (
                    <div key={i}>
                        {/* Desktop/Tablet Layout - with hover */}
                        <div
                            className="hidden md:flex cursor-pointer justify-between items-center"
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Skill name on left */}
                            <h5 className="secondary-p text-paleWhite px-2 text-left w-1/4 border-l border-red hover:border-l-8 transition-all duration-200 ease-in-out">
                                {name}
                            </h5>

                            {/* Progress bar + percentage on right, show only on hover */}
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

                        {/* Mobile Layout - always show percentage */}
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
                    </div>
                ))}
            </motion.div>

            <div className="mt-16 text-center">
                <a
                    href="https://cal.com/bishoy-morgan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex justify-center'
                >
                    <Button bgColor="#ff220e">
                        Book a Free Discovery Call
                    </Button>
                </a>
            </div>
        </section>
    )
}

export default CoreCompetencies