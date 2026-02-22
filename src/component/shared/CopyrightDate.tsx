"use client";

import { useEffect, useState } from "react";

export default function CopyrightDate() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <span>{year || "2026"}</span>;
}
