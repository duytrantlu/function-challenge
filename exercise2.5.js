const { add, sub, mul } = require('./exercise2.2');

function liftf(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

const addf = liftf(add);

// console.log(addf(3)(4)); // 7
// console.log(liftf(mul)(5)(6)); // 30
module.exports = liftf;
