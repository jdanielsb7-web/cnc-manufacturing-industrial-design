import Image from "next/image"

export const Logo = () => {
    return (
        <Image
            src="/logo.webp"
            alt="Logo CNC Manufacturing Industrial Design"
            width={352}
            height={266}
            className="w-full h-auto"
            priority
            // El loader custom solo tiene variantes para /media; este archivo se
            // sirve tal cual, asi que se salta el loader en vez de pasar por el.
            unoptimized
        />
    )
}
