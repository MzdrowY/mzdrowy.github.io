"use client";

import type { ReactNode } from "react";

const names: Record<string, string> = {
  "/books/Internet, Domeny i DNS – Podręcznik edukacyjny od podstaw.pdf": "Internet, Domeny i DNS",
  "/books/Pod skórą systemu.pdf": "Pod skórą systemu",
  "/books/Sztuczna inteligencja bez tajemnic.pdf": "Sztuczna inteligencja bez tajemnic",
};

export function TrackedLink({ href, children, className, download }: { href: string; children: ReactNode; className?: string; download?: boolean }) {
  const handleClick = () => {
    const key = names[href] ?? href;
    fetch(`https://api.countapi.xyz/hit/mzdrowy/${encodeURIComponent(key)}`).catch(() => {});
    fetch(`https://api.countapi.xyz/hit/mzdrowy/total`).catch(() => {});
  };

  return (
    <a href={href} target={download ? undefined : "_blank"} rel={download ? undefined : "noopener noreferrer"} className={className} onClick={handleClick} download={download || undefined}>
      {children}
    </a>
  );
}
