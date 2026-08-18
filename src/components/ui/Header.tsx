"use client"

import Link from "next/link"
import { HamburgerButton } from "./HamburgerButton"
import { MobileNav } from "./MobileNav"
import { useHeader } from "@/hooks/useHeader"
import { FaWhatsapp } from "react-icons/fa6";
import { primaryButton } from "@/utils/styles/button"
import { TextLogo } from "./TextLogo"
import { NAV_LINKS } from "@/utils/constants"

export const Header = () => {
    const { menuVisible, scrolled, activeSection, hamburgerRef, actions } = useHeader()

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${scrolled || menuVisible ? "border-[#5281C6]/20" : "border-transparent"
                }`}
        >
            <div
                className={`absolute inset-0 transition-all duration-300 ${scrolled || menuVisible
                    ? "bg-[#091D36]/90 backdrop-blur-md"
                    : "bg-transparent"
                    }`}
            />

            {scrolled && (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,129,198,0.08),transparent_55%)]" />
            )}

            <div className="relative h-18 max-w-7xl px-5 mx-auto flex justify-between items-center gap-5">
                <div className="flex items-center justify-start shrink-0">
                    <div className="shrink-0 transition-transform duration-300 hover:-translate-y-0.5">
                        <TextLogo />
                    </div>
                </div>

                <div className="hidden lg:flex grow justify-center">
                    <nav aria-label="Navegación principal">
                        <ul role="list" className="flex items-center gap-7.5 xl:gap-10">
                            {NAV_LINKS.map((link) => {
                                const isActive = link.href === `#${activeSection}`

                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            aria-current={isActive ? "page" : undefined}
                                            className={`group relative font-display text-sm xl:text-base font-medium uppercase tracking-widest transition-colors duration-300 hover:text-white ${isActive ? "text-white" : "text-[#EDE9DD]"
                                                }`}
                                        >
                                            {link.label}
                                            <span
                                                className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#5281C6] transition-all duration-300 group-hover:w-full ${isActive ? "w-full" : "w-0"
                                                    }`}
                                            />
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center justify-end shrink-0">
                    <div className="hidden lg:flex">
                        <Link
                            href="#contacto"
                            className={`${primaryButton} text-xs! xl:text-sm! flex items-center gap-2.5`}
                        >
                            <FaWhatsapp className="w-3.5 h-3.5 xl:w-4.5 xl:h-4.5"/>
                            WhatsApp
                        </Link>
                    </div>

                    <div className="lg:hidden">
                        <HamburgerButton
                            ref={hamburgerRef}
                            open={menuVisible}
                            toggleMenu={actions.toggleMenu}
                        />
                    </div>
                </div>
            </div>

            <MobileNav
                menuVisible={menuVisible}
                activeSection={activeSection}
                toggleMenu={actions.toggleMenu}
            />
        </header>
    )
}