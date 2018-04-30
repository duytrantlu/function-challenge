const arrayg = (value) => {
  const arr = [];
  if (value === undefined) {
    return arr;
  }
  arr.push(value);
  return function more(next) {
    if (next === undefined) {
      return arr;
    }
    arr.push(next);
    return more;
  };
};
console.log(arrayg(3)(2)());
module.exports = arrayg;
