import Link from "next/link";

const books = [
  {
    title: "Internet, Domeny i DNS",
    subtitle: "Podręcznik edukacyjny od podstaw",
    file: "/books/Internet, Domeny i DNS – Podręcznik edukacyjny od podstaw.pdf",
  },
  {
    title: "Pod skórą systemu",
    subtitle: "W głąb architektury komputerów",
    file: "/books/Pod skórą systemu.pdf",
  },
  {
    title: "Sztuczna inteligencja bez tajemnic",
    subtitle: "AI wyjaśniona przystępnie",
    file: "/books/Sztuczna inteligencja bez tajemnic.pdf",
  },
];

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">Książki</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {books.map((book) => (
          <a
            key={book.title}
            href={book.file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <h2 className="mb-2 text-xl font-semibold">{book.title}</h2>
            <p className="mb-4 flex-1 text-sm text-zinc-500">{book.subtitle}</p>
            <span className="text-sm font-medium text-blue-600">
              Otwórz PDF &rarr;
            </span>
          </a>
        ))}
        <div className="flex flex-col rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-6 sm:col-span-2">
          <h2 className="mb-2 text-xl font-semibold text-zinc-400">Więcej wkrótce</h2>
          <p className="text-sm text-zinc-400">Kolejne książki pojawią się w przyszłości.</p>
        </div>
      </div>
    </div>
  );
}
