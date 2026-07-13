import Link from "next/link";
import Script from "next/script";
import { Nav } from "@/components/nav";
import { VisitTracker } from "@/components/visit-tracker";
import { books, bookLocale } from "@/lib/books";
import { programs, programLocale } from "@/lib/programs";

const UMAMI_SRC = "https://somehow-listings-analysis-velvet.trycloudflare.com/script.js";
const UMAMI_ID = "26de6bdf-4239-4e30-b855-83f4160b3bbf";

const l = "pl";

export default function RootPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "WebSite", name: "MzdrowY", url: "https://mzdrowy.github.io" },
              { "@type": "Person", name: "Maciej Zdrowowicz", url: "https://mzdrowy.github.io" },
            ],
          }),
        }}
      />
      <Nav locale={l} />
      <VisitTracker />
      <Script async defer src={UMAMI_SRC} data-website-id={UMAMI_ID} strategy="afterInteractive" />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <section className="mb-16">
            <h1 className="mb-4 text-4xl font-bold tracking-tight gradient-text">Witaj</h1>
            <p className="mb-2 text-neon-green animate-flicker">Cała zawartość tej strony jest bezpłatna i dostępna bez rejestracji.</p>
            <p className="text-lg leading-relaxed text-zinc-400">Piszę o technologii tak, żeby miało to sens — bez żargonu, bez skrótów myślowych. Znajdziesz tu darmowe ebooki o internecie, terminalu i AI, oraz narzędzia, które zrobiłem, bo sam ich potrzebowałem.</p>
          </section>

          <section className="mb-16">
            <div className="mb-6 flex items-baseline gap-3">
              <h2 className="text-2xl font-semibold gradient-text">Ebooki</h2>
              <span className="text-neon-green animate-flicker">darmowe</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {books.map((b) => {
                const book = bookLocale(b, l);
                return (
                  <Link key={b.slug} href={`/pl/ksiazki/${b.slug}`} className="glow-card rounded-xl p-6">
                    <h3 className="mb-2 font-semibold text-zinc-100">{book.title}</h3>
                    <p className="mb-3 text-sm text-zinc-400">{book.subtitle}</p>
                    <span className="text-sm font-medium text-neon-cyan">Sprawdź ebooka →</span>
                  </Link>
                );
              })}
            </div>
          </section>

          <section>
            <div className="mb-6 flex items-baseline gap-3">
              <h2 className="text-2xl font-semibold gradient-text">Programy</h2>
              <span className="text-neon-green animate-flicker">darmowe</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {programs.map((p) => {
                const prog = programLocale(p, l);
                return (
                  <Link key={p.slug} href={`/pl/programy/${p.slug}`} className="glow-card rounded-xl p-6">
                    <h3 className="mb-2 font-semibold text-zinc-100">{prog.title}</h3>
                    <p className="mb-3 text-sm text-zinc-400">{prog.subtitle}</p>
                    <span className="text-sm font-medium text-neon-cyan">Zobacz szczegóły →</span>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold gradient-text">FAQ</h2>
            <div className="space-y-4">
              {[
                { q: "Czy muszę się rejestrować, żeby pobrać ebooka lub program?", a: "Nie, cała zawartość strony jest całkowicie darmowa i dostępna bez rejestracji. Ebooki możesz czytać online lub pobrać PDF, programy pobrać jako instalator." },
                { q: "W jakim formacie są ebooki?", a: "Wszystkie ebooki dostępne są w formacie PDF, gotowe do czytania na dowolnym urządzeniu — komputerze, tablecie, czytniku lub telefonie." },
                { q: "Czy ebooki są dostępne w języku angielskim?", a: "Tak, większość ebooków dostępna jest w polskiej i angielskiej wersji językowej. Wersję możesz wybrać na stronie każdego ebooka." },
                { q: "Jak zainstalować pobrany program?", a: "Pobrany instalator (.exe) uruchom na komputerze z Windows i postępuj według instrukcji. Programy są gotowe do użycia od razu po instalacji." },
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
                  { "@type": "Question", "name": "Czy muszę się rejestrować, żeby pobrać ebooka lub program?", "acceptedAnswer": { "@type": "Answer", "text": "Nie, cała zawartość strony jest całkowicie darmowa i dostępna bez rejestracji." } },
                  { "@type": "Question", "name": "W jakim formacie są ebooki?", "acceptedAnswer": { "@type": "Answer", "text": "Wszystkie ebooki dostępne są w formacie PDF." } },
                  { "@type": "Question", "name": "Czy ebooki są dostępne w języku angielskim?", "acceptedAnswer": { "@type": "Answer", "text": "Tak, większość ebooków dostępna jest w polskiej i angielskiej wersji językowej." } },
                  { "@type": "Question", "name": "Jak zainstalować pobrany program?", "acceptedAnswer": { "@type": "Answer", "text": "Uruchom pobrany instalator (.exe) na komputerze z Windows i postępuj według instrukcji." } },
                ],
              }),
            }}
          />
        </div>
      </main>
      <footer className="border-t border-zinc-800/50 py-6 text-center text-sm text-zinc-500">
        <p>&copy; {new Date().getFullYear()} MzdrowY</p>
        <p className="mt-1"><a href="mailto:mzdrowy@gmail.com" className="hover:text-neon-green transition-colors">mzdrowy@gmail.com</a></p>
        <p className="mt-2"><Link href="/admin" className="text-xs text-zinc-700 hover:text-neon-green transition-colors">Panel</Link></p>
      </footer>
    </>
  );
}
