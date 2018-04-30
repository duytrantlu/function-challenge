const fromTo = require('../exercise2.15');
const element = require('../exercise2.16');

test('an element function that takes an array and a generator and returns a generator that will produce elements from the array', () => {
  const ele = element([1, 2, 3, 4], fromTo(1, 3));
  expect(ele()).toBe(2);
  expect(ele()).toBe(3);
  expect(ele()).toBe(undefined);
});
