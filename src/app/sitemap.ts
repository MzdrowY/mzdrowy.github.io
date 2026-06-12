import type { MetadataRoute } from "next";
import { programs } from "@/lib/programs";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mzdrowy.github.io";
  const slugs = ["internet-domeny-dns", "pod-skora-systemu", "sztuczna-inteligencja"];
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/ksiazki`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...slugs.map((slug) => ({
      url: `${base}/ksiazki/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/programy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    ...programs.map((p) => ({
      url: `${base}/programy/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
