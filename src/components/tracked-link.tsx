"use client";

import type { ReactNode } from "react";

const names: Record<string, string> = {
  "/books/Internet, Domeny i DNS – Podręcznik edukacyjny od podstaw.pdf": "Internet, Domeny i DNS",
  "/books/Pod skórą systemu.pdf": "Pod skórą systemu",
  "/books/Sztuczna inteligencja bez tajemnic.pdf": "Sztuczna inteligencja bez tajemnic",
};

export function TrackedLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const handleClick = () => {
    const key = names[href] ?? href;
    fetch(`https://api.countapi.xyz/hit/mzdrowy/${encodeURIComponent(key)}`).catch(() => {});
    fetch(`https://api.countapi.xyz/hit/mzdrowy/total`).catch(() => {});
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
