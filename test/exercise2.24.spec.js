const counter = require('../exercise2.24');

test('counter function that returns an object containing 2 functions that implement an up/down counter, hiding the counter', () => {
  const obj = counter(10);
  const up = obj.up;
  const down = obj.down;
  expect(up()).toBe(11);
  expect(down()).toBe(10);
  expect(down()).toBe(9);
  expect(up()).toBe(10);
});
