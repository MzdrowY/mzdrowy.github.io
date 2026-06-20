"use client";

import { useEffect } from "react";

export default function RootRedirectClient() {
  useEffect(() => {
    window.location.replace("/pl");
  }, []);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 p-8 text-center">
      <p className="text-zinc-400">Przekierowuję...</p>
      <a href="/pl" className="text-blue-400 hover:underline">
        Kliknij tutaj jeśli nie nastąpiło automatyczne przekierowanie
      </a>
    </div>
  );
}
