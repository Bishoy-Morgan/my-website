// 'use client'

// import React, { useState, useEffect, useRef, useMemo } from 'react'
// import { motion } from 'framer-motion'
// import Button from './ui/Button'
// import { useTranslations } from 'next-intl';
// import RedLines from './ui/RedLines';

// const loadBeams = () => import("@/components/ui/Beams");

// interface BeamsProps {
//     beamWidth?: number;
//     beamHeight?: number;
//     beamNumber?: number;
//     lightColor?: string;
//     speed?: number;
//     noiseIntensity?: number;
//     scale?: number;
//     rotation?: number;
// }

// const HeroSection = () => {
//     const t = useTranslations("HeroSection")
//     const [BeamsComponent, setBeamsComponent] = useState<React.ComponentType<BeamsProps> | null>(null);
//     const [shouldLoadBeams, setShouldLoadBeams] = useState(false);
//     const observerRef = useRef<HTMLDivElement>(null);
//     const loadingRef = useRef<boolean>(false);

//     const beamProps = useMemo(() => ({
//         beamWidth: 9,
//         beamHeight: 30,
//         beamNumber: 25,
//         lightColor: "#FF4533",
//         speed: 10,
//         noiseIntensity: .85,
//         scale: 0.2,
//         rotation: 0
//     }), []);

//     const contentVariants = useMemo(() => ({
//         hidden: { 
//             opacity: 0, 
//             y: 30,
//             scale: 0.95
//         },
//         visible: { 
//             opacity: 1, 
//             y: 0,
//             scale: 1,
//             transition: { 
//                 duration: 1.2, 
//                 ease: [0.25, 0.46, 0.45, 0.94] as const,
//                 staggerChildren: 0.15
//             }
//         }
//     }), []);

//     const itemVariants = useMemo(() => ({
//         hidden: { 
//             opacity: 0, 
//             y: 30,
//         },
//         visible: { 
//             opacity: 1, 
//             y: 0,
//             transition: { 
//                 duration: 1, 
//                 ease: [0.25, 0.46, 0.45, 0.94] as const
//             }
//         }
//     }), []);

//     useEffect(() => {
//         if (shouldLoadBeams && !BeamsComponent && !loadingRef.current) {
//             loadingRef.current = true;
//             loadBeams()
//                 .then((module) => {
//                     setBeamsComponent(() => module.default);
//                 })
//                 .catch((error) => {
//                     console.warn('Failed to load Beams component:', error);
//                 })
//                 .finally(() => {
//                     loadingRef.current = false;
//                 });
//         }
//     }, [shouldLoadBeams, BeamsComponent]);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setShouldLoadBeams(true);
//                     observer.disconnect(); 
//                 }
//             },
//             { 
//                 threshold: 0.1, 
//                 rootMargin: '100px' 
//             }
//         );

//         if (observerRef.current) {
//             observer.observe(observerRef.current);
//         }

//         return () => observer.disconnect();
//     }, []);

//     return (
//         <main className='relative w-full h-dvh min-h-screen max-h-[1080px] flex justify-center overflow-x-hidden overflow-y-hidden'>
//             <div className='absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-full -z-10 opacity-10 md:opacity-100'>
//                 <RedLines className='hidden md:block' lines={['bottomRight', 'middleRight', 'bottomLeft', 'middleTopLeft']} />
//             </div>

//             <section className='w-full md:w-4/5 h-full flex justify-center md:items-center md:justify-center'>
//                 <motion.div 
//                     className="w-95 h-[95%] md:h-4/5 md:w-1/2 md:mt-[5%] flex flex-col justify-between text-center"
//                     initial="hidden"
//                     animate="visible"
//                     variants={contentVariants}
//                 >
//                     <motion.div 
//                         className="flex flex-col items-center justify-center flex-grow"
//                         variants={itemVariants}
//                     >
//                         <motion.h1 
//                             className="px-4 md:px-0"
//                             variants={itemVariants}
//                         >
//                             {t("title")}
//                         </motion.h1>
//                         <motion.p 
//                             className="main-p text-paleWhite py-[7%] px-2 md:px-12"
//                             variants={itemVariants}
//                         >
//                             {t("paragraphA")}
//                         </motion.p>
//                     </motion.div>
//                     <motion.div 
//                         className="mb-4"
//                         variants={itemVariants}
//                         whileHover={{ 
//                             scale: 1.02,
//                             transition: { duration: 0.2 }
//                         }}
//                         whileTap={{ scale: 0.98 }}
//                     >
//                         <a
//                         href="https://cal.com/bishoy-morgan"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex justify-center"
//                         >
//                             <Button bgColor="#ff220e">
//                                 {t("button")}
//                             </Button>
//                         </a>
//                     </motion.div>
//                 </motion.div>

//                 {/* Beam background */}
//                 <div
//                     ref={observerRef}
//                     className='black-gradient absolute top-0 left-0 w-full md:px-1 h-full -z-10 md:-z-50 opacity-40 md:opacity-100'
//                 >
//                     {BeamsComponent && <BeamsComponent {...beamProps} />}
//                 </div>
//             </section>
//         </main>
//     )
// }

// export default React.memo(HeroSection)
'use client'

