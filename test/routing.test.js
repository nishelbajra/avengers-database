const test = require('node:test');
const assert = require('node:assert/strict');

const { characters, findCharacterById } = require('../data');

test('findCharacterById should resolve slug-based character IDs', () => {
  const character = findCharacterById('iron-man');

  assert.ok(character);
  assert.equal(character.name, 'Iron Man');
});

test('findCharacterById should return undefined for unknown IDs', () => {
  assert.equal(findCharacterById('missing-character'), undefined);
});
