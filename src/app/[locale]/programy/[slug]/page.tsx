import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { type Locale, t } from "@/lib/i18n";
import { programs, programLocale } from "@/lib/programs";
import { ImageViewer } from "@/components/image-viewer";
import { TrackedDownload } from "@/components/tracked-download";

const screenshots: Record<string, string> = {
  "anti-spaghetti": "/programs/anti-spaghetti-screenshot.png",
  "monogram-studio": "/programs/monogram-studio-screenshot.png",
  "przelew-pdf": "/programs/przelew-pdf-screenshot.png",
};

export const dynamic = "force-static";

export function generateStaticParams() {
  return programs.flatMap((p) => [{ locale: "pl", slug: p.slug }, { locale: "en", slug: p.slug }]);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const l = locale as Locale;
  const prog = programLocale(programs.find((p) => p.slug === slug)!, l);
  if (!prog) return {};
  const url = `/${locale}/programy/${slug}`;
  const image = screenshots[slug];
  const ogImage = image ? { url: image, width: 1200, height: 630, alt: prog.title } : { url: "/og-image.png", width: 1200, height: 630, alt: prog.title };
  return {
    title: prog.title,
    description: prog.description,
    alternates: {
      canonical: url,
      languages: {
        "pl-PL": `/pl/programy/${slug}`,
        "en-US": `/en/programy/${slug}`,
        "x-default": `/pl/programy/${slug}`,
      },
    },
    openGraph: { url, title: `${prog.title} — MzdrowY`, description: prog.description, images: [ogImage] },
    twitter: { card: "summary_large_image", title: `${prog.title} — MzdrowY`, description: prog.description, images: [ogImage] },
  };
}

export default async function ProgramPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const l = locale as Locale;
  const raw = programs.find((p) => p.slug === slug);
  if (!raw) notFound();
  const prog = programLocale(raw, l);
  const sizeMB = (raw.installerSize / (1024 * 1024)).toFixed(1);
  const screenshot = screenshots[slug];
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: prog.title,
    applicationCategory: "BusinessApplication",
    operatingSystem: raw.platform,
    softwareVersion: raw.version,
    description: prog.description,
    url: `https://mzdrowy.github.io/${locale}/programy/${slug}`,
    image: screenshot ? `https://mzdrowy.github.io${screenshot}` : "https://mzdrowy.github.io/og-image.png",
    offers: { "@type": "Offer", price: "0", priceCurrency: "PLN", availability: "https://schema.org/InStock" },
  };

  return (
    <section className="hero" style={{ borderTop: "none" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <Link href={`/${locale}/programy`} className="mono text-sm text-[var(--text-dim)] hover:text-[var(--amber)] transition-colors">
        &larr; {t(l, "programs.back")}
      </Link>
      <h1 className="font-['Fraunces',serif] font-medium text-[clamp(28px,4vw,38px)] leading-[1.15] my-[24px_8px] tracking-[-.01em]">
        {prog.title}
      </h1>
      <p className="mono text-sm text-[var(--text-dim)] mb-6">{raw.version} &middot; {raw.tech} &middot; {raw.platform} &middot; {raw.license}</p>
      <p className="text-[var(--text-dim)] text-[15px] leading-relaxed mb-8" style={{ maxWidth: "64ch" }}>{prog.description}</p>
      {screenshots[raw.slug] && <ImageViewer src={screenshots[raw.slug]} alt={`Screenshot: ${prog.title}`} />}
      <div className="flex flex-col gap-3 sm:flex-row items-start mb-8">
        <TrackedDownload href={raw.installer} label={t(l, "programs.download-win")} slug={raw.slug} />
        <span className="inline-flex items-center mono text-sm text-[var(--text-dim)]">{sizeMB} MB &middot; .exe</span>
        {raw.repo && (
          <a href={raw.repo} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-[var(--teal)] border border-[var(--border)] rounded-lg hover:bg-[var(--surface-2)] transition-colors">
            GitHub &rarr;
          </a>
        )}
      </div>
      <h2 className="font-['JetBrains_Mono',monospace] text-sm text-[var(--teal)] mb-4">$ {t(l, "programs.features").toLowerCase()}</h2>
      <ul className="space-y-2">
        {raw.features.map((f) => (
          <li key={f} className="text-sm text-[var(--text-dim)]" style={{ paddingLeft: "20px" }}>&bull; {f}</li>
        ))}
      </ul>
    </section>
  );
}
