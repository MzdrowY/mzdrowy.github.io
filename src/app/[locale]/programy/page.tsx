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
  const isPl = l === "pl";

  return (
    <>
      <section className="hero" style={{ borderTop: "none" }}>
        <p className="eyebrow mono">{isPl ? "ls ./programy" : "ls ./software"}</p>
        <h2 className="section-title">
          {t(l, "programs.title")} <span className="free-tag">{isPl ? "darmowe" : "free"}</span>
        </h2>
        <div className="listing">
          {programs.map((p) => {
            const prog = programLocale(p, l);
            return (
              <Link key={p.slug} href={`/${locale}/programy/${p.slug}`} className="row">
                <span className="icon">.exe</span>
                <span className="info">
                  <span className="fname">{p.slug}.exe</span>
                  <span className="fdesc">{prog.subtitle}</span>
                </span>
                <span className="go">{isPl ? "Szczegóły →" : "Details →"}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
