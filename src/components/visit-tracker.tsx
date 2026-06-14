"use client";

import { useEffect } from "react";

export function VisitTracker() {
  useEffect(() => {
    fetch("https://countapi.mileshilliard.com/api/v1/hit/mzdrowy-page-views").catch(() => {});
  }, []);

  return null;
}
