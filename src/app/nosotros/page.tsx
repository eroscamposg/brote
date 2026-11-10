import type { Metadata } from "next";
import { Button } from "@/src/components/ui/Button";
import { restaurant } from "@/src/data/restaurant";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "La historia corta de Brote: poke bowls frescos y bebidas de la casa.",
};

export default function NosotrosPage() {
  return (
    <article className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-medium">Nosotros</h1>
      <p className="mt-4 text-lg text-gray-800">
        Brote es un local de poke bowls frescos y bebidas de la casa. El menú es
        corto: ingredientes simples, bowls armados al momento, jugos, chicha y
        emoliente.
      </p>
      <p className="mt-4 text-gray-600">
        Atendemos {restaurant.hoursSummary.toLowerCase()}.
      </p>
      <Button href="/menu" className="mt-6">
        Ver menú
      </Button>
    </article>
  );
}
