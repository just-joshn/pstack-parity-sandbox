import { roundCents } from './money.js';

export function lineTotal(item) {
  return roundCents(item.price * item.qty);
}

export function subtotal(items) {
  return items.reduce((sum, item) => sum + lineTotal(item), 0);
}

export function applyCoupon(amount, percent) {
  const capped = Math.min(percent, 100);
  return roundCents(amount - (amount * capped) / 100); // percent off
}

export function total(items, couponPercent = 0) {
  return applyCoupon(subtotal(items), couponPercent);
}
