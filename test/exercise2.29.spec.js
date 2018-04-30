const { liftg, mul } = require('../exercise2.29');

test('function liftg that takes a binary function and apply it to many invocations', () => {
  expect(liftg(mul)()).toBe(undefined);
  expect(liftg(mul)(3)()).toBe(3);
  expect(liftg(mul)(3)(0)(4)()).toBe(0);
  expect(liftg(mul)(1)(2)(4)(8)()).toBe(64);
});
