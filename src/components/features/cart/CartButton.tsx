"use client";

import { HiShoppingCart } from "react-icons/hi2";
import { useCart } from "./CartProvider";

export function CartButton() {
  const { totalItems, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Carrito, ${totalItems} productos`}
      className="relative flex cursor-pointer items-center justify-center"
    >
      <HiShoppingCart size={24} />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-green-700 px-1 text-xs text-white">
          {totalItems}
        </span>
      )}
    </button>
  );
}
