import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

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
    default: "MzdrowY — książki i programy",
    template: "%s — MzdrowY",
  },
  description: "Strona MzdrowY — trzy książki: Internet Domeny i DNS, Pod skórą systemu, Sztuczna inteligencja bez tajemnic oraz autorskie programy.",
  metadataBase: new URL("https://mzdrowy.github.io"),
  openGraph: {
    title: "MzdrowY — książki i programy",
    description: "Piszę, gotuję albo koduję. Trzy książki i autorskie programy.",
    url: "https://mzdrowy.github.io",
    siteName: "MzdrowY",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "MzdrowY — książki i programy",
    description: "Piszę, gotuję albo koduję. Trzy książki i autorskie programy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <p>&copy; {new Date().getFullYear()} Moja Strona</p>
          <p className="mt-1"><a href="mailto:mzdrowy@gmail.com" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">mzdrowy@gmail.com</a></p>
        </footer>
      </body>
    </html>
  );
}
