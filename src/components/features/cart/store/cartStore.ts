import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { CartLine } from "./types";

export type CartState = {
  lines: CartLine[];
  isOpen: boolean;
};

export type CartActions = {
  addItem: (item: CartLine) => void;
  setQuantity: (dishId: number, quantity: number) => void;
  removeItem: (dishId: number) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
};

export type CartStore = CartState & CartActions;

const STORAGE_KEY = "brote-cart";

export const defaultInitState: CartState = {
  lines: [],
  isOpen: false,
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      ...defaultInitState,
      addItem: (item) => {
        set((state) => {
          if (item.quantity < 1) return state;
          const existing = state.lines.find(
            (line) => line.dishId === item.dishId,
          );

          if (!existing) return { lines: [...state.lines, item] };

          return {
            lines: state.lines.map((line) =>
              line.dishId === item.dishId
                ? { ...line, quantity: line.quantity + item.quantity }
                : line,
            ),
          };
        });
      },
      setQuantity: (dishId, quantity) => {
        set((state) => ({
          lines:
            quantity < 1
              ? state.lines.filter((item) => item.dishId !== dishId)
              : state.lines.map((item) =>
                  item.dishId === dishId ? { ...item, quantity } : item,
                ),
        }));
      },
      removeItem: (dishId) => {
        set((state) => ({
          lines: state.lines.filter((item) => item.dishId !== dishId),
        }));
      },
      clear: () => {
        set({ lines: [] });
      },
      openCart: () => {
        set({ isOpen: true });
      },
      closeCart: () => {
        set({ isOpen: false });
      },
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ lines: state.lines }),
      skipHydration: true,
    },
  ),
);
