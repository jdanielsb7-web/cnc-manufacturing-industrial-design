"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem, staggerItemScale } from "@/utils/motion";

export const AboutUs = () => {
    return (
        <motion.div {...staggerContainer} className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-7xl mx-auto px-5">
            <div className="flex flex-col gap-5 md:w-1/2">
                <motion.span variants={staggerItem} className="text-xs lg:text-sm font-mono font-medium tracking-[0.3em] uppercase text-[#5281C6]">
                    [ 01 — Nosotros ]
                </motion.span>

                <motion.h2 id="nosotros-title" variants={staggerItem} className="font-display font-bold uppercase text-4xl lg:text-5xl leading-[1.2]">
                    Donde el oficio se encuentra con el control numérico
                </motion.h2>

                <motion.p variants={staggerItem} className="max-w-lg text-[#091D36]/75 text-base lg:text-lg leading-relaxed">
                    Corte láser, router CNC e impresión 3D bajo un mismo techo. Programamos
                    cada trayectoria para que la máquina respete el material, y terminamos
                    a mano lo que la máquina no puede terminar.
                </motion.p>

                <motion.div variants={staggerItem} className="flex flex-wrap gap-x-10 gap-y-5 border-t border-[#091D36]/25 pt-5 font-mono text-xs lg:text-sm font-medium tracking-[0.3em] uppercase text-[#091D36]/75">
                    <span>Taller propio</span>
                    <span>Guadalajara, MX</span>
                    <span>Desde 2014</span>
                </motion.div>
            </div>

            <motion.div variants={staggerItemScale} className="relative w-full md:w-1/2 md:max-w-lg shrink-0 pb-15 pr-10 smallMedium:pb-20 smallMedium:pr-15">
                <figure className="relative aspect-3/4 overflow-hidden bg-[#091D36]">
                    <Image
                        src="/media/18.webp"
                        alt="Manos lijando a mano un bol de madera torneado sobre un banco de taller"
                        fill
                        sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 448px"
                        className="object-cover"
                    />
                </figure>

                <figure className="absolute bottom-0 right-0 w-[46%] aspect-square overflow-hidden bg-[#091D36] border-4 border-[#EDE9DD]">
                    <Image
                        src="/media/42.webp"
                        alt="Husillo y tornillo sinfín de la mesa del router CNC cubiertos de aserrín"
                        fill
                        sizes="(max-width: 768px) 43vw, 236px"
                        className="object-cover"
                    />
                </figure>

                <span className="absolute -top-0.5 -left-0.5 w-6 h-6 border-t-2 border-l-2 border-[#2254A4]" />
            </motion.div>
        </motion.div>
    )
}
