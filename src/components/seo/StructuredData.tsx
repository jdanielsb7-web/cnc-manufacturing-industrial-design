import { BUSINESS, CONTACT_SOCIAL, SERVICES, SITE } from "@/utils/constants";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#taller`,
  name: SITE.name,
  legalName: BUSINESS.legalName,
  description: SITE.description,
  url: SITE.url,
  image: `${SITE.url}${SITE.ogImage}`,
  logo: `${SITE.url}/logo.webp`,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  foundingDate: String(BUSINESS.foundingYear),
  currenciesAccepted: "MXN",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.locality,
    addressRegion: BUSINESS.address.region,
    addressCountry: BUSINESS.address.country,
  },
  areaServed: [
    { "@type": "City", name: "Guadalajara" },
    { "@type": "City", name: "Zapopan" },
    { "@type": "City", name: "Tlaquepaque" },
    { "@type": "City", name: "Tonalá" },
  ],
  sameAs: CONTACT_SOCIAL.map((social) => social.href),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de fabricación digital",
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  inLanguage: "es-MX",
  publisher: { "@id": `${SITE.url}/#taller` },
};

export const StructuredData = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify([localBusiness, website]),
    }}
  />
);
