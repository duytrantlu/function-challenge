const fromTo = require('./exercise2.15');

function element(arr, fn) {
  let i = 0;
  const l = arr.length;
  return function () {
    if (fn) {
      const index = fn();
      return arr[index];
    }
    const index = fromTo(i, l)();
    i++;
    return arr[index];
  };
}
const ele = element([1, 2, 3, 4]);

console.log(ele()); // 1
console.log(ele()); // 2
console.log(ele()); // 3
console.log(ele()); // 4
console.log(ele()); // undefined
module.exports = element;
