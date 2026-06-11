import Link from "next/link";
import { programs } from "@/lib/programs";

export default function ProgramsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">Programy</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {programs.map((p) => {
          const sizeMB = (p.installerSize / (1024 * 1024)).toFixed(1);
          return (
            <Link
              key={p.slug}
              href={`/programy/${p.slug}`}
              className="rounded-xl border border-zinc-700 bg-zinc-900 p-6 transition-shadow hover:shadow-md"
            >
              <h2 className="mb-1 font-semibold">{p.title}</h2>
              <p className="mb-1 text-xs text-zinc-500">{p.version} &middot; {sizeMB} MB</p>
              <p className="text-sm text-zinc-400">{p.subtitle}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
