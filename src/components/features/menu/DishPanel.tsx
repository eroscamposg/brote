"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { Dish } from "@/src/models/poke";
import { formatPrice } from "@/src/lib/money";
import { Button } from "@/src/components/ui/Button";
import { useCart } from "../cart/hooks/useCart";

export function DishPanel({
  dish,
  onClose,
}: {
  dish: Dish | null;
  onClose: () => void;
}) {
  if (!dish) return null;
  return <DishPanelContent key={dish.id} dish={dish} onClose={onClose} />;
}

function DishPanelContent({
  dish,
  onClose,
}: {
  dish: Dish;
  onClose: () => void;
}) {
  const { addItem, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [dish, onClose]);

  function addToCart() {
    if (!dish.available) return;
    addItem(dish.id, quantity);
    onClose();
    openCart();
  }

  return (
    <div className="fixed inset-0 z-80">
      <button
        type="button"
        aria-label="Cerrar plato"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dish-panel-title"
        className="absolute inset-x-0 bottom-0 max-h-[90vh] overflow-y-auto rounded-t-3xl bg-white p-5 sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:w-full sm:max-w-lg sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-3xl"
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <h2 id="dish-panel-title" className="text-2xl font-medium">
            {dish.name}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="cursor-pointer"
          >
            <HiXMark size={28} />
          </button>
        </div>

        <div className="relative h-48 overflow-hidden rounded-xl">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover"
            sizes="(min-width: 640px) 32rem, 100vw"
          />
        </div>

        <p className="mt-4 text-gray-600">{dish.description}</p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-700">
          {dish.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <p className="mt-4 text-xl font-medium">{formatPrice(dish.price)}</p>

        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            className="h-10 w-10 rounded-full border border-gray-300"
            aria-label="Disminuir cantidad"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
          >
            −
          </button>
          <span className="w-6 text-center">{quantity}</span>
          <button
            type="button"
            className="h-10 w-10 rounded-full border border-gray-300"
            aria-label="Aumentar cantidad"
            onClick={() => setQuantity((current) => current + 1)}
          >
            +
          </button>
        </div>

        <Button
          className="mt-6 w-full"
          onClick={addToCart}
          disabled={!dish.available}
        >
          {dish.available ? "Agregar al carrito" : "No disponible"}
        </Button>
      </div>
    </div>
  );
}
