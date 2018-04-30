const gensymf = require('../exercise2.21');

test('function gensymf that makes a function that generatres unique symbols', () => {
  const genG = gensymf('G');
  const genH = gensymf('H');
  expect(genG()).toBe('G1');
  expect(genG()).toBe('G2');
  expect(genH()).toBe('H1');
  expect(genH()).toBe('H2');
});
