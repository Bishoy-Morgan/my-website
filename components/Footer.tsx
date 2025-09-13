'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import github from '@/public/icons/github.svg'
import linkedin from '@/public/icons/linkedin.svg'
import whatsapp from '@/public/icons/whatsapp.svg'
import { useTranslations } from 'next-intl'

const Footer = () => {
    const t = useTranslations("Footer")
    const s = useTranslations("Navbar")
    const pathname = usePathname()

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // If already on home page, scroll to top
        if (pathname === '/') {
            e.preventDefault()
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
        // Otherwise, default Link behavior will navigate to home
    }

    const whatsappNumber = "201032700340";
    const whatsappMessage = "Hi Bishoy! I just visited your portfolio and would love to discuss a project.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    return (
        <footer className='w-full flex justify-center py-16'>
            <div className='w-95 md:w-4/5 flex justify-between'>
                <div className='w-1/2 md:w-1/4 py-16 px-2'>
                    <ul className='flex flex-col space-y-8'>
                        <Link 
                            href={`/`} 
                            onClick={handleHomeClick} 
                            className='text-white/50 hover:text-white hover:translate-x-2 transition-all duration-150 ease-linear'
                        >
                            {s("home")}
                        </Link>
                        <Link href={`/about`} className='text-white/50 hover:text-white hover:translate-x-2 transition-all duration-150 ease-linear'>
                            {s("about")}
                        </Link>
                        <Link href={`/work`} className='text-white/50 hover:text-white hover:translate-x-2 transition-all duration-150 ease-linear'>
                            {s("work")}
                        </Link>
                    </ul>
                    <span className='block para-sm mt-20 text-white/50'>
                        {t("copyRights")}
                    </span>
                </div>

                <div className='w-1/2 md:w-1/4 py-16 flex flex-col justify-between'>
                    <div className='flex items-center justify-start space-x-8 pr-2 md:pr-0'>
                        <Link href={`https://www.linkedin.com/in/bishoy-morgan-ba979a310`} target='_blank' className='navLinks'>
                            <Image 
                            src={linkedin}
                            alt='LinkedIn'
                            width={28}
                            height={28}
                            className='icon-vw'
                            />
                        </Link>
                        <Link href={`https://github.com/Bishoy-Morgan`} target='_blank' className='navLinks'>
                            <Image 
                            src={github}
                            alt='GitHub'
                            width={28}
                            height={28}
                            className='icon-vw'
                            />
                        </Link>
                        <a 
                        href={whatsappLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="navLinks"
                        >
                            <Image 
                            src={whatsapp}
                            alt='WhatsApp'
                            width={28}
                            height={28}
                            className='icon-vw'
                            />
                        </a>
                    </div>
                    <div className='px-2 flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between mt-20 text-white/50'>
                        <Link href={`/privacy-policy`} className='para-sm hover:text-white transition-all ease-in-out duration-300'>
                            {t("privacyPolicy")}
                        </Link>
                        <span className='para-sm'>
                            {t("cookie")}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
