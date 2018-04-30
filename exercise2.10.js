const { doubl, square } = require('./exercise2.8');

function composeu(fn1, fn2) {
  return function (x) {
    return fn2(fn1(x));
  };
}

console.log(composeu(doubl, square)(5)); // 100
// doubl(5) => 5 + 5 = 10
// square(10) => 100
module.exports = composeu;
