import { PROCESS_STAGES } from "@/utils/constants"
import Image from "next/image"
import { motion } from "framer-motion"
import { staggerContainer, staggerItemScale } from "@/utils/motion";

export const ProcessStages = () => {
    return (
        <motion.div {...staggerContainer} className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {PROCESS_STAGES.map((stage, i) => (
                <motion.figure
                    key={stage.img}
                    variants={staggerItemScale}
                    className={`group relative overflow-hidden bg-[#091D36] md:aspect-4/5 ${i === 0
                        ? "col-span-2 aspect-video md:col-span-1"
                        : "aspect-4/5"
                        } ${i === 1 ? "md:-mt-5 lg:-mt-10" : ""}`}
                >
                    <Image
                        src={stage.img}
                        alt={stage.alt}
                        fill
                        sizes={i === 0 ? "(min-width: 768px) 33vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
                        className="object-cover saturate-[0.9] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#071226]/90 to-transparent" />

                    <figcaption className="absolute inset-x-0 bottom-0 flex items-baseline gap-2.5 p-5">
                        <span className="font-mono text-[10px] lg:text-xs font-bold tracking-[0.25em] text-[#5281C6]">
                            {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-sm lg:text-base font-semibold uppercase text-[#EDE9DD]">
                            {stage.stage}
                        </span>
                    </figcaption>
                </motion.figure>
            ))}
        </motion.div>
    )
}
