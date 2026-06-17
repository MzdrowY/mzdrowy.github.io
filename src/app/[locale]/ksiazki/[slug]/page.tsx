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
  const url = `https://mzdrowy.github.io/${locale}/ksiazki/${slug}`;
  return {
    title: book.title,
    description: book.description,
    alternates: { canonical: url },
    openGraph: { url, title: `${book.title} — ${book.subtitle}`, description: book.description, images: ["/og-image.png"] },
    twitter: { card: "summary_large_image", title: `${book.title} — ${book.subtitle}`, description: book.description, images: ["/og-image.png"] },
  };
}

export default async function EbookPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const l = locale as Locale;
  const raw = books.find((b) => b.slug === slug);
  if (!raw) notFound();
  const book = bookLocale(raw, l);
  const sizeMB = (raw.sizeBytes / (1024 * 1024)).toFixed(1);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <Link href={`/${locale}/ksiazki`} className="mb-8 inline-block text-sm text-zinc-400 hover:text-zinc-300 transition-colors">&larr; {t(l, "books.back")}</Link>
      <h1 className="mb-2 text-4xl font-bold tracking-tight">{book.title}</h1>
      <p className="mb-2 text-lg text-zinc-400">{book.subtitle}</p>
      <p className="mb-2 text-sm text-zinc-500">{book.pages} {t(l, "books.pages")} &middot; {sizeMB} MB &middot; <span className="text-green-500">{t(l, "books.free")}</span></p>
      <p className="mb-10 text-sm text-zinc-300 leading-relaxed">{book.description}</p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <TrackedLink href={book.file} className="flex items-center justify-center rounded-xl border border-zinc-600 bg-zinc-800 px-8 py-4 text-center font-medium transition-colors hover:bg-zinc-700">{t(l, "books.read")}</TrackedLink>
        <TrackedLink href={book.file} download className="flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-center font-medium text-white transition-colors hover:bg-blue-500">{t(l, "books.download")}</TrackedLink>
      </div>
      <p className="mt-8 text-sm text-zinc-500">{t(l, "books.pdf-note")}</p>
    </div>
  );
}
