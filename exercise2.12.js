const { add, sub, mul } = require('./exercise2.2');

function limit(fn, time) {
  let count = 0;
  return function (a, b) {
    count++;
    if (count > time) {
      return undefined;
    }
    return fn(a, b);
  };
}

const addLimited = limit(add, 1);
console.log(addLimited(3, 4)); // 7
console.log(addLimited(3, 5)); // undefined
console.log(addLimited(4, 5)); // undefined
module.exports = limit;
