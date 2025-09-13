'use client'

import React, { useEffect, useState } from 'react'
import Footer from '@/components/Footer'
import { motion, Variants } from 'framer-motion'

const CONTACT_EMAIL = 'bishoy.morgan95@gmail.com'

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.15, duration: 0.6, ease: 'easeOut' }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export default function PrivacyPolicyPage() {
    const [lastUpdated, setLastUpdated] = useState("")

    useEffect(() => {
        setLastUpdated(new Date().toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }))
    }, [])

    return (
        <main className="w-95 md:w-4/5 mx-auto pt-[40%] md:pt-[10%] px-2 text-paleWhite">
            <motion.header
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
            >
                <h1 className="mb-2">Privacy Policy</h1>
                <p className="para-sm text-paleWhite/50">Last updated: {lastUpdated}</p>
            </motion.header>

            <motion.div
                className="space-y-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.section className="prose prose-invert max-w-xl mb-16" variants={itemVariants}>
                    <p>
                        I respect your privacy. This page explains what data I collect from visitors to this portfolio,
                        why I collect it, and how you can get in touch about your data.
                    </p>
                </motion.section>

                <motion.section className="max-w-4xl" variants={itemVariants}>
                    <h3 className="mb-2">1. Information I collect</h3>
                    <ul className="list-disc ml-[5%] flex flex-col gap-y-4 text-paleWhite/80">
                        <li>
                            <span className='font-semibold tracking-wider'>Contact form submissions</span>
                            <span className='text-paleWhite/50'>
                                — when you message me I collect the details you
                                provide (name, email, message) so I can reply.
                            </span>
                        </li>
                        <li>
                            <span className='font-semibold tracking-wider'>Anonymous usage data</span>
                            <span className='text-paleWhite/50'>
                                — basic, non-identifiable statistics (such as page visits) may be collected
                                to understand site performance. This process does not use cookies or store personal data.
                            </span>
                        </li>
                    </ul>
                </motion.section>

                <motion.section className="max-w-4xl" variants={itemVariants}>
                    <h3 className="mb-2">2. How I use your information</h3>
                    <p className="text-paleWhite/80 ml-[5%]">
                        I use data solely to respond to inquiries and to improve this site. I do not use your
                        data for targeted advertising or sell it to third parties.
                    </p>
                </motion.section>

                <motion.section className="max-w-4xl" variants={itemVariants}>
                    <h3 className="mb-2">3. Third-party services</h3>
                    <p className="text-paleWhite/80 ml-[5%]">
                        I may use trusted third-party services (for example: hosting and form handling).
                        These services process limited data on my behalf. Examples include Vercel and Render.
                    </p>
                </motion.section>

                <motion.section className="max-w-4xl" variants={itemVariants}>
                    <h3 className="mb-2">4. Cookies</h3>
                    <p className="text-paleWhite/80 ml-[5%]">
                        This website is completely cookie-free. No tracking scripts, advertising pixels,
                        or third-party cookies are used.
                    </p>
                </motion.section>

                <motion.section className="max-w-4xl" variants={itemVariants}>
                    <h3 className="mb-2">5. Your rights</h3>
                    <ul className="list-disc text-paleWhite/80 ml-[5%]">
                        <li>Request a copy of your personal data.</li>
                        <li>Ask for correction or deletion of your data.</li>
                        <li>Withdraw consent at any time (where applicable).</li>
                    </ul>
                    <p className="mt-3 text-paleWhite/50 ml-[5%]">
                        To exercise any of these rights, contact me at{' '}
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="text-white tracking-wide hover:text-red transition-colors"
                        >
                            {CONTACT_EMAIL}
                        </a>
                        .
                    </p>
                </motion.section>

                <motion.section className="max-w-4xl" variants={itemVariants}>
                    <h3 className="mb-2">6. Security</h3>
                    <p className="text-paleWhite/80 ml-[5%]">
                        I take reasonable technical and organizational measures to protect personal data, but no
                        method of transmission over the Internet is 100% secure. If you suspect a security issue,
                        please contact me immediately.
                    </p>
                </motion.section>

                <motion.section className="max-w-4xl" variants={itemVariants}>
                    <h3 className="mb-2">7. Children</h3>
                    <p className="text-paleWhite/80 ml-[5%]">
                        This site is not intended for children under 13. I do not knowingly collect information from children.
                    </p>
                </motion.section>

                <motion.section className="max-w-4xl" variants={itemVariants}>
                    <h3 className="mb-2">8. Changes to this policy</h3>
                    <p className="text-paleWhite/80 ml-[5%]">
                        I may update this policy occasionally. The “Last updated” date at the top indicates when it
                        was last revised. If there are significant changes, I will make a reasonable effort to
                        communicate them.
                    </p>
                </motion.section>
            </motion.div>

            <Footer />
        </main>
    )
}
