"use client"

import Link from "next/link"
import { HiOutlineArrowLongRight } from "react-icons/hi2"
import { GaleryGrid } from "./GaleryGrid"
import { motion } from "framer-motion"
import { slideInBottom, staggerContainer, staggerItem } from "@/utils/motion";

export const Galery = () => {
    return (
        <div className="flex flex-col gap-10 max-w-7xl mx-auto px-5">
            <motion.div {...staggerContainer} className="flex flex-col md:flex-row md:justify-between md:items-end gap-5">
                <motion.h2 id="galeria-title" variants={staggerItem} className="font-display font-bold uppercase text-4xl lg:text-5xl leading-[1.2] text-[#EDE9DD] max-w-xl">
                    Piezas que salieron del taller
                </motion.h2>

                <motion.span variants={staggerItem} className="shrink-0 text-xs lg:text-sm font-mono font-medium tracking-[0.3em] uppercase text-[#5281C6]">
                    [ 05 — Galería ]
                </motion.span>
            </motion.div>

            <GaleryGrid />

            <motion.div {...slideInBottom} className="flex flex-col smallMedium:flex-row smallMedium:items-center smallMedium:justify-between gap-x-5 gap-y-3 border-t border-[#5281C6]/25 pt-5">
                <span className="font-mono text-xs lg:text-sm font-medium tracking-[0.3em] uppercase text-[#EDE9DD]/75">
                    Madera · MDF · Acrílico · Piel · Metal
                </span>

                <Link
                    href="#contacto"
                    className="group inline-flex items-center gap-2 font-display text-sm lg:text-base font-semibold uppercase tracking-[0.12em] text-[#5281C6] transition-colors duration-300 hover:text-[#EDE9DD]"
                >
                    Quiero algo así
                    <HiOutlineArrowLongRight className="w-4 h-4 lg:w-4.5 lg:h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </motion.div>
        </div>
    )
}
