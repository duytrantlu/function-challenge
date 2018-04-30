const from = require('../exercise2.13');

test('a from function that produces a generator that will produce a series of values', () => {
  const index = from(0);
  expect(index()).toBe(0);
  expect(index()).toBe(1);
  expect(index()).toBe(2);
});
