import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <section className="mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Witaj na mojej stronie
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600">
          Znajdziesz tutaj moje książki oraz programy, które stworzyłem.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Książki</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/ksiazki"
            className="rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <h3 className="mb-2 font-semibold">Internet, Domeny i DNS</h3>
            <p className="text-sm text-zinc-500">Podręcznik edukacyjny od podstaw</p>
          </Link>
          <Link
            href="/ksiazki"
            className="rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <h3 className="mb-2 font-semibold">Pod skórą systemu</h3>
            <p className="text-sm text-zinc-500">W głąb architektury komputerów</p>
          </Link>
          <Link
            href="/ksiazki"
            className="rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md sm:col-span-2"
          >
            <h3 className="mb-2 font-semibold">Sztuczna inteligencja bez tajemnic</h3>
            <p className="text-sm text-zinc-500">AI wyjaśniona przystępnie</p>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Programy</h2>
        <Link
          href="/programy"
          className="block rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md"
        >
          <p className="text-sm text-zinc-500">Zobacz dostępne programy &rarr;</p>
        </Link>
      </section>
    </div>
  );
}
