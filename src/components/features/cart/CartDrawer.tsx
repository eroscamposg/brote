"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { HiXMark } from "react-icons/hi2";
import { formatPrice } from "@/src/lib/money";
import { Button } from "@/src/components/ui/Button";
import { useCartDetails } from "./CartProvider";

export function CartDrawer() {
  const { isOpen, closeCart, detailed, subtotal, setQuantity, removeItem } =
    useCartDetails();
  const router = useRouter();

  useEffect(() => {
    if (!isOpen) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") closeCart();
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <button
        type="button"
        aria-label="Cerrar carrito"
        className="absolute inset-0 bg-black/50"
        onClick={closeCart}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className="absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-white shadow-xl"
      >
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h2 id="cart-title" className="text-xl font-medium">
            Carrito
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="cursor-pointer"
          >
            <HiXMark size={28} />
          </button>
        </div>

        {detailed.length === 0 ? (
          <div className="flex flex-1 flex-col items-start gap-4 px-5 py-8">
            <p className="text-gray-600">Tu carrito está vacío.</p>
            <Button href="/menu" onClick={closeCart}>
              Ver menú
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
              {detailed.map((line) => (
                <li
                  key={line.dishId}
                  className="flex items-start justify-between gap-3"
                >
                  <div>
                    <p className="font-medium text-gray-900">
                      {line.dish.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {formatPrice(line.dish.price)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        className="h-8 w-8 rounded-full border border-gray-300"
                        aria-label={`Quitar uno de ${line.dish.name}`}
                        onClick={() =>
                          setQuantity(line.dishId, line.quantity - 1)
                        }
                      >
                        −
                      </button>
                      <span className="w-6 text-center">{line.quantity}</span>
                      <button
                        type="button"
                        className="h-8 w-8 rounded-full border border-gray-300"
                        aria-label={`Agregar uno de ${line.dish.name}`}
                        onClick={() =>
                          setQuantity(line.dishId, line.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatPrice(line.lineTotal)}</p>
                    <button
                      type="button"
                      className="mt-2 text-sm text-gray-500 underline"
                      onClick={() => removeItem(line.dishId)}
                    >
                      Quitar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t px-5 py-4">
              <div className="mb-4 flex items-center justify-between text-lg">
                <span>Total</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  closeCart();
                  router.push("/pedido");
                }}
                className="inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-md bg-green-700/90 font-medium text-white hover:bg-green-700"
              >
                Ir a pagar
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
