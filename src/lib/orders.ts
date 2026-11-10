export type OrderLine = {
  dishId: number;
  name: string;
  quantity: number;
  unitPrice: number;
};

export type OrderRequest = {
  customerName: string;
  phone: string;
  note: string;
  lines: OrderLine[];
  total: number;
};

export type OrderConfirmation = {
  orderNumber: string;
};

export async function submitOrder(
  order: OrderRequest,
): Promise<OrderConfirmation> {
  if (!order.customerName.trim() || !order.phone.trim()) {
    throw new Error("Nombre y teléfono son obligatorios.");
  }

  if (order.lines.length === 0) {
    throw new Error("El carrito está vacío.");
  }

  // Replace this body with a POST to the Node API when DynamoDB is ready.
  const orderNumber = `BR-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  return { orderNumber };
}
