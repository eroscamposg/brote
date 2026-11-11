"use client";

import { useEffect } from "react";
import { useCart } from "./hooks/useCart";

export function MobileCartBar() {
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    function apply() {
      document.body.style.paddingBottom =
        media.matches && totalItems > 0 ? "5rem" : "";
    }

    apply();
    media.addEventListener("change", apply);
    return () => {
      media.removeEventListener("change", apply);
      document.body.style.paddingBottom = "";
    };
  }, [totalItems]);

  // If theres no items in the cart, return nothing
  if (totalItems === 0) return null;

  // If there are items, add padding to the main body so custom html doesnt overlaps already set html
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-white p-3 md:hidden">
      <button
        type="button"
        onClick={openCart}
        className="h-12 w-full rounded-full bg-green-700 font-medium text-white"
      >
        Ver carrito ({totalItems})
      </button>
    </div>
  );
}
