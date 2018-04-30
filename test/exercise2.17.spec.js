const fromTo = require('../exercise2.15');
const element = require('../exercise2.17');

test('element function so that the generator argument is optionl. If a generator is not provided, then each of the elements of the array will be produced', () => {
  const ele = element([1, 2, 3, 4]);
  expect(ele()).toBe(1);
  expect(ele()).toBe(2);
  expect(ele()).toBe(3);
  expect(ele()).toBe(4);
  expect(ele()).toBe(undefined);
});
