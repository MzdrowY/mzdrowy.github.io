import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { VisitTracker } from "@/components/visit-tracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MzdrowY — ebooki i programy",
    template: "%s — MzdrowY",
  },
  description: "Piszę o technologii tak, żeby miało to sens — bez żargonu, bez skrótów myślowych. Darmowe ebooki o internecie, terminalu i AI oraz autorskie narzędzia.",
  metadataBase: new URL("https://mzdrowy.github.io"),
  openGraph: {
    title: "MzdrowY — ebooki i programy",
    description: "Piszę o technologii tak, żeby miało to sens — bez żargonu, bez skrótów myślowych. Darmowe ebooki o internecie, terminalu i AI oraz autorskie narzędzia.",
    url: "https://mzdrowy.github.io",
    siteName: "MzdrowY",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MzdrowY — ebooki i programy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MzdrowY — ebooki i programy",
    description: "Piszę o technologii tak, żeby miało to sens — bez żargonu, bez skrótów myślowych. Darmowe ebooki o internecie, terminalu i AI oraz autorskie narzędzia.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col bg-zinc-950 text-zinc-100 font-sans">
        <Nav />
        <VisitTracker />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-400">
          <p>&copy; {new Date().getFullYear()} MzdrowY</p>
          <p className="mt-1"><a href="mailto:mzdrowy@gmail.com" className="hover:text-zinc-300 transition-colors">mzdrowy@gmail.com</a></p>
          <p className="mt-2"><a href="/admin" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">Panel</a></p>
        </footer>
      </body>
    </html>
  );
}