import React, { useState, useEffect, useRef, useMemo, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Button from './ui/Button'
import { useTranslations } from 'next-intl';
import RedLines from './ui/RedLines';

// Lazy load Beams component
const Beams = lazy(() => import("@/components/ui/Beams"));

interface BeamsProps {
    beamWidth?: number;
    beamHeight?: number;
    beamNumber?: number;
    lightColor?: string;
    speed?: number;
    noiseIntensity?: number;
    scale?: number;
    rotation?: number;
    heightSegments?: number;
}

const HeroSection = () => {
    const t = useTranslations("HeroSection")
    const [shouldLoadBeams, setShouldLoadBeams] = useState(false);
    const [isLowPerformance, setIsLowPerformance] = useState(false);
    const observerRef = useRef<HTMLDivElement>(null);
    const hasLoadedRef = useRef(false);

    // Detect device performance
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const isLowEnd = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false;
        
        // Check device memory with proper typing
        interface NavigatorWithMemory extends Navigator {
            deviceMemory?: number;
        }
        const nav = navigator as NavigatorWithMemory;
        const hasLowMemory = nav.deviceMemory ? nav.deviceMemory < 4 : false;
        
        setIsLowPerformance(isMobile || isLowEnd || hasLowMemory);
    }, []);

    // ULTRA OPTIMIZED: Performance-based beam settings
    const beamProps = useMemo<BeamsProps>(() => ({
        beamWidth: isLowPerformance ? 12 : 9,
        beamHeight: isLowPerformance ? 25 : 30,
        beamNumber: isLowPerformance ? 4 : 6,        // Reduced further
        heightSegments: isLowPerformance ? 10 : 15,  // Even lower segments
        lightColor: "#FF4533",
        speed: isLowPerformance ? 8 : 10,
        noiseIntensity: isLowPerformance ? 0.5 : 0.85,
        scale: 0.2,
        rotation: 0
    }), [isLowPerformance]);

    const contentVariants = useMemo(() => ({
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.95
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: { 
                duration: 1.2, 
                ease: [0.25, 0.46, 0.45, 0.94] as const,
                staggerChildren: 0.15
            }
        }
    }), []);

    const itemVariants = useMemo(() => ({
        hidden: { 
            opacity: 0, 
            y: 30,
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 1, 
                ease: [0.25, 0.46, 0.45, 0.94] as const
            }
        }
    }), []);

    // Load beams with performance check
    useEffect(() => {
        if (hasLoadedRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasLoadedRef.current) {
                    hasLoadedRef.current = true;
                    // Longer delay to ensure main content is fully rendered
                    setTimeout(() => {
                        setShouldLoadBeams(true);
                    }, 300);
                    observer.disconnect(); 
                }
            },
            { 
                threshold: 0.05,
                rootMargin: '0px'
            }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Pause beams animation when tab is not visible
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                // Optionally pause animations when tab is hidden
                setShouldLoadBeams(false);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, []);

    return (
        <main className='relative w-full h-dvh min-h-screen max-h-[1080px] flex justify-center overflow-x-hidden overflow-y-hidden'>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-full -z-10 opacity-10 md:opacity-100'>
                <RedLines className='hidden md:block' lines={['bottomRight', 'middleRight', 'bottomLeft', 'middleTopLeft']} />
            </div>

            <section className='w-full md:w-4/5 h-full flex justify-center md:items-center md:justify-center' style={{ willChange: 'auto' }}>
                <motion.div 
                    className="w-95 h-[95%] md:h-4/5 md:w-1/2 md:mt-[5%] flex flex-col justify-between text-center"
                    initial="hidden"
                    animate="visible"
                    variants={contentVariants}
                    style={{ willChange: 'opacity, transform' }}
                    layout={false}
                >
                    <motion.div 
                        className="flex flex-col items-center justify-center flex-grow"
                        variants={itemVariants}
                        style={{ willChange: 'opacity, transform' }}
                    >
                        <motion.h1 
                            className="px-4 md:px-0"
                            variants={itemVariants}
                            style={{ willChange: 'opacity, transform' }}
                        >
                            {t("title")}
                        </motion.h1>
                        <motion.p 
                            className="main-p text-paleWhite py-[7%] px-2 md:px-12"
                            variants={itemVariants}
                            style={{ willChange: 'opacity, transform' }}
                        >
                            {t("paragraphA")}
                        </motion.p>
                    </motion.div>
                    <motion.div 
                        className="mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                        whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2, ease: 'easeOut' }
                        }}
                        whileTap={{ scale: 0.98 }}
                        style={{ willChange: 'transform' }}
                    >
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
                    </motion.div>
                </motion.div>

                {/* Beam background with lazy loading and performance detection */}
                <div
                    ref={observerRef}
                    className='black-gradient absolute top-0 left-0 w-full md:px-1 h-full -z-10 md:-z-50 opacity-40 md:opacity-100'
                >
                    {shouldLoadBeams && (
                        <Suspense fallback={<div className="w-full h-full bg-black" />}>
                            <Beams {...beamProps} />
                        </Suspense>
                    )}
                </div>
            </section>
        </main>
    )
}

export default React.memo(HeroSection)