"use client";

import { useState } from "react";

const ebookNames: Record<string, Record<string, string>> = {
  pl: {
    "internet-domeny-dns": "Internet, Domeny i DNS",
    "pod-skora-systemu": "Pod skórą systemu",
    "sztuczna-inteligencja": "Sztuczna inteligencja bez tajemnic",
    "moja-pierwsza-strona": "Moja pierwsza strona",
    "mam-strone-i-co-dalej": "Mam stronę i co dalej",
  },
  en: {
    "internet-domeny-dns": "Internet, Domains & DNS",
    "pod-skora-systemu": "Under the Hood of Your OS",
    "sztuczna-inteligencja": "Artificial Intelligence Unpacked",
    "moja-pierwsza-strona": "My First Website",
    "mam-strone-i-co-dalej": "I Have a Website, Now What",
  },
};

const programNames: Record<string, Record<string, string>> = {
  pl: { "anti-spaghetti": "Anti-Spaghetti Notatnik", "monogram-studio": "Monogram Studio", "przelew-pdf": "Polecenie Przelewu PDF" },
  en: { "anti-spaghetti": "Anti-Spaghetti Notes", "monogram-studio": "Monogram Studio", "przelew-pdf": "PDF Transfer Order" },
};

const txt: Record<string, Record<string, string>> = {
  pl: {
    title: "Zgłoś błąd", desc: "Znalazłeś błąd w ebooku lub programie? Masz pomysł na usprawnienie? Napisz — czytam każdą wiadomość.",
    catErrorBook: "Błąd w ebooku", catErrorProgram: "Błąd w programie", catSuggestion: "Sugestia", catOther: "Inne",
    category: "Kategoria", choose: "Wybierz...", which: "Którego dotyczy?",
    optional: "Opcjonalnie...", emailPlaceholder: "np. adres email (jeśli chcesz odpowiedzi)",
    name: "Twoje imię", nameOptional: "(opcjonalnie)", namePlaceholder: "np. Marek",
    message: "Opisz", messagePlaceholder: "Co znalazłeś? Gdzie? Jak to odtworzyć?...",
    send: "Wyślij zgłoszenie", sent: "Dziękuję! Wiadomość została wysłana.", fail: "Nie udało się wysłać. Spróbuj ponownie.",
    available: "Dostępne pozycje", typeCol: "Typ", nameCol: "Nazwa",
  },
  en: {
    title: "Report a bug", desc: "Found a bug in an ebook or a program? Have an idea for improvement? Write to me — I read every message.",
    catErrorBook: "Ebook bug", catErrorProgram: "Software bug", catSuggestion: "Suggestion", catOther: "Other",
    category: "Category", choose: "Choose...", which: "Which item?",
    optional: "Optional...", emailPlaceholder: "e.g. your email (if you want a reply)",
    name: "Your name", nameOptional: "(optional)", namePlaceholder: "e.g. Mark",
    message: "Message", messagePlaceholder: "What did you find? Where? How to reproduce?...",
    send: "Send report", sent: "Thank you! Your message has been sent.", fail: "Failed to send. Please try again.",
    available: "Available items", typeCol: "Type", nameCol: "Name",
  },
};

