import Link from "next/link";
import { books } from "@/lib/books";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <section className="mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-blue-400">
          Witaj na mojej stronie
        </h1>
        <p className="text-lg leading-relaxed text-zinc-400">
          Znajdziesz tutaj moje ebooki oraz programy, które stworzyłem.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Ebooki</h2>
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
                Wybierz opcje &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Programy</h2>
        <Link
          href="/programy"
          className="block rounded-xl border border-zinc-700 bg-zinc-900 p-6 transition-shadow hover:shadow-md"
        >
          <p className="text-sm text-zinc-400">Zobacz dostępne programy &rarr;</p>
        </Link>
      </section>
    </div>
  );
}
