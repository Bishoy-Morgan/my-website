'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'

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

const Philosophy = () => {
    return (
        <main className='w-95 md:w-4/5 h-auto md:h-screen mx-auto flex py-20'>
            <section className='w-full h-full'>
                <h2 className='w-full md:w-1/2 mb-[10%] md:mb-[5%] px-2'>How I Work</h2>
                <div className='w-full flex flex-col md:flex-row md:h-3/4 '>
                    {/* Left paragraph */}
                    <motion.p
                        className='w-full md:w-1/2 h-full main-p flex flex-col items-start justify-between gap-y-10 md:gap-y-0 text-paleWhite/80'
                        variants={containerVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.span className='pl-4 md:pl-2 pr-8 border-l border-red' variants={itemVariants}>
                            I’m a web developer passionate about crafting digital experiences that are fast, scalable, and user-focused.
                        </motion.span>
                        <motion.span className='pl-4 md:pl-2 pr-8 border-l border-red' variants={itemVariants}>
                            My work goes beyond writing code, it’s about understanding the culture, context, and needs of the users, especially in complex multilingual environments like the Middle East.
                        </motion.span>
                        <motion.span className='pl-4 md:pl-2 pr-8 border-l border-red' variants={itemVariants}>
                            Every detail matters, and timing is critical because every millisecond counts in delivering smooth interactions.
                        </motion.span>
                    </motion.p>

                    {/* Right paragraph */}
                    <motion.p
                        className='w-full md:w-1/2 h-full mt-10 md:mt-0 main-p flex flex-col items-start justify-between gap-y-10 md:gap-y-0 text-paleWhite/80'
                        variants={containerVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.span className='pl-4 md:pl-8 pr-2 border-l border-red' variants={itemVariants}>
                            Behind the scenes, I meticulously optimize performance, localization, and accessibility to build solutions that are reliable and long-lasting.
                        </motion.span>
                        <motion.span className='pl-4 md:pl-8 pr-2 border-l border-red' variants={itemVariants}>
                            I don’t follow trends; I create technology that stands the test of time.
                        </motion.span>
                        <motion.span className='pl-4 md:pl-8 pr-2 border-l border-red' variants={itemVariants}>
                            Ultimately, I aim to empower businesses to connect authentically with their audience through elegant, efficient, and meaningful web experiences.
                        </motion.span>
                    </motion.p>
                </div>
            </section>
        </main>
    )
}

export default Philosophy
