"use client";

import { useState, useEffect } from "react";

const HASH = "4103f0a4e707b1c7bebbc42809ab0ace8dd3f56d844d7903bfe9f95a2ccc6972";
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
  } catch { return 0; }
}

const books = ["internet-domeny-dns", "pod-skora-systemu", "sztuczna-inteligencja", "mam-strone-i-co-dalej", "moja-pierwsza-strona"];
const programSlugs = ["anti-spaghetti", "monogram-studio", "przelew-pdf"];

export default function AdminForm() {
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
          b === "mam-strone-i-co-dalej" ? "Mam stronę i co dalej" :
          b === "moja-pierwsza-strona" ? "Moja pierwsza strona" :
          "Sztuczna inteligencja bez tajemnic";
        map[name] = rest[i];
      });
      programSlugs.forEach((s, i) => {
        const name = s === "anti-spaghetti" ? "Anti-Spaghetti Notatnik" : s === "monogram-studio" ? "Monogram Studio" : "Polecenie Przelewu PDF";
        map[name] = rest[books.length + i];
      });
      setCounts(map);
      setLoading(false);
    });
  }, [authed]);

  const handleLogin = async () => {
    const h = await hashPass(pw);
    if (h === HASH) { setAuthed(true); setError(false); } else { setError(true); }
  };

  if (!authed) {
    return (
      <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
        <h2 className="section-title" style={{ textAlign: "center" }}>Panel administracyjny</h2>
        <div className="help-block" style={{ textAlign: "left" }}>
          <div className="flag">
            <label className="f">Hasło</label>
            <input type="password" placeholder="Hasło" value={pw}
              onChange={(e) => setPw(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="w-full mt-2 px-4 py-3 text-sm bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] outline-none focus:border-[var(--amber)] transition-colors" />
          </div>
          <button onClick={handleLogin}
            className="w-full px-6 py-3 text-sm font-mono text-[var(--amber)] border border-[var(--amber-dim)] rounded-lg hover:bg-[var(--surface-2)] transition-colors">
            Zaloguj
          </button>
          {error && <p className="mt-4 text-sm text-red-500 mono">Nieprawidłowe hasło</p>}
        </div>
      </div>
    );
  }

  return (
    <>
      <p className="eyebrow mono">$ mzdrowy --admin</p>
      <h2 className="section-title">Panel administracyjny</h2>
      {loading ? (
        <p className="text-[var(--text-dim)]">Wczytywanie statystyk...</p>
      ) : (
        <div className="listing">
          {Object.entries(counts).map(([label, count]) => (
            <div key={label} className="row" style={{ cursor: "default" }}>
              <span className="info">
                <span className="fname">{label}</span>
              </span>
              <span className="go font-['Fraunces',serif] text-[20px]">{count}</span>
            </div>
          ))}
        </div>
      )}
      <p className="mt-8 text-sm text-[var(--text-dim)]">Liczniki aktualizują się przy każdym wejściu na stronę, pobraniu PDF lub instalatora.</p>
    </>
  );
}
