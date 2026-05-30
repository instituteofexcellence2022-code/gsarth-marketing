interface MetadataProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords = "marketing agency Delhi, branding agency, technical SEO, performance marketing India, hoards advertising Delhi, billboard marketing",
  ogImage = "https://gsarth.com/og-image.jpg",
  noIndex = false,
}: MetadataProps) {
  const fullTitle = `${title} | GSARTH`;
  
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      // Open Graph
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "GSARTH Marketing & Branding" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@gsarth_agency" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      // Robots
      { name: "robots", content: noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    ],
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GSARTH Marketing & Branding",
  "url": "https://gsarth.com",
  "logo": "https://gsarth.com/logo.png",
  "sameAs": [
    "https://twitter.com/gsarth_agency",
    "https://instagram.com/gsarth_official",
    "https://linkedin.com/company/gsarth"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-93110-15100",
    "contactType": "customer service"
  }
};
