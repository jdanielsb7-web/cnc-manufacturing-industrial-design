import { SERVICES } from "@/utils/constants"
import { motion } from "framer-motion"
import { slideInBottom } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const Servicesgrid = () => {

    return (
        <motion.div {...slideInBottom} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#5281C6]/25 border border-[#5281C6]/25">
            {SERVICES.map((service) => (
                <article key={service.index} className="group relative isolate flex flex-col justify-end min-h-85 lg:min-h-95 overflow-hidden bg-[#091D36] p-5 py-10">
                    <Image
                        src={service.img}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="-z-10 object-cover saturate-[0.9] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    />

                    <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#071226] via-[#071226]/70 to-[#071226]/20 transition-colors duration-300 group-hover:from-[#071226] group-hover:via-[#071226]/55" />

                    <span className="absolute top-5 right-5 text-xs lg:text-sm font-mono font-medium tracking-[0.3em] text-[#BDAD9E]">
                        {service.index}
                    </span>

                    <h3 className="font-display font-semibold uppercase text-xl lg:text-2xl text-[#EDE9DD]">
                        {service.title}
                    </h3>

                    <p className="mt-2 text-sm lg:text-base leading-relaxed font-light text-[#EDE9DD]/75">
                        {service.description}
                    </p>

                    <div className="mt-5 h-0.5 w-8 bg-[#5281C6] transition-all duration-300 group-hover:w-16" />
                </article>
            ))}

            <Link
                href="#contacto"
                className="group relative flex flex-col justify-center gap-5 min-h-85 lg:min-h-95 bg-[#2254A4]/40 hover:bg-[#5281C6] transition-colors duration-300 px-5 py-10 overflow-hidden"
            >
                <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,#5281C6_0px,#5281C6_1.5px,transparent_1.5px,transparent_9px)] opacity-[0.07] group-hover:opacity-0 transition-opacity duration-300" />

                <span className="relative font-mono text-xs lg:text-sm font-medium tracking-[0.3em] uppercase text-[#BDAD9E] group-hover:text-[#091D36] transition-colors duration-300">
                    [ Tu proyecto ]
                </span>

                <h3 className="relative font-display font-semibold uppercase text-xl lg:text-2xl text-[#EDE9DD] group-hover:text-[#091D36] transition-colors duration-300">
                    ¿Necesitas algo que no está en la lista?
                </h3>

                <span className="relative inline-flex items-center gap-2 font-display text-sm lg:text-base font-semibold uppercase tracking-[0.12em] text-[#5281C6] group-hover:text-[#091D36] transition-colors duration-300">
                    Cuéntanos tu idea
                    <HiOutlineArrowLongRight className="w-4 h-4 lg:w-4.5 lg:h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
            </Link>
        </motion.div>
    )
}
