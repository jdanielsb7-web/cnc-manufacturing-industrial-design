"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ContactFormSchema, TContactForm } from "./Contact.schema"
import { motion } from "framer-motion"
import { slideInLeft } from "@/utils/motion";
import { input, label } from "@/utils/styles/form"
import { primaryButton } from "@/utils/styles/button"
import { FaWhatsapp } from "react-icons/fa6"
import { WHATSAPP_NUMBER } from "@/utils/constants"

export const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(ContactFormSchema)
    })

    const handleSendMessage = (data: TContactForm) => {
        const subject = `*${data.subject}*`
        const greeting = `Hola buen día, soy ${data.name}, visité el sitio web de CNC MANUFACTURING Industrial Design.`
        const details = data.details

        const encodedMessage = encodeURIComponent(`${subject}\n\n${greeting}\n\n${details}`);

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

        window.open(whatsappUrl, "_blank")

        reset()
    }

    return (
        <motion.form {...slideInLeft} className="flex flex-col gap-5 bg-[#2254A4]/50 px-5 py-10 border border-[#5281C6]/50 w-full md:w-1/2"
            onSubmit={handleSubmit(handleSendMessage)}>

            <div className="form-group">
                <label htmlFor="name" className={label}>Nombre </label>
                <input type="text" id="name" autoComplete="name" {...register("name")} placeholder="Tu nombre o empresa" className={input} />
                {errors.name && <p className="text-[#EDE9DD]/75 font-medium font-mono text-xs lg:text-sm mt-1">*{errors.name.message}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="subject" className={label}>Servicio de interés </label>
                <input type="text" id="subject" autoComplete="off" {...register("subject")} placeholder="Letras 3D, láser, CNC, impresión 3D..." className={input} />
                {errors.subject && <p className="text-[#EDE9DD]/75 font-medium font-mono text-xs lg:text-sm mt-1">*{errors.subject.message}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="details" className={label}>Detalles del Proyecto </label>
                <textarea rows={4} id="details" autoComplete="off" {...register("details")} placeholder="Material, medidas, cantidad, fecha estimada..." className={`${input} resize-none`} />
                {errors.details && <p className="text-[#EDE9DD]/75 font-medium font-mono text-xs lg:text-sm mt-1">*{errors.details.message}</p>}
            </div>

            <div className="space-y-2.5">
                <button className={`${primaryButton} flex w-full items-center justify-center gap-2.5`}>
                    <FaWhatsapp className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5" />
                    Enviar por WhatsApp
                </button>

                <p className="text-xs lg:text-sm text-center font-medium font-mono text-[#EDE9DD]/75">
                    Se abrirá WhatsApp con tu mensaje listo. Ahí puedes adjuntar fotos o planos.
                </p>
            </div>
        </motion.form>
    )
}