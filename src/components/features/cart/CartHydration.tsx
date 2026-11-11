"use client";
import { useEffect } from "react";
import { useCartStore } from "./store/cartStore";
export function CartHydration() {
  useEffect(() => {
    void useCartStore.persist.rehydrate();
  }, []);

  return null;
}
