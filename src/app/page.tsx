import Link from "next/link";
import { books } from "@/lib/books";
import { programs } from "@/lib/programs";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <section className="mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-blue-400">
          Witaj
        </h1>
        <p className="text-lg leading-relaxed text-zinc-400">
          Piszę o technologii tak, żeby miało to sens — bez żargonu, bez skrótów myślowych. Znajdziesz tu darmowe ebooki o internecie, terminalu i AI, oraz narzędzia, które zrobiłem, bo sam ich potrzebowałem.
        </p>
      </section>

      <section className="mb-16">
        <div className="mb-6 flex items-baseline gap-3">
          <h2 className="text-2xl font-semibold">Ebooki</h2>
          <span className="text-xs text-green-500">darmowe</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {books.map((book) => (
            <Link
              key={book.slug}
              href={`/ksiazki/${book.slug}`}
              className="rounded-xl border border-zinc-700 bg-zinc-900 p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">{book.title}</h3>
              <p className="mb-3 text-sm text-zinc-400">{book.subtitle}</p>
              <span className="text-sm font-medium text-blue-400">
                Sprawdź ebooka &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Programy</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {programs.map((p) => (
            <Link
              key={p.slug}
              href={`/programy/${p.slug}`}
              className="rounded-xl border border-zinc-700 bg-zinc-900 p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">{p.title}</h3>
              <p className="mb-3 text-sm text-zinc-400">{p.subtitle}</p>
              <span className="text-sm font-medium text-blue-400">
                Zobacz szczegóły &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
