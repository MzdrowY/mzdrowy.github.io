"use client";

import { useState, useEffect } from "react";

const HASH = "20e4416e0a5b41249ef04ac14e18fbf96c06db70c8478ef211980adbf2fefbf0";
async function hashPass(pw: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(pw));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

const BASE = "https://countapi.mileshilliard.com/api/v1";

async function getCount(key: string): Promise<number> {
  try {
    const res = await fetch(`${BASE}/get/${key}`);
    const data = await res.json();
    return data.value ? parseInt(data.value, 10) : 0;
  } catch {
    return 0;
  }
}

const books = [
  "internet-domeny-dns",
  "pod-skora-systemu",
  "sztuczna-inteligencja",
];

const programSlugs = ["anti-spaghetti", "monogram-studio"];

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authed) return;
    Promise.all([
      getCount("mzdrowy-page-views"),
      getCount("mzdrowy-total-downloads"),
      ...books.map((b) => getCount(`mzdrowy-ebook-${b}`)),
      ...programSlugs.map((s) => getCount(`mzdrowy-program-${s}`)),
    ]).then(([views, total, ...rest]) => {
      const map: Record<string, number> = { "Odwiedziny strony": views, "Wszystkie pobrania": total };
      books.forEach((b, i) => {
        const name =
          b === "internet-domeny-dns" ? "Internet, Domeny i DNS" :
          b === "pod-skora-systemu" ? "Pod skórą systemu" :
          "Sztuczna inteligencja bez tajemnic";
        map[`📖 ${name}`] = rest[i];
      });
      programSlugs.forEach((s, i) => {
        const name = s === "anti-spaghetti" ? "Anti-Spaghetti Notatnik" : "Monogram Studio";
        map[`📦 ${name}`] = rest[books.length + i];
      });
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
          className="mb-4 w-full rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-center text-zinc-100 outline-none focus:border-zinc-500"
        />
        <button
          onClick={handleLogin}
          className="w-full rounded-lg bg-zinc-100 px-4 py-2 text-zinc-900 transition-colors hover:bg-zinc-300"
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
              className="rounded-xl border border-zinc-700 bg-zinc-900 p-6"
            >
              <p className="text-sm text-zinc-400">{label}</p>
              <p className="text-3xl font-bold tracking-tight">{count}</p>
            </div>
          ))}
        </div>
      )}

      <p className="mt-8 text-sm text-zinc-400">
        Liczniki aktualizują się przy każdym wejściu na stronę, pobraniu PDF lub instalatora.
      </p>
    </div>
  );
}
