import { AboutUs } from "@/components/aboutUs/AboutUs";
import { Contact } from "@/components/contact/Contact";
import { Galery } from "@/components/galery/Galery";
import { Hero } from "@/components/hero/Hero";
import { OurBrand } from "@/components/ourBrand/OurBrand";
import { OurServices } from "@/components/ourServices/OurServices";
import { Process } from "@/components/process/Process";

export default function homePage() {
  return (
    <>
      <section id="inicio" aria-labelledby="inicio-title">
        <Hero />
      </section>

      <section id="nosotros" aria-labelledby="nosotros-title" className="py-15 lg:py-25 bg-[#EDE9DD]">
        <AboutUs />
      </section>

      <section id="servicios" aria-labelledby="servicios-title" className="py-15 lg:py-20 bg-[#091D36]">
        <OurServices />
      </section>

      <section id="proceso" aria-labelledby="proceso-title" className="py-15 lg:py-20 bg-[#EDE9DD]">
        <Process />
      </section>

      <section id="marca" aria-labelledby="marca-title" className="relative isolate py-15 lg:py-20 bg-[#BDAD9E]">
        <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(135deg,rgba(9,29,54,0.08)_0px,rgba(9,29,54,0.08)_1.5px,transparent_1.5px,transparent_9px)]" />
        <OurBrand />
      </section>

      <section id="galeria" aria-labelledby="galeria-title" className="py-15 lg:py-20 bg-[#03101f]">
        <Galery />
      </section>

      <section id="contacto" aria-labelledby="contacto-title" className="py-15 lg:py-20 bg-[#091D36]">
        <Contact />
      </section>
    </>
  );
}
