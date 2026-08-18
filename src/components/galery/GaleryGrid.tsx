import { GALERY_ITEMS } from "@/utils/constants"
import Image from "next/image"
import { motion } from "framer-motion"
import { slideInBottomScale } from "@/utils/motion";

export const GaleryGrid = () => {
    return (
        <div className="columns-1 smallMedium:columns-2 lg:columns-3 gap-5 [column-fill:balance]">
            {GALERY_ITEMS.map((item, i) => (
                <motion.figure
                    key={item.img}
                    {...slideInBottomScale}
                    className="group relative mb-5 break-inside-avoid overflow-hidden bg-[#071226]"
                >
                    <Image
                        src={item.img}
                        alt={item.alt}
                        width={item.w}
                        height={item.h}
                        sizes="(max-width: 400px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-auto saturate-[0.92] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />

                    <span className="absolute top-5 left-5 text-xs lg:text-sm font-mono font-medium tracking-[0.3em] text-[#BDAD9E]">
                        {String(i + 1).padStart(2, "0")}
                    </span>

                    <figcaption className="absolute inset-x-0 bottom-0 flex items-end p-5 pt-10 bg-linear-to-t from-[#071226]/90 to-transparent opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <span className="text-xs lg:text-sm font-mono font-medium tracking-[0.3em] uppercase text-[#BDAD9E]">
                            {item.tag}
                        </span>
                    </figcaption>
                </motion.figure>
            ))}
        </div>
    )
}
