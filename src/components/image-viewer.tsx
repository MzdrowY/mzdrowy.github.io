"use client";

import { useState } from "react";
import Image from "next/image";

export function ImageViewer({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mb-8 cursor-pointer" onClick={() => setOpen(true)}>
        <Image src={src} alt={alt} width={800} height={450} className="w-full rounded-xl" unoptimized />
      </div>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
        >
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={675}
            className="max-h-full max-w-full rounded-lg"
            onClick={(e) => e.stopPropagation()}
            unoptimized
          />
        </div>
      )}
    </>
  );
}
