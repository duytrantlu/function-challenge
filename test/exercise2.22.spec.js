const { gensymff, unary } = require('../exercise2.22');

test('function gensymff that takes a unary function and a seed and returns a gensymf', () => {
  const gensymf = gensymff(unary, 0);
  const genG = gensymf('G');
  const genH = gensymf('H');
  expect(genG()).toBe('G1');
  expect(genG()).toBe('G2');
  expect(genH()).toBe('H1');
  expect(genH()).toBe('H2');
});
