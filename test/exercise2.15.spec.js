const fromTo = require('../exercise2.15');

test('a fromTo function that return a generator that produce values in a range', () => {
  const index = fromTo(0, 3);
  expect(index()).toBe(0);
  expect(index()).toBe(1);
  expect(index()).toBe(2);
  expect(index()).toBe(undefined);
});
