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
        "x-default": "/pl/programy",
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
      <h1 className="mb-8 text-4xl font-bold tracking-tight gradient-text">{t(l, "programs.title")}</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {programs.map((p) => {
          const prog = programLocale(p, l);
          const sizeMB = (p.installerSize / (1024 * 1024)).toFixed(1);
          return (
            <Link key={p.slug} href={`/${locale}/programy/${p.slug}`} className="glow-card rounded-xl p-6 flex flex-col">
              <h2 className="mb-1 font-semibold text-zinc-100">{prog.title}</h2>
              <p className="mb-1 text-xs text-zinc-500">{p.version} &middot; {sizeMB} MB &middot; {p.platform}</p>
              <p className="mb-3 flex-1 text-sm text-zinc-400">{prog.subtitle}</p>
              <span className="text-sm font-medium text-neon-cyan">{t(l, "home.check-program")}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
