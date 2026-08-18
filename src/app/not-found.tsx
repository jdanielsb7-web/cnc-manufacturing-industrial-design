import type { Metadata } from "next";
import Link from "next/link";
import { secondaryButton } from "@/utils/styles/button";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description:
    "La página que buscas no existe o cambió de dirección. Vuelve al inicio de CNC Manufacturing o cotiza tu proyecto.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundPage() {
  return (
    <section aria-labelledby="error-title" className="relative isolate min-h-[clamp(640px,100dvh,800px)] flex items-center overflow-hidden bg-[#091D36]">

      {/* trama diagonal industrial */}
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(135deg,rgba(82,129,198,0.12)_0px,rgba(82,129,198,0.12)_1.5px,transparent_1.5px,transparent_9px)] mix-blend-screen" />

      <div className="relative max-w-7xl mx-auto px-5 py-26 flex flex-col gap-5 items-center text-center w-full">

        <p className="font-display font-bold leading-none text-[clamp(5rem,18vw,9rem)] tracking-tight text-[#5281C6]">
          404
        </p>

        <h1 id="error-title" className="font-display font-bold uppercase text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-white">
          Página no encontrada
        </h1>

        <p className="max-w-md text-base lg:text-lg text-white/75 leading-relaxed">
          La dirección que buscas no existe o cambió de lugar.
        </p>

        <Link href="/" className={`${secondaryButton} inline-flex items-center justify-center mt-2.5`}>
          Volver al Inicio
        </Link>

      </div>

    </section>
  );
}
