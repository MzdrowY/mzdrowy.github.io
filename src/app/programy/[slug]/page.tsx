import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { programs } from "@/lib/programs";
import { ImageViewer } from "@/components/image-viewer";
import { TrackedDownload } from "@/components/tracked-download";

const screenshots: Record<string, string> = {
  "anti-spaghetti": "/programs/anti-spaghetti-screenshot.png",
  "monogram-studio": "/programs/monogram-studio-screenshot.png",
};

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return {};
  const url = `https://mzdrowy.github.io/programy/${slug}`;
  return {
    title: program.title,
    description: program.description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `${program.title} — MzdrowY`,
      description: program.description,
    },
  };
}

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const sizeMB = (program.installerSize / (1024 * 1024)).toFixed(1);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <Link href="/programy" className="mb-8 inline-block text-sm text-zinc-400 hover:text-zinc-300 transition-colors">
        &larr; Wróć do programów
      </Link>

      <h1 className="mb-1 text-3xl font-bold tracking-tight">{program.title}</h1>
      <p className="mb-2 text-sm text-zinc-500">{program.version} &middot; {program.tech} &middot; {program.license}</p>
      <p className="mb-8 text-sm leading-relaxed text-zinc-300">{program.description}</p>

      {screenshots[program.slug] && (
        <ImageViewer src={screenshots[program.slug]} alt={`Zrzut ekranu: ${program.title}`} />
      )}

      <div className="mb-8 flex flex-col gap-3 sm:flex-row">
        <TrackedDownload href={program.installer} label="Pobierz instalator" slug={program.slug} />
        <span className="inline-flex items-center text-sm text-zinc-500">{sizeMB} MB &middot; .exe</span>
        {program.repo && (
          <a
            href={program.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-600 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800"
          >
            GitHub &rarr;
          </a>
        )}
      </div>

      <h2 className="mb-3 text-lg font-semibold">Funkcje</h2>
      <ul className="space-y-1.5">
        {program.features.map((f) => (
          <li key={f} className="text-sm text-zinc-400">&bull; {f}</li>
        ))}
      </ul>
    </div>
  );
}
