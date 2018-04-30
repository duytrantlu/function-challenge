const addg = require('../exercise2.28');

test('function addg that adds from many invocations, until it sees an empty invocation', () => {
  expect(addg()).toBe(undefined);
  expect(addg(2)()).toBe(2);
  expect(addg(2)(7)()).toBe(9);
  expect(addg(3)(0)(4)()).toBe(7);
});
