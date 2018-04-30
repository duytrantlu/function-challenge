const to = require('../exercise2.14');
const from = require('../exercise2.13');

test('a to function that takes a generator and an end value, and returns another generator that will produce numbers up to that limit', () => {
  const index = to(from(1), 3);
  expect(index()).toBe(1);
  expect(index()).toBe(2);
  expect(index()).toBe(undefined);
  expect(index()).toBe(undefined);
});
