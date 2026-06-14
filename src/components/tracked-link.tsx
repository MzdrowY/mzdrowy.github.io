"use client";

import type { ReactNode } from "react";

const names: Record<string, string> = {
  "/books/Internet, Domeny i DNS – Podręcznik edukacyjny od podstaw.pdf": "internet-domeny-dns",
  "/books/Pod skórą systemu.pdf": "pod-skora-systemu",
  "/books/Sztuczna inteligencja bez tajemnic.pdf": "sztuczna-inteligencja",
};

export function TrackedLink({ href, children, className, download }: { href: string; children: ReactNode; className?: string; download?: boolean }) {
  const handleClick = () => {
    const key = names[href] ?? href;
    fetch(`https://countapi.mileshilliard.com/api/v1/hit/mzdrowy-ebook-${key}`).catch(() => {});
    fetch(`https://countapi.mileshilliard.com/api/v1/hit/mzdrowy-total-downloads`).catch(() => {});
  };

  return (
    <a href={href} target={download ? undefined : "_blank"} rel={download ? undefined : "noopener noreferrer"} className={className} onClick={handleClick} download={download || undefined}>
      {children}
    </a>
  );
}
