'use client'

import React, { useState } from 'react'
import { Suspense } from 'react';
import { motion } from 'framer-motion'
import Button from './ui/Button'
import Beams from '@/public/models/Beams';
import { useLocale, useTranslations } from 'next-intl';


const HeroSection = () => {
    const t = useTranslations("HeroSection")
    const locale = useLocale();
    const [showBeams, setShowBeams] = useState(false);

    return (
        <main className='relative w-full h-dvh min-h-screen max-h-[1080px] flex justify-center overflow-x-hidden'>
            <section className='w-full md:w-4/5 h-full flex items-end md:items-center justify-center md:justify-cenetr'>
                <motion.div
                    className={`${locale === 'es' ? 'h-[95%]' : 'h-4/5'} w-95 md:w-1/2 flex flex-col items-center justify-end text-center  `}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h1>
                        {t("title")}
                    </h1>
                    <div className="w-4/5 flex justify-start md:mt-6 md:mb-16">
                        <p className="main-p text-paleWhite py-10 px-2">
                            {t("paragraphA")}
                        </p>
                    </div>
                    <a
                    href="https://cal.com/bishoy-morgan"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Button bgColor="#ff220e">
                            {t("button")}
                        </Button>
                    </a>
                </motion.div>
                <motion.div
                    className='black-gradient absolute top-0 left-0 w-full md:px-1 h-full -z-10 md:-z-50 opacity-40 md:opacity-100'
                    onViewportEnter={() => setShowBeams(true)}
                    viewport={{ once: true, margin: '200px' }}
                >
                    {showBeams && (
                        <Suspense>
                            <Beams
                                beamWidth={9}
                                beamHeight={30}
                                beamNumber={25}
                                lightColor="#FF4533"
                                speed={5}
                                noiseIntensity={.85}
                                scale={0.2}
                                rotation={0}
                            />
                        </Suspense>
                    )}
                    
                </motion.div>
            </section>
        </main>
    )
}

export default HeroSection