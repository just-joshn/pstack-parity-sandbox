import assert from 'node:assert/strict';
import { test } from 'node:test';
import { shout } from '../src/shout.js';

test('shout is the loud greeting', () => assert.equal(shout('ada'), 'HELLO ADA'));
