const filter = require('../exercise2.19');
const fromTo = require('../exercise2.15');

test('a filter function that takes a generator and a predicate and produces a generator that produces only the values approved by the predicate', () => {
  const fil = filter(fromTo(0, 5), value => value % 2 === 0);
  expect(fil()).toBe(0);
  expect(fil()).toBe(2);
  expect(fil()).toBe(4);
  expect(fil()).toBe(undefined);
});
