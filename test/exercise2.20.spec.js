const fromTo = require('../exercise2.15');
const concat = require('../exercise2.20');

test('concat function that takes 2 generator and produces a generator that combines the sequences', () => {
  const con = concat(fromTo(0, 3), fromTo(0, 2));
  expect(con()).toBe(0);
  expect(con()).toBe(1);
  expect(con()).toBe(2);
  expect(con()).toBe(0);
  expect(con()).toBe(1);
  expect(con()).toBe(undefined);
});
