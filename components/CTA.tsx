'use client'

import React from "react"
import Button from "@/components/ui/Button"
import redArrow from '@/public/icons/long-redArrow.svg'
import { motion, Variants } from "framer-motion"
import { useTranslations } from "next-intl"
import RedLines from "./ui/RedLines"


const containerVariants: Variants = {
    hidden: {opacity: 0, y: 30},
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
    },
}

const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: .5, ease: [0.25, 0.1, 0.25, 1] },
    },
}

const buttonHover: Variants = {
    hover: {
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeInOut" },
    },
}

const CTA = () => {
    const t = useTranslations("CTA")

    return (
        <div className="relative w-95 md:w-4/5 mx-auto flex flex-col mt-[10%]">
            {/* Red Decorative lines */}
            <RedLines lines={['center']} />

            {/* CTA Container */}
            <motion.div
                className="w-full flex flex-col items-center justify-center py-24 bg-red"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
            >
                <motion.h2
                    className="!text-white text-center md:max-w-4xl"
                    variants={fadeUpVariants}
                >
                    {t("title")}
                </motion.h2>

                <motion.p
                    className="main-p mt-10 mb-16 text-center w-3/4 md:w-auto"
                    variants={fadeUpVariants}
                >
                    {t("paragraphA")}
                    <br />
                    {t("paragraphB")}
                </motion.p>

                <motion.div
                    className="flex flex-col items-start md:flex-row md:items-center gap-8"
                    variants={fadeUpVariants}
                >
                    <motion.a
                        href="mailto:bishoy.morgan95@gmail.com?subject=Project%20Inquiry&body=Hi%20Bishoy%2C%20I%27d%20like%20to%20talk%20about%20a%20project!"
                        variants={buttonHover}
                        whileHover="hover"
                    >
                        <Button bgColor="#020202" arrowIcon={redArrow}>
                            {t("email")}
                        </Button>
                    </motion.a>

                    <motion.a
                        href="https://wa.me/201032700340?text=Hi%20Bishoy%2C%20I%27d%20like%20to%20talk%20about%20a%20project!"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={buttonHover}
                        whileHover="hover"
                    >
                        <Button bgColor="#020202" arrowIcon={redArrow}>
                            {t("whatsApp")}
                        </Button>
                    </motion.a>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default CTA
