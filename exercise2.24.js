function counter(n) {
  return {
    up() {
      return ++n;
    },
    down() {
      return --n;
    },
  };
}

const obj = counter(10);
const up = obj.up;
const down = obj.down;

console.log(up()); // 11
console.log(down()); // 10
console.log(down()); // 9
console.log(up()); // 10
module.exports = counter;
