"use client";

import { useEffect } from "react";

export function VisitTracker() {
  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/mzdrowy/page-views").catch(() => {});
  }, []);

  return null;
}
