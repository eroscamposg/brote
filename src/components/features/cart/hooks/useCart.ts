"use client";

import { getDishById } from "@/src/data/menu";
import { useCartStore } from "@/src/components/features/cart/store/cartStore";

export function useCart() {
  const lines = useCartStore((state) => state.lines);
  const isOpen = useCartStore((state) => state.isOpen);

  const addItemToStore = useCartStore((state) => state.addItem);
  const setQuantity = useCartStore((state) => state.setQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const clear = useCartStore((state) => state.clear);

  const openCart = useCartStore((state) => state.openCart);
  const closeCart = useCartStore((state) => state.closeCart);

  const totalItems = lines.reduce((sum, line) => sum + line.quantity, 0);

  function addItem(dishId: number, quantity: number) {
    addItemToStore({ dishId, quantity });
  }

  return {
    lines,
    isOpen,
    totalItems,
    addItem,
    setQuantity,
    removeItem,
    clear,
    openCart,
    closeCart,
  };
}

export function useCartDetails() {
  const cart = useCart();

  const detailed = cart.lines.flatMap((line) => {
    const dish = getDishById(line.dishId);
    if (!dish) return [];
    return [{ ...line, dish, lineTotal: dish.price * line.quantity }];
  });

  const subtotal = detailed.reduce((sum, line) => sum + line.lineTotal, 0);

  return { ...cart, detailed, subtotal };
}
