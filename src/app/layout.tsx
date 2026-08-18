import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { Inter, Oswald, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Metadata, Viewport } from "next";
import { SITE } from "@/utils/constants";
import { StructuredData } from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Fabricación digital",
  keywords: [
    "letras 3D luminosas",
    "letreros luminosos Guadalajara",
    "corte láser Guadalajara",
    "grabado láser Guadalajara",
    "router CNC Guadalajara",
    "impresión 3D Guadalajara",
    "fabricación digital",
    "diseño industrial",
    "exhibidores comerciales",
    "regalos corporativos personalizados",
    "cajas de madera personalizadas",
    "reconocimientos personalizados",
    "corte CNC madera",
    "taller CNC Jalisco",
    "CNC Manufacturing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: "/",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.shortDescription,
    images: [
      {
        url: SITE.ogImage,
        width: SITE.ogImageWidth,
        height: SITE.ogImageHeight,
        alt: SITE.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.shortDescription,
    images: [{ url: SITE.ogImage, alt: SITE.ogImageAlt }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#091D36",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-MX"
      className={`${inter.variable} ${oswald.variable} ${ibmPlexMono.variable} text-[#091D36]`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}