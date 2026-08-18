import Link from "next/link"

export const TextLogo = () => {
    return (
        <Link href="/" className="no-underline flex items-center gap-3" aria-label="Ir al inicio">
            <span className="leading-4">
                <span className="block font-mono font-normal text-[9px] xl:text-[10px] tracking-[0.28em] text-[#EDE9DD]">
                    CNC
                </span>
                <span className="block font-display font-bold uppercase text-[15px] xl:text-[16px] leading-none tracking-[0.04em] text-[#EDE9DD]">
                    Manufacturing
                </span>
                <span className="block font-mono text-[7px] xl:text-[8px] tracking-[0.22em] uppercase text-[#5281C6]">
                    Industrial Design
                </span>
            </span>
        </Link>
    )
}
