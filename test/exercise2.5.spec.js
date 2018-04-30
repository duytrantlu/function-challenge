const liftf = require('../exercise2.5');

test('function liftf that takes a binary function, and makes it callable with 2 invocations', () => {
  const add = (a, b) => a + b;
  const addf = liftf(add);
  expect(addf(3)(4)).toBe(7);
});
test('function liftf that takes a binary function, and makes it callable with 2 invocations', () => {
  const sub = (a, b) => a - b;
  const addf = liftf(sub);
  expect(addf(3)(4)).toBe(-1);
});
test('function liftf that takes a binary function, and makes it callable with 2 invocations', () => {
  const mul = (a, b) => a * b;
  expect(liftf(mul)(3)(4)).toBe(12);
});
