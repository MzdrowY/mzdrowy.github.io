"use client";

import { useState } from "react";

const categories = ["Ebook", "Program", "Strona", "Inne"];

const items = [
  { cat: "Ebook", name: "Internet, Domeny i DNS" },
  { cat: "Ebook", name: "Pod skórą systemu" },
  { cat: "Ebook", name: "Sztuczna inteligencja bez tajemnic" },
  { cat: "Program", name: "Anti-Spaghetti Notatnik" },
  { cat: "Program", name: "Monogram Studio" },
];

export default function SugestiePage() {
  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [optional, setOptional] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const filtered = category ? items.filter((i) => i.cat === category) : items;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Sugestia: ${category} — ${item || "(brak)"}`);
    const body = encodeURIComponent(
      `Kategoria: ${category}\nDotyczy: ${item || "(brak)"}\nKontakt: ${optional || "(brak)"}\nImię: ${name || "(brak)"}\n\nWiadomość:\n${message}`
    );
    window.location.href = `mailto:mzdrowy@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-2 text-4xl font-bold tracking-tight">Sugestie i uwagi</h1>
      <p className="mb-10 text-sm text-zinc-400">
        Masz pomysł na zmianę w ebooku? Brakuje Ci jakiegoś programu? Napisz — czytam każdą wiadomość.
      </p>

      {sent ? (
        <p className="rounded-xl border border-green-700 bg-green-900/30 p-6 text-sm text-green-400">
          Dziękuję! Wiadomość została otwarta w Twoim kliencie poczty — wystarczy wysłać.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm text-zinc-400">Kategoria</label>
            <select
              value={category}
              onChange={(e) => { setCategory(e.target.value); setItem(""); }}
              required
              className="w-full rounded-xl border border-zinc-600 bg-zinc-800 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-zinc-500"
            >
              <option value="">Wybierz...</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm text-zinc-400">Którego dotyczy?</label>
            <select
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="w-full rounded-xl border border-zinc-600 bg-zinc-800 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-zinc-500"
            >
              <option value="">Wybierz...</option>
              {filtered.map((i) => (
                <option key={i.name} value={i.name}>{i.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm text-zinc-400">Opcjonalnie...</label>
            <input
              type="text"
              value={optional}
              onChange={(e) => setOptional(e.target.value)}
              placeholder="np. adres email"
              className="w-full rounded-xl border border-zinc-600 bg-zinc-800 px-4 py-3 text-sm text-zinc-100 outline-none placeholder-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-zinc-400">Twoje imię <span className="text-zinc-600">(opcjonalnie)</span></label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="np. Marek"
              className="w-full rounded-xl border border-zinc-600 bg-zinc-800 px-4 py-3 text-sm text-zinc-100 outline-none placeholder-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-zinc-400">Wiadomość</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              placeholder="Opisz co chciałbyś zmienić, dodać lub zgłosić..."
              className="w-full resize-none rounded-xl border border-zinc-600 bg-zinc-800 px-4 py-3 text-sm text-zinc-100 outline-none placeholder-zinc-500 focus:border-zinc-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            Wyślij sugestię
          </button>
        </form>
      )}

      <div className="mt-16">
        <h2 className="mb-4 text-xl font-semibold">Dostępne pozycje</h2>
        <div className="overflow-x-auto rounded-xl border border-zinc-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-700 bg-zinc-900">
                <th className="px-4 py-3 text-left font-medium text-zinc-400">Kategoria</th>
                <th className="px-4 py-3 text-left font-medium text-zinc-400">Nazwa</th>
              </tr>
            </thead>
            <tbody>
              {items.map((i) => (
                <tr key={i.name} className="border-b border-zinc-800 last:border-0">
                  <td className="px-4 py-3 text-zinc-500">{i.cat}</td>
                  <td className="px-4 py-3 text-zinc-300">{i.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
