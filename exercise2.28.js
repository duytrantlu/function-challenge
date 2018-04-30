const addg = (value) => {
  if (value === undefined) {
    return value;
  }
  return function (next) {
    if (next === undefined) {
      return value;
    }
    return addg(value + next);
  };
};
console.log(addg(2)(2)(4)());
module.exports = addg;
