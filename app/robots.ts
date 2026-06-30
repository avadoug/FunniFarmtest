import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://thefunnifarm.example";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api", "/launch-readiness"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
