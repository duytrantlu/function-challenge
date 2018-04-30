const { inc, inc1 } = require('../exercise2.7');

test('create the inc function', () => {
  const add = (a, b) => a + b;
  expect(inc(5)).toBe(6);
});
test('create the inc function', () => {
  const add = (a, b) => a + b;
  expect(inc1(inc(5))).toBe(7);
});
