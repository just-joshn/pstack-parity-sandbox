import { roundCents } from './money.js';

export function lineTotal(item) {
  return roundCents(item.price * item.qty);
}

export function subtotal(items) {
  return items.reduce((sum, item) => sum + lineTotal(item), 0);
}

export function applyCoupon(amount, percent) {
  return roundCents(amount - (amount * percent) / 100);
}

export function total(items, couponPercent = 0) {
  return applyCoupon(subtotal(items), couponPercent);
}
