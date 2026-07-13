import Link from "next/link";
import Script from "next/script";
import { Nav } from "@/components/nav";
import { VisitTracker } from "@/components/visit-tracker";
import { books } from "@/lib/books";
import { programs } from "@/lib/programs";

const UMAMI_SRC = "https://somehow-listings-analysis-velvet.trycloudflare.com/script.js";
const UMAMI_ID = "26de6bdf-4239-4e30-b855-83f4160b3bbf";

const ebookDescs: Record<string, string> = {
  "internet-domeny-dns": "Internet, domeny i DNS — podręcznik edukacyjny od podstaw",
  "pod-skora-systemu": "Przewodnik po terminalu dla Windows i macOS",
  "sztuczna-inteligencja": "AI wyjaśniona przystępnie, bez tajemnic",
  "moja-pierwsza-strona": "WordPress, no-code, AI-buildery, HTML/CSS i Shopify — jak postawić stronę w 2026",
  "mam-strone-i-co-dalej": "Praktyczny poradnik dla właścicieli stron internetowych",
};

const faq = [
  { q: "Czy muszę się rejestrować, żeby pobrać ebooka lub program?", a: "Nie, cała zawartość strony jest całkowicie darmowa i dostępna bez rejestracji. Ebooki możesz czytać online lub pobrać PDF, programy pobrać jako instalator." },
  { q: "W jakim formacie są ebooki?", a: "Wszystkie ebooki dostępne są w formacie PDF, gotowe do czytania na dowolnym urządzeniu — komputerze, tablecie, czytniku lub telefonie." },
  { q: "Czy ebooki są dostępne w języku angielskim?", a: "Tak, większość ebooków dostępna jest w polskiej i angielskiej wersji językowej. Wersję możesz wybrać na stronie każdego ebooka." },
  { q: "Jak zainstalować pobrany program?", a: "Pobrany instalator (.exe) uruchom na komputerze z Windows i postępuj według instrukcji. Programy są gotowe do użycia od razu po instalacji." },
];

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
      <Nav locale="pl" />
      <VisitTracker />
      <Script async defer src={UMAMI_SRC} data-website-id={UMAMI_ID} strategy="afterInteractive" />
      <main className="wrap">
        <section className="hero" style={{ borderTop: "none" }}>
          <div className="term">
            <div className="term-bar">
              <div className="dot"></div><div className="dot"></div><div className="dot"></div>
              <span className="term-title">mzdrowy@strona:~</span>
            </div>
            <div className="term-body">
              <p className="line"><span className="prompt">mzdrowy@strona</span><span className="path">:~$</span> <span className="cmd">cat o_mnie.txt</span></p>
              <p className="out">Piszę o technologii tak, żeby miało to sens — bez żargonu,<br />bez skrótów myślowych. Wszystko bezpłatnie, bez rejestracji.</p>
              <p className="line"><span className="prompt">mzdrowy@strona</span><span className="path">:~$</span> <span className="cmd">ls zasoby/ --darmowe</span><span className="cursor"></span></p>
            </div>
          </div>

          <h1 className="title">Ebooki i narzędzia,<br />które sam wykorzystuję.</h1>
          <p className="lede">Darmowe przewodniki o internecie, terminalu i AI oraz programy, które zrobiłem, bo sam ich potrzebowałem. Zero rejestracji, zero haczyków.</p>
        </section>

        <section id="ebooki">
          <p className="eyebrow mono">ls ./ebooki</p>
          <h2 className="section-title">Ebooki <span className="free-tag">darmowe</span></h2>
          <div className="listing">
            {books.map((b) => (
              <Link key={b.slug} href={`/pl/ksiazki/${b.slug}`} className="row">
                <span className="icon">.pdf</span>
                <span className="info">
                  <span className="fname">{b.slug}.pdf</span>
                  <span className="fdesc">{ebookDescs[b.slug] || b.subtitlePl}</span>
                </span>
                <span className="go">Otwórz →</span>
              </Link>
            ))}
          </div>
        </section>

        <section id="programy">
          <p className="eyebrow mono">ls ./programy</p>
          <h2 className="section-title">Programy <span className="free-tag">darmowe</span></h2>
          <div className="listing">
            {programs.map((p) => (
              <Link key={p.slug} href={`/pl/programy/${p.slug}`} className="row">
                <span className="icon">.exe</span>
                <span className="info">
                  <span className="fname">{p.slug}.exe</span>
                  <span className="fdesc">{p.subtitlePl}</span>
                </span>
                <span className="go">Szczegóły →</span>
              </Link>
            ))}
          </div>
        </section>

        <section id="faq">
          <p className="eyebrow mono">mzdrowy --help</p>
          <h2 className="section-title">FAQ</h2>
          <div className="faq-list">
            {faq.map((item, i) => (
              <details key={i} className="faq-item">
                <summary>{item.q}</summary>
                <p className="faq-a">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap foot-row">
          <span>&copy; {new Date().getFullYear()} MzdrowY</span>
          <a href="mailto:mzdrowy@gmail.com">mzdrowy@gmail.com</a>
          <a href="/admin.html">Panel</a>
        </div>
      </footer>
    </>
  );
}
