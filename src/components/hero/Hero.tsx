"use client"

import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HeroCarousel } from "./HeroCarousel";
import { secondaryButton, thirdButton } from "@/utils/styles/button";
import { motion } from "framer-motion"
import { slideInBottomOnLoad, staggerContainerOnLoad, staggerItem } from "@/utils/motion";

export const Hero = ({ }) => {
    return (
        <div className="relative isolate min-h-[clamp(640px,100dvh,800px)] flex items-center overflow-hidden bg-[#091D36]">

            <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#071226]/60 via-[#071226]/40 to-[#071226]/95" />

            <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(135deg,rgba(82,129,198,0.12)_0px,rgba(82,129,198,0.12)_1.5px,transparent_1.5px,transparent_9px)] mix-blend-screen" />

            <motion.div {...staggerContainerOnLoad} className="relative max-w-7xl mx-auto px-5 pt-26 pb-10 lg:pt-16 lg:pb-0 flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-16 w-full">

                <div className="flex flex-col gap-5 items-start justify-center lg:w-1/2">

                    <motion.h1 id="inicio-title" variants={staggerItem} className="max-w-3xl font-display font-bold uppercase text-5xl sm:text-6xl lg:text-7xl leading-[1.15] text-white">
                        Letras 3D, corte láser y CNC en <span className="text-[#BDAD9E]">Guadalajara</span>
                    </motion.h1>

                    <motion.p variants={staggerItem} className="max-w-md text-base lg:text-lg text-white/75 leading-relaxed">
                        Taller de fabricación digital. Piezas a medida para empresas,
                        arquitectos, diseñadores y agencias.
                    </motion.p>

                    <motion.div variants={staggerItem} className="flex flex-col sm:flex-row sm:flex-wrap gap-5 w-full">
                        <Link
                            href="#contacto"
                            className={`${secondaryButton} group inline-flex items-center justify-center gap-2.5`}
                        >
                            Cotizar sin compromiso
                            <HiOutlineArrowLongRight className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="#servicios"
                            className={`${thirdButton} group inline-flex items-center justify-center gap-2.5`}
                        >
                            Ver servicios
                        </Link>
                    </motion.div>
                </div>

                <motion.div variants={staggerItem} className="w-full lg:w-1/2 flex">
                    <HeroCarousel />
                </motion.div>

            </motion.div>

            <motion.div {...slideInBottomOnLoad} className="absolute left-5 bottom-5 hidden sm:flex items-center gap-5 font-mono text-[10px] lg:text-xs tracking-[0.3em] uppercase text-[#EDE9DD]/75">
                <span className="block w-px h-8 bg-linear-to-b from-[#5281C6] to-transparent animate-pulse" />
                Scroll
            </motion.div>
        </div>
    )
}
