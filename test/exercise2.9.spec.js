const bus = require('../exercise2.9');

test('function resever, that reverses the arguments of a binary function', () => {
  expect(bus(3, 2)).toBe(-1);
});
