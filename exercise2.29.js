const liftg = mul =>
  function firts(value) {
    if (value === undefined) {
      return undefined;
    }
    return function more(next) {
      if (next === undefined) {
        return value;
      }
      return firts(mul(value, next));
    };
  };
const mul = (a, b) => a * b;
console.log(liftg(mul)(1)(2)(3)());
module.exports = { liftg, mul };
