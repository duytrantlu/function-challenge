const curry = require('../exercise2.6');

test('function curry that takes a binary function and an argument, and returns a function that can take a second arguments', () => {
  const add = (a, b) => a + b;
  const add3 = curry(add, 3);
  expect(add3(4)).toBe(7);
});
test('function curry that takes a binary function and an argument, and returns a function that can take a second arguments', () => {
  const sub = (a, b) => a - b;
  const sub3 = curry(sub, 3);
  expect(sub3(0)).toBe(3);
});
test('function curry that takes a binary function and an argument, and returns a function that can take a second arguments', () => {
  const mul = (a, b) => a * b;
  const mul3 = curry(mul, 3);
  expect(mul3(3)).toBe(9);
});
