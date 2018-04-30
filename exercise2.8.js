const { add, sub, mul } = require('./exercise2.2');

function twice(binary) {
  return function (x) {
    return binary(x, x);
  };
}
// add(11, 11); // 22
const doubl = twice(add);
// console.log(doubl(11)); // 22
const square = twice(mul);
// console.log(square(11)); // 121
module.exports = { doubl, square };
