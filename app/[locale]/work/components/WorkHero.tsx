'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

import blogsyDesktop from '@/public/images/projects/blogsy-desktop.png'
import legendDesktop from '@/public/images/projects/legend-desktop.png'
import schoolsphereDesktop from '@/public/images/projects/schoolsphere-desktop.png'
import skiableDesktop from '@/public/images/projects/skiable-desktop.png'
import spaceMortgageDesktop from '@/public/images/projects/spaceMortgage-desktop.png'
import mapdxbDesktop from '@/public/images/projects/maps-desktop.png'
import RedLines from '@/components/ui/RedLines'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const projects = [
  { id: 1, name: 'Blogsy', image: blogsyDesktop },
  { id: 2, name: 'Legend', image: legendDesktop },
  { id: 3, name: 'MapDXB', image: mapdxbDesktop },
  { id: 4, name: 'Skiable', image: skiableDesktop },
  { id: 5, name: 'Space Mortgage', image: spaceMortgageDesktop },
  { id: 6, name: 'Schoolsphere', image: schoolsphereDesktop },
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
  const skewAngle = 2
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const cardGap = -28

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
        className="hidden md:flex relative w-full items-end justify-center px-4 min-h-[60vh] "
        style={{ perspective: '800px' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => {
          const isHovered = hoveredIndex === index
          return (
            <Link 
            href={`/projects/${project.id}`} 
            key={project.id} 
            aria-label={project.name}
            className='relative'
            >
              <div
                className="relative rounded-sm transition-transform duration-500 ease-in-out cursor-pointer "
                style={{
                  width: '32vw', 
                  aspectRatio: '5 / 3.5', 
                  transformOrigin: 'center',
                  transform: `skewY(${skewAngle}deg) translateY(${isHovered ? -120 : 0}px)`,
                  zIndex: projects.length - index,
                  minWidth: '32vw', 
                  maxWidth: '34vw',
                  marginRight: index < projects.length - 1 ? `${cardGap}rem` : '0',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 768px) 32vw, 0px"
                  quality={100}
                  priority={false}
                  loading='eager'
                  draggable={false}
                  style={{ 
                    objectPosition: 'left top',
                    objectFit: 'cover',
                    borderRadius: '0.25rem',
                  }}
                  className='shadow-lg shadow-black'
                />
              </div>
            </Link>
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
              sizes="(max-width: 767px) 100vw, 0px"
              quality={75}
              loading='eager'
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