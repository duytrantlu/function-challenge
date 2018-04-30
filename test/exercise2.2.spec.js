const { add, sub, mul } = require('../exercise2.2');

test('function add should return sum of their', () => {
  expect(add(1, 2)).toBe(3);
});
test('function add should return sub of their', () => {
  expect(sub(3, 2)).toBe(1);
});
test('function add should return mul of their', () => {
  expect(mul(4, 2)).toBe(8);
});
