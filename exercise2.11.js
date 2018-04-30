const { add, sub, mul } = require('./exercise2.2');

function composeb() {
  return function (a, b, c) {
    return mul(add(a, b), c);
  };
}

console.log(composeb(add, mul)(2, 3, 7)); // 35
// add(2, 3) => 5
// mul(5, 7) => 35
module.exports = composeb;
