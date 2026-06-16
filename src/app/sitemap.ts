import type { MetadataRoute } from "next";
import { books } from "@/lib/books";
import { programs } from "@/lib/programs";

export const dynamic = "force-static";

const locales = ["pl", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mzdrowy.github.io";
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({ url: `${base}/${locale}`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 });
    entries.push({ url: `${base}/${locale}/ksiazki`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 });
    for (const b of books) {
      entries.push({ url: `${base}/${locale}/ksiazki/${b.slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 });
    }
    entries.push({ url: `${base}/${locale}/programy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 });
    for (const p of programs) {
      entries.push({ url: `${base}/${locale}/programy/${p.slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 });
    }
    entries.push({ url: `${base}/${locale}/sugestie`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 });
  }

  return entries;
}
