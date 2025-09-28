'use client'

import React, { useState, useEffect, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import RedLines from '@/components/ui/RedLines'
import { useTranslations } from 'next-intl'

const loadBeams = () => import('@/components/ui/Beams')

interface BeamsProps {
    beamWidth?: number;
    beamHeight?: number;
    beamNumber?: number;
    lightColor?: string;
    speed?: number;
    noiseIntensity?: number;
    scale?: number;
    rotation?: number;
}

const AboutHeroSection = () => {
    const t = useTranslations('AboutHeroSection')
    const [BeamsComponent, setBeamsComponent] = useState<React.ComponentType<BeamsProps> | null>(null);
    const [shouldLoadBeams, setShouldLoadBeams] = useState(false);
    const observerRef = useRef<HTMLDivElement>(null);
    const loadingRef = useRef<boolean>(false);

    const beamProps = useMemo(() => ({
        beamWidth: 6.2,
        beamHeight: 30,
        beamNumber: 25,
        lightColor: "#FF4533",
        speed: 5,
        noiseIntensity: 0.85,
        scale: 0.2,
        rotation: 0
    }), []);

    useEffect(() => {
        if (shouldLoadBeams && !BeamsComponent && !loadingRef.current) {
            loadingRef.current = true;
            loadBeams()
                .then((module) => {
                    setBeamsComponent(() => module.default);
                })
                .catch((error) => {
                    console.warn('Failed to load Beams component:', error);
                })
                .finally(() => {
                    loadingRef.current = false;
                });
        }
    }, [shouldLoadBeams, BeamsComponent]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoadBeams(true);
                    observer.disconnect(); 
                }
            },
            { 
                threshold: 0.1, 
                rootMargin: '100px' 
            }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <main className="relative w-95 md:w-4/5 mx-auto pt-[40%] md:pt-[16%] overflow-hidden">
            
            <RedLines lines={['bottomRight', 'middleRight', 'bottomLeft', 'middleTopLeft']} />

            {/* Heading */}
            <motion.h1
                className="text-center mb-16"
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
                <div 
                    className="text-paleWhite flex flex-col items-center justify-center text-center mx-auto space-y-6"
                >
                    <span className="secondary-p italic w-1/2">
                        {t('subtitle')}
                    </span>
                    <h3 className="text-white !font-bolder tracking-tighter my-[10%]">
                        {t('introTitle')}
                    </h3>
                    <p className="secondary-p leading-relaxed text-paleWhite/70">
                        {t('paragraph')}
                    </p>
                    <p className="secondary-p mt-6 leading-relaxed text-paleWhite/70">
                        {t('paragraphA')}
                    </p>
                </div>
            </motion.section>

            {/* Beam background */}
            <div
                ref={observerRef}
                className='black-gradient absolute top-0 left-0 w-full md:px-1 h-full -z-0 md:-z-50 opacity-40 md:opacity-100'
            >
                {BeamsComponent && <BeamsComponent {...beamProps} />}
            </div>
        </main>
    )
}

export default React.memo(AboutHeroSection)
