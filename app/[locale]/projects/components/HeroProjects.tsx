'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Button from '@/components/ui/Button'
import { motion, Variants, easeOut } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'

type Project = {
    id: string
    title: string
    subTitle: string
    description: string
    link: string
    image: StaticImageData[] 
    technologies: string[]
    role: string
    year: number
}

type HeroProjectsProps = {
    project: Project
}

const fadeUp: Variants = {
    hidden: { 
        opacity: 0, 
        y: 40, 
        x: 5 
    },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            delay: custom * 0.2,
            duration: 0.8,
            ease: easeOut,
        },
    }),
}

const horizontalFade: Variants = {
    hidden: { 
        opacity: 0, 
        y: 40, 
        x: -5 
    },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            delay: custom * 0.2,
            duration: 0.8,
            ease: easeOut,
        },
    }),
}

const HeroProjects: React.FC<HeroProjectsProps> = ({ project }) => {
    const locale = useLocale()
    const t = useTranslations("HeroProjects")
    if (!project) return <p>
        {t("no-projects")}
    </p>

    return (
        <main className="relative w-full flex flex-col items-center text-white px-4 md:px-0 pt-24 ">
            {/* Hero Section */}
            <motion.section
                className="w-full md:w-4/5 min-h-[95%] flex flex-col md:flex-row items-center pt-20 md:py-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Left Column - Text Content */}
                <motion.div
                    className="w-full md:w-1/2 md:pt-[5%] md:pr-4 mb-10 md:mb-0"
                    custom={0}
                    variants={fadeUp}
                >
                    <motion.h1 
                        className={`${locale === "ar" ? "md:text-right" : "md:text-left"} mb-4 md:mb-6 tracking-tighter text-center `} 
                        custom={1} 
                        variants={fadeUp}
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        className={`${locale === "ar" ? "md:text-right" : "md:text-left"} main-p text-paleWhite py-6 md:py-12 px-2 text-center `}
                        custom={2}
                        variants={fadeUp}
                    >
                        {project.subTitle}
                    </motion.p>

                    <motion.div 
                        className="flex justify-center md:justify-start"
                        custom={3} 
                        variants={fadeUp}
                    >
                        <a 
                            href={project.link} 
                            target='_blank' 
                            rel="noopener noreferrer"
                        >
                            <Button bgColor='#ff4533'>
                                {t("liveLink")}
                            </Button>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Column — Desktop Image */}
                <motion.div
                    className="relative z-10 w-full md:w-1/2 h-64 md:h-96 flex items-center justify-center px-1"
                    custom={4}
                    variants={horizontalFade}
                >
                    <div className="relative w-full h-full overflow-hidden rounded-sm">
                        <Image
                            src={project.image[1]}
                            alt={`${project.title} desktop`}
                            fill
                            priority
                            quality={100}
                            className="object-cover object-left-top"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </motion.div>
            </motion.section>

            {/* Details Section */}
            <motion.section
                className="relative w-full md:w-4/5 min-h-screen flex flex-col md:flex-row items-center mb-12 md:mb-24 py-12 md:py-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Decorative border - hidden on mobile */}
                <div className={`${locale === 'ar' ? "left-1/4" : "right-0"} hidden md:block absolute top-0 md:-top-[15%] w-1/4 h-[120%] border-l border-red`}></div>
                
                {/* Mobile Image - Show first on mobile */}
                <motion.div
                    className="relative w-full md:w-1/2 h-80 md:h-96 flex items-center justify-center px-1 mb-12 md:mb-0 md:order-2"
                    custom={4}
                    variants={horizontalFade}
                >
                    <div className="relative w-1/2 md:w-3/5 h-full md:h-[60vh] rounded-xl overflow-hidden ">
                        <Image
                            src={project.image[0]}
                            alt={`${project.title} mobile`}
                            fill
                            priority
                            quality={100}
                            className="object-contain"
                            sizes="(max-width: 768px) 75vw, 50vw"
                        />
                    </div>
                </motion.div>

                {/* Left Column - Project Details */}
                <motion.div 
                    className="w-full md:w-1/2 md:order-1" 
                    custom={0} 
                    variants={fadeUp}
                >
                    {/* Role and Year */}
                    <div className="mb-8">
                        <motion.h4 
                            className={`${locale === 'ar' ? 'md:text-right' : 'md:text-left'} text-red px-2 tracking-widest text-center`}
                            custom={2} 
                            variants={fadeUp}
                        >
                            {project.role}
                        </motion.h4>
                        <motion.h3 
                            className={`${locale === 'ar' ? 'md:text-right' : 'md:text-left'} mb-4 md:mb-8 text-white px-2 tracking-tighter text-center `}
                            custom={2} 
                            variants={fadeUp}
                        >
                            {project.year}
                        </motion.h3>
                    </div>

                    {/* Description */}
                    <motion.p
                        className={`${locale === 'ar' ? 'md:text-right' : 'md:text-left'} main-p text-paleWhite px-2 py-6 text-center md:pr-4`}
                        custom={1}
                        variants={fadeUp}
                    >
                        {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.h3 
                        className={`my-12 md:my-6 text-red text-center px-2 tracking-widest ${locale === 'ar' ? 'md:text-right' : 'md:text-left'}`} 
                        custom={2} 
                        variants={fadeUp}
                    >
                        {t("technologies")}
                    </motion.h3>
                    
                    <motion.ul
                        className="w-full grid grid-cols-2 gap-y-4 md:gap-y-8 "
                        custom={3}
                        variants={fadeUp}
                    >
                        {project.technologies.map((tech, index) => (
                            <motion.li
                                key={tech}
                                className={`
                                    para-16 text-paleWhite border-red 
                                    ${index % 2 === 0 ? '-mx-1 md:mx-0' : ''}
                                    ${locale === 'ar' ? 'border-r-2 pr-2' : 'border-l-2 pl-2'}
                                    `}
                                custom={4 + index}
                                variants={fadeUp}
                            >
                                {tech}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.section>
        </main>
    )
}

export default HeroProjects