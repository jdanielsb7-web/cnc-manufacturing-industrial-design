"use client"

import { thirdButton } from "@/utils/styles/button";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const SLIDES = [
    { src: "/media/10.webp", alt: "Estuche circular de madera oscura con logotipo de caballo grabado y asa", code: "P-01", w: 1200, h: 1600 },
    { src: "/media/36.webp", alt: "Caja de madera azul marino con logotipo en relieve y marco dorado", code: "P-02", w: 1280, h: 1600 },
    { src: "/media/38.webp", alt: "Estuche de vino negro con placa conmemorativa de 25 aniversario", code: "P-03", w: 1280, h: 1600 },
    { src: "/media/35.webp", alt: "Caja de madera quemada abierta con interior de espuma troquelada", code: "P-04", w: 1280, h: 1600 },
    { src: "/media/30.webp", alt: "Detalle de la curva de un mueble de MDF resuelto con curvado kerf", code: "P-05", w: 1200, h: 1600 },
    { src: "/media/21.webp", alt: "Pilas de cajas de MDF grabadas con logotipo y frases distintas", code: "P-06", w: 900, h: 1600 },
]

export const HeroCarousel = () => {
    const trackRef = useRef<HTMLDivElement>(null)
    const drag = useRef({ active: false, startX: 0, startScroll: 0 })

    const [active, setActive] = useState(0)
    const [dragging, setDragging] = useState(false)
    const [paused, setPaused] = useState(false)

    const nearestIndex = useCallback(() => {
        const track = trackRef.current
        if (!track) return 0

        const cards = Array.from(track.children) as HTMLElement[]
        let nearest = 0
        let min = Infinity

        cards.forEach((card, i) => {
            const distance = Math.abs(card.offsetLeft - track.scrollLeft)
            if (distance < min) {
                min = distance
                nearest = i
            }
        })

        return nearest
    }, [])

    const goTo = useCallback((index: number) => {
        const track = trackRef.current
        const card = track?.children[index] as HTMLElement | undefined
        if (!track || !card) return

        track.scrollTo({ left: card.offsetLeft, behavior: "smooth" })
    }, [])

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        const reset = () => {
            track.scrollTo({ left: 0, behavior: "instant" })
            setActive(0)
        }

        reset()
        const frame = requestAnimationFrame(reset)

        return () => cancelAnimationFrame(frame)
    }, [])

    useEffect(() => {
        if (paused || dragging) return

        const interval = setInterval(() => {
            goTo((active + 1) % SLIDES.length)
        }, 5200)

        return () => clearInterval(interval)
    }, [active, paused, dragging, goTo])

    const onPointerDown = (e: React.PointerEvent) => {
        const track = trackRef.current
        if (!track || e.pointerType !== "mouse") return

        track.setPointerCapture(e.pointerId)
        drag.current = { active: true, startX: e.clientX, startScroll: track.scrollLeft }
        setDragging(true)
    }

    const onPointerMove = (e: React.PointerEvent) => {
        const track = trackRef.current
        if (!track || !drag.current.active) return

        track.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX)
    }

    const onPointerUp = (e: React.PointerEvent) => {
        const track = trackRef.current
        if (!track || !drag.current.active) return

        track.releasePointerCapture(e.pointerId)
        drag.current.active = false
        setDragging(false)
        goTo(nearestIndex())
    }

    return (
        <div className="w-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div
                ref={trackRef}
                onScroll={() => setActive(nearestIndex())}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                className={`relative flex gap-5 overflow-x-auto overscroll-x-contain scrollbar-none [&::-webkit-scrollbar]:hidden ${dragging ? "snap-none cursor-grabbing select-none" : "snap-x snap-mandatory cursor-grab"
                    }`}
            >
                {SLIDES.map((slide, i) => (
                    <figure
                        key={slide.src}
                        aria-hidden={i !== active}
                        className={`relative shrink-0 snap-start w-[72%] sm:w-[58%] lg:w-[70%] aspect-4/5 overflow-hidden transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-55"
                            }`}
                    >
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            width={slide.w}
                            height={slide.h}
                            priority={i === 0}
                            draggable={false}
                            sizes="(min-width: 1024px) 420px, 70vw"
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#071226]/80 to-transparent" />

                        <figcaption className="absolute bottom-5 right-5 text-xs lg:text-sm font-mono font-medium tracking-[0.3em] uppercase text-[#5281C6]">
                            {slide.code}
                        </figcaption>
                    </figure>
                ))}
            </div>

            <div className="flex items-center justify-end gap-5 pt-5">
                <div className="flex items-center gap-2.5">
                    <button
                        onClick={() => goTo((active - 1 + SLIDES.length) % SLIDES.length)}
                        aria-label="Pieza anterior"
                        className={`${thirdButton} p-2!`}
                    >
                        <HiChevronLeft className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5" />
                    </button>
                    <button
                        onClick={() => goTo((active + 1) % SLIDES.length)}
                        aria-label="Pieza siguiente"
                        className={`${thirdButton} p-2!`}
                    >
                        <HiChevronRight className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5" />
                    </button>
                </div>

                <div className="flex gap-2.5">
                    {SLIDES.map((slide, i) => (
                        <button
                            key={slide.src}
                            onClick={() => goTo(i)}
                            aria-label={`Ir a la pieza ${i + 1}`}
                            aria-current={i === active}
                            className={`h-0.75 lg:h-1 cursor-pointer transition-all ${i === active ? "w-12 bg-[#5281C6]" : "w-8 bg-[#EDE9DD]/25"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
