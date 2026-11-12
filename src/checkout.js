import { total } from './cart.js';
import { formatMoney } from './money.js';

export function checkout(items, couponPercent = 0) {
  const amount = total(items, couponPercent);
  return { amount, label: formatMoney(amount) };
}
