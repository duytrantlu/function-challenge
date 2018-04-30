const arrayg = require('../exercise2.30');

test('function arrayg that will build an arry from many invocations', () => {
  expect(JSON.stringify(arrayg())).toBe(JSON.stringify([]));
  expect(JSON.stringify(arrayg(3)(4)())).toBe(JSON.stringify([3, 4]));
  expect(JSON.stringify(arrayg(3)(4)(5)())).toBe(JSON.stringify([3, 4, 5]));
});
