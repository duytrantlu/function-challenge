const { add, sub, mul } = require('./exercise2.2');

function revocable(fn) {
  return {
    invoke(a, b) {
      return typeof fn === 'function' ? fn(a, b) : undefined;
    },
    revoke() {
      fn = undefined;
    },
  };
}

const rev = revocable(add);
const addRev = rev.invoke;

console.log(addRev(3, 4)); // 7
rev.revoke();
console.log(addRev(3, 4)); // undefined
module.exports = revocable;
