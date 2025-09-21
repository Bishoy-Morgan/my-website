'use client'

import React, { Suspense, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import blogsyDesktop from '@/public/images/projects/blogsy-desktop.png'
import blogsyMobile from '@/public/images/projects/blogsy-mockup.png'
import legendDesktop from '@/public/images/projects/legend-desktop.png'
import legendMobile from '@/public/images/projects/legend-mockup.png'
import skiableDesktop from '@/public/images/projects/skiable-desktop.png'
import skiableMobile from '@/public/images/projects/skiable-mockup.png'
import spaceMortgageDesktop from '@/public/images/projects/spaceMortgage-desktop.png'
import spaceMortgageMobile from '@/public/images/projects/spaceMortgage-mockup.png'
import mapdxbDesktop from '@/public/images/projects/maps-desktop.png'
import mapdxbMobile from '@/public/images/projects/maps-mockup.png'
import schoolsphereDesktop from '@/public/images/projects/schoolsphere-desktop.png'
import schoolsphereMobile from '@/public/images/projects/schoolsphere-mockup.png'
import TextTrail from '@/components/ui/TextTrail'
import RedLines from '@/components/ui/RedLines'
import { useTranslations } from 'next-intl'


const projects = [
  {
    id: '1',
    title: 'Blogsy',
    link: 'https://blogsy-ceod.onrender.com',
    image: [blogsyMobile, blogsyDesktop],
  },
  {
    id: '2',
    title: 'Legend',
    link: 'https://legendalu.com',
    image: [legendMobile, legendDesktop],
  },
  {
    id: '3',
    title: 'MapDXB',
    link: 'https://mapdxb.com/',
    image: [mapdxbMobile, mapdxbDesktop],
  },
  {
    id: '4',
    title: 'Skiable',
    link: 'https://skiable.vercel.app/',
    image: [skiableMobile, skiableDesktop],
  },
  {
    id: '5',
    title: 'Space Mortgage',
    link: 'https://spacemortgage.ae',
    image: [spaceMortgageMobile, spaceMortgageDesktop],
  },
  {
    id: '6',
    title: 'Schoolsphere',
    link: 'https://schoolsphere-one.vercel.app/',
    image: [schoolsphereMobile, schoolsphereDesktop],
  },
]

// Variants for animations
const titleVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
}

const mobileVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: 'easeOut', delay: 0.2 } },
}

const desktopVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: 'easeOut', delay: 0.4 } },
}

const Work: React.FC = () => {
  const t = useTranslations('WorkHero')
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  return (
    <section id="projects" className="relative w-95 mx-auto md:w-full pb-20 overflow-x-hidden">
      <div className="relative space-y-20 md:space-y-16 flex flex-col items-center justify-center">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              sectionRefs.current[index] = el
            }}
            className="relative w-full md:w-4/5 min-h-[980px] md:min-h-screen flex flex-col justify-end md:flex-row md:justify-between items-center md:items-end "
          >
            <RedLines lines={['topRight', 'middleLeft', 'topRightHalf']} className='hidden md:block'/>
            <RedLines lines={['topRight', 'middleLeft', 'topRightHalf']} className='md:hidden'/>

            {/* Project Title */}
            <motion.div
              className="hidden md:block project-title absolute top-[15%] left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-1/2 h-1/2 px-1 z-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={titleVariants}
            >
              <Suspense>
                <TextTrail
                  text={project.title}
                  animateColor={true}
                  colorCycleInterval={1500}
                  noiseFactor={1.5}
                  noiseScale={0.002}
                  backgroundColor="transparent"
                />
              </Suspense>
            </motion.div>

            <h1 className='md:hidden absolute top-[15%] left-1/2 -translate-x-1/2 w-full text-center z-10 '>
              {project.title}
            </h1>

            {/* Desktop Image */}
            <Link
              href={`/projects/${project.id}`}
              className="relative group w-full px-2 md:px-0 md:w-1/2 md:h-[60%] z-20 project-desktop"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={desktopVariants}
                className="relative w-full h-full "
              >
                <div className='absolute -top-8 left-0 w-full h-8 bg-[#202124] rounded-t-xl flex items-center justify-start gap-x-2 pl-4  '>
                  <div className='w-3 h-3 rounded-full border-red/50 border-2'></div>
                  <div className='w-3 h-3 rounded-full border-red/50 border-2'></div>
                  <div className='w-3 h-3 rounded-full border-red/50 border-2'></div>
                </div>
                <Image
                  src={project.image[1].src}
                  alt={`${project.title} desktop`}
                  width={1.78 * 1080}
                  height={1080}
                  priority={index < 2}
                  quality={100}
                  className="hidden md:block w-full h-auto max-h-full object-cover object-left-top shadow-lg shadow-[#020202] rounded-b-sm"
                />
                <Image
                  src={project.image[1].src}
                  alt={`${project.title} desktop`}
                  width={1.78 * 430}
                  height={430}
                  priority={index < 2}
                  quality={100}
                  className="md:hidden w-full h-auto max-h-full object-cover object-left-top shadow-lg shadow-[#020202] rounded-b-sm"
                />
                <div className="absolute top-0 left-0 w-full h-full group-hover:backdrop-blur-sm transition duration-1000 flex items-center justify-center gap-4">
                  <h1 className={`${project.title === 'Legend' ? '!text-white' : '!text-black' } tracking-[-0.5rem] text-center opacity-0 scale-100 group-hover:scale-125 group-hover:opacity-100 transition-all duration-1000  `}>
                    {t('preview')}
                  </h1>
                </div>
              </motion.div>
            </Link>

            {/* Mobile Image */}
            <Link
              href={`/projects/${project.id}`}
              className="relative group w-1/2 md:w-1/5 mt-8 md:mt-0 h-3/4 project-mobile rounded-t-xl z-20 md:mr-[2.5%]"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={mobileVariants}
                className="relative w-full h-full"
              >
                <Image
                  src={project.image[0].src}
                  alt={project.title}
                  width={400}
                  height={800}
                  priority={index < 2}
                  quality={100}
                  className="w-full h-full object-cover object-top rounded-xl shadow-xl shadow-[#020202]"
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-xl group-hover:backdrop-blur-sm transition duration-1000 flex items-center justify-center gap-4">
                  <h1 className={`${project.title === 'Legend' ? '!text-white' : '!text-black' } tracking-[-0.5rem] text-center opacity-0 scale-50 group-hover:scale-75 group-hover:opacity-100 transition-all duration-1000  `}>
                    {t('preview')}
                  </h1>
                </div>
              </motion.div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work
