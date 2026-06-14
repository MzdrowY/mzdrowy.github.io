import Link from "next/link";
import { books } from "@/lib/books";

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">Ebooki</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {books.map((book) => (
          <Link
            key={book.slug}
            href={`/ksiazki/${book.slug}`}
            className="flex flex-col rounded-xl border border-zinc-700 bg-zinc-900 p-6 transition-shadow hover:shadow-md"
          >
            <h2 className="mb-2 text-xl font-semibold">{book.title}</h2>
            <p className="mb-4 flex-1 text-sm text-zinc-400">{book.subtitle}</p>
            <span className="text-sm font-medium text-blue-400">
              Sprawdź ebooka &rarr;
            </span>
          </Link>
        ))}
        <div className="flex flex-col rounded-xl border border-dashed border-zinc-600 bg-zinc-900 p-6 sm:col-span-2">
          <h2 className="mb-2 text-xl font-semibold text-zinc-500">Więcej wkrótce</h2>
          <p className="text-sm text-zinc-500">Kolejne ebooki pojawią się w przyszłości.</p>
        </div>
      </div>
    </div>
  );
}
