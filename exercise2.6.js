const { add, sub, mul } = require('./exercise2.2');

function curry(fn, x) {
  return function (y) {
    return fn(x, y);
  };
}

const add3 = curry(add, 3);
console.log(add3(4)); // 7
console.log(curry(mul, 5)(6)); // 30
module.exports = curry;
