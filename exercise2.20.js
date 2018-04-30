const fromTo = require('./exercise2.15');

function concat(fn1, fn2) {
  return function () {
    let index = fn1();
    if (index === undefined) {
      index = fn2();
    }
    return index;
  };
}

const con = concat(fromTo(0, 3), fromTo(0, 2));
console.log(con()); // 0
console.log(con()); // 1
console.log(con()); // 2
console.log(con()); // 0
console.log(con()); // 1
console.log(con()); // undefined
module.exports = concat;
