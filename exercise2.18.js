const fromTo = require('./exercise2.15');

function collect(fn, arr) {
  return function () {
    const index = fn();
    if (index !== undefined) {
      arr.push(index);
    }
    return index;
  };
}
const array = [];
const col = collect(fromTo(0, 2), array);
console.log(col()); // 0
console.log(col()); // 1
console.log(col()); // undefined
console.log(array); // [0, 1]
module.exports = collect;
