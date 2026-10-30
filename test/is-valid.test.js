import test from 'node:test';
import assert from 'node:assert/strict';

import isValid from '../src/index.js';

test('validates strings', () => {
  assert.equal(isValid('Hello', { type: 'string' }), true);
  assert.equal(isValid(123, { type: 'string' }), false);
});

test('validates non-empty strings', () => {
  assert.equal(isValid('Hello', { type: 'non-empty-string' }), true);
  assert.equal(isValid('', { type: 'non-empty-string' }), false);
});

test('validates objects', () => {
  assert.equal(isValid({}, { type: 'object' }), true);
  assert.equal(isValid([], { type: 'object' }), true);
  assert.equal(isValid(null, { type: 'object' }), false);
  assert.equal(
    isValid(null, { type: 'object', allowNull: true }),
    true,
  );
});

test('returns false for invalid rules', () => {
  assert.equal(isValid('Hello', null), false);
  assert.equal(isValid('Hello', {}), false);
  assert.equal(isValid('Hello', { type: 123 }), false);
  assert.equal(isValid('Hello', { type: 'unknown' }), false);
});