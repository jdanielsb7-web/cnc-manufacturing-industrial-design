import Link from "next/link"
import { NAV_LINKS, CONTACT_LINKS, CONTACT_SOCIAL } from "@/utils/constants"
import { Logo } from "./Logo"
import { thirdButton } from "@/utils/styles/button"

export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="relative isolate overflow-hidden bg-[#03101f]">
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#5281C6]/60 to-transparent" />
       
            <div className="relative max-w-7xl mx-auto px-5">
                <div className="flex flex-col lg:flex-row gap-10 py-10">
                    <div className="flex flex-col gap-5 items-center lg:items-start w-full lg:w-[40%]">
                        <div className="w-20 lg:w-22 shrink-0 transition-transform duration-300 hover:-translate-y-0.5">
                            <Link href="/" className="no-underline" aria-label="Ir al inicio">
                                <Logo />
                            </Link>
                        </div>

                        <p className="max-w-xs text-sm lg:text-base leading-relaxed text-[#EDE9DD]/75 text-center lg:text-left">
                            Fabricación digital y diseño industrial. Transformamos ideas
                            en productos de alta calidad.
                        </p>

                        <div className="flex items-center gap-5">
                            {CONTACT_SOCIAL.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className={`${thirdButton} p-2.5!`}
                                >
                                    <social.icon className="w-3.5 h-3.5 xl:w-4.5 xl:h-4.5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-10 w-full lg:w-[60%]">
                        <nav aria-label="Navegación del pie de página" className="flex flex-col gap-5 items-center lg:items-start w-full">
                            <FooterHeading>Navegación</FooterHeading>
                            <ul role="list" className="flex flex-col gap-2.5 items-center lg:items-start">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="group relative inline-flex text-sm lg:text-base font-medium tracking-wide text-[#EDE9DD]/75 transition-colors hover:text-white"
                                        >
                                            {link.label}
                                            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#5281C6] transition-all duration-300 group-hover:w-full" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="flex flex-col gap-5 items-center lg:items-start w-full">
                            <FooterHeading>Contacto</FooterHeading>
                            <ul role="list" className="flex flex-col gap-2.5 items-center lg:items-start w-full max-w-xs lg:max-w-none">
                                {CONTACT_LINKS.map((contact) => {
                                    const content = (
                                        <div className="flex items-center gap-5">
                                            <contact.icon className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 shrink-0 text-[#5281C6]" />
                                            <span className="flex flex-col">
                                                <span className="font-mono text-[8px] lg:text-[10px] uppercase tracking-[0.12em] text-[#EDE9DD]/75">
                                                    {contact.label}
                                                </span>
                                                <span className="text-sm lg:text-base text-[#EDE9DD]/75 transition-colors group-hover:text-white">
                                                    {contact.value}
                                                </span>
                                            </span>
                                        </div>
                                    )

                                    return (
                                        <li key={contact.label}>
                                            {contact.href ? (
                                                <Link
                                                    href={contact.href}
                                                    target={contact.external ? "_blank" : undefined}
                                                    rel={contact.external ? "noopener noreferrer" : undefined}
                                                    className="group flex transition-transform duration-300 hover:translate-x-1"
                                                >
                                                    {content}
                                                </Link>
                                            ) : (
                                                <span className="group">{content}</span>
                                            )}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 border-t border-[#EDE9DD]/25 py-5 items-center sm:flex-row sm:justify-between">
                    <p className="font-mono text-[10px] lg:text-xs tracking-[0.3em] uppercase text-[#EDE9DD]/75 text-center sm:text-left">
                        © {year} CNC Manufacturing · Industrial Design
                    </p>
                    <p className="font-mono text-[10px] lg:text-xs tracking-[0.3em] uppercase text-[#EDE9DD]/75">
                        EST. 2014 — Hecho en México
                    </p>
                </div>
            </div>
        </footer>
    )
}

const FooterHeading = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center gap-5 font-mono text-xs lg:text-sm font-semibold uppercase tracking-[0.3em] text-[#5281C6]">
        <span className="h-px w-6 bg-[#5281C6]" />
        {children}
    </span>
)
