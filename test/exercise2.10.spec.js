const composeu = require('../exercise2.10');
const { doubl, square } = require('../exercise2.8');

test('function composeu that takes two unary functions and returns a unary function that calls them both', () => {
  expect(composeu(doubl, square)(5)).toBe(100);
});
