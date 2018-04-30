const fromTo = require('./exercise2.15');

function filter(fn, predicate) {
  return function () {
    let index;
    do {
      index = fn();
    } while (index !== undefined && !predicate(index));
    return index;
  };
}
const fil = filter(fromTo(0, 5), value => value % 2 === 0);
console.log(fil()); // 0
console.log(fil()); // 2
console.log(fil()); // 4
console.log(fil()); // undefined
module.exports = filter;
