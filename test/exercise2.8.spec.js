const { doubl, square } = require('../exercise2.8');

test('function twice that takes a binary function and returns a unary function that passes its argument to the binary function twice', () => {
  expect(doubl(11)).toBe(22);
});
test('function twice that takes a binary function and returns a unary function that passes its argument to the binary function twice', () => {
  expect(square(11)).toBe(121);
});
