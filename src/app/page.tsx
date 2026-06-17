"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function RootPage() {
  useEffect(() => {
    window.location.replace("/pl");
  }, []);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 p-8 text-center">
      <p className="text-zinc-400">Przekierowuję...</p>
      <Link href="/pl" className="text-blue-400 hover:underline">
        Kliknij tutaj jeśli nie nastąpiło automatyczne przekierowanie
      </Link>
    </div>
  );
}