export function SugestieForm({ locale }: { locale: string }) {
  const l = locale === "en" ? "en" : "pl";
  const d = txt[l];

  const categories = [d.catErrorBook, d.catErrorProgram, d.catSuggestion, d.catOther];

  const ebookList = Object.values(ebookNames[l]);
  const programList = Object.values(programNames[l]);

  const items = [
    ...ebookList.map((name) => ({ group: "ebook", name })),
    ...programList.map((name) => ({ group: "program", name })),
  ];

  const tableRows = [
    ...ebookList.map((name) => ({ type: "Ebook", name })),
    ...programList.map((name) => ({ type: "Program", name })),
  ];

  const categoryGroup: Record<string, string> = {
    [d.catErrorBook]: "ebook", [d.catErrorProgram]: "program", [d.catSuggestion]: "", [d.catOther]: "",
  };

  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [optional, setOptional] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const group = category ? categoryGroup[category] : "";
  const filtered = group ? items.filter((i) => i.group === group) : items;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const prefix = category.startsWith(d.catErrorBook) || category.startsWith(d.catErrorProgram) ? "Błąd" : "Sugestia";
    const formData = new FormData();
    formData.append("_subject", `${prefix}: ${item || category}`);
    formData.append("Kategoria", category);
    formData.append("Dotyczy", item || "(brak)");
    formData.append("Kontakt", optional || "(brak)");
    formData.append("Imię", name || "(brak)");
    formData.append("Wiadomość", message);
    formData.append("_captcha", "false");
    try {
      await fetch("https://formsubmit.co/ajax/mzdrowy@gmail.com", { method: "POST", body: formData });
      setSent(true);
    } catch { alert(d.fail); }
  };

  return (
    <>
      <p className="eyebrow mono">$ {l === "pl" ? "cat kontakt.txt" : "cat contact.txt"}</p>
      <h2 className="section-title">{d.title}</h2>
      <p className="text-[var(--text-dim)] text-[15px] mb-8" style={{ maxWidth: "64ch" }}>{d.desc}</p>
      {sent ? (
        <div className="help-block">
          <p className="text-[var(--amber)] mono">{d.sent}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="help-block" style={{ padding: "24px" }}>
          <div className="flag">
            <label className="f">{d.category}</label>
            <select value={category} onChange={(e) => { setCategory(e.target.value); setItem(""); }} required
              className="w-full mt-2 px-4 py-3 text-sm bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] outline-none focus:border-[var(--amber)] transition-colors">
              <option value="">{d.choose}</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="flag">
            <label className="f">{d.which}</label>
            <select value={item} onChange={(e) => setItem(e.target.value)}
              className="w-full mt-2 px-4 py-3 text-sm bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] outline-none focus:border-[var(--amber)] transition-colors">
              <option value="">{d.choose}</option>
              {filtered.map((i) => <option key={i.name} value={i.name}>{i.name}</option>)}
            </select>
          </div>
          <div className="flag">
            <label className="f">{d.optional}</label>
            <input type="text" value={optional} onChange={(e) => setOptional(e.target.value)} placeholder={d.emailPlaceholder}
              className="w-full mt-2 px-4 py-3 text-sm bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] outline-none placeholder-[var(--text-dim)] focus:border-[var(--amber)] transition-colors" />
          </div>
          <div className="flag">
            <label className="f">{d.name} <span className="text-[var(--text-dim)] text-xs">{d.nameOptional}</span></label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={d.namePlaceholder}
              className="w-full mt-2 px-4 py-3 text-sm bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] outline-none placeholder-[var(--text-dim)] focus:border-[var(--amber)] transition-colors" />
          </div>
          <div className="flag" style={{ marginBottom: "24px" }}>
            <label className="f">{d.message}</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} placeholder={d.messagePlaceholder}
              className="w-full mt-2 resize-none px-4 py-3 text-sm bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] outline-none placeholder-[var(--text-dim)] focus:border-[var(--amber)] transition-colors" />
          </div>
          <button type="submit" className="w-full px-6 py-3 text-sm font-mono text-[var(--amber)] border border-[var(--amber-dim)] rounded-lg hover:bg-[var(--surface-2)] transition-colors">
            {d.send}
          </button>
        </form>
      )}
      <div className="mt-12">
        <h2 className="font-['Fraunces',serif] font-medium text-[22px] mb-4">{d.available}</h2>
        <div className="listing">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="px-4 py-3 text-left font-mono text-[13px] text-[var(--teal)]">{d.typeCol}</th>
                <th className="px-4 py-3 text-left font-mono text-[13px] text-[var(--teal)]">{d.nameCol}</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((i) => (
                <tr key={i.name} className="border-b border-[var(--border)] last:border-0">
                  <td className="px-4 py-3 text-[var(--text-dim)]">{i.type}</td>
                  <td className="px-4 py-3 text-[var(--text)]">{i.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
