export function roundCents(value) {
  return Math.round(value * 100) / 100;
}

export function formatMoney(value) {
  return `$${roundCents(value).toFixed(2)}`;
}
