const identifyf = require('../exercise2.3');

test('function identifyf that takes an argument and returns a function that returns that argument', () => {
  const four = identifyf(4);
  expect(four()).toBe(4);
});
