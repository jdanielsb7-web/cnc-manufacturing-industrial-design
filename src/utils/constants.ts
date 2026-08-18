import { HiOutlineChatBubbleLeftRight, HiOutlineDocumentText, HiOutlineTruck } from "react-icons/hi2"
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineClock, HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";

export const SITE = {
    name: "CNC Manufacturing",
    url: "https://cncmanufacturingmx.com/",
    locale: "es_MX",
    title: "CNC Manufacturing | Letras 3D, corte láser y CNC en Guadalajara",
    description:
        "Taller de fabricación digital en Guadalajara: letras 3D luminosas, corte y grabado láser, router CNC, impresión 3D, exhibidores comerciales y regalos corporativos. Cotización sin compromiso.",
    shortDescription:
        "Letras 3D luminosas, corte láser, router CNC e impresión 3D. Piezas a medida para empresas, arquitectos, diseñadores y agencias.",
    ogImage: "/og-image.jpeg",
    ogImageType: "image/jpeg",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: "Logotipo de CNC Manufacturing · Industrial Design sobre fondo azul marino, con el lema: diseño y manufactura láser y router CNC",
} as const;

export const BUSINESS = {
    legalName: "CNC Manufacturing · Industrial Design",
    email: "cncmanstudio.ventas@gmail.com",
    phone: "+523331573952",
    whatsapp: "523331573952",
    address: {
        street: "Libertad 1597, Col. Agua Blanca Sur",
        locality: "Zapopan",
        region: "Jalisco",
        country: "MX",
    },
    foundingYear: 2014,
} as const;

export const NAV_LINKS = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proceso", label: "Proceso" },
    { href: "#marca", label: "Marca" },
    { href: "#galeria", label: "Galería" },
    { href: "#contacto", label: "Contacto" },
]

export const SERVICES = [
    {
        index: "01",
        title: "Router CNC",
        description: "Vaciados, relieves y ensambles con repetibilidad exacta.",
        img: "/media/4.webp",
        alt: "Router CNC desbastando la cavidad de una charola de madera en forma de corazón",
    },
    {
        index: "02",
        title: "Letras 3D Luminosas",
        description: "Letreros volumétricos con iluminación integrada.",
        img: "/media/6.webp",
        alt: "Letras luminosas tipo marquesina con focos LED integrados, fabricadas en impresión 3D",
    },
    {
        index: "03",
        title: "Corte y Grabado Láser",
        description: "Detalle fino sobre madera, MDF, acrílico y piel.",
        img: "/media/9.webp",
        alt: "Caja de MDF con grabado láser de un logotipo rodeado de ornamento floral",
    },
    {
        index: "04",
        title: "Impresión 3D",
        description: "Prototipos y geometrías que el corte no resuelve.",
        img: "/media/44.webp",
        alt: "Impresora 3D depositando filamento azul mientras construye una torre en detalle fino",
    },
    {
        index: "05",
        title: "Regalos Corporativos",
        description: "Kits, reconocimientos y estuches con tu marca.",
        img: "/media/34.webp",
        alt: "Caja de madera quemada abierta con interior de espuma troquelada a la medida de un kit tecnológico",
    },
    {
        index: "06",
        title: "Exhibidores Comerciales",
        description: "Displays y mobiliario de punto de venta.",
        img: "/media/29.webp",
        alt: "Mueble curvo de MDF con curvado kerf montado en el taller",
    },
    {
        index: "07",
        title: "Fabricación sobre Diseño",
        description: "De tu plano o tu idea suelta a la pieza terminada.",
        img: "/media/33.webp",
        alt: "Estructura larga de mueble a medida en construcción dentro del taller",
    },
]

export const PROCESS_STEPS = [
    {
        step: "01",
        title: "Envías tu idea",
        description: "Un boceto, una foto o un plano. Con eso arrancamos.",
        icon: HiOutlineChatBubbleLeftRight,
    },
    {
        step: "02",
        title: "Recibes una propuesta",
        description: "Viabilidad, material y medidas, con cotización.",
        icon: HiOutlineDocumentText,
    },
    {
        step: "03",
        title: "Fabricamos y entregamos",
        description: "Producimos la pieza y la entregamos terminada.",
        icon: HiOutlineTruck,
    },
]

export const PROCESS_STAGES = [
    {
        stage: "Materia prima",
        img: "/media/2.webp",
        alt: "Tableros de madera teñidos de azul apilados sobre la mesa del taller",
    },
    {
        stage: "En máquina",
        img: "/media/39.webp",
        alt: "Router CNC tallando el alojamiento de una botella y una copa sobre un tablero cubierto de aserrín",
    },
    {
        stage: "Pieza terminada",
        img: "/media/41.webp",
        alt: "Estuche de madera terminado con una botella de tequila y una copa encajadas a la medida",
    },
]

export const AUDIENCE = [
    "Empresas",
    "Arquitectos",
    "Diseñadores",
    "Agencias",
    "Emprendedores",
]

export const BRAND_MEDIA = {
    main: {
        img: "/media/25.webp",
        alt: "Tabla de charcutería de madera con pan rebanado, quesos y aceite de oliva",
        w: 1024,
        h: 1536,
    },
    inset: {
        img: "/media/20.webp",
        alt: "Bol y cucharas de madera sobre un lienzo de lino en una cocina",
        w: 1024,
        h: 1536,
    },
}

