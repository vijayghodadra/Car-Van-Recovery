import { businessConfig } from "./business";

export const defaultSEO = {
  titleTemplate: `%s | ${businessConfig.name}`,
  defaultTitle: `${businessConfig.name} | 24/7 Car & Van Recovery | Emergency Towing Near Me`,
  description: `Fast, professional 24/7 emergency vehicle recovery across Cambridge, the M11, Stansted, and surrounding areas. Flatbed car towing & heavy van recovery. Call ${businessConfig.phone} now.`,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://carvanrecovery.co.uk", // Placeholder
    siteName: businessConfig.name,
    images: [
      {
        url: "/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
        alt: `${businessConfig.name} - 24/7 Vehicle Recovery`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@carvanrecovery", // Placeholder
    creator: "@carvanrecovery", // Placeholder
  },
};

export const generateLocalSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessConfig.name,
    image: "https://carvanrecovery.co.uk/logo.png", // Placeholder
    "@id": "https://carvanrecovery.co.uk",
    url: "https://carvanrecovery.co.uk",
    telephone: businessConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "The Nurseries, A10",
      addressLocality: "Cambridge",
      addressRegion: "England",
      postalCode: "CB25 9NN",
      addressCountry: "UK"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.2053, // Approximate Cambridge lat
      longitude: 0.1218  // Approximate Cambridge lng
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "00:00",
      closes: "23:59"
    }
  };
};

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
};
