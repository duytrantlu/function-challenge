const { add, square, exp } = require('../exercise2.27');

test('exp function to evaluate nested array expressions', () => {
  const nae = [Math.sqrt, [add, [square, 3], [square, 4]]];
  expect(exp(nae)).toBe(5);
});
