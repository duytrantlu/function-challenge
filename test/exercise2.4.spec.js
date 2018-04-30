const identify = require('../exercise2.4');

test('function addf that adds from 2 invocations', () => {
  expect(identify(4)(3)).toBe(7);
});
