import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/api/og/*"],
    },
    sitemap: "https://tailwindcss-carousels.dogfrogfog.ch/sitemap.xml",
  };
}
