const { add, sub, mul } = require('./exercise2.2');

function reverse(fn) {
  return function (a, b) {
    a += b;
    b = a - b;
    a -= b;
    return fn(a, b);
  };
}
const bus = reverse(sub);
console.log(bus(3, 2)); // -1
module.exports = bus;
