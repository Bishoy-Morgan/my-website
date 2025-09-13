'use client'

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import defaultArrow from '@/public/icons/long-arrow.svg'
import { useLocale } from "next-intl";

type ButtonProps = Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement> & HTMLMotionProps<"button">,
    "onDrag" | "onDragStart" | "onDragEnd" | "onDragEnter" | "onDragExit" | "onDragLeave" | "onDragOver" | "onDrag"
> & {
    bgColor?: string;
    arrowIcon?: StaticImageData; 
};

const Button: React.FC<ButtonProps> = ({ 
    children, 
    className = "", 
    bgColor, 
    arrowIcon = defaultArrow,
    ...props 
}) => {
    const locale = useLocale();
    return (
        <motion.button
        initial="rest"
        whileHover="hover"
        animate="rest"
        className={`relative overflow-hidden text-white rounded-full px-[2vw] py-[2vw] md:py-[.8vw] text-button font-semibold flex items-center ${locale === 'ar' ? 'mr-[0.5vw]' : 'ml-[0.5vw]'} ${className} `}
        {...props}
        >
            {/* Text content stays on top */}
            <span className="relative z-10">{children}</span>

            {/* The long black arrow */}
            <motion.span
            className="relative z-10 text-white"
            variants={{
                rest: { 
                    opacity: 0, 
                    x: locale === 'ar' ? '6vw' : '-6vw' 
                },
                hover: { 
                    opacity: 1, 
                    x: locale === 'ar' ? '-1vw' : '1vw' 
                },
            }}
            style={{
                position: 'relative',
                overflow: 'visible',
                pointerEvents: 'none',
                width: 'clamp(1.5vw, 2vw, 2.5vw)',
                height: 'auto',         
                display: 'inline-block',
            }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <Image 
                    src={arrowIcon}
                    alt="Arrow"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    className={`${locale === 'ar' ? 'rotate-180' : ''}`}
                />
            </motion.span>

            {/* The red circle / fill */}
            <motion.div
                variants={{
                    rest: {
                        width: 'var(--circle-size)',
                        height: 'var(--circle-size)',
                        borderRadius: "50%",
                        backgroundColor: bgColor,
                        left: locale === 'ar' ? 'auto' : '0',
                        right: locale === 'ar' ? '0' : 'auto',
                        top: "50%",
                        translateY: "-50%",
                        position: "absolute",
                        transition: { duration: 0.4, ease: "easeInOut" },
                    },
                    hover: {
                        width: "100%",
                        height: "100%",
                        borderRadius: 0,
                        left: locale === 'ar' ? 'auto' : '0',
                        right: locale === 'ar' ? '0' : 'auto',
                        top: 0,
                        translateY: "0%",
                        backgroundColor: bgColor,
                        position: "absolute",
                        transition: { duration: 0.4, ease: "easeInOut" },
                    },
                }}
                className="z-0 circle-size"
            />
        </motion.button>
    );
};

export default Button;
