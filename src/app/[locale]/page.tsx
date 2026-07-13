import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { books, bookLocale } from "@/lib/books";
import { programs, programLocale } from "@/lib/programs";

const ebookDescs: Record<string, string> = {
  "internet-domeny-dns": "Internet, domeny i DNS — podręcznik edukacyjny od podstaw",
  "pod-skora-systemu": "Przewodnik po terminalu dla Windows i macOS",
  "sztuczna-inteligencja": "AI wyjaśniona przystępnie, bez tajemnic",
  "moja-pierwsza-strona": "WordPress, no-code, AI-buildery, HTML/CSS i Shopify — jak postawić stronę w 2026",
  "mam-strone-i-co-dalej": "Praktyczny poradnik dla właścicieli stron internetowych",
};

const faqPl = [
  { q: "Czy muszę się rejestrować, żeby pobrać ebooka lub program?", a: "Nie, cała zawartość strony jest całkowicie darmowa i dostępna bez rejestracji. Ebooki możesz czytać online lub pobrać PDF, programy pobrać jako instalator." },
  { q: "W jakim formacie są ebooki?", a: "Wszystkie ebooki dostępne są w formacie PDF, gotowe do czytania na dowolnym urządzeniu — komputerze, tablecie, czytniku lub telefonie." },
  { q: "Czy ebooki są dostępne w języku angielskim?", a: "Tak, większość ebooków dostępna jest w polskiej i angielskiej wersji językowej. Wersję możesz wybrać na stronie każdego ebooka." },
  { q: "Jak zainstalować pobrany program?", a: "Pobrany instalator (.exe) uruchom na komputerze z Windows i postępuj według instrukcji. Programy są gotowe do użycia od razu po instalacji." },
];

const faqEn = [
  { q: "Do I need to register to download an ebook or software?", a: "No, all content on this site is completely free and available without registration. You can read ebooks online, download PDFs, or download software installers." },
  { q: "What format are the ebooks in?", a: "All ebooks are available in PDF format, ready to read on any device — computer, tablet, e-reader, or phone." },
  { q: "Are the ebooks available in English?", a: "Yes, most ebooks are available in both Polish and English. You can choose the language version on each ebook's page." },
  { q: "How do I install a downloaded program?", a: "Run the downloaded installer (.exe) on your Windows computer and follow the instructions. Programs are ready to use immediately after installation." },
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  const isPl = l === "pl";

  return (
    <>
      <section className="hero" style={{ borderTop: "none" }}>
        <div className="term">
          <div className="term-bar">
            <div className="dot"></div><div className="dot"></div><div className="dot"></div>
            <span className="term-title">mzdrowy@strona:~</span>
          </div>
          <div className="term-body">
            {isPl ? (
              <>
                <p className="line"><span className="prompt">mzdrowy@strona</span><span className="path">:~$</span> <span className="cmd">cat o_mnie.txt</span></p>
                <p className="out">Piszę o technologii tak, żeby miało to sens — bez żargonu,<br />bez skrótów myślowych. Wszystko bezpłatnie, bez rejestracji.</p>
                <p className="line"><span className="prompt">mzdrowy@strona</span><span className="path">:~$</span> <span className="cmd">ls zasoby/ --darmowe</span><span className="cursor"></span></p>
              </>
            ) : (
              <>
                <p className="line"><span className="prompt">mzdrowy@strona</span><span className="path">:~$</span> <span className="cmd">cat about_me.txt</span></p>
                <p className="out">I write about technology so it actually makes sense — no jargon,<br />no shortcuts. Everything free, no registration.</p>
                <p className="line"><span className="prompt">mzdrowy@strona</span><span className="path">:~$</span> <span className="cmd">ls resources/ --free</span><span className="cursor"></span></p>
              </>
            )}
          </div>
        </div>

        <h1 className="title">
          {isPl ? <>Ebooki i narzędzia,<br />które sam wykorzystuję.</> : <>Ebooks and tools<br />I use myself.</>}
        </h1>
        <p className="lede">
          {isPl
            ? "Darmowe przewodniki o internecie, terminalu i AI oraz programy, które zrobiłem, bo sam ich potrzebowałem. Zero rejestracji, zero haczyków."
            : "Free guides about the internet, terminal, and AI, plus tools I built because I needed them myself. No registration, no catch."}
        </p>
      </section>

      <section id="ebooki">
        <p className="eyebrow mono">{isPl ? "ls ./ebooki" : "ls ./ebooks"}</p>
        <h2 className="section-title">
          {isPl ? "Ebooki" : "Ebooks"} <span className="free-tag">{isPl ? "darmowe" : "free"}</span>
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

      <section id="programy">
        <p className="eyebrow mono">{isPl ? "ls ./programy" : "ls ./software"}</p>
        <h2 className="section-title">
          {isPl ? "Programy" : "Software"} <span className="free-tag">{isPl ? "darmowe" : "free"}</span>
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

      <section id="faq">
        <p className="eyebrow mono">{isPl ? "mzdrowy --help" : "mzdrowy --help"}</p>
        <h2 className="section-title">FAQ</h2>
        <div className="faq-list">
          {(isPl ? faqPl : faqEn).map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <p className="faq-a">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
