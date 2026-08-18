"use client"

import { AUDIENCE } from "@/utils/constants"
import { motion } from "framer-motion"
import { slideInBottom, staggerContainer, staggerItem } from "@/utils/motion"
import { ProcessGrid } from "./ProcessGrid"
import { ProcessStages } from "./ProcessStages"

export const Process = () => {
    return (
        <div className="flex flex-col gap-10 max-w-7xl mx-auto px-5">
            <motion.div {...staggerContainer} className="flex flex-col gap-5">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5">
                    <motion.h2 id="proceso-title" variants={staggerItem} className="font-display font-bold uppercase text-4xl lg:text-5xl leading-[1.2] max-w-xl">
                        Cotización sin compromiso
                    </motion.h2>

                    <motion.span variants={staggerItem} className="text-xs lg:text-sm font-mono font-medium tracking-[0.3em] uppercase text-[#2254A4]">
                        [ 03 — Proceso ]
                    </motion.span>
                </div>
                <motion.p variants={staggerItem} className="max-w-2xl text-[#091D36]/75 text-base lg:text-lg leading-relaxed ">
                    Envíanos tu idea, fotografía o plano y te respondemos con una propuesta.
                    No necesitas llegar con el diseño resuelto.
                </motion.p>
            </motion.div>

            <ProcessStages />

            <ProcessGrid />

            <motion.div {...slideInBottom} className="flex flex-col smallMedium:flex-row smallMedium:items-center gap-x-5 gap-y-5 border-t border-[#091D36]/25 pt-5">
                <span className="shrink-0 font-mono text-xs lg:text-sm font-medium tracking-[0.3em] uppercase text-[#091D36]/75">
                    Atendemos
                </span>

                <div className="flex flex-wrap gap-2.5">
                    {AUDIENCE.map((item) => (
                        <span
                            key={item}
                            className="font-display text-sm lg:text-base font-medium uppercase tracking-[0.12em] border border-[#091D36]/25 text-[#091D36] px-3.5 py-1"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
