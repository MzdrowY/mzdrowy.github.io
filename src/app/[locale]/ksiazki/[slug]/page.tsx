import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { type Locale, t } from "@/lib/i18n";
import { books, bookLocale } from "@/lib/books";
import { TrackedLink } from "@/components/tracked-link";
import { PlFlag, EnFlag } from "@/components/icons";

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
    offers: { "@type": "Offer", price: "0", priceCurrency: "PLN", availability: "https://schema.org/InStock" },
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }} />
      <Link href={`/${locale}/ksiazki`} className="mb-8 inline-block text-sm text-zinc-400 hover:text-zinc-300 transition-colors">&larr; {t(l, "books.back")}</Link>
      <h1 className="mb-2 text-4xl font-bold tracking-tight">{book.title}</h1>
      <p className="mb-2 text-lg text-zinc-400">{book.subtitle}</p>
      <p className="mb-2 text-sm text-zinc-500">{book.pages} {t(l, "books.pages")} &middot; {sizeMB} MB &middot; <span className="text-green-500">{t(l, "books.free")}</span></p>
      <p className="mb-10 text-sm text-zinc-300 leading-relaxed">{book.description}</p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <TrackedLink href={book.file} className="flex items-center justify-center rounded-xl border border-zinc-600 bg-zinc-800 px-8 py-4 text-center font-medium transition-colors hover:bg-zinc-700">{t(l, "books.read")}</TrackedLink>
        <TrackedLink href={book.file} download className="flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-center font-medium text-white transition-colors hover:bg-blue-500">{t(l, "books.download")}</TrackedLink>
      </div>
      {raw.fileEn && (
        <div className="mt-6">
          <p className="mb-3 text-sm text-zinc-500">{t(l, "books.also-available")}:</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <TrackedLink href={raw.file} download className="flex items-center justify-center gap-2 rounded-xl border border-zinc-600 bg-zinc-800 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-700">
              <PlFlag className="h-4 w-6 rounded-sm shrink-0" />
              {t(l, "books.download-pl")}
            </TrackedLink>
            <TrackedLink href={raw.fileEn} download className="flex items-center justify-center gap-2 rounded-xl border border-zinc-600 bg-zinc-800 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-700">
              <EnFlag className="h-4 w-6 rounded-sm shrink-0" />
              {t(l, "books.download-en")}
            </TrackedLink>
          </div>
        </div>
      )}
      <p className="mt-8 text-sm text-zinc-500">{t(l, "books.pdf-note")}</p>
    </div>
  );
}
