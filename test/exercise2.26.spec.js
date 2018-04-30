const { mul, exp } = require('../exercise2.26');

test('function exp that evaluates simple array expressions', () => {
  const sae = [mul, 5, 11];
  expect(exp(sae)).toBe(55);
  expect(exp(42)).toBe(42);
});
