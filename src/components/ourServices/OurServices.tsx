"use client"

import { Servicesgrid } from "./ServicesGrid"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/utils/motion";

export const OurServices = () => {

  return (
    <div className="flex flex-col items gap-10 max-w-7xl mx-auto px-4">
      <motion.div {...staggerContainer} className="flex flex-col md:flex-row md:justify-between md:items-end gap-5">
        <motion.h2 id="servicios-title" variants={staggerItem} className="font-display font-bold uppercase text-4xl lg:text-5xl leading-[1.2] text-[#EDE9DD] max-w-xl">
          Lo que hacemos en el taller
        </motion.h2>

        <motion.span variants={staggerItem} className="text-xs lg:text-sm font-mono font-medium tracking-[0.3em] uppercase text-[#5281C6]">
          [ 02 — Servicios ]
        </motion.span>
      </motion.div>

      <Servicesgrid />
    </div>
  )
}