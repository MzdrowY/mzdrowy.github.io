import type { Metadata } from "next";
import RootRedirectClient from "./root-redirect-client";

export const metadata: Metadata = {
  title: "MzdrowY — ebooki i programy",
  description: "Piszę o technologii tak, żeby miało to sens — bez żargonu, bez skrótów myślowych. Darmowe ebooki o internecie, terminalu i AI oraz autorskie narzędzia.",
  alternates: { canonical: "/pl" },
  robots: { index: true, follow: true },
};

export default function RootPage() {
  return <RootRedirectClient />;
}