export const GALERY_ITEMS = [
    { img: "/media/10.webp", alt: "Estuche circular de madera oscura con logotipo de caballo grabado y asa", tag: "Router CNC", w: 1200, h: 1600 },
    { img: "/media/1.webp", alt: "Lote de llaveros y fichas de madera grabadas dispuestos sobre una mesa negra", tag: "Producción por lote", w: 1600, h: 900 },
    { img: "/media/36.webp", alt: "Caja de madera azul marino con logotipo en relieve y marco dorado", tag: "Regalo corporativo", w: 1280, h: 1600 },
    { img: "/media/17.webp", alt: "Listones de madera con cortes de curvado kerf apilados junto a una lata de barniz", tag: "Router CNC", w: 900, h: 1600 },
    { img: "/media/43.webp", alt: "Charolas y base portavasos de madera terminadas sobre el piso del taller", tag: "Mesa y charcutería", w: 1600, h: 900 },
    { img: "/media/21.webp", alt: "Pilas de cajas de MDF grabadas con logotipo y frases distintas", tag: "Grabado láser", w: 900, h: 1600 },
    { img: "/media/30.webp", alt: "Detalle de la curva de un mueble de MDF resuelto con curvado kerf", tag: "Exhibidor", w: 1200, h: 1600 },
    { img: "/media/3.webp", alt: "Charola de madera en forma de corazón barnizada sobre el banco de trabajo", tag: "Router CNC", w: 1600, h: 900 },
    { img: "/media/35.webp", alt: "Caja de madera quemada abierta con interior de espuma troquelada", tag: "Kit corporativo", w: 1280, h: 1600 },
    { img: "/media/27.webp", alt: "Posavasos redondos de madera clara con emblema grabado sobre una mesa", tag: "Grabado láser", w: 900, h: 1600 },
    { img: "/media/7.webp", alt: "Tablas de charcutería en crudo junto a una pistola de laca sobre el banco", tag: "Acabados", w: 1600, h: 900 },
    { img: "/media/38.webp", alt: "Estuche de vino negro con placa conmemorativa de 25 aniversario y botella", tag: "Reconocimiento", w: 1280, h: 1600 },
    { img: "/media/22.webp", alt: "Mesa negra con decenas de llaveros y fichas de madera grabadas en fila", tag: "Producción por lote", w: 900, h: 1600 },
    { img: "/media/31.webp", alt: "Termo de acero negro con nombre personalizado grabado", tag: "Personalización", w: 1600, h: 1600 },
    { img: "/media/37.webp", alt: "Dos figuras articuladas de gran formato talladas en madera maciza", tag: "Pieza sobre diseño", w: 944, h: 762 },
    { img: "/media/5.webp", alt: "Charolas de madera en forma de corazón sin acabado, apiladas en el taller", tag: "En proceso", w: 900, h: 1600 },
    { img: "/media/28.webp", alt: "Tablas y bases de madera oscura terminadas y apiladas en el taller", tag: "Mesa y charcutería", w: 900, h: 1600 },
    { img: "/media/8.webp", alt: "Caja de MDF con grabado láser ornamental y espuma protectora encima", tag: "Grabado láser", w: 900, h: 1600 },
    { img: "/media/24.webp", alt: "Mesa de madera oscura con estructura metálica negra dentro del taller", tag: "Mobiliario", w: 900, h: 1600 },
    { img: "/media/40.webp", alt: "Bases de madera perforadas para portavasos apiladas en bruto", tag: "En proceso", w: 900, h: 1600 },
    { img: "/media/15.webp", alt: "Cuatro charolas de madera en forma de corazón recién maquinadas", tag: "Router CNC", w: 900, h: 1600 },
]

export const WHATSAPP_NUMBER = "523331573952";

export const CONTACT_LINKS = [
    {
        href: "https://wa.me/523331573952",
        external: true,
        icon: FaWhatsapp,
        label: "Teléfono / WhatsApp",
        value: "+52 33 3157 3952",
    },
    {
        href: "mailto:cncmanstudio.ventas@gmail.com",
        external: false,
        icon: HiOutlineMail,
        label: "Correo",
        value: "cncmanstudio.ventas@gmail.com",
    },
    {
        href: null,
        icon: HiOutlineLocationMarker,
        label: "Ubicación",
        value: "Libertad 1597, Col. Agua Blanca Sur, Zapopan, Jalisco, México",
    },
    {
        href: null,
        icon: HiOutlineClock,
        label: "Horario",
        value: "Lun a Vie · 9:00 a 18:00 hrs",
    },
];

export const CONTACT_SOCIAL = [
    {
        href: "https://www.instagram.com/cncmanufacturingmx/",
        label: "Instagram",
        icon: FaInstagram,
    },
    {
        href: "https://www.facebook.com/CNCManStudio",
        label: "Facebook",
        icon: FaFacebookF,
    },
    {
        href: "https://www.tiktok.com/@cncmanufacturing_studio",
        label: "TikTok",
        icon: FaTiktok,
    },
];
