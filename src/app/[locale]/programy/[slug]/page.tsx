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
  const url = `https://mzdrowy.github.io/${locale}/programy/${slug}`;
  return {
    title: prog.title,
    description: prog.description,
    alternates: { canonical: url },
    openGraph: { url, title: `${prog.title} — MzdrowY`, description: prog.description },
  };
}

export default async function ProgramPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const l = locale as Locale;
  const raw = programs.find((p) => p.slug === slug);
  if (!raw) notFound();
  const prog = programLocale(raw, l);
  const sizeMB = (raw.installerSize / (1024 * 1024)).toFixed(1);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <Link href={`/${locale}/programy`} className="mb-8 inline-block text-sm text-zinc-400 hover:text-zinc-300 transition-colors">&larr; {t(l, "programs.back")}</Link>
      <h1 className="mb-1 text-3xl font-bold tracking-tight">{prog.title}</h1>
      <p className="mb-2 text-sm text-zinc-500">{raw.version} &middot; {raw.tech} &middot; {raw.platform} &middot; {raw.license}</p>
      <p className="mb-8 text-sm leading-relaxed text-zinc-300">{prog.description}</p>
      {screenshots[raw.slug] && <ImageViewer src={screenshots[raw.slug]} alt={`Screenshot: ${prog.title}`} />}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row">
        <TrackedDownload href={raw.installer} label={t(l, "programs.download-win")} slug={raw.slug} />
        <span className="inline-flex items-center text-sm text-zinc-500">{sizeMB} MB &middot; .exe</span>
        {raw.repo && <a href={raw.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-600 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800">GitHub &rarr;</a>}
      </div>
      <h2 className="mb-3 text-lg font-semibold">{t(l, "programs.features")}</h2>
      <ul className="space-y-1.5">{raw.features.map((f) => <li key={f} className="text-sm text-zinc-400">&bull; {f}</li>)}</ul>
    </div>
  );
}
