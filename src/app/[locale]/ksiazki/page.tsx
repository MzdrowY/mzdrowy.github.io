import Link from "next/link";
import type { Metadata } from "next";
import { type Locale, t } from "@/lib/i18n";
import { books, bookLocale } from "@/lib/books";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return [{ locale: "pl" }, { locale: "en" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  return {
    title: t(l, "books.title"),
    description: t(l, "books.description"),
    alternates: {
      canonical: `/${locale}/ksiazki`,
      languages: {
        "pl-PL": "/pl/ksiazki",
        "en-US": "/en/ksiazki",
        "x-default": "/pl/ksiazki",
      },
    },
    openGraph: { title: `${t(l, "books.title")} — MzdrowY`, description: t(l, "books.og-desc") },
  };
}

const ebookDescs: Record<string, string> = {
  "internet-domeny-dns": "Internet, domeny i DNS — podręcznik edukacyjny od podstaw",
  "pod-skora-systemu": "Przewodnik po terminalu dla Windows i macOS",
  "sztuczna-inteligencja": "AI wyjaśniona przystępnie, bez tajemnic",
  "moja-pierwsza-strona": "WordPress, no-code, AI-buildery, HTML/CSS i Shopify — jak postawić stronę w 2026",
  "mam-strone-i-co-dalej": "Praktyczny poradnik dla właścicieli stron internetowych",
};

export default async function BooksPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const isPl = l === "pl";

  return (
    <>
      <section className="hero" style={{ borderTop: "none" }}>
        <p className="eyebrow mono">{isPl ? "ls ./ebooki" : "ls ./ebooks"}</p>
        <h2 className="section-title">
          {t(l, "books.title")} <span className="free-tag">{isPl ? "darmowe" : "free"}</span>
        </h2>
        <div className="listing">
          {books.map((b) => {
            const book = bookLocale(b, l);
            return (
              <Link key={b.slug} href={`/${locale}/ksiazki/${b.slug}`} className="row">
                <span className="icon">.pdf</span>
                <span className="info">
                  <span className="fname">{b.slug}.pdf</span>
                  <span className="fdesc">{isPl ? (ebookDescs[b.slug] || book.subtitle) : book.subtitle}</span>
                </span>
                <span className="go">{isPl ? "Otwórz →" : "Open →"}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
