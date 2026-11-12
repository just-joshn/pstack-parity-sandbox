import assert from 'node:assert/strict';
import { test } from 'node:test';
import { total } from '../src/cart.js';
import { checkout } from '../src/checkout.js';

const items = [
  { price: 2.5, qty: 2 },
  { price: 1.25, qty: 4 },
];

test('totals the lines', () => {
  assert.equal(total(items), 10);
});

test('takes a percent off', () => {
  assert.equal(total(items, 10), 9);
});

test('checkout formats the amount', () => {
  assert.deepEqual(checkout(items, 10), { amount: 9, label: '$9.00' });
});
