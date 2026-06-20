import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MzdrowY — ebooki i programy",
  description: "Piszę o technologii tak, żeby miało to sens — bez żargonu, bez skrótów myślowych. Darmowe ebooki o internecie, terminalu i AI oraz autorskie narzędzia.",
  alternates: { canonical: "/pl" },
  robots: { index: true, follow: true },
  other: {
    "http-equiv": "refresh",
    content: "0;url=/pl",
  },
};

export default function RootPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 p-8 text-center">
      <p className="text-zinc-400">Przekierowuję...</p>
      <a href="/pl" className="text-blue-400 hover:underline">
        Kliknij tutaj jeśli nie nastąpiło automatyczne przekierowanie
      </a>
    </div>
  );
}
