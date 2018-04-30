const limit = require('../exercise2.12');

const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;

test('a limit function that allows a binary function to be called a limited number of times', () => {
  const addLimited = limit(add, 1);
  expect(addLimited(3, 5)).toBe(8);
});
test('a limit function that allows a binary function to be called a limited number of times', () => {
  const addLimited = limit(add, 0);
  expect(addLimited(3, 5)).toBe(undefined);
});
