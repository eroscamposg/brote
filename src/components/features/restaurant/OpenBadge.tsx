"use client";

import { isOpenNow } from "@/src/data/restaurant";

export function OpenBadge() {
  const open = isOpenNow();

  return (
    <span
      suppressHydrationWarning
      className={`rounded-full px-3 py-1 text-sm ${
        open ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
      }`}
    >
      {open ? "Abierto ahora" : "Cerrado ahora"}
    </span>
  );
}
