"use client"

import { fourthButton } from '@/utils/styles/button'
import { BRAND_MEDIA } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { motion } from "framer-motion"
import { staggerContainer, staggerItem, staggerItemScale } from "@/utils/motion";

export const OurBrand = () => {
    return (
        <motion.div {...staggerContainer} className="flex flex-col md:flex-row-reverse justify-between items-center gap-10 max-w-7xl mx-auto px-5">
            <div className="flex flex-col gap-5 md:w-1/2">
                <motion.span variants={staggerItem} className="text-xs lg:text-sm font-mono font-medium tracking-[0.3em] uppercase text-[#091D36]">
                    [ 04 — Nuestra Marca ]
                </motion.span>

                <motion.div variants={staggerItem} className='space-y-1'>
                    <h2 id="marca-title" className="font-display font-bold uppercase text-4xl lg:text-5xl leading-[1.2]">
                        Madera Urbana
                    </h2>

                    <span className="text-xs lg:text-sm font-mono font-medium tracking-[0.3em] uppercase text-[#091D36]/75">
                        Línea propia del taller
                    </span>
                </motion.div>

                <motion.p variants={staggerItem} className="max-w-lg text-[#091D36]/75 text-base lg:text-lg leading-relaxed">
                    Tablas de charcutería, charolas y accesorios de mesa en maderas finas.
                    Parota, tzalam, rosa morada, teca, encino y pino, terminados con aceite
                    mineral y cera de abeja.
                </motion.p>

                <motion.div variants={staggerItem}>
                    <Link
                        href="https://cncmanstudio.my.canva.site/madera-urbana/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${fourthButton} group inline-flex items-center justify-center gap-2.5`}
                    >
                        Ver sitio web
                        <FaArrowUpRightFromSquare className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5" />
                    </Link>
                </motion.div>
            </div>

            <motion.div variants={staggerItemScale} className="relative w-full md:w-1/2 md:max-w-lg shrink-0 pb-15 pl-10 smallMedium:pb-20 smallMedium:pl-15">
                <figure className="relative aspect-3/4 overflow-hidden bg-[#091D36]">
                    <Image
                        src={BRAND_MEDIA.main.img}
                        alt={BRAND_MEDIA.main.alt}
                        width={BRAND_MEDIA.main.w}
                        height={BRAND_MEDIA.main.h}
                        sizes="(max-width: 768px) 92vw, 46vw"
                        className="w-full h-full object-cover"
                    />
                </figure>

                <figure className="absolute bottom-0 left-0 w-[46%] aspect-square overflow-hidden bg-[#091D36] border-4 border-[#BDAD9E]">
                    <Image
                        src={BRAND_MEDIA.inset.img}
                        alt={BRAND_MEDIA.inset.alt}
                        width={BRAND_MEDIA.inset.w}
                        height={BRAND_MEDIA.inset.h}
                        sizes="(max-width: 768px) 43vw, 21vw"
                        className="w-full h-full object-cover"
                    />
                </figure>

                <span className="absolute -top-0.5 -right-0.5 w-6 h-6 border-t-2 border-r-2 border-[#73563D]" />

                <div className="absolute top-5 right-5 bg-[#091D36]/90 backdrop-blur-sm px-3 py-2 font-mono text-[9px] lg:text-[10px] font-medium tracking-[0.25em] uppercase text-[#EDE9DD]">
                    Madera Urbana
                </div>
            </motion.div>
        </motion.div>
    )
}
