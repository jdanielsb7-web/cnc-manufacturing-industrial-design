import Image from "next/image"

export const Logo = () => {
    return (
        <Image
            src="/logo.webp"
            alt="Logo CNC Manufacturing Industrial Design"
            width={877}
            height={663}
            className="w-full h-auto"
            priority
        />
    )
}
