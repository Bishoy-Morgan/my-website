'use client'

import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView, Variants } from 'framer-motion'
import RedLines from '@/components/ui/RedLines'
import { useTranslations } from 'next-intl'

interface Milestone {
  season: string
  year: string
  title: string
  subtitle: string
  side: 'left' | 'right'
}

interface TimelineItemProps {
  m: Milestone
  index: number
}

const TimelineItem: React.FC<TimelineItemProps> = ({ m, index }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  }

  const childVariants: Variants = {
    hidden: { opacity: 0, x: m.side === 'left' ? 50 : -50, y: 20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <motion.div
      ref={ref}
      className={`absolute flex flex-col max-w-[calc(44%+1rem)] md:max-w-[calc(43%+1rem] px-2 md:px-0 ${
        m.side === 'left'
          ? 'left-0 items-end text-right '
          : 'right-0 items-start text-left pr-0 md:pr-4'
      }`}
      style={{ top: `${index * 16}rem` }}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.p variants={childVariants}>
        <motion.span className="para-sm text-paleWhite/80" variants={childVariants}>
          {m.season}
        </motion.span>{' '}
        <motion.span className="main-p text-paleWhite font-bold tracking-tighter" variants={childVariants}
        >
          {m.year}
        </motion.span>
      </motion.p>

      <motion.h3 className="hidden md:block text-red font-bold tracking-tight my-2" variants={childVariants}>
        {m.title}
      </motion.h3>

      <motion.h4 className="md:hidden text-red font-bold tracking-tight my-2" variants={childVariants}>
        {m.title}
      </motion.h4>

      <motion.p className="secondary-p md:para-sm text-paleWhite" variants={childVariants}>
        {m.subtitle}
      </motion.p>
    </motion.div>
  )
}

export default function JourneyTimeline() {
  const t = useTranslations('JourneyTimeline')
  
  const milestones: Milestone[] = [
    {
      season: t("spring"),
      year: t("2023"),
      title: t("openingNight"),
      subtitle: t("subtitleA"),
      side: 'right',
    },
    {
      season: t("summer"),
      year: t("2023"),
      title: t("firstCue"),
      subtitle: t("subtitleB"),
      side: 'left',
    },
    {
      season: t("winter"),
      year: t("2023"),
      title: t("perfectTiming"),
      subtitle: t("subtitleC"),
      side: 'right',
    },
    {
      season: t("spring"),
      year: t("2024"),
      title: t("speakingTongues"),
      subtitle: t("subtitleD"),
      side: 'left',
    },
    {
      season: t("summer"),
      year: t("2025"),
      title: t("encore"),
      subtitle: t("subtitleE"),
      side: 'right',
    },
  ]

  return (
    <section className="relaive w-95 md:w-4/5 h-[1248px] 2xl:h-[1448px] mx-auto py-20 relative flex justify-center">
      <RedLines lines={['bottomRight', 'middleLeft']}/>
      <div className="relative w-full md:w-1/2 h-full flex justify-center ">
        {/* Timeline Line */}
        <div className="relative w-[1px] bg-red overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-red rounded-full origin-top"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </div>

        {/* Timeline Items */}
        {milestones.map((m, i) => (
          <TimelineItem key={i} m={m} index={i} />
        ))}
      </div>
    </section>
  )
}
