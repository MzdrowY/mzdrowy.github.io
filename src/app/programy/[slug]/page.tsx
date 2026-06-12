import { notFound } from "next/navigation";
import Link from "next/link";
import { programs } from "@/lib/programs";

const screenshots: Record<string, string> = {
  "anti-spaghetti": "/programs/anti-spaghetti-screenshot.png",
};

export const dynamic = "force-static";

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
        <div className="mb-8 rounded-xl border border-zinc-700 bg-zinc-900 p-2 shadow-lg shadow-black/30">
          <img
            src={screenshots[program.slug]}
            alt={`Zrzut ekranu: ${program.title}`}
            className="block w-full rounded-lg"
          />
        </div>
      )}

      <div className="mb-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={program.installer}
          download
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500"
        >
          Pobierz instalator
        </a>
        <span className="inline-flex items-center text-sm text-zinc-500">{sizeMB} MB &middot; .exe</span>
        <a
          href={program.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-600 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800"
        >
          GitHub &rarr;
        </a>
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
