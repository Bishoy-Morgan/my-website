'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import ContactForm from './ContactForm'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import github from '@/public/icons/github.svg'
import linkedin from '@/public/icons/linkedin.svg'
import menuIcon from '@/public/icons/menu.svg'
import morganLogo from '@/public/images/MRGN.png'
import closeIcon from '@/public/icons/close.svg'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar: React.FC = () => {
    const t = useTranslations('Navbar')
    const locale = useLocale()
    const [isContactOpen, setContactOpen] = useState(false)
    const [isMenuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()
    console.log(pathname)

    return (
        <>
            {/* Desktop Navbar */}
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="hidden md:flex absolute top-0 left-0 z-50 w-full h-[15%] items-center"
            >
                <div className="relative w-[10%] h-full">
                    <Image
                        src={morganLogo}
                        alt="Morgan Logo"
                        fill
                        priority
                        sizes="(max-width: 768px) 40vw, 20vw"
                        className="object-contain"
                    />
                </div>
                <nav className="w-4/5 mx-auto flex items-center justify-between">
                    <ul className="w-1/4 flex items-center justify-between text-sm">
                        <Link
                            href={`/${locale}`}
                            className={`navLinks ${pathname === `/${locale}` ? 'active font-semibold tracking-tighter' : ''}`}
                        >
                            {t('home')}
                        </Link>
                        <Link
                            href={`/${locale}/about`}
                            className={`navLinks ${pathname === `/${locale}/about` ? 'active font-semibold tracking-tighter' : ''}`}
                        >
                            {t('about')}
                        </Link>
                        <Link
                            href={`/${locale}/work`}
                            className={`navLinks pr-2 ${pathname === `/${locale}/work` ? 'active font-semibold tracking-tighter' : ''}`}
                        >
                            {t('work')}
                        </Link>
                    </ul>
                    <div className="w-[31%] flex items-center justify-between pr-2">
                        <a
                            href={`https://www.linkedin.com/in/bishoy-morgan-ba979a310`}
                            target="_blank"
                            className="navLinks"
                        >
                            <Image src={linkedin} alt="LinkedIn" width={20} height={20} className="icon-vw" />
                        </a>
                        <a
                            href={`https://github.com/Bishoy-Morgan`}
                            target="_blank"
                            className="navLinks -ml-2"
                        >
                            <Image src={github} alt="GitHub" width={20} height={20} className="icon-vw" />
                        </a>
                        <Button onClick={() => setContactOpen(true)} bgColor="#ff220e">
                            {t('button')}
                        </Button>
                    </div>
                </nav>
                <div className="w-[10%]"></div>
            </motion.div>

            {/* Mobile Navbar */}
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex md:hidden absolute top-0 left-0 z-50 w-full h-[15%] items-center justify-between px-4"
            >
                <div className="relative w-[30%] h-4/5 ">
                    <Image
                        src={morganLogo}
                        alt="Morgan Logo"
                        fill
                        priority
                        quality={100}
                        sizes="40vw"
                        className="object-cover"
                    />
                </div>
                <button
                    onClick={() => setMenuOpen(true)}
                    className='mr-[5%] bg-red p-2 rounded-full'
                >
                    <Image src={menuIcon} alt="Menu" width={32} height={32} />
                </button>
            </motion.div>

            {/* Fullscreen Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%', transition: { duration: 0.8, ease: 'easeInOut', delay: 0.2 } }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="md:hidden fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center gap-y-10 text-white"
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute top-8 right-8 text-2xl rounded-full bg-red p-2"
                            onClick={() => setMenuOpen(false)}
                        >
                            <Image src={closeIcon} alt='Close button' width={24} height={24} />
                        </motion.button>

                        {/* Nav Links */}
                        <Link
                            href={`/${locale}`}
                            className={`navLinks ${pathname === `/${locale}` ? 'text-red' : ''}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {t('home')}
                        </Link>
                        <Link
                            href={`/${locale}/about`}
                            className={`navLinks ${pathname === `/${locale}/about` ? 'text-red' : ''}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {t('about')}
                        </Link>
                        <Link
                            href={`/${locale}/work`}
                            className={`navLinks ${pathname === `/${locale}/work` ? 'text-red' : ''}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {t('work')}
                        </Link>

                        <div className="w-1/3 flex items-center justify-between mt-8">
                            <a
                                href={`https://www.linkedin.com/in/bishoy-morgan-ba979a310`}
                                target="_blank"
                                
                            >
                                <Image src={linkedin} alt="LinkedIn" width={20} height={20} className="icon-vw border-l border-red pl-2" />
                            </a>
                            <a
                                href={`https://github.com/Bishoy-Morgan`}
                                target="_blank"
                                
                            >
                                <Image src={github} alt="GitHub" width={20} height={20} className="icon-vw border-l border-red pl-2" />
                            </a>
                        </div>

                        {/* Contact Button */}
                        <Button
                            onClick={() => {
                                setContactOpen(true)
                                setMenuOpen(false)
                            }}
                            bgColor="#ff220e"
                            className='mt-20'
                        >
                            {t('button')}
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Popup for Direct Contact */}
            <ContactForm isOpen={isContactOpen} onClose={() => setContactOpen(false)} />
        </>
    )
}

export default Navbar
