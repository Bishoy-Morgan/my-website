'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './ui/Button'
import Beams from '@/public/models/Beams';
import { useTranslations } from 'next-intl';


const HeroSection = () => {
    const t = useTranslations("HeroSection")
    const [showBeams, setShowBeams] = useState(false);

    return (
        <main className='relative w-full h-dvh min-h-screen max-h-[1080px] flex justify-center overflow-x-hidden'>
            <section className='w-full md:w-4/5 h-full flex justify-center md:items-center md:justify-center '>
                <motion.div
                className="w-95 h-[95%] md:h-4/5 md:w-1/2 md:mt-[5%] flex flex-col justify-between text-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                <div className="flex flex-col items-center justify-center flex-grow">
                    <h1 className="px-4 md:px-0">
                        {t("title")}
                    </h1>
                    <p className="main-p text-paleWhite py-[7%] px-2 md:px-12">
                        {t("paragraphA")}
                    </p>
                </div>
                <div className="mb-4">
                    <a
                    href="https://cal.com/bishoy-morgan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center"
                    >
                        <Button bgColor="#ff220e">
                            {t("button")}
                        </Button>
                    </a>
                </div>
                </motion.div>

                <motion.div
                    className='black-gradient absolute top-0 left-0 w-full md:px-1 h-full -z-10 md:-z-50 opacity-40 md:opacity-100'
                    onViewportEnter={() => setShowBeams(true)}
                    viewport={{ once: true, margin: '200px' }}
                >
                    {showBeams && (
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
                    )}
                    
                </motion.div>
            </section>
        </main>
    )
}

export default HeroSection