"use client"

import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa6"
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { primaryButton } from "@/utils/styles/button"
import { NAV_LINKS } from "@/utils/constants";

type MobileNavProps = {
    menuVisible: boolean
    activeSection: string
    toggleMenu: () => void
}

export const MobileNav = ({ menuVisible, activeSection, toggleMenu }: MobileNavProps) => {
    return (
        <div
            inert={!menuVisible}
            aria-hidden={!menuVisible}
            className={`lg:hidden fixed inset-x-0 top-18 bottom-0 z-40 transition-opacity duration-300 ${menuVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <div className="absolute inset-0 bg-[#071226]/90 backdrop-blur-md" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,129,198,0.10),transparent_55%)]" />

            <div
                className={`absolute inset-0 origin-top overflow-hidden flex flex-col py-5 px-5 transition-transform duration-300 ease-out ${menuVisible ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <span className="text-xs lg:text-sm font-mono font-medium tracking-[0.3em] uppercase text-white">
                    [ Menú ]
                </span>


                <nav aria-label="Menú móvil" className="mt-5">
                    <ul role="list" className="flex flex-col">
                        {NAV_LINKS.map((link, i) => {
                            const isActive = link.href === `#${activeSection}`

                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={toggleMenu}
                                        aria-current={isActive ? "page" : undefined}
                                        style={{ transitionDelay: menuVisible ? `${120 + i * 60}ms` : "0ms" }}
                                        className={`group flex items-baseline justify-between border-b py-5 transition-all duration-500 ${menuVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                                            } ${isActive ? "border-[#5281C6]/50" : "border-[#EDE9DD]/25"}`}
                                    >
                                        <span className="flex items-baseline gap-5">
                                            <span className="text-xs font-mono font-medium tracking-[0.3em] uppercase text-[#5281C6]">
                                                0{i + 1}
                                            </span>
                                            <span className={`font-display text-lg font-medium uppercase tracking-widest transition-colors group-hover:text-white ${isActive ? "text-white" : "text-[#EDE9DD]"
                                                }`}>
                                                {link.label}
                                            </span>
                                        </span>
                                        <HiOutlineArrowLongRight className={`w-3.5 h-3.5 text-[#5281C6] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                                            }`} />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <div className="mt-auto flex flex-col gap-5 pt-5 border-t border-[#EDE9DD]/25">
                    <Link
                        href="#contacto"
                        onClick={toggleMenu}
                        className={`${primaryButton} flex w-full items-center justify-center gap-2.5`}
                    >
                        <FaWhatsapp />
                        WhatsApp
                    </Link>

                    <div className="flex flex-col smallMedium:flex-row gap-5 items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-[#BDAD9E]/75">
                        <span>Fabricación digital · Madera</span>
                        <span className="text-[#5281C6] font-bold">CNC</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
