import { ReactNode } from "react";
import { CartHydration } from "./CartHydration";

export function CartProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <CartHydration />
      {children}
    </>
  );
}
