interface MetadataProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  canonical = "/",
  keywords = "marketing agency Delhi, branding agency, technical SEO, performance marketing India, hoards advertising Delhi, billboard marketing",
  ogImage = "https://gsarth.com/og-image.png",
  noIndex = false,
}: MetadataProps) {
  // Prevent double " | GSARTH" if title already includes GSARTH
  const fullTitle = title.includes("GSARTH") ? title : `${title} | GSARTH`;
  
  // Format canonical URL
  const cleanPath = canonical.startsWith("/") ? canonical : `/${canonical}`;
  const canonicalUrl = cleanPath === "/" ? "https://gsarth.com" : `https://gsarth.com${cleanPath}`;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      // Open Graph
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "GSARTH Marketing & Branding" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "GSARTH Marketing & Branding" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@gsarth_agency" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: "GSARTH Marketing & Branding" },
      // Google Indexing & Robots
      { name: "robots", content: noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
    ],
    links: [
      { rel: "canonical", href: canonicalUrl }
    ],
  };
}

export const organizationSchema = {
  "@type": "Organization",
  "@id": "https://gsarth.com/#organization",
  "name": "GSARTH Marketing & Branding",
  "alternateName": "GSARTH",
  "url": "https://gsarth.com",
  "logo": {
    "@type": "ImageObject",
    "@id": "https://gsarth.com/#logo",
    "url": "https://gsarth.com/logo.png",
    "caption": "GSARTH Marketing & Branding Logo"
  },
  "image": "https://gsarth.com/og-image.png",
  "description": "Elite marketing, advertising, and branding agency engineered for enterprise-grade growth systems. We translate vision into mathematical ROI.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dwarka, New Delhi",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110077",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://twitter.com/gsarth_agency",
    "https://instagram.com/gsarth_official",
    "https://linkedin.com/company/gsarth"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-76785-25920",
    "contactType": "customer service",
    "areaServed": ["IN", "AE", "US", "GB"],
    "availableLanguage": ["English", "Hindi"]
  }
};

export const localBusinessSchema = {
  "@type": "ProfessionalService",
  "@id": "https://gsarth.com/#localbusiness",
  "name": "GSARTH Marketing & Branding",
  "image": "https://gsarth.com/og-image.png",
  "url": "https://gsarth.com",
  "telephone": "+91-76785-25920",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dwarka, New Delhi",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110077",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.5823,
    "longitude": 77.0689
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:30",
      "closes": "19:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Delhi" },
    { "@type": "City", "name": "Gurgaon" },
    { "@type": "City", "name": "Noida" },
    { "@type": "City", "name": "Faridabad" },
    { "@type": "City", "name": "Ghaziabad" }
  ]
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": "https://gsarth.com/#website",
  "url": "https://gsarth.com",
  "name": "GSARTH Marketing & Branding",
  "publisher": {
    "@id": "https://gsarth.com/#organization"
  }
};

export const siteGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    localBusinessSchema,
    websiteSchema
  ]
};

export function generateFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.path.startsWith("http") ? item.path : `https://gsarth.com${item.path.startsWith("/") ? "" : "/"}${item.path}`
    }))
  };
}
