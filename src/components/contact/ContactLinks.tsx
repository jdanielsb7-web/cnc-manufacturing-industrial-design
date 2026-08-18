import { CONTACT_LINKS, CONTACT_SOCIAL } from "@/utils/constants";
import { thirdButton } from "@/utils/styles/button";
import Link from "next/link";

export const ContactLinks = () => {
    return (
        <>
            <div className="grid">
                {CONTACT_LINKS.map((item) =>
                    item.href ? (
                        <a
                            key={item.label}
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            className="flex items-center gap-5 py-5 border-t border-[#5281C6]/50 text-[#EDE9DD] transition-all duration-200 hover:pl-2 hover:text-white"
                        >
                            <span className="flex-none text-[#5281C6]">
                                <item.icon className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5" />
                            </span>

                            <span>
                                <span className="block font-mono text-[10px] lg:text-xs tracking-[0.12em] uppercase text-[#BDAD9E]">
                                    {item.label}
                                </span>

                                <span className="text-xs lg:text-sm">
                                    {item.value}
                                </span>
                            </span>
                        </a>
                    ) : (
                        <div
                            key={item.label}
                            className="flex items-center gap-5 py-5 border-t border-[#5281C6]/50 text-[#EDE9DD]"
                        >
                            <span className="flex-none text-[#5281C6]">
                                <item.icon className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5" />
                            </span>

                            <span>
                                <span className="block font-mono text-[10px] lg:text-xs tracking-[0.12em] uppercase text-[#BDAD9E]">
                                    {item.label}
                                </span>

                                <span className="text-xs lg:text-sm">
                                    {item.value}
                                </span>
                            </span>
                        </div>
                    )
                )}
            </div>

            <div className="flex gap-5">
                {CONTACT_SOCIAL.map((social) => (
                    <Link
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${thirdButton} p-2.5!`}
                    >
                         <social.icon className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5" />
                    </Link>
                ))}
            </div>
        </>
    );
};