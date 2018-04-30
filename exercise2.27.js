const add = (a, b) => a + b;
const square = x => x * x;
const nae = [Math.sqrt, [add, [square, 3], [square, 4]]];
const exp = (value) => {
  const newArr = [];
  if (Array.isArray(value)) {
    function filler(value) {
      value.filter((e) => {
        if (!Array.isArray(e)) {
          newArr.push(e);
        } else {
          filler(e);
        }
      });
    }
    filler(value);
  }
  const rs = newArr[0](newArr[1](newArr[2](newArr[3]), newArr[4](newArr[5])));
  return rs;
};
console.log(exp(nae)); // 5
module.exports = { add, square, exp };
