import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mzdrowy.github.io";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/ksiazki`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/programy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
