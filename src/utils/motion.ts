import type { MotionProps, Variants } from "framer-motion"

const EASE_OUT = [0.16, 1, 0.3, 1] as const

export const slideInBottomOnLoad: MotionProps = {
  initial: { opacity: 0, y: 80, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.5, ease: EASE_OUT },
}

export const slideInBottom: MotionProps = {
  initial: { opacity: 0, y: 60, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: EASE_OUT },
}

export const slideInBottomScale: MotionProps = {
  initial: { opacity: 0, y: 30, scale: 0.96, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: EASE_OUT },
}

export const slideInLeft: MotionProps = {
  initial: { opacity: 0, x: -70, filter: "blur(10px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: EASE_OUT },
}

export const slideInRight: MotionProps = {
  initial: { opacity: 0, x: 70, filter: "blur(10px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: EASE_OUT },
}

export const scaleIn: MotionProps = {
  initial: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
  whileInView: { opacity: 1, scale: 1, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: EASE_OUT },
}

export const staggerContainerOnLoad: MotionProps = {
  initial: "hidden",
  animate: "visible",
  variants: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  },
}

export const staggerContainer: MotionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
  variants: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: EASE_OUT } },
}

export const staggerItemScale: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: EASE_OUT } },
}
