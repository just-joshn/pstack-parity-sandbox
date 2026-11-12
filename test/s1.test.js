import assert from 'node:assert/strict';
import { test } from 'node:test';
import { one } from '../src/s1.js';

test('one returns 1', () => assert.equal(one(), 1));
