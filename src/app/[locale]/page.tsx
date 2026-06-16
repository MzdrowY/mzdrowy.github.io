import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { books, bookLocale } from "@/lib/books";
import { programs, programLocale } from "@/lib/programs";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <section className="mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-blue-400">{t(l, "home.hello")}</h1>
        <p className="mb-2 text-green-500">{t(l, "home.free")}</p>
        <p className="text-lg leading-relaxed text-zinc-400">{t(l, "home.intro")}</p>
      </section>

      <section className="mb-16">
        <div className="mb-6 flex items-baseline gap-3">
          <h2 className="text-2xl font-semibold">{t(l, "home.ebooks")}</h2>
          <span className="text-green-500">{t(l, "home.free-badge")}</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {books.map((b) => {
            const book = bookLocale(b, l);
            return (
              <Link key={b.slug} href={`/${locale}/ksiazki/${b.slug}`} className="rounded-xl border border-zinc-700 bg-zinc-900 p-6 transition-shadow hover:shadow-md">
                <h3 className="mb-2 font-semibold">{book.title}</h3>
                <p className="mb-3 text-sm text-zinc-400">{book.subtitle}</p>
                <span className="text-sm font-medium text-blue-400">{t(l, "home.check-ebook")}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-baseline gap-3">
          <h2 className="text-2xl font-semibold">{t(l, "home.programs")}</h2>
          <span className="text-green-500">{t(l, "home.free-badge")}</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {programs.map((p) => {
            const prog = programLocale(p, l);
            return (
              <Link key={p.slug} href={`/${locale}/programy/${p.slug}`} className="rounded-xl border border-zinc-700 bg-zinc-900 p-6 transition-shadow hover:shadow-md">
                <h3 className="mb-2 font-semibold">{prog.title}</h3>
                <p className="mb-3 text-sm text-zinc-400">{prog.subtitle}</p>
                <span className="text-sm font-medium text-blue-400">{t(l, "home.check-program")}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
