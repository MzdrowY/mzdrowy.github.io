import Link from "next/link";
import type { Metadata } from "next";
import { type Locale, t } from "@/lib/i18n";
import { programs, programLocale } from "@/lib/programs";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return [{ locale: "pl" }, { locale: "en" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  return {
    title: t(l, "programs.title"),
    description: t(l, "programs.description"),
    alternates: {
      canonical: `/${locale}/programy`,
      languages: {
        "pl-PL": "/pl/programy",
        "en-US": "/en/programy",
      },
    },
    openGraph: { title: `${t(l, "programs.title")} — MzdrowY`, description: t(l, "programs.og-desc") },
  };
}

export default async function ProgramsPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">{t(l, "programs.title")}</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {programs.map((p) => {
          const prog = programLocale(p, l);
          const sizeMB = (p.installerSize / (1024 * 1024)).toFixed(1);
          return (
            <Link key={p.slug} href={`/${locale}/programy/${p.slug}`} className="rounded-xl border border-zinc-700 bg-zinc-900 p-6 transition-shadow hover:shadow-md">
              <h2 className="mb-1 font-semibold">{prog.title}</h2>
              <p className="mb-1 text-xs text-zinc-500">{p.version} &middot; {sizeMB} MB &middot; {p.platform}</p>
              <p className="text-sm text-zinc-400">{prog.subtitle}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
