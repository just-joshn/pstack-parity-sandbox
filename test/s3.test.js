import assert from 'node:assert/strict';
import { test } from 'node:test';
import { three } from '../src/s3.js';

test('three returns 3', () => assert.equal(three(), 3));
