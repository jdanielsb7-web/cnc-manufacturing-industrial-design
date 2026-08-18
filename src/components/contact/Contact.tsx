"use client"

import { ContactForm } from "./ContactForm"
import { ContactLinks } from "./ContactLinks"
import { motion } from "framer-motion"
import { slideInRight, staggerContainer, staggerItem } from "@/utils/motion";

export const Contact = () => {
    return (
        <div className="flex flex-col items gap-10 max-w-7xl mx-auto px-5">
            <motion.div {...staggerContainer} className="flex flex-col md:flex-row md:justify-between md:items-end gap-5">
                <motion.h2 id="contacto-title" variants={staggerItem} className="font-display font-bold uppercase text-4xl lg:text-5xl leading-[1.2] text-[#EDE9DD] max-w-xl">
                    ¿En qué proyecto podemos ayudarte?
                </motion.h2>

                <motion.span variants={staggerItem} className="text-xs lg:text-sm font-mono font-medium tracking-[0.3em] uppercase text-[#5281C6]">
                    [ 06 — Contacto ]
                </motion.span>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                <ContactForm/>

                <motion.div {...slideInRight} className="flex flex-col gap-5 w-full md:w-1/2">
                    <h3 className="text-[#EDE9DD] font-display font-semibold uppercase text-xl lg:text-2xl">
                        Hablemos de fabricación
                    </h3>
                    <p className="text-base lg:text-lg leading-relaxed font-light text-[#EDE9DD]/75">
                        Atendemos cotizaciones, prototipos y producción en serie.
                        Al abrir WhatsApp puedes adjuntar tu fotografía o plano
                        para que la propuesta sea más precisa.
                    </p>

                    <ContactLinks />
                </motion.div>
            </div>
        </div>
    )
}
