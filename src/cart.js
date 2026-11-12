const round = (value) => Math.round(value * 100) / 100;

export function subtotal(items) {
  return items.reduce((sum, item) => sum + round(item.price * item.qty), 0);
}

export function total(items, couponPercent = 0) {
  const amount = subtotal(items);
  return round(amount - (amount * couponPercent) / 100);
}
