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
        <h1 className="mb-4 text-4xl font-bold tracking-tight gradient-text">{t(l, "home.hello")}</h1>
        <p className="mb-2 text-neon-green animate-flicker">{t(l, "home.free")}</p>
        <p className="text-lg leading-relaxed text-zinc-400">{t(l, "home.intro")}</p>
      </section>

      <section className="mb-16">
        <div className="mb-6 flex items-baseline gap-3">
          <h2 className="text-2xl font-semibold gradient-text">{t(l, "home.ebooks")}</h2>
          <span className="text-neon-green animate-flicker">{t(l, "home.free-badge")}</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {books.map((b) => {
            const book = bookLocale(b, l);
            return (
              <Link key={b.slug} href={`/${locale}/ksiazki/${b.slug}`} className="glow-card rounded-xl p-6">
                <h3 className="mb-2 font-semibold text-zinc-100">{book.title}</h3>
                <p className="mb-3 text-sm text-zinc-400">{book.subtitle}</p>
                <span className="text-sm font-medium text-neon-cyan">{t(l, "home.check-ebook")}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-baseline gap-3">
          <h2 className="text-2xl font-semibold gradient-text">{t(l, "home.programs")}</h2>
          <span className="text-neon-green animate-flicker">{t(l, "home.free-badge")}</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {programs.map((p) => {
            const prog = programLocale(p, l);
            return (
              <Link key={p.slug} href={`/${locale}/programy/${p.slug}`} className="glow-card rounded-xl p-6">
                <h3 className="mb-2 font-semibold text-zinc-100">{prog.title}</h3>
                <p className="mb-3 text-sm text-zinc-400">{prog.subtitle}</p>
                <span className="text-sm font-medium text-neon-cyan">{t(l, "home.check-program")}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold gradient-text">FAQ</h2>
        <div className="space-y-4">
          {[
            { q: t(l, "faq_free_q"), a: t(l, "faq_free_a") },
            { q: t(l, "faq_format_q"), a: t(l, "faq_format_a") },
            { q: t(l, "faq_en_q"), a: t(l, "faq_en_a") },
            { q: t(l, "faq_install_q"), a: t(l, "faq_install_a") },
          ].map((faq, i) => (
            <details key={i} className="glow-card group rounded-xl">
              <summary className="cursor-pointer px-6 py-4 font-medium text-zinc-200 transition-colors hover:text-neon-green [&::-webkit-details-marker]:hidden">
                {faq.q}
              </summary>
              <p className="border-t border-zinc-800/50 px-6 py-4 text-sm text-zinc-400 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": t(l, "faq_free_q"), "acceptedAnswer": { "@type": "Answer", "text": t(l, "faq_free_a") } },
              { "@type": "Question", "name": t(l, "faq_format_q"), "acceptedAnswer": { "@type": "Answer", "text": t(l, "faq_format_a") } },
              { "@type": "Question", "name": t(l, "faq_en_q"), "acceptedAnswer": { "@type": "Answer", "text": t(l, "faq_en_a") } },
              { "@type": "Question", "name": t(l, "faq_install_q"), "acceptedAnswer": { "@type": "Answer", "text": t(l, "faq_install_a") } },
            ],
          }),
        }}
      />
    </div>
  );
}
