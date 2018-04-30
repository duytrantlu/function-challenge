const revocable = require('../exercise2.25');

test(' revocable function that takes a binary function, and returns an object containing an invoke function that can invoke the binary function, and a revoke function that disables the invoke function', () => {
  const add = (a, b) => a + b;
  const rev = revocable(add);
  const addRev = rev.invoke;

  expect(addRev(3, 4)).toBe(7);
  rev.revoke();
  expect(addRev(3, 4)).toBe(undefined);
});
