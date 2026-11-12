import assert from 'node:assert/strict';
import { test } from 'node:test';
import { two } from '../src/s2.js';

test('two returns 2', () => assert.equal(two(), 2));
