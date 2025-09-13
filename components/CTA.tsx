'use client'

import React, { useRef, useEffect } from "react";
import Button from "@/components/ui/Button";
import redArrow from '@/public/icons/long-redArrow.svg'
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

const containerVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const buttonHover: Variants = {
    hover: {
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeInOut" },
    }
};

const CTA = () => {
    const t = useTranslations("CTA")
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <div className="w-95 md:w-4/5 mx-auto flex flex-col mt-[10%]" ref={ref}>
            {/* Top Red Line */}
            <div className="w-1/2 py-10 border-r-2 border-red mb-16"></div>

            {/* CTA Container */}
            <motion.div
                className="w-full flex flex-col items-center justify-center py-24 bg-red"
                variants={containerVariant}
                initial="hidden"
                animate={controls}
            >
                <h3 className="text-white md:max-w-xl text-center">
                    {t("title")}
                </h3>
                <p className="main-p mt-10 mb-16 text-center w-3/4 md:w-auto">
                    {t("paragraphA")}
                    <br />
                    {t("paragraphB")}
                </p>
                <div className="flex flex-col items-start md:flex-row md:items-center gap-4">
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
                </div>
            </motion.div>

            {/* Bottom Red Lines */}
            <div className="w-1/2 md:w-1/4 py-6 border-r-2 border-red mb-16 mt-8"></div>
            <div className="w-full md:w-3/4 py-6 skew-y-12 md:skew-y-0 md:py-10 border-r-2 border-l-2 border-red mb-4"></div>
            <div className="w-1/2 py-16 border-r-2 border-red"></div>
        </div>
    );
};

export default CTA;
