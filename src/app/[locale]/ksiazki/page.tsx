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
    alternates: { canonical: `https://mzdrowy.github.io/${locale}/ksiazki` },
    openGraph: { title: `${t(l, "books.title")} — MzdrowY`, description: t(l, "books.og-desc") },
  };
}

export default async function BooksPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-2 text-4xl font-bold tracking-tight">{t(l, "books.title")}</h1>
      <p className="mb-8 text-sm text-zinc-500">{t(l, "books.subtitle")}</p>
      <div className="grid gap-6 sm:grid-cols-2">
        {books.map((b) => {
          const book = bookLocale(b, l);
          return (
            <Link key={b.slug} href={`/${locale}/ksiazki/${b.slug}`} className="flex flex-col rounded-xl border border-zinc-700 bg-zinc-900 p-6 transition-shadow hover:shadow-md">
              <h2 className="mb-2 text-xl font-semibold">{book.title}</h2>
              <p className="mb-4 flex-1 text-sm text-zinc-400">{book.subtitle}</p>
              <span className="text-sm font-medium text-blue-400">{t(l, "home.check-ebook")}</span>
            </Link>
          );
        })}
        <div className="flex flex-col rounded-xl border border-dashed border-zinc-600 bg-zinc-900 p-6 sm:col-span-2">
          <h2 className="mb-2 text-xl font-semibold text-zinc-500">{t(l, "books.coming-soon")}</h2>
          <p className="text-sm text-zinc-500">{t(l, "books.coming-soon-desc")}</p>
        </div>
      </div>
    </div>
  );
}
