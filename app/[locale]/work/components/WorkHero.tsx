'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

import blogsyDesktop from '@/public/images/projects/blogsy-desktop.png'
import legendDesktop from '@/public/images/projects/legend-desktop.png'
import skiableDesktop from '@/public/images/projects/skiable-desktop.png'
import spaceMortgageDesktop from '@/public/images/projects/spaceMortgage-desktop.png'
import RedLines from '@/components/ui/RedLines'
import { useTranslations } from 'next-intl'

const projects = [
  { id: 1, name: 'Blogsy', image: blogsyDesktop },
  { id: 2, name: 'Legend', image: legendDesktop },
  { id: 3, name: 'Skiable', image: skiableDesktop },
  { id: 4, name: 'Space Mortgage', image: spaceMortgageDesktop },
]

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      staggerChildren: 0.15, 
      when: "beforeChildren",
      duration: 0.8,
      ease: "easeOut",
    } 
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const mobileContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2, 
      when: "beforeChildren",
      duration: 0.6,
      ease: "easeOut",
    } 
  },
}

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const WorkHero = () => {
  const t = useTranslations('WorkHero')
  const skewAngle = 8
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const cardGap = -230

  return (
    <section className="relative w-95 md:w-4/5 mx-auto pb-24 pt-[40%] md:pt-[10%] flex flex-col items-center">
      <RedLines lines={['bottomLeft', 'middleTopRight', 'middleTopLeft']} className='hidden md:block'/>
      <RedLines lines={['bottomLeft', 'middleTopRight']} className='md:hidden'/>
      <motion.h1
        className="mb-6 md:max-w-[50%] text-center px-4 !scale-90 md:!scale-100"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        {t('title')}
      </motion.h1>

      <motion.p
        className="main-p md:max-w-xl text-center text-paleWhite/80 my-4 px-4"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        {t('paragraph')}
        <br className="hidden md:block"/>
        {t('paragraphA')}
      </motion.p>

      {/* Desktop Layout */}
      <motion.div
        className="hidden md:flex relative w-full items-center justify-center overflow-visible px-4 min-h-[70vh]"
        style={{ perspective: '1200px' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => {
          const isHovered = hoveredIndex === index
          return (
            <div
              key={project.id}
              className="relative rounded-sm transition-transform duration-500 ease-in-out cursor-pointer"
              style={{
                width: '28vw', 
                aspectRatio: '5 / 3.5', 
                transformOrigin: 'center',
                transform: `skewY(${skewAngle}deg) translateY(${isHovered ? -80 : 0}px)`,
                zIndex: projects.length - index,
                minWidth: '28vw', 
                maxWidth: '32vw',
                marginRight: index < projects.length - 1 ? `${cardGap}px` : '0',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover object-left-top rounded-sm"
                draggable={false}
              />
            </div>
          )
        })}
      </motion.div>

      {/* Mobile Layout */}
      <motion.div
        className="md:hidden w-full px-4 space-y-8 mt-8"
        variants={mobileContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative w-full rounded-lg overflow-hidden shadow-lg"
            style={{ aspectRatio: '16 / 10' }}
            variants={mobileItemVariants}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              quality={100}
              className="object-cover object-left-top"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default WorkHero