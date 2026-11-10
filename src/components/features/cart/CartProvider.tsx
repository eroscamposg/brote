"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { getDishById } from "@/src/data/menu";

const STORAGE_KEY = "brote-cart";
const EMPTY_LINES: CartLine[] = [];

export type CartLine = {
  dishId: number;
  quantity: number;
};

let lines: CartLine[] = EMPTY_LINES;
let loaded = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function isCartLine(value: unknown): value is CartLine {
  if (!value || typeof value !== "object") return false;
  const line = value as CartLine;
  return (
    typeof line.dishId === "number" &&
    typeof line.quantity === "number" &&
    line.quantity > 0
  );
}

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return;
    lines = parsed.filter(isCartLine);
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function persist(next: CartLine[]) {
  lines = next;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (!loaded) {
    queueMicrotask(() => {
      load();
      emit();
    });
  }
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return lines;
}

function getServerSnapshot() {
  return EMPTY_LINES;
}

type CartContextValue = {
  lines: CartLine[];
  isOpen: boolean;
  totalItems: number;
  addItem: (dishId: number, quantity: number) => void;
  setQuantity: (dishId: number, quantity: number) => void;
  removeItem: (dishId: number) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const storedLines = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((dishId: number, quantity: number) => {
    if (quantity < 1) return;
    load();
    const existing = lines.find((line) => line.dishId === dishId);
    const next = existing
      ? lines.map((line) =>
          line.dishId === dishId
            ? { ...line, quantity: line.quantity + quantity }
            : line,
        )
      : [...lines, { dishId, quantity }];
    persist(next);
  }, []);

  const setQuantity = useCallback((dishId: number, quantity: number) => {
    load();
    const next =
      quantity < 1
        ? lines.filter((line) => line.dishId !== dishId)
        : lines.map((line) =>
            line.dishId === dishId ? { ...line, quantity } : line,
          );
    persist(next);
  }, []);

  const removeItem = useCallback((dishId: number) => {
    load();
    persist(lines.filter((line) => line.dishId !== dishId));
  }, []);

  const clear = useCallback(() => {
    load();
    persist([]);
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const totalItems = storedLines.reduce((sum, line) => sum + line.quantity, 0);

  const value = useMemo(
    () => ({
      lines: storedLines,
      isOpen,
      totalItems,
      addItem,
      setQuantity,
      removeItem,
      clear,
      openCart,
      closeCart,
    }),
    [
      storedLines,
      isOpen,
      totalItems,
      addItem,
      setQuantity,
      removeItem,
      clear,
      openCart,
      closeCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) {
    throw new Error("useCart must be used within CartProvider");
  }
  return value;
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
