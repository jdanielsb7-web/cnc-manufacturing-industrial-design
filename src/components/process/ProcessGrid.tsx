import { PROCESS_STEPS } from "@/utils/constants"
import { motion } from "framer-motion"
import { slideInBottom } from "@/utils/motion";

export const ProcessGrid = () => {

    return (
        <motion.div {...slideInBottom} className="grid grid-cols-1 md:grid-cols-3 divide-y divide-x-0 md:divide-y-0 md:divide-x divide-[#091D36]/25 border border-[#091D36]/25">
            {PROCESS_STEPS.map((step) => (
                <article
                    key={step.step}
                    className="group relative hover:bg-white transition-colors duration-300 px-5 py-10 overflow-hidden"
                >
                    <div className="h-[90%] flex flex-col gap-5">
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,#091D36_0px,#091D36_1.5px,transparent_1.5px,transparent_9px)] opacity-0 group-hover:opacity-[0.07] transition-opacity duration-300" />

                        <span className="absolute top-5 right-5 text-xs lg:text-sm font-mono font-medium tracking-[0.3em] text-[#73563D]">
                            {step.step}
                        </span>

                        <div className="relative w-10.5 h-10.5 lg:w-11 lg:h-11 text-[#2254A4]">
                            <step.icon className="w-full h-full" />
                        </div>

                        <h3 className="relative font-display font-semibold uppercase text-xl lg:text-2xl">
                            {step.title}
                        </h3>

                        <p className="relative text-base lg:text-lg leading-relaxed text-[#091D36]/75">
                            {step.description}
                        </p>
                    </div>

                    <div className="relative mt-5 h-0.5 w-8 bg-[#5281C6] transition-all duration-300 group-hover:w-16" />
                </article>
            ))}
        </motion.div>
    )
}
