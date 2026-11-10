"use client";

import { SubmitEvent, useState } from "react";
import Link from "next/link";
import { formatPrice } from "@/src/lib/money";
import { OrderRequest, submitOrder } from "@/src/lib/orders";
import { Button } from "@/src/components/ui/Button";
import { useCartDetails } from "./CartProvider";

export function CheckoutForm() {
  const { detailed, subtotal, clear } = useCartDetails();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<{
    orderNumber: string;
    order: OrderRequest;
  } | null>(null);

  async function onSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const order: OrderRequest = {
      customerName: name.trim(),
      phone: phone.trim(),
      note: note.trim(),
      lines: detailed.map((line) => ({
        dishId: line.dishId,
        name: line.dish.name,
        quantity: line.quantity,
        unitPrice: line.dish.price,
      })),
      total: subtotal,
    };

    setSubmitting(true);
    try {
      const result = await submitOrder(order);
      clear();
      setConfirmation({ orderNumber: result.orderNumber, order });
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "No se pudo registrar el pedido.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (confirmation) {
    return (
      <section className="mx-auto w-full max-w-2xl px-4 py-10">
        <h1 className="text-3xl font-medium">Pedido registrado</h1>
        <p className="mt-3 text-gray-700">
          Número {confirmation.orderNumber}. Quedó guardado en este navegador.
          Todavía no llega a la cocina.
        </p>
        <ul className="mt-6 space-y-2">
          {confirmation.order.lines.map((line) => (
            <li key={line.dishId} className="flex justify-between gap-4">
              <span>
                {line.quantity} × {line.name}
              </span>
              <span>{formatPrice(line.unitPrice * line.quantity)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-lg font-medium">
          Total {formatPrice(confirmation.order.total)}
        </p>
        <p className="mt-2 text-sm text-gray-500">
          {confirmation.order.customerName} · {confirmation.order.phone}
        </p>
        {confirmation.order.note && (
          <p className="mt-2 text-sm text-gray-600">
            {confirmation.order.note}
          </p>
        )}
        <Button href="/menu" className="mt-6">
          Volver al menú
        </Button>
      </section>
    );
  }

  if (detailed.length === 0) {
    return (
      <section className="mx-auto w-full max-w-2xl px-4 py-10">
        <h1 className="text-3xl font-medium">Tu pedido</h1>
        <p className="mt-3 text-gray-600">Tu carrito está vacío.</p>
        <Button href="/menu" className="mt-6">
          Ver menú
        </Button>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-2xl px-4 py-10">
      <h1 className="text-3xl font-medium">Tu pedido</h1>
      <p className="mt-2 text-sm text-gray-500">
        Este pedido se confirma en el navegador. El envío al local se conectará
        después.
      </p>

      <ul className="mt-6 space-y-2">
        {detailed.map((line) => (
          <li key={line.dishId} className="flex justify-between gap-4">
            <span>
              {line.quantity} × {line.dish.name}
            </span>
            <span>{formatPrice(line.lineTotal)}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-lg font-medium">Total {formatPrice(subtotal)}</p>

      <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm font-medium">
          Nombre
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="h-11 rounded-md border border-gray-300 px-3 font-normal"
            autoComplete="name"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Teléfono
          <input
            required
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="h-11 rounded-md border border-gray-300 px-3 font-normal"
            autoComplete="tel"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Nota
          <textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            className="min-h-24 rounded-md border border-gray-300 px-3 py-2 font-normal"
          />
        </label>
        {error && <p className="text-sm text-red-700">{error}</p>}
        <Button type="submit" disabled={submitting}>
          {submitting ? "Confirmando..." : "Confirmar pedido"}
        </Button>
        <Link href="/menu" className="text-sm text-green-800 underline">
          Seguir viendo el menú
        </Link>
      </form>
    </section>
  );
}
