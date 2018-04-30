const collect = require('../exercise2.18');
const fromTo = require('../exercise2.15');

test('a collect function that takes a generator and array and produces a function that will collect the results in the array', () => {
  const array = [];
  const col = collect(fromTo(0, 2), array);
  expect(col()).toBe(0);
  expect(col()).toBe(1);
  expect(col()).toBe(undefined);
  expect(array[0]).toBe(0);
  expect(array[1]).toBe(1);
});
