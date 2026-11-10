import type { Metadata } from "next";
import { CheckoutForm } from "@/src/components/features/cart/CheckoutForm";

export const metadata: Metadata = {
  title: "Pedido",
  description: "Confirma tu pedido de Brote.",
};

export default function PedidoPage() {
  return <CheckoutForm />;
}
