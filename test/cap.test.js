import assert from 'node:assert/strict';
import { test } from 'node:test';
import { applyCoupon } from '../src/cart.js';

test('a coupon over 100 percent never pays the customer', () => assert.equal(applyCoupon(10, 150), 0));
