const fromTo = require('./exercise2.15');

function element(arr, fn) {
  return function () {
    const index = fn();
    if (index) {
      return arr[index];
    }
    return undefined;
  };
}
const ele = element([1, 2, 3, 4], fromTo(1, 3));

console.log(ele()); // 2 => index 1
console.log(ele()); // 3 => index 2
console.log(ele()); // undefined => index 3
module.exports = element;
