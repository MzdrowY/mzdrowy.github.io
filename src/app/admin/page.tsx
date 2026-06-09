"use client";

import { useState, useEffect } from "react";

const HASH = "1f53082f2d9dd9265ba109acd7b263f07ea3bbac1edea6b3671377ea4dace249";
async function hashPass(pw: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(pw));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

const books = [
  "Internet, Domeny i DNS",
  "Pod skórą systemu",
  "Sztuczna inteligencja bez tajemnic",
];

async function getCount(key: string): Promise<number> {
  try {
    const res = await fetch(`https://api.countapi.xyz/get/mzdrowy/${key}`);
    const data = await res.json();
    return data.value ?? 0;
  } catch {
    return 0;
  }
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authed) return;
    Promise.all([
      getCount("total"),
      ...books.map((b) => getCount(b)),
    ]).then(([total, ...rest]) => {
      const map: Record<string, number> = { "Wszystkie odwiedziny": total };
      books.forEach((b, i) => (map[b] = rest[i]));
      setCounts(map);
      setLoading(false);
    });
  }, [authed]);

  const handleLogin = async () => {
    const h = await hashPass(pw);
    if (h === HASH) {
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!authed) {
    return (
      <div className="mx-auto max-w-sm px-4 py-32 text-center">
        <h1 className="mb-6 text-2xl font-bold">Panel administracyjny</h1>
        <input
          type="password"
          placeholder="Hasło"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          className="mb-4 w-full rounded-lg border border-zinc-300 px-4 py-2 text-center text-zinc-900 outline-none focus:border-zinc-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
        />
        <button
          onClick={handleLogin}
          className="w-full rounded-lg bg-zinc-900 px-4 py-2 text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Zaloguj
        </button>
        {error && <p className="mt-4 text-sm text-red-500">Nieprawidłowe hasło</p>}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">Panel administracyjny</h1>

      {loading ? (
        <p className="text-zinc-500">Wczytywanie statystyk...</p>
      ) : (
        <div className="grid gap-4">
          {Object.entries(counts).map(([label, count]) => (
            <div
              key={label}
              className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900"
            >
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
              <p className="text-3xl font-bold tracking-tight">{count}</p>
            </div>
          ))}
        </div>
      )}

      <p className="mt-8 text-sm text-zinc-400">
        Liczniki aktualizują się po każdym pobraniu pliku PDF.
      </p>
    </div>
  );
}
