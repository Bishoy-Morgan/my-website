'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import blogsyDesktop from '@/public/images/projects/blogsy-desktop.png'
import blogsyMobile from '@/public/images/projects/blogsy-mockup.png'
import Button from './ui/Button'
import { useTranslations } from 'next-intl'
import RedLines from './ui/RedLines'

const HighlightProject: React.FC = () => {
  const t = useTranslations('HighlightProject')
  const currentProject = [
    {
      id: 1,
      desktopImage: blogsyDesktop,
      mobileImage: blogsyMobile,
    },
  ]

  return (
    <section className="w-95 md:w-4/5 mx-auto pt-20 md:mt-12 flex flex-col items-center">
      <motion.h2
        className="mb-20 md:mb-[10%] text-center"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t('title')}
      </motion.h2>

      {currentProject.map((project) => (
        <motion.div
          key={project.id}
          className="relative w-full flex flex-col items-center justify-center gap-y-6 px-2"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            className="w-4/5 md:w-1/2 flex flex-col text-center items-center justify-center"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-bold shiny-text mb-8">{t('currentProject-name')}</h2>
            <p className="my-8 secondary-p text-paleWhite/80">
              {t('currentProject-des')}
            </p>
            <Link href="/work" className='mb-8'>
              <Button bgColor="#ff220e">
                {t('buttonA')}
              </Button>
            </Link>
          </motion.div>

          {/* Red lines */}
          <RedLines lines={['middleTopRight', 'bottomRight', 'bottomLeft', 'middleTopLeft']} />

          <motion.div
            className="relative group w-full flex flex-col justify-center items-center md:block h-[90vh] md:h-[80vh]"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 backdrop-blur-xs transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-y-10 z-30 ">
              <a 
              href="https://blogsy-ceod.onrender.com" 
              target="_blank"
              className='text-red'
              >
                {/* Visit website */}
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
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src={project.desktopImage}
                alt="Blogsy Desktop Image"
                width={1.5 * 800}
                height={800}
                quality={75}
                loading='eager'
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 80vw, 999px"
                className="shadow-2xl"
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </motion.div>

            {/* Mobile Image */}
            <motion.div
              className="relative md:!absolute right-0 bottom-[2.5%] w-[40%] md:w-[16%] z-20 rounded-[2.5rem] shadow-3xl"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Image
                src={project.mobileImage}
                alt={`Blogsy Mobile Image`}
                width={0.49 * 382}
                height={382}
                quality={75}
                loading='eager'
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 40vw"
                style={{ width: 'auto', height: 'auto', objectFit: 'cover', borderRadius: '2rem' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </section>
  )
}

export default HighlightProject