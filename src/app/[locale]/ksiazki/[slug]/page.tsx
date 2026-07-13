import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { type Locale, t } from "@/lib/i18n";
import { books, bookLocale } from "@/lib/books";
import { TrackedLink } from "@/components/tracked-link";

export const dynamic = "force-static";

export function generateStaticParams() {
  return books.flatMap((b) => [{ locale: "pl", slug: b.slug }, { locale: "en", slug: b.slug }]);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const l = locale as Locale;
  const book = bookLocale(books.find((b) => b.slug === slug)!, l);
  if (!book) return {};
  const url = `/${locale}/ksiazki/${slug}`;
  return {
    title: book.title,
    description: book.description,
    alternates: {
      canonical: url,
      languages: {
        "pl-PL": `/pl/ksiazki/${slug}`,
        "en-US": `/en/ksiazki/${slug}`,
        "x-default": `/pl/ksiazki/${slug}`,
      },
    },
    openGraph: { url, title: `${book.title} — ${book.subtitle}`, description: book.description, images: [{ url: "/og-image.png", width: 1200, height: 630, alt: book.title }] },
    twitter: { card: "summary_large_image", title: `${book.title} — ${book.subtitle}`, description: book.description, images: [{ url: "/og-image.png", width: 1200, height: 630, alt: book.title }] },
  };
}

export default async function EbookPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const l = locale as Locale;
  const raw = books.find((b) => b.slug === slug);
  if (!raw) notFound();
  const book = bookLocale(raw, l);
  const sizeMB = (raw.sizeBytes / (1024 * 1024)).toFixed(1);
  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: { "@type": "Person", name: "Maciej Zdrowowicz", url: "https://mzdrowy.github.io" },
    publisher: "MzdrowY",
    bookFormat: "EBook",
    numberOfPages: raw.pages,
    inLanguage: l === "en" ? "en" : "pl",
    description: book.description,
    url: `https://mzdrowy.github.io/${locale}/ksiazki/${slug}`,
    image: "https://mzdrowy.github.io/og-image.png",
    offers: { "@type": "Offer", price: "0", priceCurrency: "PLN", availability: "https://schema.org/InStock" },
  };

  return (
    <section className="hero" style={{ borderTop: "none" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }} />
      <Link href={`/${locale}/ksiazki`} className="mono text-sm text-[var(--text-dim)] hover:text-[var(--amber)] transition-colors">
        &larr; {t(l, "books.back")}
      </Link>
      <h1 className="font-['Fraunces',serif] font-medium text-[clamp(28px,4vw,38px)] leading-[1.15] my-[24px_12px] tracking-[-.01em]">
        {book.title}
      </h1>
      <p className="text-[var(--text-dim)] text-[15px] mb-2">{book.pages} {t(l, "books.pages")} &middot; {sizeMB} MB &middot; <span className="text-[var(--amber)]">{t(l, "books.free")}</span></p>
      <p className="text-[var(--text-dim)] text-[15px] leading-relaxed mb-8" style={{ maxWidth: "64ch" }}>{book.description}</p>
      <div className="flex flex-col gap-3 sm:flex-row mb-6">
        <TrackedLink href={book.file} className="inline-flex items-center justify-center px-6 py-3 text-sm font-mono text-[var(--amber)] border border-[var(--amber-dim)] rounded-lg hover:bg-[var(--surface-2)] transition-colors">
          {t(l, "books.read")}
        </TrackedLink>
        <TrackedLink href={book.file} download className="inline-flex items-center justify-center px-6 py-3 text-sm font-mono text-[var(--text)] bg-[var(--surface)] border border-[var(--border)] rounded-lg hover:bg-[var(--surface-2)] transition-colors">
          {t(l, "books.download")}
        </TrackedLink>
      </div>
      {raw.fileEn && (
        <div className="mb-6">
          <p className="text-sm text-[var(--text-dim)] mb-3">{t(l, "books.also-available")}:</p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <TrackedLink href={raw.file} download className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-[var(--text-dim)] border border-[var(--border)] rounded-lg hover:bg-[var(--surface-2)] transition-colors">
              {t(l, "books.download-pl")}
            </TrackedLink>
            <TrackedLink href={raw.fileEn} download className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-[var(--text-dim)] border border-[var(--border)] rounded-lg hover:bg-[var(--surface-2)] transition-colors">
              {t(l, "books.download-en")}
            </TrackedLink>
          </div>
        </div>
      )}
      <p className="text-sm text-[var(--text-dim)]">{t(l, "books.pdf-note")}</p>
    </section>
  );
}
