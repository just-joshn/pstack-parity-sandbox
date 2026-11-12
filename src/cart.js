export function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}

export function total(items, couponPercent = 0) {
  const amount = subtotal(items);
  return amount - (amount * couponPercent) / 100;
}
