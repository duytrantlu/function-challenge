const fibonaccif = require('../exercise2.23');

test('function fibonaccif that returns a generator that will return the next fibonacci number', () => {
  const fib = fibonaccif(0, 1);
  expect(fib()).toBe(0);
  expect(fib()).toBe(1);
  expect(fib()).toBe(1);
  expect(fib()).toBe(2);
  expect(fib()).toBe(3);
  expect(fib()).toBe(5);
});
