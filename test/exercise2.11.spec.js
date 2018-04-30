const composeb = require('../exercise2.11');

test('function composeb that takes two binary functions and returns a function that calls them both', () => {
  const add = (a, b) => a + b;
  const mul = (a, b) => a * b;
  expect(composeb(add, mul)(2, 3, 7)).toBe(35);
});
