'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import blogsyDesktop from '@/public/images/projects/blogsy-desktop.png'
import blogsyMobile from '@/public/images/projects/blogsy-mockup.png'
import Button from './ui/Button'
import { useTranslations } from 'next-intl'
import RedLines from './ui/RedLines'

const HighlightProject: React.FC = () => {
  const t = useTranslations('HighlightProject')

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1], 
      },
    },
  }

  const currentProject = useMemo(
    () => [
      {
        id: 1,
        desktopImage: blogsyDesktop,
        mobileImage: blogsyMobile,
      },
    ],
    []
  )

  return (
    <section className="w-95 md:w-4/5 mx-auto pt-20 md:mt-12 flex flex-col items-center">
      <motion.h2
        className="mb-20 md:mb-[10%] text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeUpVariants}
        viewport={{ once: true, amount: 0.6 }}
      >
        {t('title')}
      </motion.h2>

      {currentProject.map((project) => (
        <motion.div
          key={project.id}
          className="relative w-full flex flex-col items-center justify-center gap-y-6 px-2"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div
            className="w-4/5 md:w-1/2 flex flex-col text-center items-center justify-center"
            variants={fadeUpVariants}
          >
            <h2 className="font-bold shiny-text mb-8">
              {t('currentProject-name')}
            </h2>
            <p className="my-8 secondary-p text-paleWhite/80">
              {t('currentProject-des')}
            </p>
            <Link href="/work" className="mb-8">
              <Button bgColor="#ff220e">{t('buttonA')}</Button>
            </Link>
          </motion.div>

          {/* Red Decorative lines  */}
          <RedLines lines={['middleTopRight', 'bottomRight', 'bottomLeft', 'middleTopLeft']} />

          <motion.div
            className="relative group w-full flex flex-col justify-center items-center md:block h-[90vh] md:h-[80vh]"
            variants={fadeUpVariants}
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 backdrop-blur-xs transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-y-10 z-30">
              <a
                href="https://blogsy-ceod.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red"
              >
                <h1 className="hidden md:block tracking-[-0.5rem] md:hover:scale-110 transition-transform duration-300 ease-out">
                  {t('visitWebsite')}
                </h1>
                <h2 className="md:hidden tracking-[-0.3rem] md:hover:scale-110 transition-transform duration-300 ease-out">
                  {t('visitWebsite')}
                </h2>
              </a>
              <Link href={`/projects/${project.id}`}>
                <Button bgColor="#ff4533" className="!text-black">
                  {t('buttonB')}
                </Button>
              </Link>
            </div>

            {/* Desktop Image */}
            <motion.div
              className="relative w-full md:w-[95%] h-full"
              variants={fadeUpVariants}
            >
              <Image
                src={project.desktopImage}
                alt="Blogsy Desktop Screenshot"
                width={1200}
                height={800}
                quality={75}
                priority={true}
                placeholder="blur"
                sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 76vw, 960px"
                className="shadow-2xl"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  maxWidth: '100%',
                }}
              />
            </motion.div>

            {/* Mobile Image */}
            <motion.div
              className="relative md:!absolute right-0 bottom-[2.5%] w-[40%] md:w-[16%] z-20 rounded-[2.5rem] xl:rounded-[2.2rem] shadow-3xl"
              variants={fadeUpVariants}
            >
              <Image
                src={project.mobileImage}
                alt="Blogsy Mobile Screenshot"
                width={168}
                height={339}
                quality={75}
                loading="lazy"
                placeholder="blur"
                sizes="(max-width: 640px) 40vw, (max-width: 768px) 25vw, 16vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '2rem',
                }}
                className="xl:!rounded-[2rem]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </section>
  )
}

export default HighlightProject
